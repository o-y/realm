import {Util} from '@/util/Util';

export class Coordinate {
  private readonly x: number;
  private readonly y: number;

  public static of(x: number, y: number): Coordinate {
    Util.assert(x % 1 != 0, "Coordinate#x must be a non-decimal")
    Util.assert(y % 1 != 0, "Coordinate#y must be a non-decimal")

    return new Coordinate(x, y);
  }

  private constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }
}