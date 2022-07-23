import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';

export class AvatarPathFinder {
  private readonly avatarObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  constructor(avatarObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody) {
    this.avatarObject = avatarObject;
  }

  // TODO: The transition is currently not smooth, implement a simplified path
  //  finding heuristic here.
  public walkFrom(fromTileCoordinate: NonDecimalCoordinate, toTileCoordinate: NonDecimalCoordinate) {
    const tileToWorldSpaceCoordinate = CoordinateUtil.convertTileToWorldSpaceCoordinate(
        toTileCoordinate.getX(),
        toTileCoordinate.getY()
    )

    this.avatarObject.setPosition(
        tileToWorldSpaceCoordinate.getX(),
        tileToWorldSpaceCoordinate.getY()
    );
  }
}