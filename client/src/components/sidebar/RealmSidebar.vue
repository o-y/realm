<template>
  <div class = "realmSidebar">
    <div class = "realmSidebarContainer">

    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';

@Component
export default class RealmSidebar extends Vue {

}

</script>

<style scoped lang="stylus">
  @import "../../style/config.styl"

  .realmSidebar
    width: 391px
    display: flex
    align-items: center
    justify-content: center
    padding: 20px
    background: blanchedalmond

    .realmSidebarContainer
      width: 100%
      height: 100%
      background: pink
</style>