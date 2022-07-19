import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';

export class ChunkData {
  private readonly top: NonDecimalCoordinate;
  private readonly below: NonDecimalCoordinate;
  private readonly left: NonDecimalCoordinate;
  private readonly right: NonDecimalCoordinate;

  private readonly topLeft: NonDecimalCoordinate;
  private readonly topRight: NonDecimalCoordinate;
  private readonly bottomLeft: NonDecimalCoordinate;
  private readonly bottomRight: NonDecimalCoordinate;

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

  public getAdjacentChunks(): Set<NonDecimalCoordinate> {
    return new Set([
      this.top, this.below, this.left, this.right, this.topLeft,
      this.topRight, this.bottomLeft, this.bottomRight
    ]);
  }
}