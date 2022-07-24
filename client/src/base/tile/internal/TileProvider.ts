import TileObject from '@/base/tile/TileObject';
import {ProviderType} from '@/base/tile/providers/helpers/ProviderType';

export default abstract class TileProvider<T> {
  public getTile(tile: T): TileObject<T> {
    return new TileObject<T>(tile, this.provideBaseDirectory(), this.provideTileProviderType());
  }

  public abstract provideBaseDirectory(): string

  public abstract provideTileProviderType(): ProviderType
}