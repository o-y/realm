import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';

// TODO: One day this will take the positions of doors and use A* or Djikstra's
//  to generate path-found paths between these points. For the purpose of a demo
//  some hard coding is acceptable, even though the amount of work to implement
//  the aforementioned is likely not substantially more than hard coding :).
export class PathMap {
  private static instance: PathMap | null = null;

  private readonly pathSetCantorPairings: Set<number> = new Set<number>();

  public static getInstance() {
    if (PathMap.instance === null) {
      PathMap.instance = new PathMap();
    }

    return PathMap.instance;
  }

  public getPathSetCantorPairings(): Set<number> {
    return this.pathSetCantorPairings;
  }

  private constructor() {
    const pathCantorPairings: Array<number> = PathMap.allocateFromArray()
        .map(bound => bound.getCoordinateSet())
        .flatMap(coordinateSet => [...coordinateSet]
            .map(coordinate => coordinate.toCantorsPairing())
        );

    let cantorPairingSubset: Array<number> = new Array<number>();

    pathCantorPairings.forEach(value => {
      if (Math.random() > 0.35) {
        cantorPairingSubset.push(value)
      }
    })

    cantorPairingSubset.forEach(pairing => this.pathSetCantorPairings.add(pairing));
  }

  private static allocateFromArray(): Array<CartesianBound> {
    return [
      //===== MIDDLE ISLAND =====/
      // Middle Island Path
      new CartesianBound(
          NonDecimalCoordinate.of(35, 1),
          NonDecimalCoordinate.of(35, -1),
          NonDecimalCoordinate.of(9, 1),
          NonDecimalCoordinate.of(9, -1)
      ),
      new CartesianBound(
          NonDecimalCoordinate.of(40, -1),
          NonDecimalCoordinate.of(40, -3),
          NonDecimalCoordinate.of(32, -1),
          NonDecimalCoordinate.of(32, -3)
      ),

      // Path to YellowBrickedHouse
      new CartesianBound(
          NonDecimalCoordinate.of(15, -2),
          NonDecimalCoordinate.of(15, -6),
          NonDecimalCoordinate.of(13, -2),
          NonDecimalCoordinate.of(13, -6),
      ),

      // Path to PurpleHouse
      new CartesianBound(
          NonDecimalCoordinate.of(28, -2),
          NonDecimalCoordinate.of(28, -6),
          NonDecimalCoordinate.of(28, -2),
          NonDecimalCoordinate.of(28, -6),
      ),

      // Path to upper middle houses
      new CartesianBound(
          NonDecimalCoordinate.of(23, -2),
          NonDecimalCoordinate.of(23, -10),
          NonDecimalCoordinate.of(22, -2),
          NonDecimalCoordinate.of(22, -10),
      ),

      //===== RIGHT ISLAND =====/
      // Right Island Path
      new CartesianBound(
          NonDecimalCoordinate.of(-8, 1),
          NonDecimalCoordinate.of(-8, -1),
          NonDecimalCoordinate.of(-33, 1),
          NonDecimalCoordinate.of(-33, -1)
      ),

      // Path to BlueRoofed house
      new CartesianBound(
          NonDecimalCoordinate.of(-12, -2),
          NonDecimalCoordinate.of(-12, -2),
          NonDecimalCoordinate.of(-12, -2),
          NonDecimalCoordinate.of(-12, -2)
      ),

      // Path to MarketHouse
      new CartesianBound(
          NonDecimalCoordinate.of(-19, -8),
          NonDecimalCoordinate.of(-18, -2),
          NonDecimalCoordinate.of(-18, -2),
          NonDecimalCoordinate.of(-19, -8)
      ),

      // Path to RedBrickedHouse
      new CartesianBound(
          NonDecimalCoordinate.of(-26, -2),
          NonDecimalCoordinate.of(-26, -2),
          NonDecimalCoordinate.of(-26, -2),
          NonDecimalCoordinate.of(-26, -2)
      ),
    ];
  }
}