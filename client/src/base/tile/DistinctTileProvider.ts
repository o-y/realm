import TileProvider from '@/base/tile/internal/TileProvider';
import TileObject from '@/base/tile/TileObject';

export default class DistinctTileProvider<T> {

  private readonly tileProvider: TileProvider<T>;
  private constructor(tileProvider: TileProvider<T>) {
    this.tileProvider = tileProvider;
  }

  public static with<T>(tileProvider: TileProvider<T>): DistinctTileProvider<T> {
    return new DistinctTileProvider<T>(tileProvider);
  }

  public getTileProvider(): TileProvider<T> {
    return this.tileProvider;
  }

  public getTile(tile: T): TileObject<T> {
    return this.tileProvider.getTile(tile);
  }
}