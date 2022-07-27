import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';
import {AvatarObjectRender} from '@/base/prometheus/std/AvatarObjectRender';
import {LocalAvatarController} from '@/base/prometheus/local/LocalAvatarController';
import TileObject from '@/base/tile/TileObject';
import {SpriteAnimationPlayer, SpritePlugin} from '@/base/prometheus/sprite/animation/SpriteAnimationPlayer';
import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import {SpriteState} from '@/base/prometheus/sprite/data/SpriteState';

export class AvatarPathFinder {
  // This will need to be updated based on update delta / fps.
  private static readonly PIXELS_PER_SECOND = LocalAvatarController.PLAYER_VELOCITY / TileObject.TILE_SIZE

  private readonly avatarObjectRender: AvatarObjectRender;
  private readonly spritePlugin: SpritePlugin;

  constructor(avatarObjectRender: AvatarObjectRender, spritePlugin: SpritePlugin) {
    this.avatarObjectRender = avatarObjectRender;
    this.spritePlugin = spritePlugin;
  }

  public walkFrom(fromTileCoordinate: NonDecimalCoordinate, toTileCoordinate: NonDecimalCoordinate, sprite: AbstractSprite) {
    const scene = this.avatarObjectRender.getAvatarObject().scene;
    const spriteAnimationPlayer: SpriteAnimationPlayer = this.spritePlugin.instrumentSpriteWith(sprite);

    const fromTileToWorldSpaceCoordinate = CoordinateUtil.convertTileToWorldSpaceCoordinate(
        fromTileCoordinate.getX(),
        fromTileCoordinate.getY()
    )

    const tileToWorldSpaceCoordinate = CoordinateUtil.convertTileToWorldSpaceCoordinate(
        toTileCoordinate.getX(),
        toTileCoordinate.getY()
    )

    const movementDirection = this.calculateMovementDirection(fromTileCoordinate, toTileCoordinate);
    const movementDifferential = this.calculateMovementDifferential(fromTileCoordinate, toTileCoordinate);

    if (movementDirection === MovementDirection.NONE) {
      return;
    }

    // If the difference is > 1 it means either the client's network connection
    //
    if (movementDifferential > 1) {
      this.avatarObjectRender.getAvatarObject().setPosition(
          tileToWorldSpaceCoordinate.getX(),
          tileToWorldSpaceCoordinate.getY()
      );
      this.avatarObjectRender.recomputePositions();
      return;
    }

    if (movementDirection === MovementDirection.UP || movementDirection === MovementDirection.DOWN) {
      scene.tweens.add({
        targets: this.avatarObjectRender.getAvatarObject(),
        duration: 350,
        y: tileToWorldSpaceCoordinate.getY(),
        onStart: () => {
          if (movementDirection === MovementDirection.UP){
            this.avatarObjectRender.getAvatarObject().play(spriteAnimationPlayer.getAnimationFor(SpriteState.UP));
          } else {
            this.avatarObjectRender.getAvatarObject().play(spriteAnimationPlayer.getAnimationFor(SpriteState.DOWN));
          }
        },
        onComplete: () => {
          if (movementDirection === MovementDirection.UP){
            this.avatarObjectRender.getAvatarObject().play(spriteAnimationPlayer.getAnimationFor(SpriteState.UP_STATIC));
          } else {
            this.avatarObjectRender.getAvatarObject().play(spriteAnimationPlayer.getAnimationFor(SpriteState.DOWN_STATIC));
          }
        }
      })
    } else {
      scene.tweens.add({
        targets: this.avatarObjectRender.getAvatarObject(),
        duration: 350,
        x: tileToWorldSpaceCoordinate.getX(),
        onStart: () => {
          if (movementDirection === MovementDirection.LEFT){
            this.avatarObjectRender.getAvatarObject().play(spriteAnimationPlayer.getAnimationFor(SpriteState.LEFT));
          } else {
            this.avatarObjectRender.getAvatarObject().play(spriteAnimationPlayer.getAnimationFor(SpriteState.RIGHT));
          }
        },
        onComplete: () => {
          if (movementDirection === MovementDirection.LEFT){
            this.avatarObjectRender.getAvatarObject().play(spriteAnimationPlayer.getAnimationFor(SpriteState.LEFT_STATIC));
          } else {
            this.avatarObjectRender.getAvatarObject().play(spriteAnimationPlayer.getAnimationFor(SpriteState.RIGHT_STATIC));
          }
        }
      })
    }


    // this.avatarObjectRender.getAvatarObject().setPosition(
    //     tileToWorldSpaceCoordinate.getX(),
    //     tileToWorldSpaceCoordinate.getY()
    // );

    // if (movementDirection === MovementDirection.LEFT) {
    //   this.avatarObjectRender.getAvatarObject().setVelocityX(LocalAvatarController.PLAYER_VELOCITY * -1);
    //   setTimeout( () => {
    //     this.avatarObjectRender.getAvatarObject().setVelocityX(0)
    //   }, AvatarPathFinder.PIXELS_PER_SECOND * 1000)
    // }
  }

  private calculateMovementDirection(fromTileCoordinate: NonDecimalCoordinate, toTileCoordinate: NonDecimalCoordinate): MovementDirection {
    if (fromTileCoordinate.getY() > toTileCoordinate.getY()) {
      return MovementDirection.UP;
    } else if (fromTileCoordinate.getY() < toTileCoordinate.getY()) {
      return MovementDirection.DOWN;
    } else if (fromTileCoordinate.getX() > toTileCoordinate.getX()) {
      return MovementDirection.LEFT
    }  else if (fromTileCoordinate.getX() < toTileCoordinate.getX()) {
      return MovementDirection.RIGHT
    }

    return MovementDirection.NONE;
  }

  private calculateMovementDifferential(fromTileCoordinate: NonDecimalCoordinate, toTileCoordinate: NonDecimalCoordinate): number {
    const movementDirection: MovementDirection = this.calculateMovementDirection(fromTileCoordinate, toTileCoordinate);

    if (movementDirection === MovementDirection.UP || movementDirection === MovementDirection.DOWN) {
      return Math.abs(fromTileCoordinate.getY() - toTileCoordinate.getY());
    }

    if (movementDirection === MovementDirection.LEFT || movementDirection === MovementDirection.RIGHT) {
      return Math.abs(fromTileCoordinate.getX() - toTileCoordinate.getX());
    }

    return 0;
  }
}

enum MovementDirection {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  NONE = "NONE"
}