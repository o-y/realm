import TileObject from '@/base/tile/TileObject';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';

const GameObjectFactory = Phaser.GameObjects.GameObjectFactory.prototype;

declare global {
  namespace Phaser.GameObjects {
    interface GameObjectFactory {
      nyxTileObjectImage(x: number, y: number, tileObject: TileObject<TileUnion>): Phaser.GameObjects.Image
    }
  }
}

GameObjectFactory.nyxTileObjectImage = function(
    x: number,
    y: number,
    tileObject: TileObject<TileUnion>
): Phaser.GameObjects.Image {
  return this.image(x, y, tileObject.imageHash)
}

export {};