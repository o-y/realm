namespace Phaser.Time {
  /**
   * The Clock is a Scene plugin which creates and updates Timer Events for its Scene.
   */
  class Clock {
    /**
     *
     * @param scene The Scene which owns this Clock.
     */
    constructor(scene: Phaser.Scene);

    /**
     * The Scene which owns this Clock.
     */
    scene: Phaser.Scene;

    /**
     * The Scene Systems object of the Scene which owns this Clock.
     */
    systems: Phaser.Scenes.Systems;

    /**
     * The current time of the Clock, in milliseconds.
     *
     * If accessed externally, this is equivalent to the `time` parameter normally passed to a Scene's `update` method.
     */
    now: number;

    /**
     * The scale of the Clock's time delta.
     *
     * The time delta is the time elapsed between two consecutive frames and influences the speed of time for this Clock and anything which uses it, such as its Timer Events. Values higher than 1 increase the speed of time, while values smaller than 1 decrease it. A value of 0 freezes time and is effectively equivalent to pausing the Clock.
     */
    timeScale: number;

    /**
     * Whether the Clock is paused (`true`) or active (`false`).
     *
     * When paused, the Clock will not update any of its Timer Events, thus freezing time.
     */
    paused: boolean;

    /**
     * Creates a Timer Event and adds it to this Clock at the start of the next frame.
     *
     * You can pass in either a `TimerEventConfig` object, from with a new `TimerEvent` will
     * be created, or you can pass in a `TimerEvent` instance.
     *
     * If passing an instance please make sure that this instance hasn't been used before.
     * If it has ever entered a 'completed' state then it will no longer be suitable to
     * run again.
     *
     * Also, if the `TimerEvent` instance is being used by _another_ Clock (in another Scene)
     * it will still be updated by that Clock as well, so be careful when using this feature.
     * @param config The configuration for the Timer Event, or an existing Timer Event object.
     */
    addEvent(config: Phaser.Time.TimerEvent | Phaser.Types.Time.TimerEventConfig): Phaser.Time.TimerEvent;

    /**
     * Creates a Timer Event and adds it to the Clock at the start of the frame.
     *
     * This is a shortcut for {@link #addEvent} which can be shorter and is compatible with the syntax of the GreenSock Animation Platform (GSAP).
     * @param delay The delay of the function call, in milliseconds.
     * @param callback The function to call after the delay expires.
     * @param args The arguments to call the function with.
     * @param callbackScope The scope (`this` object) to call the function with.
     */
    delayedCall(delay: number, callback: Function, args?: any[], callbackScope?: any): Phaser.Time.TimerEvent;

    /**
     * Clears and recreates the array of pending Timer Events.
     */
    clearPendingEvents(): this;

    /**
     * Removes the given Timer Event, or an array of Timer Events, from this Clock.
     *
     * The events are removed from all internal lists (active, pending and removal),
     * freeing the event up to be re-used.
     * @param events The Timer Event, or an array of Timer Events, to remove from this Clock.
     */
    removeEvent(events: Phaser.Time.TimerEvent | Phaser.Time.TimerEvent[]): this;

    /**
     * Schedules all active Timer Events for removal at the start of the frame.
     */
    removeAllEvents(): this;

    /**
     * Updates the arrays of active and pending Timer Events. Called at the start of the frame.
     * @param time The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
     * @param delta The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    preUpdate(time: number, delta: number): void;

    /**
     * Updates the Clock's internal time and all of its Timer Events.
     * @param time The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
     * @param delta The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    update(time: number, delta: number): void;

  }

  /**
   * A Timer Event represents a delayed function call. It's managed by a Scene's {@link Clock} and will call its function after a set amount of time has passed. The Timer Event can optionally repeat - i.e. call its function multiple times before finishing, or loop indefinitely.
   *
   * Because it's managed by a Clock, a Timer Event is based on game time, will be affected by its Clock's time scale, and will pause if its Clock pauses.
   */
  class TimerEvent {
    /**
     *
     * @param config The configuration for the Timer Event, including its delay and callback.
     */
    constructor(config: Phaser.Types.Time.TimerEventConfig);

    /**
     * The delay in ms at which this TimerEvent fires.
     */
    readonly delay: number;

    /**
     * The total number of times this TimerEvent will repeat before finishing.
     */
    readonly repeat: number;

    /**
     * If repeating this contains the current repeat count.
     */
    repeatCount: number;

    /**
     * True if this TimerEvent loops, otherwise false.
     */
    readonly loop: boolean;

    /**
     * The callback that will be called when the TimerEvent occurs.
     */
    callback: Function;

    /**
     * The scope in which the callback will be called.
     */
    callbackScope: object;

    /**
     * Additional arguments to be passed to the callback.
     */
    args: any[];

    /**
     * Scale the time causing this TimerEvent to update.
     */
    timeScale: number;

    /**
     * Start this many MS into the elapsed (useful if you want a long duration with repeat, but for the first loop to fire quickly)
     */
    startAt: number;

    /**
     * The time in milliseconds which has elapsed since the Timer Event's creation.
     *
     * This value is local for the Timer Event and is relative to its Clock. As such, it's influenced by the Clock's time scale and paused state, the Timer Event's initial {@link #startAt} property, and the Timer Event's {@link #timeScale} and {@link #paused} state.
     */
    elapsed: number;

    /**
     * Whether or not this timer is paused.
     */
    paused: boolean;

    /**
     * Whether the Timer Event's function has been called.
     *
     * When the Timer Event fires, this property will be set to `true` before the callback function is invoked and will be reset immediately afterward if the Timer Event should repeat. The value of this property does not directly influence whether the Timer Event will be removed from its Clock, but can prevent it from firing.
     */
    hasDispatched: boolean;

    /**
     * Completely reinitializes the Timer Event, regardless of its current state, according to a configuration object.
     * @param config The new state for the Timer Event.
     */
    reset(config: Phaser.Types.Time.TimerEventConfig): Phaser.Time.TimerEvent;

    /**
     * Gets the progress of the current iteration, not factoring in repeats.
     */
    getProgress(): number;

    /**
     * Gets the progress of the timer overall, factoring in repeats.
     */
    getOverallProgress(): number;

    /**
     * Returns the number of times this Timer Event will repeat before finishing.
     *
     * This should not be confused with the number of times the Timer Event will fire before finishing. A return value of 0 doesn't indicate that the Timer Event has finished running - it indicates that it will not repeat after the next time it fires.
     */
    getRepeatCount(): number;

    /**
     * Returns the local elapsed time for the current iteration of the Timer Event.
     */
    getElapsed(): number;

    /**
     * Returns the local elapsed time for the current iteration of the Timer Event in seconds.
     */
    getElapsedSeconds(): number;

    /**
     * Returns the time interval until the next iteration of the Timer Event.
     */
    getRemaining(): number;

    /**
     * Returns the time interval until the next iteration of the Timer Event in seconds.
     */
    getRemainingSeconds(): number;

    /**
     * Returns the time interval until the last iteration of the Timer Event.
     */
    getOverallRemaining(): number;

    /**
     * Returns the time interval until the last iteration of the Timer Event in seconds.
     */
    getOverallRemainingSeconds(): number;

    /**
     * Forces the Timer Event to immediately expire, thus scheduling its removal in the next frame.
     * @param dispatchCallback If `true`, the function of the Timer Event will be called before its removal. Default false.
     */
    remove(dispatchCallback?: boolean): void;

    /**
     * Destroys all object references in the Timer Event, i.e. its callback, scope, and arguments.
     *
     * Normally, this method is only called by the Clock when it shuts down. As such, it doesn't stop the Timer Event. If called manually, the Timer Event will still be updated by the Clock, but it won't do anything when it fires.
     */
    destroy(): void;

  }

}