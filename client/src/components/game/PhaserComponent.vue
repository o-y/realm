<template>
  <div class = "phaserContainer">
    <div class = "phaserRoot" ref="root"></div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import Phaser from 'phaser';
import PhaserScene from '../../base/render/PhaserScene';

@Component
export default class PhaserComponent extends Vue {
  @Ref('root') readonly phaserRoot!: HTMLDivElement

  public mounted() {
    const phaserScene = new PhaserScene()
    phaserScene.addPreloadHook(phaserScene.preloadPhaser)
    phaserScene.addCreateHook(phaserScene.createPhaser)

    const phaserGame: Phaser.Game = new Phaser.Game({
      type: Phaser.AUTO,
      backgroundColor: 'white',
      width: window.innerWidth,
      height: window.innerHeight,
      parent: this.phaserRoot,
      pixelArt: true,
      scene: {
        preload: function() {
          phaserScene.awaitPreloadHook(this, phaserGame)
        },
        create: function() {
          phaserScene.awaitCreateHook(this, phaserGame)
        }
      }
    });
  }
}
</script>

<style scoped lang="stylus">
  .phaserRoot
    width: 100%
    height: 100%
</style>