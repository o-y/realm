<template>
  <div class = "grid">
    <div class = "tileViewContainer">
      <div class = "tilesView" v-for = "tileArray in tilesEnumAnnotatedList">
        <div class = "tileView" v-for = "tile in tileArray">
          <div class = "imageContainer">
            <img :src = "tile.img" alt="sprite"/>
          </div>
          <div class = "textContainer">
            <h1>{{ tile.name }}</h1>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {NatureTile} from '../../../base/tile/providers/NatureTileProvider';
import {NatureSupportTile} from '../../../base/tile/providers/NatureSupportTileProvider';
import TileUtil, {TileWrapper} from '../../../base/tile/internal/TileUtil';
import {TileUnion} from '../../../base/tile/providers/helpers/TileEnumUnion';
import CommonTileProvider from '../../../base/tile/providers/helpers/CommonTileProvider';
import DistinctTileProvider from '../../../base/tile/providers/helpers/DistinctTileProvider';
import {RubyTownTile} from '../../../base/tile/providers/RubyTownProvider';
import {BridgeTile} from '../../../base/tile/providers/BridgeTileProvider';

@Component
export default class CompleteSpriteView extends Vue {
  public tilesEnumAnnotatedList: Array<Array<TileWrapper<TileUnion>>> = [
    TileUtil.provideEnumList<NatureTile>(
        Object.entries(NatureTile),
        DistinctTileProvider.with(CommonTileProvider.provideNatureProvider())
    ),
    TileUtil.provideEnumList<NatureSupportTile>(
        Object.entries(NatureSupportTile),
        DistinctTileProvider.with(CommonTileProvider.provideNatureSupportProvider())
    ),
    TileUtil.provideEnumList<RubyTownTile>(
        Object.entries(RubyTownTile),
        DistinctTileProvider.with(CommonTileProvider.provideRubyTownProvider())
    ),
    TileUtil.provideEnumList<BridgeTile>(
        Object.entries(BridgeTile),
        DistinctTileProvider.with(CommonTileProvider.provideBridgeProvider())
    )
  ]
}
</script>

<style scoped lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@500&display=swap');

  .grid
    display: flex
    height: auto

    .tileViewContainer
      margin-top: 15px;
      display: flex

      .tilesView
        display: grid
        grid-template-rows: repeat(auto-fill, 100px)
        grid-template-columns: auto
        grid-gap: 15px

        h1
          margin: 0
          text-align: center
          display: grid
          align-self: center

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
              padding-right: 20px
</style>