import TileObject from '@/base/tile/TileObject';
import DistinctTileProvider from '@/base/tile/providers/helpers/DistinctTileProvider';

export default class TileUtil {
  public static provideEnumList<T>(entries: [string, string | T][], tileProvider: DistinctTileProvider<T>): Array<TileWrapper<T>> {
    let tiles = new Array<TileWrapper<T>>();

    for (let i = 0; i < Math.floor(Object.keys(entries).length / 2); i++) {
      let enumEntry: T = entries[i][1] as T;
      let positionalEnumEntry: number = Number(entries[i][0]);
      let tileEntry: TileObject<T> = tileProvider
          .getTile(enumEntry)
          .withPositionalOverride(positionalEnumEntry);

      tiles.push({
        img: tileEntry.getAndCacheBase64EncodedFile(),
        name: String(tileEntry.getEnumType()),
        tileObject: tileEntry
      })
    }

    return tiles
  }
}

export interface TileWrapper<T> {
  img: string,
  name: string,
  tileObject: TileObject<T>
}