export class BaseLayer extends Phaser.GameObjects.Layer {
  constructor(scene: Phaser.Scene) {
    super(scene);
    scene.add.existing(this);
  }
}