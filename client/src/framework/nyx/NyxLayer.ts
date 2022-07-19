export class NyxLayer extends Phaser.GameObjects.Layer {
  protected constructor(scene: Phaser.Scene) {
    super(scene);
    scene.add.existing(this);
  }

  public static forScene(scene: Phaser.Scene): NyxLayer {
    return new NyxLayer(scene);
  }
}