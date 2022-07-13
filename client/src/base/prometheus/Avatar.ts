import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import TileObject from '@/base/tile/TileObject';
import {SquareEvenCartesianBound} from '@/base/atlas/data/bound/SquareEvenCartesianBound';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/CoordinateUtil';

export class Avatar {
  private readonly name: string;
  private preciseCoordinate: DecimalCoordinate = Coordinate.SENTINEL;

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

  public setPreciseCoordinate(coordinate: DecimalCoordinate): Avatar {
    this.preciseCoordinate = coordinate;
    return this;
  }

  public computeViewPortBoundary(): CartesianBound {
    return CartesianBound.fromMidPointSimple(this.preciseCoordinate, Client.WORLD_VIEWPORT_WIDTH)
  }

  public computeTileCoordinateSpace(): NonDecimalCoordinate {
    return CoordinateUtil.preciseToTileCoordinate(this.preciseCoordinate);
  }
}

export class Client {
  // NOTE: This is not the width in pixels, that would be n * 48, instead it is
  // the number of tiles to generate.

  public static WORLD_VIEWPORT_WIDTH = 10;
  public static WORLD_VIEWPORT_HEIGHT = 10;

  // public static WORLD_VIEWPORT_WIDTH = Math.floor(window.innerWidth / TileObject.TILE_WIDTH)
  // public static WORLD_VIEWPORT_HEIGHT = Math.floor(window.innerHeight / TileObject.TILE_HEIGHT)
}