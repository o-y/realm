import TileObject from '@/base/tile/TileObject';
import {Coordinate} from '@/base/atlas/data/Coordinate';

export class AtlasService {
  public static QUADRANT_HEIGHT = 64;
  public static QUADRANT_WIDTH = 64;

  private tileCoordinate: Coordinate

  private constructor(tileCoordinate: Coordinate) {
    this.tileCoordinate = tileCoordinate;
  }

  public static computeFor(tileCoordinate: Coordinate): AtlasService {
    return new AtlasService(tileCoordinate);
  }
}