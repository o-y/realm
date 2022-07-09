import Phaser from 'phaser';

export default class PhaserScene {
  private preloadHook: () => void = () => {}
  private createHook: () => void = () => {}

  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  private requestedPhaserCreation: boolean = false;

  public async awaitPreloadHook() {
    await this.preloadHook.bind(this.scene)();

    const interval: number = setInterval(() => {
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

  public addPreloadHook(hook: () => void): PhaserScene {
    this.preloadHook = hook;
    return this;
  }

  public addCreateHook(hook: () => void): PhaserScene {
    this.createHook = hook;
    return this;
  }
}