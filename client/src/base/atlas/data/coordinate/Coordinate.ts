import {MathUtil} from '@/util/MathUtil';
import {Util} from '@/util/Util';

export class Coordinate {
  public static SENTINEL: Coordinate = Coordinate.of(0, 0);
  public static INFINITY: Coordinate = Coordinate.of(
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY
  );

  private readonly x: number;
  private readonly y: number;

  public static of(x: number, y: number): Coordinate {
    return new Coordinate(x, y);
  }

  protected constructor(x: number, y: number) {
    this.x = x == -0 ? 0 : x;
    this.y = y == -0 ? 0 : y;
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

  public toCantorsPairing(): number {
    return MathUtil.cantorPairSigned(this.x, this.y)
  }

  public toVector2(): Phaser.Math.Vector2 {
    return new Phaser.Math.Vector2(this.x, this.y);
  }

  public toString(): string {
    return `${this.x}#${this.y}`
  }

  public static parseCoordinate(coordinateString: string): Coordinate {
    if (!coordinateString.includes("#")) throw new Error(`Invalid Coordinate, should conform to (x, y). Got: ${coordinateString}`);
    const segments: Array<string> = coordinateString.split("#");

    if (segments.length != 2) throw new Error(`Invalid coordinate (${coordinateString}), got ${segments.length} segment(s), expected 2.`);

    if (!Util.isStringNumeric(segments[0]) || !Util.isStringNumeric(segments[1])){
      throw new Error(`CoordinateString: ${coordinateString} is not numeric. segment[0]=(${segments[0]}) - segment[1]=(${segments[1]})`);
    }

    const x = parseFloat(segments[0]);
    const y = parseFloat(segments[1]);

    return Coordinate.of(x, y);
  }

  public equals(coordinate: Coordinate): boolean {
    return this.x === coordinate.x && this.y === coordinate.y;
  }
}