import NatureTileProvider, {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import TileObject from '@/base/tile/TileObject';
import NatureSupportTileProvider, {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import RubyTownProvider, {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';

export default class CommonTileProvider {
  public static getNatureTile(tile: NatureTile): TileObject<NatureTile> {
    return CommonTileProvider.provideNatureProvider().getTile(tile);
  }

  public static getNatureSupportTile(tile: NatureSupportTile): TileObject<NatureSupportTile> {
    return CommonTileProvider.provideNatureSupportProvider().getTile(tile);
  }

  public static getRubyTownTile(tile: RubyTownTile): TileObject<RubyTownTile> {
    return CommonTileProvider.provideRubyTownProvider().getTile(tile);
  }

  public static provideNatureProvider(): NatureTileProvider<NatureTile> {
    return new NatureTileProvider<NatureTile>();
  }

  public static provideNatureSupportProvider(): NatureSupportTileProvider<NatureSupportTile> {
    return new NatureSupportTileProvider<NatureSupportTile>();
  }

  public static provideRubyTownProvider(): RubyTownProvider<RubyTownTile> {
    return new RubyTownProvider<RubyTownTile>();
  }
}