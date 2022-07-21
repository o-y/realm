import TileProvider from '@/base/tile/internal/TileProvider';
import {ProviderType} from '@/base/tile/providers/ProviderType';

export default class NatureTileProvider<T> extends TileProvider<NatureTile> {
  public provideBaseDirectory(): string {
    return "@/base/tile/assets/nature"
  }

  public provideTileProviderType(): ProviderType {
    return ProviderType.NATURE;
  }
}

export enum NatureTile {
  SIGN_VARIANT_1 = 0,
  SIGN_VARIANT_2 = 1,
  SIGN_VARIANT_3 = 2,
  BUSH_VARIANT_1 = 3,
  SNOWY_SHRUB = 4,
  SNOW_CAPPED_ROCK = 5,
  GRASS_VARIANT_1 = 16,
  GRASS_VARIANT_2 = 17,
  SHRUB_VARIANT_1 = 18,
  SHRUB_VARIANT_2 = 19,
  SNOWY_SHRUB_WITH_GRASS_VARIANT_1 = 20,
  SNOWY_SHRUB_WITH_GRASS_VARIANT_2 = 21,
  SNOWY_SHRUB_WITH_GRASS_VARIANT_3 = 22,
  SNOWY_SHRUB_WITH_GRASS_VARIANT_4 = 23,
  GRASS_PLAIN = 27,
  SHRUB_DARK_ON_GRASS = 32,
  SHRUB_ON_GRASS = 34,
  SNOWY_SHRUB_ON_SNOW_VARIANT_1 = 37,
  SNOWY_SHRUB_ON_SNOW_VARIANT_2 = 38,
  VINE_ON_GRASS_VARIANT_1 = 48,
  VINE_ON_GRASS_VARIANT_2 = 49,
  VINE_ON_GRASS_VARIANT_3 = 64,
  TREE_ON_GRASS = 65,
  GRASS_VARIANT_4 = 66,
  GRASS_VARIANT_5 = 99,
  GRASS_VARIANT_6 = 115,
}