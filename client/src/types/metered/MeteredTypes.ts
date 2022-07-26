export interface MeteredRemoteTrackInterface {
  username: string,
  track: MediaStream,
  streamId: string,
  participantSessionId: string
}

export interface MeteredRemoteTrackEndInterface {
  participantSessionId: string,
}

export interface MeteredLocalTrackInterface {
  track: MediaStream,
  streamId: string
}

export interface MeteredMeetingHopEvent {
  roomURL: string,
}