import TileObject from '@/base/tile/TileObject';
import RealmTileGenConstants from '@/base/gen/tilegen/RealmTileGenConstants';
import {Util} from '@/util/Util';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';

export default class RealmTileGenUtil {
  public static MIN_PERLIN_NOISE: number = 0;
  public static MAX_PERLIN_NOISE: number = 160;

  private readonly selectedArray: Array<TileObject<TileUnion>>;

  private constructor(selectedArray: Array<TileObject<TileUnion>>) {
    this.selectedArray = selectedArray;
  }

  public static selectTileArrayWithNoise(noise: number): RealmTileGenUtil {
    if (noise < 15){
      return new RealmTileGenUtil(RealmTileGenConstants.WATER_ARRAY)
    } else if (noise < 20){
      return new RealmTileGenUtil(RealmTileGenConstants.BEACH_ARRAY)
    } else if (noise < 26){
      return new RealmTileGenUtil(RealmTileGenConstants.JUST_GRASS_ARRAY)
    } else if (noise < 37){
      return new RealmTileGenUtil([
          ...RealmTileGenConstants.BUSH_ARRAY,
          ...Util.selectFromArray(RealmTileGenConstants.JUST_GRASS_ARRAY, 4)
      ])
    } else if (noise < 52){
      return new RealmTileGenUtil([
          ...RealmTileGenConstants.SHRUB_ARRAY,
          ...Util.selectFromArray(RealmTileGenConstants.JUST_GRASS_ARRAY, 4)
      ])
    } else if (noise < 78){
      return new RealmTileGenUtil([
          ...RealmTileGenConstants.VINE_ARRAY,
          ...Util.selectFromArray(RealmTileGenConstants.JUST_GRASS_ARRAY, 4)
      ])
    } else if (noise < 104){
      return new RealmTileGenUtil([
          ...RealmTileGenConstants.FORREST_ARRAY,
        ...Util.selectFromArray(RealmTileGenConstants.JUST_GRASS_ARRAY, 4)
      ])
    } else if (noise < 156){
      return new RealmTileGenUtil(RealmTileGenConstants.SNOWY_ARRAY)
    } else {
      return new RealmTileGenUtil(RealmTileGenConstants.SNOWY_ROCK_ARRAY)
    }
  }

  public selectRandomTile(): TileObject<TileUnion> {
    return Util.randomFromArray(this.selectedArray)
  }
}