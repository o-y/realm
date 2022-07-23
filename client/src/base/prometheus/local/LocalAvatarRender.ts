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
import {AvatarRender} from '@/base/prometheus/std/AvatarRender';

export class LocalAvatarRender extends AvatarRender {
  private readonly avatarCameraPlugin: AvatarCamera = AvatarPlugin
      .withAvatarPlugin<this, AvatarCamera>(this, AvatarCamera);

  private readonly avatarController: LocalAvatarController = AvatarPlugin
      .withAvatarPlugin<this, LocalAvatarController>(this, LocalAvatarController);

  public getAvatarObject(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
    const avatarObject = super.getAvatarObject();
    super.getScene().cameras.main.startFollow(avatarObject);
    return avatarObject;
  }

  public awaitInputAndGenerateTerrain(realmGenerator: RealmGenerator) {
    this.avatarController.awaitInput(this.getAvatarObject(), this.provideSprite());
    this.generateTerrainSurroundingPlayer(realmGenerator);
  }

  private lastPositionX = this.getAvatar().getTileCoordinate().getX();
  private lastPositionY = this.getAvatar().getTileCoordinate().getY();

  private lastExactPositionX = this.lastPositionX;
  private lastExactPositionY = this.lastPositionY;

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

      const localPeer: LocalPeer = <LocalPeer> this.getAvatar().getPeer();
      localPeer.updatePosition(worldToTileConversionCoordinate);

      this.lastPositionY = worldToTileConversionCoordinate.getY();
      this.lastPositionX = worldToTileConversionCoordinate.getX();
    }


  }
}