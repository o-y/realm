import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/CoordinateUtil';

export class Avatar {
  private readonly name: string;

  private preciseCoordinate: DecimalCoordinate = Coordinate.SENTINEL;
  private avatarCoordinateUpdateCallbacks: Set<CoordinateUpdateCallback> = new Set<CoordinateUpdateCallback>();

  private constructor(name: string) {
    this.name = name;
  }

  public static of(name: string) {
    return new Avatar(name);
  }

  public getName(): string {
    return this.name;
  }

  public getPreciseCoordinate(): DecimalCoordinate {
    return this.preciseCoordinate;
  }

  public updatePreciseCoordinate(coordinate: DecimalCoordinate): Avatar {
    this.preciseCoordinate = coordinate;

    this.avatarCoordinateUpdateCallbacks.forEach((coordinateUpdateCallback: CoordinateUpdateCallback) =>
        coordinateUpdateCallback(coordinate))

    return this;
  }

  public registerAvatarCoordinateUpdateCallback(coordinateUpdateCallback: CoordinateUpdateCallback): Avatar {
    this.avatarCoordinateUpdateCallbacks.add(coordinateUpdateCallback);

    return this;
  }

  public computeViewPortBoundary(): CartesianBound {
    return CartesianBound.fromMidPointAdvanced(this.preciseCoordinate, Client.WORLD_VIEWPORT_HEIGHT, Client.WORLD_VIEWPORT_WIDTH)
  }

  public computeTileCoordinateSpace(): NonDecimalCoordinate {
    return CoordinateUtil.preciseToTileCoordinate(this.preciseCoordinate);
  }
}

export type CoordinateUpdateCallback = (decimalCoordinate: DecimalCoordinate) => void

export class Client {
  // NOTE: This is not the width in pixels, that would be n * 48, instead it is
  // the number of tiles to generate.

  public static WORLD_VIEWPORT_WIDTH = 10;
  public static WORLD_VIEWPORT_HEIGHT = 10;

  // public static WORLD_VIEWPORT_WIDTH = Math.floor(window.innerWidth / TileObject.TILE_SIZE)
  // public static WORLD_VIEWPORT_HEIGHT = Math.floor(window.innerHeight / TileObject.TILE_SIZE)
}