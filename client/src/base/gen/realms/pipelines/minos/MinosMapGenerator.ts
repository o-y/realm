import {RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {Avatar} from '@/base/prometheus/Avatar';

export class MinosMapGenerator extends RealmGenerator {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super()

    this.scene = scene;
  }

  public async generateMap(seed: number, avatar: Avatar) {

  }
}