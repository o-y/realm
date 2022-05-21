namespace Phaser.Core {
  /**
   * The active game configuration settings, parsed from a {@link Phaser.Types.Core.GameConfig} object.
   */
  class Config {
    /**
     *
     * @param GameConfig The configuration object for your Phaser Game instance.
     */
    constructor(GameConfig?: Phaser.Types.Core.GameConfig);

    /**
     * The width of the underlying canvas, in pixels.
     */
    readonly width: number | string;

    /**
     * The height of the underlying canvas, in pixels.
     */
    readonly height: number | string;

    /**
     * The zoom factor, as used by the Scale Manager.
     */
    readonly zoom: Phaser.Scale.ZoomType | number;

    /**
     * A parent DOM element into which the canvas created by the renderer will be injected.
     */
    readonly parent: any;

    /**
     * The scale mode as used by the Scale Manager. The default is zero, which is no scaling.
     */
    readonly scaleMode: Phaser.Scale.ScaleModeType;

    /**
     * Is the Scale Manager allowed to adjust the CSS height property of the parent to be 100%?
     */
    readonly expandParent: boolean;

    /**
     * Automatically round the display and style sizes of the canvas. This can help with performance in lower-powered devices.
     */
    readonly autoRound: boolean;

    /**
     * Automatically center the canvas within the parent?
     */
    readonly autoCenter: Phaser.Scale.CenterType;

    /**
     * How many ms should elapse before checking if the browser size has changed?
     */
    readonly resizeInterval: number;

    /**
     * The DOM element that will be sent into full screen mode, or its `id`. If undefined Phaser will create its own div and insert the canvas into it when entering fullscreen mode.
     */
    readonly fullscreenTarget: HTMLElement | string;

    /**
     * The minimum width, in pixels, the canvas will scale down to. A value of zero means no minimum.
     */
    readonly minWidth: number;

    /**
     * The maximum width, in pixels, the canvas will scale up to. A value of zero means no maximum.
     */
    readonly maxWidth: number;

    /**
     * The minimum height, in pixels, the canvas will scale down to. A value of zero means no minimum.
     */
    readonly minHeight: number;

    /**
     * The maximum height, in pixels, the canvas will scale up to. A value of zero means no maximum.
     */
    readonly maxHeight: number;

    /**
     * Force Phaser to use a specific renderer. Can be `CONST.CANVAS`, `CONST.WEBGL`, `CONST.HEADLESS` or `CONST.AUTO` (default)
     */
    readonly renderType: number;

    /**
     * Force Phaser to use your own Canvas element instead of creating one.
     */
    readonly canvas: HTMLCanvasElement;

    /**
     * Force Phaser to use your own Canvas context instead of creating one.
     */
    readonly context: CanvasRenderingContext2D | WebGLRenderingContext;

    /**
     * Optional CSS attributes to be set on the canvas object created by the renderer.
     */
    readonly canvasStyle: string;

    /**
     * Is Phaser running under a custom (non-native web) environment? If so, set this to `true` to skip internal Feature detection. If `true` the `renderType` cannot be left as `AUTO`.
     */
    readonly customEnvironment: boolean;

    /**
     * The default Scene configuration object.
     */
    readonly sceneConfig: object;

    /**
     * A seed which the Random Data Generator will use. If not given, a dynamic seed based on the time is used.
     */
    readonly seed: string[];

    /**
     * The title of the game.
     */
    readonly gameTitle: string;

    /**
     * The URL of the game.
     */
    readonly gameURL: string;

    /**
     * The version of the game.
     */
    readonly gameVersion: string;

    /**
     * If `true` the window will automatically be given focus immediately and on any future mousedown event.
     */
    readonly autoFocus: boolean;

    /**
     * Should the game create a div element to act as a DOM Container? Only enable if you're using DOM Element objects. You must provide a parent object if you use this feature.
     */
    readonly domCreateContainer: boolean;

    /**
     * Should the DOM Container that is created (if `dom.createContainer` is true) be positioned behind (true) or over the top (false, the default) of the game canvas?
     */
    readonly domBehindCanvas: boolean;

    /**
     * The default `pointerEvents` attribute set on the DOM Container.
     */
    readonly domPointerEvents: string;

    /**
     * Enable the Keyboard Plugin. This can be disabled in games that don't need keyboard input.
     */
    readonly inputKeyboard: boolean;

    /**
     * The DOM Target to listen for keyboard events on. Defaults to `window` if not specified.
     */
    readonly inputKeyboardEventTarget: any;

    /**
     * `preventDefault` will be called on every non-modified key which has a key code in this array. By default, it is empty.
     */
    readonly inputKeyboardCapture: number[];

    /**
     * Enable the Mouse Plugin. This can be disabled in games that don't need mouse input.
     */
    readonly inputMouse: boolean | object;

    /**
     * The DOM Target to listen for mouse events on. Defaults to the game canvas if not specified.
     */
    readonly inputMouseEventTarget: any;

    /**
     * Should `mousedown` DOM events have `preventDefault` called on them?
     */
    readonly inputMousePreventDefaultDown: boolean;

    /**
     * Should `mouseup` DOM events have `preventDefault` called on them?
     */
    readonly inputMousePreventDefaultUp: boolean;

    /**
     * Should `mousemove` DOM events have `preventDefault` called on them?
     */
    readonly inputMousePreventDefaultMove: boolean;

    /**
     * Should `wheel` DOM events have `preventDefault` called on them?
     */
    readonly inputMousePreventDefaultWheel: boolean;

    /**
     * Enable the Touch Plugin. This can be disabled in games that don't need touch input.
     */
    readonly inputTouch: boolean;

    /**
     * The DOM Target to listen for touch events on. Defaults to the game canvas if not specified.
     */
    readonly inputTouchEventTarget: any;

    /**
     * Should touch events be captured? I.e. have prevent default called on them.
     */
    readonly inputTouchCapture: boolean;

    /**
     * The number of Pointer objects created by default. In a mouse-only, or non-multi touch game, you can leave this as 1.
     */
    readonly inputActivePointers: number;

    /**
     * The smoothing factor to apply during Pointer movement. See {@link Phaser.Input.Pointer#smoothFactor}.
     */
    readonly inputSmoothFactor: number;

    /**
     * Should Phaser listen for input events on the Window? If you disable this, events like 'POINTER_UP_OUTSIDE' will no longer fire.
     */
    readonly inputWindowEvents: boolean;

    /**
     * Enable the Gamepad Plugin. This can be disabled in games that don't need gamepad input.
     */
    readonly inputGamepad: boolean;

    /**
     * The DOM Target to listen for gamepad events on. Defaults to `window` if not specified.
     */
    readonly inputGamepadEventTarget: any;

    /**
     * Set to `true` to disable the right-click context menu.
     */
    readonly disableContextMenu: boolean;

    /**
     * The Audio Configuration object.
     */
    readonly audio: Phaser.Types.Core.AudioConfig;

    /**
     * Don't write the banner line to the console.log.
     */
    readonly hideBanner: boolean;

    /**
     * Omit Phaser's name and version from the banner.
     */
    readonly hidePhaser: boolean;

    /**
     * The color of the banner text.
     */
    readonly bannerTextColor: string;

    /**
     * The background colors of the banner.
     */
    readonly bannerBackgroundColor: string[];

    /**
     * The Frame Rate Configuration object, as parsed by the Timestep class.
     */
    readonly fps: Phaser.Types.Core.FPSConfig;

    /**
     * An object mapping WebGL names to WebGLPipeline classes. These should be class constructors, not instances.
     */
    readonly pipeline: Phaser.Types.Core.PipelineConfig;

    /**
     * When set to `true`, WebGL uses linear interpolation to draw scaled or rotated textures, giving a smooth appearance. When set to `false`, WebGL uses nearest-neighbor interpolation, giving a crisper appearance. `false` also disables antialiasing of the game canvas itself, if the browser supports it, when the game canvas is scaled.
     */
    readonly antialias: boolean;

    /**
     * Sets the `antialias` property when the WebGL context is created. Setting this value does not impact any subsequent textures that are created, or the canvas style attributes.
     */
    readonly antialiasGL: boolean;

    /**
     * Sets the `mipmapFilter` property when the WebGL renderer is created.
     */
    readonly mipmapFilter: string;

    /**
     * When set to `true` it will create a desynchronized context for both 2D and WebGL. See https://developers.google.com/web/updates/2019/05/desynchronized for details.
     */
    readonly desynchronized: boolean;

    /**
     * Draw texture-based Game Objects at only whole-integer positions. Game Objects without textures, like Graphics, ignore this property.
     */
    readonly roundPixels: boolean;

    /**
     * Prevent pixel art from becoming blurred when scaled. It will remain crisp (tells the WebGL renderer to automatically create textures using a linear filter mode).
     */
    readonly pixelArt: boolean;

    /**
     * Whether the game canvas will have a transparent background.
     */
    readonly transparent: boolean;

    /**
     * Whether the game canvas will be cleared between each rendering frame. You can disable this if you have a full-screen background image or game object.
     */
    readonly clearBeforeRender: boolean;

    /**
     * If the value is true the WebGL buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
     */
    readonly preserveDrawingBuffer: boolean;

    /**
     * In WebGL mode, sets the drawing buffer to contain colors with pre-multiplied alpha.
     */
    readonly premultipliedAlpha: boolean;

    /**
     * Let the browser abort creating a WebGL context if it judges performance would be unacceptable.
     */
    readonly failIfMajorPerformanceCaveat: boolean;

    /**
     * "high-performance", "low-power" or "default". A hint to the browser on how much device power the game might use.
     */
    readonly powerPreference: string;

    /**
     * The default WebGL Batch size. Represents the number of _quads_ that can be added to a single batch.
     */
    readonly batchSize: number;

    /**
     * When in WebGL mode, this sets the maximum number of GPU Textures to use. The default, -1, will use all available units. The WebGL1 spec says all browsers should provide a minimum of 8.
     */
    readonly maxTextures: number;

    /**
     * The maximum number of lights allowed to be visible within range of a single Camera in the LightManager.
     */
    readonly maxLights: number;

    /**
     * The background color of the game canvas. The default is black. This value is ignored if `transparent` is set to `true`.
     */
    readonly backgroundColor: Phaser.Display.Color;

    /**
     * Called before Phaser boots. Useful for initializing anything not related to Phaser that Phaser may require while booting.
     */
    readonly preBoot: Phaser.Types.Core.BootCallback;

    /**
     * A function to run at the end of the boot sequence. At this point, all the game systems have started and plugins have been loaded.
     */
    readonly postBoot: Phaser.Types.Core.BootCallback;

    /**
     * The Physics Configuration object.
     */
    readonly physics: Phaser.Types.Core.PhysicsConfig;

    /**
     * The default physics system. It will be started for each scene. Either 'arcade', 'impact' or 'matter'.
     */
    readonly defaultPhysicsSystem: boolean | string;

    /**
     * A URL used to resolve paths given to the loader. Example: 'http://labs.phaser.io/assets/'.
     */
    readonly loaderBaseURL: string;

    /**
     * A URL path used to resolve relative paths given to the loader. Example: 'images/sprites/'.
     */
    readonly loaderPath: string;

    /**
     * Maximum parallel downloads allowed for resources (Default to 32).
     */
    readonly loaderMaxParallelDownloads: number;

    /**
     * 'anonymous', 'use-credentials', or `undefined`. If you're not making cross-origin requests, leave this as `undefined`. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes}.
     */
    readonly loaderCrossOrigin: string | undefined;

    /**
     * The response type of the XHR request, e.g. `blob`, `text`, etc.
     */
    readonly loaderResponseType: string;

    /**
     * Should the XHR request use async or not?
     */
    readonly loaderAsync: boolean;

    /**
     * Optional username for all XHR requests.
     */
    readonly loaderUser: string;

    /**
     * Optional password for all XHR requests.
     */
    readonly loaderPassword: string;

    /**
     * Optional XHR timeout value, in ms.
     */
    readonly loaderTimeout: number;

    /**
     * Optional XHR withCredentials value.
     */
    readonly loaderWithCredentials: boolean;

    /**
     * An array of global plugins to be installed.
     */
    readonly installGlobalPlugins: any;

    /**
     * An array of Scene level plugins to be installed.
     */
    readonly installScenePlugins: any;

    /**
     * The plugins installed into every Scene (in addition to CoreScene and Global).
     */
    readonly defaultPlugins: any;

    /**
     * A base64 encoded PNG that will be used as the default blank texture.
     */
    readonly defaultImage: string;

    /**
     * A base64 encoded PNG that will be used as the default texture when a texture is assigned that is missing or not loaded.
     */
    readonly missingImage: string;

    /**
     * A base64 encoded PNG that will be used as the default texture when a texture is assigned that is white or not loaded.
     */
    readonly whiteImage: string;

  }

  /**
   * Called automatically by Phaser.Game and responsible for creating the renderer it will use.
   *
   * Relies upon two webpack global flags to be defined: `WEBGL_RENDERER` and `CANVAS_RENDERER` during build time, but not at run-time.
   * @param game The Phaser.Game instance on which the renderer will be set.
   */
  function CreateRenderer(game: Phaser.Game): void;

  /**
   * Called automatically by Phaser.Game and responsible for creating the console.log debug header.
   *
   * You can customize or disable the header via the Game Config object.
   * @param game The Phaser.Game instance which will output this debug header.
   */
  function DebugHeader(game: Phaser.Game): void;

  namespace Events {
    /**
     * The Game Blur Event.
     *
     * This event is dispatched by the Game Visibility Handler when the window in which the Game instance is embedded
     * enters a blurred state. The blur event is raised when the window loses focus. This can happen if a user swaps
     * tab, or if they simply remove focus from the browser to another app.
     */
    const BLUR: any;

    /**
     * The Game Boot Event.
     *
     * This event is dispatched when the Phaser Game instance has finished booting, but before it is ready to start running.
     * The global systems use this event to know when to set themselves up, dispatching their own `ready` events as required.
     */
    const BOOT: any;

    /**
     * The Game Context Lost Event.
     *
     * This event is dispatched by the Game if the WebGL Renderer it is using encounters a WebGL Context Lost event from the browser.
     *
     * The partner event is `CONTEXT_RESTORED`.
     */
    const CONTEXT_LOST: any;

    /**
     * The Game Context Restored Event.
     *
     * This event is dispatched by the Game if the WebGL Renderer it is using encounters a WebGL Context Restored event from the browser.
     *
     * The partner event is `CONTEXT_LOST`.
     */
    const CONTEXT_RESTORED: any;

    /**
     * The Game Destroy Event.
     *
     * This event is dispatched when the game instance has been told to destroy itself.
     * Lots of internal systems listen to this event in order to clear themselves out.
     * Custom plugins and game code should also do the same.
     */
    const DESTROY: any;

    /**
     * The Game Focus Event.
     *
     * This event is dispatched by the Game Visibility Handler when the window in which the Game instance is embedded
     * enters a focused state. The focus event is raised when the window re-gains focus, having previously lost it.
     */
    const FOCUS: any;

    /**
     * The Game Hidden Event.
     *
     * This event is dispatched by the Game Visibility Handler when the document in which the Game instance is embedded
     * enters a hidden state. Only browsers that support the Visibility API will cause this event to be emitted.
     *
     * In most modern browsers, when the document enters a hidden state, the Request Animation Frame and setTimeout, which
     * control the main game loop, will automatically pause. There is no way to stop this from happening. It is something
     * your game should account for in its own code, should the pause be an issue (i.e. for multiplayer games)
     */
    const HIDDEN: any;

    /**
     * The Game Pause Event.
     *
     * This event is dispatched when the Game loop enters a paused state, usually as a result of the Visibility Handler.
     */
    const PAUSE: any;

    /**
     * The Game Post-Render Event.
     *
     * This event is dispatched right at the end of the render process.
     *
     * Every Scene will have rendered and been drawn to the canvas by the time this event is fired.
     * Use it for any last minute post-processing before the next game step begins.
     */
    const POST_RENDER: any;

    /**
     * The Game Post-Step Event.
     *
     * This event is dispatched after the Scene Manager has updated.
     * Hook into it from plugins or systems that need to do things before the render starts.
     */
    const POST_STEP: any;

    /**
     * The Game Pre-Render Event.
     *
     * This event is dispatched immediately before any of the Scenes have started to render.
     *
     * The renderer will already have been initialized this frame, clearing itself and preparing to receive the Scenes for rendering, but it won't have actually drawn anything yet.
     */
    const PRE_RENDER: any;

    /**
     * The Game Pre-Step Event.
     *
     * This event is dispatched before the main Game Step starts. By this point in the game cycle none of the Scene updates have yet happened.
     * Hook into it from plugins or systems that need to update before the Scene Manager does.
     */
    const PRE_STEP: any;

    /**
     * The Game Ready Event.
     *
     * This event is dispatched when the Phaser Game instance has finished booting, the Texture Manager is fully ready,
     * and all local systems are now able to start.
     */
    const READY: any;

    /**
     * The Game Resume Event.
     *
     * This event is dispatched when the game loop leaves a paused state and resumes running.
     */
    const RESUME: any;

    /**
     * The Game Step Event.
     *
     * This event is dispatched after the Game Pre-Step and before the Scene Manager steps.
     * Hook into it from plugins or systems that need to update before the Scene Manager does, but after the core Systems have.
     */
    const STEP: any;

    /**
     * The Game Visible Event.
     *
     * This event is dispatched by the Game Visibility Handler when the document in which the Game instance is embedded
     * enters a visible state, previously having been hidden.
     *
     * Only browsers that support the Visibility API will cause this event to be emitted.
     */
    const VISIBLE: any;

  }

  /**
   * The core runner class that Phaser uses to handle the game loop. It can use either Request Animation Frame,
   * or SetTimeout, based on browser support and config settings, to create a continuous loop within the browser.
   *
   * Each time the loop fires, `TimeStep.step` is called and this is then passed onto the core Game update loop,
   * it is the core heartbeat of your game. It will fire as often as Request Animation Frame is capable of handling
   * on the target device.
   *
   * Note that there are lots of situations where a browser will stop updating your game. Such as if the player
   * switches tabs, or covers up the browser window with another application. In these cases, the 'heartbeat'
   * of your game will pause, and only resume when focus is returned to it by the player. There is no way to avoid
   * this situation, all you can do is use the visibility events the browser, and Phaser, provide to detect when
   * it has happened and then gracefully recover.
   */
  class TimeStep {
    /**
     *
     * @param game A reference to the Phaser.Game instance that owns this Time Step.
     */
    constructor(game: Phaser.Game, config: Phaser.Types.Core.FPSConfig);

    /**
     * A reference to the Phaser.Game instance.
     */
    readonly game: Phaser.Game;

    /**
     * The Request Animation Frame DOM Event handler.
     */
    readonly raf: Phaser.DOM.RequestAnimationFrame;

    /**
     * A flag that is set once the TimeStep has started running and toggled when it stops.
     */
    readonly started: boolean;

    /**
     * A flag that is set once the TimeStep has started running and toggled when it stops.
     * The difference between this value and `started` is that `running` is toggled when
     * the TimeStep is sent to sleep, where-as `started` remains `true`, only changing if
     * the TimeStep is actually stopped, not just paused.
     */
    readonly running: boolean;

    /**
     * The minimum fps rate you want the Time Step to run at.
     */
    minFps: number;

    /**
     * The target fps rate for the Time Step to run at.
     *
     * Setting this value will not actually change the speed at which the browser runs, that is beyond
     * the control of Phaser. Instead, it allows you to determine performance issues and if the Time Step
     * is spiraling out of control.
     */
    targetFps: number;

    /**
     * An exponential moving average of the frames per second.
     */
    readonly actualFps: number;

    /**
     * The time at which the next fps rate update will take place.
     * When an fps update happens, the `framesThisSecond` value is reset.
     */
    readonly nextFpsUpdate: number;

    /**
     * The number of frames processed this second.
     */
    readonly framesThisSecond: number;

    /**
     * A callback to be invoked each time the Time Step steps.
     */
    callback: Phaser.Types.Core.TimeStepCallback;

    /**
     * You can force the Time Step to use Set Timeout instead of Request Animation Frame by setting
     * the `forceSetTimeOut` property to `true` in the Game Configuration object. It cannot be changed at run-time.
     */
    readonly forceSetTimeOut: boolean;

    /**
     * The time, calculated at the start of the current step, as smoothed by the delta value.
     */
    time: number;

    /**
     * The time at which the game started running. This value is adjusted if the game is then
     * paused and resumes.
     */
    startTime: number;

    /**
     * The time, as returned by `performance.now` of the previous step.
     */
    lastTime: number;

    /**
     * The current frame the game is on. This counter is incremented once every game step, regardless of how much
     * time has passed and is unaffected by delta smoothing.
     */
    readonly frame: number;

    /**
     * Is the browser currently considered in focus by the Page Visibility API?
     * This value is set in the `blur` method, which is called automatically by the Game instance.
     */
    readonly inFocus: boolean;

    /**
     * The delta time, in ms, since the last game step. This is a clamped and smoothed average value.
     */
    delta: number;

    /**
     * Internal index of the delta history position.
     */
    deltaIndex: number;

    /**
     * Internal array holding the previous delta values, used for delta smoothing.
     */
    deltaHistory: number[];

    /**
     * The maximum number of delta values that are retained in order to calculate a smoothed moving average.
     *
     * This can be changed in the Game Config via the `fps.deltaHistory` property. The default is 10.
     */
    deltaSmoothingMax: number;

    /**
     * The number of frames that the cooldown is set to after the browser panics over the FPS rate, usually
     * as a result of switching tabs and regaining focus.
     *
     * This can be changed in the Game Config via the `fps.panicMax` property. The default is 120.
     */
    panicMax: number;

    /**
     * The actual elapsed time in ms between one update and the next.
     *
     * Unlike with `delta`, no smoothing, capping, or averaging is applied to this value.
     * So please be careful when using this value in math calculations.
     */
    rawDelta: number;

    /**
     * The time, as returned by `performance.now` at the very start of the current step.
     * This can differ from the `time` value in that it isn't calculated based on the delta value.
     */
    now: number;

    /**
     * Apply smoothing to the delta value used within Phasers internal calculations?
     *
     * This can be changed in the Game Config via the `fps.smoothStep` property. The default is `true`.
     *
     * Smoothing helps settle down the delta values after browser tab switches, or other situations
     * which could cause significant delta spikes or dips. By default it has been enabled in Phaser 3
     * since the first version, but is now exposed under this property (and the corresponding game config
     * `smoothStep` value), to allow you to easily disable it, should you require.
     */
    smoothStep: boolean;

    /**
     * Called by the Game instance when the DOM window.onBlur event triggers.
     */
    blur(): void;

    /**
     * Called by the Game instance when the DOM window.onFocus event triggers.
     */
    focus(): void;

    /**
     * Called when the visibility API says the game is 'hidden' (tab switch out of view, etc)
     */
    pause(): void;

    /**
     * Called when the visibility API says the game is 'visible' again (tab switch back into view, etc)
     */
    resume(): void;

    /**
     * Resets the time, lastTime, fps averages and delta history.
     * Called automatically when a browser sleeps them resumes.
     */
    resetDelta(): void;

    /**
     * Starts the Time Step running, if it is not already doing so.
     * Called automatically by the Game Boot process.
     * @param callback The callback to be invoked each time the Time Step steps.
     */
    start(callback: Phaser.Types.Core.TimeStepCallback): void;

    /**
     * The main step method. This is called each time the browser updates, either by Request Animation Frame,
     * or by Set Timeout. It is responsible for calculating the delta values, frame totals, cool down history and more.
     * You generally should never call this method directly.
     */
    step(): void;

    /**
     * Manually calls `TimeStep.step`.
     */
    tick(): void;

    /**
     * Sends the TimeStep to sleep, stopping Request Animation Frame (or SetTimeout) and toggling the `running` flag to false.
     */
    sleep(): void;

    /**
     * Wakes-up the TimeStep, restarting Request Animation Frame (or SetTimeout) and toggling the `running` flag to true.
     * The `seamless` argument controls if the wake-up should adjust the start time or not.
     * @param seamless Adjust the startTime based on the lastTime values. Default false.
     */
    wake(seamless?: boolean): void;

    /**
     * Gets the duration which the game has been running, in seconds.
     */
    getDuration(): number;

    /**
     * Gets the duration which the game has been running, in ms.
     */
    getDurationMS(): number;

    /**
     * Stops the TimeStep running.
     */
    stop(): this;

    /**
     * Destroys the TimeStep. This will stop Request Animation Frame, stop the step, clear the callbacks and null
     * any objects.
     */
    destroy(): void;

  }

  /**
   * The Visibility Handler is responsible for listening out for document level visibility change events.
   * This includes `visibilitychange` if the browser supports it, and blur and focus events. It then uses
   * the provided Event Emitter and fires the related events.
   * @param game The Game instance this Visibility Handler is working on.
   */
  function VisibilityHandler(game: Phaser.Game): void;

}