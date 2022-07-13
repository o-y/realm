import TileObject from '@/base/tile/TileObject';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';

export class AtlasService {
  private tileCoordinate: Coordinate

  private constructor(tileCoordinate: Coordinate) {
    this.tileCoordinate = tileCoordinate;
  }

  public static computeFor(tileCoordinate: Coordinate): AtlasService {
    return new AtlasService(tileCoordinate);
  }
}