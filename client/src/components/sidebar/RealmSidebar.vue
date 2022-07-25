<template>
  <div class = "realmSidebar">
    <div class = "videoCallScreen">
      <div class = "videoCallWrapper">
        <div class = "videoCallRoot" ref = "videoCallRoot"></div>
        <div class = "videoCallButtonsContainer">
          <div class = "videoCallButton" ref = "videoButton">
            <span class="material-symbols-outlined">videocam</span>
          </div>

          <div class = "videoCallButton" ref = "muteButton">
            <span class="material-symbols-outlined">mic</span>
          </div>
        </div>
      </div>
    </div>

    <div class = "nearbyPeople">
      <div class = "nearbyPeopleWrapper">
        <div class = "nearbyPeopleTitleContainer">
          <h1>Nearby People (SDK)</h1>
        </div>
      </div>
    </div>

    <div class = "debugPanel">

    </div>

    <div class = "footer">
      <img :src="require('@/assets/realm-pill.png')" alt="realm-pill">
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
// import { VideoSDK } from "@videosdk.live/js-sdk";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

@Component
export default class RealmSidebar extends Vue {
  public mounted() {
    // VideoSDK.config("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI4NjgxZWJhNS04OGNiLTQxNWEtOTg5MC00YjRlYjIzN2M5MjkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY1ODc3NjA2OCwiZXhwIjoxNjU5MzgwODY4fQ.TSih8ngnvcXIbuPlFqK8gvv5jOW4KLIJc45cnQciGzU");

    console.log("Starting VideoSDK");
    const meeting = new VideoSDKMeeting().init({
      name: "Realm",
      meetingId: "hello",
      apiKey: "8681eba5-88cb-415a-9890-4b4eb237c929",
      region: "sg001",
      containerId: null,
      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,
      participantCanLeave: true,
      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: true,
      layout: {
        type: "SPOTLIGHT",
        priority: "PIN",
      },
      branding: {
        enabled: true,
        logoURL: "https://static.zujonow.com/videosdk.live/videosdk_logo_circle_big.png",
        name: "Realm",
        poweredBy: false,
      },
      permissions: {
        pin: true,
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: true, // Can toggle other participant's mic
        toggleParticipantWebcam: true, // Can toggle other participant's webcam
        drawOnWhiteboard: true, // Can draw on whiteboard
        toggleWhiteboard: true, // Can toggle whiteboard
        toggleRecording: true, // Can toggle meeting recording
        toggleLivestream: true, //can toggle live stream
        removeParticipant: true, // Can remove participant
        endMeeting: true, // Can end meeting
        changeLayout: true, //can change layout
      },
      joinScreen: {
        visible: true,
        title: "Daily scrum",
        meetingUrl: window.location.href,
      },
      leftScreen: {
        actionButton: {
          label: "Video SDK Live",
          href: "https://videosdk.live/",
        },
      },
      notificationSoundEnabled: true,
      debug: true,
      maxResolution: "sd",
    })
  }
}

</script>

<style scoped lang="stylus">
  @import "../../style/config.styl"

  $defaultSidebarPadding = 30px
  $sidebarWidth = 400px
  $videoCallButtonSize = 56px

  .realmSidebar
    position: absolute;
    top: 0;
    right: 0;
    width: $sidebarWidth
    height: 100%;
    background: rgba($realmPalette.PureBlack, 0.65);
    backdrop-filter: blur(15px) grayscale(30%);
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: 350px auto 100px 78px

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

        .videoCallRoot
          margin-top: $defaultSidebarPadding
          background: $realmPalette.Cloud
          border-radius: 30px

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

            span
              color: white
              font-size: 25px


    .footer
      display: flex
      justify-content center
      align-items center

      img
        height: 78px
</style>