export class Coordinate {
  public static SENTINEL: Coordinate = Coordinate.of(0, 0);

  private readonly x: number;
  private readonly y: number;

  public static of(x: number, y: number): Coordinate {
    return new Coordinate(x, y);
  }

  protected constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  // We can't reference NonDecimalCoordinate from these methods as that would
  // cause a cyclic dependency and because TypeScript is fucking stupid we don't
  // actually get coherent error messages.
  public floorToNonDecimalCoordinate(): Coordinate {
    return Coordinate.of(Math.floor(this.x), Math.floor(this.y));
  }

  public ceilToNonDecimalCoordinate(): Coordinate {
    return new Coordinate(Math.ceil(this.x), Math.ceil(this.y));
  }

  public roundToNonDecimalCoordinate(): Coordinate {
    return new Coordinate(Math.round(this.x), Math.round(this.y));
  }
}