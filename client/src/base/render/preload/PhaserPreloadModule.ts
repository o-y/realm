import TileUtil, {TileWrapper} from '@/base/tile/internal/TileUtil';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import DistinctTileProvider from '@/base/tile/DistinctTileProvider';
import GenericProvider from '@/base/tile/providers/GenericProvider';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import {PhaserBootstrap} from '@/base/render/internal/PhaserBootstrap';

export default class PhaserPreloadModule implements PhaserBootstrap {
  private scene: Phaser.Scene;
  private game: Phaser.Game;

  constructor(scene: Phaser.Scene, game: Phaser.Game) {
    this.scene = scene;
    this.game = game;
  }

  public async execute() {
    const tileMatrix: Array<Array<TileWrapper<TileUnion>>> = [
      TileUtil.provideEnumList<NatureTile>(
          Object.entries(NatureTile),
          DistinctTileProvider.with(GenericProvider.provideNatureProvider())
      ),
      TileUtil.provideEnumList<NatureSupportTile>(
          Object.entries(NatureSupportTile),
          DistinctTileProvider.with(GenericProvider.provideNatureSupportProvider())
      )
    ]

    const tileArray1D: Array<TileWrapper<TileUnion>> = tileMatrix.flat();
    const requests: Array<Promise<void>> = tileArray1D.map((tile: TileWrapper<TileUnion>) => this.loadBase64Image(
        tile.tileObject.imageHash,
        tile.tileObject.getAndCacheBase64EncodedFile()
    ));

    await Promise.all(requests);
  }

  private loadBase64Image(key: string, data: string): Promise<void> {
    return new Promise<void>((resolve) => {
      this.scene.textures.once(Phaser.Textures.Events.ADD, () => {
        resolve();
      });
      this.scene.textures.addBase64(key, data);
    });
  }
}