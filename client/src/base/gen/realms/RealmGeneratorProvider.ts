import {RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {GaiaMapGenerator} from '@/base/gen/realms/pipelines/gaia/GaiaMapGenerator';
import {MinosMapGenerator} from '@/base/gen/realms/pipelines/minos/MinosMapGenerator';

export class RealmGeneratorProvider {
  private readonly generationStrategy: RealmGenerationStrategy;

  private constructor(generationStrategy: RealmGenerationStrategy) {
    this.generationStrategy = generationStrategy;
  }

  public static withGenerationStrategy(generationStrategy: RealmGenerationStrategy) {
    return new RealmGeneratorProvider(generationStrategy);
  }

  public getGenerator(scene: Phaser.Scene): RealmGenerator {
    switch (this.generationStrategy) {
      case RealmGenerationStrategy.GAIA:
        return new GaiaMapGenerator(scene);
      case RealmGenerationStrategy.MINOS:
        return new MinosMapGenerator(scene);
    }
  }
}

export enum RealmGenerationStrategy {
  GAIA,
  MINOS
}