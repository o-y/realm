import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import {GenesisSprite} from '@/base/prometheus/sprite/data/sprites/GenesisSprite';
import {LyraRedHairedSprite} from '@/base/prometheus/sprite/data/sprites/LyraRedHairedSprite';
import {LyraPurpleHairedSprite} from '@/base/prometheus/sprite/data/sprites/LyraPurpleHairedSprite';
import {LyraBlondeHairedSprite} from '@/base/prometheus/sprite/data/sprites/LyraBlondeHairedSprite';
import {LyraBlondeHairedRedDressedSprite} from '@/base/prometheus/sprite/data/sprites/LyraBlondeHairedRedDressedSprite';
import {BrunoSprite} from '@/base/prometheus/sprite/data/sprites/BrunoSprite';
import {BrunoBlackHairedSprite} from '@/base/prometheus/sprite/data/sprites/BrunoBlackHairedSprite';

export class SpriteManager {
  private static spriteSet: Set<AbstractSprite> = new Set<AbstractSprite>([
    new GenesisSprite(),
    new LyraBlondeHairedSprite(),
    new BrunoSprite(),
    new LyraBlondeHairedRedDressedSprite(),
    new BrunoBlackHairedSprite(),
    new LyraRedHairedSprite(),
    new LyraPurpleHairedSprite(),
  ])

  public static provideSprites(): Set<AbstractSprite> {
    return SpriteManager.spriteSet;
  }

  public static provideSpriteArray(): Array<AbstractSprite> {
    return [...SpriteManager.spriteSet];
  }

  public static provideDefaultSprite(): AbstractSprite {
    return new GenesisSprite();
  }

  private constructor() {}
}