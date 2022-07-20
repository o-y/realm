import {Util} from '@/util/Util';
import {SpriteAnimationData} from '@/base/prometheus/sprite/internal/animation/SpriteAnimationData';

export abstract class AbstractSprite {
  public abstract provideAssetPath(): string;

  public abstract provideFrameWidth(): number;

  public abstract provideFrameHeight(): number;

  public abstract provideSpriteAnimationData(): SpriteAnimationData

  public get spriteHash() {
    return Util.hashCode(this.provideAssetPath()).toString()
  }
}