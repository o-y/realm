import TileObject from '@/base/tile/TileObject';

export default class PhaserWorldGenConstants {
  // NOTE: This is not the width in pixels, that would be n * 48, instead it is
  // the number of tiles to generate.

  public static WORLD_VIEWPORT_WIDTH = Math.floor(window.innerWidth / TileObject.TILE_WIDTH)
  public static WORLD_VIEWPORT_HEIGHT = Math.floor(window.innerHeight / TileObject.TILE_HEIGHT)
}