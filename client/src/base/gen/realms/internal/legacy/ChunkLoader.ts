import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {ChunkData} from '@/base/gen/realms/internal/legacy/ChunkData';

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