<template>
  <div class = "authView">
    <div class = "authViewContainer">
      <div class = "realmLogo">
        <img :src="require('@/assets/realm-logo.png')" alt="Realm Logo" ref = "realmLogo"/>
      </div>

      <div class = "authenticateButtonContainer">
        <template v-if = "isAuthenticated && authenticationData != null">
          <h1>Welcome back, <b>{{ authenticationData.getDisplayName() }}</b></h1>
          <button v-on:click = "enterRealm">Enter Realm</button>
        </template>
        <template v-else>
          <button v-on:click = "signInWithGithub">Authenticate</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import {SupabaseSingleton} from '../../base/supabase/SupabaseSingleton';
import {AuthenticationData} from '../../base/supabase/auth/AuthState';

@Component
export default class Auth extends Vue {
  private supabase: SupabaseSingleton = SupabaseSingleton.getInstance();

  private authenticationData: AuthenticationData | null = null;

  public async mounted() {
    this.supabase.getAuthState().registerAuthStateChangedCallback(authenticationData => {
      this.authenticationData = authenticationData
    })
  }

  public get isAuthenticated() {
    return this.supabase.getAuthState().isAuthenticated();
  }

  public async signInWithGithub() {
    await this.supabase.getInternalSupabaseClient().auth.signIn({
      provider: "github",
    })
  }

  public enterRealm() {
    let msg = new SpeechSynthesisUtterance("Way time to enter Realm: " + this.authenticationData!.getDisplayName());
    speechSynthesis.speak(msg);
    this.$router.push("/realms/zv.wtf");
  }
}
</script>


<style scoped lang="stylus">
  @import "../../style/config.styl"
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@500&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  .authView
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center

    .authViewContainer
      margin-left: 100px
      margin-right: 100px
      width: 100%
      height: 70%
      display: grid
      grid-template-columns: 1fr
      grid-template-rows: auto auto

      .authenticateButtonContainer
        height: 100%
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

        h1
          font-size: 30px
          font-family: 'Poppins', sans-serif
          padding: 30px
          padding-bottom: 60px
          margin: 0

          b
            background-image: linear-gradient(45deg, $realmPalette.RebeccaPurple, lighten($realmPalette.OceanBlue, 35%));
            background-size: 100%;
            background-repeat: repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;

        button
          font-size: 30px
          font-family: 'Poppins', sans-serif
          padding-left: 60px
          padding-right: @padding-left
          padding-top: 30px;
          padding-bottom: @padding-top
          border: 0
          background: $realmPalette.LavenderWeb
          color: $realmPalette.RebeccaPurple
          border-radius: 30px
          font-weight: 600
          transition: color 0.25s linear, background 0.25s linear, box-shadow 0.25s linear
          box-shadow: 0 14px 28px rgba($realmPalette.RebeccaPurple,0.15), 0 10px 10px rgba($realmPalette.LavenderWeb,0.14);

          &:hover
            background: lighten($realmPalette.LavenderWeb, 15%)
            color: darken($realmPalette.RebeccaPurple, 15%)
            box-shadow: 0 14px 28px rgba($realmPalette.RebeccaPurple,0.25), 0 10px 10px rgba($realmPalette.LavenderWeb,0.24);
            cursor: pointer

      .realmLogo
        display: flex
        justify-content: center
        align-items: center

        img
          width: 50%
</style>