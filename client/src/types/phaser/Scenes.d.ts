namespace Phaser.Scenes {
  /**
   * Scene state.
   */
  var PENDING: number;

  /**
   * Scene state.
   */
  var INIT: number;

  /**
   * Scene state.
   */
  var START: number;

  /**
   * Scene state.
   */
  var LOADING: number;

  /**
   * Scene state.
   */
  var CREATING: number;

  /**
   * Scene state.
   */
  var RUNNING: number;

  /**
   * Scene state.
   */
  var PAUSED: number;

  /**
   * Scene state.
   */
  var SLEEPING: number;

  /**
   * Scene state.
   */
  var SHUTDOWN: number;

  /**
   * Scene state.
   */
  var DESTROYED: number;

  namespace Events {
    /**
     * The Game Object Added to Scene Event.
     *
     * This event is dispatched when a Game Object is added to a Scene.
     *
     * Listen for it from a Scene using `this.events.on('addedtoscene', listener)`.
     */
    const ADDED_TO_SCENE: any;

    /**
     * The Scene Systems Boot Event.
     *
     * This event is dispatched by a Scene during the Scene Systems boot process. Primarily used by Scene Plugins.
     *
     * Listen to it from a Scene using `this.events.on('boot', listener)`.
     */
    const BOOT: any;

    /**
     * The Scene Create Event.
     *
     * This event is dispatched by a Scene after it has been created by the Scene Manager.
     *
     * If a Scene has a `create` method then this event is emitted _after_ that has run.
     *
     * If there is a transition, this event will be fired after the `TRANSITION_START` event.
     *
     * Listen to it from a Scene using `this.events.on('create', listener)`.
     */
    const CREATE: any;

    /**
     * The Scene Systems Destroy Event.
     *
     * This event is dispatched by a Scene during the Scene Systems destroy process.
     *
     * Listen to it from a Scene using `this.events.on('destroy', listener)`.
     *
     * You should destroy any resources that may be in use by your Scene in this event handler.
     */
    const DESTROY: any;

    /**
     * The Scene Systems Pause Event.
     *
     * This event is dispatched by a Scene when it is paused, either directly via the `pause` method, or as an
     * action from another Scene.
     *
     * Listen to it from a Scene using `this.events.on('pause', listener)`.
     */
    const PAUSE: any;

    /**
     * The Scene Systems Post Update Event.
     *
     * This event is dispatched by a Scene during the main game loop step.
     *
     * The event flow for a single step of a Scene is as follows:
     *
     * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
     * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
     * 3. The `Scene.update` method is called, if it exists
     * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
     * 5. [PRE_RENDER]{@linkcode Phaser.Scenes.Events#event:PRE_RENDER}
     * 6. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
     *
     * Listen to it from a Scene using `this.events.on('postupdate', listener)`.
     *
     * A Scene will only run its step if it is active.
     */
    const POST_UPDATE: any;

    /**
     * The Scene Systems Pre-Render Event.
     *
     * This event is dispatched by a Scene during the main game loop step.
     *
     * The event flow for a single step of a Scene is as follows:
     *
     * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
     * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
     * 3. The `Scene.update` method is called, if it exists
     * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
     * 5. [PRE_RENDER]{@linkcode Phaser.Scenes.Events#event:PRE_RENDER}
     * 6. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
     *
     * Listen to this event from a Scene using `this.events.on('prerender', listener)`.
     *
     * A Scene will only render if it is visible.
     *
     * This event is dispatched after the Scene Display List is sorted and before the Scene is rendered.
     */
    const PRE_RENDER: any;

    /**
     * The Scene Systems Pre Update Event.
     *
     * This event is dispatched by a Scene during the main game loop step.
     *
     * The event flow for a single step of a Scene is as follows:
     *
     * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
     * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
     * 3. The `Scene.update` method is called, if it exists
     * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
     * 5. [PRE_RENDER]{@linkcode Phaser.Scenes.Events#event:PRE_RENDER}
     * 6. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
     *
     * Listen to it from a Scene using `this.events.on('preupdate', listener)`.
     *
     * A Scene will only run its step if it is active.
     */
    const PRE_UPDATE: any;

    /**
     * The Scene Systems Ready Event.
     *
     * This event is dispatched by a Scene during the Scene Systems start process.
     * By this point in the process the Scene is now fully active and rendering.
     * This event is meant for your game code to use, as all plugins have responded to the earlier 'start' event.
     *
     * Listen to it from a Scene using `this.events.on('ready', listener)`.
     */
    const READY: any;

    /**
     * The Game Object Removed from Scene Event.
     *
     * This event is dispatched when a Game Object is removed from a Scene.
     *
     * Listen for it from a Scene using `this.events.on('removedfromscene', listener)`.
     */
    const REMOVED_FROM_SCENE: any;

    /**
     * The Scene Systems Render Event.
     *
     * This event is dispatched by a Scene during the main game loop step.
     *
     * The event flow for a single step of a Scene is as follows:
     *
     * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
     * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
     * 3. The `Scene.update` method is called, if it exists
     * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
     * 5. [PRE_RENDER]{@linkcode Phaser.Scenes.Events#event:PRE_RENDER}
     * 6. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
     *
     * Listen to it from a Scene using `this.events.on('render', listener)`.
     *
     * A Scene will only render if it is visible.
     *
     * By the time this event is dispatched, the Scene will have already been rendered.
     */
    const RENDER: any;

    /**
     * The Scene Systems Resume Event.
     *
     * This event is dispatched by a Scene when it is resumed from a paused state, either directly via the `resume` method,
     * or as an action from another Scene.
     *
     * Listen to it from a Scene using `this.events.on('resume', listener)`.
     */
    const RESUME: any;

    /**
     * The Scene Systems Shutdown Event.
     *
     * This event is dispatched by a Scene during the Scene Systems shutdown process.
     *
     * Listen to it from a Scene using `this.events.on('shutdown', listener)`.
     *
     * You should free-up any resources that may be in use by your Scene in this event handler, on the understanding
     * that the Scene may, at any time, become active again. A shutdown Scene is not 'destroyed', it's simply not
     * currently active. Use the [DESTROY]{@linkcode Phaser.Scenes.Events#event:DESTROY} event to completely clear resources.
     */
    const SHUTDOWN: any;

    /**
     * The Scene Systems Sleep Event.
     *
     * This event is dispatched by a Scene when it is sent to sleep, either directly via the `sleep` method,
     * or as an action from another Scene.
     *
     * Listen to it from a Scene using `this.events.on('sleep', listener)`.
     */
    const SLEEP: any;

    /**
     * The Scene Systems Start Event.
     *
     * This event is dispatched by a Scene during the Scene Systems start process. Primarily used by Scene Plugins.
     *
     * Listen to it from a Scene using `this.events.on('start', listener)`.
     */
    const START: any;

    /**
     * The Scene Transition Complete Event.
     *
     * This event is dispatched by the Target Scene of a transition.
     *
     * It happens when the transition process has completed. This occurs when the duration timer equals or exceeds the duration
     * of the transition.
     *
     * Listen to it from a Scene using `this.events.on('transitioncomplete', listener)`.
     *
     * The Scene Transition event flow is as follows:
     *
     * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
     * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
     * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
     * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
     * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
     */
    const TRANSITION_COMPLETE: any;

    /**
     * The Scene Transition Init Event.
     *
     * This event is dispatched by the Target Scene of a transition.
     *
     * It happens immediately after the `Scene.init` method is called. If the Scene does not have an `init` method,
     * this event is not dispatched.
     *
     * Listen to it from a Scene using `this.events.on('transitioninit', listener)`.
     *
     * The Scene Transition event flow is as follows:
     *
     * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
     * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
     * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
     * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
     * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
     */
    const TRANSITION_INIT: any;

    /**
     * The Scene Transition Out Event.
     *
     * This event is dispatched by a Scene when it initiates a transition to another Scene.
     *
     * Listen to it from a Scene using `this.events.on('transitionout', listener)`.
     *
     * The Scene Transition event flow is as follows:
     *
     * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
     * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
     * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
     * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
     * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
     */
    const TRANSITION_OUT: any;

    /**
     * The Scene Transition Start Event.
     *
     * This event is dispatched by the Target Scene of a transition, only if that Scene was not asleep.
     *
     * It happens immediately after the `Scene.create` method is called. If the Scene does not have a `create` method,
     * this event is dispatched anyway.
     *
     * If the Target Scene was sleeping then the [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} event is
     * dispatched instead of this event.
     *
     * Listen to it from a Scene using `this.events.on('transitionstart', listener)`.
     *
     * The Scene Transition event flow is as follows:
     *
     * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
     * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
     * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
     * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
     * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
     */
    const TRANSITION_START: any;

    /**
     * The Scene Transition Wake Event.
     *
     * This event is dispatched by the Target Scene of a transition, only if that Scene was asleep before
     * the transition began. If the Scene was not asleep the [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} event is dispatched instead.
     *
     * Listen to it from a Scene using `this.events.on('transitionwake', listener)`.
     *
     * The Scene Transition event flow is as follows:
     *
     * 1. [TRANSITION_OUT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_OUT} - the Scene that started the transition will emit this event.
     * 2. [TRANSITION_INIT]{@linkcode Phaser.Scenes.Events#event:TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
     * 3. [TRANSITION_START]{@linkcode Phaser.Scenes.Events#event:TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
     * 4. [TRANSITION_WAKE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
     * 5. [TRANSITION_COMPLETE]{@linkcode Phaser.Scenes.Events#event:TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
     */
    const TRANSITION_WAKE: any;

    /**
     * The Scene Systems Update Event.
     *
     * This event is dispatched by a Scene during the main game loop step.
     *
     * The event flow for a single step of a Scene is as follows:
     *
     * 1. [PRE_UPDATE]{@linkcode Phaser.Scenes.Events#event:PRE_UPDATE}
     * 2. [UPDATE]{@linkcode Phaser.Scenes.Events#event:UPDATE}
     * 3. The `Scene.update` method is called, if it exists
     * 4. [POST_UPDATE]{@linkcode Phaser.Scenes.Events#event:POST_UPDATE}
     * 5. [PRE_RENDER]{@linkcode Phaser.Scenes.Events#event:PRE_RENDER}
     * 6. [RENDER]{@linkcode Phaser.Scenes.Events#event:RENDER}
     *
     * Listen to it from a Scene using `this.events.on('update', listener)`.
     *
     * A Scene will only run its step if it is active.
     */
    const UPDATE: any;

    /**
     * The Scene Systems Wake Event.
     *
     * This event is dispatched by a Scene when it is woken from sleep, either directly via the `wake` method,
     * or as an action from another Scene.
     *
     * Listen to it from a Scene using `this.events.on('wake', listener)`.
     */
    const WAKE: any;

  }

  /**
   * Builds an array of which physics plugins should be activated for the given Scene.
   * @param sys The scene system to get the physics systems of.
   */
  function GetPhysicsPlugins(sys: Phaser.Scenes.Systems): any[];

  /**
   * Builds an array of which plugins (not including physics plugins) should be activated for the given Scene.
   * @param sys The Scene Systems object to check for plugins.
   */
  function GetScenePlugins(sys: Phaser.Scenes.Systems): any[];

  /**
   * The Scene Manager.
   *
   * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the
   * Scenes in a Game instance.
   *
   * You should not usually interact directly with the Scene Manager at all. Instead, you should use
   * the Scene Plugin, which is available from every Scene in your game via the `this.scene` property.
   *
   * Using methods in this Scene Manager directly will break queued operations and can cause runtime
   * errors. Instead, go via the Scene Plugin. Every feature this Scene Manager provides is also
   * available via the Scene Plugin.
   */
  class SceneManager {
    /**
     *
     * @param game The Phaser.Game instance this Scene Manager belongs to.
     * @param sceneConfig Scene specific configuration settings.
     */
    constructor(game: Phaser.Game, sceneConfig: object);

    /**
     * The Game that this SceneManager belongs to.
     */
    game: Phaser.Game;

    /**
     * An object that maps the keys to the scene so we can quickly get a scene from a key without iteration.
     */
    keys: Record<string, Phaser.Scene>;

    /**
     * The array in which all of the scenes are kept.
     */
    scenes: Phaser.Scene[];

    /**
     * Is the Scene Manager actively processing the Scenes list?
     */
    readonly isProcessing: boolean;

    /**
     * Has the Scene Manager properly started?
     */
    readonly isBooted: boolean;

    /**
     * Do any of the Cameras in any of the Scenes require a custom viewport?
     * If not we can skip scissor tests.
     */
    customViewports: number;

    /**
     * Process the Scene operations queue.
     */
    processQueue(): void;

    /**
     * Adds a new Scene into the SceneManager.
     * You must give each Scene a unique key by which you'll identify it.
     *
     * The `sceneConfig` can be:
     *
     * * A `Phaser.Scene` object, or an object that extends it.
     * * A plain JavaScript object
     * * A JavaScript ES6 Class that extends `Phaser.Scene`
     * * A JavaScript ES5 prototype based Class
     * * A JavaScript function
     *
     * If a function is given then a new Scene will be created by calling it.
     * @param key A unique key used to reference the Scene, i.e. `MainMenu` or `Level1`.
     * @param sceneConfig The config for the Scene
     * @param autoStart If `true` the Scene will be started immediately after being added. Default false.
     * @param data Optional data object. This will be set as `Scene.settings.data` and passed to `Scene.init`, and `Scene.create`.
     */
    add(key: string, sceneConfig: Phaser.Scene | Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig | Function, autoStart?: boolean, data?: object): Phaser.Scene;

    /**
     * Removes a Scene from the SceneManager.
     *
     * The Scene is removed from the local scenes array, it's key is cleared from the keys
     * cache and Scene.Systems.destroy is then called on it.
     *
     * If the SceneManager is processing the Scenes when this method is called it will
     * queue the operation for the next update sequence.
     * @param key A unique key used to reference the Scene, i.e. `MainMenu` or `Level1`.
     */
    remove(key: string): this;

    /**
     * Updates the Scenes.
     * @param time Time elapsed.
     * @param delta Delta time from the last update.
     */
    update(time: number, delta: number): void;

    /**
     * Renders the Scenes.
     * @param renderer The renderer to use.
     */
    render(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

    /**
     * Returns an array of all the current Scenes being managed by this Scene Manager.
     *
     * You can filter the output by the active state of the Scene and choose to have
     * the array returned in normal or reversed order.
     * @param isActive Only include Scene's that are currently active? Default true.
     * @param inReverse Return the array of Scenes in reverse? Default false.
     */
    getScenes(isActive?: boolean, inReverse?: boolean): Phaser.Scene[];

    /**
     * Retrieves a Scene.
     * @param key The Scene to retrieve.
     */
    getScene(key: string | Phaser.Scene): Phaser.Scene;

    /**
     * Determines whether a Scene is running.
     * @param key The Scene to check.
     */
    isActive(key: string | Phaser.Scene): boolean;

    /**
     * Determines whether a Scene is paused.
     * @param key The Scene to check.
     */
    isPaused(key: string | Phaser.Scene): boolean;

    /**
     * Determines whether a Scene is visible.
     * @param key The Scene to check.
     */
    isVisible(key: string | Phaser.Scene): boolean;

    /**
     * Determines whether a Scene is sleeping.
     * @param key The Scene to check.
     */
    isSleeping(key: string | Phaser.Scene): boolean;

    /**
     * Pauses the given Scene.
     * @param key The Scene to pause.
     * @param data An optional data object that will be passed to the Scene and emitted by its pause event.
     */
    pause(key: string | Phaser.Scene, data?: object): this;

    /**
     * Resumes the given Scene.
     * @param key The Scene to resume.
     * @param data An optional data object that will be passed to the Scene and emitted by its resume event.
     */
    resume(key: string | Phaser.Scene, data?: object): this;

    /**
     * Puts the given Scene to sleep.
     * @param key The Scene to put to sleep.
     * @param data An optional data object that will be passed to the Scene and emitted by its sleep event.
     */
    sleep(key: string | Phaser.Scene, data?: object): this;

    /**
     * Awakens the given Scene.
     * @param key The Scene to wake up.
     * @param data An optional data object that will be passed to the Scene and emitted by its wake event.
     */
    wake(key: string | Phaser.Scene, data?: object): this;

    /**
     * Runs the given Scene.
     *
     * If the given Scene is paused, it will resume it. If sleeping, it will wake it.
     * If not running at all, it will be started.
     *
     * Use this if you wish to open a modal Scene by calling `pause` on the current
     * Scene, then `run` on the modal Scene.
     * @param key The Scene to run.
     * @param data A data object that will be passed to the Scene on start, wake, or resume.
     */
    run(key: string | Phaser.Scene, data?: object): this;

    /**
     * Starts the given Scene.
     * @param key The Scene to start.
     * @param data Optional data object to pass to `Scene.Settings` and `Scene.init`, and `Scene.create`.
     */
    start(key: string | Phaser.Scene, data?: object): this;

    /**
     * Stops the given Scene.
     * @param key The Scene to stop.
     * @param data Optional data object to pass to Scene.shutdown.
     */
    stop(key: string | Phaser.Scene, data?: object): this;

    /**
     * Sleeps one one Scene and starts the other.
     * @param from The Scene to sleep.
     * @param to The Scene to start.
     */
    switch(from: string | Phaser.Scene, to: string | Phaser.Scene): this;

    /**
     * Retrieves a Scene by numeric index.
     * @param index The index of the Scene to retrieve.
     */
    getAt(index: number): Phaser.Scene | undefined;

    /**
     * Retrieves the numeric index of a Scene.
     * @param key The key of the Scene.
     */
    getIndex(key: string | Phaser.Scene): number;

    /**
     * Brings a Scene to the top of the Scenes list.
     *
     * This means it will render above all other Scenes.
     * @param key The Scene to move.
     */
    bringToTop(key: string | Phaser.Scene): this;

    /**
     * Sends a Scene to the back of the Scenes list.
     *
     * This means it will render below all other Scenes.
     * @param key The Scene to move.
     */
    sendToBack(key: string | Phaser.Scene): this;

    /**
     * Moves a Scene down one position in the Scenes list.
     * @param key The Scene to move.
     */
    moveDown(key: string | Phaser.Scene): this;

    /**
     * Moves a Scene up one position in the Scenes list.
     * @param key The Scene to move.
     */
    moveUp(key: string | Phaser.Scene): this;

    /**
     * Moves a Scene so it is immediately above another Scene in the Scenes list.
     *
     * This means it will render over the top of the other Scene.
     * @param keyA The Scene that Scene B will be moved above.
     * @param keyB The Scene to be moved.
     */
    moveAbove(keyA: string | Phaser.Scene, keyB: string | Phaser.Scene): this;

    /**
     * Moves a Scene so it is immediately below another Scene in the Scenes list.
     *
     * This means it will render behind the other Scene.
     * @param keyA The Scene that Scene B will be moved above.
     * @param keyB The Scene to be moved.
     */
    moveBelow(keyA: string | Phaser.Scene, keyB: string | Phaser.Scene): this;

    /**
     * Swaps the positions of two Scenes in the Scenes list.
     * @param keyA The first Scene to swap.
     * @param keyB The second Scene to swap.
     */
    swapPosition(keyA: string | Phaser.Scene, keyB: string | Phaser.Scene): this;

    /**
     * Dumps debug information about each Scene to the developer console.
     */
    dump(): void;

    /**
     * Destroy this Scene Manager and all of its systems.
     *
     * This process cannot be reversed.
     *
     * This method is called automatically when a Phaser Game instance is destroyed.
     */
    destroy(): void;

  }

  /**
   * The Scene Plugin is the main interface to the Scene Manager and allows you to control
   * any Scene running in your game. You should always use this plugin. By default, it is
   * mapped to the Scene property `this.scene`. Meaning, from within a Scene, you can call
   * methods such as `this.scene.start()`.
   *
   * Note that nearly all methods in this class are run on a queue-basis and not
   * immediately. For example, calling `this.scene.launch('SceneB')` will try to
   * launch SceneB when the Scene Manager next updates, which is at the start of the game
   * step. All operations are queued and run in the order in which they are invoked here.
   */
  class ScenePlugin {
    /**
     *
     * @param scene The Scene that this ScenePlugin belongs to.
     */
    constructor(scene: Phaser.Scene);

    /**
     * The Scene that this ScenePlugin belongs to.
     */
    scene: Phaser.Scene;

    /**
     * The Scene Systems instance of the Scene that this ScenePlugin belongs to.
     */
    systems: Phaser.Scenes.Systems;

    /**
     * The settings of the Scene this ScenePlugin belongs to.
     */
    settings: Phaser.Types.Scenes.SettingsObject;

    /**
     * The key of the Scene this ScenePlugin belongs to.
     */
    key: string;

    /**
     * The Game's SceneManager.
     */
    manager: Phaser.Scenes.SceneManager;

    /**
     * If this Scene is currently transitioning to another, this holds
     * the current percentage of the transition progress, between 0 and 1.
     */
    transitionProgress: number;

    /**
     * Shutdown this Scene and run the given one.
     *
     * This will happen at the next Scene Manager update, not immediately.
     * @param key The Scene to start.
     * @param data The Scene data.
     */
    start(key?: string | Phaser.Scene, data?: object): this;

    /**
     * Restarts this Scene.
     *
     * This will happen at the next Scene Manager update, not immediately.
     * @param data The Scene data.
     */
    restart(data?: object): this;

    /**
     * This will start a transition from the current Scene to the target Scene given.
     *
     * The transition will last for the duration specified in milliseconds.
     *
     * You can have the target Scene moved above or below this one in the display list.
     *
     * You can specify an update callback. This callback will be invoked _every frame_ for the duration
     * of the transition.
     *
     * This Scene can either be sent to sleep at the end of the transition, or stopped. The default is to stop.
     *
     * There are also 5 transition related events: This scene will emit the event `transitionout` when
     * the transition begins, which is typically the frame after calling this method.
     *
     * The target Scene will emit the event `transitioninit` when that Scene's `init` method is called.
     * It will then emit the event `transitionstart` when its `create` method is called.
     * If the Scene was sleeping and has been woken up, it will emit the event `transitionwake` instead of these two,
     * as the Scenes `init` and `create` methods are not invoked when a Scene wakes up.
     *
     * When the duration of the transition has elapsed it will emit the event `transitioncomplete`.
     * These events are cleared of all listeners when the Scene shuts down, but not if it is sent to sleep.
     *
     * It's important to understand that the duration of the transition begins the moment you call this method.
     * If the Scene you are transitioning to includes delayed processes, such as waiting for files to load, the
     * time still counts down even while that is happening. If the game itself pauses, or something else causes
     * this Scenes update loop to stop, then the transition will also pause for that duration. There are
     * checks in place to prevent you accidentally stopping a transitioning Scene but if you've got code to
     * override this understand that until the target Scene completes it might never be unlocked for input events.
     * @param config The transition configuration object.
     */
    transition(config: Phaser.Types.Scenes.SceneTransitionConfig): boolean;

    /**
     * Add the Scene into the Scene Manager and start it if 'autoStart' is true or the Scene config 'active' property is set.
     * @param key A unique key used to reference the Scene, i.e. `MainMenu` or `Level1`.
     * @param sceneConfig The config for the Scene
     * @param autoStart If `true` the Scene will be started immediately after being added. Default false.
     * @param data Optional data object. This will be set as `Scene.settings.data` and passed to `Scene.init`, and `Scene.create`.
     */
    add(key: string, sceneConfig: Phaser.Scene | Phaser.Types.Scenes.SettingsConfig | Phaser.Types.Scenes.CreateSceneFromObjectConfig | Function, autoStart?: boolean, data?: object): Phaser.Scene;

    /**
     * Launch the given Scene and run it in parallel with this one.
     *
     * This will happen at the next Scene Manager update, not immediately.
     * @param key The Scene to launch.
     * @param data The Scene data.
     */
    launch(key: string | Phaser.Scene, data?: object): this;

    /**
     * Runs the given Scene, but does not change the state of this Scene.
     *
     * This will happen at the next Scene Manager update, not immediately.
     *
     * If the given Scene is paused, it will resume it. If sleeping, it will wake it.
     * If not running at all, it will be started.
     *
     * Use this if you wish to open a modal Scene by calling `pause` on the current
     * Scene, then `run` on the modal Scene.
     * @param key The Scene to run.
     * @param data A data object that will be passed to the Scene and emitted in its ready, wake, or resume events.
     */
    run(key: string | Phaser.Scene, data?: object): this;

    /**
     * Pause the Scene - this stops the update step from happening but it still renders.
     *
     * This will happen at the next Scene Manager update, not immediately.
     * @param key The Scene to pause.
     * @param data An optional data object that will be passed to the Scene and emitted in its pause event.
     */
    pause(key?: string | Phaser.Scene, data?: object): this;

    /**
     * Resume the Scene - starts the update loop again.
     *
     * This will happen at the next Scene Manager update, not immediately.
     * @param key The Scene to resume.
     * @param data An optional data object that will be passed to the Scene and emitted in its resume event.
     */
    resume(key?: string | Phaser.Scene, data?: object): this;

    /**
     * Makes the Scene sleep (no update, no render) but doesn't shutdown.
     *
     * This will happen at the next Scene Manager update, not immediately.
     * @param key The Scene to put to sleep.
     * @param data An optional data object that will be passed to the Scene and emitted in its sleep event.
     */
    sleep(key?: string | Phaser.Scene, data?: object): this;

    /**
     * Makes the Scene wake-up (starts update and render)
     *
     * This will happen at the next Scene Manager update, not immediately.
     * @param key The Scene to wake up.
     * @param data An optional data object that will be passed to the Scene and emitted in its wake event.
     */
    wake(key?: string | Phaser.Scene, data?: object): this;

    /**
     * Makes this Scene sleep then starts the Scene given.
     *
     * This will happen at the next Scene Manager update, not immediately.
     * @param key The Scene to start.
     */
    switch(key: string | Phaser.Scene): this;

    /**
     * Shutdown the Scene, clearing display list, timers, etc.
     *
     * This happens at the next Scene Manager update, not immediately.
     * @param key The Scene to stop.
     * @param data Optional data object to pass to Scene.Systems.shutdown.
     */
    stop(key?: string | Phaser.Scene, data?: any): this;

    /**
     * Sets the active state of the given Scene.
     * @param value If `true` the Scene will be resumed. If `false` it will be paused.
     * @param key The Scene to set the active state of.
     * @param data An optional data object that will be passed to the Scene and emitted with its events.
     */
    setActive(value: boolean, key?: string | Phaser.Scene, data?: object): this;

    /**
     * Sets the visible state of the given Scene.
     * @param value The visible value.
     * @param key The Scene to set the visible state for.
     */
    setVisible(value: boolean, key?: string | Phaser.Scene): this;

    /**
     * Checks if the given Scene is sleeping or not?
     * @param key The Scene to check.
     */
    isSleeping(key?: string | Phaser.Scene): boolean;

    /**
     * Checks if the given Scene is running or not?
     * @param key The Scene to check.
     */
    isActive(key?: string | Phaser.Scene): boolean;

    /**
     * Checks if the given Scene is paused or not?
     * @param key The Scene to check.
     */
    isPaused(key?: string | Phaser.Scene): boolean;

    /**
     * Checks if the given Scene is visible or not?
     * @param key The Scene to check.
     */
    isVisible(key?: string | Phaser.Scene): boolean;

    /**
     * Swaps the position of two scenes in the Scenes list.
     *
     * This controls the order in which they are rendered and updated.
     * @param keyA The first Scene to swap.
     * @param keyB The second Scene to swap. If none is given it defaults to this Scene.
     */
    swapPosition(keyA: string | Phaser.Scene, keyB?: string | Phaser.Scene): this;

    /**
     * Swaps the position of two scenes in the Scenes list, so that Scene B is directly above Scene A.
     *
     * This controls the order in which they are rendered and updated.
     * @param keyA The Scene that Scene B will be moved to be above.
     * @param keyB The Scene to be moved. If none is given it defaults to this Scene.
     */
    moveAbove(keyA: string | Phaser.Scene, keyB?: string | Phaser.Scene): this;

    /**
     * Swaps the position of two scenes in the Scenes list, so that Scene B is directly below Scene A.
     *
     * This controls the order in which they are rendered and updated.
     * @param keyA The Scene that Scene B will be moved to be below.
     * @param keyB The Scene to be moved. If none is given it defaults to this Scene.
     */
    moveBelow(keyA: string | Phaser.Scene, keyB?: string | Phaser.Scene): this;

    /**
     * Removes a Scene from the SceneManager.
     *
     * The Scene is removed from the local scenes array, it's key is cleared from the keys
     * cache and Scene.Systems.destroy is then called on it.
     *
     * If the SceneManager is processing the Scenes when this method is called it will
     * queue the operation for the next update sequence.
     * @param key The Scene to be removed.
     */
    remove(key?: string | Phaser.Scene): this;

    /**
     * Moves a Scene up one position in the Scenes list.
     * @param key The Scene to move.
     */
    moveUp(key?: string | Phaser.Scene): this;

    /**
     * Moves a Scene down one position in the Scenes list.
     * @param key The Scene to move.
     */
    moveDown(key?: string | Phaser.Scene): this;

    /**
     * Brings a Scene to the top of the Scenes list.
     *
     * This means it will render above all other Scenes.
     * @param key The Scene to move.
     */
    bringToTop(key?: string | Phaser.Scene): this;

    /**
     * Sends a Scene to the back of the Scenes list.
     *
     * This means it will render below all other Scenes.
     * @param key The Scene to move.
     */
    sendToBack(key?: string | Phaser.Scene): this;

    /**
     * Retrieve a Scene.
     * @param key The Scene to retrieve.
     */
    get(key: string | Phaser.Scene): Phaser.Scene;

    /**
     * Retrieves the numeric index of a Scene in the Scenes list.
     * @param key The Scene to get the index of.
     */
    getIndex(key?: string | Phaser.Scene): number;

  }

  namespace Settings {
    /**
     * Takes a Scene configuration object and returns a fully formed System Settings object.
     * @param config The Scene configuration object used to create this Scene Settings.
     */
    function create(config: string | Phaser.Types.Scenes.SettingsConfig): Phaser.Types.Scenes.SettingsObject;

  }

  /**
   * The Scene Systems class.
   *
   * This class is available from within a Scene under the property `sys`.
   * It is responsible for managing all of the plugins a Scene has running, including the display list, and
   * handling the update step and renderer. It also contains references to global systems belonging to Game.
   */
  class Systems {
    /**
     *
     * @param scene The Scene that owns this Systems instance.
     * @param config Scene specific configuration settings.
     */
    constructor(scene: Phaser.Scene, config: string | Phaser.Types.Scenes.SettingsConfig);

    /**
     * A reference to the Scene that these Systems belong to.
     */
    scene: Phaser.Scene;

    /**
     * A reference to the Phaser Game instance.
     */
    game: Phaser.Game;

    /**
     * A reference to either the Canvas or WebGL Renderer that this Game is using.
     */
    renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer;

    /**
     * The Facebook Instant Games Plugin.
     */
    facebook: Phaser.FacebookInstantGamesPlugin;

    /**
     * The Scene Configuration object, as passed in when creating the Scene.
     */
    config: string | Phaser.Types.Scenes.SettingsConfig;

    /**
     * The Scene Settings. This is the parsed output based on the Scene configuration.
     */
    settings: Phaser.Types.Scenes.SettingsObject;

    /**
     * A handy reference to the Scene canvas / context.
     */
    canvas: HTMLCanvasElement;

    /**
     * A reference to the Canvas Rendering Context being used by the renderer.
     */
    context: CanvasRenderingContext2D;

    /**
     * A reference to the global Animations Manager.
     *
     * In the default set-up you can access this from within a Scene via the `this.anims` property.
     */
    anims: Phaser.Animations.AnimationManager;

    /**
     * A reference to the global Cache. The Cache stores all files bought in to Phaser via
     * the Loader, with the exception of images. Images are stored in the Texture Manager.
     *
     * In the default set-up you can access this from within a Scene via the `this.cache` property.
     */
    cache: Phaser.Cache.CacheManager;

    /**
     * A reference to the global Plugins Manager.
     *
     * In the default set-up you can access this from within a Scene via the `this.plugins` property.
     */
    plugins: Phaser.Plugins.PluginManager;

    /**
     * A reference to the global registry. This is a game-wide instance of the Data Manager, allowing
     * you to exchange data between Scenes via a universal and shared point.
     *
     * In the default set-up you can access this from within a Scene via the `this.registry` property.
     */
    registry: Phaser.Data.DataManager;

    /**
     * A reference to the global Scale Manager.
     *
     * In the default set-up you can access this from within a Scene via the `this.scale` property.
     */
    scale: Phaser.Scale.ScaleManager;

    /**
     * A reference to the global Sound Manager.
     *
     * In the default set-up you can access this from within a Scene via the `this.sound` property.
     */
    sound: Phaser.Sound.NoAudioSoundManager | Phaser.Sound.HTML5AudioSoundManager | Phaser.Sound.WebAudioSoundManager;

    /**
     * A reference to the global Texture Manager.
     *
     * In the default set-up you can access this from within a Scene via the `this.textures` property.
     */
    textures: Phaser.Textures.TextureManager;

    /**
     * A reference to the Scene's Game Object Factory.
     *
     * Use this to quickly and easily create new Game Object's.
     *
     * In the default set-up you can access this from within a Scene via the `this.add` property.
     */
    add: Phaser.GameObjects.GameObjectFactory;

    /**
     * A reference to the Scene's Camera Manager.
     *
     * Use this to manipulate and create Cameras for this specific Scene.
     *
     * In the default set-up you can access this from within a Scene via the `this.cameras` property.
     */
    cameras: Phaser.Cameras.Scene2D.CameraManager;

    /**
     * A reference to the Scene's Display List.
     *
     * Use this to organize the children contained in the display list.
     *
     * In the default set-up you can access this from within a Scene via the `this.children` property.
     */
    displayList: Phaser.GameObjects.DisplayList;

    /**
     * A reference to the Scene's Event Manager.
     *
     * Use this to listen for Scene specific events, such as `pause` and `shutdown`.
     *
     * In the default set-up you can access this from within a Scene via the `this.events` property.
     */
    events: Phaser.Events.EventEmitter;

    /**
     * A reference to the Scene's Game Object Creator.
     *
     * Use this to quickly and easily create new Game Object's. The difference between this and the
     * Game Object Factory, is that the Creator just creates and returns Game Object instances, it
     * doesn't then add them to the Display List or Update List.
     *
     * In the default set-up you can access this from within a Scene via the `this.make` property.
     */
    make: Phaser.GameObjects.GameObjectCreator;

    /**
     * A reference to the Scene Manager Plugin.
     *
     * Use this to manipulate both this and other Scene's in your game, for example to launch a parallel Scene,
     * or pause or resume a Scene, or switch from this Scene to another.
     *
     * In the default set-up you can access this from within a Scene via the `this.scene` property.
     */
    scenePlugin: Phaser.Scenes.ScenePlugin;

    /**
     * A reference to the Scene's Update List.
     *
     * Use this to organize the children contained in the update list.
     *
     * The Update List is responsible for managing children that need their `preUpdate` methods called,
     * in order to process so internal components, such as Sprites with Animations.
     *
     * In the default set-up there is no reference to this from within the Scene itself.
     */
    updateList: Phaser.GameObjects.UpdateList;

    /**
     * This method is called only once by the Scene Manager when the Scene is instantiated.
     * It is responsible for setting up all of the Scene plugins and references.
     * It should never be called directly.
     * @param game A reference to the Phaser Game instance.
     */
    protected init(game: Phaser.Game): void;

    /**
     * A single game step. Called automatically by the Scene Manager as a result of a Request Animation
     * Frame or Set Timeout call to the main Game instance.
     * @param time The time value from the most recent Game step. Typically a high-resolution timer value, or Date.now().
     * @param delta The delta value since the last frame. This is smoothed to avoid delta spikes by the TimeStep class.
     */
    step(time: number, delta: number): void;

    /**
     * Called automatically by the Scene Manager.
     * Instructs the Scene to render itself via its Camera Manager to the renderer given.
     * @param renderer The renderer that invoked the render call.
     */
    render(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

    /**
     * Force a sort of the display list on the next render.
     */
    queueDepthSort(): void;

    /**
     * Immediately sorts the display list if the flag is set.
     */
    depthSort(): void;

    /**
     * Pause this Scene.
     * A paused Scene still renders, it just doesn't run ANY of its update handlers or systems.
     * @param data A data object that will be passed in the 'pause' event.
     */
    pause(data?: object): Phaser.Scenes.Systems;

    /**
     * Resume this Scene from a paused state.
     * @param data A data object that will be passed in the 'resume' event.
     */
    resume(data?: object): Phaser.Scenes.Systems;

    /**
     * Send this Scene to sleep.
     *
     * A sleeping Scene doesn't run its update step or render anything, but it also isn't shut down
     * or has any of its systems or children removed, meaning it can be re-activated at any point and
     * will carry on from where it left off. It also keeps everything in memory and events and callbacks
     * from other Scenes may still invoke changes within it, so be careful what is left active.
     * @param data A data object that will be passed in the 'sleep' event.
     */
    sleep(data?: object): Phaser.Scenes.Systems;

    /**
     * Wake-up this Scene if it was previously asleep.
     * @param data A data object that will be passed in the 'wake' event.
     */
    wake(data?: object): Phaser.Scenes.Systems;

    /**
     * Returns any data that was sent to this Scene by another Scene.
     *
     * The data is also passed to `Scene.init` and in various Scene events, but
     * you can access it at any point via this method.
     */
    getData(): any;

    /**
     * Is this Scene sleeping?
     */
    isSleeping(): boolean;

    /**
     * Is this Scene running?
     */
    isActive(): boolean;

    /**
     * Is this Scene paused?
     */
    isPaused(): boolean;

    /**
     * Is this Scene currently transitioning out to, or in from another Scene?
     */
    isTransitioning(): boolean;

    /**
     * Is this Scene currently transitioning out from itself to another Scene?
     */
    isTransitionOut(): boolean;

    /**
     * Is this Scene currently transitioning in from another Scene?
     */
    isTransitionIn(): boolean;

    /**
     * Is this Scene visible and rendering?
     */
    isVisible(): boolean;

    /**
     * Sets the visible state of this Scene.
     * An invisible Scene will not render, but will still process updates.
     * @param value `true` to render this Scene, otherwise `false`.
     */
    setVisible(value: boolean): Phaser.Scenes.Systems;

    /**
     * Set the active state of this Scene.
     *
     * An active Scene will run its core update loop.
     * @param value If `true` the Scene will be resumed, if previously paused. If `false` it will be paused.
     * @param data A data object that will be passed in the 'resume' or 'pause' events.
     */
    setActive(value: boolean, data?: object): Phaser.Scenes.Systems;

    /**
     * Start this Scene running and rendering.
     * Called automatically by the SceneManager.
     * @param data Optional data object that may have been passed to this Scene from another.
     */
    start(data: object): void;

    /**
     * Shutdown this Scene and send a shutdown event to all of its systems.
     * A Scene that has been shutdown will not run its update loop or render, but it does
     * not destroy any of its plugins or references. It is put into hibernation for later use.
     * If you don't ever plan to use this Scene again, then it should be destroyed instead
     * to free-up resources.
     * @param data A data object that will be passed in the 'shutdown' event.
     */
    shutdown(data?: object): void;

  }

}