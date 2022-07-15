import {Avatar} from '@/base/prometheus/data/Avatar';
import {LayerManager} from '@/base/layer/LayerManager';
import PhaserWorldGenScene from '@/base/scenes/PhaserWorldGenScene';
import TileObject from '@/base/tile/TileObject';
import {PlayersLayer} from '@/base/layer/layers/PlayersLayer';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';

export class AvatarRender {
  private avatar: Avatar;
  private phaserWorldGenScene: PhaserWorldGenScene;
  private playersLayer: PlayersLayer;

  public static with(avatar: Avatar, phaserWorldGenScene: PhaserWorldGenScene): AvatarRender {
    return new AvatarRender(avatar, phaserWorldGenScene);
  }

  private constructor(avatar: Avatar, phaserWorldGenScene: PhaserWorldGenScene) {
    this.avatar = avatar;
    this.phaserWorldGenScene = phaserWorldGenScene
    this.playersLayer = LayerManager.forScene(phaserWorldGenScene).getPlayersLayer();
  }

  public async startNavigationLoop(): Promise<void> {
    this.renderAvatar()
    for (let i = 0; i < 50; i++){
      // this.avatar.updatePreciseCoordinate(DecimalCoordinate.of(0, i))
      // await new Promise(r => setTimeout(r, 500));
    }
  }

  public renderAvatar() {
    const cartesianBound: CartesianBound = this.avatar.computeViewPortBoundary();
    const playerSize: number = TileObject.TILE_SIZE;

    let player: Phaser.GameObjects.Rectangle = this.phaserWorldGenScene.add.rectangle(
        (playerSize / 2) + (cartesianBound.getWidth() / 2) * TileObject.TILE_SIZE,
        (playerSize / 2) + (cartesianBound.getHeight() / 2) * TileObject.TILE_SIZE,
        playerSize,
        playerSize,
        0xffffff
    );

    let playerIdentifier = this.phaserWorldGenScene.add.text(
        9 + (cartesianBound.getWidth() / 2) * TileObject.TILE_SIZE,
        (cartesianBound.getHeight() / 2) * TileObject.TILE_SIZE,
        "X",
        {
          fontSize: "50px",
          color: "#34495e"
        }
    )

    // TODO: Create a NyxLayer class and provide useful functionality.
    this.playersLayer.add(player);
    this.playersLayer.add(playerIdentifier);
  }
}