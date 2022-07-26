import {VideoMeetingCallbackCoordinator} from '@/framework/metered/callback/VideoMeetingCallbackCoordinator';
import {MeetingSpatialCoordinator} from '@/framework/metered/spatial/MeetingSpatialCoordinator';
import {InternalMeteredLocalTrackItem, InternalMeteredRemoteTrackItem, Metered} from '@/types/metered/metered';
import {Internal} from '@/util/enums/Internal';

export class MeteredSingleton {
  private static instance: MeteredSingleton | null = null;
  private meetingSpatialCoordinator: MeetingSpatialCoordinator = new MeetingSpatialCoordinator();
  private meetingInstance: Metered.Meeting | null = null;

  public static getInstance(): MeteredSingleton {
    if (MeteredSingleton.instance === null) {
      MeteredSingleton.instance = new MeteredSingleton();
    }

    return MeteredSingleton.instance;
  }

  public getMeteredMeeting(): Metered.Meeting {
    if (this.meetingInstance === null || this.meetingInstance.meetingState === "terminated"){
      this.meetingInstance = new window.Metered.Meeting();
      this.initiateCallbacksWithMeeting(this.meetingInstance!);
    }

    return this.meetingInstance!;
  }

  public getCallbackCoordinator(): VideoMeetingCallbackCoordinator {
    return VideoMeetingCallbackCoordinator.getCoordinator();
  }

  public getMeetingSpatialCoordinator() {
    return this.meetingSpatialCoordinator;
  }

  private constructor() {}

  private initiateCallbacksWithMeeting(meeting: Metered.Meeting) {
    meeting.on("localTrackStarted", (item: InternalMeteredLocalTrackItem) => {
<<<<<<< HEAD
=======
      console.log("Joined local meeting: ", item);
>>>>>>> main
      if (item.type === "video") {
        this.getCallbackCoordinator().onLocalTrackUpdated({
          track: new MediaStream([item.track]),
          streamId: item.streamId
        })
      }
    });

    meeting.on("remoteTrackStarted", (item: InternalMeteredRemoteTrackItem) => {
      if (item.type === "video") {
        this.getCallbackCoordinator().onRemoteTrackUpdated({
          track: new MediaStream([item.track]),
          streamId: item.streamId,
          username: item.participant.name,
          participantSessionId: item.participantSessionId
        })
<<<<<<< HEAD
      } else if (item.type === "audio") {
        this.getCallbackCoordinator().onRemoteAudioTrackUpdated({
          track: new MediaStream([item.track]),
          streamId: item.streamId,
          username: item.participant.name,
          participantSessionId: item.participantSessionId
        })
=======
>>>>>>> main
      }
    });

    meeting.on("remoteTrackStopped",  (item) => {
      this.getCallbackCoordinator().onRemoteTrackEnd({
        participantSessionId: item.participantSessionId
      })
    });
  }
}