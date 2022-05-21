<template>
  <div class = "phaserContainer">
    <div class = "phaserRoot" ref="root"></div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import Phaser from 'phaser';

@Component
export default class PhaserComponent extends Vue {
  @Ref('root') readonly phaserRoot!: HTMLDivElement

  public mounted() {
    const game: Phaser.Game = new Phaser.Game({
      type: Phaser.AUTO,
      backgroundColor: 'white',
      width: 1200,
      height: 1000,
      parent: this.phaserRoot
    });
  }
}
</script>

<style scoped lang="stylus">
  .phaserRoot
    width: 100%
    height: 100%
</style>