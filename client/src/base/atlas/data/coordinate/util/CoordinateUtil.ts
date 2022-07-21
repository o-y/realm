import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import TileObject from '@/base/tile/TileObject';

export class CoordinateUtil {
  public static convertWorldSpaceToTileCoordinate(x: number, y: number): NonDecimalCoordinate {
    return NonDecimalCoordinate.of(
        Math.floor(x / TileObject.TILE_SIZE),
        Math.floor(y / TileObject.TILE_SIZE)
    )
  }

  public static convertTileToWorldSpaceCoordinate(x: number, y: number): NonDecimalCoordinate {
    return NonDecimalCoordinate.of(
        Math.floor(x * TileObject.TILE_SIZE),
        Math.floor(y * TileObject.TILE_SIZE)
    )
  }

  public static preciseToTileCoordinate(decimalCoordinate: DecimalCoordinate): NonDecimalCoordinate {
    return NonDecimalCoordinate.of(
        Math.ceil(decimalCoordinate.getX() / TileObject.TILE_SIZE),
        Math.ceil(decimalCoordinate.getY() / TileObject.TILE_SIZE)
    )
  }
}