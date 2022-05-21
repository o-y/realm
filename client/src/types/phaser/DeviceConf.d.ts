namespace Phaser {
  type DeviceConf = {
    /**
     * The OS Device functions.
     */
    os: Phaser.Device.OS;
    /**
     * The Browser Device functions.
     */
    browser: Phaser.Device.Browser;
    /**
     * The Features Device functions.
     */
    features: Phaser.Device.Features;
    /**
     * The Input Device functions.
     */
    input: Phaser.Device.Input;
    /**
     * The Audio Device functions.
     */
    audio: Phaser.Device.Audio;
    /**
     * The Video Device functions.
     */
    video: Phaser.Device.Video;
    /**
     * The Fullscreen Device functions.
     */
    fullscreen: Phaser.Device.Fullscreen;
    /**
     * The Canvas Device functions.
     */
    canvasFeatures: Phaser.Device.CanvasFeatures;
  };
}