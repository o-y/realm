<template>
  <video ref = "videoCallRoot"></video>
</template>

<script lang="ts">

import {Component, Ref, Vue} from 'vue-property-decorator';
import {MeteredSingleton} from '../../framework/metered/MeteredSingleton';
import {SupabaseSingleton} from '../../base/supabase/SupabaseSingleton';

@Component
export default class RealmLocalVideoCall extends Vue {
  @Ref("videoCallRoot") readonly videoCallRoot!: HTMLVideoElement

  public mounted() {
    const meteredInstance = MeteredSingleton.getInstance();

    let fluxState = false;

    meteredInstance
        .getCallbackCoordinator()
        .registerMeetingHopCallback(async meetingHopRequest => {
          if (fluxState) return;
          fluxState = true;

          console.log("Joining room: ", meetingHopRequest.roomURL)

          if (meteredInstance.getMeteredMeeting().meetingState === "joined") {
            await meteredInstance.getMeteredMeeting().leaveMeeting();
          }

          const viableMeeting = meteredInstance.getMeteredMeeting();

          await viableMeeting.join({
            roomURL: meetingHopRequest.roomURL,
            name: (await SupabaseSingleton.getInstance().getAuthState().getAuthenticationData(true))?.getDisplayName()
          });

          try {
            viableMeeting.startVideo();
          } catch (error){
            console.log("Error: ", error);
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
</style>