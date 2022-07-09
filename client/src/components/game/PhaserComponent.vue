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
import PhaserWorldGenScene from '../../base/scenes/PhaserWorldGenScene';

@Component
export default class PhaserComponent extends Vue {
  @Ref('root') readonly phaserRoot!: HTMLDivElement

  public mounted() {

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
      scene: [
        PhaserWorldGenScene
      ]
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