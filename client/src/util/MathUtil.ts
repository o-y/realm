export class MathUtil {
  // TODO: Document
  // TODO: Attribute (https://vertexfragment.com/ramblings/cantor-szudzik-pairing-functions)
  private static cantorPair(x: number, y: number): number {
    return (0.5 * (x + y) * (x + y + 1)) + y;
  }

  // TODO: Document
  // TODO: Attribute (https://vertexfragment.com/ramblings/cantor-szudzik-pairing-functions)
  public static cantorPairSigned(x: number, y: number): number {
    const a = (x >= 0.0 ? 2.0 * x : (-2.0 * x) - 1.0);
    const b = (y >= 0.0 ? 2.0 * y : (-2.0 * y) - 1.0);
    return MathUtil.cantorPair(a, b);
  }

  public static randomHex(): number {
    return Math.floor(Math.random() * 0xFFFFFF);
  }
}