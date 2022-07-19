import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';

export class CartesianBoundDifference {
  private readonly AMinusB: Set<Coordinate>;
  private readonly BMinusA: Set<Coordinate>;

  constructor(AMinusB: Set<Coordinate>, BMinusA: Set<Coordinate>) {
    this.AMinusB = AMinusB;
    this.BMinusA = BMinusA;
  }

  public getAMinusB(): Set<Coordinate> {
    return this.AMinusB;
  }

  public getBMinusA(): Set<Coordinate> {
    return this.BMinusA;
  }
}