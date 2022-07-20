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

export class AvatarRender extends AvatarPlugin {
  private readonly avatarCameraPlugin: AvatarCamera = AvatarPlugin
      .withAvatarPlugin<this, AvatarCamera>(this, AvatarCamera);

  private readonly spritePlugin: SpritePlugin = SpritePlugin
      .withAvatarPlugin<this, SpritePlugin>(this, SpritePlugin);

  private readonly playersLayer: PlayersLayer = LayerManager
      .forScene(this.getAvatarPluginData().getScene())
      .getPlayersLayer();

  private avatarObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | null = null;

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  private avatarSprite!: AbstractSprite;

  // TODO: x and y should not be hardcoded.
  private lastPositionX = 0;
  private lastPositionY = 0;

  public startRender(): AvatarRender {
    this.avatarObject = this.createAvatar();
    this.cursors = this.getScene().input.keyboard.createCursorKeys()
    return this;
  }

  public awaitInputAndGenerateTerrain(realmGenerator: RealmGenerator) {
    const avatarObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody = this.getAvatarObject();
    const avatar: Avatar = this.getAvatar();
    const scene: PhaserWorldGenScene = this.getScene();
    const spriteAnimationPlayer: SpriteAnimationPlayer = this.spritePlugin
        .instrumentSpriteWith(this.avatarSprite);

    const speed = 80;

    if (scene.input.keyboard.checkDown(this.cursors.left, 150)) {
      avatarObject.setVelocityX(-speed);
      avatarObject.setVelocityY(0);
      avatarObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.LEFT))
    } else if (scene.input.keyboard.checkDown(this.cursors.right, 150)) {
      avatarObject.setVelocityX(speed);
      avatarObject.setVelocityY(0);
      avatarObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.RIGHT))
    }

    if (scene.input.keyboard.checkDown(this.cursors.up, 150)) {
      avatarObject.setVelocityY(-speed);
      avatarObject.setVelocityX(0);
      avatarObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.UP))
    } else if (scene.input.keyboard.checkDown(this.cursors.down, 150)) {
      avatarObject.setVelocityY(speed);
      avatarObject.setVelocityX(0);
      avatarObject.play(spriteAnimationPlayer.getAnimationFor(SpriteState.DOWN))
    }


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

  private createAvatar(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
    const avatar: Avatar = this.getAvatarPluginData().getAvatar();
    const scene: PhaserWorldGenScene = this.getAvatarPluginData().getScene();
    this.avatarSprite = this.chooseSprite();

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

    this.playersLayer.add(playerObject);
    scene.cameras.main.startFollow(playerObject);

    return playerObject;
  }

  private getAvatarObject(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
    Util.assert(this.avatarObject != null, "#avatarObject is null. Ensure #createAvatar has been invoked.");
    return this.avatarObject!;
  }

  private chooseSprite(): AbstractSprite {
    // TODO: Implement. Ideally there will be 3-4 different sprites and we create
    // a one-way function to map names/ids/something -> sprites.
    return SpriteManager.provideDefaultSprite();
  }
}