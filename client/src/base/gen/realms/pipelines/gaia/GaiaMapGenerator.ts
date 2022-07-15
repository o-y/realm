import TileObject from '@/base/tile/TileObject';
import {PerlinNoise} from '@/base/gen/perlin/PerlinNoise';
import RealmTileGenUtil from '@/base/gen/tilegen/RealmTileGenUtil';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import "@/framework/nyx/extensions/NyxGameObjectsExtensions"
import {RealmGenerationData, RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {DesmosVisualiser} from '@/framework/desmos/DesmosVisualiser';
import {Avatar} from '@/base/prometheus/data/Avatar';
import {Util} from '@/util/Util';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';

export class GaiaMapGenerator extends RealmGenerator {
  private scene: Phaser.Scene;
  private noiseMap: Map<string, number> = new Map<string, number>();
  private visualiser: DesmosVisualiser = DesmosVisualiser.getInstance();

  constructor(scene: Phaser.Scene) {
    super()

    this.scene = scene;
  }

  public async generateMapImpl() {
    const avatar: Avatar = this.getRealmGenerationData().getAvatar()

    this.generateMapGivenCartesianBound(avatar.computeViewPortBoundary())

    avatar.registerAvatarCoordinateUpdateCallback(() => {
      this.generateMapGivenCartesianBound(avatar.computeViewPortBoundary())
    })
  }

  private generateMapGivenCartesianBound(avatarCartesianBound: CartesianBound) {
    //-> 48 tiles = screen width
    //-> 96 * 96 = 2d matrix
    //-> JavaScript Number = 64 bits
    //-> 64 * 96 * 96 = 548kb of memory for a single grid
    const worldmap: Array<Array<TileObject<TileUnion>>> = []

    const perlinNoise: PerlinNoise = PerlinNoise
        .create()
        .withSeed(this.getRealmGenerationData().getSeed())

    this.visualiser.clearGraph()
    avatarCartesianBound.toDesmosDebugView()

    for (let x = avatarCartesianBound.getTopLeft().getY(); x >= avatarCartesianBound.getBottomLeft().getY(); x--){
      let xOffset = avatarCartesianBound.getTopLeft().getY() - x;
      worldmap[xOffset] = []
      for (let y = avatarCartesianBound.getTopLeft().getX(); y <= avatarCartesianBound.getTopLeft().getX() + avatarCartesianBound.getWidth(); y++) {
        let yOffset = Math.abs((avatarCartesianBound.getTopLeft().getX() - y));

        const noise: number = Math.min(
            Math.max(
                Math.abs(perlinNoise.generatePerlin2(x / 100, y / 100)) * 256,
                RealmTileGenUtil.MIN_PERLIN_NOISE),
            RealmTileGenUtil.MAX_PERLIN_NOISE);

        const clampedRandom: number = Util.getOrSet(
            this.noiseMap,
            NonDecimalCoordinate.of(x, y).toString(),
            Math.random())

        worldmap[xOffset].push(
            RealmTileGenUtil
                .selectTileArrayWithNoise(noise, clampedRandom)
                .selectRandomTile(clampedRandom)
        )

        // this.visualiser.setPoint(x, y)
      }
    }

    const offsetWidth: number = TileObject.TILE_SIZE / 2;
    const offsetHeight: number = TileObject.TILE_SIZE / 2;
    const baseLayer = this.getRealmGenerationData().getLayerManager().getBaseLayer();

    for (let i: number = 0; i < worldmap.length; i++){
      for (let k: number = 0; k < worldmap[i].length; k++){
        const tileObject: TileObject<TileUnion> = worldmap[i][k];
        const image = baseLayer.scene.add.nyxTileObjectImage(
            offsetWidth + (k * TileObject.TILE_SIZE),
            offsetHeight + (i * TileObject.TILE_SIZE),
            tileObject
        );
        baseLayer.add(image)
      }
    }
  }
}