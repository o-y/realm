import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';
import {AvatarObjectRender} from '@/base/prometheus/std/AvatarObjectRender';

export class AvatarPathFinder {
  private readonly avatarObjectRender: AvatarObjectRender;

  constructor(avatarObjectRender: AvatarObjectRender) {
    this.avatarObjectRender = avatarObjectRender;
  }

  // TODO: The transition is currently not smooth, implement a simplified path
  //  finding heuristic here.
  public walkFrom(fromTileCoordinate: NonDecimalCoordinate, toTileCoordinate: NonDecimalCoordinate) {
    const tileToWorldSpaceCoordinate = CoordinateUtil.convertTileToWorldSpaceCoordinate(
        toTileCoordinate.getX(),
        toTileCoordinate.getY()
    )

    this.avatarObjectRender.getAvatarObject().setPosition(
        tileToWorldSpaceCoordinate.getX(),
        tileToWorldSpaceCoordinate.getY()
    );

    this.avatarObjectRender.recomputePositions();
  }
}