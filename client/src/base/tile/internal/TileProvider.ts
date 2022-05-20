import TileObject from '@/base/tile/TileObject';

export default abstract class TileProvider<T> {
  public getTile(tile: T): TileObject<T> {
    return new TileObject<T>(tile, this.provideBaseDirectory());
  }

  public abstract provideBaseDirectory(): string
}