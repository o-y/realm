import {NyxLayer} from '@/framework/nyx/NyxLayer';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import TileObject from '@/base/tile/TileObject';
import {MathUtil} from '@/util/MathUtil';
import {PerlinNoise} from '@/base/gen/perlin/PerlinNoise';
import RealmTileGenUtil from '@/base/gen/tilegen/RealmTileGenUtil';
import {Util} from '@/util/Util';

export class TerrainManager {
  private layer: NyxLayer;
  private readonly tileSparseArray: Array<Phaser.GameObjects.Image | null> = new Array<Phaser.GameObjects.Image | null>();
  private noiseMap: Map<string, number> = new Map<string, number>();

  private constructor(layer: NyxLayer) {
    this.layer = layer;
  }

  public static withLayer(layer: NyxLayer) {
    return new TerrainManager(layer);
  }

  public loadTileSet(coordinateSet: Set<Coordinate>) {
    const randomColour = MathUtil.randomHex();

    coordinateSet.forEach(coordinate => {

      const perlinNoise: PerlinNoise = PerlinNoise
          .create()
          .withSeed(1337)

      const noise: number = Math.min(
          Math.max(Math.abs(perlinNoise.generatePerlin2(coordinate.getX() / 100, coordinate.getY() / 100)) * 256,
            RealmTileGenUtil.MIN_PERLIN_NOISE),
          RealmTileGenUtil.MAX_PERLIN_NOISE
      );

      const clampedRandom: number = Util.getOrSet(
          this.noiseMap,
          coordinate.toString(),
          Math.random())

      const image = this.layer.scene.add.nyxTileObjectImage(
          (coordinate.getX() * TileObject.TILE_SIZE),
          (coordinate.getY() * TileObject.TILE_SIZE),
          RealmTileGenUtil
              .selectTileArrayWithNoise(noise, clampedRandom)
              .selectRandomTile(clampedRandom)
      );

      // const image = this.layer.scene.add.rectangle(
      //         (coordinate.getX() * TileObject.TILE_SIZE),
      //         (coordinate.getY() * TileObject.TILE_SIZE),
      //         TileObject.TILE_SIZE,
      //         TileObject.TILE_SIZE,
      //         randomColour
      // )

      this.tileSparseArray[coordinate.toCantorsPairing()] = image;
    })
  }

  public unloadTileSet(coordinateSet: Set<Coordinate>) {
    coordinateSet.forEach(coordinate => {
      const ref = this.tileSparseArray[coordinate.toCantorsPairing()];

      if (ref != null){
        ref.destroy(true);
        this.tileSparseArray[coordinate.toCantorsPairing()] = null;
      }
    });
  }
}