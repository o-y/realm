import TileObject from '@/base/tile/TileObject';

export class Client {
  private static BUFFER = 4;

  // NOTE: This is not the width in pixels, that would be n * 48, instead it is
  // the number of tiles to generate.

  // public static WORLD_VIEWPORT_WIDTH = Math.floor((window.innerWidth / TileObject.TILE_SIZE) / 2)
  // public static WORLD_VIEWPORT_HEIGHT = Math.floor((window.innerHeight / TileObject.TILE_SIZE) / 2)

  public static WORLD_VIEWPORT_WIDTH = 10;
  public static WORLD_VIEWPORT_HEIGHT = 10;

  public static WORLD_VIEWPORT_GENERATION_OFFSET_WIDTH = (Client.WORLD_VIEWPORT_WIDTH * 2) + 1
  public static WORLD_VIEWPORT_GENERATION_OFFSET_HEIGHT = (Client.WORLD_VIEWPORT_HEIGHT * 2) + 1

}

console.log(
    Client.WORLD_VIEWPORT_WIDTH, Client.WORLD_VIEWPORT_HEIGHT
)