import NyxScene from '@/framework/nyx/NyxScene';
import {AvatarPlugin, AvatarPluginData} from '@/base/prometheus/internal/AvatarPlugin';
import {SpriteState} from '@/base/prometheus/sprite/data/SpriteState';
import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import {SpriteAnimationPool} from '@/base/prometheus/sprite/animation/SpriteAnimationPool';

export class SpriteAnimationPlayer {
  private avatarPluginData: AvatarPluginData;
  private sprite: AbstractSprite;
  private spriteAnimationPool: SpriteAnimationPool;

  constructor(sprite: AbstractSprite, avatarPluginData: AvatarPluginData) {
    this.avatarPluginData = avatarPluginData;
    this.sprite = sprite;
    this.spriteAnimationPool = SpriteAnimationPool
        .with(avatarPluginData.getScene(), sprite);

    this.registerAnimationStates();
  }

  public getAnimationFor(spriteState: SpriteState) {
    return SpriteAnimationPool.getAnimationKeyFor(this.sprite, spriteState)
  }

  private registerAnimationStates() {
    const spriteAnimationData = this.sprite.provideSpriteAnimationData();

    //=========----------========/
    //========= MOVEMENT ========/
    //=========----------========/

    // UP
    this.spriteAnimationPool.registerAnimation(SpriteState.UP, [
      spriteAnimationData.backwardMovement0,
      spriteAnimationData.staticBackward,
      spriteAnimationData.backwardMovement1,
      spriteAnimationData.staticBackward,
    ])

    // DOWN
    this.spriteAnimationPool.registerAnimation(SpriteState.DOWN, [
      spriteAnimationData.forwardMovement0,
      spriteAnimationData.staticForward,
      spriteAnimationData.forwardMovement1,
      spriteAnimationData.staticForward,
    ])

    // LEFT
    this.spriteAnimationPool.registerAnimation(SpriteState.LEFT, [
      spriteAnimationData.leftMovement0,
      spriteAnimationData.staticLeft,
      spriteAnimationData.leftMovement1,
      spriteAnimationData.staticLeft,
    ])

    // RIGHT
    this.spriteAnimationPool.registerAnimation(SpriteState.RIGHT, [
      spriteAnimationData.rightMovement0,
      spriteAnimationData.staticRight,
      spriteAnimationData.rightMovement1,
      spriteAnimationData.staticRight,
    ])

    //==========--------=========/
    //========== STATIC =========/
    //==========--------=========/

    // UP_STATIC
    this.spriteAnimationPool.registerAnimation(SpriteState.UP_STATIC, [
      spriteAnimationData.staticBackward,
    ],false)

    // DOWN_STATIC
    this.spriteAnimationPool.registerAnimation(SpriteState.DOWN_STATIC, [
      spriteAnimationData.staticForward,
    ],false)

    // LEFT_STATIC
    this.spriteAnimationPool.registerAnimation(SpriteState.LEFT_STATIC, [
      spriteAnimationData.staticLeft,
    ],false)

    // RIGHT_STATIC
    this.spriteAnimationPool.registerAnimation(SpriteState.RIGHT_STATIC, [
      spriteAnimationData.staticRight,
    ],false)
  }
}

/** Helper class */
export class SpritePlugin extends AvatarPlugin {
  public instrumentSpriteWith(sprite: AbstractSprite): SpriteAnimationPlayer {
    return new SpriteAnimationPlayer(sprite, super.getAvatarPluginData())
  }
}