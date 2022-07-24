import TileObjectStore from '@/base/tile/store/TileObjectStore';
import {Util} from '@/util/Util';
import {ProviderType} from '@/base/tile/providers/helpers/ProviderType';

export default class TileObject<T> {
  public static TILE_SIZE: number = 48;

  private readonly enumType: T;
  private readonly baseDirectory: string
  private readonly tileObjectStore: TileObjectStore
  private readonly tileProviderType: ProviderType

  private positionalOverride: number | null = null

  constructor(enumType: T, baseDirectory: string, tileProviderType: ProviderType) {
    this.enumType = enumType;
    this.baseDirectory = baseDirectory;
    this.tileProviderType = tileProviderType;
    this.tileObjectStore = TileObjectStore.getInstance();
  }

  public withPositionalOverride(positionalOverride: number): TileObject<T> {
    this.positionalOverride = positionalOverride;
    return this;
  }

  public getEnumType(): T {
    return this.enumType;
  }

  public getProviderType(): ProviderType {
    return this.tileProviderType
  }

  public getAndCacheBase64EncodedFile(): string {
    if (this.tileObjectStore.isCached(this.imageHash)){
      return this.tileObjectStore.retrieveFromCache(this.imageHash);
    }

    return this.tileObjectStore.retain(
        require(`@/base/tile/assets/${this.assetsDirectoryName}/${this.rawFileName}.png`),
        this.imageHash
    )
  }

  public get imageHash(): string {
    return Util.hashCode(`${this.assetsDirectoryName}/${this.rawFileName}`).toString()
  }

  private get completeFilePath(): string {
    return `src/base/tile/assets/${this.assetsDirectoryName}/${this.rawFileName}.png`
  }

  /// Theses are getters because substring operations are not O(1)
  private get assetsDirectoryName(): string {
    return this.baseDirectory.substring(this.baseDirectory.lastIndexOf("/") + 1);
  }

  public get rawFileName(): string {
    return this.assetsDirectoryName + "_" +
        String(this.positionalOverride != null
            ? this.positionalOverride
            : <unknown>this.enumType as number)
  }
}