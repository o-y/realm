import PhaserScene from '@/base/render/PhaserScene';

export default abstract class AsyncPhaserScene extends Phaser.Scene {
  private phaserScene: PhaserScene = new PhaserScene(this)
      .addPreloadHook(this.preloadPhaser)
      .addCreateHook(this.createPhaser)

  protected constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
    super(config);
  }

  abstract preloadPhaser(): void;

  abstract createPhaser(): void;

  async preload() {
    await this.phaserScene.awaitPreloadHook()
  }

  async create() {
    await this.phaserScene.awaitCreateHook()
  }
}