import {MeteredLocalTrackInterface, MeteredMeetingHopEvent, MeteredRemoteTrackEndInterface, MeteredRemoteTrackInterface} from '@/types/metered/MeteredTypes';

// TODO: This would be an ideal place to use something similar to Kotlins StateFlow interface :)
export class VideoMeetingCallbackCoordinator {
  private static instance: VideoMeetingCallbackCoordinator | null = null;

  public static getCoordinator(): VideoMeetingCallbackCoordinator {
    if (VideoMeetingCallbackCoordinator.instance === null) {
      VideoMeetingCallbackCoordinator.instance = new VideoMeetingCallbackCoordinator();
    }

    return VideoMeetingCallbackCoordinator.instance;
  }

  private constructor() {}

  private meetingHopRequestInstance: MeteredMeetingHopEvent | null = null;

  private remoteAudioTrackCallbacks: Set<(callback: MeteredRemoteTrackInterface) => void> = new Set<(callback: MeteredRemoteTrackInterface) => void>();
  private remoteTrackCallbacks: Set<(callback: MeteredRemoteTrackInterface) => void> = new Set<(callback: MeteredRemoteTrackInterface) => void>();
  private localTrackCallbacks: Set<(callback: MeteredLocalTrackInterface) => void> = new Set<(callback: MeteredLocalTrackInterface) => void>();
  private meetingHopEvent: Set<(callback: MeteredMeetingHopEvent) => void> = new Set<(callback: MeteredMeetingHopEvent) => void>();
  private remoteTrackEndCallback: Set<(callback: MeteredRemoteTrackEndInterface) => void> = new Set<(callback: MeteredRemoteTrackEndInterface) => void>();

  public registerOnRemoteTrackUpdatedCallback(
      callback: (callback: MeteredRemoteTrackInterface) => void
  ): VideoMeetingCallbackCoordinator {
    this.remoteTrackCallbacks.add(callback);
    return this;
  }

  public registerOnRemoteAudioTrackUpdatedCallback(
      callback: (callback: MeteredRemoteTrackInterface) => void
  ): VideoMeetingCallbackCoordinator {
    this.remoteAudioTrackCallbacks.add(callback);
    return this;
  }

  public registerOnLocalTrackUpdatedCallback(
      callback: (callback: MeteredLocalTrackInterface) => void
  ): VideoMeetingCallbackCoordinator {
    this.localTrackCallbacks.add(callback);
    return this;
  }

  public registerMeetingHopCallback(
      callback: (callback: MeteredMeetingHopEvent) => void
  ): VideoMeetingCallbackCoordinator {
    this.meetingHopEvent.add(callback);
    return this;
  }

  public registerOnRemoteTrackEndCallback(
      callback: (callback: MeteredRemoteTrackEndInterface) => void
  ): VideoMeetingCallbackCoordinator {
    this.remoteTrackEndCallback.add(callback);
    return this;
  }

  public onRemoteTrackUpdated(context: MeteredRemoteTrackInterface): void {
    [...this.remoteTrackCallbacks].forEach(callback => callback(context))
  }

  public onRemoteAudioTrackUpdated(context: MeteredRemoteTrackInterface): void {
    [...this.remoteAudioTrackCallbacks].forEach(callback => callback(context))
  }

  public onLocalTrackUpdated(context: MeteredLocalTrackInterface): void {
    [...this.localTrackCallbacks].forEach(callback => callback(context))
  }

  public onMeetingHopEvent(meetingHopEvent: MeteredMeetingHopEvent): void {
    this.meetingHopRequestInstance = meetingHopEvent;
    [...this.meetingHopEvent].forEach(callback => callback(meetingHopEvent))
  }

  public onRemoteTrackEnd(meetingHopEvent: MeteredRemoteTrackEndInterface): void {
    [...this.remoteTrackEndCallback].forEach(callback => callback(meetingHopEvent))
  }

  public getMeetingHopInstance(): MeteredMeetingHopEvent | null {
    return this.meetingHopRequestInstance;
  }
}