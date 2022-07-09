import PhaserWorldGen from '@/base/gen/PhaserWorldGen';
import AsyncPhaserScene from '@/base/scenes/internal/AsyncPhaserScene';
import TileUtil, {TileWrapper} from '@/base/tile/internal/TileUtil';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import DistinctTileProvider from '@/base/tile/DistinctTileProvider';
import GenericProvider from '@/base/tile/providers/GenericProvider';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';

export default class PhaserWorldGenScene extends AsyncPhaserScene {
  async createPhaser() {
    return await new PhaserWorldGen(this, this.game).generateMap(Math.random());
  }

  async preloadPhaser() {
    const preloadTerrainAssets: Array<TileWrapper<TileUnion>> = [
      ...TileUtil.provideEnumList<NatureTile>(
          Object.entries(NatureTile),
          DistinctTileProvider.with(GenericProvider.provideNatureProvider())
      ),
      ...TileUtil.provideEnumList<NatureSupportTile>(
          Object.entries(NatureSupportTile),
          DistinctTileProvider.with(GenericProvider.provideNatureSupportProvider())
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