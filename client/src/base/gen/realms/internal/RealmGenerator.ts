import {Avatar} from '@/base/prometheus/data/Avatar';
import {Util} from '@/util/Util';
import {LayerManager} from '@/base/layer/LayerManager';
import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {ChunkManager} from '@/base/gen/realms/internal/legacy/ChunkManager';
import {TerrainManager} from '@/base/gen/realms/internal/TerrainManager';

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

  public loadGenerationAt(
      currentCoordinate: NonDecimalCoordinate,
      nextCoordinate: NonDecimalCoordinate
  ) {
    Util.assert(this.avatar != null, "Avatar is null! Ensure #setAvatar has been invoked.")
    Util.assert(this.seed != null, "Seed is null! Ensure #setSeed has been invoked.")

    if (this.realmGenerationData == null){
      this.realmGenerationData = new RealmGenerationData(
          this.avatar,
          this.seed,
          this.layerManager
      )
    }

    return this.generateMapImpl(currentCoordinate, nextCoordinate)
  }

  protected getRealmGenerationData(): RealmGenerationData {
    return this.realmGenerationData;
  }

  protected abstract generateMapImpl(
      currentCoordinate: NonDecimalCoordinate,
      nextCoordinate: NonDecimalCoordinate
  ): Promise<void>
}

export class RealmGenerationData {
  private readonly avatar: Avatar;
  private readonly seed: number;
  private readonly layerManager: LayerManager;
  private readonly terrainManager: TerrainManager;

  public constructor(avatar: Avatar, seed: number, layerManager: LayerManager) {
    this.avatar = avatar;
    this.seed = seed;
    this.layerManager = layerManager;
    this.terrainManager = TerrainManager.withRealmGenerationData(this);
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

  getTerrainManager(): TerrainManager {
    return this.terrainManager;
  }
}