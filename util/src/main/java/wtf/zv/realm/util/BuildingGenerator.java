package wtf.zv.realm.util;

class BuildingGenerator {

  private static final int TILEMAP_HEIGHT = 5;
  private static final int TILEMAP_WIDTH = 16;
  private static final String PREFIX = "BridgeTile.BRIDGE_TILE_";

  public static void main(String[] args) {
    generateTileMap(
        new Coordinate(0, 0), 15, 5
    );
  }

  /**
   * Intuition, tiles are organised from 0 to n following the constraint 1 -> width, height + 1.
   *
   * Therefore the top row with a width of 4 will be equal to TM_1, TM_2, TM_3, TM_4 and the next
   * row with a width of 2 will be equal to TM_N, TM_N + 1, TM_N + 2, TM_N + 3 where n is equal to
   * the difference from TM_4 to TILEMAP_WIDTH.
   */
  public static void generateTileMap(Coordinate topLeft, int width, int height) {
    int yOffset = (TILEMAP_HEIGHT * topLeft.y) - topLeft.y;

    StringBuilder sb = new StringBuilder();

    sb.append("[\n");

    for (int y = topLeft.y; y < topLeft.y + height + 1; y++) {
      sb.append(" [");
      for (int x = topLeft.x; x < topLeft.x + width + 1; x++) {
        sb
            .append(PREFIX)
            .append((yOffset + y) + x);

        if (x < topLeft.x + width) {
          sb.append(", ");
        }
      }

      yOffset += (TILEMAP_HEIGHT - 1);
      sb.append("]");

      if (y < topLeft.y + height) {
        sb.append(",\n");
      }
    }

    sb.append("\n]");
    System.out.println(sb);
  }

  private record Coordinate(int x, int y) {}
}