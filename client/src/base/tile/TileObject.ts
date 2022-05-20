export default class TileObject<T> {
  private readonly enumType: T;
  private readonly baseDirectory: string

  private positionalOverride: number | null = null

  constructor(enumType: T, baseDirectory: string) {
    this.enumType = enumType;
    this.baseDirectory = baseDirectory;
  }

  public withPositionalOverride(positionalOverride: number): TileObject<T> {
    this.positionalOverride = positionalOverride;
    return this;
  }

  public getEnumType(): T {
    return this.enumType;
  }

  public getAbsoluteFileName(): string {
    return require(`@/base/tile/assets/${this.assetsDirectoryName}/${this.getRawFileName()}.png`);
  }

  private get assetsDirectoryName(): string {
    return this.baseDirectory.substring(this.baseDirectory.lastIndexOf("/") + 1);
  }

  private getRawFileName(): string {
    return this.assetsDirectoryName + "_" +
        String(this.positionalOverride != null
            ? this.positionalOverride
            : this.enumType as unknown as number)

  }
}