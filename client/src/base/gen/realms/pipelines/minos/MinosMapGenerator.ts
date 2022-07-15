import {RealmGenerationData, RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';

export class MinosMapGenerator extends RealmGenerator {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super()

    this.scene = scene;
  }

  public async generateMapImpl() {

  }
}