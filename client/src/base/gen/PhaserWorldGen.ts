import TileObject from '@/base/tile/TileObject';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import TileConstants from '@/base/tile/util/TileConstants';
import WorldConstants from '@/base/gen/WorldConstants';
import {PerlinNoise} from '@/base/gen/perlin/PerlinNoise';
import RealmTileGen from '@/base/gen/tilegen/RealmTileGen';

export default class PhaserWorldGen {
  private scene: Phaser.Scene;
  private game: Phaser.Game;

  constructor(scene: Phaser.Scene, game: Phaser.Game) {
    this.scene = scene;
    this.game = game;
  }

  public async generateMap(seed: number) {
    //-> 48 tiles = screen width
    //-> 96 * 96 = 2d matrix
    //-> JavaScript Number = 64 bits
    //-> 64 * 96 * 96 = 548kb of memory for a single grid
    const worldmap: Array<Array<TileObject<TileUnion>>> = []

    const perlinNoise: PerlinNoise = PerlinNoise
        .create()
        .withSeed(seed)

    for (let i = 0; i < WorldConstants.WORLD_VIEWPORT_HEIGHT; i++){
      worldmap[i] = []
      for (let k = 0; k < WorldConstants.WORLD_VIEWPORT_WIDTH; k++){

        const noise: number = Math.min(
            Math.max(
                Math.abs(perlinNoise.generatePerlin2(i / 100, k / 100)) * 256,
                RealmTileGen.MIN_PERLIN_NOISE),
            RealmTileGen.MAX_PERLIN_NOISE)

        worldmap[i].push(
            RealmTileGen
                .selectTileArrayWithNoise(noise)
                .selectRandomTile()
        )
      }
    }

    const offsetWidth: number = TileConstants.TILE_WIDTH / 2;
    const offsetHeight: number = TileConstants.TILE_HEIGHT / 2;

    for (let i: number = 0; i < worldmap.length; i++){
      for (let k: number = 0; k < worldmap[i].length; k++){
        const tileObject: TileObject<TileUnion> = worldmap[i][k];
        const image: Phaser.GameObjects.Image = this.scene.add.image(
            offsetWidth + (k * TileConstants.TILE_WIDTH),
            offsetHeight + (i * TileConstants.TILE_WIDTH),
            tileObject.imageHash);
      }
    }
  }
}