import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {LandStructure} from '@/base/minos/land/LandStructure';

import {MinosYellowBrickBuilding} from '@/base/minos/land/structures/MinosYellowBrickBuilding';
import {MinosLightHouseBuilding} from '@/base/minos/land/structures/MinosLightHouseBuilding';
import {MinosPurpleRoofBuilding} from '@/base/minos/land/structures/MinosPurpleRoofBuilding';
import {MinosGreenRoofBuilding} from '@/base/minos/land/structures/MinosGreenRoofBuilding';
import {MinosBlueRoofBuilding} from '@/base/minos/land/structures/MinosBlueRoofBuilding';
import {MinosMarketHouseBuilding} from '@/base/minos/land/structures/MinosMarketHouseBuilding';
import {MinosRedBrickedBuildings} from '@/base/minos/land/structures/MinosRedBrickedBuildings';
import {MinosRedRoofBuilding} from '@/base/minos/land/structures/MinosRedRoofBuilding';
import {MinosBikeItem} from '@/base/minos/land/items/MinosBikeItem';
import {MinosLampPostItem} from '@/base/minos/land/items/MinosLampPostItem';
import {MinosMailBoxItem} from '@/base/minos/land/items/MinosMailBoxItem';
import {MinosThreeTiledVerticalTreeItem} from '@/base/minos/land/items/MinosThreeTiledVerticalTreeItem';

export class LandStructureProvider {
  public static provideStructureList(): Array<LandStructure> {
    return [
      LandStructure.create(
          Coordinate.of(14, 14),
          new MinosThreeTiledVerticalTreeItem()
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