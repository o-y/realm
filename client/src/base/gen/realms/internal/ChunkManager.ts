import {BaseLayer} from '@/base/layer/layers/BaseLayer';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Client} from '@/base/prometheus/local/Client';
import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import TileObject from '@/base/tile/TileObject';

export class ChunkManager {
  private readonly baseLayer: BaseLayer;
  private readonly chunkSparseArray: Array<boolean> = new Array<boolean>();
  private readonly chunkMap: Map<number, Chunk> = new Map<number, Chunk>();

  private constructor(baseLayer: BaseLayer) {
    this.baseLayer = baseLayer;
  }

  static createWith(baseLayer: BaseLayer): ChunkManager {
    return new ChunkManager(baseLayer);
  }

  public computeChunkFromGenerationCoordinate(generationCoordinate: NonDecimalCoordinate): NonDecimalCoordinate {
    return DecimalCoordinate.of(
        Math.floor(generationCoordinate.getX() / Client.WORLD_VIEWPORT_WIDTH),
        Math.floor(generationCoordinate.getY() / Client.WORLD_VIEWPORT_HEIGHT),
    )
  }

  public computeChunkFromGenerationCoordinateApprox(generationCoordinate: NonDecimalCoordinate): DecimalCoordinate {
    return DecimalCoordinate.of(
        generationCoordinate.getX() / Client.WORLD_VIEWPORT_GENERATION_OFFSET_WIDTH,
        generationCoordinate.getY() / Client.WORLD_VIEWPORT_GENERATION_OFFSET_HEIGHT,
    )
  }

  public createChunk(chunkCoordinate: NonDecimalCoordinate): Chunk {
    const chunk = new Chunk(this.baseLayer.scene.add.group(), chunkCoordinate);

    const pairing: number = chunkCoordinate.toCantorsPairing();
    this.chunkSparseArray[pairing] = true;
    this.chunkMap.set(pairing, chunk)

    return chunk;
  }

  public isChunkLoaded(chunkCoordinate: NonDecimalCoordinate): boolean {
    return this.chunkSparseArray[chunkCoordinate.toCantorsPairing()];
  }

  public updateWorldCoordinateLocation(updateWorldCoordinateLocation: NonDecimalCoordinate) {
    const x = updateWorldCoordinateLocation.getX();
    const y = updateWorldCoordinateLocation.getY();

    console.log(this.chunkMap.size)
    this.chunkMap.forEach((chunk, key) => {
      const diffY = Phaser.Math.Difference(y, chunk.getCoordinate().getY());
      const diffX = Phaser.Math.Difference(x, chunk.getCoordinate().getX());

      if (
          (diffY > Client.WORLD_VIEWPORT_HEIGHT / 4)
          || (diffX > Client.WORLD_VIEWPORT_WIDTH / 4)
      ){
        chunk.unloadChunk();
        this.chunkMap.delete(key)
      }
    })
  }
}

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