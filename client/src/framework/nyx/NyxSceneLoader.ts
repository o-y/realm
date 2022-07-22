import Phaser from 'phaser';

export default class NyxSceneLoader {
  private readonly scene: Phaser.Scene;

  private preloadHook: () => void = () => {}
  private createHook: () => void = () => {}

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  private requestedPhaserCreation: boolean = false;

  public async awaitPreloadHook() {
    await this.preloadHook.bind(this.scene)();

    const interval = setInterval(() => {
      if (this.requestedPhaserCreation){
        this.requestedPhaserCreation = false;
        this.createHook.bind(this.scene)();
        clearInterval(interval);
      }
    }, 30)
  }

  public async awaitCreateHook() {
    this.requestedPhaserCreation = true;
  }

  public addPreloadHook(hook: () => void): NyxSceneLoader {
    this.preloadHook = hook;
    return this;
  }

  public addCreateHook(hook: () => void): NyxSceneLoader {
    this.createHook = hook;
    return this;
  }
}