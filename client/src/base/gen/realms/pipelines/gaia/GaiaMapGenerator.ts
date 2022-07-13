import TileObject from '@/base/tile/TileObject';
import {PerlinNoise} from '@/base/gen/perlin/PerlinNoise';
import RealmTileGenUtil from '@/base/gen/tilegen/RealmTileGenUtil';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import "@/framework/nyx/extensions/NyxGameObjectsExtensions"
import {RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {Avatar, Client} from '@/base/prometheus/Avatar';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';

export class GaiaMapGenerator extends RealmGenerator {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super()

    this.scene = scene;
  }

  public async generateMap(seed: number, avatar: Avatar) {

    const avatarCartesianBound: CartesianBound = avatar.computeViewPortBoundary();
    console.log("cartesianBound: ", avatarCartesianBound)
    console.log("Width: ", avatarCartesianBound.getWidth())
    console.log("Height: ", avatarCartesianBound.getHeight())
    console.log("Midpoint: ", avatarCartesianBound.getMidPoint())

    avatarCartesianBound.toDesmosDebugView()

    for (let i = avatarCartesianBound.getTopLeft().getY(); i >= avatarCartesianBound.getBottomLeft().getY(); i--){
      for (let k = avatarCartesianBound.getTopLeft().getX(); k < avatarCartesianBound.getTopLeft().getX() + avatarCartesianBound.getWidth(); k++) {
        console.log(i, k)
      }
    }


    //-> 48 tiles = screen width
    //-> 96 * 96 = 2d matrix
    //-> JavaScript Number = 64 bits
    //-> 64 * 96 * 96 = 548kb of memory for a single grid
    const worldmap: Array<Array<TileObject<TileUnion>>> = []

    const perlinNoise: PerlinNoise = PerlinNoise
        .create()
        .withSeed(seed)

    const generationOffsetForDebugging = 0;

    for (let i = 0; i < Client.WORLD_VIEWPORT_HEIGHT; i++){
      worldmap[i] = []
      for (let k = 0; k < Client.WORLD_VIEWPORT_WIDTH; k++){

        let x = (i + generationOffsetForDebugging) / 100;
        let y = (k + generationOffsetForDebugging) / 100;

        const noise: number = Math.min(
            Math.max(
                Math.abs(perlinNoise.generatePerlin2(x, y)) * 256,
                RealmTileGenUtil.MIN_PERLIN_NOISE),
            RealmTileGenUtil.MAX_PERLIN_NOISE)

        worldmap[i].push(
            RealmTileGenUtil
                .selectTileArrayWithNoise(noise)
                .selectRandomTile()
        )
      }
    }

    const offsetWidth: number = TileObject.TILE_SIZE / 2;
    const offsetHeight: number = TileObject.TILE_SIZE / 2;

    for (let i: number = 0; i < worldmap.length; i++){
      for (let k: number = 0; k < worldmap[i].length; k++){
        const tileObject: TileObject<TileUnion> = worldmap[i][k];
        this.scene.add.nyxTileObjectImage(
            offsetWidth + (k * TileObject.TILE_SIZE),
            offsetHeight + (i * TileObject.TILE_SIZE),
            tileObject);
      }
    }
  }
}