import {CartesianBound} from '@/base/atlas/data/CartesianBound';
import {Coordinate} from '@/base/atlas/data/Coordinate';
import {Util} from '@/util/Util';

export class SquareCartesianBound extends CartesianBound {
  constructor(tr: Coordinate, br: Coordinate, tl: Coordinate, bl: Coordinate) {
    super(tr, br, tl, bl)

    Util.assert(
        this.getWidth() == this.getHeight(),
        `Bound is not a square: {width=${this.getWidth()}, height=${this.getHeight()}}`
    )
  }
}