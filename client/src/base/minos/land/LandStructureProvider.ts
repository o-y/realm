import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {MinosYellowBrickBuilding} from '@/base/minos/land/structures/MinosYellowBrickBuilding';
import {LandStructure} from '@/base/minos/land/LandStructure';
import {MinosLightHouse} from '@/base/minos/land/structures/MinosLightHouse';

export class LandStructureProvider {
  public static provideStructureList(): Array<LandStructure> {
    return [
      LandStructure.create(
          Coordinate.of(14, 14),
          new MinosLightHouse()
      )
    ]
  }

  public static getIntersectingStructure(coordinate: NonDecimalCoordinate): LandStructure | null {
    const intersectingStructures = LandStructureProvider.provideStructureList().filter(
        struct => struct.doesCoordinateIntersect(coordinate)
    );

    if (intersectingStructures.length > 1) {
      throw new Error(`Got multiple intersecting structures: ${intersectingStructures}`);
    }

    return intersectingStructures.length === 1 ? intersectingStructures[0] : null;
  }
}