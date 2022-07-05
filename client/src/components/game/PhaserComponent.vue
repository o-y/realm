<template>
  <div class = "phaserContainer">
    <div class = "phaserRoot" ref="root"></div>
    <img ref = "img" width="100px" height="100px">
<!--    <canvas ref = "canvas" width="48" height="48"></canvas>-->
    <canvas ref = "canvas_out" width="150" height="150"></canvas>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import Phaser from 'phaser';
import Jimp from 'jimp';

const wfc = require('wavefunctioncollapse');

@Component
export default class PhaserComponent extends Vue {
  @Ref('root') readonly phaserRoot!: HTMLDivElement
  @Ref('canvas') readonly canvas!: HTMLCanvasElement
  @Ref('canvas_out') readonly canvasOut!: HTMLCanvasElement
  @Ref('img') readonly img!: HTMLImageElement

  public mounted() {

  }
}
</script>

<style scoped lang="stylus">
  .phaserRoot
    width: 100%
    height: 100%
</style>