<template>
  <div>
    <h1>Hello World!</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CompleteSpriteView extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="stylus" scoped>

</style>