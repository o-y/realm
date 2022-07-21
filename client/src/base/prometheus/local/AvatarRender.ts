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

export class AvatarRender extends AvatarPlugin {
  private readonly avatarCameraPlugin: AvatarCamera = AvatarPlugin
      .withAvatarPlugin<this, AvatarCamera>(this, AvatarCamera);

  private readonly playersLayer: PlayersLayer = LayerManager
      .forScene(this.getAvatarPluginData().getScene())
      .getPlayersLayer();

  private readonly avatarController: LocalAvatarController = AvatarPlugin
      .withAvatarPlugin<this, LocalAvatarController>(this, LocalAvatarController);

  private readonly spritePlugin: SpritePlugin = SpritePlugin
      .withAvatarPlugin<this, SpritePlugin>(this, SpritePlugin);

  private avatarObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | null = null;
  private avatarSprite!: AbstractSprite;

  private lastPositionX = this.getAvatar().getTileCoordinate().getX();
  private lastPositionY = this.getAvatar().getTileCoordinate().getY();

  public startRender(): AvatarRender {
    this.avatarObject = this.createAvatarObject();
    return this;
  }

  public awaitInputAndGenerateTerrain(realmGenerator: RealmGenerator) {
    this.avatarController.awaitInput(this.getAvatarObject(), this.chooseSprite());
    this.generateTerrainSurroundingPlayer(realmGenerator);
  }

  private generateTerrainSurroundingPlayer(realmGenerator: RealmGenerator) {
    const avatarObject: Phaser.Types.Physics.Arcade.ImageWithDynamicBody = this.getAvatarObject();

    const worldToTileConversionCoordinate = CoordinateUtil.convertWorldSpaceToTileCoordinate(
        avatarObject.x,
        avatarObject.y
    )

    if (worldToTileConversionCoordinate.getY() != this.lastPositionY || worldToTileConversionCoordinate.getX() != this.lastPositionX){
      realmGenerator.loadGenerationAt(
          /* current = */ Coordinate.of(this.lastPositionX, this.lastPositionY),
          /* next = */ Coordinate.of(worldToTileConversionCoordinate.getX(), worldToTileConversionCoordinate.getY())
      )

      this.lastPositionY = worldToTileConversionCoordinate.getY();
      this.lastPositionX = worldToTileConversionCoordinate.getX();
    }
  }

  private createAvatarObject(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
    this.avatarSprite = this.chooseSprite();

    const avatar: Avatar = this.getAvatarPluginData().getAvatar();
    const scene: PhaserWorldGenScene = this.getAvatarPluginData().getScene();
    const spriteAnimationPlayer: SpriteAnimationPlayer = this.spritePlugin.instrumentSpriteWith(this.avatarSprite);

    const tileToWorldSpaceCoordinate = CoordinateUtil.convertTileToWorldSpaceCoordinate(
        avatar.getTileCoordinate().getX(),
        avatar.getTileCoordinate().getY()
    )

    const playerObject = scene.physics.add.sprite(
        tileToWorldSpaceCoordinate.getX(),
        tileToWorldSpaceCoordinate.getY(),
        this.avatarSprite.spriteHash,
        this.avatarSprite.provideSpriteAnimationData().staticForward
    );

    playerObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.DOWN_STATIC))

    this.playersLayer.add(playerObject);
    scene.cameras.main.startFollow(playerObject);

    return playerObject;
  }

  private getAvatarObject(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
    Util.assert(this.avatarObject != null, "#avatarObject is null. Ensure #createAvatarObject has been invoked.");
    return this.avatarObject!;
  }

  private chooseSprite(): AbstractSprite {
    // TODO: Implement. Ideally there will be 3-4 different sprites and we create
    // a one-way function to map names/ids/something -> sprites.
    return SpriteManager.provideDefaultSprite();
  }
}