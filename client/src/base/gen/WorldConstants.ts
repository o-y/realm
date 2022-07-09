import TileConstants from '@/base/tile/util/TileConstants';

export default class WorldConstants {

  // NOTE: This is not the width in pixels, that would be n * 48.
  public static WORLD_VIEWPORT_WIDTH = Math.floor(window.innerWidth / TileConstants.TILE_WIDTH)
  public static WORLD_VIEWPORT_HEIGHT = Math.floor(window.innerHeight / TileConstants.TILE_HEIGHT)
}