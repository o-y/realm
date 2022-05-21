/**
 * The root types namespace.
 */
namespace Phaser.Types {
  namespace Actions {
    type CallCallback = (item: Phaser.GameObjects.GameObject)=>void;

    type GridAlignConfig = {
      /**
       * The width of the grid in items (not pixels). -1 means lay all items out horizontally, regardless of quantity.
       *                                  If both this value and height are set to -1 then this value overrides it and the `height` value is ignored.
       */
      width?: number;
      /**
       * The height of the grid in items (not pixels). -1 means lay all items out vertically, regardless of quantity.
       *                                   If both this value and `width` are set to -1 then `width` overrides it and this value is ignored.
       */
      height?: number;
      /**
       * The width of the cell, in pixels, in which the item is positioned.
       */
      cellWidth?: number;
      /**
       * The height of the cell, in pixels, in which the item is positioned.
       */
      cellHeight?: number;
      /**
       * The alignment position. One of the Phaser.Display.Align consts such as `TOP_LEFT` or `RIGHT_CENTER`.
       */
      position?: number;
      /**
       * Optionally place the top-left of the final grid at this coordinate.
       */
      x?: number;
      /**
       * Optionally place the top-left of the final grid at this coordinate.
       */
      y?: number;
    };

  }

  namespace Animations {
    type Animation = {
      /**
       * The key that the animation will be associated with. i.e. sprite.animations.play(key)
       */
      key?: string;
      /**
       * Either a string, in which case it will use all frames from a texture with the matching key, or an array of Animation Frame configuration objects.
       */
      frames?: string | Phaser.Types.Animations.AnimationFrame[];
      /**
       * If you provide a string for `frames` you can optionally have the frame names numerically sorted.
       */
      sortFrames?: boolean;
      /**
       * The key of the texture all frames of the animation will use. Can be overridden on a per frame basis.
       */
      defaultTextureKey?: string;
      /**
       * The frame rate of playback in frames per second (default 24 if duration is null)
       */
      frameRate?: number;
      /**
       * How long the animation should play for in milliseconds. If not given its derived from frameRate.
       */
      duration?: number;
      /**
       * Skip frames if the time lags, or always advanced anyway?
       */
      skipMissedFrames?: boolean;
      /**
       * Delay before starting playback. Value given in milliseconds.
       */
      delay?: number;
      /**
       * Number of times to repeat the animation (-1 for infinity)
       */
      repeat?: number;
      /**
       * Delay before the animation repeats. Value given in milliseconds.
       */
      repeatDelay?: number;
      /**
       * Should the animation yoyo? (reverse back down to the start) before repeating?
       */
      yoyo?: boolean;
      /**
       * Should sprite.visible = true when the animation starts to play?
       */
      showOnStart?: boolean;
      /**
       * Should sprite.visible = false when the animation finishes?
       */
      hideOnComplete?: boolean;
    };

    type AnimationFrame = {
      /**
       * The key of the texture within the Texture Manager to use for this Animation Frame.
       */
      key?: string;
      /**
       * The key, or index number, of the frame within the texture to use for this Animation Frame.
       */
      frame?: string | number;
      /**
       * The duration, in ms, of this frame of the animation.
       */
      duration?: number;
      /**
       * Should the parent Game Object be visible during this frame of the animation?
       */
      visible?: boolean;
    };

    type GenerateFrameNames = {
      /**
       * The string to append to every resulting frame name if using a range or an array of `frames`.
       */
      prefix?: string;
      /**
       * If `frames` is not provided, the number of the first frame to return.
       */
      start?: number;
      /**
       * If `frames` is not provided, the number of the last frame to return.
       */
      end?: number;
      /**
       * The string to append to every resulting frame name if using a range or an array of `frames`.
       */
      suffix?: string;
      /**
       * The minimum expected lengths of each resulting frame's number. Numbers will be left-padded with zeroes until they are this long, then prepended and appended to create the resulting frame name.
       */
      zeroPad?: number;
      /**
       * The array to append the created configuration objects to.
       */
      outputArray?: Phaser.Types.Animations.AnimationFrame[];
      /**
       * If provided as an array, the range defined by `start` and `end` will be ignored and these frame numbers will be used.
       */
      frames?: boolean | number[];
    };

    type GenerateFrameNumbers = {
      /**
       * The starting frame of the animation.
       */
      start?: number;
      /**
       * The ending frame of the animation.
       */
      end?: number;
      /**
       * A frame to put at the beginning of the animation, before `start` or `outputArray` or `frames`.
       */
      first?: boolean | number;
      /**
       * An array to concatenate the output onto.
       */
      outputArray?: Phaser.Types.Animations.AnimationFrame[];
      /**
       * A custom sequence of frames.
       */
      frames?: boolean | number[];
    };

    type JSONAnimation = {
      /**
       * The key that the animation will be associated with. i.e. sprite.animations.play(key)
       */
      key: string;
      /**
       * A frame based animation (as opposed to a bone based animation)
       */
      type: string;
      /**
       * An array of the AnimationFrame objects inside this Animation.
       */
      frames: Phaser.Types.Animations.JSONAnimationFrame[];
      /**
       * The frame rate of playback in frames per second (default 24 if duration is null)
       */
      frameRate: number;
      /**
       * How long the animation should play for in milliseconds. If not given its derived from frameRate.
       */
      duration: number;
      /**
       * Skip frames if the time lags, or always advanced anyway?
       */
      skipMissedFrames: boolean;
      /**
       * Delay before starting playback. Value given in milliseconds.
       */
      delay: number;
      /**
       * Number of times to repeat the animation (-1 for infinity)
       */
      repeat: number;
      /**
       * Delay before the animation repeats. Value given in milliseconds.
       */
      repeatDelay: number;
      /**
       * Should the animation yoyo? (reverse back down to the start) before repeating?
       */
      yoyo: boolean;
      /**
       * Should sprite.visible = true when the animation starts to play?
       */
      showOnStart: boolean;
      /**
       * Should sprite.visible = false when the animation finishes?
       */
      hideOnComplete: boolean;
    };

    type JSONAnimationFrame = {
      /**
       * The key of the Texture this AnimationFrame uses.
       */
      key: string;
      /**
       * The key of the Frame within the Texture that this AnimationFrame uses.
       */
      frame: string | number;
      /**
       * Additional time (in ms) that this frame should appear for during playback.
       */
      duration: number;
    };

    type JSONAnimations = {
      /**
       * An array of all Animations added to the Animation Manager.
       */
      anims: Phaser.Types.Animations.JSONAnimation[];
      /**
       * The global time scale of the Animation Manager.
       */
      globalTimeScale: number;
    };

    type PlayAnimationConfig = {
      /**
       * The string-based key of the animation to play, or an Animation instance.
       */
      key: string | Phaser.Animations.Animation;
      /**
       * The frame rate of playback in frames per second (default 24 if duration is null)
       */
      frameRate?: number;
      /**
       * How long the animation should play for in milliseconds. If not given its derived from frameRate.
       */
      duration?: number;
      /**
       * Delay before starting playback. Value given in milliseconds.
       */
      delay?: number;
      /**
       * Number of times to repeat the animation (-1 for infinity)
       */
      repeat?: number;
      /**
       * Delay before the animation repeats. Value given in milliseconds.
       */
      repeatDelay?: number;
      /**
       * Should the animation yoyo? (reverse back down to the start) before repeating?
       */
      yoyo?: boolean;
      /**
       * Should sprite.visible = true when the animation starts to play?
       */
      showOnStart?: boolean;
      /**
       * Should sprite.visible = false when the animation finishes?
       */
      hideOnComplete?: boolean;
      /**
       * The frame of the animation to start playback from.
       */
      startFrame?: number;
      /**
       * The time scale to be applied to playback of this animation.
       */
      timeScale?: number;
    };

  }

  namespace Cameras {
    namespace Scene2D {
      type CameraConfig = {
        /**
         * The name of the Camera.
         */
        name?: string;
        /**
         * The horizontal position of the Camera viewport.
         */
        x?: number;
        /**
         * The vertical position of the Camera viewport.
         */
        y?: number;
        /**
         * The width of the Camera viewport.
         */
        width?: number;
        /**
         * The height of the Camera viewport.
         */
        height?: number;
        /**
         * The default zoom level of the Camera.
         */
        zoom?: number;
        /**
         * The rotation of the Camera, in radians.
         */
        rotation?: number;
        /**
         * Should the Camera round pixels before rendering?
         */
        roundPixels?: boolean;
        /**
         * The horizontal scroll position of the Camera.
         */
        scrollX?: number;
        /**
         * The vertical scroll position of the Camera.
         */
        scrollY?: number;
        /**
         * A CSS color string controlling the Camera background color.
         */
        backgroundColor?: false | string;
        /**
         * Defines the Camera bounds.
         */
        bounds?: object;
        /**
         * The top-left extent of the Camera bounds.
         */
        "bounds.x"?: number;
        /**
         * The top-left extent of the Camera bounds.
         */
        "bounds.y"?: number;
        /**
         * The width of the Camera bounds.
         */
        "bounds.width"?: number;
        /**
         * The height of the Camera bounds.
         */
        "bounds.height"?: number;
      };

      type CameraFadeCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number)=>void;

      type CameraFlashCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number)=>void;

