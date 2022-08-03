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
import {LocalAvatarRender} from '@/base/prometheus/local/LocalAvatarRender';
import {AvatarPlugin} from '@/base/prometheus/internal/AvatarPlugin';
import TileObject from '@/base/tile/TileObject';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {Client} from '@/base/prometheus/local/Client';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {SpriteManager} from '@/base/prometheus/sprite/manager/SpriteManager';
import {SupabaseSingleton} from '@/base/supabase/SupabaseSingleton';
import {PeerState} from '@/base/supabase/peer/PeerState';
import {PeerConnectionManager} from '@/base/supabase/peer/PeerConnectionManager';
import {Peer} from '@/base/supabase/peer/Peer';
import {RemoteAvatarRender} from '@/base/prometheus/remote/RemoteAvatarRender';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import {MercuryClientPlugin} from '@/base/mercury/MercuryClientPlugin';
import {BridgeTile} from '@/base/tile/providers/BridgeTileProvider';
import {MinosMapCreatorPlugin} from '@/base/minos/land/map/MinosMapCreatorPlugin';
import {MinosOfficeRoomMap} from '@/base/minos/land/map/MinosOfficeRoomMap';

export default class PhaserWorldGenScene extends NyxScene {
  private avatarRenderer!: LocalAvatarRender;
  private realmGenerator!: RealmGenerator;

  async createPhaser() {
    const peerConnectionManager: PeerConnectionManager = PeerConnectionManager.getInstance();
    const layerManager: LayerManager = LayerManager.forScene(this);

    const localClient = await peerConnectionManager.getLocalPeer();
    const localAvatar = Avatar
        .of(localClient)
        .updateTileCoordinate(localClient.getPosition());

    this.avatarRenderer = LocalAvatarRender
        .with(localAvatar, this, LocalAvatarRender)
        .setCollisionLayer(layerManager.getBuildingLayer())
        .setCollisionLayer(layerManager.getPlayersLayer());

    this.realmGenerator = RealmGeneratorProvider
        .withGenerationStrategy(RealmGenerationStrategy.GAIA)
        .getGenerator(this)
        .setAvatar(localAvatar)
        .setSeed(0.7666644406451248)
        .setLayerManager(layerManager);

    await this.realmGenerator.loadGenerationAt(
        /* current = */ localClient.getPosition(),
        /* next = */ localClient.getPosition()
    )

    MercuryClientPlugin.withScene<this, MercuryClientPlugin>(this, MercuryClientPlugin)
        .initiatePeerConnectionManager();

    MinosMapCreatorPlugin.withScene<this, MinosMapCreatorPlugin>(this, MinosMapCreatorPlugin)
        .createMapStructures();
  }

  updateOnCreated() {
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
      ),
      ...TileUtil.provideEnumList<RubyTownTile>(
          Object.entries(RubyTownTile),
          DistinctTileProvider.with(CommonTileProvider.provideRubyTownProvider())
      ),
      ...TileUtil.provideEnumList<BridgeTile>(
          Object.entries(BridgeTile),
          DistinctTileProvider.with(CommonTileProvider.provideBridgeProvider())
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

    this.load.image(MinosOfficeRoomMap.getKey(), MinosOfficeRoomMap.getAsset());

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