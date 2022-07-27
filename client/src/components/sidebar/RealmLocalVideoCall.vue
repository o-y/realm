<template>
  <div>
    <template v-if = "joinedFirstMeetingRoom">
      <template v-if = "exitedMeeting">
        <h1>You're not in a meeting, click the button below to rejoin!</h1>
      </template>
      <template v-else-if = "hasGrantedCameraAccess">
        <video ref = "videoCallRoot"></video>
      </template>
      <template v-else>
        <h1>No Camera/Mic access! Please grant and then reload the page</h1>
      </template>
    </template>
    <template v-else>
      <h1 style = "color: #0F1108">Welcome to Realm! To speak to others move onto one of the islands with your arrow keys!</h1>
    </template>
  </div>
</template>

<script lang="ts">

import {Component, Prop, Ref, Vue} from 'vue-property-decorator';
import {MeteredSingleton} from '../../framework/metered/MeteredSingleton';
import {SupabaseSingleton} from '../../base/supabase/SupabaseSingleton';

@Component
export default class RealmLocalVideoCall extends Vue {
  @Ref("videoCallRoot") readonly videoCallRoot!: HTMLVideoElement

  @Prop({type: Boolean, default: false, required: true}) readonly exitedMeeting: Boolean = false;

  private hasGrantedCameraAccess = true;
  private joinedFirstMeetingRoom = false;

  public mounted() {
    const meteredInstance = MeteredSingleton.getInstance();
    let fluxState = false;

    meteredInstance
        .getCallbackCoordinator()
        .registerMeetingHopCallback(async meetingHopRequest => {
          this.joinedFirstMeetingRoom = true;
          if (fluxState) return;
          fluxState = true;

          if (meteredInstance.getMeteredMeeting().meetingState === "joined") {
            await meteredInstance.getMeteredMeeting().leaveMeeting();
          }

          const viableMeeting = meteredInstance.getMeteredMeeting();
          await viableMeeting.join({
            roomURL: meetingHopRequest.roomURL,
            name: (await SupabaseSingleton.getInstance().getAuthState().getAuthenticationData(true))?.getDisplayName()
          });

          try {
            await viableMeeting.startVideo();
            await viableMeeting.startAudio();
          } catch (error) {
            console.error("Video/Audio related error: ", error);
            await viableMeeting.leaveMeeting();
            this.hasGrantedCameraAccess = false;
          }
          fluxState = false;
        })
        .registerOnLocalTrackUpdatedCallback(context => {
          this.videoCallRoot.srcObject = context.track;
          this.videoCallRoot.play();
        })
  }
}

</script>

<style scoped lang="stylus">
  video
    width: 100%
    height: 100%
    border-radius: 30px
    transform: scale(1.05)

  h1
    color: #D95040
    font-family: "Poppins"
    text-align: center
    font-size: 25px
    padding-left: 15px
    padding-right: 15px
</style>