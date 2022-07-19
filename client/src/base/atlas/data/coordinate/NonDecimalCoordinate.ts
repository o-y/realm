import {Util} from '@/util/Util';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';

export class NonDecimalCoordinate extends Coordinate {
  public static of(x: number, y: number): Coordinate {
    Util.assert(x % 1 == 0, `Coordinate#x must be a non-decimal. Got: {x=${x}, y=${y}}`)
    Util.assert(y % 1 == 0, `Coordinate#y must be a non-decimal. Got: {x=${y}, y=${y}}`)

    return Coordinate.of(x, y)
  }
}