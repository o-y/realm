import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import {LyraSprite} from '@/base/prometheus/sprite/data/LyraSprite';

export class SpriteManager {
  public static provideSprites(): Set<AbstractSprite> {
    return new Set<AbstractSprite>([
        new LyraSprite()
    ])
  }

  public static provideDefaultSprite(): AbstractSprite {
    return new LyraSprite();
  }

  private constructor() {}
}