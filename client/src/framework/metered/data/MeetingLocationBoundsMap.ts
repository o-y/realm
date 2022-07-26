import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {MeetingLocation} from '@/framework/metered/spatial/MeetingLocation';
import {DesmosVisualiser} from '@/framework/desmos/DesmosVisualiser';

export class MeetingLocationBoundsMap {
  public static readonly BOUNDS = new Map<CartesianBound, MeetingLocation>([
    [
      new CartesianBound(
          /* tr = */ Coordinate.of(41, -24),
          /* br = */ Coordinate.of(40, 14),
          /* tl = */ Coordinate.of(9, -24),
          /* bl = */ Coordinate.of(9, 14)
      ),
      MeetingLocation.MIDDLE_ISLAND
    ],
    [
      new CartesianBound(
          /* tr = */ Coordinate.of(-8, -24),
          /* br = */ Coordinate.of(-8, 14),
          /* tl = */ Coordinate.of(-33, -24),
          /* bl = */ Coordinate.of(-33, 14)
      ),
      MeetingLocation.LEFT_ISLAND
    ]
  ])

  public static calculateCurrentMeetingBoundLocation(playerTileCoordinate: NonDecimalCoordinate): MeetingLocation | null {
    const filter = [...MeetingLocationBoundsMap.BOUNDS.entries()].filter((data) => {
        const cartesianBound: CartesianBound = data[0];
        const meetingLocation: MeetingLocation = data[1];

        return playerTileCoordinate.getY() <= cartesianBound.getBottomLeft().getY()
            && playerTileCoordinate.getY() >= cartesianBound.getTopLeft().getY()
            && playerTileCoordinate.getX() >= cartesianBound.getBottomLeft().getX()
            && playerTileCoordinate.getX() <= cartesianBound.getBottomRight().getX();
      }
    );

    if (filter.length > 1) {
      throw new Error(`More than 1 bound in MeetingLocationBoundsMap#BOUNDS intersect: ${filter}`);
    }

    if (filter.length === 1) {
      return filter[0][1];
    }

    return null;
  }
}