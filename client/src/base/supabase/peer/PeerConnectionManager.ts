import {Peer} from '@/base/supabase/peer/Peer';
import {SupabaseSingleton} from '@/base/supabase/SupabaseSingleton';
import {PeerState} from '@/base/supabase/peer/PeerState';
import {Internal} from '@/util/enums/Internal';
import {DatabasePlugin} from '@/base/supabase/database/DatabasePlugin';
import {DatabaseTables} from '@/base/supabase/database/DatabaseTables';
import {SupabaseClient} from '@supabase/supabase-js';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {LocalPeer} from '@/base/supabase/peer/LocalPeer';

export class PeerConnectionManager {
  private static instance: PeerConnectionManager;

  private readonly peerState: PeerState;
  private readonly databasePlugin: DatabasePlugin;
  private readonly supabaseClient: SupabaseClient;

  private readonly connectedPeersSparseArray: Array<Peer> = new Array<Peer>();
  private readonly connectedPeersAtLaunch: Array<[Peer, boolean]> = new Array<[Peer, boolean]>();

  private readonly peerMutationListeners: Set<PeerConnectionListener> = new Set<PeerConnectionListener>();

  public static getInstance(): PeerConnectionManager {
    if (PeerConnectionManager.instance === undefined) {
      PeerConnectionManager.instance = new PeerConnectionManager();
    }

    return PeerConnectionManager.instance;
  }

  private constructor() {
    if (!SupabaseSingleton.getInstance().getAuthState().isAuthenticated()) {
      throw new Error("Cannot retrieve #PeerConnectionManager if the client is unauthenticated!");
    }

    this.peerState = SupabaseSingleton.getInstance().getPeerState();
    this.databasePlugin = SupabaseSingleton.getInstance().getDatabasePlugin();
    this.supabaseClient = SupabaseSingleton.getInstance().getInternalSupabaseClient();


    this.subscribeToClientsDatabaseMutations();
  }

  public async getLocalPeer(): Promise<LocalPeer> {
    return await this.peerState.getLocalClient(Internal.REALM_INTERNAL_ONLY);
  }

  public registerPeerConnectionListener(peerConnectionListener: PeerConnectionListener, backfill: boolean = true) {
    this.peerMutationListeners.add(peerConnectionListener);

    if (backfill) {
      this.connectedPeersAtLaunch.forEach(peerMap => {
        const peer: Peer = peerMap[0];
        const isExpunged: boolean = peerMap[1];

        if (!isExpunged) peerConnectionListener.onPeerConnected(peer);
      })
    }
  }

  private async subscribeToClientsDatabaseMutations() {
    const localPeerId = (await this.getLocalPeer()).getRealmPeerId();

    const onInsertData = (structuredData: SupabasePeerStructure) => {
      const connectedPeer = new Peer(
          structuredData.realm_avatar_id,
          Coordinate.of(structuredData.tile_coordinate_x, structuredData.tile_coordinate_y),
          structuredData.email,
          structuredData.layer,
          structuredData.realm_avatar_id === localPeerId
      )

      this.connectedPeersSparseArray[connectedPeer.getRealmPeerId()] = connectedPeer;

      this.peerMutationListeners.forEach(listener => listener.onPeerConnected(connectedPeer))
    }

    const onUpdateData = (oldData: SupabasePeerStructure, newData: SupabasePeerStructure) => {
      const connectedPeer = this.connectedPeersSparseArray[oldData.realm_avatar_id];

      const previousState: Peer = new Peer(
          connectedPeer.getRealmPeerId(),
          connectedPeer.getPosition(),
          connectedPeer.getEmail(Internal.REALM_INTERNAL_ONLY),
          connectedPeer.getLayer(),
          connectedPeer.isLocalClient()
      )

      connectedPeer.updatePosition(Coordinate.of(newData.tile_coordinate_x, newData.tile_coordinate_y))
      connectedPeer.updateLayer(newData.layer)

      this.peerMutationListeners.forEach(listener => listener.onPeerStateUpdated(previousState, connectedPeer))
    }

    const onDeleteData = (structuredData: SupabasePeerStructure) => {
      const connectedPeer = this.connectedPeersSparseArray[structuredData.realm_avatar_id];
      delete this.connectedPeersSparseArray[structuredData.realm_avatar_id];

      this.peerMutationListeners.forEach(listener => listener.onPeerDisconnected(connectedPeer))
    }

    await this.updateConnectedClientsMap(localPeerId);

    this.supabaseClient
        .from(DatabaseTables.CLIENTS.DATABASE_NAME)
        .on("INSERT", payload =>
            onInsertData(PeerConnectionManager.transformPayloadToStructuredData(payload.new))
        )
        .on("UPDATE", payload =>
          onUpdateData(
              PeerConnectionManager.transformPayloadToStructuredData(payload.old),
              PeerConnectionManager.transformPayloadToStructuredData(payload.new)
          )
        )
        .on("DELETE", payload =>
            onDeleteData(PeerConnectionManager.transformPayloadToStructuredData(payload.new))
        )
        .subscribe((data: unknown) => {
          console.log("[PeerConnectionManager]: Subscription State: ", data)
        })
  }

  private async updateConnectedClientsMap(localPeerId: number): Promise<void> {
    const { data, error } = await this.supabaseClient
        .from(DatabaseTables.CLIENTS.DATABASE_NAME)
        .select()

    if (data && data.length > 0) {
      data.forEach(userData => {
        const userClient = new Peer(
            userData[DatabaseTables.CLIENTS.REALM_AVATAR_ID],
            Coordinate.of(
                parseInt(userData[DatabaseTables.CLIENTS.COORDINATE_X]),
                parseInt(userData[DatabaseTables.CLIENTS.COORDINATE_Y])
            ),
            userData[DatabaseTables.CLIENTS.EMAIL],
            userData[DatabaseTables.CLIENTS.LAYER],
            userData[DatabaseTables.CLIENTS.REALM_AVATAR_ID] === localPeerId
        )

        this.connectedPeersAtLaunch[userClient.getRealmPeerId()] = [userClient, false]
        this.connectedPeersSparseArray[userClient.getRealmPeerId()] = userClient;

        if (this.connectedPeersAtLaunch.length > 0) {
          this.peerMutationListeners.forEach(callback => {
            callback.onPeerConnected(userClient);
            this.connectedPeersAtLaunch[userClient.getRealmPeerId()][1] = true
          })
        }
      })
    }
  }

  private static transformPayloadToStructuredData(data: any): SupabasePeerStructure {
    const CLIENTS_DB = DatabaseTables.CLIENTS;

    return {
      associated_realm_id: data[CLIENTS_DB.REALM_ID],
      authentication_user_id: data[CLIENTS_DB.AUTHENTICATION_USER_ID],
      realm_avatar_id: data[CLIENTS_DB.REALM_AVATAR_ID],
      email: data[CLIENTS_DB.EMAIL],
      last_login: data[CLIENTS_DB.LAST_LOGIN],
      layer: data[CLIENTS_DB.LAYER],
      tile_coordinate_x: data[CLIENTS_DB.COORDINATE_X],
      tile_coordinate_y: data[CLIENTS_DB.COORDINATE_Y],
    }
  }
}

export interface PeerConnectionListener {
  onPeerConnected(peer: Peer): void;

  onPeerDisconnected(peer: Peer): void;

  onPeerStateUpdated(previousState: Peer, newState: Peer): void;
}

export interface SupabasePeerStructure {
  associated_realm_id: number
  authentication_user_id: string
  email: string
  last_login: string
  layer: number
  realm_avatar_id: number
  tile_coordinate_x: number
  tile_coordinate_y: number
}