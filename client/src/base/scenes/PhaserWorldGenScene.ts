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
import {AvatarRender} from '@/base/prometheus/AvatarRender';

export default class PhaserWorldGenScene extends NyxScene {
  async createPhaser() {
    const layerManager = LayerManager.forScene(this);
    const localAvatar: Avatar = new AvatarManager()
        .fetchOrCreateLocalAvatar()
        .updatePreciseCoordinate(DecimalCoordinate.of(0, 0))

    AvatarRender
        .with(localAvatar, this)
        .startNavigationLoop();

    await RealmGeneratorProvider
        .withGenerationStrategy(RealmGenerationStrategy.GAIA)
        .getGenerator(this)
        .setAvatar(localAvatar)
        .setSeed(1337)
        .setLayerManager(layerManager)
        .generateMap()
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