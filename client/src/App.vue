<template>
  <div id="app">
    <div class = "debugComponent">
      <div :id = "phaserComponentId" class = "row"></div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import {GlobalDebug} from './framework/vue/GlobalDebug';

@Component
export default class App extends Vue {
  get phaserComponentId() {
    return GlobalDebug.GLOBAL_DESMOS_DEBUG_ID
  }
}
</script>

<style lang="stylus">
  html, body
    margin: 0

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