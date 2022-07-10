import {Coordinate} from '@/base/atlas/data/Coordinate';
import {Util} from '@/util/Util';

/**
 * Represents an n×k plane on a two-dimensional coordinate plane.
 *
 *                    y
 *                    ▲
 *                    │
 *                    │
 *                    │
 *          tl        │       tr    x  y
 *           ┌────────┼──────┐◄──── 7, 2
 *           │        │      │
 * ──────────┼────────┼──────┼────────────► x
 *           │        │      │
 *           │        │      │
 *           │        │      │
 *           └────────┼──────┘◄──── 7, -9
 *          bl        │       br
 *                    │
 *                    │
 *
 * The following constraints must be adhered to:
 *   ~  tr.x = br.x
 *   ~  tr.y = tl.y
 *   ~  bl.x = tl.x
 *   ~  bl.y = br.y
 *
 *   ~  tr.x > tl.x
 *   ~  tr.y > br.y
 *   ~  br.x > bl.x
 *   ~  tl.y > bl.y
 */
export class CartesianBound {
  private tr: Coordinate;
  private br: Coordinate;

  private tl: Coordinate;
  private bl: Coordinate;

  constructor(tr: Coordinate, br: Coordinate, tl: Coordinate, bl: Coordinate) {
    Util.assert(tr.getY() == br.getX()) // Each assertion is distinct
    Util.assert(tr.getY() == tl.getY()) // to provide easier debugging
    Util.assert(bl.getX() == tl.getX()) // from stacktraces.
    Util.assert(bl.getY() == br.getY())
    Util.assert(tr.getX() > tl.getX())
    Util.assert(tr.getY() > br.getY())
    Util.assert(br.getX() > bl.getX())
    Util.assert(tl.getY() > bl.getY())

    this.tr = tr;
    this.br = br;
    this.tl = tl;
    this.bl = bl;
  }

  public getWidth(): number {
    return this.tr.getX() - this.tl.getX()
  }

  public getHeight(): number {
    return this.tr.getY() - this.br.getY()
  }

  public getArea(): number {
    return this.getWidth() * this.getHeight()
  }

  public getMidPointFloored(): Coordinate {
    const decimalMidPoint: [number, number] = this.getMidPointDecimal();

    return Coordinate.of(
        Math.floor(decimalMidPoint[0]),
        Math.floor(decimalMidPoint[1])
    )
  }

  private getMidPointDecimal(): [number, number] {
    return [this.getWidth() / 2, this.getHeight() / 2]
  }
}