import {MeetingLocation} from '@/framework/metered/spatial/MeetingLocation';

export class MeetingLocationUtil {
  public static transformMeetingLocationEnumToMeteredRoomName(meetingLocation: MeetingLocation): string {
    switch (meetingLocation) {
      case MeetingLocation.LEFT_ISLAND:
        return "zv.metered.live/left_island";
      case MeetingLocation.MIDDLE_ISLAND:
        return "zv.metered.live/middle_island";
      case MeetingLocation.RIGHT_ISLAND:
        return "zv.metered.live/right_island";
      case MeetingLocation.YELLOW_BRICK_HOUSE:
        return "zv.metered.live/yellow_brick_house";
    }
  }


}