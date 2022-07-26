export declare namespace Metered {
  export class Meeting {
    public join({
        roomURL: string,
        name: string
    }): Promise<void>;

    public leaveMeeting(): Promise<void>

<<<<<<< HEAD
    public startVideo(): Promise<void>

    public startAudio(): Promise<void>
=======
    public startVideo(): void
>>>>>>> main

    public on(event: "localTrackStarted", callback: (
        item: InternalMeteredLocalTrackItem) => void
    )

    public on(event: "remoteTrackStarted" | "remoteTrackStopped", callback: (
        item: InternalMeteredRemoteTrackItem) => void
    )

    public meetingState: string;
  }
}

export interface InternalMeteredLocalTrackItem {
  streamId: string,
  track: MediaStreamTrack,
<<<<<<< HEAD
  type: "video" | "audio"
=======
  type: "video" | "voice"
>>>>>>> main
}

export interface InternalMeteredRemoteTrackItem {
  streamId: string,
  track: MediaStreamTrack,
<<<<<<< HEAD
  type: "video" | "audio",
=======
  type: "video" | "voice",
>>>>>>> main
  participant: {
    name: string
  },
  username: string
  participantSessionId: string
}

export {};

declare global {
  interface Window { Metered: Metered; }
}

// Metered is provided using a CDN, hosted as a <script> resource in index.html.
window.Metered = window.Metered || null;