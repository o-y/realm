import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';

export class ChunkLoader {
  static computeAdjacentChunks(currentChunkCoordinate: NonDecimalCoordinate): ChunkData {
    const x = currentChunkCoordinate.getX();
    const y = currentChunkCoordinate.getY();

    return new ChunkData(
        NonDecimalCoordinate.of(x, y + 1),
        NonDecimalCoordinate.of(x, y - 1),
        NonDecimalCoordinate.of(x - 1, y),
        NonDecimalCoordinate.of(x + 1, y),

        NonDecimalCoordinate.of(x - 1, y + 1),
        NonDecimalCoordinate.of(x + 1, y + 1),

        NonDecimalCoordinate.of(x - 1, y - 1),
        NonDecimalCoordinate.of(x + 1, y - 1),
    )
  }
}

export class ChunkData {
  private top: NonDecimalCoordinate;
  private below: NonDecimalCoordinate;
  private left: NonDecimalCoordinate;
  private right: NonDecimalCoordinate;

  private topLeft: NonDecimalCoordinate;
  private topRight: NonDecimalCoordinate;
  private bottomLeft: NonDecimalCoordinate;
  private bottomRight: NonDecimalCoordinate;


  constructor(top: NonDecimalCoordinate, below: NonDecimalCoordinate, left: NonDecimalCoordinate, right: NonDecimalCoordinate, topLeft: NonDecimalCoordinate, topRight: NonDecimalCoordinate, bottomLeft: NonDecimalCoordinate, bottomRight: NonDecimalCoordinate) {
    this.top = top;
    this.below = below;
    this.left = left;
    this.right = right;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
  }

  public getAdjacentChunks(): Array<NonDecimalCoordinate> {
    return [
        this.top, this.below, this.left, this.right, this.topLeft, this.topRight, this.bottomLeft, this.bottomRight
    ]
  }
}