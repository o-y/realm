import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import TileObject from '@/base/tile/TileObject';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import GenericProvider from '@/base/tile/providers/GenericProvider';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';

export default class CommonTileProvider {
  public static getNatureTile(tile: NatureTile): TileObject<NatureTile> {
    return GenericProvider.provideNatureProvider().getTile(tile);
  }

  public static getNatureSupportTile(tile: NatureSupportTile): TileObject<NatureSupportTile> {
    return GenericProvider.provideNatureSupportProvider().getTile(tile);
  }
}