import {BaseLayer} from '@/base/layer/layers/BaseLayer';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Client} from '@/base/prometheus/local/Client';
import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {Chunk} from '@/base/gen/realms/internal/legacy/Chunk';

export class ChunkManager {
  private readonly baseLayer: BaseLayer;
  private readonly chunkSparseArray: Array<Chunk | null> = new Array<Chunk | null>();

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
    this.chunkSparseArray[pairing] = chunk;

    return chunk;
  }

  public isChunkLoaded(chunkCoordinate: NonDecimalCoordinate): boolean {
    return this.chunkSparseArray[chunkCoordinate.toCantorsPairing()] !== null;
  }

  public updateWorldCoordinateLocation(updateWorldCoordinateLocation: NonDecimalCoordinate) {
    // Equates to n TileObjects.
    const renderDistanceOffset = 4;

    const x = updateWorldCoordinateLocation.getX();
    const y = updateWorldCoordinateLocation.getY();

    this.chunkSparseArray.forEach((chunk, key) => {
      if (chunk === null) return;

      const diffY = Phaser.Math.Difference(y, chunk.getCoordinate().getY());
      const diffX = Phaser.Math.Difference(x, chunk.getCoordinate().getX());

      if (
          (diffY > Client.WORLD_VIEWPORT_HEIGHT / renderDistanceOffset)
          || (diffX > Client.WORLD_VIEWPORT_WIDTH / renderDistanceOffset)
      ){
        chunk.unloadChunk();
        this.chunkSparseArray[chunk.getCoordinate().toCantorsPairing()] = null
      }
    })
  }
}