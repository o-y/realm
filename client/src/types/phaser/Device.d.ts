namespace Phaser.Device {
  /**
   * Determines the audio playback capabilities of the device running this Phaser Game instance.
   * These values are read-only and populated during the boot sequence of the game.
   * They are then referenced by internal game systems and are available for you to access
   * via `this.sys.game.device.audio` from within any Scene.
   */
  type Audio = {
    /**
     * Can this device play HTML Audio tags?
     */
    audioData: boolean;
    /**
     * Can this device play EC-3 Dolby Digital Plus files?
     */
    dolby: boolean;
    /**
     * Can this device can play m4a files.
     */
    m4a: boolean;
    /**
     * Can this device play mp3 files?
     */
    mp3: boolean;
    /**
     * Can this device play ogg files?
     */
    ogg: boolean;
    /**
     * Can this device play opus files?
     */
    opus: boolean;
    /**
     * Can this device play wav files?
     */
    wav: boolean;
    /**
     * Does this device have the Web Audio API?
     */
    webAudio: boolean;
    /**
     * Can this device play webm files?
     */
    webm: boolean;
  };

  /**
   * Determines the browser type and version running this Phaser Game instance.
   * These values are read-only and populated during the boot sequence of the game.
   * They are then referenced by internal game systems and are available for you to access
   * via `this.sys.game.device.browser` from within any Scene.
   */
  type Browser = {
    /**
     * Set to true if running in Chrome.
     */
    chrome: boolean;
    /**
     * Set to true if running in Microsoft Edge browser.
     */
    edge: boolean;
    /**
     * Set to true if running in Firefox.
     */
    firefox: boolean;
    /**
     * Set to true if running in Internet Explorer 11 or less (not Edge).
     */
    ie: boolean;
    /**
     * Set to true if running in Mobile Safari.
     */
    mobileSafari: boolean;
    /**
     * Set to true if running in Opera.
     */
    opera: boolean;
    /**
     * Set to true if running in Safari.
     */
    safari: boolean;
    /**
     * Set to true if running in the Silk browser (as used on the Amazon Kindle)
     */
    silk: boolean;
    /**
     * Set to true if running a Trident version of Internet Explorer (IE11+)
     */
    trident: boolean;
    /**
     * If running in Chrome this will contain the major version number.
     */
    chromeVersion: number;
    /**
     * If running in Firefox this will contain the major version number.
     */
    firefoxVersion: number;
    /**
     * If running in Internet Explorer this will contain the major version number. Beyond IE10 you should use Browser.trident and Browser.tridentVersion.
     */
    ieVersion: number;
    /**
     * If running in Safari this will contain the major version number.
     */
    safariVersion: number;
    /**
     * If running in Internet Explorer 11 this will contain the major version number. See {@link http://msdn.microsoft.com/en-us/library/ie/ms537503(v=vs.85).aspx}
     */
    tridentVersion: number;
  };

  /**
   * Determines the canvas features of the browser running this Phaser Game instance.
   * These values are read-only and populated during the boot sequence of the game.
   * They are then referenced by internal game systems and are available for you to access
   * via `this.sys.game.device.canvasFeatures` from within any Scene.
   */
  type CanvasFeatures = {
    /**
     * Set to true if the browser supports inversed alpha.
     */
    supportInverseAlpha: boolean;
    /**
     * Set to true if the browser supports new canvas blend modes.
     */
    supportNewBlendModes: boolean;
  };

  /**
   * Determines the features of the browser running this Phaser Game instance.
   * These values are read-only and populated during the boot sequence of the game.
   * They are then referenced by internal game systems and are available for you to access
   * via `this.sys.game.device.features` from within any Scene.
   */
  type Features = {
    /**
     * True if canvas supports a 'copy' bitblt onto itself when the source and destination regions overlap.
     */
    canvasBitBltShift: boolean;
    /**
     * Is canvas available?
     */
    canvas: boolean;
    /**
     * Is file available?
     */
    file: boolean;
    /**
     * Is fileSystem available?
     */
    fileSystem: boolean;
    /**
     * Does the device support the getUserMedia API?
     */
    getUserMedia: boolean;
    /**
     * Is the device big or little endian? (only detected if the browser supports TypedArrays)
     */
    littleEndian: boolean;
    /**
     * Is localStorage available?
     */
    localStorage: boolean;
    /**
     * Is Pointer Lock available?
     */
    pointerLock: boolean;
    /**
     * Does the device context support 32bit pixel manipulation using array buffer views?
     */
    support32bit: boolean;
    /**
     * Does the device support the Vibration API?
     */
    vibration: boolean;
    /**
     * Is webGL available?
     */
    webGL: boolean;
    /**
     * Is worker available?
     */
    worker: boolean;
  };

  /**
   * Determines the full screen support of the browser running this Phaser Game instance.
   * These values are read-only and populated during the boot sequence of the game.
   * They are then referenced by internal game systems and are available for you to access
   * via `this.sys.game.device.fullscreen` from within any Scene.
   */
  type Fullscreen = {
    /**
     * Does the browser support the Full Screen API?
     */
    available: boolean;
    /**
     * Does the browser support access to the Keyboard during Full Screen mode?
     */
    keyboard: boolean;
    /**
     * If the browser supports the Full Screen API this holds the call you need to use to cancel it.
     */
    cancel: string;
    /**
     * If the browser supports the Full Screen API this holds the call you need to use to activate it.
     */
    request: string;
  };

  /**
   * Determines the input support of the browser running this Phaser Game instance.
   * These values are read-only and populated during the boot sequence of the game.
   * They are then referenced by internal game systems and are available for you to access
   * via `this.sys.game.device.input` from within any Scene.
   */
  type Input = {
    /**
     * The newest type of Wheel/Scroll event supported: 'wheel', 'mousewheel', 'DOMMouseScroll'
     */
    wheelType: string;
    /**
     * Is navigator.getGamepads available?
     */
    gamepads: boolean;
    /**
     * Is mspointer available?
     */
    mspointer: boolean;
    /**
     * Is touch available?
     */
    touch: boolean;
  };

  /**
   * Determines the operating system of the device running this Phaser Game instance.
   * These values are read-only and populated during the boot sequence of the game.
   * They are then referenced by internal game systems and are available for you to access
   * via `this.sys.game.device.os` from within any Scene.
   */
  type OS = {
    /**
     * Is running on android?
     */
    android: boolean;
    /**
     * Is running on chromeOS?
     */
    chromeOS: boolean;
    /**
     * Is the game running under Apache Cordova?
     */
    cordova: boolean;
    /**
     * Is the game running under the Intel Crosswalk XDK?
     */
    crosswalk: boolean;
    /**
     * Is running on a desktop?
     */
    desktop: boolean;
    /**
     * Is the game running under Ejecta?
     */
    ejecta: boolean;
    /**
     * Is the game running under GitHub Electron?
     */
    electron: boolean;
    /**
     * Is running on iOS?
     */
    iOS: boolean;
    /**
     * Is running on iPad?
     */
    iPad: boolean;
    /**
     * Is running on iPhone?
     */
    iPhone: boolean;
    /**
     * Is running on an Amazon Kindle?
     */
    kindle: boolean;
    /**
     * Is running on linux?
     */
    linux: boolean;
    /**
     * Is running on macOS?
     */
    macOS: boolean;
    /**
     * Is the game running under Node.js?
     */
    node: boolean;
    /**
     * Is the game running under Node-Webkit?
     */
    nodeWebkit: boolean;
    /**
     * Set to true if running as a WebApp, i.e. within a WebView
     */
    webApp: boolean;
    /**
     * Is running on windows?
     */
    windows: boolean;
    /**
     * Is running on a Windows Phone?
     */
    windowsPhone: boolean;
    /**
     * If running in iOS this will contain the major version number.
     */
    iOSVersion: number;
    /**
     * PixelRatio of the host device?
     */
    pixelRatio: number;
  };

  /**
   * Determines the video support of the browser running this Phaser Game instance.
   * These values are read-only and populated during the boot sequence of the game.
   * They are then referenced by internal game systems and are available for you to access
   * via `this.sys.game.device.video` from within any Scene.
   *
   * In Phaser 3.20 the properties were renamed to drop the 'Video' suffix.
   */
  type Video = {
    /**
     * Can this device play h264 mp4 video files?
     */
    h264: boolean;
    /**
     * Can this device play hls video files?
     */
    hls: boolean;
    /**
     * Can this device play h264 mp4 video files?
     */
    mp4: boolean;
    /**
     * Can this device play ogg video files?
     */
    ogg: boolean;
    /**
     * Can this device play vp9 video files?
     */
    vp9: boolean;
    /**
     * Can this device play webm video files?
     */
    webm: boolean;
  };

}