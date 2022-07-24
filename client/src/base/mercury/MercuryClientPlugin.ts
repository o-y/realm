import PhaserWorldGenScene from '@/base/scenes/PhaserWorldGenScene';
import {NyxScenePlugin} from '@/framework/nyx/NyxScenePlugin';
import {Peer} from '@/base/supabase/peer/Peer';
import {RemoteAvatarRender} from '@/base/prometheus/remote/RemoteAvatarRender';
import {Avatar} from '@/base/prometheus/data/Avatar';
import {PeerConnectionManager} from '@/base/supabase/peer/PeerConnectionManager';

export class MercuryClientPlugin extends NyxScenePlugin<PhaserWorldGenScene> {
  private remoteAvatarsSparseArray: Array<RemoteAvatarRender> = new Array<RemoteAvatarRender>();

  public initiatePeerConnectionManager() {
    const remoteAvatarsSparseArray: Array<RemoteAvatarRender> = this.remoteAvatarsSparseArray;
    const scene: PhaserWorldGenScene = this.getNyxScene();

    PeerConnectionManager.getInstance().registerPeerConnectionListener( {
      onPeerConnected(peer: Peer) {
        if (peer.isLocalClient()) return;

        remoteAvatarsSparseArray[peer.getRealmPeerId()] = RemoteAvatarRender
            .with(
                Avatar.of(peer).updateTileCoordinate(peer.getPosition()),
                scene,
                RemoteAvatarRender
            ).moveToCoordinate(peer.getPosition())
      },

      onPeerStateUpdated(previousState: Peer, newState: Peer) {
        if (newState.isLocalClient() || previousState.isLocalClient()) return;

        console.log("AvatarUpdated: ", newState.getRealmPeerId())
        remoteAvatarsSparseArray[newState.getRealmPeerId()].moveToCoordinate(newState.getPosition())
      },

      onPeerDisconnected(peer: Peer) {
        remoteAvatarsSparseArray[peer.getRealmPeerId()].getAvatarObjectRender().getAllPhysicalObjects().forEach(
            object => object.destroy(true)
        )
        delete remoteAvatarsSparseArray[peer.getRealmPeerId()]
      }
    })
  }
}