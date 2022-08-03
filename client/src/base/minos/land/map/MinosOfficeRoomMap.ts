import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';

export class MinosOfficeRoomMap {
  private static readonly assetPath: string = "/static/map/interior.png";

  public static getAsset(): string {
    return MinosOfficeRoomMap.assetPath;
  }

  public static getKey(): string {
    return "OFFICE_MAP"
  }

  public static getWidth(): number {
    return 38;
  }

  public static getHeight(): number {
    return 32;
  }

  public static provideMidpointPosition(): Coordinate {
    return Coordinate.of(2000, 2000);
  }

  public static provideDoorPosition(): NonDecimalCoordinate {
    return Coordinate.of(1999, 1991)
  }
}