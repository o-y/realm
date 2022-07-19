import {Avatar} from '@/base/prometheus/data/Avatar';
import {LayerManager} from '@/base/layer/LayerManager';
import PhaserWorldGenScene from '@/base/scenes/PhaserWorldGenScene';
import {PlayersLayer} from '@/base/layer/layers/PlayersLayer';
import {AvatarPlugin} from '@/base/prometheus/internal/AvatarPlugin';
import {AvatarCamera} from '@/base/prometheus/theia/AvatarCamera';
import NatureTileProvider, {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';
import {Util} from '@/util/Util';

export class AvatarRender extends AvatarPlugin {
  public readonly avatarCamera: AvatarCamera = AvatarPlugin
      .withAvatarPlugin<this, AvatarCamera>(this, AvatarCamera);

  public readonly playersLayer: PlayersLayer = LayerManager
      .forScene(this.getAvatarPluginData().getScene())
      .getPlayersLayer();

  private avatarObject: Phaser.Types.Physics.Arcade.ImageWithDynamicBody | null = null;

  public startRender(): AvatarRender {
    this.avatarObject = this.createAvatar();
    this.avatarCamera.initiateCameraView();

    return this;
  }

  public createAvatar(): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    const avatar: Avatar = this.getAvatarPluginData().getAvatar();
    const scene: PhaserWorldGenScene = this.getAvatarPluginData().getScene();

    const playerObject: Phaser.Types.Physics.Arcade.ImageWithDynamicBody = scene.physics.add.image(
        0,
        0,
        CommonTileProvider.getNatureTile(NatureTile.SHRUB_ON_GRASS).imageHash
    );

    this.playersLayer.add(playerObject);
    scene.cameras.main.startFollow(playerObject)

    setTimeout(() => {
      let velo = 120
      playerObject.setVelocityY(velo)
      playerObject.setVelocityX(velo)

      // playerObject.setY(TileObject.TILE_SIZE * Client.WORLD_VIEWPORT_GENERATION_OFFSET_WIDTH - TileObject.TILE_SIZE * 3)
    }, 3000)

    return playerObject;
  }

  public getAvatarObject(): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    Util.assert(this.avatarObject != null, "#avatarObject is null!");
    return this.avatarObject!;
  }
}