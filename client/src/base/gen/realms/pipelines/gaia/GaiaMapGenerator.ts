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

export class GaiaMapGenerator extends RealmGenerator {
  private scene: Phaser.Scene;
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

    // CASE: The Avatar has moved n tiles in any direction.
    // OPERATION: Calculate the difference between the two cartesian planes,
    // and load/unload according to the set differences.
    terrainManager.loadTileSet(tilesToLoad);
    terrainManager.unloadTileSet(tilesToUnload);
  }
}