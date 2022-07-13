import {Util} from '@/util/Util';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import Desmos, {Calculator} from 'desmos'
import {DesmosVisualiser} from '@/framework/desmos/DesmosVisualiser';

/**
 * Represents an n×k bound on a two-dimensional coordinate plane.
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
  private readonly tr: Coordinate;
  private readonly br: Coordinate;

  private readonly tl: Coordinate;
  private readonly bl: Coordinate;

  constructor(tr: Coordinate, br: Coordinate, tl: Coordinate, bl: Coordinate) {
    Util.assert(tr.getX() == br.getX()) // Each assertion is distinct
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

  public static fromMidPointSimple(coordinate: Coordinate, radius: number): CartesianBound {
    Util.assert(radius > 0, "radius must be greater than 0")

    return CartesianBound.fromMidPointAdvanced(coordinate, radius, radius);
  }

  public static fromMidPointAdvanced(coordinate: Coordinate, verticalRadius: number, horizontalRadius: number): CartesianBound {
    Util.assert(verticalRadius > 0, "verticalRadius must be greater than 0")
    Util.assert(horizontalRadius > 0, "horizontalRadius must be greater than 0")

    return new CartesianBound(
        Coordinate.of(
            coordinate.getX() + verticalRadius,
            coordinate.getY() + horizontalRadius
        ),
        Coordinate.of(
            coordinate.getX() + verticalRadius,
            coordinate.getY() - horizontalRadius
        ),
        Coordinate.of(
            coordinate.getX() - verticalRadius,
            coordinate.getY() + horizontalRadius
        ),
        Coordinate.of(
            coordinate.getX() - verticalRadius,
            coordinate.getY() - horizontalRadius
        )
    )
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

  public getTopLeft(): Coordinate {
    return this.tl;
  }

  public getTopRight(): Coordinate {
    return this.tr;
  }

  public getBottomLeft(): Coordinate {
    return this.bl;
  }

  public getBottomRight(): Coordinate {
    return this.br;
  }

  public getMidPointFloored(): NonDecimalCoordinate {
    const decimalMidPoint: [number, number] = this.getMidPointDecimal();

    return NonDecimalCoordinate.of(
        Math.floor(decimalMidPoint[0]),
        Math.floor(decimalMidPoint[1])
    )
  }

  public getMidPoint(): DecimalCoordinate {
    const decimalMidPoint: [number, number] = this.getMidPointDecimal();

    return DecimalCoordinate.of(
        decimalMidPoint[0],
        decimalMidPoint[1]
    )
  }

  public toDesmosDebugView() {
    const calculator: Desmos.Calculator = DesmosVisualiser.getInstance().getCalculator();
    const midpoint: DecimalCoordinate = this.getMidPoint();

    calculator.setExpression({ latex: `\\left(${this.tl.getX()},\\ ${this.tl.getY()}\\right)`, label: 'TL', showLabel: true })
    calculator.setExpression({ latex: `\\left(${this.tr.getX()},\\ ${this.tr.getY()}\\right)`, label: 'TR', showLabel: true })
    calculator.setExpression({ latex: `\\left(${this.bl.getX()},\\ ${this.bl.getY()}\\right)`, label: 'BL', showLabel: true })
    calculator.setExpression({ latex: `\\left(${this.br.getX()},\\ ${this.br.getY()}\\right)`, label: 'BR', showLabel: true })
    calculator.setExpression({ latex: `\\left(${midpoint.getX()},\\ ${midpoint.getY()}\\right)`, label: 'MID', showLabel: true })

  }

  private getMidPointDecimal(): [number, number] {
    return [
        this.getTopRight().getX() - (this.getWidth() / 2),
        this.getTopRight().getY() - (this.getHeight() / 2),
    ]
  }
}