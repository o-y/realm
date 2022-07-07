import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import CommonTileProvider from '@/base/tile/providers/CommonTileProvider';
import Phaser from 'phaser';
import PhaserPreloadModule from '@/base/render/preload/PhaserPreloadModule';
import PhaserCreateModule from '@/base/render/create/PhaserCreateModule';

export default class PhaserScene {
  private preloadHook: (scene: Phaser.Scene, game: Phaser.Game) => void = () => {}
  private createHook: (scene: Phaser.Scene, game: Phaser.Game) => void = () => {}

  private requestedPhaserCreation: boolean = false;

  public async preloadPhaser(scene: Phaser.Scene, game: Phaser.Game) {
    return await new PhaserPreloadModule(scene, game).execute()
  }

  public async createPhaser(scene: Phaser.Scene, game: Phaser.Game) {
    return await new PhaserCreateModule(scene, game).execute()
  }

  public async awaitPreloadHook(scene: Phaser.Scene, game: Phaser.Game) {
    await this.preloadHook(scene, game);

    const interval: number = setInterval(() => {
      if (this.requestedPhaserCreation){
        this.requestedPhaserCreation = false;
        this.createHook(scene, game);
        clearInterval(interval);
      }
    }, 30)
  }

  public async awaitCreateHook(scene: Phaser.Scene, game: Phaser.Game) {
    this.requestedPhaserCreation = true;
  }

  public addPreloadHook(hook: (scene: Phaser.Scene, game: Phaser.Game) => void): PhaserScene {
    this.preloadHook = hook;
    return this;
  }

  public addCreateHook(hook: (scene: Phaser.Scene, game: Phaser.Game) => void): PhaserScene {
    this.createHook = hook;
    return this;
  }
}