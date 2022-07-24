import {SquareEvenCartesianBound} from '@/base/atlas/data/bound/SquareEvenCartesianBound';
import {Deprecated} from '@/util/annotations/Deprecated';

@Deprecated
class CartesianPlane {
  private cartesianBound: SquareEvenCartesianBound;

  private constructor(cartesianBound: SquareEvenCartesianBound) {
    this.cartesianBound = cartesianBound;
  }

  public static computeFor(cartesianBound: SquareEvenCartesianBound): CartesianPlane {
    return new CartesianPlane(cartesianBound);
  }
}