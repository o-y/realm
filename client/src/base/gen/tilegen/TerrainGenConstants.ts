import TileObject from '@/base/tile/TileObject';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import CommonTileProvider from '@/base/tile/providers/CommonTileProvider';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';

export default class TerrainGenConstants {
  public static JUST_GRASS_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureTile(NatureTile.GRASS_VARIANT_1),
    CommonTileProvider.getNatureTile(NatureTile.GRASS_PLAIN),
    CommonTileProvider.getNatureTile(NatureTile.GRASS_VARIANT_5),
    CommonTileProvider.getNatureTile(NatureTile.GRASS_VARIANT_6),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_1_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_2_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_3_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_4_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_5_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_6_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_7_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_8_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.GRASS_VARIANT_9_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SHRUB_ON_TIDY_GRASS),
  ]

  public static BUSH_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureTile(NatureTile.BUSH_VARIANT_1),
  ]

  public static SHRUB_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureTile(NatureTile.SHRUB_ON_GRASS),
    CommonTileProvider.getNatureTile(NatureTile.SHRUB_DARK_ON_GRASS),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SHRUB_DARK_ON_TIDY_GRASS),
  ]

  public static VINE_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureTile(NatureTile.VINE_ON_GRASS_VARIANT_1),
    CommonTileProvider.getNatureTile(NatureTile.VINE_ON_GRASS_VARIANT_2),
    CommonTileProvider.getNatureTile(NatureTile.VINE_ON_GRASS_VARIANT_3),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.VINE_ON_PATCHY_GRASS_VARIANT_1_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.VINE_ON_PATCHY_GRASS_VARIANT_2_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.VINE_ON_PATCH_GRASS_VARIANT_3),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.VINE_ON_PATCH_GRASS_VARIANT_3_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.VINE_ON_PATCHY_GRASS_VARIANT_1),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.VINE_ON_PATCHY_GRASS_VARIANT_2),
  ]

  public static FORREST_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureTile(NatureTile.TREE_ON_GRASS),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.TREE_ON_PATCHY_GRASS),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.TREE_ON_PATCHY_GRASS_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.TREE_ON_GRASS_FLIPPED),
  ]

  public static SNOWY_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureTile(NatureTile.SNOWY_SHRUB_ON_SNOW_VARIANT_1),
    CommonTileProvider.getNatureTile(NatureTile.SNOWY_SHRUB_ON_SNOW_VARIANT_2),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SNOWY_PLAIN_GRASS),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SNOWY_PATCHY_GRASS),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SNOWY_SHRUB_ON_SNOW_VARIANT_1_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SNOWY_SHRUB_ON_SNOW_VARIANT_2_FLIPPED),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SNOWY_PATCHY_GRASS_VARIANT_2),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SNOWY_PATCHY_GRASS_VARIANT_3),
  ]

  public static SNOWY_ROCK_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureTile(NatureTile.SNOW_CAPPED_ROCK)
  ]

  public static WATER_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.WATER_STILL),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.WATER_CURRENTS_VARIANT_1),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.WATER_CURRENTS_VARIANT_2),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.WATER_CURRENTS_VARIANT_3),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.WATER_CURRENTS_VARIANT_4),
  ]

  public static BEACH_ARRAY: Array<TileObject<TileUnion>> = [
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SAND_PLAIN),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SAND_PATCHY_VARIANT_1),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SAND_PATCHY_VARIANT_2),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SAND_PATCHY_VARIANT_3),
    CommonTileProvider.getNatureSupportTile(NatureSupportTile.SAND_PATCHY_VARIANT_4),
  ]
}