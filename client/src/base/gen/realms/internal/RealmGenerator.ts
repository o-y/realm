import {Avatar} from '@/base/prometheus/data/Avatar';
import {Util} from '@/util/Util';
import {LayerManager} from '@/base/layer/LayerManager';

export abstract class RealmGenerator {
  private avatar!: Avatar;
  private seed!: number;
  private layerManager!: LayerManager;
  private realmGenerationData!: RealmGenerationData;

  public setAvatar(avatar: Avatar): RealmGenerator {
    this.avatar = avatar;
    return this;
  }

  public setLayerManager(layerManager: LayerManager): RealmGenerator {
    this.layerManager = layerManager;
    return this;
  }

  public setSeed(seed: number): RealmGenerator {
    this.seed = seed;
    return this;
  }

  public generateMap(): Promise<void> {
    Util.assert(this.avatar != null, "Avatar is null! Ensure #setAvatar has been invoked.")
    Util.assert(this.seed != null, "Seed is null! Ensure #setSeed has been invoked.")

    this.realmGenerationData = new RealmGenerationData(
        this.avatar,
        this.seed,
        this.layerManager
    )

    return this.generateMapImpl()
  }

  protected getRealmGenerationData(): RealmGenerationData {
    return this.realmGenerationData;
  }

  protected abstract generateMapImpl(): Promise<void>
}

export class RealmGenerationData {
  private readonly avatar: Avatar;
  private readonly seed: number;
  private readonly layerManager: LayerManager;

  public constructor(avatar: Avatar, seed: number, layerManager: LayerManager) {
    this.avatar = avatar;
    this.seed = seed;
    this.layerManager = layerManager;
  }


  getAvatar(): Avatar {
    return this.avatar;
  }

  getSeed(): number {
    return this.seed;
  }

  getLayerManager(): LayerManager {
    return this.layerManager;
  }
}