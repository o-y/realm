import TileObject from '@/base/tile/TileObject';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import CommonTileProvider from '@/base/tile/providers/CommonTileProvider';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import TileConstants from '@/base/tile/util/TileConstants';

export default class PhaserWorldGen {
  private scene: Phaser.Scene;
  private game: Phaser.Game;

  constructor(scene: Phaser.Scene, game: Phaser.Game) {
    this.scene = scene;
    this.game = game;
  }

  public async generateMap(seed: Number) {
    //-> 48 tiles = screen width
    //-> 96 * 96 = 2d matrix
    //-> JavaScript Number = 64 bits
    //-> 64 * 96 * 96 = 548kb of memory for a single grid

    const worldmap: Array<Array<TileObject<TileUnion>>> = [
      []
    ]

    const offsetWidth: number = TileConstants.TILE_WIDTH / 4;
    const offsetHeight: number = TileConstants.TILE_HEIGHT / 4;

    for (let i = 0; i < worldmap.length; i++){
      for (let k = 0; k < worldmap[i].length; k++){
        let value: TileObject<TileUnion> = worldmap[i][k];
        this.scene.add.image(offsetWidth + (k * TileConstants.TILE_WIDTH / 1.87), offsetHeight + (i * TileConstants.TILE_HEIGHT / 1.87), value.imageHash)
      }
    }
  }
}