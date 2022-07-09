import TileObject from '@/base/tile/TileObject';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import TerrainGenConstants from '@/base/gen/tilegen/TerrainGenConstants';
import Util from '@/util/Util';

export default class RealmTileGen {
  public static MIN_PERLIN_NOISE: number = 0;
  public static MAX_PERLIN_NOISE: number = 160;

  private selectedArray: Array<TileObject<TileUnion>>;

  private constructor(selectedArray: Array<TileObject<TileUnion>>) {
    this.selectedArray = selectedArray;
  }

  public static selectTileArrayWithNoise(noise: number): RealmTileGen {
    if (noise < 15){
      return new RealmTileGen(TerrainGenConstants.WATER_ARRAY)
    } else if (noise < 20){
      return new RealmTileGen(TerrainGenConstants.BEACH_ARRAY)
    } else if (noise < 26){
      return new RealmTileGen(TerrainGenConstants.JUST_GRASS_ARRAY)
    } else if (noise < 37){
      return new RealmTileGen([
          ...TerrainGenConstants.BUSH_ARRAY,
          ...Util.selectFromArray(TerrainGenConstants.JUST_GRASS_ARRAY, 4)
      ])
    } else if (noise < 52){
      return new RealmTileGen([
          ...TerrainGenConstants.SHRUB_ARRAY,
          ...Util.selectFromArray(TerrainGenConstants.JUST_GRASS_ARRAY, 4)
      ])
    } else if (noise < 78){
      return new RealmTileGen([
          ...TerrainGenConstants.VINE_ARRAY,
          ...Util.selectFromArray(TerrainGenConstants.JUST_GRASS_ARRAY, 4)
      ])
    } else if (noise < 104){
      return new RealmTileGen([
          ...TerrainGenConstants.FORREST_ARRAY,
        ...Util.selectFromArray(TerrainGenConstants.JUST_GRASS_ARRAY, 4)
      ])
    } else if (noise < 156){
      return new RealmTileGen(TerrainGenConstants.SNOWY_ARRAY)
    } else {
      return new RealmTileGen(TerrainGenConstants.SNOWY_ROCK_ARRAY)
    }
  }

  public selectRandomTile(): TileObject<TileUnion> {
    return Util.randomFromArray(this.selectedArray)
  }
}