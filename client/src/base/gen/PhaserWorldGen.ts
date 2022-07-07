import TileObject from '@/base/tile/TileObject';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import CommonTileProvider from '@/base/tile/providers/CommonTileProvider';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import TileConstants from '@/base/tile/util/TileConstants';
import WorldConstants from '@/base/gen/WorldConstants';
import Util from '@/util/Util';

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

    const worldmap: Array<Array<TileObject<TileUnion>>> = []

    for (let i = 0; i < WorldConstants.WORLD_VIEWPORT_HEIGHT; i++){
      worldmap[i] = []
      for (let k = 0; k < WorldConstants.WORLD_VIEWPORT_WIDTH; k++){
        worldmap[i].push(Util.randomFromArray(TileConstants.GRASS_ARRAY))
      }
    }

    const offsetWidth: number = TileConstants.TILE_WIDTH / 4;
    const offsetHeight: number = TileConstants.TILE_HEIGHT / 4;

    for (let i: number = 0; i < worldmap.length; i++){
      for (let k: number = 0; k < worldmap[i].length; k++){
        let value: TileObject<TileUnion> = worldmap[i][k];
        this.scene.add.image(
            offsetWidth + (k * TileConstants.TILE_WIDTH /
                (i % 8 == 0 ? 1.87 : 1.87)),
            offsetHeight + (i * TileConstants.TILE_HEIGHT /
                (k % 8 == 0 ? 1.87 : 1.87)),
            value.imageHash)
      }
    }
  }
}