import {SupabasePlugin} from '@/base/supabase/internal/SupabasePlugin';
import {AuthenticationData, AuthState} from '@/base/supabase/auth/AuthState';
import {Util} from '@/util/Util';
import {Peer} from '@/base/supabase/peer/Peer';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {DatabaseTables} from '@/base/supabase/database/DatabaseTables';
import {DatabasePlugin} from '@/base/supabase/database/DatabasePlugin';
import {Internal} from '@/util/enums/Internal';
import {LocalPeer} from '@/base/supabase/peer/LocalPeer';
import {SupabasePeerStructure} from '@/base/supabase/peer/PeerConnectionManager';

export class PeerState extends SupabasePlugin {
  // Prefer PeerConnectionManager#getLocalPeer
  public async getLocalClient(internal: Internal): Promise<LocalPeer> {
    Util.assert(super.getSingleton().getAuthState().isAuthenticated(), "Cannot get LocalClient is user is not authenticated");

    const authPlugin: AuthState = super.getSingleton().getAuthState()
    const databasePlugin: DatabasePlugin = super.getSingleton().getDatabasePlugin()

    const authenticationData: AuthenticationData = (await authPlugin.getAuthenticationData())!;

    const realmAvatarId = await databasePlugin.convertAuthenticationIdToRealmPeerId(authenticationData.getAuthenticationUserId());

    return this.getLocalPeerStateFor(
        Internal.REALM_INTERNAL_ONLY,
        await databasePlugin.convertAuthenticationIdToRealmPeerId(authenticationData.getAuthenticationUserId())
    )
  }

  public async getPeerStateFor(internal: Internal, realmAvatarId: number): Promise<Peer> {
    const userData: SupabasePeerStructure = await this.queryPeerStateFor(realmAvatarId);

    return new Peer(
        userData[DatabaseTables.CLIENTS.REALM_AVATAR_ID],
        Coordinate.of(
            userData[DatabaseTables.CLIENTS.COORDINATE_X],
            userData[DatabaseTables.CLIENTS.COORDINATE_Y]
        ),
        userData[DatabaseTables.CLIENTS.EMAIL],
        userData[DatabaseTables.CLIENTS.LAYER],
        false
    )
  }

  private async getLocalPeerStateFor(internal: Internal, realmAvatarId: number): Promise<LocalPeer> {
    const userData: SupabasePeerStructure = await this.queryPeerStateFor(realmAvatarId);

    return new LocalPeer(
        userData[DatabaseTables.CLIENTS.REALM_AVATAR_ID],
        Coordinate.of(
            userData[DatabaseTables.CLIENTS.COORDINATE_X],
            userData[DatabaseTables.CLIENTS.COORDINATE_Y]
        ),
        userData[DatabaseTables.CLIENTS.EMAIL],
        userData[DatabaseTables.CLIENTS.LAYER],
        true
    )
  }

  private async queryPeerStateFor(realmAvatarId: number): Promise<SupabasePeerStructure> {
    const { data, error } = await super.getInternalSuperbaseClient()
        .from(DatabaseTables.CLIENTS.DATABASE_NAME)
        .select()
        .eq(DatabaseTables.CLIENTS.REALM_AVATAR_ID, realmAvatarId);

    if (!data || data?.length === 0) {
      throw new Error(`No row exists in ${DatabaseTables.CLIENTS.DATABASE_NAME} where ${DatabaseTables.CLIENTS.REALM_AVATAR_ID}=${realmAvatarId}.`)
    }

    return data[0];
  }
}