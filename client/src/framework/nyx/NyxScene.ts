import NyxSceneLoader from '@/framework/nyx/NyxSceneLoader';

export default abstract class NyxScene extends Phaser.Scene {
  private phaserScene: NyxSceneLoader = new NyxSceneLoader(this)
      .addPreloadHook(this.preloadPhaser)
      .addCreateHook(this.createPhaserInternal)

  private isSceneCreated: boolean = false;

  protected constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    super(config);
  }

  abstract preloadPhaser(): void;

  abstract createPhaser(): void;

  sceneInit(): void {}

  private async preload() {
    await this.phaserScene.awaitPreloadHook()
  }

  private async create() {
    await this.phaserScene.awaitCreateHook()
  }

  private async init() {
    await this.sceneInit()
  }

  private createPhaserInternal(): void {
    this.createPhaser();
    this.isSceneCreated = true;
  }

  public update(time: number, delta: number): void {
    if (this.isSceneCreated){
      this.updateOnCreated(time, delta);
    }
  }

  public updateOnCreated(time: number, delta: number): void {

  }
}