import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';

export class DecimalCoordinate extends Coordinate {
  public static of(x: number, y: number): DecimalCoordinate {
    return new DecimalCoordinate(x, y);
  }

  protected constructor(x: number, y: number) {
    super(x, y);
  }
}