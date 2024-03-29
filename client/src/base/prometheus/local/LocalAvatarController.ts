import {AvatarPlugin} from '@/base/prometheus/internal/AvatarPlugin';
import {Avatar} from '@/base/prometheus/data/Avatar';
import PhaserWorldGenScene from '@/base/scenes/PhaserWorldGenScene';
import {SpriteAnimationPlayer, SpritePlugin} from '@/base/prometheus/sprite/animation/SpriteAnimationPlayer';
import {ACTIVE_TO_STATIC_SPRITE_STATE_CONVERSION, SpriteState, STATIC_SPRITE_STATE, STATIC_TO_ACTIVE_SPRITE_STATE_CONVERSION} from '@/base/prometheus/sprite/data/SpriteState';
import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import {SpriteAnimationPool} from '@/base/prometheus/sprite/animation/SpriteAnimationPool';
import {AvatarObjectRender} from '@/base/prometheus/std/AvatarObjectRender';

export class LocalAvatarController extends AvatarPlugin {
  public static PLAYER_VELOCITY: number = 90;

  private readonly spritePlugin: SpritePlugin = SpritePlugin
      .withAvatarPlugin<this, SpritePlugin>(this, SpritePlugin);

  private readonly cursor = this.getScene().input.keyboard.createCursorKeys();

  public awaitInput(avatarObjectRender: AvatarObjectRender, avatarSprite: AbstractSprite) {
    const avatar: Avatar = this.getAvatar();
    const scene: PhaserWorldGenScene = this.getScene();
    const spriteAnimationPlayer: SpriteAnimationPlayer = this.spritePlugin.instrumentSpriteWith(avatarSprite);
    const avatarObject = avatarObjectRender.getAvatarObject();

    avatarObject.setVelocity(0, 0);

    if (this.cursor.up.isDown) {
      avatarObject.setVelocity(0, LocalAvatarController.PLAYER_VELOCITY * -1);

      if (this.getCurrentSpriteState(avatarObject, avatarSprite) != SpriteState.UP){
        avatarObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.UP));
      }
    } else if (this.cursor.down.isDown) {
      avatarObject.setVelocity(0,LocalAvatarController.PLAYER_VELOCITY);

      if (this.getCurrentSpriteState(avatarObject, avatarSprite) != SpriteState.DOWN){
        avatarObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.DOWN));
      }
    } else if (this.cursor.left.isDown) {
      avatarObject.setVelocity( LocalAvatarController.PLAYER_VELOCITY * -1, 0);

      if (this.getCurrentSpriteState(avatarObject, avatarSprite) != SpriteState.LEFT){
        avatarObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.LEFT));
      }
    } else if (this.cursor.right.isDown) {
      avatarObject.setVelocity( LocalAvatarController.PLAYER_VELOCITY, 0);

      if (this.getCurrentSpriteState(avatarObject, avatarSprite) != SpriteState.RIGHT){
        avatarObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.RIGHT));
      }
    }

    if (this.noKeysDown) {
      let currentState = this.getCurrentSpriteState(avatarObject, avatarSprite);
      if (currentState == null) return;

      if (STATIC_SPRITE_STATE.has(currentState)) return;

      avatarObject.play(spriteAnimationPlayer.getAnimationFor(
          ACTIVE_TO_STATIC_SPRITE_STATE_CONVERSION.get(currentState)!
      ))
    } else {
      avatarObjectRender.recomputePositions();
    }
  }

  private getCurrentSpriteState(avatarObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody, avatarSprite: AbstractSprite): SpriteState | null {
    let key: string = avatarObject?.anims?.currentAnim?.key;
    if (key === undefined) return null;

    let currentState: string = Object.values(SpriteState).filter(
        val => key === SpriteAnimationPool.getAnimationKeyFor(avatarSprite, val)
    )[0];

    return <SpriteState> currentState;
  }

  private get noKeysDown() {
    return !this.cursor.right.isDown && !this.cursor.left.isDown &&
        !this.cursor.up.isDown && !this.cursor.down.isDown;
  }
}