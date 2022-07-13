import {Util} from '@/util/Util';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';

/** Represents an n×n bound on a two-dimensional coordinate plane. */
export class SquareCartesianBound extends CartesianBound {
  constructor(tr: Coordinate, br: Coordinate, tl: Coordinate, bl: Coordinate) {
    super(tr, br, tl, bl)

    Util.assert(
        this.getWidth() == this.getHeight(),
        `Bound is not a square: {width=${this.getWidth()}, height=${this.getHeight()}}`
    )
  }
}