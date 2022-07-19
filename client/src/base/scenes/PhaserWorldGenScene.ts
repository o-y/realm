import TileUtil, {TileWrapper} from '@/base/tile/internal/TileUtil';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import NyxScene from '@/framework/nyx/NyxScene';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import DistinctTileProvider from '@/base/tile/providers/helpers/DistinctTileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';
import {RealmGenerationStrategy, RealmGeneratorProvider} from '@/base/gen/realms/RealmGeneratorProvider';
import {AvatarManager} from '@/base/prometheus/AvatarManager';
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

export default class PhaserWorldGenScene extends NyxScene {
  private avatarRenderer!: AvatarRender;
  private realmGenerator!: RealmGenerator;

  async createPhaser() {
    const localAvatar: Avatar = new AvatarManager()
        .fetchOrCreateLocalAvatar()
        .updateTileCoordinate(Coordinate.SENTINEL)

    this.avatarRenderer = await AvatarRender
        .with(localAvatar, this, AvatarRender)
        .startRender();

    const layerManager = LayerManager.forScene(this);

    this.realmGenerator = RealmGeneratorProvider
        .withGenerationStrategy(RealmGenerationStrategy.GAIA)
        .getGenerator(this)
        .setAvatar(localAvatar)
        .setSeed(9992131)
        .setLayerManager(layerManager);

    await this.realmGenerator.loadGenerationAt(
        /* current = */ Coordinate.of(0, 0),
        /* next = */ Coordinate.of(0, 0)
    )
  }


  private lastX = 0;
  private lastY = 0;

  updateOnCreated() {
    const avatarObject: Phaser.Types.Physics.Arcade.ImageWithDynamicBody = this.avatarRenderer.getAvatarObject();
    const avatar: Avatar = this.avatarRenderer.getAvatar();

    const worldToTileConversionCoordinate = CoordinateUtil.convertWorldSpaceToTileCoordinate(
        avatarObject.x,
        avatarObject.y
    )

    if (worldToTileConversionCoordinate.getY() != this.lastY || worldToTileConversionCoordinate.getX() != this.lastX){
      this.realmGenerator.loadGenerationAt(
          /* current = */ Coordinate.of(this.lastX, this.lastY),
          /* next = */ Coordinate.of(worldToTileConversionCoordinate.getX(), worldToTileConversionCoordinate.getY())
      )

      this.lastY = worldToTileConversionCoordinate.getY();
      this.lastX = worldToTileConversionCoordinate.getX();
    }
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