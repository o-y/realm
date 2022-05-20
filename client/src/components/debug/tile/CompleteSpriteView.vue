<template>
  <div class = "grid">
    <div class = "tileViewContainer">
      <div class = "tileView" v-for = "tile in tilesEnumAnnotatedList">
        <div class = "imageContainer">
          <img :src = "tile.img" alt="sprite"/>
        </div>
        <div class = "textContainer">
          <h1>{{ tile.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import DistinctTileProvider from '../../../base/tile/DistinctTileProvider';
import {NatureTile} from '../../../base/tile/providers/NatureTileProvider';
import GenericProvider from '../../../base/tile/providers/GenericProvider';
import TileObject from '../../../base/tile/TileObject';

@Component
export default class CompleteSpriteView extends Vue {
  public tilesEnumAnnotatedList: Array<Tiles> = []

  public provideEnumList<T>(entries: [string, string | T][], tileProvider: DistinctTileProvider<T>): Array<Tiles> {
    let tiles = new Array<Tiles>();

    for (let i = 0; i < Math.floor(Object.keys(entries).length / 2); i++) {
      let enumEntry: T = entries[i][1] as T;
      let positionalEnumEntry: number = Number(entries[i][0]);
      let tileEntry: TileObject<T> = tileProvider
          .getTile(enumEntry)
          .withPositionalOverride(positionalEnumEntry);

      tiles.push({
        img: tileEntry.getAbsoluteFileName(),
        name: String(tileEntry.getEnumType())
      })
    }

    return tiles
  }

  public mounted() {
    this.tilesEnumAnnotatedList = this.provideEnumList<NatureTile>(
        Object.entries(NatureTile),
        DistinctTileProvider.with(GenericProvider.provideNatureProvider())
    )
  }
}

interface Tiles {
  img: string,
  name: string
}
</script>

<style scoped lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@500&display=swap');

  .grid
    display: flex
    height: auto

    .tileViewContainer
      display: grid
      grid-template-rows: repeat(auto-fill, 100px)
      grid-template-columns: auto
      grid-gap: 15px

      &:not(:first-child)
        margin-left: 50px

      .tileView
        display: grid
        grid-template-rows: auto
        grid-template-columns 100px 1fr
        background: #E7E6F7
        border-radius: 20px

        .imageContainer
          display: flex
          align-items: center
          justify-content: center
          width: 100%

          img
            height: 80px

        .textContainer
          display: flex
          align-items: center

          h1
            color: #733DB5
            font-size: 25px
            font-family: 'Noto Sans Mono', monospace
            margin-left: 20px
</style>