      type CameraPanCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number, x: number, y: number)=>void;

      type CameraShakeCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number)=>void;

      type CameraZoomCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number, zoom: number)=>void;

      type JSONCamera = {
        /**
         * The name of the camera
         */
        name: string;
        /**
         * The horizontal position of camera
         */
        x: number;
        /**
         * The vertical position of camera
         */
        y: number;
        /**
         * The width size of camera
         */
        width: number;
        /**
         * The height size of camera
         */
        height: number;
        /**
         * The zoom of camera
         */
        zoom: number;
        /**
         * The rotation of camera
         */
        rotation: number;
        /**
         * The round pixels st status of camera
         */
        roundPixels: boolean;
        /**
         * The horizontal scroll of camera
         */
        scrollX: number;
        /**
         * The vertical scroll of camera
         */
        scrollY: number;
        /**
         * The background color of camera
         */
        backgroundColor: string;
        /**
         * The bounds of camera
         */
        bounds?: Phaser.Types.Cameras.Scene2D.JSONCameraBounds | undefined;
      };

      type JSONCameraBounds = {
        /**
         * The horizontal position of camera
         */
        x: number;
        /**
         * The vertical position of camera
         */
        y: number;
        /**
         * The width size of camera
         */
        width: number;
        /**
         * The height size of camera
         */
        height: number;
      };

    }

    namespace Controls {
      type FixedKeyControlConfig = {
        /**
         * The Camera that this Control will update.
         */
        camera?: Phaser.Cameras.Scene2D.Camera;
        /**
         * The Key to be pressed that will move the Camera left.
         */
        left?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will move the Camera right.
         */
        right?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will move the Camera up.
         */
        up?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will move the Camera down.
         */
        down?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will zoom the Camera in.
         */
        zoomIn?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will zoom the Camera out.
         */
        zoomOut?: Phaser.Input.Keyboard.Key;
        /**
         * The speed at which the camera will zoom if the `zoomIn` or `zoomOut` keys are pressed.
         */
        zoomSpeed?: number;
        /**
         * The horizontal and vertical speed the camera will move.
         */
        speed?: number | Object;
        /**
         * The smallest zoom value the camera will reach when zoomed out.
         */
        minZoom?: number;
        /**
         * The largest zoom value the camera will reach when zoomed in.
         */
        maxZoom?: number;
      };

      type SmoothedKeyControlConfig = {
        /**
         * The Camera that this Control will update.
         */
        camera?: Phaser.Cameras.Scene2D.Camera;
        /**
         * The Key to be pressed that will move the Camera left.
         */
        left?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will move the Camera right.
         */
        right?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will move the Camera up.
         */
        up?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will move the Camera down.
         */
        down?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will zoom the Camera in.
         */
        zoomIn?: Phaser.Input.Keyboard.Key;
        /**
         * The Key to be pressed that will zoom the Camera out.
         */
        zoomOut?: Phaser.Input.Keyboard.Key;
        /**
         * The speed at which the camera will zoom if the `zoomIn` or `zoomOut` keys are pressed.
         */
        zoomSpeed?: number;
        /**
         * The horizontal and vertical acceleration the camera will move.
         */
        acceleration?: number | Object;
        /**
         * The horizontal and vertical drag applied to the camera when it is moving.
         */
        drag?: number | Object;
        /**
         * The maximum horizontal and vertical speed the camera will move.
         */
        maxSpeed?: number | Object;
        /**
         * The smallest zoom value the camera will reach when zoomed out.
         */
        minZoom?: number;
        /**
         * The largest zoom value the camera will reach when zoomed in.
         */
        maxZoom?: number;
      };

    }

  }

  namespace Core {
    /**
     * Config object containing various sound settings.
     */
    type AudioConfig = {
      /**
       * Use HTML5 Audio instead of Web Audio.
       */
      disableWebAudio?: boolean;
      /**
       * An existing Web Audio context.
       */
      context?: AudioContext;
      /**
       * Disable all audio output.
       */
      noAudio?: boolean;
    };

    type BannerConfig = {
      /**
       * Omit Phaser's name and version from the banner.
       */
      hidePhaser?: boolean;
      /**
       * The color of the banner text.
       */
      text?: string;
      /**
       * The background colors of the banner.
       */
      background?: string[];
    };

    type BootCallback = (game: Phaser.Game)=>void;

    type CallbacksConfig = {
      /**
       * A function to run at the start of the boot sequence.
       */
      preBoot?: Phaser.Types.Core.BootCallback;
      /**
       * A function to run at the end of the boot sequence. At this point, all the game systems have started and plugins have been loaded.
       */
      postBoot?: Phaser.Types.Core.BootCallback;
    };

    type DOMContainerConfig = {
      /**
       * Should the game create a div element to act as a DOM Container? Only enable if you're using DOM Element objects. You must provide a parent object if you use this feature.
       */
      createContainer?: boolean;
      /**
       * Should the DOM Container that is created (if `dom.createContainer` is true) be positioned behind (true) or over the top (false, the default) of the game canvas?
       */
      behindCanvas?: boolean;
      /**
       * The default `pointerEvents` attribute set on the DOM Container.
       */
      pointerEvents?: string;
    };

    type FPSConfig = {
      /**
       * The minimum acceptable rendering rate, in frames per second.
       */
      min?: number;
      /**
       * The optimum rendering rate, in frames per second. This does not enforce the fps rate, it merely tells Phaser what rate is considered optimal for this game.
       */
      target?: number;
      /**
       * Use setTimeout instead of requestAnimationFrame to run the game loop.
       */
      forceSetTimeOut?: boolean;
      /**
       * Calculate the average frame delta from this many consecutive frame intervals.
       */
      deltaHistory?: number;
      /**
       * The amount of frames the time step counts before we trust the delta values again.
       */
      panicMax?: number;
      /**
       * Apply delta smoothing during the game update to help avoid spikes?
       */
      smoothStep?: boolean;
    };

    type GameConfig = {
      /**
       * The width of the game, in game pixels.
       */
      width?: number | string;
      /**
       * The height of the game, in game pixels.
       */
      height?: number | string;
      /**
       * Simple scale applied to the game canvas. 2 is double size, 0.5 is half size, etc.
       */
      zoom?: number;
      /**
       * Which renderer to use. Phaser.AUTO, Phaser.CANVAS, Phaser.HEADLESS, or Phaser.WEBGL. AUTO picks WEBGL if available, otherwise CANVAS.
       */
      type?: number;
      /**
       * The DOM element that will contain the game canvas, or its `id`. If undefined, or if the named element doesn't exist, the game canvas is appended to the document body. If `null` no parent will be used and you are responsible for adding the canvas to the dom.
       */
      parent?: HTMLElement | string;
      /**
       * Provide your own Canvas element for Phaser to use instead of creating one.
       */
      canvas?: HTMLCanvasElement;
      /**
       * CSS styles to apply to the game canvas instead of Phasers default styles.
       */
      canvasStyle?: string;
      /**
       * Is Phaser running under a custom (non-native web) environment? If so, set this to `true` to skip internal Feature detection. If `true` the `renderType` cannot be left as `AUTO`.
       */
      customEnvironment?: boolean;
      /**
       * Provide your own Canvas Context for Phaser to use, instead of creating one.
       */
      context?: CanvasRenderingContext2D;
      /**
       * A scene or scenes to add to the game. If several are given, the first is started; the remainder are started only if they have `{ active: true }`. See the `sceneConfig` argument in `Phaser.Scenes.SceneManager#add`.
       */
      scene?: Phaser.Scene | Phaser.Scene[] | Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.SettingsConfig[] | Phaser.Types.Scenes.CreateSceneFromObjectConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig[] | Function | Function[];
      /**
       * Seed for the random number generator.
       */
      seed?: string[];
      /**
       * The title of the game. Shown in the browser console.
       */
      title?: string;
      /**
       * The URL of the game. Shown in the browser console.
       */
      url?: string;
      /**
       * The version of the game. Shown in the browser console.
       */
      version?: string;
      /**
       * Automatically call window.focus() when the game boots. Usually necessary to capture input events if the game is in a separate frame.
       */
      autoFocus?: boolean;
      /**
       * Input configuration, or `false` to disable all game input.
       */
      input?: boolean | Phaser.Types.Core.InputConfig;
      /**
       * Disable the browser's default 'contextmenu' event (usually triggered by a right-button mouse click).
       */
      disableContextMenu?: boolean;
      /**
       * Configuration for the banner printed in the browser console when the game starts.
       */
      banner?: boolean | Phaser.Types.Core.BannerConfig;
      /**
       * The DOM Container configuration object.
       */
      dom?: Phaser.Types.Core.DOMContainerConfig;
      /**
       * Game loop configuration.
       */
      fps?: Phaser.Types.Core.FPSConfig;
      /**
       * Game renderer configuration.
       */
      render?: Phaser.Types.Core.RenderConfig;
      /**
       * Optional callbacks to run before or after game boot.
       */
      callbacks?: Phaser.Types.Core.CallbacksConfig;
      /**
       * Loader configuration.
       */
      loader?: Phaser.Types.Core.LoaderConfig;
      /**
       * Images configuration.
       */
      images?: Phaser.Types.Core.ImagesConfig;
      /**
       * Physics configuration.
       */
      physics?: Phaser.Types.Core.PhysicsConfig;
      /**
       * Plugins to install.
       */
      plugins?: Phaser.Types.Core.PluginObject | Phaser.Types.Core.PluginObjectItem[];
      /**
       * The Scale Manager configuration.
       */
      scale?: Phaser.Types.Core.ScaleConfig;
      /**
       * The Audio Configuration object.
       */
      audio?: Phaser.Types.Core.AudioConfig;
      /**
       * A WebGL Pipeline configuration object. Can also be part of the `RenderConfig`.
       */
      pipeline?: Phaser.Types.Core.PipelineConfig;
      /**
       * The background color of the game canvas. The default is black.
       */
      backgroundColor?: string | number;
      /**
       * When set to `true`, WebGL uses linear interpolation to draw scaled or rotated textures, giving a smooth appearance. When set to `false`, WebGL uses nearest-neighbor interpolation, giving a crisper appearance. `false` also disables antialiasing of the game canvas itself, if the browser supports it, when the game canvas is scaled.
       */
      antialias?: boolean;
      /**
       * Sets the `antialias` property when the WebGL context is created. Setting this value does not impact any subsequent textures that are created, or the canvas style attributes.
       */
      antialiasGL?: boolean;
      /**
       * When set to `true` it will create a desynchronized context for both 2D and WebGL. See https://developers.google.com/web/updates/2019/05/desynchronized for details.
       */
      desynchronized?: boolean;
      /**
       * Sets `antialias` to false and `roundPixels` to true. This is the best setting for pixel-art games.
       */
      pixelArt?: boolean;
      /**
       * Draw texture-based Game Objects at only whole-integer positions. Game Objects without textures, like Graphics, ignore this property.
       */
      roundPixels?: boolean;
      /**
       * Whether the game canvas will be transparent. Boolean that indicates if the canvas contains an alpha channel. If set to false, the browser now knows that the backdrop is always opaque, which can speed up drawing of transparent content and images.
       */
      transparent?: boolean;
      /**
       * Whether the game canvas will be cleared between each rendering frame.
       */
      clearBeforeRender?: boolean;
      /**
       * If the value is true the WebGL buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
       */
      preserveDrawingBuffer?: boolean;
      /**
       * In WebGL mode, the drawing buffer contains colors with pre-multiplied alpha.
       */
      premultipliedAlpha?: boolean;
      /**
       * Let the browser abort creating a WebGL context if it judges performance would be unacceptable.
       */
      failIfMajorPerformanceCaveat?: boolean;
      /**
       * "high-performance", "low-power" or "default". A hint to the browser on how much device power the game might use.
       */
      powerPreference?: string;
      /**
       * The default WebGL batch size. Represents the number of _quads_ that can be added to a single batch.
       */
      batchSize?: number;
      /**
       * The maximum number of lights allowed to be visible within range of a single Camera in the LightManager.
       */
      maxLights?: number;
      /**
       * When in WebGL mode, this sets the maximum number of GPU Textures to use. The default, -1, will use all available units. The WebGL1 spec says all browsers should provide a minimum of 8.
       */
      maxTextures?: number;
      /**
       * The mipmap magFilter to be used when creating WebGL textures.
       */
      mipmapFilter?: string;
    };

    type GamepadInputConfig = {
      /**
       * Where the Gamepad Manager listens for gamepad input events.
       */
      target?: any;
    };

    type ImagesConfig = {
      /**
       * A base64 encoded image file to use as the 'default' texture.
       */
      default?: string;
      /**
       * A base64 encoded image file to use as the 'missing' texture.
       */
      missing?: string;
      /**
       * A base64 encoded image file to use as the 'white' texture.
       */
      white?: string;
    };

    type InputConfig = {
      /**
       * Keyboard input configuration. `true` uses the default configuration and `false` disables keyboard input.
       */
      keyboard?: boolean | Phaser.Types.Core.KeyboardInputConfig;
      /**
       * Mouse input configuration. `true` uses the default configuration and `false` disables mouse input.
       */
      mouse?: boolean | Phaser.Types.Core.MouseInputConfig;
      /**
       * Touch input configuration. `true` uses the default configuration and `false` disables touch input.
       */
      touch?: boolean | Phaser.Types.Core.TouchInputConfig;
      /**
       * Gamepad input configuration. `true` enables gamepad input.
       */
      gamepad?: boolean | Phaser.Types.Core.GamepadInputConfig;
      /**
       * The maximum number of touch pointers. See {@link Phaser.Input.InputManager#pointers}.
       */
      activePointers?: number;
      /**
       * The smoothing factor to apply during Pointer movement. See {@link Phaser.Input.Pointer#smoothFactor}.
       */
      smoothFactor?: number;
      /**
       * Should Phaser listen for input events on the Window? If you disable this, events like 'POINTER_UP_OUTSIDE' will no longer fire.
       */
      windowEvents?: boolean;
    };

    type KeyboardInputConfig = {
      /**
       * Where the Keyboard Manager listens for keyboard input events.
       */
      target?: any;
      /**
       * `preventDefault` will be called on every non-modified key which has a key code in this array. By default it is empty.
       */
      capture?: number[];
    };

    type LoaderConfig = {
      /**
       * A URL used to resolve paths given to the loader. Example: 'http://labs.phaser.io/assets/'.
       */
      baseURL?: string;
      /**
       * A URL path used to resolve relative paths given to the loader. Example: 'images/sprites/'.
       */
      path?: string;
      /**
       * The maximum number of resources the loader will start loading at once.
       */
      maxParallelDownloads?: number;
      /**
       * 'anonymous', 'use-credentials', or `undefined`. If you're not making cross-origin requests, leave this as `undefined`. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes}.
       */
      crossOrigin?: string | undefined;
      /**
       * The response type of the XHR request, e.g. `blob`, `text`, etc.
       */
      responseType?: string;
      /**
       * Should the XHR request use async or not?
       */
      async?: boolean;
      /**
       * Optional username for all XHR requests.
       */
      user?: string;
      /**
       * Optional password for all XHR requests.
       */
      password?: string;
      /**
       * Optional XHR timeout value, in ms.
       */
      timeout?: number;
    };

    type MouseInputConfig = {
      /**
       * Where the Mouse Manager listens for mouse input events. The default is the game canvas.
       */
      target?: any;
      /**
       * If `true` the DOM `mousedown` event will have `preventDefault` set.
       */
      preventDefaultDown?: boolean;
      /**
       * If `true` the DOM `mouseup` event will have `preventDefault` set.
       */
      preventDefaultUp?: boolean;
      /**
       * If `true` the DOM `mousemove` event will have `preventDefault` set.
       */
      preventDefaultMove?: boolean;
      /**
       * If `true` the DOM `wheel` event will have `preventDefault` set.
       */
      preventDefaultWheel?: boolean;
    };

    /**
     * This callback type is completely empty, a no-operation.
     */
    type NOOP = ()=>void;

    type PhysicsConfig = {
      /**
       * The default physics system. It will be started for each scene. Phaser provides 'arcade', 'impact', and 'matter'.
       */
      default?: string;
      /**
       * Arcade Physics configuration.
       */
      arcade?: Phaser.Types.Physics.Arcade.ArcadeWorldConfig;
      /**
       * Matter Physics configuration.
       */
      matter?: Phaser.Types.Physics.Matter.MatterWorldConfig;
    };

    type PipelineConfig = {
      /**
       * The name of the pipeline. Must be unique within the Pipeline Manager.
       */
      name: string;
      /**
       * The pipeline class. This should be a constructable object, **not** an instance of a class.
       */
      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;
    };

    type PluginObject = {
      /**
       * Global plugins to install.
       */
      global?: Phaser.Types.Core.PluginObjectItem[];
      /**
       * Scene plugins to install.
       */
      scene?: Phaser.Types.Core.PluginObjectItem[];
      /**
       * The default set of scene plugins (names).
       */
      default?: string[];
      /**
       * Plugins to *add* to the default set of scene plugins.
       */
      defaultMerge?: string[];
    };

    type PluginObjectItem = {
      /**
       * A key to identify the plugin in the Plugin Manager.
       */
      key?: string;
      /**
       * The plugin itself. Usually a class/constructor.
       */
      plugin?: any;
      /**
       * Whether the plugin should be started automatically.
       */
      start?: boolean;
      /**
       * For a scene plugin, add the plugin to the scene's systems object under this key (`this.sys.KEY`, from the scene).
       */
      systemKey?: string;
      /**
       * For a scene plugin, add the plugin to the scene object under this key (`this.KEY`, from the scene).
       */
      sceneKey?: string;
      /**
       * If this plugin is to be injected into the Scene Systems, this is the property key map used.
       */
      mapping?: string;
      /**
       * Arbitrary data passed to the plugin's init() method.
       */
      data?: any;
    };

    type RenderConfig = {
      /**
       * When set to `true`, WebGL uses linear interpolation to draw scaled or rotated textures, giving a smooth appearance. When set to `false`, WebGL uses nearest-neighbor interpolation, giving a crisper appearance. `false` also disables antialiasing of the game canvas itself, if the browser supports it, when the game canvas is scaled.
       */
      antialias?: boolean;
      /**
       * Sets the `antialias` property when the WebGL context is created. Setting this value does not impact any subsequent textures that are created, or the canvas style attributes.
       */
      antialiasGL?: boolean;
      /**
       * When set to `true` it will create a desynchronized context for both 2D and WebGL. See https://developers.google.com/web/updates/2019/05/desynchronized for details.
       */
      desynchronized?: boolean;
      /**
       * Sets `antialias` to false and `roundPixels` to true. This is the best setting for pixel-art games.
       */
      pixelArt?: boolean;
      /**
       * Draw texture-based Game Objects at only whole-integer positions. Game Objects without textures, like Graphics, ignore this property.
       */
      roundPixels?: boolean;
      /**
       * Whether the game canvas will be transparent. Boolean that indicates if the canvas contains an alpha channel. If set to false, the browser now knows that the backdrop is always opaque, which can speed up drawing of transparent content and images.
       */
      transparent?: boolean;
      /**
       * Whether the game canvas will be cleared between each rendering frame.
       */
      clearBeforeRender?: boolean;
      /**
       * If the value is true the WebGL buffers will not be cleared and will preserve their values until cleared or overwritten by the author.
       */
      preserveDrawingBuffer?: boolean;
      /**
       * In WebGL mode, the drawing buffer contains colors with pre-multiplied alpha.
       */
      premultipliedAlpha?: boolean;
      /**
       * Let the browser abort creating a WebGL context if it judges performance would be unacceptable.
       */
      failIfMajorPerformanceCaveat?: boolean;
      /**
       * "high-performance", "low-power" or "default". A hint to the browser on how much device power the game might use.
       */
      powerPreference?: string;
      /**
       * The default WebGL batch size. Represents the number of _quads_ that can be added to a single batch.
       */
      batchSize?: number;
      /**
       * The maximum number of lights allowed to be visible within range of a single Camera in the LightManager.
       */
      maxLights?: number;
      /**
       * When in WebGL mode, this sets the maximum number of GPU Textures to use. The default, -1, will use all available units. The WebGL1 spec says all browsers should provide a minimum of 8.
       */
      maxTextures?: number;
      /**
       * The mipmap magFilter to be used when creating WebGL textures.
       */
      mipmapFilter?: string;
      /**
       * The WebGL Pipeline configuration object.
       */
      pipeline?: Phaser.Types.Core.PipelineConfig;
    };

    type ScaleConfig = {
      /**
       * The base width of your game. Can be an integer or a string: '100%'. If a string it will only work if you have set a parent element that has a size.
       */
      width?: number | string;
      /**
       * The base height of your game. Can be an integer or a string: '100%'. If a string it will only work if you have set a parent element that has a size.
       */
      height?: number | string;
      /**
       * The zoom value of the game canvas.
       */
      zoom?: Phaser.Scale.ZoomType | number;
      /**
       * The DOM element that will contain the game canvas, or its `id`. If undefined, or if the named element doesn't exist, the game canvas is inserted directly into the document body. If `null` no parent will be used and you are responsible for adding the canvas to your environment.
       */
      parent?: HTMLElement | string;
      /**
       * Is the Scale Manager allowed to adjust the CSS height property of the parent and/or document body to be 100%?
       */
      expandParent?: boolean;
      /**
       * The scale mode.
       */
      mode?: Phaser.Scale.ScaleModeType;
      /**
       * The minimum width and height the canvas can be scaled down to.
       */
      min?: WidthHeight;
      /**
       * The maximum width the canvas can be scaled up to.
       */
      max?: WidthHeight;
      /**
       * Automatically round the display and style sizes of the canvas. This can help with performance in lower-powered devices.
       */
      autoRound?: boolean;
      /**
       * Automatically center the canvas within the parent?
       */
      autoCenter?: Phaser.Scale.CenterType;
      /**
       * How many ms should elapse before checking if the browser size has changed?
       */
      resizeInterval?: number;
      /**
       * The DOM element that will be sent into full screen mode, or its `id`. If undefined Phaser will create its own div and insert the canvas into it when entering fullscreen mode.
       */
      fullscreenTarget?: HTMLElement | string;
    };

    type TimeStepCallback = (time: number, average: number, interpolation: number)=>void;

    type TouchInputConfig = {
      /**
       * Where the Touch Manager listens for touch input events. The default is the game canvas.
       */
      target?: any;
      /**
       * Whether touch input events have preventDefault() called on them.
       */
      capture?: boolean;
    };

    type WidthHeight = {
      /**
       * The width.
       */
      width?: number;
      /**
       * The height.
       */
      height?: number;
    };

  }

  namespace Create {
    type GenerateTextureCallback = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D)=>void;

    type GenerateTextureConfig = {
      /**
       * An array of data, where each row is a string of single values 0-9A-F, or the period character.
       */
      data?: any[];
      /**
       * The HTML Canvas to draw the texture to.
       */
      canvas?: HTMLCanvasElement;
      /**
       * The indexed palette that the data cell values map to.
       */
      palette?: Phaser.Types.Create.Palette;
      /**
       * The width of each 'pixel' in the generated texture.
       */
      pixelWidth?: number;
      /**
       * The height of each 'pixel' in the generated texture.
       */
      pixelHeight?: number;
      /**
       * Should the canvas be resized before the texture is drawn?
       */
      resizeCanvas?: boolean;
      /**
       * Should the canvas be cleared before the texture is drawn?
       */
      clearCanvas?: boolean;
      /**
       * A callback to send the canvas to prior to the texture being drawn.
       */
      preRender?: Phaser.Types.Create.GenerateTextureCallback;
      /**
       * A callback to send the canvas to after the texture has been drawn.
       */
      postRender?: Phaser.Types.Create.GenerateTextureCallback;
    };

    type Palette = {
      /**
       * Color value 1.
       */
      "0": string;
      /**
       * Color value 2.
       */
      "1": string;
      /**
       * Color value 3.
       */
      "2": string;
      /**
       * Color value 4.
       */
      "3": string;
      /**
       * Color value 5.
       */
      "4": string;
      /**
       * Color value 6.
       */
      "5": string;
      /**
       * Color value 7.
       */
      "6": string;
      /**
       * Color value 8.
       */
      "7": string;
      /**
       * Color value 9.
       */
      "8": string;
      /**
       * Color value 10.
       */
      "9": string;
      /**
       * Color value 11.
       */
      A: string;
      /**
       * Color value 12.
       */
      B: string;
      /**
       * Color value 13.
       */
      C: string;
      /**
       * Color value 14.
       */
      D: string;
      /**
       * Color value 15.
       */
      E: string;
      /**
       * Color value 16.
       */
      F: string;
    };

  }

  namespace Curves {
    type EllipseCurveConfig = {
      /**
       * The x coordinate of the ellipse.
       */
      x?: number;
      /**
       * The y coordinate of the ellipse.
       */
      y?: number;
      /**
       * The horizontal radius of the ellipse.
       */
      xRadius?: number;
      /**
       * The vertical radius of the ellipse.
       */
      yRadius?: number;
      /**
       * The start angle of the ellipse, in degrees.
       */
      startAngle?: number;
      /**
       * The end angle of the ellipse, in degrees.
       */
      endAngle?: number;
      /**
       * Sets if the the ellipse rotation is clockwise (true) or anti-clockwise (false)
       */
      clockwise?: boolean;
      /**
       * The rotation of the ellipse, in degrees.
       */
      rotation?: number;
    };

    type JSONCurve = {
      /**
       * The of the curve
       */
      type: string;
      /**
       * The arrays of points like `[x1, y1, x2, y2]`
       */
      points: number[];
    };

    type JSONEllipseCurve = {
      /**
       * The of the curve.
       */
      type: string;
      /**
       * The x coordinate of the ellipse.
       */
      x: number;
      /**
       * The y coordinate of the ellipse.
       */
      y: number;
      /**
       * The horizontal radius of ellipse.
       */
      xRadius: number;
      /**
       * The vertical radius of ellipse.
       */
      yRadius: number;
      /**
       * The start angle of the ellipse, in degrees.
       */
      startAngle: number;
      /**
       * The end angle of the ellipse, in degrees.
       */
      endAngle: number;
      /**
       * Sets if the the ellipse rotation is clockwise (true) or anti-clockwise (false)
       */
      clockwise: boolean;
      /**
       * The rotation of ellipse, in degrees.
       */
      rotation: number;
    };

    type JSONPath = {
      /**
       * The of the curve.
       */
      type: string;
      /**
       * The X coordinate of the curve's starting point.
       */
      x: number;
      /**
       * The Y coordinate of the path's starting point.
       */
      y: number;
      /**
       * The path is auto closed.
       */
      autoClose: boolean;
      /**
       * The list of the curves
       */
      curves: Phaser.Types.Curves.JSONCurve[];
    };

  }

  namespace Display {
    type ColorObject = {
      /**
       * The red color value in the range 0 to 255.
       */
      r: number;
      /**
       * The green color value in the range 0 to 255.
       */
      g: number;
      /**
       * The blue color value in the range 0 to 255.
       */
      b: number;
      /**
       * The alpha color value in the range 0 to 255.
       */
      a: number;
    };

    type HSVColorObject = {
      /**
       * The hue color value. A number between 0 and 1
       */
      h: number;
      /**
       * The saturation color value. A number between 0 and 1
       */
      s: number;
      /**
       * The lightness color value. A number between 0 and 1
       */
      v: number;
    };

    type InputColorObject = {
      /**
       * The red color value in the range 0 to 255.
       */
      r?: number;
      /**
       * The green color value in the range 0 to 255.
       */
      g?: number;
      /**
       * The blue color value in the range 0 to 255.
       */
      b?: number;
      /**
       * The alpha color value in the range 0 to 255.
       */
      a?: number;
    };

  }

  namespace GameObjects {
    namespace BitmapText {
      /**
       * The font data for an individual character of a Bitmap Font.
       *
       * Describes the character's position, size, offset and kerning.
       *
       * As of version 3.50 it also includes the WebGL texture uv data.
       */
      type BitmapFontCharacterData = {
        /**
         * The x position of the character.
         */
        x: number;
        /**
         * The y position of the character.
         */
        y: number;
        /**
         * The width of the character.
         */
        width: number;
        /**
         * The height of the character.
         */
        height: number;
        /**
         * The center x position of the character.
         */
        centerX: number;
        /**
         * The center y position of the character.
         */
        centerY: number;
        /**
         * The x offset of the character.
         */
        xOffset: number;
        /**
         * The y offset of the character.
         */
        yOffset: number;
        /**
         * WebGL texture u0.
         */
        u0: number;
        /**
         * WebGL texture v0.
         */
        v0: number;
        /**
         * WebGL texture u1.
         */
        u1: number;
        /**
         * WebGL texture v1.
         */
        v1: number;
        /**
         * Extra data for the character.
         */
        data: object;
        /**
         * Kerning values, keyed by character code.
         */
        kerning: {[key: string]: number};
      };

      /**
       * Bitmap Font data that can be used by a BitmapText Game Object.
       */
      type BitmapFontData = {
        /**
         * The name of the font.
         */
        font: string;
        /**
         * The size of the font.
         */
        size: number;
        /**
         * The line height of the font.
         */
        lineHeight: number;
        /**
         * Whether this font is a retro font (monospace).
         */
        retroFont: boolean;
        /**
         * The character data of the font, keyed by character code. Each character datum includes a position, size, offset and more.
         */
        chars: {[key: number]:  Phaser.Types.GameObjects.BitmapText.BitmapFontCharacterData};
      };

      /**
       * A single entry from the `BitmapTextSize` characters array.
       *
       * The position and dimensions take the font size into account,
       * but are not translated into the local space of the Game Object itself.
       */
      type BitmapTextCharacter = {
        /**
         * The index of this character within the BitmapText text string.
         */
        i: number;
        /**
         * The character.
         */
        char: string;
        /**
         * The character code of the character.
         */
        code: number;
        /**
         * The x position of the character in the BitmapText.
         */
        x: number;
        /**
         * The y position of the character in the BitmapText.
         */
        y: number;
        /**
         * The width of the character.
         */
        w: number;
        /**
         * The height of the character.
         */
        h: number;
        /**
         * The top of the line this character is on.
         */
        t: number;
        /**
         * The right-most point of this character, including xAdvance.
         */
        r: number;
        /**
         * The bottom of the line this character is on.
         */
        b: number;
        /**
         * The line number the character appears on.
         */
        line: number;
        /**
         * Reference to the glyph object this character is using.
         */
        glyph: Phaser.Types.GameObjects.BitmapText.BitmapFontCharacterData;
      };

      type BitmapTextConfig = Phaser.Types.GameObjects.GameObjectConfig & {
        /**
         * The key of the font to use from the BitmapFont cache.
         */
        font?: string;
        /**
         * The string, or array of strings, to be set as the content of this Bitmap Text.
         */
        text?: string;
        /**
         * The font size to set.
         */
        size?: number | false;
      };

      /**
       * Details about the line data in the `BitmapTextSize` object.
       */
      type BitmapTextLines = {
        /**
         * The width of the shortest line of text.
         */
        shortest: number;
        /**
         * The width of the longest line of text.
         */
        longest: number;
        /**
         * The height of a line of text.
         */
        height: number;
        /**
         * An array where each entry contains the length of that line of text.
         */
        lengths: number[];
      };

      type BitmapTextSize = {
        /**
         * The position and size of the BitmapText, taking into account the position and scale of the Game Object.
         */
        global: Phaser.Types.GameObjects.BitmapText.GlobalBitmapTextSize;
        /**
         * The position and size of the BitmapText, taking just the font size into account.
         */
        local: Phaser.Types.GameObjects.BitmapText.LocalBitmapTextSize;
        /**
         * Data about the lines of text within the BitmapText.
         */
        lines: Phaser.Types.GameObjects.BitmapText.BitmapTextLines;
        /**
         * An array containing per-character data. Only populated if `includeChars` is `true` in the `getTextBounds` call.
         */
        characters: Phaser.Types.GameObjects.BitmapText.BitmapTextCharacter[];
        /**
         * An array containing the word data from the BitmapText.
         */
        words: Phaser.Types.GameObjects.BitmapText.BitmapTextWord[];
        /**
         * The scale of the BitmapText font being rendered vs. font size in the text data.
         */
        scale: number;
        /**
         * The scale X value of the BitmapText.
         */
        scaleX: number;
        /**
         * The scale Y value of the BitmapText.
         */
        scaleY: number;
        /**
         * The wrapped text, if wrapping enabled and required.
         */
        wrappedText: string;
      };

      /**
       * Details about a single world entry in the `BitmapTextSize` object words array.
       */
      type BitmapTextWord = {
        /**
         * The x position of the word in the BitmapText.
         */
        x: number;
        /**
         * The y position of the word in the BitmapText.
         */
        y: number;
        /**
         * The width of the word.
         */
        w: number;
        /**
         * The height of the word.
         */
        h: number;
        /**
         * The index of the word within the line.
         */
        i: number;
        /**
         * The word.
         */
        word: string;
      };

      type DisplayCallbackConfig = {
        /**
         * The Dynamic Bitmap Text object that owns this character being rendered.
         */
        parent: Phaser.GameObjects.DynamicBitmapText;
        /**
         * The tint of the character being rendered. Always zero in Canvas.
         */
        tint: Phaser.Types.GameObjects.BitmapText.TintConfig;
        /**
         * The index of the character being rendered.
         */
        index: number;
        /**
         * The character code of the character being rendered.
         */
        charCode: number;
        /**
         * The x position of the character being rendered.
         */
        x: number;
        /**
         * The y position of the character being rendered.
         */
        y: number;
        /**
         * The scale of the character being rendered.
         */
        scale: number;
        /**
         * The rotation of the character being rendered.
         */
        rotation: number;
        /**
         * Custom data stored with the character being rendered.
         */
        data: any;
      };

      type DisplayCallback = (display: Phaser.Types.GameObjects.BitmapText.DisplayCallbackConfig)=>void;

      /**
       * The position and size of the Bitmap Text in global space, taking into account the Game Object's scale and world position.
       */
      type GlobalBitmapTextSize = {
        /**
         * The x position of the BitmapText, taking into account the x position and scale of the Game Object.
         */
        x: number;
        /**
         * The y position of the BitmapText, taking into account the y position and scale of the Game Object.
         */
        y: number;
        /**
         * The width of the BitmapText, taking into account the x scale of the Game Object.
         */
        width: number;
        /**
         * The height of the BitmapText, taking into account the y scale of the Game Object.
         */
        height: number;
      };

      type JSONBitmapText = Phaser.Types.GameObjects.JSONGameObject & {
        /**
         * The name of the font.
         */
        font: string;
        /**
         * The text that this Bitmap Text displays.
         */
        text: string;
        /**
         * The size of the font.
         */
        fontSize: number;
        /**
         * Adds / Removes spacing between characters.
         */
        letterSpacing: number;
        /**
         * The alignment of the text in a multi-line BitmapText object.
         */
        align: number;
      };

      /**
       * The position and size of the Bitmap Text in local space, taking just the font size into account.
       */
      type LocalBitmapTextSize = {
        /**
         * The x position of the BitmapText.
         */
        x: number;
        /**
         * The y position of the BitmapText.
         */
        y: number;
        /**
         * The width of the BitmapText.
         */
        width: number;
        /**
         * The height of the BitmapText.
         */
        height: number;
      };

      type RetroFontConfig = {
        /**
         * The key of the image containing the font.
         */
        image: string;
        /**
         * If the font set doesn't start at the top left of the given image, specify the X coordinate offset here.
         */
        "offset.x": number;
        /**
         * If the font set doesn't start at the top left of the given image, specify the Y coordinate offset here.
         */
        "offset.y": number;
        /**
         * The width of each character in the font set.
         */
        width: number;
        /**
         * The height of each character in the font set.
         */
        height: number;
        /**
         * The characters used in the font set, in display order. You can use the TEXT_SET consts for common font set arrangements.
         */
        chars: string;
        /**
         * The number of characters per row in the font set. If not given charsPerRow will be the image width / characterWidth.
         */
        charsPerRow: number;
        /**
         * If the characters in the font set have horizontal spacing between them set the required amount here.
         */
        "spacing.x": number;
        /**
         * If the characters in the font set have vertical spacing between them set the required amount here.
         */
        "spacing.y": number;
        /**
         * The amount of vertical space to add to the line height of the font.
         */
        lineSpacing: number;
      };

      type TintConfig = {
        /**
         * The top left tint value. Always zero in canvas.
         */
        topLeft: number;
        /**
         * The top right tint value. Always zero in canvas.
         */
        topRight: number;
        /**
         * The bottom left tint value. Always zero in canvas.
         */
        bottomLeft: number;
        /**
         * The bottom right tint value. Always zero in canvas.
         */
        bottomRight: number;
      };

    }

    namespace Graphics {
      /**
       * Graphics fill style settings.
       */
      type FillStyle = {
        /**
         * The fill color.
         */
        color?: number;
        /**
         * The fill alpha.
         */
        alpha?: number;
      };

      /**
       * Graphics line style (or stroke style) settings.
       */
      type LineStyle = {
        /**
         * The stroke width.
         */
        width?: number;
        /**
         * The stroke color.
         */
        color?: number;
        /**
         * The stroke alpha.
         */
        alpha?: number;
      };

      /**
       * Options for the Graphics Game Object.
       */
      type Options = Phaser.Types.GameObjects.Graphics.Styles & {
        /**
         * The x coordinate of the Graphics.
         */
        x?: number;
        /**
         * The y coordinate of the Graphics.
         */
        y?: number;
      };

      type RoundedRectRadius = {
        /**
         * Top left corner radius.
         */
        tl?: number;
        /**
         * Top right corner radius.
         */
        tr?: number;
        /**
         * Bottom right corner radius.
         */
        br?: number;
        /**
         * Bottom left corner radius.
         */
        bl?: number;
      };

      /**
       * Graphics style settings.
       */
      type Styles = {
        /**
         * The style applied to shape outlines.
         */
        lineStyle?: Phaser.Types.GameObjects.Graphics.LineStyle;
        /**
         * The style applied to shape areas.
         */
        fillStyle?: Phaser.Types.GameObjects.Graphics.FillStyle;
      };

    }

    namespace Group {
      type GroupCallback = (item: Phaser.GameObjects.GameObject)=>void;

      type GroupConfig = {
        /**
         * Sets {@link Phaser.GameObjects.Group#classType}.
         */
        classType?: Function;
        /**
         * Sets {@link Phaser.GameObjects.Group#name}.
         */
        name?: string;
        /**
         * Sets {@link Phaser.GameObjects.Group#active}.
         */
        active?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Group#maxSize}.
         */
        maxSize?: number;
        /**
         * Sets {@link Phaser.GameObjects.Group#defaultKey}.
         */
        defaultKey?: string;
        /**
         * Sets {@link Phaser.GameObjects.Group#defaultFrame}.
         */
        defaultFrame?: string | number;
        /**
         * Sets {@link Phaser.GameObjects.Group#runChildUpdate}.
         */
        runChildUpdate?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Group#createCallback}.
         */
        createCallback?: Phaser.Types.GameObjects.Group.GroupCallback;
        /**
         * Sets {@link Phaser.GameObjects.Group#removeCallback}.
         */
        removeCallback?: Phaser.Types.GameObjects.Group.GroupCallback;
        /**
         * Sets {@link Phaser.GameObjects.Group#createMultipleCallback}.
         */
        createMultipleCallback?: Phaser.Types.GameObjects.Group.GroupMultipleCreateCallback;
      };

      /**
       * The total number of objects created will be
       *
       *     key.length * frame.length * frameQuantity * (yoyo ? 2 : 1) * (1 + repeat)
       *
       * If `max` is nonzero, then the total created will not exceed `max`.
       *
       * `key` is required. {@link Phaser.GameObjects.Group#defaultKey} is not used.
       */
      type GroupCreateConfig = {
        /**
         * The class of each new Game Object.
         */
        classType?: Function;
        /**
         * The texture key of each new Game Object.
         */
        key?: string | string[];
        /**
         * The texture frame of each new Game Object.
         */
        frame?: string | string[] | number | number[];
        /**
         * The number of Game Objects to create. If set, this overrides the `frameQuantity` value. Use `frameQuantity` for more advanced control.
         */
        quantity?: number;
        /**
         * The visible state of each new Game Object.
         */
        visible?: boolean;
        /**
         * The active state of each new Game Object.
         */
        active?: boolean;
        /**
         * The number of times each `key` × `frame` combination will be *repeated* (after the first combination).
         */
        repeat?: number;
        /**
         * Select a `key` at random.
         */
        randomKey?: boolean;
        /**
         * Select a `frame` at random.
         */
        randomFrame?: boolean;
        /**
         * Select keys and frames by moving forward then backward through `key` and `frame`.
         */
        yoyo?: boolean;
        /**
         * The number of times each `frame` should be combined with one `key`.
         */
        frameQuantity?: number;
        /**
         * The maximum number of new Game Objects to create. 0 is no maximum.
         */
        max?: number;
        setXY?: object;
        /**
         * The horizontal position of each new Game Object.
         */
        "setXY.x"?: number;
        /**
         * The vertical position of each new Game Object.
         */
        "setXY.y"?: number;
        /**
         * Increment each Game Object's horizontal position from the previous by this amount, starting from `setXY.x`.
         */
        "setXY.stepX"?: number;
        /**
         * Increment each Game Object's vertical position from the previous by this amount, starting from `setXY.y`.
         */
        "setXY.stepY"?: number;
        setRotation?: object;
        /**
         * Rotation of each new Game Object.
         */
        "setRotation.value"?: number;
        /**
         * Increment each Game Object's rotation from the previous by this amount, starting at `setRotation.value`.
         */
        "setRotation.step"?: number;
        setScale?: object;
        /**
         * The horizontal scale of each new Game Object.
         */
        "setScale.x"?: number;
        /**
         * The vertical scale of each new Game Object.
         */
        "setScale.y"?: number;
        /**
         * Increment each Game Object's horizontal scale from the previous by this amount, starting from `setScale.x`.
         */
        "setScale.stepX"?: number;
        /**
         * Increment each Game object's vertical scale from the previous by this amount, starting from `setScale.y`.
         */
        "setScale.stepY"?: number;
        setOrigin?: object;
        /**
         * The horizontal origin of each new Game Object.
         */
        "setOrigin.x"?: number;
        /**
         * The vertical origin of each new Game Object.
         */
        "setOrigin.y"?: number;
        /**
         * Increment each Game Object's horizontal origin from the previous by this amount, starting from `setOrigin.x`.
         */
        "setOrigin.stepX"?: number;
        /**
         * Increment each Game object's vertical origin from the previous by this amount, starting from `setOrigin.y`.
         */
        "setOrigin.stepY"?: number;
        setAlpha?: object;
        /**
         * The alpha value of each new Game Object.
         */
        "setAlpha.value"?: number;
        /**
         * Increment each Game Object's alpha from the previous by this amount, starting from `setAlpha.value`.
         */
        "setAlpha.step"?: number;
        setDepth?: object;
        /**
         * The depth value of each new Game Object.
         */
        "setDepth.value"?: number;
        /**
         * Increment each Game Object's depth from the previous by this amount, starting from `setDepth.value`.
         */
        "setDepth.step"?: number;
        setScrollFactor?: object;
        /**
         * The horizontal scroll factor of each new Game Object.
         */
        "setScrollFactor.x"?: number;
        /**
         * The vertical scroll factor of each new Game Object.
         */
        "setScrollFactor.y"?: number;
        /**
         * Increment each Game Object's horizontal scroll factor from the previous by this amount, starting from `setScrollFactor.x`.
         */
        "setScrollFactor.stepX"?: number;
        /**
         * Increment each Game object's vertical scroll factor from the previous by this amount, starting from `setScrollFactor.y`.
         */
        "setScrollFactor.stepY"?: number;
        /**
         * A geometric shape that defines the hit area for the Game Object.
         */
        hitArea?: any;
        /**
         * A callback to be invoked when the Game Object is interacted with.
         */
        hitAreaCallback?: Phaser.Types.Input.HitAreaCallback;
        /**
         * Align the new Game Objects in a grid using these settings.
         */
        gridAlign?: false | Phaser.Types.Actions.GridAlignConfig;
      };

      type GroupMultipleCreateCallback = (items: Phaser.GameObjects.GameObject[])=>void;

    }

    namespace Particles {
      type DeathZoneSource = {
        contains: Phaser.Types.GameObjects.Particles.DeathZoneSourceCallback;
      };

      type DeathZoneSourceCallback = (x: number, y: number)=>void;

      type EdgeZoneSource = {
        /**
         * A function placing points on the sources edge or edges.
         */
        getPoints: Phaser.Types.GameObjects.Particles.EdgeZoneSourceCallback;
      };

      type EdgeZoneSourceCallback = (quantity: number, stepRate?: number)=>void;

      type EmitterOpCustomEmitConfig = {
        /**
         * A callback that is invoked each time the emitter emits a particle.
         */
        onEmit: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitCallback;
      };

      type EmitterOpCustomUpdateConfig = {
        /**
         * A callback that is invoked each time the emitter emits a particle.
         */
        onEmit?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitCallback;
        /**
         * A callback that is invoked each time the emitter updates.
         */
        onUpdate: Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateCallback;
      };

      /**
       * Defines an operation yielding a value incremented continuously across a range.
       */
      type EmitterOpEaseConfig = {
        /**
         * The starting value.
         */
        start: number;
        /**
         * The ending value.
         */
        end: number;
        /**
         * The ease to find. This can be either a string from the EaseMap, or a custom function.
         */
        ease?: string | Function;
        /**
         * An optional array of ease parameters to go with the ease.
         */
        easeParams?: number[];
      };

      /**
       * The returned value sets what the property will be at the START of the particle's life, on emit.
       */
      type EmitterOpOnEmitCallback = (particle: Phaser.GameObjects.Particles.Particle, key: string, value: number)=>void;

      type EmitterOpOnEmitType = number | number[] | Phaser.Types.GameObjects.Particles.EmitterOpOnEmitCallback | Phaser.Types.GameObjects.Particles.EmitterOpRandomConfig | Phaser.Types.GameObjects.Particles.EmitterOpRandomMinMaxConfig | Phaser.Types.GameObjects.Particles.EmitterOpRandomStartEndConfig | Phaser.Types.GameObjects.Particles.EmitterOpSteppedConfig | Phaser.Types.GameObjects.Particles.EmitterOpCustomEmitConfig;

      /**
       * The returned value updates the property for the duration of the particle's life.
       */
      type EmitterOpOnUpdateCallback = (particle: Phaser.GameObjects.Particles.Particle, key: string, t: number, value: number)=>void;

      type EmitterOpOnUpdateType = Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateCallback | Phaser.Types.GameObjects.Particles.EmitterOpEaseConfig | Phaser.Types.GameObjects.Particles.EmitterOpCustomUpdateConfig;

      /**
       * Defines an operation yielding a random value within a range.
       */
      type EmitterOpRandomConfig = {
        /**
         * The minimum and maximum values, as [min, max].
         */
        random: number[];
      };

      /**
       * Defines an operation yielding a random value within a range.
       */
      type EmitterOpRandomMinMaxConfig = {
        /**
         * The minimum value.
         */
        min: number;
        /**
         * The maximum value.
         */
        max: number;
      };

      /**
       * Defines an operation yielding a random value within a range.
       */
      type EmitterOpRandomStartEndConfig = {
        /**
         * The starting value.
         */
        start: number;
        /**
         * The ending value.
         */
        end: number;
        /**
         * If false, this becomes {@link EmitterOpEaseConfig}.
         */
        random: boolean;
      };

      /**
       * Defines an operation yielding a value incremented by steps across a range.
       */
      type EmitterOpSteppedConfig = {
        /**
         * The starting value.
         */
        start: number;
        /**
         * The ending value.
         */
        end: number;
        /**
         * The number of steps between start and end.
         */
        steps: number;
      };

      type GravityWellConfig = {
        /**
         * The x coordinate of the Gravity Well, in world space.
         */
        x?: number;
        /**
         * The y coordinate of the Gravity Well, in world space.
         */
        y?: number;
        /**
         * The strength of the gravity force - larger numbers produce a stronger force.
         */
        power?: number;
        /**
         * The minimum distance for which the gravity force is calculated.
         */
        epsilon?: number;
        /**
         * The gravitational force of this Gravity Well.
         */
        gravity?: number;
      };

      type ParticleDeathCallback = (particle: Phaser.GameObjects.Particles.Particle)=>void;

      type ParticleEmitterBounds = {
        /**
         * The left edge of the rectangle.
         */
        x: number;
        /**
         * The top edge of the rectangle.
         */
        y: number;
        /**
         * The width of the rectangle.
         */
        width: number;
        /**
         * The height of the rectangle.
         */
        height: number;
      };

      type ParticleEmitterBoundsAlt = {
        /**
         * The left edge of the rectangle.
         */
        x: number;
        /**
         * The top edge of the rectangle.
         */
        y: number;
        /**
         * The width of the rectangle.
         */
        w: number;
        /**
         * The height of the rectangle.
         */
        h: number;
      };

      type ParticleEmitterCallback = (particle: Phaser.GameObjects.Particles.Particle, emitter: Phaser.GameObjects.Particles.ParticleEmitter)=>void;

      type ParticleEmitterConfig = {
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#active}.
         */
        active?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#blendMode}.
         */
        blendMode?: Phaser.BlendModes | string;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#deathCallbackScope} and {@link Phaser.GameObjects.Particles.ParticleEmitter#emitCallbackScope}.
         */
        callbackScope?: any;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#collideBottom}.
         */
        collideBottom?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#collideLeft}.
         */
        collideLeft?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#collideRight}.
         */
        collideRight?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#collideTop}.
         */
        collideTop?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#deathCallback}.
         */
        deathCallback?: Function;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#deathCallbackScope}.
         */
        deathCallbackScope?: any;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#emitCallback}.
         */
        emitCallback?: Function;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#emitCallbackScope}.
         */
        emitCallbackScope?: any;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#follow}.
         */
        follow?: Phaser.GameObjects.GameObject;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#frequency}.
         */
        frequency?: number;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#gravityX}.
         */
        gravityX?: number;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#gravityY}.
         */
        gravityY?: number;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#maxParticles}.
         */
        maxParticles?: number;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#name}.
         */
        name?: string;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#on}.
         */
        on?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleBringToTop}.
         */
        particleBringToTop?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#particleClass}.
         */
        particleClass?: Phaser.GameObjects.Particles.Particle;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#radial}.
         */
        radial?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#timeScale}.
         */
        timeScale?: number;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#trackVisible}.
         */
        trackVisible?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#visible}.
         */
        visible?: boolean;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#accelerationX} (emit only).
         */
        accelerationX?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#accelerationY} (emit only).
         */
        accelerationY?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#alpha}.
         */
        alpha?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType | Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#angle} (emit only).
         */
        angle?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#bounce} (emit only).
         */
        bounce?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#delay} (emit only).
         */
        delay?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#lifespan} (emit only).
         */
        lifespan?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#maxVelocityX} (emit only).
         */
        maxVelocityX?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#maxVelocityY} (emit only).
         */
        maxVelocityY?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#moveToX} (emit only).
         */
        moveToX?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#moveToY} (emit only).
         */
        moveToY?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#quantity} (emit only).
         */
        quantity?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#rotate}.
         */
        rotate?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType | Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType;
        /**
         * As {@link Phaser.GameObjects.Particles.ParticleEmitter#setScale}.
         */
        scale?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType | Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#scaleX}.
         */
        scaleX?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType | Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#scaleY}.
         */
        scaleY?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType | Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType;
        /**
         * As {@link Phaser.GameObjects.Particles.ParticleEmitter#setSpeed} (emit only).
         */
        speed?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#speedX} (emit only).
         */
        speedX?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#speedY} (emit only).
         */
        speedY?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#tint}.
         */
        tint?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType | Phaser.Types.GameObjects.Particles.EmitterOpOnUpdateType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#x} (emit only).
         */
        x?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#y} (emit only).
         */
        y?: Phaser.Types.GameObjects.Particles.EmitterOpOnEmitType;
        /**
         * As {@link Phaser.GameObjects.Particles.ParticleEmitter#setEmitZone}.
         */
        emitZone?: Phaser.Types.GameObjects.Particles.ParticleEmitterEdgeZoneConfig | Phaser.Types.GameObjects.Particles.ParticleEmitterRandomZoneConfig;
        /**
         * As {@link Phaser.GameObjects.Particles.ParticleEmitter#setDeathZone}.
         */
        deathZone?: Phaser.Types.GameObjects.Particles.ParticleEmitterDeathZoneConfig;
        /**
         * As {@link Phaser.GameObjects.Particles.ParticleEmitter#setBounds}.
         */
        bounds?: Phaser.Types.GameObjects.Particles.ParticleEmitterBounds | Phaser.Types.GameObjects.Particles.ParticleEmitterBoundsAlt;
        /**
         * Assigns to {@link Phaser.GameObjects.Particles.ParticleEmitter#followOffset}.
         */
        followOffset?: object;
        /**
         * x-coordinate of the offset.
         */
        "followOffset.x"?: number;
        /**
         * y-coordinate of the offset.
         */
        "followOffset.y"?: number;
        /**
         * Sets {@link Phaser.GameObjects.Particles.ParticleEmitter#frames}.
         */
        frame?: number | number[] | string | string[] | Phaser.Textures.Frame | Phaser.Textures.Frame[] | Phaser.Types.GameObjects.Particles.ParticleEmitterFrameConfig;
        /**
         * Creates specified number of inactive particles and adds them to this emitter's pool. {@link Phaser.GameObjects.Particles.ParticleEmitter#reserve}
         */
        reserve?: number;
      };

      type ParticleEmitterDeathZoneConfig = {
        /**
         * A shape representing the zone. See {@link Phaser.GameObjects.Particles.Zones.DeathZone#source}.
         */
        source: Phaser.Types.GameObjects.Particles.DeathZoneSource;
        /**
         * 'onEnter' or 'onLeave'.
         */
        type?: string;
      };

      type ParticleEmitterEdgeZoneConfig = {
        /**
         * A shape representing the zone. See {@link Phaser.GameObjects.Particles.Zones.EdgeZone#source}.
         */
        source: Phaser.Types.GameObjects.Particles.EdgeZoneSource;
        /**
         * 'edge'.
         */
        type: string;
        /**
         * The number of particles to place on the source edge. Set to 0 to use `stepRate` instead.
         */
        quantity: number;
        /**
         * The distance between each particle. When set, `quantity` is implied and should be set to 0.
         */
        stepRate?: number;
        /**
         * Whether particles are placed from start to end and then end to start.
         */
        yoyo?: boolean;
        /**
         * Whether one endpoint will be removed if it's identical to the other.
         */
        seamless?: boolean;
      };

      type ParticleEmitterFrameConfig = {
        /**
         * One or more texture frames.
         */
        frames?: number | number[] | string | string[] | Phaser.Textures.Frame | Phaser.Textures.Frame[];
        /**
         * Whether texture frames will be assigned consecutively (true) or at random (false).
         */
        cycle?: boolean;
        /**
         * The number of consecutive particles receiving each texture frame, when `cycle` is true.
         */
        quantity?: number;
      };

      type ParticleEmitterRandomZoneConfig = {
        /**
         * A shape representing the zone. See {@link Phaser.GameObjects.Particles.Zones.RandomZone#source}.
         */
        source: Phaser.Types.GameObjects.Particles.RandomZoneSource;
        /**
         * 'random'.
         */
        type?: string;
      };

      type RandomZoneSource = {
        /**
         * A function modifying its point argument.
         */
        getRandomPoint: Phaser.Types.GameObjects.Particles.RandomZoneSourceCallback;
      };

      type RandomZoneSourceCallback = (point: Phaser.Types.Math.Vector2Like)=>void;

    }

    namespace PathFollower {
      /**
       * Settings for a PathFollower.
       */
      type PathConfig = {
        /**
         * The duration of the path follow in ms. Must be `> 0`.
         */
        duration?: number;
        /**
         * The start position of the path follow, between 0 and 1. Must be less than `to`.
         */
        from?: number;
        /**
         * The end position of the path follow, between 0 and 1. Must be more than `from`.
         */
        to?: number;
        /**
         * Whether to position the PathFollower on the Path using its path offset.
         */
        positionOnPath?: boolean;
        /**
         * Should the PathFollower automatically rotate to point in the direction of the Path?
         */
        rotateToPath?: boolean;
        /**
         * If the PathFollower is rotating to match the Path, this value is added to the rotation value. This allows you to rotate objects to a path but control the angle of the rotation as well.
         */
        rotationOffset?: number;
        /**
         * Current start position of the path follow, must be between `from` and `to`.
         */
        startAt?: number;
      };

    }

    namespace RenderTexture {
      type RenderTextureConfig = {
        /**
         * The x coordinate of the RenderTextures position.
         */
        x?: number;
        /**
         * The y coordinate of the RenderTextures position.
         */
        y?: number;
        /**
         * The width of the RenderTexture.
         */
        width?: number;
        /**
         * The height of the RenderTexture.
         */
        height?: number;
        /**
         * The texture key to make the RenderTexture from.
         */
        key?: string;
        /**
         * the frame to make the RenderTexture from.
         */
        frame?: string;
      };

    }

    namespace Sprite {
      type SpriteConfig = Phaser.Types.GameObjects.GameObjectConfig & {
        /**
         * The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
         */
        key?: string;
        /**
         * An optional frame from the Texture this Game Object is rendering with.
         */
        frame?: number | string;
      };

    }

    namespace Text {
      /**
       * Results object from a call to GetTextSize.
       */
      type GetTextSizeObject = {
        /**
         * The width of the longest line in the Text object.
         */
        width: number;
        /**
         * The height of the Text object.
         */
        height: number;
        /**
         * The number of lines in the Text object.
         */
        lines: number;
        /**
         * An array of the lines for each line in the Text object.
         */
        lineWidths: number[];
        /**
         * The line spacing of the Text object.
         */
        lineSpacing: number;
        /**
         * The height of a line factoring in font and stroke.
         */
        lineHeight: number;
      };

      type TextConfig = Phaser.Types.GameObjects.GameObjectConfig & {
        /**
         * The text this Text object will display.
         */
        text?: string | string[];
        /**
         * The Text style configuration object.
         */
        style?: Phaser.Types.GameObjects.Text.TextStyle;
        /**
         * A Text Padding object.
         */
        padding?: Phaser.Types.GameObjects.Text.TextPadding;
      };

      /**
       * Font metrics for a Text Style object.
       */
      type TextMetrics = {
        /**
         * The ascent of the font.
         */
        ascent: number;
        /**
         * The descent of the font.
         */
        descent: number;
        /**
         * The size of the font.
         */
        fontSize: number;
      };

      /**
       * A Text Padding configuration object as used by the Text Style.
       */
      type TextPadding = {
        /**
         * If set this value is used for both the left and right padding.
         */
        x?: number;
        /**
         * If set this value is used for both the top and bottom padding.
         */
        y?: number;
        /**
         * The amount of padding added to the left of the Text object.
         */
        left?: number;
        /**
         * The amount of padding added to the right of the Text object.
         */
        right?: number;
        /**
         * The amount of padding added to the top of the Text object.
         */
        top?: number;
        /**
         * The amount of padding added to the bottom of the Text object.
         */
        bottom?: number;
      };

      /**
       * A Text Shadow configuration object as used by the Text Style.
       */
      type TextShadow = {
        /**
         * The horizontal offset of the shadow.
         */
        offsetX?: number;
        /**
         * The vertical offset of the shadow.
         */
        offsetY?: number;
        /**
         * The color of the shadow, given as a CSS string value.
         */
        color?: string;
        /**
         * The amount of blur applied to the shadow. Leave as zero for a hard shadow.
         */
        blur?: number;
        /**
         * Apply the shadow to the stroke effect on the Text object?
         */
        stroke?: boolean;
        /**
         * Apply the shadow to the fill effect on the Text object?
         */
        fill?: boolean;
      };

      /**
       * A Text Style configuration object as used by the Text Game Object.
       */
      type TextStyle = {
        /**
         * The font the Text object will render with. This is a Canvas style font string.
         */
        fontFamily?: string;
        /**
         * The font size, as a CSS size string.
         */
        fontSize?: string;
        /**
         * Any addition font styles, such as 'strong'.
         */
        fontStyle?: string;
        /**
         * The font family or font settings to set. Overrides the other font settings.
         */
        font?: string;
        /**
         * A solid fill color that is rendered behind the Text object. Given as a CSS string color such as `#ff0`.
         */
        backgroundColor?: string;
        /**
         * The color the Text is drawn in. Given as a CSS string color such as `#fff` or `rgb()`.
         */
        color?: string;
        /**
         * The color used to stroke the Text if the `strokeThickness` property is greater than zero.
         */
        stroke?: string;
        /**
         * The thickness of the stroke around the Text. Set to zero for no stroke.
         */
        strokeThickness?: number;
        /**
         * The Text shadow configuration object.
         */
        shadow?: Phaser.Types.GameObjects.Text.TextShadow;
        /**
         * A Text Padding object.
         */
        padding?: Phaser.Types.GameObjects.Text.TextPadding;
        /**
         * The alignment of the Text. This only impacts multi-line text. Either `left`, `right`, `center` or `justify`.
         */
        align?: string;
        /**
         * The maximum number of lines to display within the Text object.
         */
        maxLines?: number;
        /**
         * Force the Text object to have the exact width specified in this property. Leave as zero for it to change accordingly to content.
         */
        fixedWidth?: number;
        /**
         * Force the Text object to have the exact height specified in this property. Leave as zero for it to change accordingly to content.
         */
        fixedHeight?: number;
        /**
         * Sets the resolution (DPI setting) of the Text object. Leave at zero for it to use the game resolution.
         */
        resolution?: number;
        /**
         * Set to `true` if this Text object should render from right-to-left.
         */
        rtl?: boolean;
        /**
         * This is the string used to aid Canvas in calculating the height of the font.
         */
        testString?: string;
        /**
         * The amount of horizontal padding added to the width of the text when calculating the font metrics.
         */
        baselineX?: number;
        /**
         * The amount of vertical padding added to the height of the text when calculating the font metrics.
         */
        baselineY?: number;
        /**
         * The Text Word wrap configuration object.
         */
        wordWrap?: Phaser.Types.GameObjects.Text.TextWordWrap;
        /**
         * A Text Metrics object. Use this to avoid expensive font size calculations in text heavy games.
         */
        metrics?: Phaser.Types.GameObjects.Text.TextMetrics;
      };

      /**
       * A Text Word Wrap configuration object as used by the Text Style configuration.
       */
      type TextWordWrap = {
        /**
         * The width at which text should be considered for word-wrapping.
         */
        width?: number;
        /**
         * Provide a custom callback when word wrapping is enabled.
         */
        callback?: TextStyleWordWrapCallback;
        /**
         * The context in which the word wrap callback is invoked.
         */
        callbackScope?: any;
        /**
         * Use basic or advanced word wrapping?
         */
        useAdvancedWrap?: boolean;
      };

    }

    namespace TileSprite {
      type TileSpriteConfig = Phaser.Types.GameObjects.GameObjectConfig & {
        /**
         * The x coordinate of the Tile Sprite.
         */
        x?: number;
        /**
         * The y coordinate of the Tile Sprite.
         */
        y?: number;
        /**
         * The width of the Tile Sprite. If zero it will use the size of the texture frame.
         */
        width?: number;
        /**
         * The height of the Tile Sprite. If zero it will use the size of the texture frame.
         */
        height?: number;
        /**
         * The key of the Texture this Tile Sprite will use to render with, as stored in the Texture Manager.
         */
        key?: string;
        /**
         * An optional frame from the Texture this Tile Sprite is rendering with.
         */
        frame?: string;
      };

    }

    type Face = {
      /**
       * The first face vertex.
       */
      vertex1: Phaser.Types.GameObjects.Vertex;
      /**
       * The second face vertex.
       */
      vertex2: Phaser.Types.GameObjects.Vertex;
      /**
       * The third face vertex.
       */
      vertex3: Phaser.Types.GameObjects.Vertex;
      /**
       * Are the vertices counter-clockwise?
       */
      isCounterClockwise: boolean;
    };

    type GameObjectConfig = {
      /**
       * The x position of the Game Object.
       */
      x?: number | object;
      /**
       * The y position of the Game Object.
       */
      y?: number | object;
      /**
       * The depth of the GameObject.
       */
      depth?: number;
      /**
       * The horizontally flipped state of the Game Object.
       */
      flipX?: boolean;
      /**
       * The vertically flipped state of the Game Object.
       */
      flipY?: boolean;
      /**
       * The scale of the GameObject.
       */
      scale?: number | object;
      /**
       * The scroll factor of the GameObject.
       */
      scrollFactor?: number | object;
      /**
       * The rotation angle of the Game Object, in radians.
       */
      rotation?: number | object;
      /**
       * The rotation angle of the Game Object, in degrees.
       */
      angle?: number | object;
      /**
       * The alpha (opacity) of the Game Object.
       */
      alpha?: number | object;
      /**
       * The origin of the Game Object.
       */
      origin?: number | object;
      /**
       * The scale mode of the GameObject.
       */
      scaleMode?: number;
      /**
       * The blend mode of the GameObject.
       */
      blendMode?: number;
      /**
       * The visible state of the Game Object.
       */
      visible?: boolean;
      /**
       * Add the GameObject to the scene.
       */
      add?: boolean;
    };

    type GetCalcMatrixResults = {
      /**
       * The calculated Camera matrix.
       */
      camera: Phaser.GameObjects.Components.TransformMatrix;
      /**
       * The calculated Sprite (Game Object) matrix.
       */
      sprite: Phaser.GameObjects.Components.TransformMatrix;
      /**
       * The calculated results matrix, factoring all others in.
       */
      calc: Phaser.GameObjects.Components.TransformMatrix;
    };

    type JSONGameObject = {
      /**
       * The name of this Game Object.
       */
      name: string;
      /**
       * A textual representation of this Game Object, i.e. `sprite`.
       */
      type: string;
      /**
       * The x position of this Game Object.
       */
      x: number;
      /**
       * The y position of this Game Object.
       */
      y: number;
      /**
       * The scale of this Game Object
       */
      scale: object;
      /**
       * The horizontal scale of this Game Object.
       */
      "scale.x": number;
      /**
       * The vertical scale of this Game Object.
       */
      "scale.y": number;
      /**
       * The origin of this Game Object.
       */
      origin: object;
      /**
       * The horizontal origin of this Game Object.
       */
      "origin.x": number;
      /**
       * The vertical origin of this Game Object.
       */
      "origin.y": number;
      /**
       * The horizontally flipped state of the Game Object.
       */
      flipX: boolean;
      /**
       * The vertically flipped state of the Game Object.
       */
      flipY: boolean;
      /**
       * The angle of this Game Object in radians.
       */
      rotation: number;
      /**
       * The alpha value of the Game Object.
       */
      alpha: number;
      /**
       * The visible state of the Game Object.
       */
      visible: boolean;
      /**
       * The Scale Mode being used by this Game Object.
       */
      scaleMode: number;
      /**
       * Sets the Blend Mode being used by this Game Object.
       */
      blendMode: number | string;
      /**
       * The texture key of this Game Object.
       */
      textureKey: string;
      /**
       * The frame key of this Game Object.
       */
      frameKey: string;
      /**
       * The data of this Game Object.
       */
      data: object;
    };

    type Vertex = {
      /**
       * The x coordinate of the vertex.
       */
      x: number;
      /**
       * The y coordinate of the vertex.
       */
      y: number;
      /**
       * The z coordinate of the vertex.
       */
      z: number;
      /**
       * The x normal of the vertex.
       */
      normalX: number;
      /**
       * The y normal of the vertex.
       */
      normalY: number;
      /**
       * The z normal of the vertex.
       */
      normalZ: number;
      /**
       * UV u texture coordinate of the vertex.
       */
      u: number;
      /**
       * UV v texture coordinate of the vertex.
       */
      v: number;
      /**
       * The alpha value of the vertex.
       */
      alpha: number;
    };

  }

  namespace Geom {
    namespace Mesh {
      type GenerateGridConfig = {
        /**
         * The texture to be used for this Grid. Must be a Texture instance. Can also be a string but only if the `mesh` property is set.
         */
        texture: string | Phaser.Textures.Texture;
        /**
         * The name or index of the frame within the Texture.
         */
        frame?: string | number;
        /**
         * If specified, the vertices of the generated grid will be added to this Mesh Game Object.
         */
        mesh?: Phaser.GameObjects.Mesh;
        /**
         * The width of the grid in 3D units. If you wish to get a pixel accurate grid based on a texture, you can use an Ortho Mesh or the `isOrtho` parameter.
         */
        width?: number;
        /**
         * The height of the grid in 3D units.
         */
        height?: number;
        /**
         * The number of segments to split the grid horizontally in to.
         */
        widthSegments?: number;
        /**
         * The number of segments to split the grid vertically in to.
         */
        heightSegments?: number;
        /**
         * Offset the grid x position by this amount.
         */
        x?: number;
        /**
         * Offset the grid y position by this amount.
         */
        y?: number;
        /**
         * An array of colors, one per vertex, or a single color value applied to all vertices.
         */
        colors?: number | number[];
        /**
         * An array of alpha values, one per vertex, or a single alpha value applied to all vertices.
         */
        alphas?: number | number[];
        /**
         * Should the texture tile (repeat) across the grid segments, or display as a single texture?
         */
        tile?: boolean;
        /**
         * If set and using a texture with an ortho Mesh, the `width` and `height` parameters will be calculated based on the frame size for you.
         */
        isOrtho?: boolean;
        /**
         * If set and using a texture, vertically flipping render result.
         */
        flipY?: boolean;
      };

      type GenerateGridVertsResult = {
        /**
         * An array of vertex values in x, y pairs.
         */
        verts: number[];
        /**
         * An array of vertex indexes. This array will be empty if the `tile` parameter was `true`.
         */
        indices: number[];
        /**
         * An array of UV values, two per vertex.
         */
        uvs: number[];
        /**
         * An array of colors, one per vertex, or a single color value applied to all vertices.
         */
        colors?: number | number[];
        /**
         * An array of alpha values, one per vertex, or a single alpha value applied to all vertices.
         */
        alphas?: number | number[];
      };

      type GenerateVertsResult = {
        /**
         * An array of Face objects generated from the OBJ Data.
         */
        faces: Phaser.Geom.Mesh.Face[];
        /**
         * An array of Vertex objects generated from the OBJ Data.
         */
        vertices: Phaser.Geom.Mesh.Vertex[];
      };

      type OBJData = {
        /**
         * An array of material library filenames found in the OBJ file.
         */
        materialLibraries: string[];
        /**
         * If the obj was loaded with an mtl file, the parsed material names are stored in this object.
         */
        materials: object;
        /**
         * An array of parsed models extracted from the OBJ file.
         */
        models: Phaser.Types.Geom.Mesh.OBJModel[];
      };

      type OBJFace = {
        /**
         * The name of the Group this Face is in.
         */
        group: string;
        /**
         * The name of the material this Face uses.
         */
        material: string;
        /**
         * An array of vertices in this Face.
         */
        vertices: Phaser.Types.Geom.Mesh.OBJFaceVertice[];
      };

      type OBJFaceVertice = {
        /**
         * The index in the `textureCoords` array that this vertex uses.
         */
        textureCoordsIndex: number;
        /**
         * The index in the `vertices` array that this vertex uses.
         */
        vertexIndex: number;
        /**
         * The index in the `vertexNormals` array that this vertex uses.
         */
        vertexNormalIndex: number;
      };

      type OBJModel = {
        /**
         * An array of Faces.
         */
        faces: Phaser.Types.Geom.Mesh.OBJFace[];
        /**
         * The name of the model.
         */
        name: string;
        /**
         * An array of texture coordinates.
         */
        textureCoords: Phaser.Types.Geom.Mesh.UV[];
        /**
         * An array of vertex normals.
         */
        vertexNormals: Phaser.Types.Math.Vector3Like[];
        /**
         * An array of vertices in the model.
         */
        vertices: Phaser.Types.Math.Vector3Like[];
      };

      type UV = {
        /**
         * The u component.
         */
        u: number;
        /**
         * The v component.
         */
        v: number;
        /**
         * The w component.
         */
        w: number;
      };

    }

  }

  namespace Input {
    namespace Gamepad {
      /**
       * The Gamepad object, as extracted from GamepadEvent.
       */
      type Pad = {
        /**
         * The ID of the Gamepad.
         */
        id: string;
        /**
         * The index of the Gamepad.
         */
        index: number;
      };

    }

    namespace Keyboard {
      type CursorKeys = {
        /**
         * A Key object mapping to the UP arrow key.
         */
        up: Phaser.Input.Keyboard.Key;
        /**
         * A Key object mapping to the DOWN arrow key.
         */
        down: Phaser.Input.Keyboard.Key;
        /**
         * A Key object mapping to the LEFT arrow key.
         */
        left: Phaser.Input.Keyboard.Key;
        /**
         * A Key object mapping to the RIGHT arrow key.
         */
        right: Phaser.Input.Keyboard.Key;
        /**
         * A Key object mapping to the SPACE BAR key.
         */
        space: Phaser.Input.Keyboard.Key;
        /**
         * A Key object mapping to the SHIFT key.
         */
        shift: Phaser.Input.Keyboard.Key;
      };

      type KeyboardKeydownCallback = (event: KeyboardEvent)=>void;

      type KeyComboConfig = {
        /**
         * If they press the wrong key do we reset the combo?
         */
        resetOnWrongKey?: boolean;
        /**
         * The max delay in ms between each key press. Above this the combo is reset. 0 means disabled.
         */
        maxKeyDelay?: number;
        /**
         * If previously matched and they press the first key of the combo again, will it reset?
         */
        resetOnMatch?: boolean;
        /**
         * If the combo matches, will it delete itself?
         */
        deleteOnMatch?: boolean;
      };

    }

    /**
     * A Phaser Input Event Data object.
     *
     * This object is passed to the registered event listeners and allows you to stop any further propagation.
     */
    type EventData = {
      /**
       * The cancelled state of this Event.
       */
      cancelled?: boolean;
      /**
       * Call this method to stop this event from passing any further down the event chain.
       */
      stopPropagation: Function;
    };

    type HitAreaCallback = (hitArea: any, x: number, y: number, gameObject: Phaser.GameObjects.GameObject)=>void;

    type InputConfiguration = {
      /**
       * The object / shape to use as the Hit Area. If not given it will try to create a Rectangle based on the texture frame.
       */
      hitArea?: any;
      /**
       * The callback that determines if the pointer is within the Hit Area shape or not.
       */
      hitAreaCallback?: Phaser.Types.Input.HitAreaCallback;
      /**
       * If `true` the Interactive Object will be set to be draggable and emit drag events.
       */
      draggable?: boolean;
      /**
       * If `true` the Interactive Object will be set to be a drop zone for draggable objects.
       */
      dropZone?: boolean;
      /**
       * If `true` the Interactive Object will set the `pointer` hand cursor when a pointer is over it. This is a short-cut for setting `cursor: 'pointer'`.
       */
      useHandCursor?: boolean;
      /**
       * The CSS string to be used when the cursor is over this Interactive Object.
       */
      cursor?: string;
      /**
       * If `true` the a pixel perfect function will be set for the hit area callback. Only works with image texture based Game Objects, not Render Textures.
       */
      pixelPerfect?: boolean;
      /**
       * If `pixelPerfect` is set, this is the alpha tolerance threshold value used in the callback.
       */
      alphaTolerance?: number;
    };

    type InputPluginContainer = {
      /**
       * The unique name of this plugin in the input plugin cache.
       */
      key: string;
      /**
       * The plugin to be stored. Should be the source object, not instantiated.
       */
      plugin: Function;
      /**
       * If this plugin is to be injected into the Input Plugin, this is the property key map used.
       */
      mapping?: string;
    };

    type InteractiveObject = {
      /**
       * The Game Object to which this Interactive Object is bound.
       */
      gameObject: Phaser.GameObjects.GameObject;
      /**
       * Is this Interactive Object currently enabled for input events?
       */
      enabled: boolean;
      /**
       * An Interactive Object that is 'always enabled' will receive input even if the parent object is invisible or won't render.
       */
      alwaysEnabled: boolean;
      /**
       * Is this Interactive Object draggable? Enable with `InputPlugin.setDraggable`.
       */
      draggable: boolean;
      /**
       * Is this Interactive Object a drag-targets drop zone? Set when the object is created.
       */
      dropZone: boolean;
      /**
       * Should this Interactive Object change the cursor (via css) when over? (desktop only)
       */
      cursor: boolean | string;
      /**
       * An optional drop target for a draggable Interactive Object.
       */
      target: Phaser.GameObjects.GameObject;
      /**
       * The most recent Camera to be tested against this Interactive Object.
       */
      camera: Phaser.Cameras.Scene2D.Camera;
      /**
       * The hit area for this Interactive Object. Typically a geometry shape, like a Rectangle or Circle.
       */
      hitArea: any;
      /**
       * The 'contains' check callback that the hit area shape will use for all hit tests.
       */
      hitAreaCallback: Phaser.Types.Input.HitAreaCallback;
      /**
       * If this Interactive Object has been enabled for debug, via `InputPlugin.enableDebug` then this property holds its debug shape.
       */
      hitAreaDebug: Phaser.GameObjects.Shape;
      /**
       * Was the hitArea for this Interactive Object created based on texture size (false), or a custom shape? (true)
       */
      customHitArea: boolean;
      /**
       * The x coordinate that the Pointer interacted with this object on, relative to the Game Object's top-left position.
       */
      localX: number;
      /**
       * The y coordinate that the Pointer interacted with this object on, relative to the Game Object's top-left position.
       */
      localY: number;
      /**
       * The current drag state of this Interactive Object. 0 = Not being dragged, 1 = being checked for drag, or 2 = being actively dragged.
       */
      dragState: 0 | 1 | 2;
      /**
       * The x coordinate of the Game Object that owns this Interactive Object when the drag started.
       */
      dragStartX: number;
      /**
       * The y coordinate of the Game Object that owns this Interactive Object when the drag started.
       */
      dragStartY: number;
      /**
       * The x coordinate that the Pointer started dragging this Interactive Object from.
       */
      dragStartXGlobal: number;
      /**
       * The y coordinate that the Pointer started dragging this Interactive Object from.
       */
      dragStartYGlobal: number;
      /**
       * The x coordinate that this Interactive Object is currently being dragged to.
       */
      dragX: number;
      /**
       * The y coordinate that this Interactive Object is currently being dragged to.
       */
      dragY: number;
    };

  }

  namespace Loader {
    namespace FileTypes {
      type AsepriteFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the texture image file from.
         */
        textureURL?: string;
        /**
         * The default file extension to use for the image texture if no url is provided.
         */
        textureExtension?: string;
        /**
         * Extra XHR Settings specifically for the texture image file.
         */
        textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The absolute or relative URL to load the atlas json file from. Or, a well formed JSON object to use instead.
         */
        atlasURL?: object | string;
        /**
         * The default file extension to use for the atlas json if no url is provided.
         */
        atlasExtension?: string;
        /**
         * Extra XHR Settings specifically for the atlas json file.
         */
        atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type AtlasJSONFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the texture image file from.
         */
        textureURL?: string;
        /**
         * The default file extension to use for the image texture if no url is provided.
         */
        textureExtension?: string;
        /**
         * Extra XHR Settings specifically for the texture image file.
         */
        textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The filename of an associated normal map. It uses the same path and url to load as the texture image.
         */
        normalMap?: string;
        /**
         * The absolute or relative URL to load the atlas json file from. Or, a well formed JSON object to use instead.
         */
        atlasURL?: object | string;
        /**
         * The default file extension to use for the atlas json if no url is provided.
         */
        atlasExtension?: string;
        /**
         * Extra XHR Settings specifically for the atlas json file.
         */
        atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type AtlasXMLFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the texture image file from.
         */
        textureURL?: string;
        /**
         * The default file extension to use for the image texture if no url is provided.
         */
        textureExtension?: string;
        /**
         * Extra XHR Settings specifically for the texture image file.
         */
        textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The filename of an associated normal map. It uses the same path and url to load as the texture image.
         */
        normalMap?: string;
        /**
         * The absolute or relative URL to load the atlas xml file from.
         */
        atlasURL?: string;
        /**
         * The default file extension to use for the atlas xml if no url is provided.
         */
        atlasExtension?: string;
        /**
         * Extra XHR Settings specifically for the atlas xml file.
         */
        atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type AudioFileConfig = {
        /**
         * The key of the file. Must be unique within the Loader and Audio Cache.
         */
        key: string;
        /**
         * The absolute or relative URLs to load the audio files from.
         */
        url?: string | string[];
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The optional AudioContext this file will use to process itself.
         */
        context?: AudioContext;
      };

      type AudioSpriteFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Audio Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the json file from. Or a well formed JSON object to use instead.
         */
        jsonURL: string;
        /**
         * Extra XHR Settings specifically for the json file.
         */
        jsonXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The absolute or relative URL to load the audio file from.
         */
        audioURL?: Object;
        /**
         * The audio configuration options.
         */
        audioConfig?: any;
        /**
         * Extra XHR Settings specifically for the audio file.
         */
        audioXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type BinaryFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Binary Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * Optional type to cast the binary file to once loaded. For example, `Uint8Array`.
         */
        dataType?: any;
      };

      type BitmapFontFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the texture image file from.
         */
        textureURL?: string;
        /**
         * The default file extension to use for the image texture if no url is provided.
         */
        textureExtension?: string;
        /**
         * Extra XHR Settings specifically for the texture image file.
         */
        textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The filename of an associated normal map. It uses the same path and url to load as the texture image.
         */
        normalMap?: string;
        /**
         * The absolute or relative URL to load the font data xml file from.
         */
        fontDataURL?: string;
        /**
         * The default file extension to use for the font data xml if no url is provided.
         */
        fontDataExtension?: string;
        /**
         * Extra XHR Settings specifically for the font data xml file.
         */
        fontDataXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type CSSFileConfig = {
        /**
         * The key of the file. Must be unique within the Loader.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type GLSLFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Text Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The type of shader. Either `fragment` for a fragment shader, or `vertex` for a vertex shader. This is ignored if you load a shader bundle.
         */
        shaderType?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type HTMLFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Text Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type HTMLTextureFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The width of the texture the HTML will be rendered to.
         */
        width?: number;
        /**
         * The height of the texture the HTML will be rendered to.
         */
        height?: number;
      };

      type ImageFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * The filename of an associated normal map. It uses the same path and url to load as the image.
         */
        normalMap?: string;
        /**
         * The frame configuration object. Only provided for, and used by, Sprite Sheets.
         */
        frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type ImageFrameConfig = {
        /**
         * The width of the frame in pixels.
         */
        frameWidth: number;
        /**
         * The height of the frame in pixels. Uses the `frameWidth` value if not provided.
         */
        frameHeight?: number;
        /**
         * The first frame to start parsing from.
         */
        startFrame?: number;
        /**
         * The frame to stop parsing at. If not provided it will calculate the value based on the image and frame dimensions.
         */
        endFrame?: number;
        /**
         * The margin in the image. This is the space around the edge of the frames.
         */
        margin?: number;
        /**
         * The spacing between each frame in the image.
         */
        spacing?: number;
      };

      type JSONFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the JSON Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from. Or can be a ready formed JSON object, in which case it will be directly added to the Cache.
         */
        url?: string | any;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * If specified instead of the whole JSON file being parsed and added to the Cache, only the section corresponding to this property key will be added. If the property you want to extract is nested, use periods to divide it.
         */
        dataKey?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type MultiAtlasFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the multi atlas json file from. Or, a well formed JSON object.
         */
        atlasURL?: string;
        /**
         * An alias for 'atlasURL'. If given, it overrides anything set in 'atlasURL'.
         */
        url?: string;
        /**
         * The default file extension to use for the atlas json if no url is provided.
         */
        atlasExtension?: string;
        /**
         * Extra XHR Settings specifically for the atlas json file.
         */
        atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * Optional path to use when loading the textures defined in the atlas data.
         */
        path?: string;
        /**
         * Optional Base URL to use when loading the textures defined in the atlas data.
         */
        baseURL?: string;
        /**
         * Extra XHR Settings specifically for the texture files.
         */
        textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type MultiScriptFileConfig = {
        /**
         * The key of the file. Must be unique within the Loader.
         */
        key: string;
        /**
         * An array of absolute or relative URLs to load the script files from. They are processed in the order given in the array.
         */
        url?: string[];
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for these files.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type OBJFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the OBJ Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.obj`, i.e. if `key` was "alien" then the URL will be "alien.obj".
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Flip the UV coordinates stored in the model data?
         */
        flipUV?: boolean;
        /**
         * An optional absolute or relative URL to the object material file from. If undefined or `null`, no material file will be loaded.
         */
        matURL?: string;
        /**
         * The default material file extension to use if no url is provided.
         */
        matExtension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type PackFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the JSON Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from. Or can be a ready formed JSON object, in which case it will be directly processed.
         */
        url?: string | any;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * If specified instead of the whole JSON file being parsed, only the section corresponding to this property key will be added. If the property you want to extract is nested, use periods to divide it.
         */
        dataKey?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type PackFileSection = {
        /**
         * The files to load. See {@link Phaser.Types.Loader.FileTypes}.
         */
        files: Phaser.Types.Loader.FileConfig[];
        /**
         * A URL used to resolve paths in `files`. Example: 'http://labs.phaser.io/assets/'.
         */
        baseURL?: string;
        /**
         * The default {@link Phaser.Types.Loader.FileConfig} `type`.
         */
        defaultType?: string;
        /**
         * A URL path used to resolve relative paths in `files`. Example: 'images/sprites/'.
         */
        path?: string;
        /**
         * An optional prefix that is automatically prepended to each file key.
         */
        prefix?: string;
      };

      type PluginFileConfig = {
        /**
         * The key of the file. Must be unique within the Loader.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Automatically start the plugin after loading?
         */
        start?: boolean;
        /**
         * If this plugin is to be injected into the Scene, this is the property key used.
         */
        mapping?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type SceneFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Text Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type ScenePluginFileConfig = {
        /**
         * The key of the file. Must be unique within the Loader.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from. Or, a Scene Plugin.
         */
        url?: string | Function;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * If this plugin is to be added to Scene.Systems, this is the property key for it.
         */
        systemKey?: string;
        /**
         * If this plugin is to be added to the Scene, this is the property key for it.
         */
        sceneKey?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type ScriptFileConfig = {
        /**
         * The key of the file. Must be unique within the Loader.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type SpriteSheetFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * The filename of an associated normal map. It uses the same path and url to load as the image.
         */
        normalMap?: string;
        /**
         * The frame configuration object.
         */
        frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type SVGFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The svg size configuration object.
         */
        svgConfig?: Phaser.Types.Loader.FileTypes.SVGSizeConfig;
      };

      type SVGSizeConfig = {
        /**
         * An optional width. The SVG will be resized to this size before being rendered to a texture.
         */
        width?: number;
        /**
         * An optional height. The SVG will be resized to this size before being rendered to a texture.
         */
        height?: number;
        /**
         * An optional scale. If given it overrides the width / height properties. The SVG is scaled by the scale factor before being rendered to a texture.
         */
        scale?: number;
      };

      type TextFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Text Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type TilemapCSVFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Tilemap Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type TilemapImpactFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Tilemap Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type TilemapJSONFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Tilemap Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from. Or, a well formed JSON object.
         */
        url?: object | string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type UnityAtlasFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Texture Manager.
         */
        key: string;
        /**
         * The absolute or relative URL to load the texture image file from.
         */
        textureURL?: string;
        /**
         * The default file extension to use for the image texture if no url is provided.
         */
        textureExtension?: string;
        /**
         * Extra XHR Settings specifically for the texture image file.
         */
        textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
        /**
         * The filename of an associated normal map. It uses the same path and url to load as the texture image.
         */
        normalMap?: string;
        /**
         * The absolute or relative URL to load the atlas data file from.
         */
        atlasURL?: string;
        /**
         * The default file extension to use for the atlas data if no url is provided.
         */
        atlasExtension?: string;
        /**
         * Extra XHR Settings specifically for the atlas data file.
         */
        atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type VideoFileConfig = {
        /**
         * The key to use for this file, or a file configuration object.
         */
        key: string | Phaser.Types.Loader.FileTypes.VideoFileConfig;
        /**
         * The absolute or relative URLs to load the video files from.
         */
        url?: string | string[];
        /**
         * The load event to listen for when _not_ loading as a blob. Either 'loadeddata', 'canplay' or 'canplaythrough'.
         */
        loadEvent?: string;
        /**
         * Load the video as a data blob, or via the Video element?
         */
        asBlob?: boolean;
        /**
         * Does the video have an audio track? If not you can enable auto-playing on it.
         */
        noAudio?: boolean;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

      type XMLFileConfig = {
        /**
         * The key of the file. Must be unique within both the Loader and the Text Cache.
         */
        key: string;
        /**
         * The absolute or relative URL to load the file from.
         */
        url?: string;
        /**
         * The default file extension to use if no url is provided.
         */
        extension?: string;
        /**
         * Extra XHR Settings specifically for this file.
         */
        xhrSettings?: Phaser.Types.Loader.XHRSettingsObject;
      };

    }

    type FileConfig = {
      /**
       * The file type string (image, json, etc) for sorting within the Loader.
       */
      type: string;
      /**
       * Unique cache key (unique within its file type)
       */
      key: string;
      /**
       * The URL of the file, not including baseURL.
       */
      url?: string;
      /**
       * The path of the file, not including the baseURL.
       */
      path?: string;
      /**
       * The default extension this file uses.
       */
      extension?: string;
      /**
       * The responseType to be used by the XHR request.
       */
      responseType?: XMLHttpRequestResponseType;
      /**
       * Custom XHR Settings specific to this file and merged with the Loader defaults.
       */
      xhrSettings?: Phaser.Types.Loader.XHRSettingsObject | false;
      /**
       * A config object that can be used by file types to store transitional data.
       */
      config?: any;
    };

    type XHRSettingsObject = {
      /**
       * The response type of the XHR request, i.e. `blob`, `text`, etc.
       */
      responseType: XMLHttpRequestResponseType;
      /**
       * Should the XHR request use async or not?
       */
      async?: boolean;
      /**
       * Optional username for the XHR request.
       */
      user?: string;
      /**
       * Optional password for the XHR request.
       */
      password?: string;
      /**
       * Optional XHR timeout value.
       */
      timeout?: number;
      /**
       * This value is used to populate the XHR `setRequestHeader` and is undefined by default.
       */
      headers?: object | undefined;
      /**
       * This value is used to populate the XHR `setRequestHeader` and is undefined by default.
       */
      header?: string | undefined;
      /**
       * This value is used to populate the XHR `setRequestHeader` and is undefined by default.
       */
      headerValue?: string | undefined;
      /**
       * This value is used to populate the XHR `setRequestHeader` and is undefined by default.
       */
      requestedWith?: string | undefined;
      /**
       * Provide a custom mime-type to use instead of the default.
       */
      overrideMimeType?: string | undefined;
      /**
       * The withCredentials property indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-site requests.
       */
      withCredentials?: boolean;
    };

  }

  namespace Math {
    type SinCosTable = {
      /**
       * The sine value.
       */
      sin: number;
      /**
       * The cosine value.
       */
      cos: number;
      /**
       * The length.
       */
      length: number;
    };

    type Vector2Like = {
      /**
       * The x component.
       */
      x?: number;
      /**
       * The y component.
       */
      y?: number;
    };

    type Vector3Like = {
      /**
       * The x component.
       */
      x?: number;
      /**
       * The y component.
       */
      y?: number;
      /**
       * The z component.
       */
      z?: number;
    };

    type Vector4Like = {
      /**
       * The x component.
       */
      x?: number;
      /**
       * The y component.
       */
      y?: number;
      /**
       * The z component.
       */
      z?: number;
      /**
       * The w component.
       */
      w?: number;
    };

  }

  namespace Physics {
    namespace Arcade {
      type ArcadeBodyBounds = {
        /**
         * The left edge.
         */
        x: number;
        /**
         * The upper edge.
         */
        y: number;
        /**
         * The right edge.
         */
        right: number;
        /**
         * The lower edge.
         */
        bottom: number;
      };

      type ArcadeBodyCollision = {
        /**
         * True if the Body is not colliding.
         */
        none: boolean;
        /**
         * True if the Body is colliding on its upper edge.
         */
        up: boolean;
        /**
         * True if the Body is colliding on its lower edge.
         */
        down: boolean;
        /**
         * True if the Body is colliding on its left edge.
         */
        left: boolean;
        /**
         * True if the Body is colliding on its right edge.
         */
        right: boolean;
      };

      /**
       * An Arcade Physics Collider Type.
       */
      type ArcadeColliderType = Phaser.GameObjects.GameObject | Phaser.GameObjects.Group | Phaser.Physics.Arcade.Sprite | Phaser.Physics.Arcade.Image | Phaser.Physics.Arcade.StaticGroup | Phaser.Physics.Arcade.Group | Phaser.Tilemaps.TilemapLayer | Phaser.GameObjects.GameObject[] | Phaser.Physics.Arcade.Sprite[] | Phaser.Physics.Arcade.Image[] | Phaser.Physics.Arcade.StaticGroup[] | Phaser.Physics.Arcade.Group[] | Phaser.Tilemaps.TilemapLayer[];

      type ArcadeWorldConfig = {
        /**
         * Sets {@link Phaser.Physics.Arcade.World#fps}.
         */
        fps?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#fixedStep}.
         */
        fixedStep?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#timeScale}.
         */
        timeScale?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#gravity}.
         */
        gravity?: Phaser.Types.Math.Vector2Like;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#bounds bounds.x}.
         */
        x?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#bounds bounds.y}.
         */
        y?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#bounds bounds.width}.
         */
        width?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#bounds bounds.height}.
         */
        height?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#checkCollision}.
         */
        checkCollision?: Phaser.Types.Physics.Arcade.CheckCollisionObject;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#OVERLAP_BIAS}.
         */
        overlapBias?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#TILE_BIAS}.
         */
        tileBias?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#forceX}.
         */
        forceX?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#isPaused}.
         */
        isPaused?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#debug}.
         */
        debug?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#defaults debugShowBody}.
         */
        debugShowBody?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#defaults debugShowStaticBody}.
         */
        debugShowStaticBody?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#defaults debugShowStaticBody}.
         */
        debugShowVelocity?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#defaults bodyDebugColor}.
         */
        debugBodyColor?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#defaults staticBodyDebugColor}.
         */
        debugStaticBodyColor?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#defaults velocityDebugColor}.
         */
        debugVelocityColor?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#maxEntries}.
         */
        maxEntries?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.World#useTree}.
         */
        useTree?: boolean;
        /**
         * If enabled, you need to call `World.update` yourself.
         */
        customUpdate?: boolean;
      };

      type ArcadeWorldDefaults = {
        /**
         * Set to `true` to render dynamic body outlines to the debug display.
         */
        debugShowBody: boolean;
        /**
         * Set to `true` to render static body outlines to the debug display.
         */
        debugShowStaticBody: boolean;
        /**
         * Set to `true` to render body velocity markers to the debug display.
         */
        debugShowVelocity: boolean;
        /**
         * The color of dynamic body outlines when rendered to the debug display.
         */
        bodyDebugColor: number;
        /**
         * The color of static body outlines when rendered to the debug display.
         */
        staticBodyDebugColor: number;
        /**
         * The color of the velocity markers when rendered to the debug display.
         */
        velocityDebugColor: number;
      };

      type ArcadeWorldTreeMinMax = {
        /**
         * The minimum x value used in RTree searches.
         */
        minX: number;
        /**
         * The minimum y value used in RTree searches.
         */
        minY: number;
        /**
         * The maximum x value used in RTree searches.
         */
        maxX: number;
        /**
         * The maximum y value used in RTree searches.
         */
        maxY: number;
      };

      type CheckCollisionObject = {
        /**
         * Will bodies collide with the top side of the world bounds?
         */
        up: boolean;
        /**
         * Will bodies collide with the bottom side of the world bounds?
         */
        down: boolean;
        /**
         * Will bodies collide with the left side of the world bounds?
         */
        left: boolean;
        /**
         * Will bodies collide with the right side of the world bounds?
         */
        right: boolean;
      };

      type GameObjectWithBody = Phaser.GameObjects.GameObject & {
        body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody;
      };

      type GameObjectWithDynamicBody = Phaser.GameObjects.GameObject & {
        body: Phaser.Physics.Arcade.Body;
      };

      type GameObjectWithStaticBody = Phaser.GameObjects.GameObject & {
        body: Phaser.Physics.Arcade.StaticBody;
      };

      type ImageWithDynamicBody = Phaser.Physics.Arcade.Image & {
        body: Phaser.Physics.Arcade.Body;
      };

      type ImageWithStaticBody = Phaser.Physics.Arcade.Image & {
        body: Phaser.Physics.Arcade.StaticBody;
      };

      type PhysicsGroupConfig = Phaser.Types.GameObjects.Group.GroupConfig & {
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#collideWorldBounds}.
         */
        collideWorldBounds?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#setBoundsRectangle setBoundsRectangle}.
         */
        customBoundsRectangle?: Phaser.Geom.Rectangle;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#acceleration acceleration.x}.
         */
        accelerationX?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#acceleration acceleration.y}.
         */
        accelerationY?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#allowDrag}.
         */
        allowDrag?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#allowGravity}.
         */
        allowGravity?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#allowRotation}.
         */
        allowRotation?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#bounce bounce.x}.
         */
        bounceX?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#bounce bounce.y}.
         */
        bounceY?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#drag drag.x}.
         */
        dragX?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#drag drag.y}.
         */
        dragY?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#enable enable}.
         */
        enable?: boolean;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#gravity gravity.x}.
         */
        gravityX?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#gravity gravity.y}.
         */
        gravityY?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#friction friction.x}.
         */
        frictionX?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#friction friction.y}.
         */
        frictionY?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#maxVelocity maxVelocity.x}.
         */
        maxVelocityX?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#maxVelocity maxVelocity.y}.
         */
        maxVelocityY?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#velocity velocity.x}.
         */
        velocityX?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#velocity velocity.y}.
         */
        velocityY?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#angularVelocity}.
         */
        angularVelocity?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#angularAcceleration}.
         */
        angularAcceleration?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#angularDrag}.
         */
        angularDrag?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#mass}.
         */
        mass?: number;
        /**
         * Sets {@link Phaser.Physics.Arcade.Body#immovable}.
         */
        immovable?: boolean;
      };

      type PhysicsGroupDefaults = {
        /**
         * As {@link Phaser.Physics.Arcade.Body#setCollideWorldBounds}.
         */
        setCollideWorldBounds: boolean;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setBoundsRectangle}.
         */
        setBoundsRectangle: Phaser.Geom.Rectangle;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setAccelerationX}.
         */
        setAccelerationX: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setAccelerationY}.
         */
        setAccelerationY: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setAllowDrag}.
         */
        setAllowDrag: boolean;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setAllowGravity}.
         */
        setAllowGravity: boolean;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setAllowRotation}.
         */
        setAllowRotation: boolean;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setBounceX}.
         */
        setBounceX: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setBounceY}.
         */
        setBounceY: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setDragX}.
         */
        setDragX: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setDragY}.
         */
        setDragY: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setEnable}.
         */
        setEnable: boolean;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setGravityX}.
         */
        setGravityX: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setGravityY}.
         */
        setGravityY: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setFrictionX}.
         */
        setFrictionX: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setFrictionY}.
         */
        setFrictionY: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setVelocityX}.
         */
        setVelocityX: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setVelocityY}.
         */
        setVelocityY: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setAngularVelocity}.
         */
        setAngularVelocity: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setAngularAcceleration}.
         */
        setAngularAcceleration: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setAngularDrag}.
         */
        setAngularDrag: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setMass}.
         */
        setMass: number;
        /**
         * As {@link Phaser.Physics.Arcade.Body#setImmovable}.
         */
        setImmovable: boolean;
      };

      type SpriteWithDynamicBody = Phaser.Physics.Arcade.Sprite & {
        body: Phaser.Physics.Arcade.Body;
      };

      type SpriteWithStaticBody = Phaser.Physics.Arcade.Sprite & {
        body: Phaser.Physics.Arcade.StaticBody;
      };

    }

    namespace Matter {
      type MatterBody = MatterJS.BodyType | Phaser.GameObjects.GameObject | Phaser.Physics.Matter.Image | Phaser.Physics.Matter.Sprite | Phaser.Physics.Matter.TileBody;

      type MatterBodyConfig = {
        /**
         * An arbitrary string-based name to help identify this body.
         */
        label?: string;
        /**
         * An array of bodies that make up this body. The first body in the array must always be a self reference to the current body instance. All bodies in the `parts` array together form a single rigid compound body.
         */
        parts?: MatterJS.BodyType[];
        /**
         * An object reserved for storing plugin-specific properties.
         */
        plugin?: any;
        /**
         * A number specifying the angle of the body, in radians.
         */
        angle?: number;
        /**
         * An array of `Vector` objects that specify the convex hull of the rigid body. These should be provided about the origin `(0, 0)`.
         */
        vertices?: Phaser.Types.Math.Vector2Like[];
        /**
         * A `Vector` that specifies the current world-space position of the body.
         */
        position?: Phaser.Types.Math.Vector2Like;
        /**
         * A `Vector` that specifies the force to apply in the current step. It is zeroed after every `Body.update`. See also `Body.applyForce`.
         */
        force?: Phaser.Types.Math.Vector2Like;
        /**
         * A `Number` that specifies the torque (turning force) to apply in the current step. It is zeroed after every `Body.update`.
         */
        torque?: number;
        /**
         * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
         */
        isSensor?: boolean;
        /**
         * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
         */
        isStatic?: boolean;
        /**
         * A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
         */
        sleepThreshold?: number;
        /**
         * A `Number` that defines the density of the body, that is its mass per unit area. If you pass the density via `Body.create` the `mass` property is automatically calculated for you based on the size (area) of the object. This is generally preferable to simply setting mass and allows for more intuitive definition of materials (e.g. rock has a higher density than wood).
         */
        density?: number;
        /**
         * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
         */
        restitution?: number;
        /**
         * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`. A value of `0` means that the body may slide indefinitely. A value of `1` means the body may come to a stop almost instantly after a force is applied.
         */
        friction?: number;
        /**
         * A `Number` that defines the static friction of the body (in the Coulomb friction model). A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used. The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary. This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
         */
        frictionStatic?: number;
        /**
         * A `Number` that defines the air friction of the body (air resistance). A value of `0` means the body will never slow as it moves through space. The higher the value, the faster a body slows when moving through space.
         */
        frictionAir?: number;
        /**
         * An `Object` that specifies the collision filtering properties of this body.
         */
        collisionFilter?: Phaser.Types.Physics.Matter.MatterCollisionFilter;
        /**
         * A `Number` that specifies a tolerance on how far a body is allowed to 'sink' or rotate into other bodies. Avoid changing this value unless you understand the purpose of `slop` in physics engines. The default should generally suffice, although very large bodies may require larger values for stable stacking.
         */
        slop?: number;
        /**
         * A `Number` that allows per-body time scaling, e.g. a force-field where bodies inside are in slow-motion, while others are at full speed.
         */
        timeScale?: number;
        /**
         * A number, or array of numbers, to chamfer the vertices of the body, or a full Chamfer configuration object.
         */
        chamfer?: number | number[] | Phaser.Types.Physics.Matter.MatterChamferConfig;
        /**
         * The radius of this body if a circle.
         */
        circleRadius?: number;
        /**
         * A `Number` that defines the mass of the body, although it may be more appropriate to specify the `density` property instead. If you modify this value, you must also modify the `body.inverseMass` property (`1 / mass`).
         */
        mass?: number;
        /**
         * A `Number` that defines the inverse mass of the body (`1 / mass`). If you modify this value, you must also modify the `body.mass` property.
         */
        inverseMass?: number;
        /**
         * A `Vector` that specifies the initial scale of the body.
         */
        scale?: Phaser.Types.Math.Vector2Like;
        /**
         * A `Vector` that scales the influence of World gravity when applied to this body.
         */
        gravityScale?: Phaser.Types.Math.Vector2Like;
        /**
         * A boolean that toggles if this body should ignore world gravity or not.
         */
        ignoreGravity?: boolean;
        /**
         * A boolean that toggles if this body should ignore pointer / mouse constraints or not.
         */
        ignorePointer?: boolean;
        /**
         * The Debug Render configuration object for this body.
         */
        render?: Phaser.Types.Physics.Matter.MatterBodyRenderConfig;
        /**
         * A callback that is invoked when this Body starts colliding with any other Body. You can register callbacks by providing a function of type `( pair: Matter.Pair) => void`.
         */
        onCollideCallback?: Function;
        /**
         * A callback that is invoked when this Body stops colliding with any other Body. You can register callbacks by providing a function of type `( pair: Matter.Pair) => void`.
         */
        onCollideEndCallback?: Function;
        /**
         * A callback that is invoked for the duration that this Body is colliding with any other Body. You can register callbacks by providing a function of type `( pair: Matter.Pair) => void`.
         */
        onCollideActiveCallback?: Function;
        /**
         * A collision callback dictionary used by the `Body.setOnCollideWith` function.
         */
        onCollideWith?: any;
      };

      type MatterBodyRenderConfig = {
        /**
         * Should this body be rendered by the Debug Renderer?
         */
        visible?: boolean;
        /**
         * The opacity of the body and all parts within it.
         */
        opacity?: number;
        /**
         * The color value of the fill when rendering this body.
         */
        fillColor?: number;
        /**
         * The opacity of the fill when rendering this body, a value between 0 and 1.
         */
        fillOpacity?: number;
        /**
         * The color value of the line stroke when rendering this body.
         */
        lineColor?: number;
        /**
         * The opacity of the line when rendering this body, a value between 0 and 1.
         */
        lineOpacity?: number;
        /**
         * If rendering lines, the thickness of the line.
         */
        lineThickness?: number;
        /**
         * Controls the offset between the body and the parent Game Object, if it has one.
         */
        sprite?: object;
        /**
         * The horizontal offset between the body and the parent Game Object texture, if it has one.
         */
        "sprite.xOffset"?: number;
        /**
         * The vertical offset between the body and the parent Game Object texture, if it has one.
         */
        "sprite.yOffset"?: number;
      };

      type MatterBodyTileOptions = {
        /**
         * Whether or not the newly created body should be made static. This defaults to true since typically tiles should not be moved.
         */
        isStatic?: boolean;
        /**
         * Whether or not to add the newly created body (or existing body if options.body is used) to the Matter world.
         */
        addToWorld?: boolean;
      };

      type MatterChamferConfig = {
        /**
         * A single number, or an array, to specify the radius for each vertex.
         */
        radius?: number | number[];
        /**
         * The quality of the chamfering. -1 means 'auto'.
         */
        quality?: number;
        /**
         * The minimum quality of the chamfering. The higher this value, the more vertices are created.
         */
        qualityMin?: number;
        /**
         * The maximum quality of the chamfering. The higher this value, the more vertices are created.
         */
        qualityMax?: number;
      };

      type MatterCollisionData = {
        /**
         * Have the pair collided or not?
         */
        collided: boolean;
        /**
         * A reference to the first body involved in the collision.
         */
        bodyA: MatterJS.BodyType;
        /**
         * A reference to the second body involved in the collision.
         */
        bodyB: MatterJS.BodyType;
        /**
         * A reference to the dominant axis body.
         */
        axisBody: MatterJS.BodyType;
        /**
         * The index of the dominant collision axis vector (edge normal)
         */
        axisNumber: number;
        /**
         * The depth of the collision on the minimum overlap.
         */
        depth: number;
        /**
         * A reference to the parent of Body A, or to Body A itself if it has no parent.
         */
        parentA: MatterJS.BodyType;
        /**
         * A reference to the parent of Body B, or to Body B itself if it has no parent.
         */
        parentB: MatterJS.BodyType;
        /**
         * The collision normal, facing away from Body A.
         */
        normal: MatterJS.Vector;
        /**
         * The tangent of the collision normal.
         */
        tangent: MatterJS.Vector;
        /**
         * The penetration distances between the two bodies.
         */
        penetration: MatterJS.Vector;
        /**
         * An array of support points, either exactly one or two points.
         */
        supports: MatterJS.Vector[];
        /**
         * The resulting inverse mass from the collision.
         */
        inverseMass: number;
        /**
         * The resulting friction from the collision.
         */
        friction: number;
        /**
         * The resulting static friction from the collision.
         */
        frictionStatic: number;
        /**
         * The resulting restitution from the collision.
         */
        restitution: number;
        /**
         * The resulting slop from the collision.
         */
        slop: number;
      };

      /**
       * An `Object` that specifies the collision filtering properties of this body.
       *
       * Collisions between two bodies will obey the following rules:
       * - If the two bodies have the same non-zero value of `collisionFilter.group`,
       *   they will always collide if the value is positive, and they will never collide
       *   if the value is negative.
       * - If the two bodies have different values of `collisionFilter.group` or if one
       *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
       *
       * Each body belongs to a collision category, given by `collisionFilter.category`. This
       * value is used as a bit field and the category should have only one bit set, meaning that
       * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
       * different collision categories available.
       *
       * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
       * the categories it collides with (the value is the bitwise AND value of all these categories).
       *
       * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
       * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
       * are both true.
       */
      type MatterCollisionFilter = {
        /**
         * A bit field that specifies the collision category this body belongs to. The category value should have only one bit set, for example `0x0001`. This means there are up to 32 unique collision categories available.
         */
        category?: number;
        /**
         * A bit mask that specifies the collision categories this body may collide with.
         */
        mask?: number;
        /**
         * An Integer `Number`, that specifies the collision group this body belongs to.
         */
        group?: number;
      };

      type MatterCollisionPair = {
        /**
         * The unique auto-generated collision pair id. A combination of the body A and B IDs.
         */
        id: string;
        /**
         * A reference to the first body involved in the collision.
         */
        bodyA: MatterJS.BodyType;
        /**
         * A reference to the second body involved in the collision.
         */
        bodyB: MatterJS.BodyType;
        /**
         * An array containing all of the active contacts between bodies A and B.
         */
        activeContacts: MatterJS.Vector[];
        /**
         * The amount of separation that occured between bodies A and B.
         */
        separation: number;
        /**
         * Is the collision still active or not?
         */
        isActive: boolean;
        /**
         * Has Matter determined the collision are being active yet?
         */
        confirmedActive: boolean;
        /**
         * Is either body A or B a sensor?
         */
        isSensor: boolean;
        /**
         * The timestamp when the collision pair was created.
         */
        timeCreated: number;
        /**
         * The timestamp when the collision pair was most recently updated.
         */
        timeUpdated: number;
        /**
         * The collision data object.
         */
        collision: Phaser.Types.Physics.Matter.MatterCollisionData;
        /**
         * The resulting inverse mass from the collision.
         */
        inverseMass: number;
        /**
         * The resulting friction from the collision.
         */
        friction: number;
        /**
         * The resulting static friction from the collision.
         */
        frictionStatic: number;
        /**
         * The resulting restitution from the collision.
         */
        restitution: number;
        /**
         * The resulting slop from the collision.
         */
        slop: number;
      };

      type MatterConstraintConfig = {
        /**
         * An arbitrary string-based name to help identify this constraint.
         */
        label?: string;
        /**
         * The first possible `Body` that this constraint is attached to.
         */
        bodyA?: MatterJS.BodyType;
        /**
         * The second possible `Body` that this constraint is attached to.
         */
        bodyB?: MatterJS.BodyType;
        /**
         * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
         */
        pointA?: Phaser.Types.Math.Vector2Like;
        /**
         * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
         */
        pointB?: Phaser.Types.Math.Vector2Like;
        /**
         * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`. A value of `1` means the constraint should be very stiff. A value of `0.2` means the constraint acts like a soft spring.
         */
        stiffness?: number;
        /**
         * A `Number` that specifies the angular stiffness of the constraint.
         */
        angularStiffness?: number;
        /**
         * The angleA of the constraint. If bodyA is set, the angle of bodyA is used instead.
         */
        angleA?: number;
        /**
         * The angleB of the constraint. If bodyB is set, the angle of bodyB is used instead.
         */
        angleB?: number;
        /**
         * A `Number` that specifies the damping of the constraint, i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation. Damping will only be apparent when the constraint also has a very low `stiffness`. A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation. A value of `0` means the constraint will apply no damping.
         */
        damping?: number;
        /**
         * A `Number` that specifies the target resting length of the constraint. It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
         */
        length?: number;
        /**
         * An object reserved for storing plugin-specific properties.
         */
        plugin?: any;
        /**
         * The Debug Render configuration object for this constraint.
         */
        render?: Phaser.Types.Physics.Matter.MatterConstraintRenderConfig;
      };

      type MatterConstraintRenderConfig = {
        /**
         * Should this constraint be rendered by the Debug Renderer?
         */
        visible?: boolean;
        /**
         * If this constraint has anchors, should they be rendered? Pin constraints never have anchors.
         */
        anchors?: boolean;
        /**
         * The color value of the line stroke when rendering this constraint.
         */
        lineColor?: number;
        /**
         * The opacity of the line when rendering this constraint, a value between 0 and 1.
         */
        lineOpacity?: number;
        /**
         * If rendering lines, the thickness of the line.
         */
        lineThickness?: number;
        /**
         * The size of the circles drawn when rendering pin constraints.
         */
        pinSize?: number;
        /**
         * The size of the circles drawn as the constraint anchors.
         */
        anchorSize?: number;
        /**
         * The color value of constraint anchors.
         */
        anchorColor?: number;
      };

      type MatterDebugConfig = {
        /**
         * Render all of the body axes?
         */
        showAxes?: boolean;
        /**
         * Render just a single body axis?
         */
        showAngleIndicator?: boolean;
        /**
         * The color of the body angle / axes lines.
         */
        angleColor?: number;
        /**
         * Render the broadphase grid?
         */
        showBroadphase?: boolean;
        /**
         * The color of the broadphase grid.
         */
        broadphaseColor?: number;
        /**
         * Render the bounds of the bodies in the world?
         */
        showBounds?: boolean;
        /**
         * The color of the body bounds.
         */
        boundsColor?: number;
        /**
         * Render the velocity of the bodies in the world?
         */
        showVelocity?: boolean;
        /**
         * The color of the body velocity line.
         */
        velocityColor?: number;
        /**
         * Render the collision points and normals for colliding pairs.
         */
        showCollisions?: boolean;
        /**
         * The color of the collision points.
         */
        collisionColor?: number;
        /**
         * Render lines showing the separation between bodies.
         */
        showSeparation?: boolean;
        /**
         * The color of the body separation line.
         */
        separationColor?: number;
        /**
         * Render the dynamic bodies in the world to the Graphics object?
         */
        showBody?: boolean;
        /**
         * Render the static bodies in the world to the Graphics object?
         */
        showStaticBody?: boolean;
        /**
         * When rendering bodies, render the internal edges as well?
         */
        showInternalEdges?: boolean;
        /**
         * Render the bodies using a fill color.
         */
        renderFill?: boolean;
        /**
         * Render the bodies using a line stroke.
         */
        renderLine?: boolean;
        /**
         * The color value of the fill when rendering dynamic bodies.
         */
        fillColor?: number;
        /**
         * The opacity of the fill when rendering dynamic bodies, a value between 0 and 1.
         */
        fillOpacity?: number;
        /**
         * The color value of the line stroke when rendering dynamic bodies.
         */
        lineColor?: number;
        /**
         * The opacity of the line when rendering dynamic bodies, a value between 0 and 1.
         */
        lineOpacity?: number;
        /**
         * If rendering lines, the thickness of the line.
         */
        lineThickness?: number;
        /**
         * The color value of the fill when rendering static bodies.
         */
        staticFillColor?: number;
        /**
         * The color value of the line stroke when rendering static bodies.
         */
        staticLineColor?: number;
        /**
         * Render any sleeping bodies (dynamic or static) in the world to the Graphics object?
         */
        showSleeping?: boolean;
        /**
         * The amount to multiply the opacity of sleeping static bodies by.
         */
        staticBodySleepOpacity?: number;
        /**
         * The color value of the fill when rendering sleeping dynamic bodies.
         */
        sleepFillColor?: number;
        /**
         * The color value of the line stroke when rendering sleeping dynamic bodies.
         */
        sleepLineColor?: number;
        /**
         * Render bodies or body parts that are flagged as being a sensor?
         */
        showSensors?: boolean;
        /**
         * The fill color when rendering body sensors.
         */
        sensorFillColor?: number;
        /**
         * The line color when rendering body sensors.
         */
        sensorLineColor?: number;
        /**
         * Render the position of non-static bodies?
         */
        showPositions?: boolean;
        /**
         * The size of the rectangle drawn when rendering the body position.
         */
        positionSize?: number;
        /**
         * The color value of the rectangle drawn when rendering the body position.
         */
        positionColor?: number;
        /**
         * Render all world constraints to the Graphics object?
         */
        showJoint?: boolean;
        /**
         * The color value of joints when `showJoint` is set.
         */
        jointColor?: number;
        /**
         * The line opacity when rendering joints, a value between 0 and 1.
         */
        jointLineOpacity?: number;
        /**
         * The line thickness when rendering joints.
         */
        jointLineThickness?: number;
        /**
         * The size of the circles drawn when rendering pin constraints.
         */
        pinSize?: number;
        /**
         * The color value of the circles drawn when rendering pin constraints.
         */
        pinColor?: number;
        /**
         * The color value of spring constraints.
         */
        springColor?: number;
        /**
         * The color value of constraint anchors.
         */
        anchorColor?: number;
        /**
         * The size of the circles drawn as the constraint anchors.
         */
        anchorSize?: number;
        /**
         * When rendering polygon bodies, render the convex hull as well?
         */
        showConvexHulls?: boolean;
        /**
         * The color value of hulls when `showConvexHulls` is set.
         */
        hullColor?: number;
      };

      type MatterRunnerConfig = {
        /**
         * A boolean that specifies if the runner should use a fixed timestep (otherwise it is variable). If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic). If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
         */
        isFixed?: boolean;
        /**
         * A number that specifies the frame rate in seconds. If you don't specify this, but do specify `delta`, those values set the fps rate.
         */
        fps?: number;
        /**
         * A number that specifies the time correction factor to apply to the update. This can help improve the accuracy of the simulation in cases where delta is changing between updates.
         */
        correction?: number;
        /**
         * The size of the delta smoothing array when `isFixed` is `false`.
         */
        deltaSampleSize?: number;
        /**
         * A number that specifies the time step between updates in milliseconds. If you set the `fps` property, this value is set based on that. If `isFixed` is set to `true`, then `delta` is fixed. If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
         */
        delta?: number;
        /**
         * A number that specifies the minimum time step between updates in milliseconds.
         */
        deltaMin?: number;
        /**
         * A number that specifies the maximum time step between updates in milliseconds.
         */
        deltaMax?: number;
      };

      type MatterSetBodyConfig = {
        /**
         * The shape type. Either `rectangle`, `circle`, `trapezoid`, `polygon`, `fromVertices`, `fromVerts` or `fromPhysicsEditor`.
         */
        type?: string;
        /**
         * The horizontal world position to place the body at.
         */
        x?: number;
        /**
         * The vertical world position to place the body at.
         */
        y?: number;
        /**
         * The width of the body.
         */
        width?: number;
        /**
         * The height of the body.
         */
        height?: number;
        /**
         * The radius of the body. Used by `circle` and `polygon` shapes.
         */
        radius?: number;
        /**
         * The max sizes of the body. Used by the `circle` shape.
         */
        maxSides?: number;
        /**
         * Used by the `trapezoid` shape. The slope of the trapezoid. 0 creates a rectangle, while 1 creates a triangle. Positive values make the top side shorter, while negative values make the bottom side shorter.
         */
        slope?: number;
        /**
         * Used by the `polygon` shape. The number of sides the polygon will have.
         */
        sides?: number;
        /**
         * Used by the `fromVerts` shape. The vertices data. Either a path string or an array of vertices.
         */
        verts?: string | any[];
        /**
         * Used by the `fromVerts` shape. Flag internal edges (coincident part edges)
         */
        flagInternal?: boolean;
        /**
         * Used by the `fromVerts` shape. Whether Matter.js will discard collinear edges (to improve performance).
         */
        removeCollinear?: number;
        /**
         * Used by the `fromVerts` shape. During decomposition discard parts that have an area less than this.
         */
        minimumArea?: number;
        /**
         * Should the new body be automatically added to the world?
         */
        addToWorld?: boolean;
      };

      type MatterTileOptions = {
        /**
         * An existing Matter body to be used instead of creating a new one.
         */
        body?: MatterJS.BodyType;
        /**
         * Whether or not the newly created body should be made static. This defaults to true since typically tiles should not be moved.
         */
        isStatic?: boolean;
        /**
         * Whether or not to add the newly created body (or existing body if options.body is used) to the Matter world.
         */
        addToWorld?: boolean;
      };

      type MatterWorldConfig = {
        /**
         * Sets {@link Phaser.Physics.Matter.World#gravity}. If `false` Gravity will be set to zero.
         */
        gravity?: Phaser.Types.Math.Vector2Like | boolean;
        /**
         * Should the world have bounds enabled by default?
         */
        setBounds?: object | boolean;
        /**
         * The x coordinate of the world bounds.
         */
        "setBounds.x"?: number;
        /**
         * The y coordinate of the world bounds.
         */
        "setBounds.y"?: number;
        /**
         * The width of the world bounds.
         */
        "setBounds.width"?: number;
        /**
         * The height of the world bounds.
         */
        "setBounds.height"?: number;
        /**
         * The thickness of the walls of the world bounds.
         */
        "setBounds.thickness"?: number;
        /**
         * Should the left-side world bounds wall be created?
         */
        "setBounds.left"?: boolean;
        /**
         * Should the right-side world bounds wall be created?
         */
        "setBounds.right"?: boolean;
        /**
         * Should the top world bounds wall be created?
         */
        "setBounds.top"?: boolean;
        /**
         * Should the bottom world bounds wall be created?
         */
        "setBounds.bottom"?: boolean;
        /**
         * The number of position iterations to perform each update. The higher the value, the higher quality the simulation will be at the expense of performance.
         */
        positionIterations?: number;
        /**
         * The number of velocity iterations to perform each update. The higher the value, the higher quality the simulation will be at the expense of performance.
         */
        velocityIterations?: number;
        /**
         * The number of constraint iterations to perform each update. The higher the value, the higher quality the simulation will be at the expense of performance.
         */
        constraintIterations?: number;
        /**
         * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module. Sleeping can improve stability and performance, but often at the expense of accuracy.
         */
        enableSleeping?: boolean;
        /**
         * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. It is incremented on every `Engine.update` by the given `delta` argument.
         */
        "timing.timestamp"?: number;
        /**
         * A `Number` that specifies the global scaling factor of time for all bodies. A value of `0` freezes the simulation. A value of `0.1` gives a slow-motion effect. A value of `1.2` gives a speed-up effect.
         */
        "timing.timeScale"?: number;
        /**
         * Should the Matter Attractor Plugin be enabled? An attractors plugin that makes it easy to apply continual forces on bodies. It's possible to simulate effects such as wind, gravity and magnetism.
         */
        "plugins.attractors"?: boolean;
        /**
         * Should the Matter Wrap Plugin be enabled? A coordinate wrapping plugin that automatically wraps the position of bodies such that they always stay within the given bounds. Upon crossing a boundary the body will appear on the opposite side of the bounds, while maintaining its velocity.
         */
        "plugins.wrap"?: boolean;
        /**
         * Should the Matter Collision Events Plugin be enabled?
         */
        "plugins.collisionevents"?: boolean;
        /**
         * Toggles if the world is enabled or not.
         */
        enabled?: boolean;
        /**
         * An optional Number that specifies the time correction factor to apply to the update.
         */
        correction?: number;
        /**
         * This function is called every time the core game loop steps, which is bound to the Request Animation Frame frequency unless otherwise modified.
         */
        getDelta?: Function;
        /**
         * Automatically call Engine.update every time the game steps.
         */
        autoUpdate?: boolean;
        /**
         * Sets the Resolver resting threshold property.
         */
        restingThresh?: number;
        /**
         * Sets the Resolver resting threshold tangent property.
         */
        restingThreshTangent?: number;
        /**
         * Sets the Resolver position dampen property.
         */
        positionDampen?: number;
        /**
         * Sets the Resolver position warming property.
         */
        positionWarming?: number;
        /**
         * Sets the Resolver friction normal multiplier property.
         */
        frictionNormalMultiplier?: number;
        /**
         * Controls the Matter Debug Rendering options. If a boolean it will use the default values, otherwise, specify a Debug Config object.
         */
        debug?: boolean | Phaser.Types.Physics.Matter.MatterDebugConfig;
        /**
         * Sets the Matter Runner options.
         */
        runner?: Phaser.Types.Physics.Matter.MatterRunnerConfig;
      };

    }

  }

  namespace Plugins {
    type CorePluginContainer = {
      /**
       * The unique name of this plugin in the core plugin cache.
       */
      key: string;
      /**
       * The plugin to be stored. Should be the source object, not instantiated.
       */
      plugin: Function;
      /**
       * If this plugin is to be injected into the Scene Systems, this is the property key map used.
       */
      mapping?: string;
      /**
       * Core Scene plugin or a Custom Scene plugin?
       */
      custom?: boolean;
    };

    type CustomPluginContainer = {
      /**
       * The unique name of this plugin in the custom plugin cache.
       */
      key: string;
      /**
       * The plugin to be stored. Should be the source object, not instantiated.
       */
      plugin: Function;
    };

    type GlobalPlugin = {
      /**
       * The unique name of this plugin within the plugin cache.
       */
      key: string;
      /**
       * An instance of the plugin.
       */
      plugin: Function;
      /**
       * Is the plugin active or not?
       */
      active?: boolean;
      /**
       * If this plugin is to be injected into the Scene Systems, this is the property key map used.
       */
      mapping?: string;
    };

  }

  namespace Renderer {
    namespace Snapshot {
      type SnapshotCallback = (snapshot: Phaser.Display.Color | HTMLImageElement)=>void;

      type SnapshotState = {
        /**
         * The function to call after the snapshot is taken.
         */
        callback: Phaser.Types.Renderer.Snapshot.SnapshotCallback;
        /**
         * The format of the image to create, usually `image/png` or `image/jpeg`.
         */
        type?: string;
        /**
         * The image quality, between 0 and 1. Used for image formats with lossy compression, such as `image/jpeg`.
         */
        encoderOptions?: number;
        /**
         * The x coordinate to start the snapshot from.
         */
        x?: number;
        /**
         * The y coordinate to start the snapshot from.
         */
        y?: number;
        /**
         * The width of the snapshot.
         */
        width?: number;
        /**
         * The height of the snapshot.
         */
        height?: number;
        /**
         * Is this a snapshot to get a single pixel, or an area?
         */
        getPixel?: boolean;
        /**
         * Is this snapshot grabbing from a frame buffer or a canvas?
         */
        isFramebuffer?: boolean;
        /**
         * The width of the frame buffer, if a frame buffer grab.
         */
        bufferWidth?: number;
        /**
         * The height of the frame buffer, if a frame buffer grab.
         */
        bufferHeight?: number;
      };

    }

    namespace WebGL {
      type RenderTargetConfig = {
        /**
         * A value between 0 and 1. Controls the size of this Render Target in relation to the Renderer. A value of 1 matches it. 0.5 makes the Render Target half the size of the renderer, etc.
         */
        scale?: number;
        /**
         * The minFilter mode of the texture. 0 is `LINEAR`, 1 is `NEAREST`.
         */
        minFilter?: number;
        /**
         * Controls if this Render Target is automatically cleared (via `gl.COLOR_BUFFER_BIT`) during the bind.
         */
        autoClear?: boolean;
      };

      type WebGLConst = {
        /**
         * The data type of the attribute, i.e. `gl.BYTE`, `gl.SHORT`, `gl.UNSIGNED_BYTE`, `gl.FLOAT`, etc.
         */
        enum: GLenum;
        /**
         * The size, in bytes, of the data type.
         */
        size: number;
      };

      type WebGLPipelineAttribute = {
        /**
         * The name of the attribute as defined in the vertex shader.
         */
        name: string;
        /**
         * The number of components in the attribute, i.e. 1 for a float, 2 for a vec2, 3 for a vec3, etc.
         */
        size: number;
        /**
         * The data type of the attribute. Either `gl.BYTE`, `gl.SHORT`, `gl.UNSIGNED_BYTE`, `gl.UNSIGNED_SHORT` or `gl.FLOAT`.
         */
        type: GLenum;
        /**
         * The offset, in bytes, of this attribute data in the vertex array. Equivalent to `offsetof(vertex, attrib)` in C.
         */
        offset: number;
        /**
         * Should the attribute data be normalized?
         */
        normalized: boolean;
        /**
         * You should set this to `false` by default. The pipeline will enable it on boot.
         */
        enabled: boolean;
        /**
         * You should set this to `-1` by default. The pipeline will set it on boot.
         */
        location: number;
      };

      type WebGLPipelineAttributeConfig = {
        /**
         * The name of the attribute as defined in the vertex shader.
         */
        name: string;
        /**
         * The number of components in the attribute, i.e. 1 for a float, 2 for a vec2, 3 for a vec3, etc.
         */
        size: number;
        /**
         * The data type of the attribute, one of the `WEBGL_CONST` values, i.e. `WEBGL_CONST.FLOAT`, `WEBGL_CONST.UNSIGNED_BYTE`, etc.
         */
        type: Phaser.Types.Renderer.WebGL.WebGLConst;
        /**
         * Should the attribute data be normalized?
         */
        normalized?: boolean;
      };

      type WebGLPipelineConfig = {
        /**
         * The Phaser.Game instance that owns this pipeline.
         */
        game: Phaser.Game;
        /**
         * The name of the pipeline.
         */
        name?: string;
        /**
         * How the primitives are rendered. The default value is GL_TRIANGLES. Here is the full list of rendering primitives: (https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants).
         */
        topology?: GLenum;
        /**
         * The source code, as a string, for the vertex shader. If you need to assign multiple shaders, see the `shaders` property.
         */
        vertShader?: string;
        /**
         * The source code, as a string, for the fragment shader. Can include `%count%` and `%forloop%` declarations for multi-texture support. If you need to assign multiple shaders, see the `shaders` property.
         */
        fragShader?: string;
        /**
         * The number of quads to hold in the batch. Defaults to `RenderConfig.batchSize`. This amount * 6 gives the vertex capacity.
         */
        batchSize?: number;
        /**
         * The size, in bytes, of a single entry in the vertex buffer. Defaults to Float32Array.BYTES_PER_ELEMENT * 6 + Uint8Array.BYTES_PER_ELEMENT * 4.
         */
        vertexSize?: number;
        /**
         * An optional Array or Typed Array of pre-calculated vertices data that is copied into the vertex data.
         */
        vertices?: number[] | Float32Array;
        /**
         * An array of shader attribute data. All shaders bound to this pipeline must use the same attributes.
         */
        attributes?: Phaser.Types.Renderer.WebGL.WebGLPipelineAttributeConfig[];
        /**
         * An array of shaders, all of which are created for this one pipeline. Uses the `vertShader`, `fragShader`, `attributes` and `uniforms` properties of this object as defaults.
         */
        shaders?: Phaser.Types.Renderer.WebGL.WebGLPipelineShaderConfig[];
        /**
         * Force the shader to use just a single sampler2d? Set for anything that extends the Single Pipeline.
         */
        forceZero?: boolean;
        /**
         * Create Render Targets for this pipeline. Can be a number, which determines the quantity, a boolean (sets quantity to 1), or an array of Render Target configuration objects.
         */
        renderTarget?: boolean | number | Phaser.Types.Renderer.WebGL.RenderTargetConfig[];
      };

      type WebGLPipelineShaderConfig = {
        /**
         * The name of the shader. Doesn't have to be unique, but makes shader look-up easier if it is.
         */
        name?: string;
        /**
         * The source code, as a string, for the vertex shader. If not given, uses the `Phaser.Types.Renderer.WebGL.WebGLPipelineConfig.vertShader` property instead.
         */
        vertShader?: string;
        /**
         * The source code, as a string, for the fragment shader. Can include `%count%` and `%forloop%` declarations for multi-texture support. If not given, uses the `Phaser.Types.Renderer.WebGL.WebGLPipelineConfig.fragShader` property instead.
         */
        fragShader?: string;
        /**
         * An array of shader attribute data. All shaders bound to this pipeline must use the same attributes.
         */
        attributes?: Phaser.Types.Renderer.WebGL.WebGLPipelineAttributeConfig[];
      };

      type WebGLPipelineUniformsConfig = {
        /**
         * The name of the uniform as defined in the shader.
         */
        name: string;
        /**
         * The location of the uniform.
         */
        location: number;
        /**
         * The first cached value of the uniform.
         */
        value1?: number;
        /**
         * The first cached value of the uniform.
         */
        value2?: number;
        /**
         * The first cached value of the uniform.
         */
        value3?: number;
        /**
         * The first cached value of the uniform.
         */
        value4?: number;
      };

      type WebGLTextureCompression = {
        /**
         * Indicates if ETC1 compression is supported on current device (mostly Android).
         */
        ETC1: object | null;
        /**
         * Indicates if PVRTC compression is supported on current device (mostly iOS).
         */
        PVRTC: object | null;
        /**
         * Indicates if S3TC compression is supported on current device.
         */
        S3TC: object | null;
      };

    }

  }

  namespace Scenes {
    type CreateSceneFromObjectConfig = {
      /**
       * The scene's init callback.
       */
      init?: Phaser.Types.Scenes.SceneInitCallback;
      /**
       * The scene's preload callback.
       */
      preload?: Phaser.Types.Scenes.ScenePreloadCallback;
      /**
       * The scene's create callback.
       */
      create?: Phaser.Types.Scenes.SceneCreateCallback;
      /**
       * The scene's update callback. See {@link Phaser.Scene#update}.
       */
      update?: Phaser.Types.Scenes.SceneUpdateCallback;
      /**
       * Any additional properties, which will be copied to the Scene after it's created (except `data` or `sys`).
       */
      extend?: any;
      /**
       * Any values, which will be merged into the Scene's Data Manager store.
       */
      "extend.data"?: any;
    };

    /**
     * Can be defined on your own Scenes. Use it to create your game objects.
     * This method is called by the Scene Manager when the scene starts, after `init()` and `preload()`.
     * If the LoaderPlugin started after `preload()`, then this method is called only after loading is complete.
     */
    type SceneCreateCallback = (this: Phaser.Scene, data: object)=>void;

    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts, before `preload()` and `create()`.
     */
    type SceneInitCallback = (this: Phaser.Scene, data: object)=>void;

    /**
     * Can be defined on your own Scenes. Use it to load assets.
     * This method is called by the Scene Manager, after `init()` and before `create()`, only if the Scene has a LoaderPlugin.
     * After this method completes, if the LoaderPlugin's queue isn't empty, the LoaderPlugin will start automatically.
     */
    type ScenePreloadCallback = (this: Phaser.Scene)=>void;

    type SceneTransitionConfig = {
      /**
       * The Scene key to transition to.
       */
      target: string;
      /**
       * The duration, in ms, for the transition to last.
       */
      duration?: number;
      /**
       * Will the Scene responsible for the transition be sent to sleep on completion (`true`), or stopped? (`false`)
       */
      sleep?: boolean;
      /**
       * Will the Scene responsible for the transition be removed from the Scene Manager after the transition completes?
       */
      remove?: boolean;
      /**
       * Will the Scenes Input system be able to process events while it is transitioning in or out?
       */
      allowInput?: boolean;
      /**
       * Move the target Scene to be above this one before the transition starts.
       */
      moveAbove?: boolean;
      /**
       * Move the target Scene to be below this one before the transition starts.
       */
      moveBelow?: boolean;
      /**
       * This callback is invoked every frame for the duration of the transition.
       */
      onUpdate?: Function;
      /**
       * The context in which the callback is invoked.
       */
      onUpdateScope?: any;
      /**
       * An object containing any data you wish to be passed to the target scene's init / create methods (if sleep is false) or to the target scene's wake event callback (if sleep is true).
       */
      data?: any;
    };

    type SceneUpdateCallback = (this: Phaser.Scene)=>void;

    type SettingsConfig = {
      /**
       * The unique key of this Scene. Must be unique within the entire Game instance.
       */
      key?: string;
      /**
       * Does the Scene start as active or not? An active Scene updates each step.
       */
      active?: boolean;
      /**
       * Does the Scene start as visible or not? A visible Scene renders each step.
       */
      visible?: boolean;
      /**
       * Files to be loaded before the Scene begins.
       */
      pack?: false | Phaser.Types.Loader.FileTypes.PackFileSection;
      /**
       * An optional Camera configuration object.
       */
      cameras?: Phaser.Types.Cameras.Scene2D.JSONCamera | Phaser.Types.Cameras.Scene2D.JSONCamera[];
      /**
       * Overwrites the default injection map for a scene.
       */
      map?: {[key: string]:  string};
      /**
       * Extends the injection map for a scene.
       */
      mapAdd?: {[key: string]:  string};
      /**
       * The physics configuration object for the Scene.
       */
      physics?: Phaser.Types.Core.PhysicsConfig;
      /**
       * The loader configuration object for the Scene.
       */
      loader?: Phaser.Types.Core.LoaderConfig;
      /**
       * The plugin configuration object for the Scene.
       */
      plugins?: false | any;
    };

    type SettingsObject = {
      /**
       * The current status of the Scene. Maps to the Scene constants.
       */
      status: number;
      /**
       * The unique key of this Scene. Unique within the entire Game instance.
       */
      key: string;
      /**
       * The active state of this Scene. An active Scene updates each step.
       */
      active: boolean;
      /**
       * The visible state of this Scene. A visible Scene renders each step.
       */
      visible: boolean;
      /**
       * Has the Scene finished booting?
       */
      isBooted: boolean;
      /**
       * Is the Scene in a state of transition?
       */
      isTransition: boolean;
      /**
       * The Scene this Scene is transitioning from, if set.
       */
      transitionFrom: Phaser.Scene;
      /**
       * The duration of the transition, if set.
       */
      transitionDuration: number;
      /**
       * Is this Scene allowed to receive input during transitions?
       */
      transitionAllowInput: boolean;
      /**
       * a data bundle passed to this Scene from the Scene Manager.
       */
      data: object;
      /**
       * Files to be loaded before the Scene begins.
       */
      pack: false | Phaser.Types.Loader.FileTypes.PackFileSection;
      /**
       * The Camera configuration object.
       */
      cameras: Phaser.Types.Cameras.Scene2D.JSONCamera | Phaser.Types.Cameras.Scene2D.JSONCamera[];
      /**
       * The Scene's Injection Map.
       */
      map: {[key: string]:  string};
      /**
       * The physics configuration object for the Scene.
       */
      physics: Phaser.Types.Core.PhysicsConfig;
      /**
       * The loader configuration object for the Scene.
       */
      loader: Phaser.Types.Core.LoaderConfig;
      /**
       * The plugin configuration object for the Scene.
       */
      plugins: false | any;
    };

  }

  namespace Sound {
    /**
     * Audio sprite sound type.
     */
    type AudioSpriteSound = {
      /**
       * Local reference to 'spritemap' object form json file generated by audiosprite tool.
       */
      spritemap: object;
    };

    /**
     * A Audio Data object.
     *
     * You can pass an array of these objects to the WebAudioSoundManager `decodeAudio` method to have it decode
     * them all at once.
     */
    type DecodeAudioConfig = {
      /**
       * The string-based key to be used to reference the decoded audio in the audio cache.
       */
      key: string;
      /**
       * The audio data, either a base64 encoded string, an audio media-type data uri, or an ArrayBuffer instance.
       */
      data: ArrayBuffer | string;
    };

    type EachActiveSoundCallback = (manager: Phaser.Sound.BaseSoundManager, sound: Phaser.Sound.BaseSound, index: number, sounds: Phaser.Sound.BaseSound[])=>void;

    /**
     * Config object containing various sound settings.
     */
    type SoundConfig = {
      /**
       * Boolean indicating whether the sound should be muted or not.
       */
      mute?: boolean;
      /**
       * A value between 0 (silence) and 1 (full volume).
       */
      volume?: number;
      /**
       * Defines the speed at which the sound should be played.
       */
      rate?: number;
      /**
       * Represents detuning of sound in [cents](https://en.wikipedia.org/wiki/Cent_%28music%29).
       */
      detune?: number;
      /**
       * Position of playback for this sound, in seconds.
       */
      seek?: number;
      /**
       * Whether or not the sound or current sound marker should loop.
       */
      loop?: boolean;
      /**
       * Time, in seconds, that should elapse before the sound actually starts its playback.
       */
      delay?: number;
      /**
       * A value between -1 (full left pan) and 1 (full right pan). 0 means no pan.
       */
      pan?: number;
    };

    /**
     * Marked section of a sound represented by name, and optionally start time, duration, and config object.
     */
    type SoundMarker = {
      /**
       * Unique identifier of a sound marker.
       */
      name: string;
      /**
       * Sound position offset at witch playback should start.
       */
      start?: number;
      /**
       * Playback duration of this marker.
       */
      duration?: number;
      /**
       * An optional config object containing default marker settings.
       */
      config?: Phaser.Types.Sound.SoundConfig;
    };

  }

  namespace Textures {
    /**
     * An object containing the position and color data for a single pixel in a CanvasTexture.
     */
    type PixelConfig = {
      /**
       * The x-coordinate of the pixel.
       */
      x: number;
      /**
       * The y-coordinate of the pixel.
       */
      y: number;
      /**
       * The color of the pixel, not including the alpha channel.
       */
      color: number;
      /**
       * The alpha of the pixel, between 0 and 1.
       */
      alpha: number;
    };

    type SpriteSheetConfig = {
      /**
       * The fixed width of each frame.
       */
      frameWidth: number;
      /**
       * The fixed height of each frame. If not set it will use the frameWidth as the height.
       */
      frameHeight?: number;
      /**
       * Skip a number of frames. Useful when there are multiple sprite sheets in one Texture.
       */
      startFrame?: number;
      /**
       * The total number of frames to extract from the Sprite Sheet. The default value of -1 means "extract all frames".
       */
      endFrame?: number;
      /**
       * If the frames have been drawn with a margin, specify the amount here.
       */
      margin?: number;
      /**
       * If the frames have been drawn with spacing between them, specify the amount here.
       */
      spacing?: number;
    };

    type SpriteSheetFromAtlasConfig = {
      /**
       * The key of the Texture Atlas in which this Sprite Sheet can be found.
       */
      atlas: string;
      /**
       * The key of the Texture Atlas Frame in which this Sprite Sheet can be found.
       */
      frame: string;
      /**
       * The fixed width of each frame.
       */
      frameWidth: number;
      /**
       * The fixed height of each frame. If not set it will use the frameWidth as the height.
       */
      frameHeight?: number;
      /**
       * Skip a number of frames. Useful when there are multiple sprite sheets in one Texture.
       */
      startFrame?: number;
      /**
       * The total number of frames to extract from the Sprite Sheet. The default value of -1 means "extract all frames".
       */
      endFrame?: number;
      /**
       * If the frames have been drawn with a margin, specify the amount here.
       */
      margin?: number;
      /**
       * If the frames have been drawn with spacing between them, specify the amount here.
       */
      spacing?: number;
    };

  }

  namespace Tilemaps {
    type CreateFromObjectLayerConfig = {
      /**
       * A unique Object ID to convert.
       */
      id?: number;
      /**
       * An Object GID to convert.
       */
      gid?: number;
      /**
       * An Object Name to convert.
       */
      name?: string;
      /**
       * A custom class type to convert the objects in to.
       */
      classType?: Phaser.GameObjects.GameObject;
      /**
       * A Scene reference, passed to the Game Objects constructors.
       */
      scene?: Phaser.Scene;
      /**
       * Optional Container to which the Game Objects are added.
       */
      container?: Phaser.GameObjects.Container;
      /**
       * Optional key of a Texture to be used, as stored in the Texture Manager, or a Texture instance.
       */
      key?: string | Phaser.Textures.Texture;
      /**
       * Optional name or index of the frame within the Texture.
       */
      frame?: string | number;
    };

    type DebugStyleOptions = {
      /**
       * Color to use for drawing a filled rectangle at
       * non-colliding tile locations. If set to null, non-colliding tiles will not be drawn.
       */
      "styleConfig.tileColor"?: Phaser.Display.Color;
      /**
       * Color to use for drawing a filled
       * rectangle at colliding tile locations. If set to null, colliding tiles will not be drawn.
       */
      "styleConfig.collidingTileColor"?: Phaser.Display.Color;
      /**
       * Color to use for drawing a line at interesting
       * tile faces. If set to null, interesting tile faces will not be drawn.
       */
      "styleConfig.faceColor"?: Phaser.Display.Color;
    };

    type FilteringOptions = {
      /**
       * If true, only return tiles that don't have -1 for an index.
       */
      isNotEmpty?: boolean;
      /**
       * If true, only return tiles that collide on at least one side.
       */
      isColliding?: boolean;
      /**
       * If true, only return tiles that have at least one interesting face.
       */
      hasInterestingFace?: boolean;
    };

    type GIDData = {
      /**
       * The Tiled GID.
       */
      gid: number;
      /**
       * Horizontal flip flag.
       */
      flippedHorizontal: boolean;
      /**
       * Vertical flip flag.
       */
      flippedVertical: boolean;
      /**
       * Diagonal flip flag.
       */
      flippedAntiDiagonal: boolean;
      /**
       * Amount of rotation.
       */
      rotation: number;
      /**
       * Is flipped?
       */
      flipped: boolean;
    };

    type LayerDataConfig = {
      /**
       * The name of the layer, if specified in Tiled.
       */
      name?: string;
      /**
       * The x offset of where to draw from the top left.
       */
      x?: number;
      /**
       * The y offset of where to draw from the top left.
       */
      y?: number;
      /**
       * The width of the layer in tiles.
       */
      width?: number;
      /**
       * The height of the layer in tiles.
       */
      height?: number;
      /**
       * The pixel width of the tiles.
       */
      tileWidth?: number;
      /**
       * The pixel height of the tiles.
       */
      tileHeight?: number;
      /**
       * The base tile width.
       */
      baseTileWidth?: number;
      /**
       * The base tile height.
       */
      baseTileHeight?: number;
      /**
       * The width in pixels of the entire layer.
       */
      widthInPixels?: number;
      /**
       * The height in pixels of the entire layer.
       */
      heightInPixels?: number;
      /**
       * The alpha value of the layer.
       */
      alpha?: number;
      /**
       * Is the layer visible or not?
       */
      visible?: boolean;
      /**
       * Layer specific properties (can be specified in Tiled)
       */
      properties?: object[];
      /**
       * Tile ID index map.
       */
      indexes?: any[];
      /**
       * Tile Collision ID index map.
       */
      collideIndexes?: any[];
      /**
       * An array of callbacks.
       */
      callbacks?: any[];
      /**
       * An array of physics bodies.
       */
      bodies?: any[];
      /**
       * An array of the tile data indexes.
       */
      data?: any[];
      /**
       * A reference to the Tilemap layer that owns this data.
       */
      tilemapLayer?: Phaser.Tilemaps.TilemapLayer;
    };

    type MapDataConfig = {
      /**
       * The key in the Phaser cache that corresponds to the loaded tilemap data.
       */
      name?: string;
      /**
       * The width of the entire tilemap.
       */
      width?: number;
      /**
       * The height of the entire tilemap.
       */
      height?: number;
      /**
       * The width of the tiles.
       */
      tileWidth?: number;
      /**
       * The height of the tiles.
       */
      tileHeight?: number;
      /**
       * The width in pixels of the entire tilemap.
       */
      widthInPixels?: number;
      /**
       * The height in pixels of the entire tilemap.
       */
      heightInPixels?: number;
      /**
       * The format of the Tilemap, as defined in Tiled.
       */
      format?: number;
      /**
       * The orientation of the map data (i.e. orthogonal, isometric, hexagonal), default 'orthogonal'.
       */
      orientation?: string;
      /**
       * Determines the draw order of tilemap. Default is right-down.
       */
      renderOrder?: string;
      /**
       * The version of Tiled the map uses.
       */
      version?: number;
      /**
       * Map specific properties (can be specified in Tiled).
       */
      properties?: number;
      /**
       * The layers of the tilemap.
       */
      layers?: Phaser.Tilemaps.LayerData[];
      /**
       * An array with all the layers configured to the MapData.
       */
      images?: any[];
      /**
       * An array of Tiled Image Layers.
       */
      objects?: object;
      /**
       * An object of Tiled Object Layers.
       */
      collision?: object;
      /**
       * The tilesets the map uses.
       */
      tilesets?: Phaser.Tilemaps.Tileset[];
      /**
       * The collection of images the map uses(specified in Tiled).
       */
      imageCollections?: any[];
      /**
       * Array of Tile instances.
       */
      tiles?: any[];
    };

    type ObjectLayerConfig = {
      /**
       * The name of the Object Layer.
       */
      name?: string;
      /**
       * The opacity of the layer, between 0 and 1.
       */
      opacity?: number;
      /**
       * The custom properties defined on the Object Layer, keyed by their name.
       */
      properties?: any;
      /**
       * The type of each custom property defined on the Object Layer, keyed by its name.
       */
      propertytypes?: any;
      /**
       * The type of the layer, which should be `objectgroup`.
       */
      type?: string;
      /**
       * Whether the layer is shown (`true`) or hidden (`false`).
       */
      visible?: boolean;
      /**
       * An array of all objects on this Object Layer.
       */
      objects?: any[];
    };

    type StyleConfig = {
      /**
       * Color to use for drawing a filled rectangle at non-colliding tile locations. If set to null, non-colliding tiles will not be drawn.
       */
      tileColor?: Phaser.Display.Color | number | null;
      /**
       * Color to use for drawing a filled rectangle at colliding tile locations. If set to null, colliding tiles will not be drawn.
       */
      collidingTileColor?: Phaser.Display.Color | number | null;
      /**
       * Color to use for drawing a line at interesting tile faces. If set to null, interesting tile faces will not be drawn.
       */
      faceColor?: Phaser.Display.Color | number | null;
    };

    type TiledObject = {
      /**
       * The unique object ID.
       */
      id: number;
      /**
       * The name this object was assigned in Tiled.
       */
      name: string;
      /**
       * The string type of this instance, as assigned in Tiled. Tiled supports inheriting instance types from tilesets; in that case, the type will be set in the tile's data, but will be `''` here; use the `gid` to fetch the tile data or properties.
       */
      type: string;
      /**
       * The visible state of this object.
       */
      visible?: boolean;
      /**
       * The horizontal position of this object, in pixels, relative to the tilemap.
       */
      x?: number;
      /**
       * The vertical position of this object, in pixels, relative to the tilemap.
       */
      y?: number;
      /**
       * The width of this object, in pixels.
       */
      width?: number;
      /**
       * The height of this object, in pixels.
       */
      height?: number;
      /**
       * The rotation of the object in clockwise degrees.
       */
      rotation?: number;
      /**
       * Custom properties object.
       */
      properties?: any;
      /**
       * Only set if of type 'tile'.
       */
      gid?: number;
      /**
       * Only set if a tile object. The horizontal flip value.
       */
      flippedHorizontal?: boolean;
      /**
       * Only set if a tile object. The vertical flip value.
       */
      flippedVertical?: boolean;
      /**
       * Only set if a tile object. The diagonal flip value.
       */
      flippedAntiDiagonal?: boolean;
      /**
       * Only set if a polyline object. An array of objects corresponding to points, where each point has an `x` property and a `y` property.
       */
      polyline?: Phaser.Types.Math.Vector2Like[];
      /**
       * Only set if a polygon object. An array of objects corresponding to points, where each point has an `x` property and a `y` property.
       */
      polygon?: Phaser.Types.Math.Vector2Like[];
      /**
       * Only set if a text object. Contains the text objects properties.
       */
      text?: any;
      /**
       * Only set, and set to `true`, if a rectangle object.
       */
      rectangle?: boolean;
      /**
       * Only set, and set to `true`, if a ellipse object.
       */
      ellipse?: boolean;
      /**
       * Only set, and set to `true`, if a point object.
       */
      point?: boolean;
    };

    type TilemapConfig = {
      /**
       * The key in the Phaser cache that corresponds to the loaded tilemap data.
       */
      key?: string;
      /**
       * Instead of loading from the cache, you can also load directly from a 2D array of tile indexes.
       */
      data?: number[][];
      /**
       * The width of a tile in pixels.
       */
      tileWidth?: number;
      /**
       * The height of a tile in pixels.
       */
      tileHeight?: number;
      /**
       * The width of the map in tiles.
       */
      width?: number;
      /**
       * The height of the map in tiles.
       */
      height?: number;
      /**
       * Controls how empty tiles, tiles with an index of -1,
       * in the map data are handled. If `true`, empty locations will get a value of `null`. If `false`,
       * empty location will get a Tile object with an index of -1. If you've a large sparsely populated
       * map and the tile data doesn't need to change then setting this value to `true` will help with
       * memory consumption. However if your map is small or you need to update the tiles dynamically,
       * then leave the default value set.
       */
      insertNull?: boolean;
    };

  }

  namespace Time {
    type TimerEventConfig = {
      /**
       * The delay after which the Timer Event should fire, in milliseconds.
       */
      delay?: number;
      /**
       * The total number of times the Timer Event will repeat before finishing.
       */
      repeat?: number;
      /**
       * `true` if the Timer Event should repeat indefinitely.
       */
      loop?: boolean;
      /**
       * The callback which will be called when the Timer Event fires.
       */
      callback?: Function;
      /**
       * The scope (`this` object) with which to invoke the `callback`.
       */
      callbackScope?: any;
      /**
       * Additional arguments to be passed to the `callback`.
       */
      args?: any[];
      /**
       * The scale of the elapsed time.
       */
      timeScale?: number;
      /**
       * The initial elapsed time in milliseconds. Useful if you want a long duration with repeat, but for the first loop to fire quickly.
       */
      startAt?: number;
      /**
       * `true` if the Timer Event should be paused.
       */
      paused?: boolean;
    };

  }

  namespace Tweens {
    type TweenConfigDefaults = {
      /**
       * The object, or an array of objects, to run the tween on.
       */
      targets: object | object[];
      /**
       * The number of milliseconds to delay before the tween will start.
       */
      delay?: number;
      /**
       * The duration of the tween in milliseconds.
       */
      duration?: number;
      /**
       * The easing equation to use for the tween.
       */
      ease?: string;
      /**
       * Optional easing parameters.
       */
      easeParams?: any[];
      /**
       * The number of milliseconds to hold the tween for before yoyo'ing.
       */
      hold?: number;
      /**
       * The number of times to repeat the tween.
       */
      repeat?: number;
      /**
       * The number of milliseconds to pause before a tween will repeat.
       */
      repeatDelay?: number;
      /**
       * Should the tween complete, then reverse the values incrementally to get back to the starting tween values? The reverse tweening will also take `duration` milliseconds to complete.
       */
      yoyo?: boolean;
      /**
       * Horizontally flip the target of the Tween when it completes (before it yoyos, if set to do so). Only works for targets that support the `flipX` property.
       */
      flipX?: boolean;
      /**
       * Vertically flip the target of the Tween when it completes (before it yoyos, if set to do so). Only works for targets that support the `flipY` property.
       */
      flipY?: boolean;
    };

    /**
     * A Tween Event.
     */
    type Event = string;

    type GetActiveCallback = (target: any, key: string, value: number, targetIndex: number, totalTargets: number, tween: Phaser.Tweens.Tween)=>void;

    type GetEndCallback = (target: any, key: string, value: number, targetIndex: number, totalTargets: number, tween: Phaser.Tweens.Tween)=>void;

    type GetStartCallback = (target: any, key: string, value: number, targetIndex: number, totalTargets: number, tween: Phaser.Tweens.Tween)=>void;

    type NumberTweenBuilderConfig = {
      /**
       * The start number.
       */
      from?: number;
      /**
       * The end number.
       */
      to?: number;
      /**
       * The number of milliseconds to delay before the tween will start.
       */
      delay?: number;
      /**
       * The duration of the tween in milliseconds.
       */
      duration?: number;
      /**
       * The easing equation to use for the tween.
       */
      ease?: string | Function;
      /**
       * Optional easing parameters.
       */
      easeParams?: any[];
      /**
       * The number of milliseconds to hold the tween for before yoyo'ing.
       */
      hold?: number;
      /**
       * The number of times to repeat the tween.
       */
      repeat?: number;
      /**
       * The number of milliseconds to pause before a tween will repeat.
       */
      repeatDelay?: number;
      /**
       * Should the tween complete, then reverse the values incrementally to get back to the starting tween values? The reverse tweening will also take `duration` milliseconds to complete.
       */
      yoyo?: boolean;
      /**
       * Used when the Tween is part of a Timeline.
       */
      offset?: string | number | Function | object | any[];
      /**
       * The time the tween will wait before the onComplete event is dispatched once it has completed, in ms.
       */
      completeDelay?: string | number | Function | object | any[];
      /**
       * The number of times the tween will repeat. (A value of 1 means the tween will play twice, as it repeated once.) The first loop starts after every property tween has completed once.
       */
      loop?: string | number | Function | object | any[];
      /**
       * The time the tween will pause before starting either a yoyo or returning to the start for a repeat.
       */
      loopDelay?: string | number | Function | object | any[];
      /**
       * Does the tween start in a paused state (true) or playing (false)?
       */
      paused?: boolean;
      /**
       * Use frames or milliseconds?
       */
      useFrames?: boolean;
      /**
       * Scope (this) for the callbacks. The default scope is the tween.
       */
      callbackScope?: any;
      /**
       * A function to call when the tween completes.
       */
      onComplete?: Phaser.Types.Tweens.TweenOnCompleteCallback;
      /**
       * Additional parameters to pass to `onComplete`.
       */
      onCompleteParams?: any[];
      /**
       * Scope (this) for `onComplete`.
       */
      onCompleteScope?: any;
      /**
       * A function to call each time the tween loops.
       */
      onLoop?: Phaser.Types.Tweens.TweenOnLoopCallback;
      /**
       * Additional parameters to pass to `onLoop`.
       */
      onLoopParams?: any[];
      /**
       * Scope (this) for `onLoop`.
       */
      onLoopScope?: any;
      /**
       * A function to call each time the tween repeats. Called once per property per target.
       */
      onRepeat?: Phaser.Types.Tweens.TweenOnRepeatCallback;
      /**
       * Additional parameters to pass to `onRepeat`.
       */
      onRepeatParams?: any[];
      /**
       * Scope (this) for `onRepeat`.
       */
      onRepeatScope?: any;
      /**
       * A function to call when the tween starts.
       */
      onStart?: Phaser.Types.Tweens.TweenOnStartCallback;
      /**
       * Additional parameters to pass to `onStart`.
       */
      onStartParams?: any[];
      /**
       * Scope (this) for `onStart`.
       */
      onStartScope?: any;
      /**
       * A function to call when the tween is stopped.
       */
      onStop?: Phaser.Types.Tweens.TweenOnStopCallback;
      /**
       * Additional parameters to pass to `onStop`.
       */
      onStopParams?: any[];
      /**
       * Scope (this) for `onStop`.
       */
      onStopScope?: any;
      /**
       * A function to call each time the tween steps. Called once per property per target.
       */
      onUpdate?: Phaser.Types.Tweens.TweenOnUpdateCallback;
      /**
       * Additional parameters to pass to `onUpdate`.
       */
      onUpdateParams?: any[];
      /**
       * Scope (this) for `onUpdate`.
       */
      onUpdateScope?: any;
      /**
       * A function to call each time the tween yoyos. Called once per property per target.
       */
      onYoyo?: Phaser.Types.Tweens.TweenOnYoyoCallback;
      /**
       * Additional parameters to pass to `onYoyo`.
       */
      onYoyoParams?: any[];
      /**
       * Scope (this) for `onYoyo`.
       */
      onYoyoScope?: any;
    };

    type StaggerConfig = {
      /**
       * The value to start the stagger from. Can be used as a way to offset the stagger while still using a range for the value.
       */
      start?: number;
      /**
       * An ease to apply across the staggered values. Can either be a string, such as 'sine.inout', or a function.
       */
      ease?: string | Function;
      /**
       * The index to start the stagger from. Can be the strings `first`, `last` or `center`, or an integer representing the stagger position.
       */
      from?: string | number;
      /**
       * Set the stagger to run across a grid by providing an array where element 0 is the width of the grid and element 1 is the height. Combine with the 'from' property to control direction.
       */
      grid?: number[];
    };

    type TimelineBuilderConfig = {
      /**
       * An array of tween configuration objects to create and add into the new Timeline. If this doesn't exist or is empty, the Timeline will start off paused and none of the other configuration settings will be read. If it's a function, it will be called and its return value will be used as the array.
       */
      tweens?: Phaser.Types.Tweens.TweenBuilderConfig[] | object[] | Function;
      /**
       * An array (or function which returns one) of default targets to which to apply the Timeline. Each individual Tween configuration can override this value.
       */
      targets?: any;
      /**
       * If specified, each Tween in the Timeline will get an equal portion of this duration, usually in milliseconds, by default. Each individual Tween configuration can override the Tween's duration.
       */
      totalDuration?: number;
      /**
       * If `totalDuration` is not specified, the default duration, usually in milliseconds, of each Tween which will be created. Each individual Tween configuration can override the Tween's duration.
       */
      duration?: number;
      /**
       * The number of milliseconds to delay before the tween will start. Each individual Tween configuration can override this value.
       */
      delay?: number;
      /**
       * Optional easing parameters. Each individual Tween configuration can override this value.
       */
      easeParams?: any[];
      /**
       * The easing equation to use for each tween. Each individual Tween configuration can override this value.
       */
      ease?: string | Function;
      /**
       * The number of milliseconds to hold each tween before yoyo'ing. Each individual Tween configuration can override this value.
       */
      hold?: number;
      /**
       * The number of times to repeat each tween. Each individual Tween configuration can override this value.
       */
      repeat?: number;
      /**
       * The number of milliseconds to pause before each tween will repeat. Each individual Tween configuration can override this value.
       */
      repeatDelay?: number;
      /**
       * Should each tween complete, then reverse the values incrementally to get back to the starting tween values? The reverse tweening will also take `duration` milliseconds to complete. Each individual Tween configuration can override this value.
       */
      yoyo?: boolean;
      /**
       * Horizontally flip the target of the Tween when it completes (before it yoyos, if set to do so). Only works for targets that support the `flipX` property. Each individual Tween configuration can override this value.
       */
      flipX?: boolean;
      /**
       * Vertically flip the target of the Tween when it completes (before it yoyos, if set to do so). Only works for targets that support the `flipY` property. Each individual Tween configuration can override this value.
       */
      flipY?: boolean;
      /**
       * If specified, the time to wait, usually in milliseconds, before the Timeline completes.
       */
      completeDelay?: number | Function | object | any[];
      /**
       * How many times the Timeline should loop, or -1 to loop indefinitely.
       */
      loop?: number | Function | object | any[];
      /**
       * The time, usually in milliseconds, between each loop.
       */
      loopDelay?: number | Function | object | any[];
      /**
       * If `true`, the Timeline will start paused.
       */
      paused?: boolean;
      /**
       * If `true`, all duration in the Timeline will be in frames instead of milliseconds.
       */
      useFrames?: boolean;
      /**
       * The default scope (`this` value) to use for each callback registered by the Timeline Builder. If not specified, the Timeline itself will be used.
       */
      callbackScope?: any;
      /**
       * If specified, the `onStart` callback for the Timeline, called every time it starts playing.
       */
      onStart?: Phaser.Types.Tweens.TimelineOnStartCallback;
      /**
       * The scope (`this` value) to use for the `onStart` callback. If not specified, the `callbackScope` will be used.
       */
      onStartScope?: any;
      /**
       * Additional arguments to pass to the `onStart` callback. The Timeline will always be the first argument.
       */
      onStartParams?: any[];
      /**
       * If specified, the `onUpdate` callback for the Timeline, called every frame it's active, regardless of its Tweens.
       */
      onUpdate?: Phaser.Types.Tweens.TimelineOnUpdateCallback;
      /**
       * The scope (`this` value) to use for the `onUpdate` callback. If not specified, the `callbackScope` will be used.
       */
      onUpdateScope?: any;
      /**
       * Additional arguments to pass to the `onUpdate` callback. The Timeline will always be the first argument.
       */
      onUpdateParams?: any[];
      /**
       * If specified, the `onLoop` callback for the Timeline, called every time it loops.
       */
      onLoop?: Phaser.Types.Tweens.TimelineOnLoopCallback;
      /**
       * The scope (`this` value) to use for the `onLoop` callback. If not specified, the `callbackScope` will be used.
       */
      onLoopScope?: any;
      /**
       * Additional arguments to pass to the `onLoop` callback. The Timeline will always be the first argument.
       */
      onLoopParams?: any[];
      /**
       * If specified, the `onYoyo` callback for the Timeline, called every time it yoyos.
       */
      onYoyo?: Phaser.Types.Tweens.TimelineOnYoyoCallback;
      /**
       * The scope (`this` value) to use for the `onYoyo` callback. If not specified, the `callbackScope` will be used.
       */
      onYoyoScope?: any;
      /**
       * Additional arguments to pass to the `onYoyo` callback. The first argument will always be `null`, while the Timeline will always be the second argument.
       */
      onYoyoParams?: any[];
      /**
       * If specified, the `onComplete` callback for the Timeline, called after it completes.
       */
      onComplete?: Phaser.Types.Tweens.TimelineOnCompleteCallback;
      /**
       * The scope (`this` value) to use for the `onComplete` callback. If not specified, the `callbackScope` will be used.
       */
      onCompleteScope?: any;
      /**
       * Additional arguments to pass to the `onComplete` callback. The Timeline will always be the first argument.
       */
      onCompleteParams?: any[];
    };

    type TimelineOnCompleteCallback = (timeline: Phaser.Tweens.Timeline, ...param: any[])=>void;

    type TimelineOnLoopCallback = (timeline: Phaser.Tweens.Timeline, ...param: any[])=>void;

    type TimelineOnStartCallback = (timeline: Phaser.Tweens.Timeline, ...param: any[])=>void;

    type TimelineOnUpdateCallback = (timeline: Phaser.Tweens.Timeline, ...param: any[])=>void;

    type TimelineOnYoyoCallback = (timeline: Phaser.Tweens.Timeline, ...param: any[])=>void;

    type TweenBuilderConfig = {
      /**
       * The object, or an array of objects, to run the tween on.
       */
      targets: any;
      /**
       * The number of milliseconds to delay before the tween will start.
       */
      delay?: number | Function;
      /**
       * The duration of the tween in milliseconds.
       */
      duration?: number;
      /**
       * The easing equation to use for the tween.
       */
      ease?: string | Function;
      /**
       * Optional easing parameters.
       */
      easeParams?: any[];
      /**
       * The number of milliseconds to hold the tween for before yoyo'ing.
       */
      hold?: number;
      /**
       * The number of times each property tween repeats.
       */
      repeat?: number;
      /**
       * The number of milliseconds to pause before a repeat.
       */
      repeatDelay?: number;
      /**
       * Should the tween complete, then reverse the values incrementally to get back to the starting tween values? The reverse tweening will also take `duration` milliseconds to complete.
       */
      yoyo?: boolean;
      /**
       * Horizontally flip the target of the Tween when it completes (before it yoyos, if set to do so). Only works for targets that support the `flipX` property.
       */
      flipX?: boolean;
      /**
       * Vertically flip the target of the Tween when it completes (before it yoyos, if set to do so). Only works for targets that support the `flipY` property.
       */
      flipY?: boolean;
      /**
       * Used when the Tween is part of a Timeline.
       */
      offset?: string | number | Function | object | any[];
      /**
       * The time the tween will wait before the onComplete event is dispatched once it has completed, in ms.
       */
      completeDelay?: string | number | Function | object | any[];
      /**
       * The number of times the tween will repeat. (A value of 1 means the tween will play twice, as it repeated once.) The first loop starts after every property tween has completed once.
       */
      loop?: string | number | Function | object | any[];
      /**
       * The time the tween will pause before starting either a yoyo or returning to the start for a repeat.
       */
      loopDelay?: string | number | Function | object | any[];
      /**
       * Does the tween start in a paused state (true) or playing (false)?
       */
      paused?: boolean;
      /**
       * The properties to tween.
       */
      props?: {[key: string]:  (number|string|Phaser.Types.Tweens.GetEndCallback|Phaser.Types.Tweens.TweenPropConfig)};
      /**
       * Use frames or milliseconds?
       */
      useFrames?: boolean;
      /**
       * Scope (this) for the callbacks. The default scope is the tween.
       */
      callbackScope?: any;
      /**
       * A function to call when the tween completes.
       */
      onComplete?: Phaser.Types.Tweens.TweenOnCompleteCallback;
      /**
       * Additional parameters to pass to `onComplete`.
       */
      onCompleteParams?: any[];
      /**
       * Scope (this) for `onComplete`.
       */
      onCompleteScope?: any;
      /**
       * A function to call each time the tween loops.
       */
      onLoop?: Phaser.Types.Tweens.TweenOnLoopCallback;
      /**
       * Additional parameters to pass to `onLoop`.
       */
      onLoopParams?: any[];
      /**
       * Scope (this) for `onLoop`.
       */
      onLoopScope?: any;
      /**
       * A function to call each time the tween repeats. Called once per property per target.
       */
      onRepeat?: Phaser.Types.Tweens.TweenOnRepeatCallback;
      /**
       * Additional parameters to pass to `onRepeat`.
       */
      onRepeatParams?: any[];
      /**
       * Scope (this) for `onRepeat`.
       */
      onRepeatScope?: any;
      /**
       * A function to call when the tween starts playback, after any delays have expired.
       */
      onStart?: Phaser.Types.Tweens.TweenOnStartCallback;
      /**
       * Additional parameters to pass to `onStart`.
       */
      onStartParams?: any[];
      /**
       * Scope (this) for `onStart`.
       */
      onStartScope?: any;
      /**
       * A function to call when the tween is stopped.
       */
      onStop?: Phaser.Types.Tweens.TweenOnStopCallback;
      /**
       * Additional parameters to pass to `onStop`.
       */
      onStopParams?: any[];
      /**
       * Scope (this) for `onStop`.
       */
      onStopScope?: any;
      /**
       * A function to call each time the tween steps. Called once per property per target.
       */
      onUpdate?: Phaser.Types.Tweens.TweenOnUpdateCallback;
      /**
       * Additional parameters to pass to `onUpdate`.
       */
      onUpdateParams?: any[];
      /**
       * Scope (this) for `onUpdate`.
       */
      onUpdateScope?: any;
      /**
       * A function to call each time the tween yoyos. Called once per property per target.
       */
      onYoyo?: Phaser.Types.Tweens.TweenOnYoyoCallback;
      /**
       * Additional parameters to pass to `onYoyo`.
       */
      onYoyoParams?: any[];
      /**
       * Scope (this) for `onYoyo`.
       */
      onYoyoScope?: any;
      /**
       * A function to call when the tween becomes active within the Tween Manager.
       */
      onActive?: Phaser.Types.Tweens.TweenOnActiveCallback;
      /**
       * Additional parameters to pass to `onActive`.
       */
      onActiveParams?: any[];
      /**
       * Scope (this) for `onActive`.
       */
      onActiveScope?: any;
    };

    type TweenDataConfig = {
      /**
       * The target to tween.
       */
      target: any;
      /**
       * The target index within the Tween targets array.
       */
      index: number;
      /**
       * The property of the target being tweened.
       */
      key: string;
      /**
       * If not null, is invoked _immediately_ as soon as the TweenData is running, and is set on the target property.
       */
      getActiveValue: Phaser.Types.Tweens.GetActiveCallback;
      /**
       * The returned value sets what the property will be at the END of the Tween.
       */
      getEndValue: Phaser.Types.Tweens.GetEndCallback;
      /**
       * The returned value sets what the property will be at the START of the Tween.
       */
      getStartValue: Phaser.Types.Tweens.GetStartCallback;
      /**
       * The ease function this tween uses.
       */
      ease: Function;
      /**
       * Duration of the tween in ms/frames, excludes time for yoyo or repeats.
       */
      duration?: number;
      /**
       * The total calculated duration of this TweenData (based on duration, repeat, delay and yoyo)
       */
      totalDuration?: number;
      /**
       * Time in ms/frames before tween will start.
       */
      delay?: number;
      /**
       * Cause the tween to return back to its start value after hold has expired.
       */
      yoyo?: boolean;
      /**
       * Time in ms/frames the tween will pause before running the yoyo or starting a repeat.
       */
      hold?: number;
      /**
       * Number of times to repeat the tween. The tween will always run once regardless, so a repeat value of '1' will play the tween twice.
       */
      repeat?: number;
      /**
       * Time in ms/frames before the repeat will start.
       */
      repeatDelay?: number;
      /**
       * Automatically call toggleFlipX when the TweenData yoyos or repeats
       */
      flipX?: boolean;
      /**
       * Automatically call toggleFlipY when the TweenData yoyos or repeats
       */
      flipY?: boolean;
      /**
       * Between 0 and 1 showing completion of this TweenData.
       */
      progress?: number;
      /**
       * Delta counter
       */
      elapsed?: number;
      /**
       * How many repeats are left to run?
       */
      repeatCounter?: number;
      /**
       * The property value at the start of the ease.
       */
      start?: number;
      /**
       * The current propety value.
       */
      current?: number;
      /**
       * The previous property value.
       */
      previous?: number;
      /**
       * The property value at the end of the ease.
       */
      end?: number;
      /**
       * Time duration 1.
       */
      t1?: number;
      /**
       * Time duration 2.
       */
      t2?: number;
      /**
       * LoadValue generation functions.
       */
      gen?: Phaser.Types.Tweens.TweenDataGenConfig;
      /**
       * TWEEN_CONST.CREATED
       */
      state?: number;
    };

    type TweenDataGenConfig = {
      /**
       * Time in ms/frames before tween will start.
       */
      delay: Function;
      /**
       * Duration of the tween in ms/frames, excludes time for yoyo or repeats.
       */
      duration: Function;
      /**
       * Time in ms/frames the tween will pause before running the yoyo or starting a repeat.
       */
      hold: Function;
      /**
       * Number of times to repeat the tween. The tween will always run once regardless, so a repeat value of '1' will play the tween twice.
       */
      repeat: Function;
      /**
       * Time in ms/frames before the repeat will start.
       */
      repeatDelay: Function;
    };

    type TweenOnActiveCallback = (tween: Phaser.Tweens.Tween, target: any, ...param: any[])=>void;

    type TweenOnCompleteCallback = (tween: Phaser.Tweens.Tween, targets: any[], ...param: any[])=>void;

    type TweenOnLoopCallback = (tween: Phaser.Tweens.Tween, targets: any[], ...param: any[])=>void;

    type TweenOnRepeatCallback = (tween: Phaser.Tweens.Tween, target: any, ...param: any[])=>void;

    type TweenOnStartCallback = (tween: Phaser.Tweens.Tween, targets: any[], ...param: any[])=>void;

    type TweenOnStopCallback = (tween: Phaser.Tweens.Tween, targets: any[], ...param: any[])=>void;

    type TweenOnUpdateCallback = (tween: Phaser.Tweens.Tween, target: any, ...param: any[])=>void;

    type TweenOnYoyoCallback = (tween: Phaser.Tweens.Tween, target: any, ...param: any[])=>void;

    type TweenPropConfig = {
      /**
       * What the property will be at the END of the Tween.
       */
      value?: number | string | Phaser.Types.Tweens.GetEndCallback | Phaser.Types.Tweens.TweenPropConfig;
      /**
       * What the property will be set to immediately when this tween becomes active.
       */
      getActive?: Phaser.Types.Tweens.GetActiveCallback;
      /**
       * What the property will be at the END of the Tween.
       */
      getEnd?: Phaser.Types.Tweens.GetEndCallback;
      /**
       * What the property will be at the START of the Tween.
       */
      getStart?: Phaser.Types.Tweens.GetStartCallback;
      /**
       * The ease function this tween uses.
       */
      ease?: string | Function;
      /**
       * Time in ms/frames before tween will start.
       */
      delay?: number;
      /**
       * Duration of the tween in ms/frames.
       */
      duration?: number;
      /**
       * Determines whether the tween should return back to its start value after hold has expired.
       */
      yoyo?: boolean;
      /**
       * Time in ms/frames the tween will pause before repeating or returning to its starting value if yoyo is set to true.
       */
      hold?: number;
      /**
       * Number of times to repeat the tween. The tween will always run once regardless, so a repeat value of '1' will play the tween twice.
       */
      repeat?: number;
      /**
       * Time in ms/frames before the repeat will start.
       */
      repeatDelay?: number;
      /**
       * Should toggleFlipX be called when yoyo or repeat happens?
       */
      flipX?: boolean;
      /**
       * Should toggleFlipY be called when yoyo or repeat happens?
       */
      flipY?: boolean;
    };

  }

}