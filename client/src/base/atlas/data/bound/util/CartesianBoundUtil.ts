import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {CartesianBoundDifference} from '@/base/atlas/data/bound/util/CartesianBoundDifference';

export class CartesianBoundUtil {
  public static computeBoundUnion(boundA: CartesianBound, boundB: CartesianBound): Set<Coordinate> {
    const unionSet = new Set<Coordinate>();

    boundA.getCoordinateSet().forEach(unionSet.add);
    boundB.getCoordinateSet().forEach(unionSet.add);

    return unionSet;
  }

  public static computeBoundIntersection(boundA: CartesianBound, boundB: CartesianBound) {
    const boundACoordinateArray: Array<string> = [...boundA.getCoordinateSet()].map(coord => coord.toString());
    const boundBCoordinateSet: Set<string> = new Set([...boundB.getCoordinateSet()].map(coord => coord.toString()));

    return new Set<Coordinate>([...boundACoordinateArray.filter(coordinateB => boundBCoordinateSet.has(coordinateB))].map(Coordinate.parseCoordinate))
  }

  public static computeBoundDifference(boundA: CartesianBound, boundB: CartesianBound) {
    const boundACoordinatePrimitiveArray: Array<string> = [...boundA.getCoordinateSet()].map(coord => coord.toString());
    const boundBCoordinatePrimitiveArray: Array<string> = [...boundB.getCoordinateSet()].map(coord => coord.toString());

    const boundACoordinatePrimitiveSet: Set<string> = new Set<string>(boundACoordinatePrimitiveArray);
    const boundBCoordinatePrimitiveSet: Set<string> = new Set<string>(boundBCoordinatePrimitiveArray);

    return new CartesianBoundDifference(
        new Set<Coordinate>(boundACoordinatePrimitiveArray
            .filter(coordinateA => !boundBCoordinatePrimitiveSet.has(coordinateA))
            .map(Coordinate.parseCoordinate)),
        new Set<Coordinate>(boundBCoordinatePrimitiveArray
            .filter(coordinateB => !boundACoordinatePrimitiveSet.has(coordinateB))
            .map(Coordinate.parseCoordinate)),
    );
  }
}