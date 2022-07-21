import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {Client} from '@/base/prometheus/local/Client';
import TileObject from '@/base/tile/TileObject';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';

export class Avatar {
  private readonly name: string;

  private tileCoordinate: DecimalCoordinate = Coordinate.SENTINEL;
  private tileCoordinateUpdateCallbacks: Set<CoordinateUpdateCallback> = new Set<CoordinateUpdateCallback>();

  private worldCoordinate: DecimalCoordinate = Coordinate.SENTINEL;
  private worldCoordinateCallbacks: Set<CoordinateUpdateCallback> = new Set<CoordinateUpdateCallback>();

  private constructor(name: string) {
    this.name = name;
  }

  public static of(name: string) {
    return new Avatar(name);
  }

  public getName(): string {
    return this.name;
  }

  public getTileCoordinate(): NonDecimalCoordinate {
    return this.tileCoordinate;
  }

  public getWorldCoordinate(): DecimalCoordinate {
    return this.worldCoordinate;
  }

  public updateTileCoordinate(coordinate: NonDecimalCoordinate): Avatar {
    if (coordinate.getX() == this.tileCoordinate.getX() &&
        coordinate.getY() == this.tileCoordinate.getY()) return this;

    this.tileCoordinate = coordinate;

    this.tileCoordinateUpdateCallbacks.forEach((coordinateUpdateCallback: CoordinateUpdateCallback) =>
        coordinateUpdateCallback(coordinate))

    return this;
  }

  public updateWorldCoordinate(coordinate: DecimalCoordinate): Avatar {
    if (coordinate.getX() == this.worldCoordinate.getX() &&
        coordinate.getY() == this.worldCoordinate.getY()) return this;

    this.worldCoordinate = coordinate;

    this.worldCoordinateCallbacks.forEach((coordinateUpdateCallback: CoordinateUpdateCallback) =>
        coordinateUpdateCallback(coordinate))

    return this;
  }

  public registerTileCoordinateCallback(coordinateUpdateCallback: CoordinateUpdateCallback): Avatar {
    this.tileCoordinateUpdateCallbacks.add(coordinateUpdateCallback);
    return this;
  }

  public registerWorldCoordinateCallback(coordinateUpdateCallback: CoordinateUpdateCallback): Avatar {
    this.worldCoordinateCallbacks.add(coordinateUpdateCallback);
    return this;
  }

  public computeViewPortBoundary(): CartesianBound {
    return CartesianBound.fromMidPointAdvanced(this.tileCoordinate, Client.WORLD_VIEWPORT_HEIGHT, Client.WORLD_VIEWPORT_WIDTH)
  }

  public computeTileCoordinateSpace(): NonDecimalCoordinate {
    return CoordinateUtil.preciseToTileCoordinate(this.tileCoordinate);
  }

  public static convertWorldSpaceToTileCoordinate(x: number, y: number): NonDecimalCoordinate {
    return DecimalCoordinate.of(
        Math.floor(x / TileObject.TILE_SIZE),
        Math.floor(y / TileObject.TILE_SIZE)
    )
  }
}

export type CoordinateUpdateCallback = (decimalCoordinate: DecimalCoordinate) => void