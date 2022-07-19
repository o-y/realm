import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';

export class Chunk {
  private readonly group: Phaser.GameObjects.Group;
  private readonly chunkCoordinate: NonDecimalCoordinate;


  constructor(group: Phaser.GameObjects.Group, chunkCoordinate: NonDecimalCoordinate) {
    this.group = group;
    this.chunkCoordinate = chunkCoordinate;
  }

  public addObjectToGroup(object:  Phaser.GameObjects.Rectangle | Phaser.GameObjects.Image) {
    this.group.add(object);
  }

  public unloadChunk() {
    this.group.clear(true, true);
  }

  public getCoordinate(): NonDecimalCoordinate {
    return this.chunkCoordinate;
  }
}