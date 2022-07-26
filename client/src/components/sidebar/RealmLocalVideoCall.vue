<template>
  <div>
    <video ref = "videoCallRoot" v-if = "hasGrantedCameraAccess"></video>
    <h1 v-else>No Camera/Mic access! Please grant and then reload the page</h1>
  </div>

</template>

<script lang="ts">

import {Component, Ref, Vue} from 'vue-property-decorator';
import {MeteredSingleton} from '../../framework/metered/MeteredSingleton';
import {SupabaseSingleton} from '../../base/supabase/SupabaseSingleton';

@Component
export default class RealmLocalVideoCall extends Vue {
  @Ref("videoCallRoot") readonly videoCallRoot!: HTMLVideoElement

  private hasGrantedCameraAccess = true;

  public mounted() {

    const meteredInstance = MeteredSingleton.getInstance();

    let fluxState = false;

    meteredInstance
        .getCallbackCoordinator()
        .registerMeetingHopCallback(async meetingHopRequest => {
          if (fluxState) return;
          fluxState = true;

          if (meteredInstance.getMeteredMeeting().meetingState === "joined") {
            await meteredInstance.getMeteredMeeting().leaveMeeting();
          }

          const viableMeeting = meteredInstance.getMeteredMeeting();

          // await viableMeeting.join({
          //   roomURL: meetingHopRequest.roomURL,
          //   name: (await SupabaseSingleton.getInstance().getAuthState().getAuthenticationData(true))?.getDisplayName()
          // });

          try {
            await viableMeeting.startVideo();
            await viableMeeting.startAudio();
          } catch (error){
            console.error("Video/Audio related error: ", error);
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
</style>