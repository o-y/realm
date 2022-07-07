export interface PhaserBootstrap {
  execute(scene: Phaser.Scene, game: Phaser.Game): Promise<void>
}