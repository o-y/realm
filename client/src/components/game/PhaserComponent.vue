<template>
  <div class = "phaserContainer">
    <div class = "gameWrapper">
<!--      <realm-sidebar class = "realmSidebar"/>-->

      <div class = "phaserRoot" ref = "root"></div>
    </div>

    <!-- splash screen -->
    <div class = "splashScreen" ref = "splashScreen" v-if = "shouldShowSplashScreen && IS_SPLASH_SCREEN_ENABLED">
      <div class = "realmLogoContainer">
        <img :src="require('@/assets/realm-logo.png')" alt="Realm Logo" ref = "realmLogo"/>
      </div>
      <div class = "realmSpinnerContainer" ref = "realmSpinnerContainer">
        <loading-spinner></loading-spinner>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import Phaser from 'phaser';
import PhaserWorldGenScene from '../../base/scenes/PhaserWorldGenScene';
import LoadingSpinner from '../loader/LoadingSpinner.vue';
import anime from 'animejs';
import RealmSidebar from '../sidebar/RealmSidebar.vue';
import {SupabaseSingleton} from '../../base/supabase/SupabaseSingleton';

/**
 * This will eventually need to be reconfigured as the entry point for the Realm
 * renderer, but existing within a container, holding other native components.
 */
@Component({
  components: { LoadingSpinner, RealmSidebar }
})
export default class PhaserComponent extends Vue {
  @Ref('root') readonly phaserRoot!: HTMLDivElement
  @Ref('splashScreen') readonly splashScreen!: HTMLDivElement
  @Ref('realmLogo') readonly realmLogo!: HTMLImageElement
  @Ref('realmSpinnerContainer') readonly realmSpinnerContainer!: HTMLDivElement

  private static readonly SCROLL_OFFSET: number = 13;

  private IS_SPLASH_SCREEN_ENABLED: boolean = false;
  private shouldShowSplashScreen: boolean = true;

  private supabase: SupabaseSingleton = SupabaseSingleton.getInstance();

  public mounted() {
    if (!this.isAuthenticated()){
      return this.$router.push("/");
    }

    new Phaser.Game({
      type: Phaser.AUTO,
      title: "Realm",
      backgroundColor: '#ffffff',
      width: window.innerWidth,
      height: window.innerHeight - PhaserComponent.SCROLL_OFFSET,
      autoFocus: true,
      callbacks: {
        postBoot: this.onPostBoot
      },
      scale: {
        mode: Phaser.Scale.ENVELOP
      },
      parent: this.phaserRoot,
      pixelArt: true,
      roundPixels: true,
      antialias: true,
      antialiasGL: true,
      scene: [
        PhaserWorldGenScene
      ],
      physics: {
        default: 'arcade',
      },
    });

    setTimeout(this.runSplashScreenEntrance, 500);
  }

  private isAuthenticated() {
    return this.supabase.getAuthState().isAuthenticated();
  }

  private async onPostBoot() {
    setTimeout( async () => {
      await this.runSplashScreenExit()
      this.shouldShowSplashScreen = false
    }, 900)
  }

  private runSplashScreenEntrance(): Promise<void> {
    if (!this.IS_SPLASH_SCREEN_ENABLED) return Promise.resolve()

    return new Promise<void>(resolve =>
      anime.timeline({ autoplay: true })
          .add({
            targets: this.realmLogo,
            opacity: [0, 1],
            duration: 500,
            translateY: ["-100px", "0px"],
            easing: "easeInOutCubic"
          })
          .add({
            targets: this.realmSpinnerContainer,
            opacity: [0, 1],
            scale: [0, 1],
            duration: 250,
            easing: "easeInOutCubic",
            complete: () => resolve()
          }, 250)
    )
  }

  private runSplashScreenExit(): Promise<void> {
    if (!this.IS_SPLASH_SCREEN_ENABLED) return Promise.resolve()

    return new Promise<void>(resolve =>
        anime.timeline({ autoplay: true })
      .add({
        targets: this.realmLogo,
        opacity: [1, 0],
        duration: 500,
        translateY: ["0px", "-100px"],
        easing: "easeInOutCubic"
      })
      .add({
        targets: this.realmSpinnerContainer,
        opacity: [1, 0],
        scale: [1, 0],
        duration: 500,
        easing: "easeInOutCubic"
      }, 250)
      .add({
        targets: this.splashScreen,
        opacity: [1, 0],
        duration: 500,
        easing: "easeInOutCubic",
        complete: () => resolve()
      }, 250)
      .add({
        targets: this.phaserRoot,
        opacity: [0, 1],
        duration: 500,
        easing: "easeInOutCubic"
      }, 350)
    )
  }
}
</script>

<style scoped lang="stylus">
  $realmLogoWidth = 850px;

  .phaserContainer
    margin: 0
    overflow: hidden
    height: 100vh

    .gameWrapper
      height: 100%

      .phaserRoot
        width: 100%
        height: 100%
        z-index: 10
        margin: 0

      .realmSidebar
        height: 100vh
        background: black;
        position: absolute

    .splashScreen
      position: absolute
      top: 0
      width: 100%
      height: 100%
      background: rgba(white, 100%)
      display: flex
      align-items: center
      justify-content: center
      z-index: 5
      flex-direction: column
      overflow: hidden

      .realmLogoContainer
        img
          opacity: 0
          width: $realmLogoWidth
          margin-bottom: 75px

      .realmSpinnerContainer
        width: 55px
        height: @width
        opacity: 0
</style>