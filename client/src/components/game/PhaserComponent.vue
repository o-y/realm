<template>
  <div class = "phaserContainer">
    <div class = "phaserRoot" ref="root">
      <div class = "prefab"></div>
    </div>
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

    const width = window.innerWidth;
    const height = window.innerHeight;

    const phaserGame: Phaser.Game = new Phaser.Game({
      type: Phaser.AUTO,
      backgroundColor: '#fff',
      width: width,
      height: height,
      scale: {
        mode: Phaser.Scale.ENVELOP
      },
      parent: this.phaserRoot,
      pixelArt: true,
      scene: {
        preload: function() {
          phaserScene.awaitPreloadHook(this, phaserGame)
        },
        create: function() {
          // this.scale.parent.width = Math.round(width);
          // this.scale.parent.height = Math.round(height);
          //
          // this.scale.canvas.style.width = Math.round(width) + 'px';
          // this.scale.canvas.style.height = Math.round(height) + 'px';
          // phaserGame.canvas.style.width = width + 'px';
          // phaserGame.canvas.style.height = height + 'px';
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

    .prefab
      width: 48px
      height: 48px;
      background: black;
      top: 0;
      position: absolute
      opacity: 0.5
</style>