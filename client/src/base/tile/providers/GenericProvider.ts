import NatureTileProvider, {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import NatureSupportTileProvider, {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import TileObject from '@/base/tile/TileObject';

export default class GenericProvider {
  public static provideNatureProvider(): NatureTileProvider<NatureTile> {
    return new NatureTileProvider<NatureTile>();
  }

  public static provideNatureSupportProvider(): NatureSupportTileProvider<NatureSupportTile> {
    return new NatureSupportTileProvider<NatureSupportTile>();
  }
}