declare global {
  namespace Phaser.GameObjects {
    interface GameObjectFactory {
      nyxImage(): any;
    }
  }
}

Phaser.GameObjects.GameObjectFactory.prototype.nyxImage = function(): any {

}

export {};