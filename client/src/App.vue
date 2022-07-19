<template>
  <div id="app">
    <div class = "debugComponent" v-if="isDesmosEnabled">
      <div :id = "desmosVisualiserId" class = "row"></div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import {DesmosVisualiser} from './framework/desmos/DesmosVisualiser';

@Component
export default class App extends Vue {
  get desmosVisualiserId(): string {
    return DesmosVisualiser.GLOBAL_DESMOS_DEBUG_ID
  }

  get isDesmosEnabled(): boolean {
    return DesmosVisualiser.getInstance().isEnabled();
  }
}
</script>

<style lang="stylus">
  html, body
    margin: 0
    overflow: hidden

  #app
    height: 100vh;

    .debugComponent
      width: 1200px;
      background: rgba(black, 10%);
      height: 100%
      position: absolute
      right: 0
      display: flex

      .row
        width: 100%
        margin-bottom 20px
</style>