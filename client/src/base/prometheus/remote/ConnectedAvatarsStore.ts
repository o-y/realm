import {Peer} from '@/base/supabase/peer/Peer';
import {Deprecated} from '@/util/annotations/Deprecated';

@Deprecated
class ConnectedAvatarsStore {
  private static instance: ConnectedAvatarsStore;
  private connectedClients: Map<number, Peer> = new Map<number, Peer>();

  public static getInstance(): ConnectedAvatarsStore {
    if (ConnectedAvatarsStore.instance === undefined) {
      ConnectedAvatarsStore.instance = new ConnectedAvatarsStore();
    }

    return ConnectedAvatarsStore.instance;
  }

  public getConnectedClientMap(): Map<number, Peer> {
    return this.connectedClients;
  }
}