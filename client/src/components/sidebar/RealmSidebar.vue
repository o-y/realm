<template>
  <div class = "realmSidebar">
    <div class = "videoCallScreen">
      <div class = "videoCallWrapper">
        <div class = "videoCallContainer">
          <realm-local-video-call :exited-meeting = "exitedMeeting"/>
        </div>
        <div class = "videoCallButtonsContainer">
          <div class = "videoCallButton" ref = "videoButton" @click = "mute">
            <span class="material-symbols-outlined">videocam</span>
          </div>

          <div class = "videoCallButton" ref = "leaveButton" @click = "endCall">
            <span class="material-symbols-outlined">call_end</span>
          </div>

          <div class = "videoCallButton" ref = "muteButton" @click = "mute">
            <span class="material-symbols-outlined">mic</span>
          </div>
        </div>
      </div>
    </div>

    <div class = "nearbyPeople">
      <div class = "nearbyPeopleWrapper">
        <div class = "nearbyPeopleTitleContainer">
          <h1>Nearby People</h1>
        </div>
      </div>
    </div>

    <div class = "debugPanel">
      <div class = "debugPanelContainer">
        <p><b>NOTE: </b>Disconnecting from the call is buggy so reload the page if something doesn't look right</p>
      </div>
    </div>

    <div class = "footer">
      <img :src="require('@/assets/realm-pill.png')" alt="realm-pill">
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import RealmLocalVideoCall from './RealmLocalVideoCall.vue';
import {MeteredSingleton} from '../../framework/metered/MeteredSingleton';
import {SupabaseSingleton} from '../../base/supabase/SupabaseSingleton';

@Component({
  components: {RealmLocalVideoCall}
})
export default class RealmSidebar extends Vue {
  private exitedMeeting: boolean = false;

  public async mute() {
    alert("Not implemented, sorry :c")
  }

  public async endCall() {
    if (MeteredSingleton.getInstance().getMeteredMeeting().meetingState === "joined") {
      await MeteredSingleton.getInstance().getMeteredMeeting().leaveMeeting();
      this.exitedMeeting = true;
    } else {
      const roomURL: string = MeteredSingleton.getInstance().getCallbackCoordinator().getMeetingHopInstance()?.roomURL!;

      if (roomURL.length === 0) return;

      await MeteredSingleton.getInstance().getCallbackCoordinator().onMeetingHopEvent({
        roomURL: roomURL
      })

      this.exitedMeeting = false;
    }
  }
}

</script>

<style scoped lang="stylus">
  @import "../../style/config.styl"

  // If these are changed, don't forget to update RealmRemoteVideoCallScreen!
  $defaultSidebarPadding = 30px
  $sidebarWidth = 400px
  $videoCallButtonSize = 56px

  .realmSidebar
    position: absolute;
    top: 0;
    right: 0;
    width: $sidebarWidth
    margin: 0;
    height: 100%;
    background: rgba($realmPalette.PureBlack, 0.65);
    backdrop-filter: blur(15px) grayscale(30%);
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: 350px auto 100px 78px
    opacity: 0

    .nearbyPeople
      display: flex
      justify-content center
      align-items center

      .nearbyPeopleWrapper
        width: 100%
        height: 100%
        margin: $defaultSidebarPadding
        border-radius: 30px
        background: rgba($realmPalette.PureBlack, 0.1)
        display: grid
        grid-template-rows 90px 1fr
        grid-template-columns 1fr
        grid-gap:  $defaultSidebarPadding

        .nearbyPeopleTitleContainer
          width: 100%
          background: linear-gradient(180deg, rgba($realmPalette.RebeccaPurple, 0.2) 0%, rgba(115, 61, 181, 0) 100%)
          border-radius: 30px 30px 0 0
          height: 100px
          display: flex
          justify-content center
          align-items center

          h1
            font-family: 'Poppins', sans-serif;
            color: $realmPalette.Cloud
            text-align center
            font-size: 27px
            margin-bottom: 34px

    .videoCallScreen
      display: flex
      justify-content center
      align-items center

      .videoCallWrapper
        width: 100%
        height: 100%
        margin: $defaultSidebarPadding
        display: grid
        grid-template-columns 1fr
        grid-template-rows 230px 1fr
        grid-gap: 0

        .videoCallContainer
          margin-top: $defaultSidebarPadding
          background: $realmPalette.Cloud
          border-radius: 30px
          overflow: hidden
          display: flex
          justify-content center
          align-items center

        .videoCallButtonsContainer
          display: flex
          justify-content: space-evenly
          align-items center

          .videoCallButton
            width: $videoCallButtonSize
            height: $videoCallButtonSize
            background: #D95040
            border-radius: 50%
            display: flex
            justify-content center
            align-items center
            transition: background 0.25s linear

            &:hover
              cursor: pointer
              background: white

              span
                color: lighten(#D95040, 40%)

            span
              color: white
              font-size: 25px
              transition: color 0.25s linear

    .debugPanel
      display: flex
      justify-content center
      align-items center
      background: none
      margin-top: $defaultSidebarPadding

      .debugPanelContainer
        width: 100%
        height: 100%
        margin: $defaultSidebarPadding
        background: linear-gradient(180deg, rgba($realmPalette.RebeccaPurple, 0.2) 0%, rgba(115, 61, 181, 0) 100%)
        border-radius: 15px
        overflow: hidden
        display: flex
        justify-content center
        align-items center

        p
          color: white
          text-align center
          margin-left: 10px
          margin-right: @margin-left
          font-size: 14px
          font-family: 'Poppins', sans-serif;
          opacity: 0.4

    .footer
      display: flex
      justify-content center
      align-items center

      img
        height: 78px
</style>