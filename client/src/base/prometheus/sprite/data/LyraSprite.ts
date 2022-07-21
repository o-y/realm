import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import TileObject from '@/base/tile/TileObject';
import {SpriteAnimationData} from '@/base/prometheus/sprite/internal/animation/SpriteAnimationData';
import {SpriteAnimationDataBuilder} from '@/base/prometheus/sprite/internal/animation/SpriteAnimationDataBuilder';

/**
 * NOTE: Sprites exist at base/client/public/static/spritesheet/*
 */
export class LyraSprite extends AbstractSprite {
  provideAssetPath(): string {
    return "/static/spritesheet/lyra-sprite-sheet.png";
  }

  provideFrameWidth(): number {
    return TileObject.TILE_SIZE;
  }

  provideFrameHeight(): number {
    return TileObject.TILE_SIZE;
  }

  provideSpriteAnimationData(): SpriteAnimationData {
    return new SpriteAnimationDataBuilder()
        .setRightMovement0(0)           // TODO: these are linear, it's a fair
        .setStaticRight(1)              // assumption that all sprite tilesheets
        .setRightMovement1(2)           // will be formatted in a similar way.
        .setLeftMovement0(3)            // a good deal of code and complexity
        .setStaticLeft(4)               // could be avoided if we assume this
        .setLeftMovement1(5)            // assumption holds.
        .setForwardMovement0(6)         // TODO: potentially define a default
        .setStaticForward(7)            // animation builder as a static const,
        .setForwardMovement1(8)         // e.g SpriteAnimationData.DEFAULT.
        .setBackwardMovement0(9)
        .setStaticBackward(10)
        .setBackwardMovement1(11)
        .setAnimation()
  }
}