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
import {MinosBridgeBuilding} from '@/base/minos/land/structures/MinosBridgeBuilding';

export class LandStructureProvider {
  private static structureList: Array<LandStructure> = [
    //=== Bridges
    LandStructure.create(
        Coordinate.of(-7, -2),
        new MinosBridgeBuilding()
    ),
    LandStructure.create(
        Coordinate.of(41, -4),
        new MinosBridgeBuilding()
    ),

    // Left Island
    LandStructure.create(
        Coordinate.of(-15, -5),
        new MinosBlueRoofBuilding()
    ),
    LandStructure.create(
        Coordinate.of(-27, -6),
        new MinosRedBrickedBuildings()
    ),
    LandStructure.create(
        Coordinate.of(-20, -12),
        new MinosMarketHouseBuilding()
    ),

    // Mid Island
    LandStructure.create(
        Coordinate.of(11, -11),
        new MinosYellowBrickBuilding()
    ),
    LandStructure.create(
        Coordinate.of(27, -10),
        new MinosPurpleRoofBuilding()
    ),
    LandStructure.create(
        Coordinate.of(24, -17),
        new MinosGreenRoofBuilding()
    ),
    LandStructure.create(
        Coordinate.of(17, -18),
        new MinosRedRoofBuilding()
    ),

    // Accessories
    LandStructure.create(
        Coordinate.of(21, -5),
        new MinosThreeTiledVerticalTreeItem()
    ),
    LandStructure.create(
        Coordinate.of(24, -9),
        new MinosThreeTiledVerticalTreeItem()
    ),
    LandStructure.create(
        Coordinate.of(10, -10),
        new MinosThreeTiledVerticalTreeItem()
    ),
    LandStructure.create(
        Coordinate.of(32, -11),
        new MinosThreeTiledVerticalTreeItem()
    ),
    LandStructure.create(
        Coordinate.of(17, -6),
        new MinosBikeItem()
    ),
    LandStructure.create(
        Coordinate.of(20, -9),
        new MinosMailBoxItem()
    ),
    LandStructure.create(
        Coordinate.of(25, -8),
        new MinosLampPostItem()
    ),


    // Right Island
    LandStructure.create(
        Coordinate.of(73, 1),
        new MinosLightHouseBuilding()
    )
  ]

  public static provideStructureList(): Array<LandStructure> {
    return this.structureList;
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