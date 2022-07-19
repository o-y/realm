import TileObject from '@/base/tile/TileObject';
import {PerlinNoise} from '@/base/gen/perlin/PerlinNoise';
import RealmTileGenUtil from '@/base/gen/tilegen/RealmTileGenUtil';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import "@/framework/nyx/extensions/NyxGameObjectsExtensions"
import {RealmGenerationData, RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {DesmosVisualiser} from '@/framework/desmos/DesmosVisualiser';
import {Util} from '@/util/Util';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Client} from '@/base/prometheus/local/Client';
import {TerrainManager} from '@/base/gen/realms/internal/TerrainManager';
import {CartesianBoundUtil} from '@/base/atlas/data/bound/util/CartesianBoundUtil';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {CartesianBoundDifference} from '@/base/atlas/data/bound/util/CartesianBoundDifference';

/**
 * {1, 2, 2, 3, 3}
 * {1, 2, 2, 3, 3}
 */

export class GaiaMapGenerator extends RealmGenerator {
  private scene: Phaser.Scene;
  // private noiseMap: Map<string, number> = new Map<string, number>();
  private visualiser: DesmosVisualiser = DesmosVisualiser.getInstance();

  constructor(scene: Phaser.Scene) {
    super()

    this.scene = scene;
  }

  public async generateMapImpl(
      currentCoordinate: NonDecimalCoordinate,
      nextCoordinate: NonDecimalCoordinate
  ) {
    const terrainManager = this.getRealmGenerationData().getTerrainManager();

    const currentCoordinateBound = CartesianBound.fromMidPointAdvanced(
        currentCoordinate,
        Client.WORLD_VIEWPORT_HEIGHT,
        Client.WORLD_VIEWPORT_WIDTH
    );

    const nextCoordinateBound = CartesianBound.fromMidPointAdvanced(
        nextCoordinate,
        Client.WORLD_VIEWPORT_HEIGHT,
        Client.WORLD_VIEWPORT_WIDTH
    );

    // BASE CASE: Avatar has just spawned, this event should occur only once per
    // user-session.
    // OPERATION: Either bounds can be generated as they are equal, thus load
    // the tiles for currentCoordinateBound.
    if (currentCoordinate.equals(nextCoordinate)){
      terrainManager.loadTileSet(currentCoordinateBound.getCoordinateSet());
      return;
    }

    // Untouched tiles - exist in both the current and next coordinate bounds.
    const tileIntersection: Set<Coordinate> = CartesianBoundUtil
        .computeBoundIntersection(/* A = */ currentCoordinateBound, /* B = */ nextCoordinateBound);

    // The difference between the two coordinateSets, i.e unique tiles from both
    // coordinate bounds.
    const tileDifference: CartesianBoundDifference = CartesianBoundUtil
        .computeBoundDifference(/* A = */ currentCoordinateBound, /* B = */ nextCoordinateBound)

    // Tiles which exist in B but not A should be loaded as they are new.
    const tilesToLoad: Set<Coordinate> = tileDifference.getBMinusA();

    // Tiles which exist in A but not B should be unloaded as they are now
    // outside of the client (to-be viewport) bounds.
    const tilesToUnload: Set<Coordinate> = tileDifference.getAMinusB();

    terrainManager.loadTileSet(tilesToLoad);
    terrainManager.unloadTileSet(tilesToUnload);

    // const chunkManager = this.getRealmGenerationData().getChunkManager();
    // const chunkCoordinate = chunkManager.computeChunkFromGenerationCoordinate(generationCoordinate);
    //
    // // console.log(
    // //     "Received request to generate terrain: ", worldCoordinateLocation
    // // )
    //
    // if (chunkManager.isChunkLoaded(chunkCoordinate)){
    //   return;
    // }
    //
    // chunkManager.updateWorldCoordinateLocation(chunkCoordinate);
    //
    // const chunk = chunkManager.createChunk(chunkCoordinate);
    //
    // const generationCartesianBound = CartesianBound.fromMidPointAdvanced(
    //     generationCoordinate,
    //     Client.WORLD_VIEWPORT_HEIGHT,
    //     Client.WORLD_VIEWPORT_WIDTH
    // );
    //
    // const worldCartesianBound = CartesianBound.fromMidPointAdvanced(
    //     worldCoordinateLocation,
    //     Client.WORLD_VIEWPORT_HEIGHT,
    //     Client.WORLD_VIEWPORT_WIDTH
    // );
    //
    // //-> 48 tiles = screen width
    // //-> 96 * 96 = 2d matrix
    // //-> JavaScript Number = 64 bits
    // //-> 64 * 96 * 96 = 548kb of memory for a single grid
    // const worldmap: Array<Array<TileObject<TileUnion>>> = []
    //
    // const perlinNoise: PerlinNoise = PerlinNoise
    //     .create()
    //     .withSeed(this.getRealmGenerationData().getSeed())
    //
    // for (let x = generationCartesianBound.getTopLeft().getY(); x >= generationCartesianBound.getBottomLeft().getY(); x--){
    //   let xOffset = generationCartesianBound.getTopLeft().getY() - x;
    //   worldmap[xOffset] = []
    //   for (let y = generationCartesianBound.getTopLeft().getX(); y <= generationCartesianBound.getTopLeft().getX() + generationCartesianBound.getWidth(); y++) {
    //     let yOffset = Math.abs((generationCartesianBound.getTopLeft().getX() - y));
    //
    //     const noise: number = Math.min(
    //         Math.max(
    //             Math.abs(perlinNoise.generatePerlin2(x / 100, y / 100)) * 256,
    //             RealmTileGenUtil.MIN_PERLIN_NOISE),
    //         RealmTileGenUtil.MAX_PERLIN_NOISE);
    //
    //     const clampedRandom: number = Util.getOrSet(
    //         this.noiseMap,
    //         NonDecimalCoordinate.of(x, y).toString(),
    //         Math.random())
    //
    //     worldmap[xOffset].push(
    //         RealmTileGenUtil
    //             .selectTileArrayWithNoise(noise, clampedRandom)
    //             .selectRandomTile(clampedRandom)
    //     )
    //
    //     // this.visualiser.setPoint(x, y)
    //   }
    // }

    // const randomColour = Util.randomColourCode();

    // currentCoordinateBound.getBottomLeft().toVector2().
    // this.visualiser.showVisualisationRenderer();
    // this.visualiser.clearGraph()
    // worldCartesianBound.toDesmosDebugView()

    // for (
    //     let y = currentCoordinateBound.getBottomLeft().getY();
    //     y <= currentCoordinateBound.getTopLeft().getY();
    //     y++
    // ){
    //   // await new Promise(r => setTimeout(r, i * 3));
    //   for (
    //       let x = currentCoordinateBound.getBottomLeft().getX();
    //       x <= currentCoordinateBound.getBottomRight().getX();
    //       x++
    //   ){
    //     // const image = baseLayer.scene.add.nyxTileObjectImage(
    //     //     (x * TileObject.TILE_SIZE),
    //     //     (y * TileObject.TILE_SIZE),
    //     //     tileObject
    //     // );
    //
    //     const image = baseLayer.scene.add.rectangle(
    //         (x * TileObject.TILE_SIZE),
    //         (y * TileObject.TILE_SIZE),
    //         TileObject.TILE_SIZE,
    //         TileObject.TILE_SIZE,
    //         randomColour
    //     );
    //     //
    //     // image.name = `${x}_${y}`;
    //     image.alpha = 0.5;
    //     //
    //     // chunk.addObjectToGroup(image)
    //   }
    // }
  }
}