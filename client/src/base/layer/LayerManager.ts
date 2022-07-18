import {BaseLayer} from '@/base/layer/layers/BaseLayer';
import {PlayersLayer} from '@/base/layer/layers/PlayersLayer';
import {PrefabLayer} from '@/base/layer/layers/PrefabLayer';

export class LayerManager {
  private readonly baseLayer: BaseLayer;
  private readonly playersLayer: PlayersLayer;
  private readonly prefabLayer: PrefabLayer;
  private readonly scene: Phaser.Scene;

  public static forScene(scene: Phaser.Scene): LayerManager {
    return new LayerManager(scene);
  }

  private constructor(scene: Phaser.Scene) {
    this.scene = scene;

    this.playersLayer = PlayersLayer.forScene(scene).setDepth(3);
    this.prefabLayer = PrefabLayer.forScene(scene).setDepth(2);
    this.baseLayer = BaseLayer.forScene(scene).setDepth(1);
  }

  public getBaseLayer() {
    return this.baseLayer
  }

  public getPlayersLayer() {
    return this.playersLayer
  }

  public getPrefabLayer() {
    return this.prefabLayer
  }
}