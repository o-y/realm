import {Avatar} from '@/base/prometheus/data/Avatar';
import {LayerManager} from '@/base/layer/LayerManager';
import PhaserWorldGenScene from '@/base/scenes/PhaserWorldGenScene';
import {PlayersLayer} from '@/base/layer/layers/PlayersLayer';
import {AvatarPlugin} from '@/base/prometheus/internal/AvatarPlugin';
import {AvatarCamera} from '@/base/prometheus/theia/AvatarCamera';
import {Util} from '@/util/Util';
import {SpriteManager} from '@/base/prometheus/sprite/manager/SpriteManager';
import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import {SpriteAnimationPlayer, SpritePlugin} from '@/base/prometheus/sprite/animation/SpriteAnimationPlayer';
import {SpriteState} from '@/base/prometheus/sprite/data/SpriteState';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {LocalAvatarController} from '@/base/prometheus/local/LocalAvatarController';
import {LocalPeer} from '@/base/supabase/peer/LocalPeer';
import {Peer} from '@/base/supabase/peer/Peer';
import TileObject from '@/base/tile/TileObject';
import {AvatarObjectRender} from '@/base/prometheus/std/AvatarObjectRender';

export class AvatarRender extends AvatarPlugin {
  private readonly playersLayer: PlayersLayer = LayerManager
      .forScene(this.getAvatarPluginData().getScene())
      .getPlayersLayer();

  private readonly spritePlugin: SpritePlugin = SpritePlugin
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
        (avatar.isLocalAvatar() ? "> " : "") + avatar.getUsername() + (avatar.isLocalAvatar() ? " <" : ""),
        {
        }
    ).setResolution(10)

    const avatarObjectsRender: AvatarObjectRender = AvatarObjectRender
        .with(avatar, this.playersLayer)
        .setAvatarObject(playerObject)
        .setUsernameObject(playerUsername)
        .recomputePositions()

    playerObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.DOWN_STATIC))

    return avatarObjectsRender;
  }

  public provideSprite(): AbstractSprite {
    // TODO: Implement. Ideally there will be 3-4 different sprites and we create
    // a one-way function to map names/ids/something -> sprites.
    return SpriteManager.provideDefaultSprite();
  }
}