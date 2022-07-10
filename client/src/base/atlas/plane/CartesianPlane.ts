import {SquareEvenCartesianBound} from '@/base/atlas/data/SquareEvenCartesianBound';

export class CartesianPlane {
  private cartesianBound: SquareEvenCartesianBound;

  private constructor(cartesianBound: SquareEvenCartesianBound) {
    this.cartesianBound = cartesianBound;
  }

  public static computeFor(cartesianBound: SquareEvenCartesianBound): CartesianPlane {
    return new CartesianPlane(cartesianBound);
  }
}