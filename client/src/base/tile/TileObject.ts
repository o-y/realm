import TileObjectStore from '@/base/tile/store/TileObjectStore';
import Util from '@/util/Util';

export default class TileObject<T> {
  public static TILE_WIDTH: number = 48;
  public static TILE_HEIGHT: number = 48;

  private readonly enumType: T;
  private readonly baseDirectory: string
  private readonly tileObjectStore: TileObjectStore

  private positionalOverride: number | null = null

  constructor(enumType: T, baseDirectory: string) {
    this.enumType = enumType;
    this.baseDirectory = baseDirectory;
    this.tileObjectStore = TileObjectStore.getInstance();
  }

  public withPositionalOverride(positionalOverride: number): TileObject<T> {
    this.positionalOverride = positionalOverride;
    return this;
  }

  public getEnumType(): T {
    return this.enumType;
  }

  public getAndCacheBase64EncodedFile(): string {
    if (this.tileObjectStore.isCached(this.fileHash)){
      return this.tileObjectStore.retrieveFromCache(this.fileHash);
    }

    return this.tileObjectStore.retain(
        require(`@/base/tile/assets/${this.assetsDirectoryName}/${this.rawFileName}.png`),
        this.fileHash
    )
  }

  public get imageHash(): string {
    return this.fileHash.toString()
  }

  public get fileHash(): number {
    return Util.hashCode(`${this.assetsDirectoryName}/${this.rawFileName}`)
  }

  private get completeFilePath(): string {
    return `src/base/tile/assets/${this.assetsDirectoryName}/${this.rawFileName}.png`
  }

  /// Theses are getters because substring operations are not O(1)
  private get assetsDirectoryName(): string {
    return this.baseDirectory.substring(this.baseDirectory.lastIndexOf("/") + 1);
  }

  private get rawFileName(): string {
    return this.assetsDirectoryName + "_" +
        String(this.positionalOverride != null
            ? this.positionalOverride
            : <unknown>this.enumType as number)
  }
}