import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import TileObject from '@/base/tile/TileObject';
import CommonTileProvider from '@/base/tile/providers/CommonTileProvider';

export default class TileConstants {
  public static TILE_WIDTH: number = 90;
  public static TILE_HEIGHT: number = 90;

  public static GRASS_ARRAY: Array<TileObject<TileUnion>> = [
      CommonTileProvider.getNatureTile(NatureTile.GRASS_VARIANT_1),
      CommonTileProvider.getNatureTile(NatureTile.GRASS_PLAIN),
      CommonTileProvider.getNatureTile(NatureTile.BUSH_VARIANT_1),
      CommonTileProvider.getNatureTile(NatureTile.SHRUB_ON_GRASS),
      CommonTileProvider.getNatureTile(NatureTile.SHRUB_DARK_ON_GRASS),
      CommonTileProvider.getNatureTile(NatureTile.VINE_ON_GRASS_VARIANT_1),
      CommonTileProvider.getNatureTile(NatureTile.VINE_ON_GRASS_VARIANT_2),
      CommonTileProvider.getNatureTile(NatureTile.VINE_ON_GRASS_VARIANT_3),
      CommonTileProvider.getNatureTile(NatureTile.GRASS_VARIANT_5),
      CommonTileProvider.getNatureTile(NatureTile.GRASS_VARIANT_6),
      CommonTileProvider.getNatureTile(NatureTile.GRASS_VARIANT_3)
  ]

  public static WATER_ARRAY: Array<TileObject<TileUnion>> = [
      CommonTileProvider.getNatureSupportTile(NatureSupportTile.WATER_CURRENTS),
      CommonTileProvider.getNatureSupportTile(NatureSupportTile.WATER_STILL)
  ]

  private constructor() {}
}