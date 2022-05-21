namespace Phaser.Animations {
  /**
   * A Frame based Animation.
   *
   * Animations in Phaser consist of a sequence of `AnimationFrame` objects, which are managed by
   * this class, along with properties that impact playback, such as the animations frame rate
   * or delay.
   *
   * This class contains all of the properties and methods needed to handle playback of the animation
   * directly to an `AnimationState` instance, which is owned by a Sprite, or similar Game Object.
   *
   * You don't typically create an instance of this class directly, but instead go via
   * either the `AnimationManager` or the `AnimationState` and use their `create` methods,
   * depending on if you need a global animation, or local to a specific Sprite.
   */
  class Animation {
    /**
     *
     * @param manager A reference to the global Animation Manager
     * @param key The unique identifying string for this animation.
     * @param config The Animation configuration.
     */
    constructor(manager: Phaser.Animations.AnimationManager, key: string, config: Phaser.Types.Animations.Animation);

    /**
     * A reference to the global Animation Manager.
     */
    manager: Phaser.Animations.AnimationManager;

    /**
     * The unique identifying string for this animation.
     */
    key: string;

    /**
     * A frame based animation (as opposed to a bone based animation)
     */
    type: string;

    /**
     * Extract all the frame data into the frames array.
     */
    frames: Phaser.Animations.AnimationFrame[];

    /**
     * The frame rate of playback in frames per second (default 24 if duration is null)
     */
    frameRate: number;

    /**
     * How long the animation should play for, in milliseconds.
     * If the `frameRate` property has been set then it overrides this value,
     * otherwise the `frameRate` is derived from `duration`.
     */
    duration: number;

    /**
     * How many ms per frame, not including frame specific modifiers.
     */
    msPerFrame: number;

    /**
     * Skip frames if the time lags, or always advanced anyway?
     */
    skipMissedFrames: boolean;

    /**
     * The delay in ms before the playback will begin.
     */
    delay: number;

    /**
     * Number of times to repeat the animation. Set to -1 to repeat forever.
     */
    repeat: number;

    /**
     * The delay in ms before the a repeat play starts.
     */
    repeatDelay: number;

    /**
     * Should the animation yoyo (reverse back down to the start) before repeating?
     */
    yoyo: boolean;

    /**
     * Should the GameObject's `visible` property be set to `true` when the animation starts to play?
     */
    showOnStart: boolean;

    /**
     * Should the GameObject's `visible` property be set to `false` when the animation finishes?
     */
    hideOnComplete: boolean;

    /**
     * Global pause. All Game Objects using this Animation instance are impacted by this property.
     */
    paused: boolean;

    /**
     * Gets the total number of frames in this animation.
     */
    getTotalFrames(): number;

    /**
     * Calculates the duration, frame rate and msPerFrame values.
     * @param target The target to set the values on.
     * @param totalFrames The total number of frames in the animation.
     * @param duration The duration to calculate the frame rate from.
     * @param frameRate The frame ate to calculate the duration from.
     */
    calculateDuration(target: Phaser.Animations.Animation, totalFrames: number, duration: number, frameRate: number): void;

    /**
     * Add frames to the end of the animation.
     * @param config Either a string, in which case it will use all frames from a texture with the matching key, or an array of Animation Frame configuration objects.
     */
    addFrame(config: string | Phaser.Types.Animations.AnimationFrame[]): this;

    /**
     * Add frame/s into the animation.
     * @param index The index to insert the frame at within the animation.
     * @param config Either a string, in which case it will use all frames from a texture with the matching key, or an array of Animation Frame configuration objects.
     */
    addFrameAt(index: number, config: string | Phaser.Types.Animations.AnimationFrame[]): this;

    /**
     * Check if the given frame index is valid.
     * @param index The index to be checked.
     */
    checkFrame(index: number): boolean;

    /**
     * Called internally when this Animation first starts to play.
     * Sets the accumulator and nextTick properties.
     * @param state The Animation State belonging to the Game Object invoking this call.
     */
    protected getFirstTick(state: Phaser.Animations.AnimationState): void;

    /**
     * Returns the AnimationFrame at the provided index
     * @param index The index in the AnimationFrame array
     */
    protected getFrameAt(index: number): Phaser.Animations.AnimationFrame;

    /**
     * Creates AnimationFrame instances based on the given frame data.
     * @param textureManager A reference to the global Texture Manager.
     * @param frames Either a string, in which case it will use all frames from a texture with the matching key, or an array of Animation Frame configuration objects.
     * @param defaultTextureKey The key to use if no key is set in the frame configuration object.
     */
    getFrames(textureManager: Phaser.Textures.TextureManager, frames: string | Phaser.Types.Animations.AnimationFrame[], defaultTextureKey?: string): Phaser.Animations.AnimationFrame[];

    /**
     * Called internally. Sets the accumulator and nextTick values of the current Animation.
     * @param state The Animation State belonging to the Game Object invoking this call.
     */
    getNextTick(state: Phaser.Animations.AnimationState): void;

    /**
     * Returns the frame closest to the given progress value between 0 and 1.
     * @param value A value between 0 and 1.
     */
    getFrameByProgress(value: number): Phaser.Animations.AnimationFrame;

    /**
     * Advance the animation frame.
     * @param state The Animation State to advance.
     */
    nextFrame(state: Phaser.Animations.AnimationState): void;

    /**
     * Returns the animation last frame.
     */
    getLastFrame(): Phaser.Animations.AnimationFrame;

    /**
     * Called internally when the Animation is playing backwards.
     * Sets the previous frame, causing a yoyo, repeat, complete or update, accordingly.
     * @param state The Animation State belonging to the Game Object invoking this call.
     */
    previousFrame(state: Phaser.Animations.AnimationState): void;

    /**
     * Removes the given AnimationFrame from this Animation instance.
     * This is a global action. Any Game Object using this Animation will be impacted by this change.
     * @param frame The AnimationFrame to be removed.
     */
    removeFrame(frame: Phaser.Animations.AnimationFrame): this;

    /**
     * Removes a frame from the AnimationFrame array at the provided index
     * and updates the animation accordingly.
     * @param index The index in the AnimationFrame array
     */
    removeFrameAt(index: number): this;

    /**
     * Called internally during playback. Forces the animation to repeat, providing there are enough counts left
     * in the repeat counter.
     * @param state The Animation State belonging to the Game Object invoking this call.
     */
    repeatAnimation(state: Phaser.Animations.AnimationState): void;

    /**
     * Converts the animation data to JSON.
     */
    toJSON(): Phaser.Types.Animations.JSONAnimation;

    /**
     * Called internally whenever frames are added to, or removed from, this Animation.
     */
    updateFrameSequence(): this;

    /**
     * Pauses playback of this Animation. The paused state is set immediately.
     */
    pause(): this;

    /**
     * Resumes playback of this Animation. The paused state is reset immediately.
     */
    resume(): this;

    /**
     * Destroys this Animation instance. It will remove all event listeners,
     * remove this animation and its key from the global Animation Manager,
     * and then destroy all Animation Frames in turn.
     */
    destroy(): void;

  }

  /**
   * A single frame in an Animation sequence.
   *
   * An AnimationFrame consists of a reference to the Texture it uses for rendering, references to other
   * frames in the animation, and index data. It also has the ability to modify the animation timing.
   *
   * AnimationFrames are generated automatically by the Animation class.
   */
  class AnimationFrame {
    /**
     *
     * @param textureKey The key of the Texture this AnimationFrame uses.
     * @param textureFrame The key of the Frame within the Texture that this AnimationFrame uses.
     * @param index The index of this AnimationFrame within the Animation sequence.
     * @param frame A reference to the Texture Frame this AnimationFrame uses for rendering.
     * @param isKeyFrame Is this Frame a Keyframe within the Animation? Default false.
     */
    constructor(textureKey: string, textureFrame: string | number, index: number, frame: Phaser.Textures.Frame, isKeyFrame?: boolean);

    /**
     * The key of the Texture this AnimationFrame uses.
     */
    textureKey: string;

    /**
     * The key of the Frame within the Texture that this AnimationFrame uses.
     */
    textureFrame: string | number;

    /**
     * The index of this AnimationFrame within the Animation sequence.
     */
    index: number;

    /**
     * A reference to the Texture Frame this AnimationFrame uses for rendering.
     */
    frame: Phaser.Textures.Frame;

    /**
     * Is this the first frame in an animation sequence?
     */
    readonly isFirst: boolean;

    /**
     * Is this the last frame in an animation sequence?
     */
    readonly isLast: boolean;

    /**
     * A reference to the AnimationFrame that comes before this one in the animation, if any.
     */
    readonly prevFrame: Phaser.Animations.AnimationFrame;

    /**
     * A reference to the AnimationFrame that comes after this one in the animation, if any.
     */
    readonly nextFrame: Phaser.Animations.AnimationFrame;

    /**
     * Additional time (in ms) that this frame should appear for during playback.
     * The value is added onto the msPerFrame set by the animation.
     */
    duration: number;

    /**
     * What % through the animation does this frame come?
     * This value is generated when the animation is created and cached here.
     */
    readonly progress: number;

    /**
     * Is this Frame a KeyFrame within the Animation?
     */
    isKeyFrame: boolean;

    /**
     * Generates a JavaScript object suitable for converting to JSON.
     */
    toJSON(): Phaser.Types.Animations.JSONAnimationFrame;

    /**
     * Destroys this object by removing references to external resources and callbacks.
     */
    destroy(): void;

  }

  /**
   * The Animation Manager.
   *
   * Animations are managed by the global Animation Manager. This is a singleton class that is
   * responsible for creating and delivering animations and their corresponding data to all Game Objects.
   * Unlike plugins it is owned by the Game instance, not the Scene.
   *
   * Sprites and other Game Objects get the data they need from the AnimationManager.
   */
  class AnimationManager extends Phaser.Events.EventEmitter {
    /**
     *
     * @param game A reference to the Phaser.Game instance.
     */
    constructor(game: Phaser.Game);

    /**
     * A reference to the Phaser.Game instance.
     */
    protected game: Phaser.Game;

    /**
     * A reference to the Texture Manager.
     */
    protected textureManager: Phaser.Textures.TextureManager;

    /**
     * The global time scale of the Animation Manager.
     *
     * This scales the time delta between two frames, thus influencing the speed of time for the Animation Manager.
     */
    globalTimeScale: number;

    /**
     * The Animations registered in the Animation Manager.
     *
     * This map should be modified with the {@link #add} and {@link #create} methods of the Animation Manager.
     */
    protected anims: Phaser.Structs.Map<string, Phaser.Animations.Animation>;

    /**
     * A list of animation mix times.
     *
     * See the {@link #setMix} method for more details.
     */
    mixes: Phaser.Structs.Map<string, Phaser.Animations.Animation>;

    /**
     * Whether the Animation Manager is paused along with all of its Animations.
     */
    paused: boolean;

    /**
     * The name of this Animation Manager.
     */
    name: string;

    /**
     * Registers event listeners after the Game boots.
     */
    boot(): void;

    /**
     * Adds a mix between two animations.
     *
     * Mixing allows you to specify a unique delay between a pairing of animations.
     *
     * When playing Animation A on a Game Object, if you then play Animation B, and a
     * mix exists, it will wait for the specified delay to be over before playing Animation B.
     *
     * This allows you to customise smoothing between different types of animation, such
     * as blending between an idle and a walk state, or a running and a firing state.
     *
     * Note that mixing is only applied if you use the `Sprite.play` method. If you opt to use
     * `playAfterRepeat` or `playAfterDelay` instead, those will take priority and the mix
     * delay will not be used.
     *
     * To update an existing mix, just call this method with the new delay.
     *
     * To remove a mix pairing, see the `removeMix` method.
     * @param animA The string-based key, or instance of, Animation A.
     * @param animB The string-based key, or instance of, Animation B.
     * @param delay The delay, in milliseconds, to wait when transitioning from Animation A to B.
     */
    addMix(animA: string | Phaser.Animations.Animation, animB: string | Phaser.Animations.Animation, delay: number): this;

    /**
     * Removes a mix between two animations.
     *
     * Mixing allows you to specify a unique delay between a pairing of animations.
     *
     * Calling this method lets you remove those pairings. You can either remove
     * it between `animA` and `animB`, or if you do not provide the `animB` parameter,
     * it will remove all `animA` mixes.
     *
     * If you wish to update an existing mix instead, call the `addMix` method with the
     * new delay.
     * @param animA The string-based key, or instance of, Animation A.
     * @param animB The string-based key, or instance of, Animation B. If not given, all mixes for Animation A will be removed.
     */
    removeMix(animA: string | Phaser.Animations.Animation, animB?: string | Phaser.Animations.Animation): this;

    /**
     * Returns the mix delay between two animations.
     *
     * If no mix has been set-up, this method will return zero.
     *
     * If you wish to create, or update, a new mix, call the `addMix` method.
     * If you wish to remove a mix, call the `removeMix` method.
     * @param animA The string-based key, or instance of, Animation A.
     * @param animB The string-based key, or instance of, Animation B.
     */
    getMix(animA: string | Phaser.Animations.Animation, animB: string | Phaser.Animations.Animation): number;

    /**
     * Adds an existing Animation to the Animation Manager.
     * @param key The key under which the Animation should be added. The Animation will be updated with it. Must be unique.
     * @param animation The Animation which should be added to the Animation Manager.
     */
    add(key: string, animation: Phaser.Animations.Animation): this;

    /**
     * Checks to see if the given key is already in use within the Animation Manager or not.
     *
     * Animations are global. Keys created in one scene can be used from any other Scene in your game. They are not Scene specific.
     * @param key The key of the Animation to check.
     */
    exists(key: string): boolean;

    /**
     * Create one, or more animations from a loaded Aseprite JSON file.
     *
     * Aseprite is a powerful animated sprite editor and pixel art tool.
     *
     * You can find more details at https://www.aseprite.org/
     *
     * To export a compatible JSON file in Aseprite, please do the following:
     *
     * 1. Go to "File - Export Sprite Sheet"
     *
     * 2. On the **Layout** tab:
     * 2a. Set the "Sheet type" to "Packed"
     * 2b. Set the "Constraints" to "None"
     * 2c. Check the "Merge Duplicates" checkbox
     *
     * 3. On the **Sprite** tab:
     * 3a. Set "Layers" to "Visible layers"
     * 3b. Set "Frames" to "All frames", unless you only wish to export a sub-set of tags
     *
     * 4. On the **Borders** tab:
     * 4a. Check the "Trim Sprite" and "Trim Cells" options
     * 4b. Ensure "Border Padding", "Spacing" and "Inner Padding" are all > 0 (1 is usually enough)
     *
     * 5. On the **Output** tab:
     * 5a. Check "Output File", give your image a name and make sure you choose "png files" as the file type
     * 5b. Check "JSON Data" and give your json file a name
     * 5c. The JSON Data type can be either a Hash or Array, Phaser doesn't mind.
     * 5d. Make sure "Tags" is checked in the Meta options
     * 5e. In the "Item Filename" input box, make sure it says just "{frame}" and nothing more.
     *
     * 6. Click export
     *
     * This was tested with Aseprite 1.2.25.
     *
     * This will export a png and json file which you can load using the Aseprite Loader, i.e.:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.path = 'assets/animations/aseprite/';
     *     this.load.aseprite('paladin', 'paladin.png', 'paladin.json');
     * }
     * ```
     *
     * Once loaded, you can call this method from within a Scene with the 'atlas' key:
     *
     * ```javascript
     * this.anims.createFromAseprite('paladin');
     * ```
     *
     * Any animations defined in the JSON will now be available to use in Phaser and you play them
     * via their Tag name. For example, if you have an animation called 'War Cry' on your Aseprite timeline,
     * you can play it in Phaser using that Tag name:
     *
     * ```javascript
     * this.add.sprite(400, 300).play('War Cry');
     * ```
     *
     * When calling this method you can optionally provide an array of tag names, and only those animations
     * will be created. For example:
     *
     * ```javascript
     * this.anims.createFromAseprite('paladin', [ 'step', 'War Cry', 'Magnum Break' ]);
     * ```
     *
     * This will only create the 3 animations defined. Note that the tag names are case-sensitive.
     * @param key The key of the loaded Aseprite atlas. It must have been loaded prior to calling this method.
     * @param tags An array of Tag names. If provided, only animations found in this array will be created.
     */
    createFromAseprite(key: string, tags?: string[]): Phaser.Animations.Animation[];

    /**
     * Creates a new Animation and adds it to the Animation Manager.
     *
     * Animations are global. Once created, you can use them in any Scene in your game. They are not Scene specific.
     *
     * If an invalid key is given this method will return `false`.
     *
     * If you pass the key of an animation that already exists in the Animation Manager, that animation will be returned.
     *
     * A brand new animation is only created if the key is valid and not already in use.
     *
     * If you wish to re-use an existing key, call `AnimationManager.remove` first, then this method.
     * @param config The configuration settings for the Animation.
     */
    create(config: Phaser.Types.Animations.Animation): Phaser.Animations.Animation | false;

    /**
     * Loads this Animation Manager's Animations and settings from a JSON object.
     * @param data The JSON object to parse.
     * @param clearCurrentAnimations If set to `true`, the current animations will be removed (`anims.clear()`). If set to `false` (default), the animations in `data` will be added. Default false.
     */
    fromJSON(data: string | Phaser.Types.Animations.JSONAnimations | Phaser.Types.Animations.JSONAnimation, clearCurrentAnimations?: boolean): Phaser.Animations.Animation[];

    /**
     * Generate an array of {@link Phaser.Types.Animations.AnimationFrame} objects from a texture key and configuration object.
     *
     * Generates objects with string based frame names, as configured by the given {@link Phaser.Types.Animations.GenerateFrameNames}.
     *
     * It's a helper method, designed to make it easier for you to extract all of the frame names from texture atlases.
     * If you're working with a sprite sheet, see the `generateFrameNumbers` method instead.
     *
     * Example:
     *
     * If you have a texture atlases loaded called `gems` and it contains 6 frames called `ruby_0001`, `ruby_0002`, and so on,
     * then you can call this method using: `this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 })`.
     *
     * The `end` value tells it to look for 6 frames, incrementally numbered, all starting with the prefix `ruby_`. The `zeroPad`
     * value tells it how many zeroes pad out the numbers. To create an animation using this method, you can do:
     *
     * ```javascript
     * this.anims.create({
     *   key: 'ruby',
     *   repeat: -1,
     *   frames: this.anims.generateFrameNames('gems', {
     *     prefix: 'ruby_',
     *     end: 6,
     *     zeroPad: 4
     *   })
     * });
     * ```
     *
     * Please see the animation examples for further details.
     * @param key The key for the texture containing the animation frames.
     * @param config The configuration object for the animation frame names.
     */
    generateFrameNames(key: string, config?: Phaser.Types.Animations.GenerateFrameNames): Phaser.Types.Animations.AnimationFrame[];

    /**
     * Generate an array of {@link Phaser.Types.Animations.AnimationFrame} objects from a texture key and configuration object.
     *
     * Generates objects with numbered frame names, as configured by the given {@link Phaser.Types.Animations.GenerateFrameNumbers}.
     *
     * If you're working with a texture atlas, see the `generateFrameNames` method instead.
     *
     * It's a helper method, designed to make it easier for you to extract frames from sprite sheets.
     * If you're working with a texture atlas, see the `generateFrameNames` method instead.
     *
     * Example:
     *
     * If you have a sprite sheet loaded called `explosion` and it contains 12 frames, then you can call this method using:
     *
     * `this.anims.generateFrameNumbers('explosion', { start: 0, end: 11 })`.
     *
     * The `end` value of 11 tells it to stop after the 12th frame has been added, because it started at zero.
     *
     * To create an animation using this method, you can do:
     *
     * ```javascript
     * this.anims.create({
     *   key: 'boom',
     *   frames: this.anims.generateFrameNames('explosion', {
     *     start: 0,
     *     end: 11
     *   })
     * });
     * ```
     *
     * Note that `start` is optional and you don't need to include it if the animation starts from frame 0.
     *
     * To specify an animation in reverse, swap the `start` and `end` values.
     *
     * If the frames are not sequential, you may pass an array of frame numbers instead, for example:
     *
     * `this.anims.generateFrameNumbers('explosion', { frames: [ 0, 1, 2, 1, 2, 3, 4, 0, 1, 2 ] })`
     *
     * Please see the animation examples and `GenerateFrameNumbers` config docs for further details.
     * @param key The key for the texture containing the animation frames.
     * @param config The configuration object for the animation frames.
     */
    generateFrameNumbers(key: string, config: Phaser.Types.Animations.GenerateFrameNumbers): Phaser.Types.Animations.AnimationFrame[];

    /**
     * Get an Animation.
     * @param key The key of the Animation to retrieve.
     */
    get(key: string): Phaser.Animations.Animation;

    /**
     * Pause all animations.
     */
    pauseAll(): this;

    /**
     * Play an animation on the given Game Objects that have an Animation Component.
     * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
     * @param children An array of Game Objects to play the animation on. They must have an Animation Component.
     */
    play(key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig, children: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[]): this;

    /**
     * Takes an array of Game Objects that have an Animation Component and then
     * starts the given animation playing on them. The start time of each Game Object
     * is offset, incrementally, by the `stagger` amount.
     *
     * For example, if you pass an array with 4 children and a stagger time of 1000,
     * the delays will be:
     *
     * child 1: 1000ms delay
     * child 2: 2000ms delay
     * child 3: 3000ms delay
     * child 4: 4000ms delay
     *
     * If you set the `staggerFirst` parameter to `false` they would be:
     *
     * child 1: 0ms delay
     * child 2: 1000ms delay
     * child 3: 2000ms delay
     * child 4: 3000ms delay
     *
     * You can also set `stagger` to be a negative value. If it was -1000, the above would be:
     *
     * child 1: 3000ms delay
     * child 2: 2000ms delay
     * child 3: 1000ms delay
     * child 4: 0ms delay
     * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
     * @param children An array of Game Objects to play the animation on. They must have an Animation Component.
     * @param stagger The amount of time, in milliseconds, to offset each play time by. If a negative value is given, it's applied to the children in reverse order.
     * @param staggerFirst Should the first child be staggered as well? Default true.
     */
    staggerPlay<G extends Phaser.GameObjects.GameObject[]>(key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig, children: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], stagger: number, staggerFirst?: boolean): G;

    /**
     * Removes an Animation from this Animation Manager, based on the given key.
     *
     * This is a global action. Once an Animation has been removed, no Game Objects
     * can carry on using it.
     * @param key The key of the animation to remove.
     */
    remove(key: string): Phaser.Animations.Animation;

    /**
     * Resume all paused animations.
     */
    resumeAll(): this;

    /**
     * Returns the Animation data as JavaScript object based on the given key.
     * Or, if not key is defined, it will return the data of all animations as array of objects.
     * @param key The animation to get the JSONAnimation data from. If not provided, all animations are returned as an array.
     */
    toJSON(key?: string): Phaser.Types.Animations.JSONAnimations;

    /**
     * Destroy this Animation Manager and clean up animation definitions and references to other objects.
     * This method should not be called directly. It will be called automatically as a response to a `destroy` event from the Phaser.Game instance.
     */
    destroy(): void;

  }

  /**
   * The Animation State Component.
   *
   * This component provides features to apply animations to Game Objects. It is responsible for
   * loading, queuing animations for later playback, mixing between animations and setting
   * the current animation frame to the Game Object that owns this component.
   *
   * This component lives as an instance within any Game Object that has it defined, such as Sprites.
   *
   * You can access its properties and methods via the `anims` property, i.e. `Sprite.anims`.
   *
   * As well as playing animations stored in the global Animation Manager, this component
   * can also create animations that are stored locally within it. See the `create` method
   * for more details.
   *
   * Prior to Phaser 3.50 this component was called just `Animation` and lived in the
   * `Phaser.GameObjects.Components` namespace. It was renamed to `AnimationState`
   * in 3.50 to help better identify its true purpose when browsing the documentation.
   */
  class AnimationState {
    /**
     *
     * @param parent The Game Object to which this animation component belongs.
     */
    constructor(parent: Phaser.GameObjects.GameObject);

    /**
     * The Game Object to which this animation component belongs.
     *
     * You can typically access this component from the Game Object
     * via the `this.anims` property.
     */
    parent: Phaser.GameObjects.GameObject;

    /**
     * A reference to the global Animation Manager.
     */
    animationManager: Phaser.Animations.AnimationManager;

    /**
     * A reference to the Texture Manager.
     */
    protected textureManager: Phaser.Textures.TextureManager;

    /**
     * The Animations stored locally in this Animation component.
     *
     * Do not modify the contents of this Map directly, instead use the
     * `add`, `create` and `remove` methods of this class instead.
     */
    protected anims: Phaser.Structs.Map<string, Phaser.Animations.Animation>;

    /**
     * Is an animation currently playing or not?
     */
    isPlaying: boolean;

    /**
     * Has the current animation started playing, or is it waiting for a delay to expire?
     */
    hasStarted: boolean;

    /**
     * The current Animation loaded into this Animation component.
     *
     * Will by `null` if no animation is yet loaded.
     */
    currentAnim: Phaser.Animations.Animation;

    /**
     * The current AnimationFrame being displayed by this Animation component.
     *
     * Will by `null` if no animation is yet loaded.
     */
    currentFrame: Phaser.Animations.AnimationFrame;

    /**
     * The key, instance, or config of the next Animation to be loaded into this Animation component
     * when the current animation completes.
     *
     * Will by `null` if no animation has been queued.
     */
    nextAnim: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig;

    /**
     * A queue of Animations to be loaded into this Animation component when the current animation completes.
     *
     * Populate this queue via the `chain` method.
     */
    nextAnimsQueue: any[];

    /**
     * The Time Scale factor.
     *
     * You can adjust this value to modify the passage of time for the animation that is currently
     * playing. For example, setting it to 2 will make the animation play twice as fast. Or setting
     * it to 0.5 will slow the animation down.
     *
     * You can change this value at run-time, or set it via the `PlayAnimationConfig`.
     *
     * Prior to Phaser 3.50 this property was private and called `_timeScale`.
     */
    timeScale: number;

    /**
     * The frame rate of playback, of the current animation, in frames per second.
     *
     * This value is set when a new animation is loaded into this component and should
     * be treated as read-only, as changing it once playback has started will not alter
     * the animation. To change the frame rate, provide a new value in the `PlayAnimationConfig` object.
     */
    frameRate: number;

    /**
     * The duration of the current animation, in milliseconds.
     *
     * This value is set when a new animation is loaded into this component and should
     * be treated as read-only, as changing it once playback has started will not alter
     * the animation. To change the duration, provide a new value in the `PlayAnimationConfig` object.
     */
    duration: number;

    /**
     * The number of milliseconds per frame, not including frame specific modifiers that may be present in the
     * Animation data.
     *
     * This value is calculated when a new animation is loaded into this component and should
     * be treated as read-only. Changing it will not alter playback speed.
     */
    msPerFrame: number;

    /**
     * Skip frames if the time lags, or always advanced anyway?
     */
    skipMissedFrames: boolean;

    /**
     * The delay before starting playback of the current animation, in milliseconds.
     *
     * This value is set when a new animation is loaded into this component and should
     * be treated as read-only, as changing it once playback has started will not alter
     * the animation. To change the delay, provide a new value in the `PlayAnimationConfig` object.
     *
     * Prior to Phaser 3.50 this property was private and called `_delay`.
     */
    delay: number;

    /**
     * The number of times to repeat playback of the current animation.
     *
     * If -1, it means the animation will repeat forever.
     *
     * This value is set when a new animation is loaded into this component and should
     * be treated as read-only, as changing it once playback has started will not alter
     * the animation. To change the number of repeats, provide a new value in the `PlayAnimationConfig` object.
     *
     * Prior to Phaser 3.50 this property was private and called `_repeat`.
     */
    repeat: number;

    /**
     * The number of milliseconds to wait before starting the repeat playback of the current animation.
     *
     * This value is set when a new animation is loaded into this component, but can also be modified
     * at run-time.
     *
     * You can change the repeat delay by providing a new value in the `PlayAnimationConfig` object.
     *
     * Prior to Phaser 3.50 this property was private and called `_repeatDelay`.
     */
    repeatDelay: number;

    /**
     * Should the current animation yoyo? An animation that yoyos will play in reverse, from the end
     * to the start, before then repeating or completing. An animation that does not yoyo will just
     * play from the start to the end.
     *
     * This value is set when a new animation is loaded into this component, but can also be modified
     * at run-time.
     *
     * You can change the yoyo by providing a new value in the `PlayAnimationConfig` object.
     *
     * Prior to Phaser 3.50 this property was private and called `_yoyo`.
     */
    yoyo: boolean;

    /**
     * Should the GameObject's `visible` property be set to `true` when the animation starts to play?
     *
     * This will happen _after_ any delay that may have been set.
     *
     * This value is set when a new animation is loaded into this component, but can also be modified
     * at run-time, assuming the animation is currently delayed.
     */
    showOnStart: boolean;

    /**
     * Should the GameObject's `visible` property be set to `false` when the animation completes?
     *
     * This value is set when a new animation is loaded into this component, but can also be modified
     * at run-time, assuming the animation is still actively playing.
     */
    hideOnComplete: boolean;

    /**
     * Is the playhead moving forwards (`true`) or in reverse (`false`) ?
     */
    forward: boolean;

    /**
     * An internal trigger that tells the component if it should plays the animation
     * in reverse mode ('true') or not ('false'). This is used because `forward` can
     * be changed by the `yoyo` feature.
     *
     * Prior to Phaser 3.50 this property was private and called `_reverse`.
     */
    inReverse: boolean;

    /**
     * Internal time overflow accumulator.
     *
     * This has the `delta` time added to it as part of the `update` step.
     */
    accumulator: number;

    /**
     * The time point at which the next animation frame will change.
     *
     * This value is compared against the `accumulator` as part of the `update` step.
     */
    nextTick: number;

    /**
     * A counter keeping track of how much delay time, in milliseconds, is left before playback begins.
     *
     * This is set via the `playAfterDelay` method, although it can be modified at run-time
     * if required, as long as the animation has not already started playing.
     */
    delayCounter: number;

    /**
     * A counter that keeps track of how many repeats are left to run.
     *
     * This value is set when a new animation is loaded into this component, but can also be modified
     * at run-time.
     */
    repeatCounter: number;

    /**
     * An internal flag keeping track of pending repeats.
     */
    pendingRepeat: boolean;

    /**
     * Sets an animation, or an array of animations, to be played in the future, after the current one completes or stops.
     *
     * The current animation must enter a 'completed' state for this to happen, i.e. finish all of its repeats, delays, etc,
     * or have one of the `stop` methods called.
     *
     * An animation set to repeat forever will never enter a completed state unless stopped.
     *
     * You can chain a new animation at any point, including before the current one starts playing, during it, or when it ends (via its `animationcomplete` event).
     *
     * Chained animations are specific to a Game Object, meaning different Game Objects can have different chained animations without impacting the global animation they're playing.
     *
     * Call this method with no arguments to reset all currently chained animations.
     * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object, or an array of them.
     */
    chain(key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig | string[] | Phaser.Animations.Animation[] | Phaser.Types.Animations.PlayAnimationConfig[]): Phaser.GameObjects.GameObject;

    /**
     * Returns the key of the animation currently loaded into this component.
     *
     * Prior to Phaser 3.50 this method was called `getCurrentKey`.
     */
    getName(): string;

    /**
     * Returns the key of the animation frame currently displayed by this component.
     */
    getFrameName(): string;

    /**
     * Internal method used to load an animation into this component.
     * @param key The string-based key of the animation to play, or a `PlayAnimationConfig` object.
     */
    protected load(key: string | Phaser.Types.Animations.PlayAnimationConfig): Phaser.GameObjects.GameObject;

    /**
     * Pause the current animation and set the `isPlaying` property to `false`.
     * You can optionally pause it at a specific frame.
     * @param atFrame An optional frame to set after pausing the animation.
     */
    pause(atFrame?: Phaser.Animations.AnimationFrame): Phaser.GameObjects.GameObject;

    /**
     * Resumes playback of a paused animation and sets the `isPlaying` property to `true`.
     * You can optionally tell it to start playback from a specific frame.
     * @param fromFrame An optional frame to set before restarting playback.
     */
    resume(fromFrame?: Phaser.Animations.AnimationFrame): Phaser.GameObjects.GameObject;

    /**
     * Waits for the specified delay, in milliseconds, then starts playback of the given animation.
     *
     * If the animation _also_ has a delay value set in its config, it will be **added** to the delay given here.
     *
     * If an animation is already running and a new animation is given to this method, it will wait for
     * the given delay before starting the new animation.
     *
     * If no animation is currently running, the given one begins after the delay.
     *
     * Prior to Phaser 3.50 this method was called 'delayedPlay' and the parameters were in the reverse order.
     * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
     * @param delay The delay, in milliseconds, to wait before starting the animation playing.
     */
    playAfterDelay(key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig, delay: number): Phaser.GameObjects.GameObject;

    /**
     * Waits for the current animation to complete the `repeatCount` number of repeat cycles, then starts playback
     * of the given animation.
     *
     * You can use this to ensure there are no harsh jumps between two sets of animations, i.e. going from an
     * idle animation to a walking animation, by making them blend smoothly into each other.
     *
     * If no animation is currently running, the given one will start immediately.
     * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
     * @param repeatCount How many times should the animation repeat before the next one starts? Default 1.
     */
    playAfterRepeat(key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig, repeatCount?: number): Phaser.GameObjects.GameObject;

    /**
     * Start playing the given animation on this Sprite.
     *
     * Animations in Phaser can either belong to the global Animation Manager, or specifically to this Sprite.
     *
     * The benefit of a global animation is that multiple Sprites can all play the same animation, without
     * having to duplicate the data. You can just create it once and then play it on any Sprite.
     *
     * The following code shows how to create a global repeating animation. The animation will be created
     * from all of the frames within the sprite sheet that was loaded with the key 'muybridge':
     *
     * ```javascript
     * var config = {
     *     key: 'run',
     *     frames: 'muybridge',
     *     frameRate: 15,
     *     repeat: -1
     * };
     *
     * //  This code should be run from within a Scene:
     * this.anims.create(config);
     * ```
     *
     * However, if you wish to create an animation that is unique to this Sprite, and this Sprite alone,
     * you can call the `Animation.create` method instead. It accepts the exact same parameters as when
     * creating a global animation, however the resulting data is kept locally in this Sprite.
     *
     * With the animation created, either globally or locally, you can now play it on this Sprite:
     *
     * ```javascript
     * this.add.sprite(x, y).play('run');
     * ```
     *
     * Alternatively, if you wish to run it at a different frame rate, for example, you can pass a config
     * object instead:
     *
     * ```javascript
     * this.add.sprite(x, y).play({ key: 'run', frameRate: 24 });
     * ```
     *
     * When playing an animation on a Sprite it will first check to see if it can find a matching key
     * locally within the Sprite. If it can, it will play the local animation. If not, it will then
     * search the global Animation Manager and look for it there.
     *
     * If you need a Sprite to be able to play both local and global animations, make sure they don't
     * have conflicting keys.
     *
     * See the documentation for the `PlayAnimationConfig` config object for more details about this.
     *
     * Also, see the documentation in the Animation Manager for further details on creating animations.
     * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
     * @param ignoreIfPlaying If this animation is already playing then ignore this call. Default false.
     */
    play(key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig, ignoreIfPlaying?: boolean): Phaser.GameObjects.GameObject;

    /**
     * Start playing the given animation on this Sprite, in reverse.
     *
     * Animations in Phaser can either belong to the global Animation Manager, or specifically to this Sprite.
     *
     * The benefit of a global animation is that multiple Sprites can all play the same animation, without
     * having to duplicate the data. You can just create it once and then play it on any Sprite.
     *
     * The following code shows how to create a global repeating animation. The animation will be created
     * from all of the frames within the sprite sheet that was loaded with the key 'muybridge':
     *
     * ```javascript
     * var config = {
     *     key: 'run',
     *     frames: 'muybridge',
     *     frameRate: 15,
     *     repeat: -1
     * };
     *
     * //  This code should be run from within a Scene:
     * this.anims.create(config);
     * ```
     *
     * However, if you wish to create an animation that is unique to this Sprite, and this Sprite alone,
     * you can call the `Animation.create` method instead. It accepts the exact same parameters as when
     * creating a global animation, however the resulting data is kept locally in this Sprite.
     *
     * With the animation created, either globally or locally, you can now play it on this Sprite:
     *
     * ```javascript
     * this.add.sprite(x, y).playReverse('run');
     * ```
     *
     * Alternatively, if you wish to run it at a different frame rate, for example, you can pass a config
     * object instead:
     *
     * ```javascript
     * this.add.sprite(x, y).playReverse({ key: 'run', frameRate: 24 });
     * ```
     *
     * When playing an animation on a Sprite it will first check to see if it can find a matching key
     * locally within the Sprite. If it can, it will play the local animation. If not, it will then
     * search the global Animation Manager and look for it there.
     *
     * If you need a Sprite to be able to play both local and global animations, make sure they don't
     * have conflicting keys.
     *
     * See the documentation for the `PlayAnimationConfig` config object for more details about this.
     *
     * Also, see the documentation in the Animation Manager for further details on creating animations.
     * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
     * @param ignoreIfPlaying If an animation is already playing then ignore this call. Default false.
     */
    playReverse(key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig, ignoreIfPlaying?: boolean): Phaser.GameObjects.GameObject;

    /**
     * Load the animation based on the key and set-up all of the internal values
     * needed for playback to start. If there is no delay, it will also fire the start events.
     * @param key The string-based key of the animation to play, or a `PlayAnimationConfig` object.
     */
    startAnimation(key: string | Phaser.Types.Animations.PlayAnimationConfig): Phaser.GameObjects.GameObject;

    /**
     * Reverse the Animation that is already playing on the Game Object.
     */
    reverse(): Phaser.GameObjects.GameObject;

    /**
     * Returns a value between 0 and 1 indicating how far this animation is through, ignoring repeats and yoyos.
     *
     * The value is based on the current frame and how far that is in the animation, it is not based on
     * the duration of the animation.
     */
    getProgress(): number;

    /**
     * Takes a value between 0 and 1 and uses it to set how far this animation is through playback.
     *
     * Does not factor in repeats or yoyos, but does handle playing forwards or backwards.
     *
     * The value is based on the current frame and how far that is in the animation, it is not based on
     * the duration of the animation.
     * @param value The progress value, between 0 and 1. Default 0.
     */
    setProgress(value?: number): Phaser.GameObjects.GameObject;

    /**
     * Sets the number of times that the animation should repeat after its first play through.
     * For example, if repeat is 1, the animation will play a total of twice: the initial play plus 1 repeat.
     *
     * To repeat indefinitely, use -1.
     * The value should always be an integer.
     *
     * Calling this method only works if the animation is already running. Otherwise, any
     * value specified here will be overwritten when the next animation loads in. To avoid this,
     * use the `repeat` property of the `PlayAnimationConfig` object instead.
     * @param value The number of times that the animation should repeat.
     */
    setRepeat(value: number): Phaser.GameObjects.GameObject;

    /**
     * Handle the removal of an animation from the Animation Manager.
     * @param key The key of the removed Animation.
     * @param animation The removed Animation.
     */
    globalRemove(key?: string, animation?: Phaser.Animations.Animation): void;

    /**
     * Restarts the current animation from its beginning.
     *
     * You can optionally reset the delay and repeat counters as well.
     *
     * Calling this will fire the `ANIMATION_RESTART` event immediately.
     *
     * If you `includeDelay` then it will also fire the `ANIMATION_START` event once
     * the delay has expired, otherwise, playback will just begin immediately.
     * @param includeDelay Whether to include the delay value of the animation when restarting. Default false.
     * @param resetRepeats Whether to reset the repeat counter or not? Default false.
     */
    restart(includeDelay?: boolean, resetRepeats?: boolean): Phaser.GameObjects.GameObject;

    /**
     * The current animation has completed. This dispatches the `ANIMATION_COMPLETE` event.
     *
     * This method is called by the Animation instance and should not usually be invoked directly.
     *
     * If no animation is loaded, no events will be dispatched.
     *
     * If another animation has been queued for playback, it will be started after the events fire.
     */
    complete(): Phaser.GameObjects.GameObject;

    /**
     * Immediately stops the current animation from playing and dispatches the `ANIMATION_STOP` event.
     *
     * If no animation is running, no events will be dispatched.
     *
     * If there is another animation in the queue (set via the `chain` method) then it will start playing.
     */
    stop(): Phaser.GameObjects.GameObject;

    /**
     * Stops the current animation from playing after the specified time delay, given in milliseconds.
     *
     * It then dispatches the `ANIMATION_STOP` event.
     *
     * If no animation is running, no events will be dispatched.
     *
     * If there is another animation in the queue (set via the `chain` method) then it will start playing,
     * when the current one stops.
     * @param delay The number of milliseconds to wait before stopping this animation.
     */
    stopAfterDelay(delay: number): Phaser.GameObjects.GameObject;

    /**
     * Stops the current animation from playing when it next repeats.
     *
     * It then dispatches the `ANIMATION_STOP` event.
     *
     * If no animation is running, no events will be dispatched.
     *
     * If there is another animation in the queue (set via the `chain` method) then it will start playing,
     * when the current one stops.
     *
     * Prior to Phaser 3.50 this method was called `stopOnRepeat` and had no parameters.
     * @param repeatCount How many times should the animation repeat before stopping? Default 1.
     */
    stopAfterRepeat(repeatCount?: number): Phaser.GameObjects.GameObject;

    /**
     * Stops the current animation from playing when it next sets the given frame.
     * If this frame doesn't exist within the animation it will not stop it from playing.
     *
     * It then dispatches the `ANIMATION_STOP` event.
     *
     * If no animation is running, no events will be dispatched.
     *
     * If there is another animation in the queue (set via the `chain` method) then it will start playing,
     * when the current one stops.
     * @param frame The frame to check before stopping this animation.
     */
    stopOnFrame(frame: Phaser.Animations.AnimationFrame): Phaser.GameObjects.GameObject;

    /**
     * Returns the total number of frames in this animation, or returns zero if no
     * animation has been loaded.
     */
    getTotalFrames(): number;

    /**
     * The internal update loop for the AnimationState Component.
     *
     * This is called automatically by the `Sprite.preUpdate` method.
     * @param time The current timestamp.
     * @param delta The delta time, in ms, elapsed since the last frame.
     */
    update(time: number, delta: number): void;

    /**
     * Sets the given Animation Frame as being the current frame
     * and applies it to the parent Game Object, adjusting size and origin as needed.
     * @param animationFrame The animation frame to change to.
     */
    setCurrentFrame(animationFrame: Phaser.Animations.AnimationFrame): Phaser.GameObjects.GameObject;

    /**
     * Advances the animation to the next frame, regardless of the time or animation state.
     * If the animation is set to repeat, or yoyo, this will still take effect.
     *
     * Calling this does not change the direction of the animation. I.e. if it was currently
     * playing in reverse, calling this method doesn't then change the direction to forwards.
     */
    nextFrame(): Phaser.GameObjects.GameObject;

    /**
     * Advances the animation to the previous frame, regardless of the time or animation state.
     * If the animation is set to repeat, or yoyo, this will still take effect.
     *
     * Calling this does not change the direction of the animation. I.e. if it was currently
     * playing in forwards, calling this method doesn't then change the direction to backwards.
     */
    previousFrame(): Phaser.GameObjects.GameObject;

    /**
     * Get an Animation instance that has been created locally on this Sprite.
     *
     * See the `create` method for more details.
     * @param key The key of the Animation to retrieve.
     */
    get(key: string): Phaser.Animations.Animation;

    /**
     * Checks to see if the given key is already used locally within the animations stored on this Sprite.
     * @param key The key of the Animation to check.
     */
    exists(key: string): boolean;

    /**
     * Creates a new Animation that is local specifically to this Sprite.
     *
     * When a Sprite owns an animation, it is kept out of the global Animation Manager, which means
     * you're free to use keys that may be already defined there. Unless you specifically need a Sprite
     * to have a unique animation, you should favor using global animations instead, as they allow for
     * the same animation to be used across multiple Sprites, saving on memory. However, if this Sprite
     * is the only one to use this animation, it's sensible to create it here.
     *
     * If an invalid key is given this method will return `false`.
     *
     * If you pass the key of an animation that already exists locally, that animation will be returned.
     *
     * A brand new animation is only created if the key is valid and not already in use by this Sprite.
     *
     * If you wish to re-use an existing key, call the `remove` method first, then this method.
     * @param config The configuration settings for the Animation.
     */
    create(config: Phaser.Types.Animations.Animation): Phaser.Animations.Animation | false;

    /**
     * Generate an array of {@link Phaser.Types.Animations.AnimationFrame} objects from a texture key and configuration object.
     *
     * Generates objects with string based frame names, as configured by the given {@link Phaser.Types.Animations.GenerateFrameNames}.
     *
     * It's a helper method, designed to make it easier for you to extract all of the frame names from texture atlases.
     * If you're working with a sprite sheet, see the `generateFrameNumbers` method instead.
     *
     * Example:
     *
     * If you have a texture atlases loaded called `gems` and it contains 6 frames called `ruby_0001`, `ruby_0002`, and so on,
     * then you can call this method using: `this.anims.generateFrameNames('gems', { prefix: 'ruby_', end: 6, zeroPad: 4 })`.
     *
     * The `end` value tells it to look for 6 frames, incrementally numbered, all starting with the prefix `ruby_`. The `zeroPad`
     * value tells it how many zeroes pad out the numbers. To create an animation using this method, you can do:
     *
     * ```javascript
     * this.anims.create({
     *   key: 'ruby',
     *   repeat: -1,
     *   frames: this.anims.generateFrameNames('gems', {
     *     prefix: 'ruby_',
     *     end: 6,
     *     zeroPad: 4
     *   })
     * });
     * ```
     *
     * Please see the animation examples for further details.
     * @param key The key for the texture containing the animation frames.
     * @param config The configuration object for the animation frame names.
     */
    generateFrameNames(key: string, config?: Phaser.Types.Animations.GenerateFrameNames): Phaser.Types.Animations.AnimationFrame[];

    /**
     * Generate an array of {@link Phaser.Types.Animations.AnimationFrame} objects from a texture key and configuration object.
     *
     * Generates objects with numbered frame names, as configured by the given {@link Phaser.Types.Animations.GenerateFrameNumbers}.
     *
     * If you're working with a texture atlas, see the `generateFrameNames` method instead.
     *
     * It's a helper method, designed to make it easier for you to extract frames from sprite sheets.
     * If you're working with a texture atlas, see the `generateFrameNames` method instead.
     *
     * Example:
     *
     * If you have a sprite sheet loaded called `explosion` and it contains 12 frames, then you can call this method using:
     * `this.anims.generateFrameNumbers('explosion', { start: 0, end: 12 })`.
     *
     * The `end` value tells it to stop after 12 frames. To create an animation using this method, you can do:
     *
     * ```javascript
     * this.anims.create({
     *   key: 'boom',
     *   frames: this.anims.generateFrameNames('explosion', {
     *     start: 0,
     *     end: 12
     *   })
     * });
     * ```
     *
     * Note that `start` is optional and you don't need to include it if the animation starts from frame 0.
     *
     * To specify an animation in reverse, swap the `start` and `end` values.
     *
     * If the frames are not sequential, you may pass an array of frame numbers instead, for example:
     *
     * `this.anims.generateFrameNumbers('explosion', { frames: [ 0, 1, 2, 1, 2, 3, 4, 0, 1, 2 ] })`
     *
     * Please see the animation examples and `GenerateFrameNumbers` config docs for further details.
     * @param key The key for the texture containing the animation frames.
     * @param config The configuration object for the animation frames.
     */
    generateFrameNumbers(key: string, config: Phaser.Types.Animations.GenerateFrameNumbers): Phaser.Types.Animations.AnimationFrame[];

    /**
     * Removes a locally created Animation from this Sprite, based on the given key.
     *
     * Once an Animation has been removed, this Sprite cannot play it again without re-creating it.
     * @param key The key of the animation to remove.
     */
    remove(key: string): Phaser.Animations.Animation;

    /**
     * Destroy this Animation component.
     *
     * Unregisters event listeners and cleans up its references.
     */
    destroy(): void;

    /**
     * `true` if the current animation is paused, otherwise `false`.
     */
    readonly isPaused: boolean;

  }

  namespace Events {
    /**
     * The Add Animation Event.
     *
     * This event is dispatched when a new animation is added to the global Animation Manager.
     *
     * This can happen either as a result of an animation instance being added to the Animation Manager,
     * or the Animation Manager creating a new animation directly.
     */
    const ADD_ANIMATION: any;

    /**
     * The Animation Complete Event.
     *
     * This event is dispatched by a Sprite when an animation playing on it completes playback.
     * This happens when the animation gets to the end of its sequence, factoring in any delays
     * or repeats it may have to process.
     *
     * An animation that is set to loop, or repeat forever, will never fire this event, because
     * it never actually completes. If you need to handle this, listen for the `ANIMATION_STOP`
     * event instead, as this is emitted when the animation is stopped directly.
     *
     * Listen for it on the Sprite using `sprite.on('animationcomplete', listener)`
     *
     * The animation event flow is as follows:
     *
     * 1. `ANIMATION_START`
     * 2. `ANIMATION_UPDATE` (repeated for however many frames the animation has)
     * 3. `ANIMATION_REPEAT` (only if the animation is set to repeat, it then emits more update events after this)
     * 4. `ANIMATION_COMPLETE` (only if there is a finite, or zero, repeat count)
     * 5. `ANIMATION_COMPLETE_KEY` (only if there is a finite, or zero, repeat count)
     *
     * If the animation is stopped directly, the `ANIMATION_STOP` event is dispatched instead of `ANIMATION_COMPLETE`.
     *
     * If the animation is restarted while it is already playing, `ANIMATION_RESTART` is emitted.
     */
    const ANIMATION_COMPLETE: any;

    /**
     * The Animation Complete Dynamic Key Event.
     *
     * This event is dispatched by a Sprite when an animation playing on it completes playback.
     * This happens when the animation gets to the end of its sequence, factoring in any delays
     * or repeats it may have to process.
     *
     * An animation that is set to loop, or repeat forever, will never fire this event, because
     * it never actually completes. If you need to handle this, listen for the `ANIMATION_STOP`
     * event instead, as this is emitted when the animation is stopped directly.
     *
     * The difference between this and the `ANIMATION_COMPLETE` event is that this one has a
     * dynamic event name that contains the name of the animation within it. For example,
     * if you had an animation called `explode` you could listen for the completion of that
     * specific animation by using: `sprite.on('animationcomplete-explode', listener)`. Or, if you
     * wish to use types: `sprite.on(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'explode', listener)`.
     *
     * The animation event flow is as follows:
     *
     * 1. `ANIMATION_START`
     * 2. `ANIMATION_UPDATE` (repeated for however many frames the animation has)
     * 3. `ANIMATION_REPEAT` (only if the animation is set to repeat, it then emits more update events after this)
     * 4. `ANIMATION_COMPLETE` (only if there is a finite, or zero, repeat count)
     * 5. `ANIMATION_COMPLETE_KEY` (only if there is a finite, or zero, repeat count)
     *
     * If the animation is stopped directly, the `ANIMATION_STOP` event is dispatched instead of `ANIMATION_COMPLETE`.
     *
     * If the animation is restarted while it is already playing, `ANIMATION_RESTART` is emitted.
     */
    const ANIMATION_COMPLETE_KEY: any;

    /**
     * The Animation Repeat Event.
     *
     * This event is dispatched by a Sprite when an animation repeats playing on it.
     * This happens if the animation was created, or played, with a `repeat` value specified.
     *
     * An animation will repeat when it reaches the end of its sequence.
     *
     * Listen for it on the Sprite using `sprite.on('animationrepeat', listener)`
     *
     * The animation event flow is as follows:
     *
     * 1. `ANIMATION_START`
     * 2. `ANIMATION_UPDATE` (repeated for however many frames the animation has)
     * 3. `ANIMATION_REPEAT` (only if the animation is set to repeat, it then emits more update events after this)
     * 4. `ANIMATION_COMPLETE` (only if there is a finite, or zero, repeat count)
     * 5. `ANIMATION_COMPLETE_KEY` (only if there is a finite, or zero, repeat count)
     *
     * If the animation is stopped directly, the `ANIMATION_STOP` event is dispatched instead of `ANIMATION_COMPLETE`.
     *
     * If the animation is restarted while it is already playing, `ANIMATION_RESTART` is emitted.
     */
    const ANIMATION_REPEAT: any;

    /**
     * The Animation Restart Event.
     *
     * This event is dispatched by a Sprite when an animation restarts playing on it.
     * This only happens when the `Sprite.anims.restart` method is called.
     *
     * Listen for it on the Sprite using `sprite.on('animationrestart', listener)`
     *
     * The animation event flow is as follows:
     *
     * 1. `ANIMATION_START`
     * 2. `ANIMATION_UPDATE` (repeated for however many frames the animation has)
     * 3. `ANIMATION_REPEAT` (only if the animation is set to repeat, it then emits more update events after this)
     * 4. `ANIMATION_COMPLETE` (only if there is a finite, or zero, repeat count)
     * 5. `ANIMATION_COMPLETE_KEY` (only if there is a finite, or zero, repeat count)
     *
     * If the animation is stopped directly, the `ANIMATION_STOP` event is dispatched instead of `ANIMATION_COMPLETE`.
     *
     * If the animation is restarted while it is already playing, `ANIMATION_RESTART` is emitted.
     */
    const ANIMATION_RESTART: any;

    /**
     * The Animation Start Event.
     *
     * This event is dispatched by a Sprite when an animation starts playing on it.
     * This happens when the animation is played, factoring in any delay that may have been specified.
     * This event happens after the delay has expired and prior to the first update event.
     *
     * Listen for it on the Sprite using `sprite.on('animationstart', listener)`
     *
     * The animation event flow is as follows:
     *
     * 1. `ANIMATION_START`
     * 2. `ANIMATION_UPDATE` (repeated for however many frames the animation has)
     * 3. `ANIMATION_REPEAT` (only if the animation is set to repeat, it then emits more update events after this)
     * 4. `ANIMATION_COMPLETE` (only if there is a finite, or zero, repeat count)
     * 5. `ANIMATION_COMPLETE_KEY` (only if there is a finite, or zero, repeat count)
     *
     * If the animation is stopped directly, the `ANIMATION_STOP` event is dispatched instead of `ANIMATION_COMPLETE`.
     *
     * If the animation is restarted while it is already playing, `ANIMATION_RESTART` is emitted.
     */
    const ANIMATION_START: any;

    /**
     * The Animation Stop Event.
     *
     * This event is dispatched by a Sprite when an animation is stopped on it. An animation
     * will only be stopeed if a method such as `Sprite.stop` or `Sprite.anims.stopAfterDelay`
     * is called. It can also be emitted if a new animation is started before the current one completes.
     *
     * Listen for it on the Sprite using `sprite.on('animationstop', listener)`
     *
     * The animation event flow is as follows:
     *
     * 1. `ANIMATION_START`
     * 2. `ANIMATION_UPDATE` (repeated for however many frames the animation has)
     * 3. `ANIMATION_REPEAT` (only if the animation is set to repeat, it then emits more update events after this)
     * 4. `ANIMATION_COMPLETE` (only if there is a finite, or zero, repeat count)
     * 5. `ANIMATION_COMPLETE_KEY` (only if there is a finite, or zero, repeat count)
     *
     * If the animation is stopped directly, the `ANIMATION_STOP` event is dispatched instead of `ANIMATION_COMPLETE`.
     *
     * If the animation is restarted while it is already playing, `ANIMATION_RESTART` is emitted.
     */
    const ANIMATION_STOP: any;

    /**
     * The Animation Update Event.
     *
     * This event is dispatched by a Sprite when an animation playing on it updates. This happens when the animation changes frame.
     * An animation will change frame based on the frme rate and other factors like `timeScale` and `delay`. It can also change
     * frame when stopped or restarted.
     *
     * Listen for it on the Sprite using `sprite.on('animationupdate', listener)`
     *
     * If an animation is playing faster than the game frame-rate can handle, it's entirely possible for it to emit several
     * update events in a single game frame, so please be aware of this in your code. The **final** event received that frame
     * is the one that is rendered to the game.
     *
     * The animation event flow is as follows:
     *
     * 1. `ANIMATION_START`
     * 2. `ANIMATION_UPDATE` (repeated for however many frames the animation has)
     * 3. `ANIMATION_REPEAT` (only if the animation is set to repeat, it then emits more update events after this)
     * 4. `ANIMATION_COMPLETE` (only if there is a finite, or zero, repeat count)
     * 5. `ANIMATION_COMPLETE_KEY` (only if there is a finite, or zero, repeat count)
     *
     * If the animation is stopped directly, the `ANIMATION_STOP` event is dispatched instead of `ANIMATION_COMPLETE`.
     *
     * If the animation is restarted while it is already playing, `ANIMATION_RESTART` is emitted.
     */
    const ANIMATION_UPDATE: any;

    /**
     * The Pause All Animations Event.
     *
     * This event is dispatched when the global Animation Manager is told to pause.
     *
     * When this happens all current animations will stop updating, although it doesn't necessarily mean
     * that the game has paused as well.
     */
    const PAUSE_ALL: any;

    /**
     * The Remove Animation Event.
     *
     * This event is dispatched when an animation is removed from the global Animation Manager.
     */
    const REMOVE_ANIMATION: any;

    /**
     * The Resume All Animations Event.
     *
     * This event is dispatched when the global Animation Manager resumes, having been previously paused.
     *
     * When this happens all current animations will continue updating again.
     */
    const RESUME_ALL: any;

  }
}