<template>
  <div class = "realmRemoteParticipantsRoot">
    <div class = "realmRemoteContainer">

      <template v-for = "(value, key) in remoteParticipantsMap" v-if = "value !== null">
        <div class = "videoContainer">
          <video :srcObject.prop="value" :id="key" autoplay/>
        </div>
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
  private remoteParticipantsMap: { [displayName: string] : MediaStream } = {}
  public mounted() {
    const meteredInstance = MeteredSingleton.getInstance();
    let hadRemoteTrackContextFire: boolean = false;

    meteredInstance
        .getCallbackCoordinator()
        .registerOnLocalTrackUpdatedCallback( () => {
          if (hadRemoteTrackContextFire){
            // this.remoteParticipantsMap = {}
          }
        })
        .registerOnRemoteTrackUpdatedCallback((callback: MeteredRemoteTrackInterface) => {
          hadRemoteTrackContextFire = true;
          console.log("Remote user joined: ", callback.username, callback.track);

          Vue.set(this.remoteParticipantsMap, callback.participantSessionId, callback.track);
        })
        .registerOnRemoteTrackEndCallback((callback: MeteredRemoteTrackEndInterface) => {
          console.log("Remote user left: ", callback.participantSessionId);

          Vue.set(this.remoteParticipantsMap, callback.participantSessionId, null);
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
$topbarHeight = 180px

$videoWidth = 240px

.realmRemoteParticipantsRoot
  height: $topbarHeight;
  position: absolute
  width: "calc(100% - %s)" % $sidebarWidth;
  display: flex
  justify-content center

  .realmRemoteContainer
    width: 100%
    height: "calc(%s - %s)" % ($topbarHeight $defaultSidebarPadding);
    margin: $defaultSidebarPadding
    display: grid
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