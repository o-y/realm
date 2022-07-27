import {Avatar} from '@/base/prometheus/data/Avatar';
import {LayerManager} from '@/base/layer/LayerManager';
import PhaserWorldGenScene from '@/base/scenes/PhaserWorldGenScene';
import {PlayersLayer} from '@/base/layer/layers/PlayersLayer';
import {AvatarPlugin} from '@/base/prometheus/internal/AvatarPlugin';
import {Util} from '@/util/Util';
import {SpriteManager} from '@/base/prometheus/sprite/manager/SpriteManager';
import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import {SpriteAnimationPlayer, SpritePlugin} from '@/base/prometheus/sprite/animation/SpriteAnimationPlayer';
import {SpriteState, STATIC_SPRITE_STATE} from '@/base/prometheus/sprite/data/SpriteState';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';
import {AvatarObjectRender} from '@/base/prometheus/std/AvatarObjectRender';

export class AvatarRender extends AvatarPlugin {
  private readonly playersLayer: PlayersLayer = LayerManager
      .forScene(this.getAvatarPluginData().getScene())
      .getPlayersLayer();

  protected readonly spritePlugin: SpritePlugin = SpritePlugin
      .withAvatarPlugin<this, SpritePlugin>(this, SpritePlugin);

  private avatarObject: AvatarObjectRender | null = null;
  private avatarSprite!: AbstractSprite;

  public getAvatarObjectRender(): AvatarObjectRender {
    if (this.avatarObject === null) {
      this.avatarObject = this.createAvatarObject();
    }

    return this.avatarObject;
  }

  private createAvatarObject(): AvatarObjectRender {
    this.avatarSprite = this.provideSprite();

    const avatar: Avatar = this.getAvatarPluginData().getAvatar();
    const scene: PhaserWorldGenScene = this.getAvatarPluginData().getScene();
    const spriteAnimationPlayer: SpriteAnimationPlayer = this.spritePlugin.instrumentSpriteWith(this.avatarSprite);

    const tileToWorldSpaceCoordinate = CoordinateUtil.convertTileToWorldSpaceCoordinate(
        avatar.getTileCoordinate().getX(),
        avatar.getTileCoordinate().getY()
    )

    const playerObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody = scene.physics.add.sprite(
        tileToWorldSpaceCoordinate.getX(),
        tileToWorldSpaceCoordinate.getY(),
        this.avatarSprite.spriteHash,
        this.avatarSprite.provideSpriteAnimationData().staticForward
    );

    const playerUsername: Phaser.GameObjects.Text = scene.add.text(
        tileToWorldSpaceCoordinate.getX(),
        tileToWorldSpaceCoordinate.getY(),
        (avatar.isLocalAvatar() ? "> " : "") + avatar.getUsername() + (avatar.isLocalAvatar() ? " <" : "")
    ).setBackgroundColor("#757575");

    if (avatar.isLocalAvatar()) {
      playerObject.setDepth(Number.MAX_VALUE);
      playerUsername.setDepth(Number.MAX_VALUE);
      playerUsername.setBackgroundColor("#cbabf0")
    }

    const avatarObjectsRender: AvatarObjectRender = AvatarObjectRender
        .with(avatar, this.playersLayer)
        .setAvatarObject(playerObject)
        .setUsernameObject(playerUsername)
        .recomputePositions()

    // This way remote players spawn in a random orientation.
    if (avatar.isLocalAvatar()) {
      playerObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.DOWN_STATIC))
    } else {
      playerObject.play(spriteAnimationPlayer.getAnimationFor(Util.randomFromArray([...STATIC_SPRITE_STATE])))
    }

    return avatarObjectsRender;
  }

  public provideSprite(): AbstractSprite {
    const avatarUsername = this.getAvatarPluginData().getAvatar().getUsername();
    const avatarId = this.getAvatarPluginData().getAvatar().getAvatarId();
    const spriteArray = SpriteManager.provideSpriteArray();

    // The hashCode function returns a 64-bit hash, however JavaScript is limited
    // to 53 bit integers, thus that is the upper bound of the hashcode output.
    // This output is an unsigned integer, meaning the value will always be
    // positive. Any minor change in the inputs value will result in a substantially
    // different output (avalanche effect), however empirically the return values
    // are weighted towards the lower bound.
    // const usernameHash = Util.hashCode(username);

    return spriteArray[avatarId % spriteArray.length]
  }
}