import {MeetingLocation} from '@/framework/metered/spatial/MeetingLocation';
import {MeteredSingleton} from '@/framework/metered/MeteredSingleton';
import {MeetingLocationUtil} from '@/framework/metered/spatial/MeetingLocationUtil';

export class MeetingSpatialCoordinator {
  private currentMeetingLocation: MeetingLocation | null = null;

  public onMeetingLocationUpdate(meetingLocation: MeetingLocation) {
    if (meetingLocation === this.currentMeetingLocation) return;
    this.currentMeetingLocation = meetingLocation;
    
    const meetingUrl = MeetingLocationUtil.transformMeetingLocationEnumToMeteredRoomName(meetingLocation);
    MeteredSingleton
        .getInstance()
        .getCallbackCoordinator()
        .onMeetingHopEvent({
          roomURL: meetingUrl
        })
  }
}