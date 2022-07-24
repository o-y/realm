import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {MinosYellowBrickBuilding} from '@/base/minos/structures/MinosYellowBrickBuilding';
import {MinosStructureItem} from '@/base/minos/MinosStructureItem';

export class MinosStructureProvider {
  public static provideStructureList(): Array<MinosStructureItem> {
    return [
      MinosStructureItem.create(
          Coordinate.of(14, 14),
          new MinosYellowBrickBuilding()
      )
    ]
  }

  public static getIntersectingStructure(coordinate: NonDecimalCoordinate): MinosStructureItem | null {
    const intersectingStructures = MinosStructureProvider.provideStructureList().filter(
        struct => struct.doesCoordinateIntersect(coordinate)
    );

    if (intersectingStructures.length > 1) {
      throw new Error(`Got multiple intersecting structures: ${intersectingStructures}`);
    }

    return intersectingStructures.length === 1 ? intersectingStructures[0] : null;
  }
}