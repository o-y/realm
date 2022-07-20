import NyxScene from '@/framework/nyx/NyxScene';
import {SpriteState} from '@/base/prometheus/sprite/data/SpriteState';
import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';

export class SpriteAnimationPool {
  private readonly scene: NyxScene;
  private readonly sprite: AbstractSprite;

  private constructor(scene: NyxScene, sprite: AbstractSprite) {
    this.scene = scene;
    this.sprite = sprite;
  }

  public static with(scene: NyxScene, sprite: AbstractSprite) {
    return new SpriteAnimationPool(scene, sprite);
  }

  public registerAnimation(direction: SpriteState, frames: Array<number>, shouldRepeat: boolean = true) {
    const key = SpriteAnimationPool.getAnimationKeyFor(this.sprite, direction);
    if (this.scene.anims.get(key) !== undefined) return;

    this.scene.anims.create({
      key: key,
      frames: this.scene.anims.generateFrameNumbers(this.sprite.spriteHash, {
        frames: frames
      }),
      frameRate: 3,
      repeat: shouldRepeat ? -1 : 0
    });
  }

  public static getAnimationKeyFor(sprite: AbstractSprite, direction: SpriteState) {
    return `${sprite.spriteHash}_${direction}`
  }
}