import TileUtil, {TileWrapper} from '@/base/tile/internal/TileUtil';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import NyxScene from '@/framework/nyx/NyxScene';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import DistinctTileProvider from '@/base/tile/providers/helpers/DistinctTileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';
import {RealmGenerationStrategy, RealmGeneratorProvider} from '@/base/gen/realms/RealmGeneratorProvider';
import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {Avatar} from '@/base/prometheus/data/Avatar';
import {LayerManager} from '@/base/layer/LayerManager';
import {AvatarRender} from '@/base/prometheus/local/AvatarRender';
import {AvatarPlugin} from '@/base/prometheus/internal/AvatarPlugin';
import TileObject from '@/base/tile/TileObject';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {Client} from '@/base/prometheus/local/Client';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {SpriteManager} from '@/base/prometheus/sprite/manager/SpriteManager';
import {LyraSprite} from '@/base/prometheus/sprite/data/LyraSprite';
import {SupabaseSingleton} from '@/base/supabase/SupabaseSingleton';
import {PeerState} from '@/base/supabase/peer/PeerState';
import {PeerConnectionManager} from '@/base/supabase/peer/PeerConnectionManager';
import {Peer} from '@/base/supabase/peer/Peer';

export default class PhaserWorldGenScene extends NyxScene {
  private avatarRenderer!: AvatarRender;
  private realmGenerator!: RealmGenerator;
  private supabaseSingleton: SupabaseSingleton = SupabaseSingleton.getInstance();
  private clientPlugin: PeerState = this.supabaseSingleton.getPeerState();

  private creatingScene: boolean = true;

  async createPhaser() {
    const peerConnectionManager: PeerConnectionManager = PeerConnectionManager.getInstance();
    const localClient = await peerConnectionManager.getLocalPeer()

    const localAvatar = Avatar
        .of(localClient)
        .updateTileCoordinate(localClient.getPosition())

    this.avatarRenderer = await AvatarRender
        .with(localAvatar, this, AvatarRender)
        .startRender();

    this.realmGenerator = RealmGeneratorProvider
        .withGenerationStrategy(RealmGenerationStrategy.GAIA)
        .getGenerator(this)
        .setAvatar(localAvatar)
        .setSeed(9992131)
        .setLayerManager(LayerManager.forScene(this));

    await this.realmGenerator.loadGenerationAt(
        /* current = */ localClient.getPosition(),
        /* next = */ localClient.getPosition()
    )

    peerConnectionManager.registerPeerConnectionListener( {
      onPeerConnected(peer: Peer) {
        console.log("Peer connected: ", peer);
      },

      onPeerStateUpdated(previousState: Peer, newState: Peer) {
        console.log("Peer updated: ", newState);
      },

      onPeerDisconnected(peer: Peer) {
        console.log("Peer disconnected: ", peer);
      }
    })

    this.creatingScene = false;
  }

  updateOnCreated() {
    if (this.creatingScene) return;
    this.avatarRenderer.awaitInputAndGenerateTerrain(this.realmGenerator);
  }

  async preloadPhaser() {
    const preloadTerrainAssets: Array<TileWrapper<TileUnion>> = [
      ...TileUtil.provideEnumList<NatureTile>(
          Object.entries(NatureTile),
          DistinctTileProvider.with(CommonTileProvider.provideNatureProvider())
      ),
      ...TileUtil.provideEnumList<NatureSupportTile>(
          Object.entries(NatureSupportTile),
          DistinctTileProvider.with(CommonTileProvider.provideNatureSupportProvider())
      )
    ]

    const requests: Array<Promise<void>> = preloadTerrainAssets.map((tile: TileWrapper<TileUnion>) => this.loadBase64Image(
        tile.tileObject.imageHash,
        tile.tileObject.getAndCacheBase64EncodedFile()
    ));

    SpriteManager.provideSprites().forEach(spriteData => {
      this.load.spritesheet(
          spriteData.spriteHash,
          spriteData.provideAssetPath(),
          {
            frameWidth: spriteData.provideFrameWidth(),
            frameHeight: spriteData.provideFrameHeight(),
          }
      )
    })

    await Promise.all(requests);
  }

  private loadBase64Image(key: string, data: string): Promise<void> {
    return new Promise<void>((resolve) => {
      this.textures.once(Phaser.Textures.Events.ADD, () => {
        resolve();
      });
      this.textures.addBase64(key, data);
    });
  }
}