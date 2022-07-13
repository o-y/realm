import {Util} from '@/util/Util';
import {SquareCartesianBound} from '@/base/atlas/data/bound/SquareCartesianBound';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';

/**
 * Represents an n×n bound on a two-dimensional coordinate plane where n is even
 */
export class SquareEvenCartesianBound extends SquareCartesianBound {
  constructor(tr: Coordinate, br: Coordinate, tl: Coordinate, bl: Coordinate) {
    super(tr, br, tl, bl)

    Util.assert(
        this.getWidth() % 2 != 0,
        `SquareEvenCartesianBound width is not even {width=${this.getWidth()}}`
    )

    Util.assert(
        this.getHeight() % 2 != 0,
        `SquareEvenCartesianBound height is not even {width=${this.getHeight()}}`
    )
  }
}