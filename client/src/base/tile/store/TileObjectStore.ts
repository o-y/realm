export default class TileObjectStore {
  private static tileObjectStoreInstance: TileObjectStore;

  private instanceStore: Map<string, NodeRequire> = new Map<string, NodeRequire>()

  private constructor() {}

  public static getInstance(): TileObjectStore {
    return TileObjectStore.tileObjectStoreInstance
        ? TileObjectStore.tileObjectStoreInstance
        : TileObjectStore.tileObjectStoreInstance = new TileObjectStore();
  }

  public isCached(hashcode: string): boolean {
    return this.instanceStore.has(hashcode);
  }

  public retain(requireRef: NodeRequire, hashcode: string): string {
    if (this.isCached(hashcode)){
      throw `FATAL - InstanceStore[${hashcode}] is already cached - guard #retain calls with #isCached`;
    }

    this.instanceStore.set(hashcode, requireRef);
    return String(requireRef);
  }

  public retrieveFromCache(hashcode: string): string {
    if (!this.isCached(hashcode)){
      throw `FATAL - InstanceStore[${hashcode}] is null - guard #retrieveFromCache calls with #isCached`;
    }

    return String(this.instanceStore.get(hashcode));
  }
}