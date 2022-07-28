<template>
  <div class = "realmRemoteParticipantsRoot">
    <div class = "realmRemoteContainer">
      <template v-for = "(value, key) in videoFeedsMap" v-if = "value !== null">
        <div class = "videoContainer">
          <video :srcObject.prop="value" :id="key" autoplay/>
        </div>
      </template>
      <template v-for = "(value, key) in audioFeedsMap" v-if = "value !== null">
        <video :srcObject.prop="value" :id="key" autoplay style = "display: none"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from 'vue-property-decorator';
import {MeteredRemoteTrackEndInterface, MeteredRemoteTrackInterface} from '../../types/metered/MeteredTypes';
import {MeteredSingleton} from '../../framework/metered/MeteredSingleton';

@Component
export default class RealmRemoteVideoCallScreen extends Vue {
  private videoFeedsMap: { [displayName: string] : MediaStream } = {}
  private audioFeedsMap: { [displayName: string] : MediaStream } = {}

  public mounted() {
    const meteredInstance = MeteredSingleton.getInstance();

    console.log("Registering thing")
    meteredInstance
        .getCallbackCoordinator()
        .registerMeetingHopCallback( () => {
          console.log("[RealmRemoteVideoCallScreen]: Clearing participants")
          this.videoFeedsMap = {};
          this.audioFeedsMap = {};
        })
        .registerOnRemoteTrackUpdatedCallback((callback: MeteredRemoteTrackInterface) => {
          console.log("[RealmRemoteVideoCallScreen]: Remote user joined: ", callback.username, callback.track);

          Vue.set(this.videoFeedsMap, callback.participantSessionId, callback.track);
        })
        .registerOnRemoteAudioTrackUpdatedCallback((callback: MeteredRemoteTrackInterface) => {
          console.log("[RealmRemoteVideoCallScreen]: Remote audio user joined: ", callback.username, callback.track);

          Vue.set(this.audioFeedsMap, callback.participantSessionId, callback.track);
        })
        .registerOnRemoteTrackEndCallback((callback: MeteredRemoteTrackEndInterface) => {
          console.log("[RealmRemoteVideoCallScreen]: Remote video user left: ", callback.participantSessionId);

          Vue.set(this.videoFeedsMap, callback.participantSessionId, null);
          Vue.set(this.audioFeedsMap, callback.participantSessionId, null);
        })
  }
}
</script>

<style scoped lang="stylus">
@import "~@/style/config.styl"

// TODO: These are taken from RealmSidebar, ideally these should be stored as a
// global somewhere.
$defaultSidebarPadding = 30px
$sidebarWidth = 400px

$videoHeight = 120px
$videoWidth = 190px

.realmRemoteParticipantsRoot
  height: 80vh
  position: absolute
  width: "calc(100% - %s)" % $sidebarWidth;
  display: flex
  justify-content center

  .realmRemoteContainer
    width: 100%
    height: 100%
    margin: $defaultSidebarPadding
    display: grid
    grid-template-rows: repeat(auto-fill, $videoHeight)
    grid-template-columns: repeat(auto-fill, $videoWidth)
    grid-auto-rows: 1fr
    grid-gap: $defaultSidebarPadding
    direction: rtl

    .videoContainer
      overflow: hidden
      background: $realmPalette.Cloud
      border-radius: 30px

      video
        width: 100%
        height: 100%
        border-radius: 30px
        transform: scale(1.12)
</style>