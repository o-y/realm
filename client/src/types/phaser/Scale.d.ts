namespace Phaser.Scale {
  /**
   * Phaser Scale Manager constants for centering the game canvas.
   */
  enum Center {
    /**
     * The game canvas is not centered within the parent by Phaser.
     * You can still center it yourself via CSS.
     */
    NO_CENTER,
    /**
     * The game canvas is centered both horizontally and vertically within the parent.
     * To do this, the parent has to have a bounds that can be calculated and not be empty.
     *
     * Centering is achieved by setting the margin left and top properties of the
     * game canvas, and does not factor in any other CSS styles you may have applied.
     */
    CENTER_BOTH,
    /**
     * The game canvas is centered horizontally within the parent.
     * To do this, the parent has to have a bounds that can be calculated and not be empty.
     *
     * Centering is achieved by setting the margin left and top properties of the
     * game canvas, and does not factor in any other CSS styles you may have applied.
     */
    CENTER_HORIZONTALLY,
    /**
     * The game canvas is centered both vertically within the parent.
     * To do this, the parent has to have a bounds that can be calculated and not be empty.
     *
     * Centering is achieved by setting the margin left and top properties of the
     * game canvas, and does not factor in any other CSS styles you may have applied.
     */
    CENTER_VERTICALLY,
  }

  /**
   * Phaser Scale Manager constants for centering the game canvas.
   *
   * To find out what each mode does please see [Phaser.Scale.Center]{@link Phaser.Scale.Center}.
   */
  type CenterType = Phaser.Scale.Center;

  /**
   * Phaser Scale Manager constants for orientation.
   */
  enum Orientation {
    /**
     * A landscape orientation.
     */
    LANDSCAPE,
    /**
     * A portrait orientation.
     */
    PORTRAIT,
  }

  /**
   * Phaser Scale Manager constants for orientation.
   *
   * To find out what each mode does please see [Phaser.Scale.Orientation]{@link Phaser.Scale.Orientation}.
   */
  type OrientationType = Phaser.Scale.Orientation;

  /**
   * Phaser Scale Manager constants for the different scale modes available.
   */
  enum ScaleModes {
    /**
     * No scaling happens at all. The canvas is set to the size given in the game config and Phaser doesn't change it
     * again from that point on. If you change the canvas size, either via CSS, or directly via code, then you need
     * to call the Scale Managers `resize` method to give the new dimensions, or input events will stop working.
     */
    NONE,
    /**
     * The height is automatically adjusted based on the width.
     */
    WIDTH_CONTROLS_HEIGHT,
    /**
     * The width is automatically adjusted based on the height.
     */
    HEIGHT_CONTROLS_WIDTH,
    /**
     * The width and height are automatically adjusted to fit inside the given target area,
     * while keeping the aspect ratio. Depending on the aspect ratio there may be some space
     * inside the area which is not covered.
     */
    FIT,
    /**
     * The width and height are automatically adjusted to make the size cover the entire target
     * area while keeping the aspect ratio. This may extend further out than the target size.
     */
    ENVELOP,
    /**
     * The Canvas is resized to fit all available _parent_ space, regardless of aspect ratio.
     */
    RESIZE,
  }

  /**
   * Phaser Scale Manager constants for the different scale modes available.
   *
   * To find out what each mode does please see [Phaser.Scale.ScaleModes]{@link Phaser.Scale.ScaleModes}.
   */
  type ScaleModeType = Phaser.Scale.ScaleModes;

  /**
   * Phaser Scale Manager constants for zoom modes.
   */
  enum Zoom {
    /**
     * The game canvas will not be zoomed by Phaser.
     */
    NO_ZOOM,
    /**
     * The game canvas will be 2x zoomed by Phaser.
     */
    ZOOM_2X,
    /**
     * The game canvas will be 4x zoomed by Phaser.
     */
    ZOOM_4X,
    /**
     * Calculate the zoom value based on the maximum multiplied game size that will
     * fit into the parent, or browser window if no parent is set.
     */
    MAX_ZOOM,
  }

  /**
   * Phaser Scale Manager constants for zoom modes.
   *
   * To find out what each mode does please see [Phaser.Scale.Zoom]{@link Phaser.Scale.Zoom}.
   */
  type ZoomType = Phaser.Scale.Zoom;

  namespace Events {
    /**
     * The Scale Manager has successfully entered fullscreen mode.
     */
    const ENTER_FULLSCREEN: any;

    /**
     * The Scale Manager tried to enter fullscreen mode but failed.
     */
    const FULLSCREEN_FAILED: any;

    /**
     * The Scale Manager tried to enter fullscreen mode, but it is unsupported by the browser.
     */
    const FULLSCREEN_UNSUPPORTED: any;

    /**
     * The Scale Manager was in fullscreen mode, but has since left, either directly via game code,
     * or via a user gestured, such as pressing the ESC key.
     */
    const LEAVE_FULLSCREEN: any;

    /**
     * The Scale Manager Orientation Change Event.
     *
     * This event is dispatched whenever the Scale Manager detects an orientation change event from the browser.
     */
    const ORIENTATION_CHANGE: any;

    /**
     * The Scale Manager Resize Event.
     *
     * This event is dispatched whenever the Scale Manager detects a resize event from the browser.
     * It sends three parameters to the callback, each of them being Size components. You can read
     * the `width`, `height`, `aspectRatio` and other properties of these components to help with
     * scaling your own game content.
     */
    const RESIZE: any;

  }

  /**
   * The Scale Manager handles the scaling, resizing and alignment of the game canvas.
   *
   * The way scaling is handled is by setting the game canvas to a fixed size, which is defined in the
   * game configuration. You also define the parent container in the game config. If no parent is given,
   * it will default to using the document body. The Scale Manager will then look at the available space
   * within the _parent_ and scale the canvas accordingly. Scaling is handled by setting the canvas CSS
   * width and height properties, leaving the width and height of the canvas element itself untouched.
   * Scaling is therefore achieved by keeping the core canvas the same size and 'stretching'
   * it via its CSS properties. This gives the same result and speed as using the `transform-scale` CSS
   * property, without the need for browser prefix handling.
   *
   * The calculations for the scale are heavily influenced by the bounding parent size, which is the computed
   * dimensions of the canvas's parent. The CSS rules of the parent element play an important role in the
   * operation of the Scale Manager. For example, if the parent has no defined width or height, then actions
   * like auto-centering will fail to achieve the required result. The Scale Manager works in tandem with the
   * CSS you set-up on the page hosting your game, rather than taking control of it.
   *
   * #### Parent and Display canvas containment guidelines:
   *
   * - Style the Parent element (of the game canvas) to control the Parent size and thus the games size and layout.
   *
   * - The Parent element's CSS styles should _effectively_ apply maximum (and minimum) bounding behavior.
   *
   * - The Parent element should _not_ apply a padding as this is not accounted for.
   *   If a padding is required apply it to the Parent's parent or apply a margin to the Parent.
   *   If you need to add a border, margin or any other CSS around your game container, then use a parent element and
   *   apply the CSS to this instead, otherwise you'll be constantly resizing the shape of the game container.
   *
   * - The Display canvas layout CSS styles (i.e. margins, size) should not be altered / specified as
   *   they may be updated by the Scale Manager.
   *
   * #### Scale Modes
   *
   * The way the scaling is handled is determined by the `scaleMode` property. The default is `NONE`,
   * which prevents Phaser from scaling or touching the canvas, or its parent, at all. In this mode, you are
   * responsible for all scaling. The other scaling modes afford you automatic scaling.
   *
   * If you wish to scale your game so that it always fits into the available space within the parent, you
   * should use the scale mode `FIT`. Look at the documentation for other scale modes to see what options are
   * available. Here is a basic config showing how to set this scale mode:
   *
   * ```javascript
   * scale: {
   *     parent: 'yourgamediv',
   *     mode: Phaser.Scale.FIT,
   *     width: 800,
   *     height: 600
   * }
   * ```
   *
   * Place the `scale` config object within your game config.
   *
   * If you wish for the canvas to be resized directly, so that the canvas itself fills the available space
   * (i.e. it isn't scaled, it's resized) then use the `RESIZE` scale mode. This will give you a 1:1 mapping
   * of canvas pixels to game size. In this mode CSS isn't used to scale the canvas, it's literally adjusted
   * to fill all available space within the parent. You should be extremely careful about the size of the
   * canvas you're creating when doing this, as the larger the area, the more work the GPU has to do and it's
   * very easy to hit fill-rate limits quickly.
   *
   * For complex, custom-scaling requirements, you should probably consider using the `RESIZE` scale mode,
   * with your own limitations in place re: canvas dimensions and managing the scaling with the game scenes
   * yourself. For the vast majority of games, however, the `FIT` mode is likely to be the most used.
   *
   * Please appreciate that the Scale Manager cannot perform miracles. All it does is scale your game canvas
   * as best it can, based on what it can infer from its surrounding area. There are all kinds of environments
   * where it's up to you to guide and help the canvas position itself, especially when built into rendering
   * frameworks like React and Vue. If your page requires meta tags to prevent user scaling gestures, or such
   * like, then it's up to you to ensure they are present in the html.
   *
   * #### Centering
   *
   * You can also have the game canvas automatically centered. Again, this relies heavily on the parent being
   * properly configured and styled, as the centering offsets are based entirely on the available space
   * within the parent element. Centering is disabled by default, or can be applied horizontally, vertically,
   * or both. Here's an example:
   *
   * ```javascript
   * scale: {
   *     parent: 'yourgamediv',
   *     autoCenter: Phaser.Scale.CENTER_BOTH,
   *     width: 800,
   *     height: 600
   * }
   * ```
   *
   * #### Fullscreen API
   *
   * If the browser supports it, you can send your game into fullscreen mode. In this mode, the game will fill
   * the entire display, removing all browser UI and anything else present on the screen. It will remain in this
   * mode until your game either disables it, or until the user tabs out or presses ESCape if on desktop. It's a
   * great way to achieve a desktop-game like experience from the browser, but it does require a modern browser
   * to handle it. Some mobile browsers also support this.
   */
  class ScaleManager extends Phaser.Events.EventEmitter {
    /**
     *
     * @param game A reference to the Phaser.Game instance.
     */
    constructor(game: Phaser.Game);

    /**
     * A reference to the Phaser.Game instance.
     */
    readonly game: Phaser.Game;

    /**
     * A reference to the HTML Canvas Element that Phaser uses to render the game.
     */
    canvas: HTMLCanvasElement;

    /**
     * The DOM bounds of the canvas element.
     */
    canvasBounds: Phaser.Geom.Rectangle;

    /**
     * The parent object of the Canvas. Often a div, or the browser window, or nothing in non-browser environments.
     *
     * This is set in the Game Config as the `parent` property. If undefined (or just not present), it will default
     * to use the document body. If specifically set to `null` Phaser will ignore all parent operations.
     */
    parent: any;

    /**
     * Is the parent element the browser window?
     */
    parentIsWindow: boolean;

    /**
     * The Parent Size component.
     */
    parentSize: Phaser.Structs.Size;

    /**
     * The Game Size component.
     *
     * The un-modified game size, as requested in the game config (the raw width / height),
     * as used for world bounds, cameras, etc
     */
    gameSize: Phaser.Structs.Size;

    /**
     * The Base Size component.
     *
     * The modified game size, which is the auto-rounded gameSize, used to set the canvas width and height
     * (but not the CSS style)
     */
    baseSize: Phaser.Structs.Size;

    /**
     * The Display Size component.
     *
     * The size used for the canvas style, factoring in the scale mode, parent and other values.
     */
    displaySize: Phaser.Structs.Size;

    /**
     * The game scale mode.
     */
    scaleMode: Phaser.Scale.ScaleModeType;

    /**
     * The game zoom factor.
     *
     * This value allows you to multiply your games base size by the given zoom factor.
     * This is then used when calculating the display size, even in `NONE` situations.
     * If you don't want Phaser to touch the canvas style at all, this value should be 1.
     *
     * Can also be set to `MAX_ZOOM` in which case the zoom value will be derived based
     * on the game size and available space within the parent.
     */
    zoom: number;

    /**
     * Internal flag set when the game zoom factor is modified.
     */
    readonly _resetZoom: boolean;

    /**
     * The scale factor between the baseSize and the canvasBounds.
     */
    displayScale: Phaser.Math.Vector2;

    /**
     * If set, the canvas sizes will be automatically passed through Math.floor.
     * This results in rounded pixel display values, which is important for performance on legacy
     * and low powered devices, but at the cost of not achieving a 'perfect' fit in some browser windows.
     */
    autoRound: boolean;

    /**
     * Automatically center the canvas within the parent? The different centering modes are:
     *
     * 1. No centering.
     * 2. Center both horizontally and vertically.
     * 3. Center horizontally.
     * 4. Center vertically.
     *
     * Please be aware that in order to center the game canvas, you must have specified a parent
     * that has a size set, or the canvas parent is the document.body.
     */
    autoCenter: Phaser.Scale.CenterType;

    /**
     * The current device orientation.
     *
     * Orientation events are dispatched via the Device Orientation API, typically only on mobile browsers.
     */
    orientation: Phaser.Scale.OrientationType;

    /**
     * A reference to the Device.Fullscreen object.
     */
    fullscreen: Phaser.Device.Fullscreen;

    /**
     * The DOM Element which is sent into fullscreen mode.
     */
    fullscreenTarget: any;

    /**
     * The dirty state of the Scale Manager.
     * Set if there is a change between the parent size and the current size.
     */
    dirty: boolean;

    /**
     * How many milliseconds should elapse before checking if the browser size has changed?
     *
     * Most modern browsers dispatch a 'resize' event, which the Scale Manager will listen for.
     * However, older browsers fail to do this, or do it consistently, so we fall back to a
     * more traditional 'size check' based on a time interval. You can control how often it is
     * checked here.
     */
    resizeInterval: number;

    /**
     * Called _before_ the canvas object is created and added to the DOM.
     */
    protected preBoot(): void;

    /**
     * The Boot handler is called by Phaser.Game when it first starts up.
     * The renderer is available by now and the canvas has been added to the DOM.
     */
    protected boot(): void;

    /**
     * Parses the game configuration to set-up the scale defaults.
     * @param config The Game configuration object.
     */
    protected parseConfig(config: Phaser.Types.Core.GameConfig): void;

    /**
     * Determines the parent element of the game canvas, if any, based on the game configuration.
     * @param config The Game configuration object.
     */
    getParent(config: Phaser.Types.Core.GameConfig): void;

    /**
     * Calculates the size of the parent bounds and updates the `parentSize` component, if the canvas has a dom parent.
     */
    getParentBounds(): boolean;

    /**
     * Attempts to lock the orientation of the web browser using the Screen Orientation API.
     *
     * This API is only available on modern mobile browsers.
     * See https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation for details.
     * @param orientation The orientation you'd like to lock the browser in. Should be an API string such as 'landscape', 'landscape-primary', 'portrait', etc.
     */
    lockOrientation(orientation: string): boolean;

    /**
     * This method will set the size of the Parent Size component, which is used in scaling
     * and centering calculations. You only need to call this method if you have explicitly
     * disabled the use of a parent in your game config, but still wish to take advantage of
     * other Scale Manager features.
     * @param width The new width of the parent.
     * @param height The new height of the parent.
     */
    setParentSize(width: number, height: number): this;

    /**
     * This method will set a new size for your game.
     *
     * It should only be used if you're looking to change the base size of your game and are using
     * one of the Scale Manager scaling modes, i.e. `FIT`. If you're using `NONE` and wish to
     * change the game and canvas size directly, then please use the `resize` method instead.
     * @param width The new width of the game.
     * @param height The new height of the game.
     */
    setGameSize(width: number, height: number): this;

    /**
     * Call this to modify the size of the Phaser canvas element directly.
     * You should only use this if you are using the `NONE` scale mode,
     * it will update all internal components completely.
     *
     * If all you want to do is change the size of the parent, see the `setParentSize` method.
     *
     * If all you want is to change the base size of the game, but still have the Scale Manager
     * manage all the scaling (i.e. you're **not** using `NONE`), then see the `setGameSize` method.
     *
     * This method will set the `gameSize`, `baseSize` and `displaySize` components to the given
     * dimensions. It will then resize the canvas width and height to the values given, by
     * directly setting the properties. Finally, if you have set the Scale Manager zoom value
     * to anything other than 1 (the default), it will set the canvas CSS width and height to
     * be the given size multiplied by the zoom factor (the canvas pixel size remains untouched).
     *
     * If you have enabled `autoCenter`, it is then passed to the `updateCenter` method and
     * the margins are set, allowing the canvas to be centered based on its parent element
     * alone. Finally, the `displayScale` is adjusted and the RESIZE event dispatched.
     * @param width The new width of the game.
     * @param height The new height of the game.
     */
    resize(width: number, height: number): this;

    /**
     * Sets the zoom value of the Scale Manager.
     * @param value The new zoom value of the game.
     */
    setZoom(value: number): this;

    /**
     * Sets the zoom to be the maximum possible based on the _current_ parent size.
     */
    setMaxZoom(): this;

    /**
     * Refreshes the internal scale values, bounds sizes and orientation checks.
     *
     * Once finished, dispatches the resize event.
     *
     * This is called automatically by the Scale Manager when the browser window size changes,
     * as long as it is using a Scale Mode other than 'NONE'.
     * @param previousWidth The previous width of the game. Only set if the gameSize has changed.
     * @param previousHeight The previous height of the game. Only set if the gameSize has changed.
     */
    refresh(previousWidth?: number, previousHeight?: number): this;

    /**
     * Internal method that checks the current screen orientation, only if the internal check flag is set.
     *
     * If the orientation has changed it updates the orientation property and then dispatches the orientation change event.
     */
    updateOrientation(): void;

    /**
     * Internal method that manages updating the size components based on the scale mode.
     */
    updateScale(): void;

    /**
     * Calculates and returns the largest possible zoom factor, based on the current
     * parent and game sizes. If the parent has no dimensions (i.e. an unstyled div),
     * or is smaller than the un-zoomed game, then this will return a value of 1 (no zoom)
     */
    getMaxZoom(): number;

    /**
     * Calculates and updates the canvas CSS style in order to center it within the
     * bounds of its parent. If you have explicitly set parent to be `null` in your
     * game config then this method will likely give incorrect results unless you have called the
     * `setParentSize` method first.
     *
     * It works by modifying the canvas CSS `marginLeft` and `marginTop` properties.
     *
     * If they have already been set by your own style sheet, or code, this will overwrite them.
     *
     * To prevent the Scale Manager from centering the canvas, either do not set the
     * `autoCenter` property in your game config, or make sure it is set to `NO_CENTER`.
     */
    updateCenter(): void;

    /**
     * Updates the `canvasBounds` rectangle to match the bounding client rectangle of the
     * canvas element being used to track input events.
     */
    updateBounds(): void;

    /**
     * Transforms the pageX value into the scaled coordinate space of the Scale Manager.
     * @param pageX The DOM pageX value.
     */
    transformX(pageX: number): number;

    /**
     * Transforms the pageY value into the scaled coordinate space of the Scale Manager.
     * @param pageY The DOM pageY value.
     */
    transformY(pageY: number): number;

    /**
     * Sends a request to the browser to ask it to go in to full screen mode, using the {@link https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API Fullscreen API}.
     *
     * If the browser does not support this, a `FULLSCREEN_UNSUPPORTED` event will be emitted.
     *
     * This method _must_ be called from a `pointerup` user-input gesture (**not** `pointerdown`). You cannot launch
     * games fullscreen without this, as most browsers block it. Games within an iframe will also be blocked
     * from fullscreen unless the iframe has the `allowfullscreen` attribute.
     *
     * On touch devices, such as Android and iOS Safari, you should always use `pointerup` and NOT `pointerdown`,
     * otherwise the request will fail unless the document in which your game is embedded has already received
     * some form of touch input, which you cannot guarantee. Activating fullscreen via `pointerup` circumvents
     * this issue.
     *
     * Performing an action that navigates to another page, or opens another tab, will automatically cancel
     * fullscreen mode, as will the user pressing the ESC key. To cancel fullscreen mode directly from your game,
     * i.e. by clicking an icon, call the `stopFullscreen` method.
     *
     * A browser can only send one DOM element into fullscreen. You can control which element this is by
     * setting the `fullscreenTarget` property in your game config, or changing the property in the Scale Manager.
     * Note that the game canvas _must_ be a child of the target. If you do not give a target, Phaser will
     * automatically create a blank `<div>` element and move the canvas into it, before going fullscreen.
     * When it leaves fullscreen, the div will be removed.
     * @param fullscreenOptions The FullscreenOptions dictionary is used to provide configuration options when entering full screen.
     */
    startFullscreen(fullscreenOptions?: object): void;

    /**
     * An internal method that gets the target element that is used when entering fullscreen mode.
     */
    getFullscreenTarget(): object;

    /**
     * Removes the fullscreen target that was added to the DOM.
     */
    removeFullscreenTarget(): void;

    /**
     * Calling this method will cancel fullscreen mode, if the browser has entered it.
     */
    stopFullscreen(): void;

    /**
     * Toggles the fullscreen mode. If already in fullscreen, calling this will cancel it.
     * If not in fullscreen, this will request the browser to enter fullscreen mode.
     *
     * If the browser does not support this, a `FULLSCREEN_UNSUPPORTED` event will be emitted.
     *
     * This method _must_ be called from a user-input gesture, such as `pointerdown`. You cannot launch
     * games fullscreen without this, as most browsers block it. Games within an iframe will also be blocked
     * from fullscreen unless the iframe has the `allowfullscreen` attribute.
     * @param fullscreenOptions The FullscreenOptions dictionary is used to provide configuration options when entering full screen.
     */
    toggleFullscreen(fullscreenOptions?: object): void;

    /**
     * An internal method that starts the different DOM event listeners running.
     */
    startListeners(): void;

    /**
     * Triggered when a fullscreenchange event is dispatched by the DOM.
     */
    protected onFullScreenChange(): void;

    /**
     * Triggered when a fullscreenerror event is dispatched by the DOM.
     */
    onFullScreenError(): void;

    /**
     * Internal method, called automatically by the game step.
     * Monitors the elapsed time and resize interval to see if a parent bounds check needs to take place.
     * @param time The time value from the most recent Game step. Typically a high-resolution timer value, or Date.now().
     * @param delta The delta value since the last frame. This is smoothed to avoid delta spikes by the TimeStep class.
     */
    step(time: number, delta: number): void;

    /**
     * Stops all DOM event listeners.
     */
    stopListeners(): void;

    /**
     * Destroys this Scale Manager, releasing all references to external resources.
     * Once destroyed, the Scale Manager cannot be used again.
     */
    destroy(): void;

    /**
     * Is the browser currently in fullscreen mode or not?
     */
    readonly isFullscreen: boolean;

    /**
     * The game width.
     *
     * This is typically the size given in the game configuration.
     */
    readonly width: number;

    /**
     * The game height.
     *
     * This is typically the size given in the game configuration.
     */
    readonly height: number;

    /**
     * Is the device in a portrait orientation as reported by the Orientation API?
     * This value is usually only available on mobile devices.
     */
    readonly isPortrait: boolean;

    /**
     * Is the device in a landscape orientation as reported by the Orientation API?
     * This value is usually only available on mobile devices.
     */
    readonly isLandscape: boolean;

    /**
     * Are the game dimensions portrait? (i.e. taller than they are wide)
     *
     * This is different to the device itself being in a portrait orientation.
     */
    readonly isGamePortrait: boolean;

    /**
     * Are the game dimensions landscape? (i.e. wider than they are tall)
     *
     * This is different to the device itself being in a landscape orientation.
     */
    readonly isGameLandscape: boolean;

  }

  /**
   * The game canvas is not centered within the parent by Phaser.
   * You can still center it yourself via CSS.
   */
  const NO_CENTER: number;

  /**
   * The game canvas is centered both horizontally and vertically within the parent.
   * To do this, the parent has to have a bounds that can be calculated and not be empty.
   *
   * Centering is achieved by setting the margin left and top properties of the
   * game canvas, and does not factor in any other CSS styles you may have applied.
   */
  const CENTER_BOTH: number;

  /**
   * The game canvas is centered horizontally within the parent.
   * To do this, the parent has to have a bounds that can be calculated and not be empty.
   *
   * Centering is achieved by setting the margin left and top properties of the
   * game canvas, and does not factor in any other CSS styles you may have applied.
   */
  const CENTER_HORIZONTALLY: number;

  /**
   * The game canvas is centered both vertically within the parent.
   * To do this, the parent has to have a bounds that can be calculated and not be empty.
   *
   * Centering is achieved by setting the margin left and top properties of the
   * game canvas, and does not factor in any other CSS styles you may have applied.
   */
  const CENTER_VERTICALLY: number;

  /**
   * A landscape orientation.
   */
  const LANDSCAPE: string;

  /**
   * A portrait orientation.
   */
  const PORTRAIT: string;

  /**
   * No scaling happens at all. The canvas is set to the size given in the game config and Phaser doesn't change it
   * again from that point on. If you change the canvas size, either via CSS, or directly via code, then you need
   * to call the Scale Managers `resize` method to give the new dimensions, or input events will stop working.
   */
  const NONE: number;

  /**
   * The height is automatically adjusted based on the width.
   */
  const WIDTH_CONTROLS_HEIGHT: number;

  /**
   * The width is automatically adjusted based on the height.
   */
  const HEIGHT_CONTROLS_WIDTH: number;

  /**
   * The width and height are automatically adjusted to fit inside the given target area,
   * while keeping the aspect ratio. Depending on the aspect ratio there may be some space
   * inside the area which is not covered.
   */
  const FIT: number;

  /**
   * The width and height are automatically adjusted to make the size cover the entire target
   * area while keeping the aspect ratio. This may extend further out than the target size.
   */
  const ENVELOP: number;

  /**
   * The Canvas is resized to fit all available _parent_ space, regardless of aspect ratio.
   */
  const RESIZE: number;

  /**
   * The game canvas will not be zoomed by Phaser.
   */
  const NO_ZOOM: number;

  /**
   * The game canvas will be 2x zoomed by Phaser.
   */
  const ZOOM_2X: number;

  /**
   * The game canvas will be 4x zoomed by Phaser.
   */
  const ZOOM_4X: number;

  /**
   * Calculate the zoom value based on the maximum multiplied game size that will
   * fit into the parent, or browser window if no parent is set.
   */
  const MAX_ZOOM: number;

}