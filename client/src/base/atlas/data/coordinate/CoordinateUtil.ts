import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import TileObject from '@/base/tile/TileObject';

export class CoordinateUtil {
  public static preciseToTileCoordinate(decimalCoordinate: DecimalCoordinate): NonDecimalCoordinate {
    return NonDecimalCoordinate.of(
        Math.ceil(decimalCoordinate.getX() / TileObject.TILE_SIZE),
        Math.ceil(decimalCoordinate.getY() / TileObject.TILE_SIZE)
    )
  }
}