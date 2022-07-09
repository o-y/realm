import PhaserWorldGen from '@/base/gen/PhaserWorldGen';
import TileUtil, {TileWrapper} from '@/base/tile/internal/TileUtil';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import NyxScene from '@/framework/nyx/NyxScene';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import DistinctTileProvider from '@/base/tile/providers/helpers/DistinctTileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export default class PhaserWorldGenScene extends NyxScene {
  async createPhaser() {
    return await new PhaserWorldGen(this, this.game).generateMap(Math.random());
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