namespace Phaser.Input {
  /**
   * The mouse pointer is being held down.
   */
  var MOUSE_DOWN: number;

  /**
   * The mouse pointer is being moved.
   */
  var MOUSE_MOVE: number;

  /**
   * The mouse pointer is released.
   */
  var MOUSE_UP: number;

  /**
   * A touch pointer has been started.
   */
  var TOUCH_START: number;

  /**
   * A touch pointer has been started.
   */
  var TOUCH_MOVE: number;

  /**
   * A touch pointer has been started.
   */
  var TOUCH_END: number;

  /**
   * The pointer lock has changed.
   */
  var POINTER_LOCK_CHANGE: number;

  /**
   * A touch pointer has been been cancelled by the browser.
   */
  var TOUCH_CANCEL: number;

  /**
   * The mouse wheel changes.
   */
  var MOUSE_WHEEL: number;

  /**
   * Creates a new Interactive Object.
   *
   * This is called automatically by the Input Manager when you enable a Game Object for input.
   *
   * The resulting Interactive Object is mapped to the Game Object's `input` property.
   * @param gameObject The Game Object to which this Interactive Object is bound.
   * @param hitArea The hit area for this Interactive Object. Typically a geometry shape, like a Rectangle or Circle.
   * @param hitAreaCallback The 'contains' check callback that the hit area shape will use for all hit tests.
   */
  function CreateInteractiveObject(gameObject: Phaser.GameObjects.GameObject, hitArea: any, hitAreaCallback: Phaser.Types.Input.HitAreaCallback): Phaser.Types.Input.InteractiveObject;

  /**
   * Creates a new Pixel Perfect Handler function.
   *
   * Access via `InputPlugin.makePixelPerfect` rather than calling it directly.
   * @param textureManager A reference to the Texture Manager.
   * @param alphaTolerance The alpha level that the pixel should be above to be included as a successful interaction.
   */
  function CreatePixelPerfectHandler(textureManager: Phaser.Textures.TextureManager, alphaTolerance: number): Function;

  namespace Events {
    /**
     * The Input Plugin Boot Event.
     *
     * This internal event is dispatched by the Input Plugin when it boots, signalling to all of its systems to create themselves.
     */
    const BOOT: any;

    /**
     * The Input Plugin Destroy Event.
     *
     * This internal event is dispatched by the Input Plugin when it is destroyed, signalling to all of its systems to destroy themselves.
     */
    const DESTROY: any;

    /**
     * The Pointer Drag End Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer stops dragging a Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('dragend', listener)`.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DRAG_END]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DRAG_END} event instead.
     */
    const DRAG_END: any;

    /**
     * The Pointer Drag Enter Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer drags a Game Object into a Drag Target.
     *
     * Listen to this event from within a Scene using: `this.input.on('dragenter', listener)`.
     *
     * A Pointer can only drag a single Game Object at once.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DRAG_ENTER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DRAG_ENTER} event instead.
     */
    const DRAG_ENTER: any;

    /**
     * The Pointer Drag Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer moves while dragging a Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('drag', listener)`.
     *
     * A Pointer can only drag a single Game Object at once.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DRAG]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DRAG} event instead.
     */
    const DRAG: any;

    /**
     * The Pointer Drag Leave Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer drags a Game Object out of a Drag Target.
     *
     * Listen to this event from within a Scene using: `this.input.on('dragleave', listener)`.
     *
     * A Pointer can only drag a single Game Object at once.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DRAG_LEAVE]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DRAG_LEAVE} event instead.
     */
    const DRAG_LEAVE: any;

    /**
     * The Pointer Drag Over Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer drags a Game Object over a Drag Target.
     *
     * When the Game Object first enters the drag target it will emit a `dragenter` event. If it then moves while within
     * the drag target, it will emit this event instead.
     *
     * Listen to this event from within a Scene using: `this.input.on('dragover', listener)`.
     *
     * A Pointer can only drag a single Game Object at once.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DRAG_OVER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DRAG_OVER} event instead.
     */
    const DRAG_OVER: any;

    /**
     * The Pointer Drag Start Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer starts to drag any Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('dragstart', listener)`.
     *
     * A Pointer can only drag a single Game Object at once.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DRAG_START]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DRAG_START} event instead.
     */
    const DRAG_START: any;

    /**
     * The Pointer Drop Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer drops a Game Object on a Drag Target.
     *
     * Listen to this event from within a Scene using: `this.input.on('drop', listener)`.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_DROP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DROP} event instead.
     */
    const DROP: any;

    /**
     * The Game Object Down Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is pressed down on _any_ interactive Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('gameobjectdown', listener)`.
     *
     * To receive this event, the Game Objects must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_POINTER_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_DOWN} event instead.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_DOWN}
     * 2. [GAMEOBJECT_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DOWN}
     * 3. [POINTER_DOWN]{@linkcode Phaser.Input.Events#event:POINTER_DOWN} or [POINTER_DOWN_OUTSIDE]{@linkcode Phaser.Input.Events#event:POINTER_DOWN_OUTSIDE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_DOWN: any;

    /**
     * The Game Object Drag End Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer stops dragging it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('dragend', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive and enabled for drag.
     * See [GameObject.setInteractive](Phaser.GameObjects.GameObject#setInteractive) for more details.
     */
    const GAMEOBJECT_DRAG_END: any;

    /**
     * The Game Object Drag Enter Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer drags it into a drag target.
     *
     * Listen to this event from a Game Object using: `gameObject.on('dragenter', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive and enabled for drag.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     */
    const GAMEOBJECT_DRAG_ENTER: any;

    /**
     * The Game Object Drag Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer moves while dragging it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('drag', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive and enabled for drag.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     */
    const GAMEOBJECT_DRAG: any;

    /**
     * The Game Object Drag Leave Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer drags it out of a drag target.
     *
     * Listen to this event from a Game Object using: `gameObject.on('dragleave', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive and enabled for drag.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     */
    const GAMEOBJECT_DRAG_LEAVE: any;

    /**
     * The Game Object Drag Over Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer drags it over a drag target.
     *
     * When the Game Object first enters the drag target it will emit a `dragenter` event. If it then moves while within
     * the drag target, it will emit this event instead.
     *
     * Listen to this event from a Game Object using: `gameObject.on('dragover', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive and enabled for drag.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     */
    const GAMEOBJECT_DRAG_OVER: any;

    /**
     * The Game Object Drag Start Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer starts to drag it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('dragstart', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive and enabled for drag.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * There are lots of useful drag related properties that are set within the Game Object when dragging occurs.
     * For example, `gameObject.input.dragStartX`, `dragStartY` and so on.
     */
    const GAMEOBJECT_DRAG_START: any;

    /**
     * The Game Object Drop Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer drops it on a Drag Target.
     *
     * Listen to this event from a Game Object using: `gameObject.on('drop', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive and enabled for drag.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     */
    const GAMEOBJECT_DROP: any;

    /**
     * The Game Object Move Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is moved across _any_ interactive Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('gameobjectmove', listener)`.
     *
     * To receive this event, the Game Objects must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_POINTER_MOVE]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_MOVE} event instead.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_MOVE]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_MOVE}
     * 2. [GAMEOBJECT_MOVE]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_MOVE}
     * 3. [POINTER_MOVE]{@linkcode Phaser.Input.Events#event:POINTER_MOVE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_MOVE: any;

    /**
     * The Game Object Out Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer moves out of _any_ interactive Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('gameobjectout', listener)`.
     *
     * To receive this event, the Game Objects must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_POINTER_OUT]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_OUT} event instead.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_OUT]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_OUT}
     * 2. [GAMEOBJECT_OUT]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_OUT}
     * 3. [POINTER_OUT]{@linkcode Phaser.Input.Events#event:POINTER_OUT}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_OUT: any;

    /**
     * The Game Object Over Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer moves over _any_ interactive Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('gameobjectover', listener)`.
     *
     * To receive this event, the Game Objects must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_POINTER_OVER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_OVER} event instead.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_OVER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_OVER}
     * 2. [GAMEOBJECT_OVER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_OVER}
     * 3. [POINTER_OVER]{@linkcode Phaser.Input.Events#event:POINTER_OVER}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_OVER: any;

    /**
     * The Game Object Pointer Down Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer is pressed down on it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('pointerdown', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_DOWN}
     * 2. [GAMEOBJECT_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DOWN}
     * 3. [POINTER_DOWN]{@linkcode Phaser.Input.Events#event:POINTER_DOWN} or [POINTER_DOWN_OUTSIDE]{@linkcode Phaser.Input.Events#event:POINTER_DOWN_OUTSIDE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_POINTER_DOWN: any;

    /**
     * The Game Object Pointer Move Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer is moved while over it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('pointermove', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_MOVE]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_MOVE}
     * 2. [GAMEOBJECT_MOVE]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_MOVE}
     * 3. [POINTER_MOVE]{@linkcode Phaser.Input.Events#event:POINTER_MOVE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_POINTER_MOVE: any;

    /**
     * The Game Object Pointer Out Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer moves out of it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('pointerout', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_OUT]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_OUT}
     * 2. [GAMEOBJECT_OUT]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_OUT}
     * 3. [POINTER_OUT]{@linkcode Phaser.Input.Events#event:POINTER_OUT}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_POINTER_OUT: any;

    /**
     * The Game Object Pointer Over Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer moves over it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('pointerover', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_OVER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_OVER}
     * 2. [GAMEOBJECT_OVER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_OVER}
     * 3. [POINTER_OVER]{@linkcode Phaser.Input.Events#event:POINTER_OVER}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_POINTER_OVER: any;

    /**
     * The Game Object Pointer Up Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer is released while over it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('pointerup', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_UP}
     * 2. [GAMEOBJECT_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_UP}
     * 3. [POINTER_UP]{@linkcode Phaser.Input.Events#event:POINTER_UP} or [POINTER_UP_OUTSIDE]{@linkcode Phaser.Input.Events#event:POINTER_UP_OUTSIDE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_POINTER_UP: any;

    /**
     * The Game Object Pointer Wheel Event.
     *
     * This event is dispatched by an interactive Game Object if a pointer has its wheel moved while over it.
     *
     * Listen to this event from a Game Object using: `gameObject.on('wheel', listener)`.
     * Note that the scope of the listener is automatically set to be the Game Object instance itself.
     *
     * To receive this event, the Game Object must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_WHEEL]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_WHEEL}
     * 2. [GAMEOBJECT_WHEEL]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_WHEEL}
     * 3. [POINTER_WHEEL]{@linkcode Phaser.Input.Events#event:POINTER_WHEEL}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_POINTER_WHEEL: any;

    /**
     * The Game Object Up Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is released while over _any_ interactive Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('gameobjectup', listener)`.
     *
     * To receive this event, the Game Objects must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_POINTER_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_UP} event instead.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_UP}
     * 2. [GAMEOBJECT_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_UP}
     * 3. [POINTER_UP]{@linkcode Phaser.Input.Events#event:POINTER_UP} or [POINTER_UP_OUTSIDE]{@linkcode Phaser.Input.Events#event:POINTER_UP_OUTSIDE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_UP: any;

    /**
     * The Game Object Wheel Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer has its wheel moved while over _any_ interactive Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('gameobjectwheel', listener)`.
     *
     * To receive this event, the Game Objects must have been set as interactive.
     * See [GameObject.setInteractive]{@link Phaser.GameObjects.GameObject#setInteractive} for more details.
     *
     * To listen for this event from a _specific_ Game Object, use the [GAMEOBJECT_POINTER_WHEEL]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_WHEEL} event instead.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_WHEEL]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_WHEEL}
     * 2. [GAMEOBJECT_WHEEL]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_WHEEL}
     * 3. [POINTER_WHEEL]{@linkcode Phaser.Input.Events#event:POINTER_WHEEL}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const GAMEOBJECT_WHEEL: any;

    /**
     * The Input Plugin Game Out Event.
     *
     * This event is dispatched by the Input Plugin if the active pointer leaves the game canvas and is now
     * outside of it, elsewhere on the web page.
     *
     * Listen to this event from within a Scene using: `this.input.on('gameout', listener)`.
     */
    const GAME_OUT: any;

    /**
     * The Input Plugin Game Over Event.
     *
     * This event is dispatched by the Input Plugin if the active pointer enters the game canvas and is now
     * over of it, having previously been elsewhere on the web page.
     *
     * Listen to this event from within a Scene using: `this.input.on('gameover', listener)`.
     */
    const GAME_OVER: any;

    /**
     * The Input Manager Boot Event.
     *
     * This internal event is dispatched by the Input Manager when it boots.
     */
    const MANAGER_BOOT: any;

    /**
     * The Input Manager Process Event.
     *
     * This internal event is dispatched by the Input Manager when not using the legacy queue system,
     * and it wants the Input Plugins to update themselves.
     */
    const MANAGER_PROCESS: any;

    /**
     * The Input Manager Update Event.
     *
     * This internal event is dispatched by the Input Manager as part of its update step.
     */
    const MANAGER_UPDATE: any;

    /**
     * The Input Manager Pointer Lock Change Event.
     *
     * This event is dispatched by the Input Manager when it is processing a native Pointer Lock Change DOM Event.
     */
    const POINTERLOCK_CHANGE: any;

    /**
     * The Pointer Down Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is pressed down anywhere.
     *
     * Listen to this event from within a Scene using: `this.input.on('pointerdown', listener)`.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_DOWN}
     * 2. [GAMEOBJECT_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DOWN}
     * 3. [POINTER_DOWN]{@linkcode Phaser.Input.Events#event:POINTER_DOWN} or [POINTER_DOWN_OUTSIDE]{@linkcode Phaser.Input.Events#event:POINTER_DOWN_OUTSIDE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const POINTER_DOWN: any;

    /**
     * The Pointer Down Outside Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is pressed down anywhere outside of the game canvas.
     *
     * Listen to this event from within a Scene using: `this.input.on('pointerdownoutside', listener)`.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_DOWN}
     * 2. [GAMEOBJECT_DOWN]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_DOWN}
     * 3. [POINTER_DOWN]{@linkcode Phaser.Input.Events#event:POINTER_DOWN} or [POINTER_DOWN_OUTSIDE]{@linkcode Phaser.Input.Events#event:POINTER_DOWN_OUTSIDE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const POINTER_DOWN_OUTSIDE: any;

    /**
     * The Pointer Move Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is moved anywhere.
     *
     * Listen to this event from within a Scene using: `this.input.on('pointermove', listener)`.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_MOVE]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_MOVE}
     * 2. [GAMEOBJECT_MOVE]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_MOVE}
     * 3. [POINTER_MOVE]{@linkcode Phaser.Input.Events#event:POINTER_MOVE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const POINTER_MOVE: any;

    /**
     * The Pointer Out Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer moves out of any interactive Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('pointerout', listener)`.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_OUT]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_OUT}
     * 2. [GAMEOBJECT_OUT]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_OUT}
     * 3. [POINTER_OUT]{@linkcode Phaser.Input.Events#event:POINTER_OUT}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const POINTER_OUT: any;

    /**
     * The Pointer Over Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer moves over any interactive Game Object.
     *
     * Listen to this event from within a Scene using: `this.input.on('pointerover', listener)`.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_OVER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_OVER}
     * 2. [GAMEOBJECT_OVER]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_OVER}
     * 3. [POINTER_OVER]{@linkcode Phaser.Input.Events#event:POINTER_OVER}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const POINTER_OVER: any;

    /**
     * The Pointer Up Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is released anywhere.
     *
     * Listen to this event from within a Scene using: `this.input.on('pointerup', listener)`.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_UP}
     * 2. [GAMEOBJECT_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_UP}
     * 3. [POINTER_UP]{@linkcode Phaser.Input.Events#event:POINTER_UP} or [POINTER_UP_OUTSIDE]{@linkcode Phaser.Input.Events#event:POINTER_UP_OUTSIDE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const POINTER_UP: any;

    /**
     * The Pointer Up Outside Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer is released anywhere outside of the game canvas.
     *
     * Listen to this event from within a Scene using: `this.input.on('pointerupoutside', listener)`.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_UP}
     * 2. [GAMEOBJECT_UP]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_UP}
     * 3. [POINTER_UP]{@linkcode Phaser.Input.Events#event:POINTER_UP} or [POINTER_UP_OUTSIDE]{@linkcode Phaser.Input.Events#event:POINTER_UP_OUTSIDE}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const POINTER_UP_OUTSIDE: any;

    /**
     * The Pointer Wheel Input Event.
     *
     * This event is dispatched by the Input Plugin belonging to a Scene if a pointer has its wheel updated.
     *
     * Listen to this event from within a Scene using: `this.input.on('wheel', listener)`.
     *
     * The event hierarchy is as follows:
     *
     * 1. [GAMEOBJECT_POINTER_WHEEL]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_POINTER_WHEEL}
     * 2. [GAMEOBJECT_WHEEL]{@linkcode Phaser.Input.Events#event:GAMEOBJECT_WHEEL}
     * 3. [POINTER_WHEEL]{@linkcode Phaser.Input.Events#event:POINTER_WHEEL}
     *
     * With the top event being dispatched first and then flowing down the list. Note that higher-up event handlers can stop
     * the propagation of this event.
     */
    const POINTER_WHEEL: any;

    /**
     * The Input Plugin Pre-Update Event.
     *
     * This internal event is dispatched by the Input Plugin at the start of its `preUpdate` method.
     * This hook is designed specifically for input plugins, but can also be listened to from user-land code.
     */
    const PRE_UPDATE: any;

    /**
     * The Input Plugin Shutdown Event.
     *
     * This internal event is dispatched by the Input Plugin when it shuts down, signalling to all of its systems to shut themselves down.
     */
    const SHUTDOWN: any;

    /**
     * The Input Plugin Start Event.
     *
     * This internal event is dispatched by the Input Plugin when it has finished setting-up,
     * signalling to all of its internal systems to start.
     */
    const START: any;

    /**
     * The Input Plugin Update Event.
     *
     * This internal event is dispatched by the Input Plugin at the start of its `update` method.
     * This hook is designed specifically for input plugins, but can also be listened to from user-land code.
     */
    const UPDATE: any;

  }

  namespace Gamepad {
    /**
     * Contains information about a specific Gamepad Axis.
     * Axis objects are created automatically by the Gamepad as they are needed.
     */
    class Axis {
      /**
       *
       * @param pad A reference to the Gamepad that this Axis belongs to.
       * @param index The index of this Axis.
       */
      constructor(pad: Phaser.Input.Gamepad.Gamepad, index: number);

      /**
       * A reference to the Gamepad that this Axis belongs to.
       */
      pad: Phaser.Input.Gamepad.Gamepad;

      /**
       * An event emitter to use to emit the axis events.
       */
      events: Phaser.Events.EventEmitter;

      /**
       * The index of this Axis.
       */
      index: number;

      /**
       * The raw axis value, between -1 and 1 with 0 being dead center.
       * Use the method `getValue` to get a normalized value with the threshold applied.
       */
      value: number;

      /**
       * Movement tolerance threshold below which axis values are ignored in `getValue`.
       */
      threshold: number;

      /**
       * Applies the `threshold` value to the axis and returns it.
       */
      getValue(): number;

      /**
       * Destroys this Axis instance and releases external references it holds.
       */
      destroy(): void;

    }

    /**
     * Contains information about a specific button on a Gamepad.
     * Button objects are created automatically by the Gamepad as they are needed.
     */
    class Button {
      /**
       *
       * @param pad A reference to the Gamepad that this Button belongs to.
       * @param index The index of this Button.
       */
      constructor(pad: Phaser.Input.Gamepad.Gamepad, index: number);

      /**
       * A reference to the Gamepad that this Button belongs to.
       */
      pad: Phaser.Input.Gamepad.Gamepad;

      /**
       * An event emitter to use to emit the button events.
       */
      events: Phaser.Events.EventEmitter;

      /**
       * The index of this Button.
       */
      index: number;

      /**
       * Between 0 and 1.
       */
      value: number;

      /**
       * Can be set for analogue buttons to enable a 'pressure' threshold,
       * before a button is considered as being 'pressed'.
       */
      threshold: number;

      /**
       * Is the Button being pressed down or not?
       */
      pressed: boolean;

      /**
       * Destroys this Button instance and releases external references it holds.
       */
      destroy(): void;

    }

    namespace Configs {
      /**
       * Tatar SNES USB Controller Gamepad Configuration.
       * USB Gamepad  (STANDARD GAMEPAD Vendor: 0079 Product: 0011)
       */
      var SNES_USB: object;

      /**
       * PlayStation DualShock 4 Gamepad Configuration.
       * Sony PlayStation DualShock 4 (v2) wireless controller
       */
      var DUALSHOCK_4: object;

      /**
       * XBox 360 Gamepad Configuration.
       */
      var XBOX_360: object;

    }

    namespace Events {
      /**
       * The Gamepad Button Down Event.
       *
       * This event is dispatched by the Gamepad Plugin when a button has been pressed on any active Gamepad.
       *
       * Listen to this event from within a Scene using: `this.input.gamepad.on('down', listener)`.
       *
       * You can also listen for a DOWN event from a Gamepad instance. See the [GAMEPAD_BUTTON_DOWN]{@linkcode Phaser.Input.Gamepad.Events#event:GAMEPAD_BUTTON_DOWN} event for details.
       */
      const BUTTON_DOWN: any;

      /**
       * The Gamepad Button Up Event.
       *
       * This event is dispatched by the Gamepad Plugin when a button has been released on any active Gamepad.
       *
       * Listen to this event from within a Scene using: `this.input.gamepad.on('up', listener)`.
       *
       * You can also listen for an UP event from a Gamepad instance. See the [GAMEPAD_BUTTON_UP]{@linkcode Phaser.Input.Gamepad.Events#event:GAMEPAD_BUTTON_UP} event for details.
       */
      const BUTTON_UP: any;

      /**
       * The Gamepad Connected Event.
       *
       * This event is dispatched by the Gamepad Plugin when a Gamepad has been connected.
       *
       * Listen to this event from within a Scene using: `this.input.gamepad.once('connected', listener)`.
       *
       * Note that the browser may require you to press a button on a gamepad before it will allow you to access it,
       * this is for security reasons. However, it may also trust the page already, in which case you won't get the
       * 'connected' event and instead should check `GamepadPlugin.total` to see if it thinks there are any gamepads
       * already connected.
       */
      const CONNECTED: any;

      /**
       * The Gamepad Disconnected Event.
       *
       * This event is dispatched by the Gamepad Plugin when a Gamepad has been disconnected.
       *
       * Listen to this event from within a Scene using: `this.input.gamepad.once('disconnected', listener)`.
       */
      const DISCONNECTED: any;

      /**
       * The Gamepad Button Down Event.
       *
       * This event is dispatched by a Gamepad instance when a button has been pressed on it.
       *
       * Listen to this event from a Gamepad instance. Once way to get this is from the `pad1`, `pad2`, etc properties on the Gamepad Plugin:
       * `this.input.gamepad.pad1.on('down', listener)`.
       *
       * Note that you will not receive any Gamepad button events until the browser considers the Gamepad as being 'connected'.
       *
       * You can also listen for a DOWN event from the Gamepad Plugin. See the [BUTTON_DOWN]{@linkcode Phaser.Input.Gamepad.Events#event:BUTTON_DOWN} event for details.
       */
      const GAMEPAD_BUTTON_DOWN: any;

      /**
       * The Gamepad Button Up Event.
       *
       * This event is dispatched by a Gamepad instance when a button has been released on it.
       *
       * Listen to this event from a Gamepad instance. Once way to get this is from the `pad1`, `pad2`, etc properties on the Gamepad Plugin:
       * `this.input.gamepad.pad1.on('up', listener)`.
       *
       * Note that you will not receive any Gamepad button events until the browser considers the Gamepad as being 'connected'.
       *
       * You can also listen for an UP event from the Gamepad Plugin. See the [BUTTON_UP]{@linkcode Phaser.Input.Gamepad.Events#event:BUTTON_UP} event for details.
       */
      const GAMEPAD_BUTTON_UP: any;

    }

    /**
     * A single Gamepad.
     *
     * These are created, updated and managed by the Gamepad Plugin.
     */
    class Gamepad extends Phaser.Events.EventEmitter {
      /**
       *
       * @param manager A reference to the Gamepad Plugin.
       * @param pad The Gamepad object, as extracted from GamepadEvent.
       */
      constructor(manager: Phaser.Input.Gamepad.GamepadPlugin, pad: Phaser.Types.Input.Gamepad.Pad);

      /**
       * A reference to the Gamepad Plugin.
       */
      manager: Phaser.Input.Gamepad.GamepadPlugin;

      /**
       * A reference to the native Gamepad object that is connected to the browser.
       */
      pad: any;

      /**
       * A string containing some information about the controller.
       *
       * This is not strictly specified, but in Firefox it will contain three pieces of information
       * separated by dashes (-): two 4-digit hexadecimal strings containing the USB vendor and
       * product id of the controller, and the name of the controller as provided by the driver.
       * In Chrome it will contain the name of the controller as provided by the driver,
       * followed by vendor and product 4-digit hexadecimal strings.
       */
      id: string;

      /**
       * An integer that is unique for each Gamepad currently connected to the system.
       * This can be used to distinguish multiple controllers.
       * Note that disconnecting a device and then connecting a new device may reuse the previous index.
       */
      index: number;

      /**
       * An array of Gamepad Button objects, corresponding to the different buttons available on the Gamepad.
       */
      buttons: Phaser.Input.Gamepad.Button[];

      /**
       * An array of Gamepad Axis objects, corresponding to the different axes available on the Gamepad, if any.
       */
      axes: Phaser.Input.Gamepad.Axis[];

      /**
       * The Gamepad's Haptic Actuator (Vibration / Rumble support).
       * This is highly experimental and only set if both present on the device,
       * and exposed by both the hardware and browser.
       */
      vibration: GamepadHapticActuator;

      /**
       * A Vector2 containing the most recent values from the Gamepad's left axis stick.
       * This is updated automatically as part of the Gamepad.update cycle.
       * The H Axis is mapped to the `Vector2.x` property, and the V Axis to the `Vector2.y` property.
       * The values are based on the Axis thresholds.
       * If the Gamepad does not have a left axis stick, the values will always be zero.
       */
      leftStick: Phaser.Math.Vector2;

      /**
       * A Vector2 containing the most recent values from the Gamepad's right axis stick.
       * This is updated automatically as part of the Gamepad.update cycle.
       * The H Axis is mapped to the `Vector2.x` property, and the V Axis to the `Vector2.y` property.
       * The values are based on the Axis thresholds.
       * If the Gamepad does not have a right axis stick, the values will always be zero.
       */
      rightStick: Phaser.Math.Vector2;

      /**
       * Gets the total number of axis this Gamepad claims to support.
       */
      getAxisTotal(): number;

      /**
       * Gets the value of an axis based on the given index.
       * The index must be valid within the range of axes supported by this Gamepad.
       * The return value will be a float between 0 and 1.
       * @param index The index of the axes to get the value for.
       */
      getAxisValue(index: number): number;

      /**
       * Sets the threshold value of all axis on this Gamepad.
       * The value is a float between 0 and 1 and is the amount below which the axis is considered as not having been moved.
       * @param value A value between 0 and 1.
       */
      setAxisThreshold(value: number): void;

      /**
       * Gets the total number of buttons this Gamepad claims to have.
       */
      getButtonTotal(): number;

      /**
       * Gets the value of a button based on the given index.
       * The index must be valid within the range of buttons supported by this Gamepad.
       *
       * The return value will be either 0 or 1 for an analogue button, or a float between 0 and 1
       * for a pressure-sensitive digital button, such as the shoulder buttons on a Dual Shock.
       * @param index The index of the button to get the value for.
       */
      getButtonValue(index: number): number;

      /**
       * Returns if the button is pressed down or not.
       * The index must be valid within the range of buttons supported by this Gamepad.
       * @param index The index of the button to get the value for.
       */
      isButtonDown(index: number): boolean;

      /**
       * Destroys this Gamepad instance, its buttons and axes, and releases external references it holds.
       */
      destroy(): void;

      /**
       * Is this Gamepad currently connected or not?
       */
      connected: boolean;

      /**
       * A timestamp containing the most recent time this Gamepad was updated.
       */
      timestamp: number;

      /**
       * Is the Gamepad's Left button being pressed?
       * If the Gamepad doesn't have this button it will always return false.
       * This is the d-pad left button under standard Gamepad mapping.
       */
      left: boolean;

      /**
       * Is the Gamepad's Right button being pressed?
       * If the Gamepad doesn't have this button it will always return false.
       * This is the d-pad right button under standard Gamepad mapping.
       */
      right: boolean;

      /**
       * Is the Gamepad's Up button being pressed?
       * If the Gamepad doesn't have this button it will always return false.
       * This is the d-pad up button under standard Gamepad mapping.
       */
      up: boolean;

      /**
       * Is the Gamepad's Down button being pressed?
       * If the Gamepad doesn't have this button it will always return false.
       * This is the d-pad down button under standard Gamepad mapping.
       */
      down: boolean;

      /**
       * Is the Gamepad's bottom button in the right button cluster being pressed?
       * If the Gamepad doesn't have this button it will always return false.
       * On a Dual Shock controller it's the X button.
       * On an XBox controller it's the A button.
       */
      A: boolean;

      /**
       * Is the Gamepad's top button in the right button cluster being pressed?
       * If the Gamepad doesn't have this button it will always return false.
       * On a Dual Shock controller it's the Triangle button.
       * On an XBox controller it's the Y button.
       */
      Y: boolean;

      /**
       * Is the Gamepad's left button in the right button cluster being pressed?
       * If the Gamepad doesn't have this button it will always return false.
       * On a Dual Shock controller it's the Square button.
       * On an XBox controller it's the X button.
       */
      X: boolean;

      /**
       * Is the Gamepad's right button in the right button cluster being pressed?
       * If the Gamepad doesn't have this button it will always return false.
       * On a Dual Shock controller it's the Circle button.
       * On an XBox controller it's the B button.
       */
      B: boolean;

      /**
       * Returns the value of the Gamepad's top left shoulder button.
       * If the Gamepad doesn't have this button it will always return zero.
       * The value is a float between 0 and 1, corresponding to how depressed the button is.
       * On a Dual Shock controller it's the L1 button.
       * On an XBox controller it's the LB button.
       */
      L1: number;

      /**
       * Returns the value of the Gamepad's bottom left shoulder button.
       * If the Gamepad doesn't have this button it will always return zero.
       * The value is a float between 0 and 1, corresponding to how depressed the button is.
       * On a Dual Shock controller it's the L2 button.
       * On an XBox controller it's the LT button.
       */
      L2: number;

      /**
       * Returns the value of the Gamepad's top right shoulder button.
       * If the Gamepad doesn't have this button it will always return zero.
       * The value is a float between 0 and 1, corresponding to how depressed the button is.
       * On a Dual Shock controller it's the R1 button.
       * On an XBox controller it's the RB button.
       */
      R1: number;

      /**
       * Returns the value of the Gamepad's bottom right shoulder button.
       * If the Gamepad doesn't have this button it will always return zero.
       * The value is a float between 0 and 1, corresponding to how depressed the button is.
       * On a Dual Shock controller it's the R2 button.
       * On an XBox controller it's the RT button.
       */
      R2: number;

    }

    /**
     * The Gamepad Plugin is an input plugin that belongs to the Scene-owned Input system.
     *
     * Its role is to listen for native DOM Gamepad Events and then process them.
     *
     * You do not need to create this class directly, the Input system will create an instance of it automatically.
     *
     * You can access it from within a Scene using `this.input.gamepad`.
     *
     * To listen for a gamepad being connected:
     *
     * ```javascript
     * this.input.gamepad.once('connected', function (pad) {
     *     //   'pad' is a reference to the gamepad that was just connected
     * });
     * ```
     *
     * Note that the browser may require you to press a button on a gamepad before it will allow you to access it,
     * this is for security reasons. However, it may also trust the page already, in which case you won't get the
     * 'connected' event and instead should check `GamepadPlugin.total` to see if it thinks there are any gamepads
     * already connected.
     *
     * Once you have received the connected event, or polled the gamepads and found them enabled, you can access
     * them via the built-in properties `GamepadPlugin.pad1` to `pad4`, for up to 4 game pads. With a reference
     * to the gamepads you can poll its buttons and axis sticks. See the properties and methods available on
     * the `Gamepad` class for more details.
     *
     * As of September 2020 Chrome, and likely other browsers, will soon start to require that games requesting
     * access to the Gamepad API are running under SSL. They will actively block API access if they are not.
     *
     * For more information about Gamepad support in browsers see the following resources:
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API
     * https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
     * https://www.smashingmagazine.com/2015/11/gamepad-api-in-web-games/
     * http://html5gamepad.com/
     */
    class GamepadPlugin extends Phaser.Events.EventEmitter {
      /**
       *
       * @param sceneInputPlugin A reference to the Scene Input Plugin that the KeyboardPlugin belongs to.
       */
      constructor(sceneInputPlugin: Phaser.Input.InputPlugin);

      /**
       * A reference to the Scene that this Input Plugin is responsible for.
       */
      scene: Phaser.Scene;

      /**
       * A reference to the Scene Systems Settings.
       */
      settings: Phaser.Types.Scenes.SettingsObject;

      /**
       * A reference to the Scene Input Plugin that created this Keyboard Plugin.
       */
      sceneInputPlugin: Phaser.Input.InputPlugin;

      /**
       * A boolean that controls if the Gamepad Manager is enabled or not.
       * Can be toggled on the fly.
       */
      enabled: boolean;

      /**
       * The Gamepad Event target, as defined in the Game Config.
       * Typically the browser window, but can be any interactive DOM element.
       */
      target: any;

      /**
       * An array of the connected Gamepads.
       */
      gamepads: Phaser.Input.Gamepad.Gamepad[];

      /**
       * Checks to see if both this plugin and the Scene to which it belongs is active.
       */
      isActive(): boolean;

      /**
       * Disconnects all current Gamepads.
       */
      disconnectAll(): void;

      /**
       * Returns an array of all currently connected Gamepads.
       */
      getAll(): Phaser.Input.Gamepad.Gamepad[];

      /**
       * Looks-up a single Gamepad based on the given index value.
       * @param index The index of the Gamepad to get.
       */
      getPad(index: number): Phaser.Input.Gamepad.Gamepad;

      /**
       * The total number of connected game pads.
       */
      total: number;

      /**
       * A reference to the first connected Gamepad.
       *
       * This will be undefined if either no pads are connected, or the browser
       * has not yet issued a gamepadconnect, which can happen even if a Gamepad
       * is plugged in, but hasn't yet had any buttons pressed on it.
       */
      pad1: Phaser.Input.Gamepad.Gamepad;

      /**
       * A reference to the second connected Gamepad.
       *
       * This will be undefined if either no pads are connected, or the browser
       * has not yet issued a gamepadconnect, which can happen even if a Gamepad
       * is plugged in, but hasn't yet had any buttons pressed on it.
       */
      pad2: Phaser.Input.Gamepad.Gamepad;

      /**
       * A reference to the third connected Gamepad.
       *
       * This will be undefined if either no pads are connected, or the browser
       * has not yet issued a gamepadconnect, which can happen even if a Gamepad
       * is plugged in, but hasn't yet had any buttons pressed on it.
       */
      pad3: Phaser.Input.Gamepad.Gamepad;

      /**
       * A reference to the fourth connected Gamepad.
       *
       * This will be undefined if either no pads are connected, or the browser
       * has not yet issued a gamepadconnect, which can happen even if a Gamepad
       * is plugged in, but hasn't yet had any buttons pressed on it.
       */
      pad4: Phaser.Input.Gamepad.Gamepad;

    }

  }

  /**
   * The Input Manager is responsible for handling the pointer related systems in a single Phaser Game instance.
   *
   * Based on the Game Config it will create handlers for mouse and touch support.
   *
   * Keyboard and Gamepad are plugins, handled directly by the InputPlugin class.
   *
   * It then manages the events, pointer creation and general hit test related operations.
   *
   * You rarely need to interact with the Input Manager directly, and as such, all of its properties and methods
   * should be considered private. Instead, you should use the Input Plugin, which is a Scene level system, responsible
   * for dealing with all input events for a Scene.
   */
  class InputManager {
    /**
     *
     * @param game The Game instance that owns the Input Manager.
     * @param config The Input Configuration object, as set in the Game Config.
     */
    constructor(game: Phaser.Game, config: object);

    /**
     * The Game instance that owns the Input Manager.
     * A Game only maintains on instance of the Input Manager at any time.
     */
    readonly game: Phaser.Game;

    /**
     * A reference to the global Game Scale Manager.
     * Used for all bounds checks and pointer scaling.
     */
    scaleManager: Phaser.Scale.ScaleManager;

    /**
     * The Canvas that is used for all DOM event input listeners.
     */
    canvas: HTMLCanvasElement;

    /**
     * The Game Configuration object, as set during the game boot.
     */
    config: Phaser.Core.Config;

    /**
     * If set, the Input Manager will run its update loop every frame.
     */
    enabled: boolean;

    /**
     * The Event Emitter instance that the Input Manager uses to emit events from.
     */
    events: Phaser.Events.EventEmitter;

    /**
     * Are any mouse or touch pointers currently over the game canvas?
     * This is updated automatically by the canvas over and out handlers.
     */
    readonly isOver: boolean;

    /**
     * The default CSS cursor to be used when interacting with your game.
     *
     * See the `setDefaultCursor` method for more details.
     */
    defaultCursor: string;

    /**
     * A reference to the Keyboard Manager class, if enabled via the `input.keyboard` Game Config property.
     */
    keyboard: Phaser.Input.Keyboard.KeyboardManager;

    /**
     * A reference to the Mouse Manager class, if enabled via the `input.mouse` Game Config property.
     */
    mouse: Phaser.Input.Mouse.MouseManager;

    /**
     * A reference to the Touch Manager class, if enabled via the `input.touch` Game Config property.
     */
    touch: Phaser.Input.Touch.TouchManager;

    /**
     * An array of Pointers that have been added to the game.
     * The first entry is reserved for the Mouse Pointer, the rest are Touch Pointers.
     *
     * By default there is 1 touch pointer enabled. If you need more use the `addPointer` method to start them,
     * or set the `input.activePointers` property in the Game Config.
     */
    pointers: Phaser.Input.Pointer[];

    /**
     * The number of touch objects activated and being processed each update.
     *
     * You can change this by either calling `addPointer` at run-time, or by
     * setting the `input.activePointers` property in the Game Config.
     */
    readonly pointersTotal: number;

    /**
     * The mouse has its own unique Pointer object, which you can reference directly if making a _desktop specific game_.
     * If you are supporting both desktop and touch devices then do not use this property, instead use `activePointer`
     * which will always map to the most recently interacted pointer.
     */
    mousePointer: Phaser.Input.Pointer;

    /**
     * The most recently active Pointer object.
     *
     * If you've only 1 Pointer in your game then this will accurately be either the first finger touched, or the mouse.
     *
     * If your game doesn't need to support multi-touch then you can safely use this property in all of your game
     * code and it will adapt to be either the mouse or the touch, based on device.
     */
    activePointer: Phaser.Input.Pointer;

    /**
     * If the top-most Scene in the Scene List receives an input it will stop input from
     * propagating any lower down the scene list, i.e. if you have a UI Scene at the top
     * and click something on it, that click will not then be passed down to any other
     * Scene below. Disable this to have input events passed through all Scenes, all the time.
     */
    globalTopOnly: boolean;

    /**
     * The time this Input Manager was last updated.
     * This value is populated by the Game Step each frame.
     */
    readonly time: number;

    /**
     * The Boot handler is called by Phaser.Game when it first starts up.
     * The renderer is available by now.
     */
    protected boot(): void;

    /**
     * Tells the Input system to set a custom cursor.
     *
     * This cursor will be the default cursor used when interacting with the game canvas.
     *
     * If an Interactive Object also sets a custom cursor, this is the cursor that is reset after its use.
     *
     * Any valid CSS cursor value is allowed, including paths to image files, i.e.:
     *
     * ```javascript
     * this.input.setDefaultCursor('url(assets/cursors/sword.cur), pointer');
     * ```
     *
     * Please read about the differences between browsers when it comes to the file formats and sizes they support:
     *
     * https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_User_Interface/Using_URL_values_for_the_cursor_property
     *
     * It's up to you to pick a suitable cursor format that works across the range of browsers you need to support.
     * @param cursor The CSS to be used when setting the default cursor.
     */
    setDefaultCursor(cursor: string): void;

    /**
     * Adds new Pointer objects to the Input Manager.
     *
     * By default Phaser creates 2 pointer objects: `mousePointer` and `pointer1`.
     *
     * You can create more either by calling this method, or by setting the `input.activePointers` property
     * in the Game Config, up to a maximum of 10 pointers.
     *
     * The first 10 pointers are available via the `InputPlugin.pointerX` properties, once they have been added
     * via this method.
     * @param quantity The number of new Pointers to create. A maximum of 10 is allowed in total. Default 1.
     */
    addPointer(quantity?: number): Phaser.Input.Pointer[];

    /**
     * Internal method that gets a list of all the active Input Plugins in the game
     * and updates each of them in turn, in reverse order (top to bottom), to allow
     * for DOM top-level event handling simulation.
     * @param type The type of event to process.
     * @param pointers An array of Pointers on which the event occurred.
     */
    updateInputPlugins(type: number, pointers: Phaser.Input.Pointer[]): void;

    /**
     * Performs a hit test using the given Pointer and camera, against an array of interactive Game Objects.
     *
     * The Game Objects are culled against the camera, and then the coordinates are translated into the local camera space
     * and used to determine if they fall within the remaining Game Objects hit areas or not.
     *
     * If nothing is matched an empty array is returned.
     *
     * This method is called automatically by InputPlugin.hitTestPointer and doesn't usually need to be invoked directly.
     * @param pointer The Pointer to test against.
     * @param gameObjects An array of interactive Game Objects to check.
     * @param camera The Camera which is being tested against.
     * @param output An array to store the results in. If not given, a new empty array is created.
     */
    hitTest(pointer: Phaser.Input.Pointer, gameObjects: any[], camera: Phaser.Cameras.Scene2D.Camera, output?: any[]): any[];

    /**
     * Checks if the given x and y coordinate are within the hit area of the Game Object.
     *
     * This method assumes that the coordinate values have already been translated into the space of the Game Object.
     *
     * If the coordinates are within the hit area they are set into the Game Objects Input `localX` and `localY` properties.
     * @param gameObject The interactive Game Object to check against.
     * @param x The translated x coordinate for the hit test.
     * @param y The translated y coordinate for the hit test.
     */
    pointWithinHitArea(gameObject: Phaser.GameObjects.GameObject, x: number, y: number): boolean;

    /**
     * Checks if the given x and y coordinate are within the hit area of the Interactive Object.
     *
     * This method assumes that the coordinate values have already been translated into the space of the Interactive Object.
     *
     * If the coordinates are within the hit area they are set into the Interactive Objects Input `localX` and `localY` properties.
     * @param object The Interactive Object to check against.
     * @param x The translated x coordinate for the hit test.
     * @param y The translated y coordinate for the hit test.
     */
    pointWithinInteractiveObject(object: Phaser.Types.Input.InteractiveObject, x: number, y: number): boolean;

    /**
     * Transforms the pageX and pageY values of a Pointer into the scaled coordinate space of the Input Manager.
     * @param pointer The Pointer to transform the values for.
     * @param pageX The Page X value.
     * @param pageY The Page Y value.
     * @param wasMove Are we transforming the Pointer from a move event, or an up / down event?
     */
    transformPointer(pointer: Phaser.Input.Pointer, pageX: number, pageY: number, wasMove: boolean): void;

    /**
     * Destroys the Input Manager and all of its systems.
     *
     * There is no way to recover from doing this.
     */
    destroy(): void;

  }

  /**
   * The Input Plugin belongs to a Scene and handles all input related events and operations for it.
   *
   * You can access it from within a Scene using `this.input`.
   *
   * It emits events directly. For example, you can do:
   *
   * ```javascript
   * this.input.on('pointerdown', callback, context);
   * ```
   *
   * To listen for a pointer down event anywhere on the game canvas.
   *
   * Game Objects can be enabled for input by calling their `setInteractive` method. After which they
   * will directly emit input events:
   *
   * ```javascript
   * var sprite = this.add.sprite(x, y, texture);
   * sprite.setInteractive();
   * sprite.on('pointerdown', callback, context);
   * ```
   *
   * There are lots of game configuration options available relating to input.
   * See the [Input Config object]{@linkcode Phaser.Types.Core.InputConfig} for more details, including how to deal with Phaser
   * listening for input events outside of the canvas, how to set a default number of pointers, input
   * capture settings and more.
   *
   * Please also see the Input examples and tutorials for further information.
   *
   * **Incorrect input coordinates with Angular**
   *
   * If you are using Phaser within Angular, and use nglf or the router, to make the component in which the Phaser game resides
   * change state (i.e. appear or disappear) then you'll need to notify the Scale Manager about this, as Angular will mess with
   * the DOM in a way in which Phaser can't detect directly. Call `this.scale.updateBounds()` as part of your game init in order
   * to refresh the canvas DOM bounds values, which Phaser uses for input point position calculations.
   */
  class InputPlugin extends Phaser.Events.EventEmitter {
    /**
     *
     * @param scene A reference to the Scene that this Input Plugin is responsible for.
     */
    constructor(scene: Phaser.Scene);

    /**
     * An instance of the Gamepad Plugin class, if enabled via the `input.gamepad` Scene or Game Config property.
     * Use this to create access Gamepads connected to the browser and respond to gamepad buttons.
     */
    gamepad: Phaser.Input.Gamepad.GamepadPlugin;

    /**
     * A reference to the Scene that this Input Plugin is responsible for.
     */
    scene: Phaser.Scene;

    /**
     * A reference to the Scene Systems class.
     */
    systems: Phaser.Scenes.Systems;

    /**
     * A reference to the Scene Systems Settings.
     */
    settings: Phaser.Types.Scenes.SettingsObject;

    /**
     * A reference to the Game Input Manager.
     */
    manager: Phaser.Input.InputManager;

    /**
     * If `true` this Input Plugin will process DOM input events.
     */
    enabled: boolean;

    /**
     * A reference to the Scene Display List. This property is set during the `boot` method.
     */
    displayList: Phaser.GameObjects.DisplayList;

    /**
     * A reference to the Scene Cameras Manager. This property is set during the `boot` method.
     */
    cameras: Phaser.Cameras.Scene2D.CameraManager;

    /**
     * A reference to the Mouse Manager.
     *
     * This property is only set if Mouse support has been enabled in your Game Configuration file.
     *
     * If you just wish to get access to the mouse pointer, use the `mousePointer` property instead.
     */
    mouse: Phaser.Input.Mouse.MouseManager;

    /**
     * When set to `true` (the default) the Input Plugin will emulate DOM behavior by only emitting events from
     * the top-most Game Objects in the Display List.
     *
     * If set to `false` it will emit events from all Game Objects below a Pointer, not just the top one.
     */
    topOnly: boolean;

    /**
     * How often should the Pointers be checked?
     *
     * The value is a time, given in ms, and is the time that must have elapsed between game steps before
     * the Pointers will be polled again. When a pointer is polled it runs a hit test to see which Game
     * Objects are currently below it, or being interacted with it.
     *
     * Pointers will *always* be checked if they have been moved by the user, or press or released.
     *
     * This property only controls how often they will be polled if they have not been updated.
     * You should set this if you want to have Game Objects constantly check against the pointers, even
     * if the pointer didn't itself move.
     *
     * Set to 0 to poll constantly. Set to -1 to only poll on user movement.
     */
    pollRate: number;

    /**
     * The distance, in pixels, a pointer has to move while being held down, before it thinks it is being dragged.
     */
    dragDistanceThreshold: number;

    /**
     * The amount of time, in ms, a pointer has to be held down before it thinks it is dragging.
     *
     * The default polling rate is to poll only on move so once the time threshold is reached the
     * drag event will not start until you move the mouse. If you want it to start immediately
     * when the time threshold is reached, you must increase the polling rate by calling
     * [setPollAlways]{@linkcode Phaser.Input.InputPlugin#setPollAlways} or
     * [setPollRate]{@linkcode Phaser.Input.InputPlugin#setPollRate}.
     */
    dragTimeThreshold: number;

    /**
     * Checks to see if both this plugin and the Scene to which it belongs is active.
     */
    isActive(): boolean;

    /**
     * This is called automatically by the Input Manager.
     * It emits events for plugins to listen to and also handles polling updates, if enabled.
     * @param time The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
     * @param delta The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    updatePoll(time: number, delta: number): boolean;

    /**
     * Clears a Game Object so it no longer has an Interactive Object associated with it.
     * The Game Object is then queued for removal from the Input Plugin on the next update.
     * @param gameObject The Game Object that will have its Interactive Object removed.
     * @param skipQueue Skip adding this Game Object into the removal queue? Default false.
     */
    clear(gameObject: Phaser.GameObjects.GameObject, skipQueue?: boolean): Phaser.GameObjects.GameObject;

    /**
     * Disables Input on a single Game Object.
     *
     * An input disabled Game Object still retains its Interactive Object component and can be re-enabled
     * at any time, by passing it to `InputPlugin.enable`.
     * @param gameObject The Game Object to have its input system disabled.
     */
    disable(gameObject: Phaser.GameObjects.GameObject): void;

    /**
     * Enable a Game Object for interaction.
     *
     * If the Game Object already has an Interactive Object component, it is enabled and returned.
     *
     * Otherwise, a new Interactive Object component is created and assigned to the Game Object's `input` property.
     *
     * Input works by using hit areas, these are nearly always geometric shapes, such as rectangles or circles, that act as the hit area
     * for the Game Object. However, you can provide your own hit area shape and callback, should you wish to handle some more advanced
     * input detection.
     *
     * If no arguments are provided it will try and create a rectangle hit area based on the texture frame the Game Object is using. If
     * this isn't a texture-bound object, such as a Graphics or BitmapText object, this will fail, and you'll need to provide a specific
     * shape for it to use.
     *
     * You can also provide an Input Configuration Object as the only argument to this method.
     * @param gameObject The Game Object to be enabled for input.
     * @param hitArea Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not specified a Rectangle will be used.
     * @param hitAreaCallback The 'contains' function to invoke to check if the pointer is within the hit area.
     * @param dropZone Is this Game Object a drop zone or not? Default false.
     */
    enable(gameObject: Phaser.GameObjects.GameObject, hitArea?: Phaser.Types.Input.InputConfiguration | any, hitAreaCallback?: Phaser.Types.Input.HitAreaCallback, dropZone?: boolean): this;

    /**
     * Takes the given Pointer and performs a hit test against it, to see which interactive Game Objects
     * it is currently above.
     *
     * The hit test is performed against which-ever Camera the Pointer is over. If it is over multiple
     * cameras, it starts checking the camera at the top of the camera list, and if nothing is found, iterates down the list.
     * @param pointer The Pointer to check against the Game Objects.
     */
    hitTestPointer(pointer: Phaser.Input.Pointer): Phaser.GameObjects.GameObject[];

    /**
     * Returns the drag state of the given Pointer for this Input Plugin.
     *
     * The state will be one of the following:
     *
     * 0 = Not dragging anything
     * 1 = Primary button down and objects below, so collect a draglist
     * 2 = Pointer being checked if meets drag criteria
     * 3 = Pointer meets criteria, notify the draglist
     * 4 = Pointer actively dragging the draglist and has moved
     * 5 = Pointer actively dragging but has been released, notify draglist
     * @param pointer The Pointer to get the drag state for.
     */
    getDragState(pointer: Phaser.Input.Pointer): number;

    /**
     * Sets the drag state of the given Pointer for this Input Plugin.
     *
     * The state must be one of the following values:
     *
     * 0 = Not dragging anything
     * 1 = Primary button down and objects below, so collect a draglist
     * 2 = Pointer being checked if meets drag criteria
     * 3 = Pointer meets criteria, notify the draglist
     * 4 = Pointer actively dragging the draglist and has moved
     * 5 = Pointer actively dragging but has been released, notify draglist
     * @param pointer The Pointer to set the drag state for.
     * @param state The drag state value. An integer between 0 and 5.
     */
    setDragState(pointer: Phaser.Input.Pointer, state: number): void;

    /**
     * Sets the draggable state of the given array of Game Objects.
     *
     * They can either be set to be draggable, or can have their draggable state removed by passing `false`.
     *
     * A Game Object will not fire drag events unless it has been specifically enabled for drag.
     * @param gameObjects An array of Game Objects to change the draggable state on.
     * @param value Set to `true` if the Game Objects should be made draggable, `false` if they should be unset. Default true.
     */
    setDraggable(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], value?: boolean): this;

    /**
     * Creates a function that can be passed to `setInteractive`, `enable` or `setHitArea` that will handle
     * pixel-perfect input detection on an Image or Sprite based Game Object, or any custom class that extends them.
     *
     * The following will create a sprite that is clickable on any pixel that has an alpha value >= 1.
     *
     * ```javascript
     * this.add.sprite(x, y, key).setInteractive(this.input.makePixelPerfect());
     * ```
     *
     * The following will create a sprite that is clickable on any pixel that has an alpha value >= 150.
     *
     * ```javascript
     * this.add.sprite(x, y, key).setInteractive(this.input.makePixelPerfect(150));
     * ```
     *
     * Once you have made an Interactive Object pixel perfect it impacts all input related events for it: down, up,
     * dragstart, drag, etc.
     *
     * As a pointer interacts with the Game Object it will constantly poll the texture, extracting a single pixel from
     * the given coordinates and checking its color values. This is an expensive process, so should only be enabled on
     * Game Objects that really need it.
     *
     * You cannot make non-texture based Game Objects pixel perfect. So this will not work on Graphics, BitmapText,
     * Render Textures, Text, Tilemaps, Containers or Particles.
     * @param alphaTolerance The alpha level that the pixel should be above to be included as a successful interaction. Default 1.
     */
    makePixelPerfect(alphaTolerance?: number): Function;

    /**
     * Sets the hit area for the given array of Game Objects.
     *
     * A hit area is typically one of the geometric shapes Phaser provides, such as a `Phaser.Geom.Rectangle`
     * or `Phaser.Geom.Circle`. However, it can be any object as long as it works with the provided callback.
     *
     * If no hit area is provided a Rectangle is created based on the size of the Game Object, if possible
     * to calculate.
     *
     * The hit area callback is the function that takes an `x` and `y` coordinate and returns a boolean if
     * those values fall within the area of the shape or not. All of the Phaser geometry objects provide this,
     * such as `Phaser.Geom.Rectangle.Contains`.
     * @param gameObjects An array of Game Objects to set the hit area on.
     * @param hitArea Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not specified a Rectangle will be used.
     * @param hitAreaCallback The 'contains' function to invoke to check if the pointer is within the hit area.
     */
    setHitArea(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], hitArea?: Phaser.Types.Input.InputConfiguration | any, hitAreaCallback?: Phaser.Types.Input.HitAreaCallback): this;

    /**
     * Sets the hit area for an array of Game Objects to be a `Phaser.Geom.Circle` shape, using
     * the given coordinates and radius to control its position and size.
     * @param gameObjects An array of Game Objects to set as having a circle hit area.
     * @param x The center of the circle.
     * @param y The center of the circle.
     * @param radius The radius of the circle.
     * @param callback The hit area callback. If undefined it uses Circle.Contains.
     */
    setHitAreaCircle(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], x: number, y: number, radius: number, callback?: Phaser.Types.Input.HitAreaCallback): this;

    /**
     * Sets the hit area for an array of Game Objects to be a `Phaser.Geom.Ellipse` shape, using
     * the given coordinates and dimensions to control its position and size.
     * @param gameObjects An array of Game Objects to set as having an ellipse hit area.
     * @param x The center of the ellipse.
     * @param y The center of the ellipse.
     * @param width The width of the ellipse.
     * @param height The height of the ellipse.
     * @param callback The hit area callback. If undefined it uses Ellipse.Contains.
     */
    setHitAreaEllipse(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], x: number, y: number, width: number, height: number, callback?: Phaser.Types.Input.HitAreaCallback): this;

    /**
     * Sets the hit area for an array of Game Objects to be a `Phaser.Geom.Rectangle` shape, using
     * the Game Objects texture frame to define the position and size of the hit area.
     * @param gameObjects An array of Game Objects to set as having an ellipse hit area.
     * @param callback The hit area callback. If undefined it uses Rectangle.Contains.
     */
    setHitAreaFromTexture(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], callback?: Phaser.Types.Input.HitAreaCallback): this;

    /**
     * Sets the hit area for an array of Game Objects to be a `Phaser.Geom.Rectangle` shape, using
     * the given coordinates and dimensions to control its position and size.
     * @param gameObjects An array of Game Objects to set as having a rectangular hit area.
     * @param x The top-left of the rectangle.
     * @param y The top-left of the rectangle.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param callback The hit area callback. If undefined it uses Rectangle.Contains.
     */
    setHitAreaRectangle(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], x: number, y: number, width: number, height: number, callback?: Phaser.Types.Input.HitAreaCallback): this;

    /**
     * Sets the hit area for an array of Game Objects to be a `Phaser.Geom.Triangle` shape, using
     * the given coordinates to control the position of its points.
     * @param gameObjects An array of Game Objects to set as having a  triangular hit area.
     * @param x1 The x coordinate of the first point of the triangle.
     * @param y1 The y coordinate of the first point of the triangle.
     * @param x2 The x coordinate of the second point of the triangle.
     * @param y2 The y coordinate of the second point of the triangle.
     * @param x3 The x coordinate of the third point of the triangle.
     * @param y3 The y coordinate of the third point of the triangle.
     * @param callback The hit area callback. If undefined it uses Triangle.Contains.
     */
    setHitAreaTriangle(gameObjects: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[], x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, callback?: Phaser.Types.Input.HitAreaCallback): this;

    /**
     * Creates an Input Debug Shape for the given Game Object.
     *
     * The Game Object must have _already_ been enabled for input prior to calling this method.
     *
     * This is intended to assist you during development and debugging.
     *
     * Debug Shapes can only be created for Game Objects that are using standard Phaser Geometry for input,
     * including: Circle, Ellipse, Line, Polygon, Rectangle and Triangle.
     *
     * Game Objects that are using their automatic hit areas are using Rectangles by default, so will also work.
     *
     * The Debug Shape is created and added to the display list and is then kept in sync with the Game Object
     * it is connected with. Should you need to modify it yourself, such as to hide it, you can access it via
     * the Game Object property: `GameObject.input.hitAreaDebug`.
     *
     * Calling this method on a Game Object that already has a Debug Shape will first destroy the old shape,
     * before creating a new one. If you wish to remove the Debug Shape entirely, you should call the
     * method `InputPlugin.removeDebug`.
     *
     * Note that the debug shape will only show the outline of the input area. If the input test is using a
     * pixel perfect check, for example, then this is not displayed. If you are using a custom shape, that
     * doesn't extend one of the base Phaser Geometry objects, as your hit area, then this method will not
     * work.
     * @param gameObject The Game Object to create the input debug shape for.
     * @param color The outline color of the debug shape. Default 0x00ff00.
     */
    enableDebug(gameObject: Phaser.GameObjects.GameObject, color?: number): this;

    /**
     * Removes an Input Debug Shape from the given Game Object.
     *
     * The shape is destroyed immediately and the `hitAreaDebug` property is set to `null`.
     * @param gameObject The Game Object to remove the input debug shape from.
     */
    removeDebug(gameObject: Phaser.GameObjects.GameObject): this;

    /**
     * Sets the Pointers to always poll.
     *
     * When a pointer is polled it runs a hit test to see which Game Objects are currently below it,
     * or being interacted with it, regardless if the Pointer has actually moved or not.
     *
     * You should enable this if you want objects in your game to fire over / out events, and the objects
     * are constantly moving, but the pointer may not have. Polling every frame has additional computation
     * costs, especially if there are a large number of interactive objects in your game.
     */
    setPollAlways(): this;

    /**
     * Sets the Pointers to only poll when they are moved or updated.
     *
     * When a pointer is polled it runs a hit test to see which Game Objects are currently below it,
     * or being interacted with it.
     */
    setPollOnMove(): this;

    /**
     * Sets the poll rate value. This is the amount of time that should have elapsed before a pointer
     * will be polled again. See the `setPollAlways` and `setPollOnMove` methods.
     * @param value The amount of time, in ms, that should elapsed before re-polling the pointers.
     */
    setPollRate(value: number): this;

    /**
     * When set to `true` the global Input Manager will emulate DOM behavior by only emitting events from
     * the top-most Scene in the Scene List. By default, if a Scene receives an input event it will then stop the event
     * from flowing down to any Scenes below it in the Scene list. To disable this behavior call this method with `false`.
     * @param value Set to `true` to stop processing input events on the Scene that receives it, or `false` to let the event continue down the Scene list.
     */
    setGlobalTopOnly(value: boolean): this;

    /**
     * When set to `true` this Input Plugin will emulate DOM behavior by only emitting events from
     * the top-most Game Objects in the Display List.
     *
     * If set to `false` it will emit events from all Game Objects below a Pointer, not just the top one.
     * @param value `true` to only include the top-most Game Object, or `false` to include all Game Objects in a hit test.
     */
    setTopOnly(value: boolean): this;

    /**
     * Given an array of Game Objects and a Pointer, sort the array and return it,
     * so that the objects are in render order with the lowest at the bottom.
     * @param gameObjects An array of Game Objects to be sorted.
     * @param pointer The Pointer to check against the Game Objects.
     */
    sortGameObjects(gameObjects: Phaser.GameObjects.GameObject[], pointer: Phaser.Input.Pointer): Phaser.GameObjects.GameObject[];

    /**
     * Given an array of Drop Zone Game Objects, sort the array and return it,
     * so that the objects are in depth index order with the lowest at the bottom.
     * @param gameObjects An array of Game Objects to be sorted.
     */
    sortDropZones(gameObjects: Phaser.GameObjects.GameObject[]): Phaser.GameObjects.GameObject[];

    /**
     * This method should be called from within an input event handler, such as `pointerdown`.
     *
     * When called, it stops the Input Manager from allowing _this specific event_ to be processed by any other Scene
     * not yet handled in the scene list.
     */
    stopPropagation(): this;

    /**
     * Adds new Pointer objects to the Input Manager.
     *
     * By default Phaser creates 2 pointer objects: `mousePointer` and `pointer1`.
     *
     * You can create more either by calling this method, or by setting the `input.activePointers` property
     * in the Game Config, up to a maximum of 10 pointers.
     *
     * The first 10 pointers are available via the `InputPlugin.pointerX` properties, once they have been added
     * via this method.
     * @param quantity The number of new Pointers to create. A maximum of 10 is allowed in total. Default 1.
     */
    addPointer(quantity?: number): Phaser.Input.Pointer[];

    /**
     * Tells the Input system to set a custom cursor.
     *
     * This cursor will be the default cursor used when interacting with the game canvas.
     *
     * If an Interactive Object also sets a custom cursor, this is the cursor that is reset after its use.
     *
     * Any valid CSS cursor value is allowed, including paths to image files, i.e.:
     *
     * ```javascript
     * this.input.setDefaultCursor('url(assets/cursors/sword.cur), pointer');
     * ```
     *
     * Please read about the differences between browsers when it comes to the file formats and sizes they support:
     *
     * https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_User_Interface/Using_URL_values_for_the_cursor_property
     *
     * It's up to you to pick a suitable cursor format that works across the range of browsers you need to support.
     * @param cursor The CSS to be used when setting the default cursor.
     */
    setDefaultCursor(cursor: string): this;

    /**
     * The x coordinates of the ActivePointer based on the first camera in the camera list.
     * This is only safe to use if your game has just 1 non-transformed camera and doesn't use multi-touch.
     */
    readonly x: number;

    /**
     * The y coordinates of the ActivePointer based on the first camera in the camera list.
     * This is only safe to use if your game has just 1 non-transformed camera and doesn't use multi-touch.
     */
    readonly y: number;

    /**
     * Are any mouse or touch pointers currently over the game canvas?
     */
    readonly isOver: boolean;

    /**
     * The mouse has its own unique Pointer object, which you can reference directly if making a _desktop specific game_.
     * If you are supporting both desktop and touch devices then do not use this property, instead use `activePointer`
     * which will always map to the most recently interacted pointer.
     */
    readonly mousePointer: Phaser.Input.Pointer;

    /**
     * The current active input Pointer.
     */
    readonly activePointer: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer1: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer2: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer3: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer4: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer5: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer6: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer7: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer8: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer9: Phaser.Input.Pointer;

    /**
     * A touch-based Pointer object.
     * This will be `undefined` by default unless you add a new Pointer using `addPointer`.
     */
    readonly pointer10: Phaser.Input.Pointer;

    /**
     * An instance of the Keyboard Plugin class, if enabled via the `input.keyboard` Scene or Game Config property.
     * Use this to create Key objects and listen for keyboard specific events.
     */
    keyboard: Phaser.Input.Keyboard.KeyboardPlugin;

  }

  namespace InputPluginCache {
    /**
     * Static method called directly by the Core internal Plugins.
     * Key is a reference used to get the plugin from the plugins object (i.e. InputPlugin)
     * Plugin is the object to instantiate to create the plugin
     * Mapping is what the plugin is injected into the Scene.Systems as (i.e. input)
     * @param key A reference used to get this plugin from the plugin cache.
     * @param plugin The plugin to be stored. Should be the core object, not instantiated.
     * @param mapping If this plugin is to be injected into the Input Plugin, this is the property key used.
     * @param settingsKey The key in the Scene Settings to check to see if this plugin should install or not.
     * @param configKey The key in the Game Config to check to see if this plugin should install or not.
     */
    function register(key: string, plugin: Function, mapping: string, settingsKey: string, configKey: string): void;

    /**
     * Returns the input plugin object from the cache based on the given key.
     * @param key The key of the input plugin to get.
     */
    function getPlugin(key: string): Phaser.Types.Input.InputPluginContainer;

    /**
     * Installs all of the registered Input Plugins into the given target.
     * @param target The target InputPlugin to install the plugins into.
     */
    function install(target: Phaser.Input.InputPlugin): void;

    /**
     * Removes an input plugin based on the given key.
     * @param key The key of the input plugin to remove.
     */
    function remove(key: string): void;

  }

  namespace Keyboard {
    /**
     * A KeyCombo will listen for a specific string of keys from the Keyboard, and when it receives them
     * it will emit a `keycombomatch` event from the Keyboard Manager.
     *
     * The keys to be listened for can be defined as:
     *
     * A string (i.e. 'ATARI')
     * An array of either integers (key codes) or strings, or a mixture of both
     * An array of objects (such as Key objects) with a public 'keyCode' property
     *
     * For example, to listen for the Konami code (up, up, down, down, left, right, left, right, b, a, enter)
     * you could pass the following array of key codes:
     *
     * ```javascript
     * this.input.keyboard.createCombo([ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13 ], { resetOnMatch: true });
     *
     * this.input.keyboard.on('keycombomatch', function (event) {
     *     console.info('Konami Code entered!');
     * });
     * ```
     *
     * Or, to listen for the user entering the word PHASER:
     *
     * ```javascript
     * this.input.keyboard.createCombo('PHASER');
     * ```
     */
    class KeyCombo {
      /**
       *
       * @param keyboardPlugin A reference to the Keyboard Plugin.
       * @param keys The keys that comprise this combo.
       * @param config A Key Combo configuration object.
       */
      constructor(keyboardPlugin: Phaser.Input.Keyboard.KeyboardPlugin, keys: string | number[] | object[], config?: Phaser.Types.Input.Keyboard.KeyComboConfig);

      /**
       * A reference to the Keyboard Manager
       */
      manager: Phaser.Input.Keyboard.KeyboardPlugin;

      /**
       * A flag that controls if this Key Combo is actively processing keys or not.
       */
      enabled: boolean;

      /**
       * An array of the keycodes that comprise this combo.
       */
      keyCodes: any[];

      /**
       * The current keyCode the combo is waiting for.
       */
      current: number;

      /**
       * The current index of the key being waited for in the 'keys' string.
       */
      index: number;

      /**
       * The length of this combo (in keycodes)
       */
      size: number;

      /**
       * The time the previous key in the combo was matched.
       */
      timeLastMatched: number;

      /**
       * Has this Key Combo been matched yet?
       */
      matched: boolean;

      /**
       * The time the entire combo was matched.
       */
      timeMatched: number;

      /**
       * If they press the wrong key do we reset the combo?
       */
      resetOnWrongKey: boolean;

      /**
       * The max delay in ms between each key press. Above this the combo is reset. 0 means disabled.
       */
      maxKeyDelay: number;

      /**
       * If previously matched and they press the first key of the combo again, will it reset?
       */
      resetOnMatch: boolean;

      /**
       * If the combo matches, will it delete itself?
       */
      deleteOnMatch: boolean;

      /**
       * How far complete is this combo? A value between 0 and 1.
       */
      readonly progress: number;

      /**
       * Destroys this Key Combo and all of its references.
       */
      destroy(): void;

    }

    namespace Events {
      /**
       * The Global Key Down Event.
       *
       * This event is dispatched by the Keyboard Plugin when any key on the keyboard is pressed down.
       *
       * Listen to this event from within a Scene using: `this.input.keyboard.on('keydown', listener)`.
       *
       * You can also listen for a specific key being pressed. See [Keyboard.Events.KEY_DOWN]{@linkcode Phaser.Input.Keyboard.Events#event:KEY_DOWN} for details.
       *
       * Finally, you can create Key objects, which you can also listen for events from. See [Keyboard.Events.DOWN]{@linkcode Phaser.Input.Keyboard.Events#event:DOWN} for details.
       *
       * _Note_: Many keyboards are unable to process certain combinations of keys due to hardware limitations known as ghosting.
       * Read [this article on ghosting]{@link http://www.html5gamedevs.com/topic/4876-impossible-to-use-more-than-2-keyboard-input-buttons-at-the-same-time/} for details.
       *
       * Also, please be aware that some browser extensions can disable or override Phaser keyboard handling.
       * For example, the Chrome extension vimium is known to disable Phaser from using the D key, while EverNote disables the backtick key.
       * There are others. So, please check your extensions if you find you have specific keys that don't work.
       */
      const ANY_KEY_DOWN: any;

      /**
       * The Global Key Up Event.
       *
       * This event is dispatched by the Keyboard Plugin when any key on the keyboard is released.
       *
       * Listen to this event from within a Scene using: `this.input.keyboard.on('keyup', listener)`.
       *
       * You can also listen for a specific key being released. See [Keyboard.Events.KEY_UP]{@linkcode Phaser.Input.Keyboard.Events#event:KEY_UP} for details.
       *
       * Finally, you can create Key objects, which you can also listen for events from. See [Keyboard.Events.UP]{@linkcode Phaser.Input.Keyboard.Events#event:UP} for details.
       */
      const ANY_KEY_UP: any;

      /**
       * The Key Combo Match Event.
       *
       * This event is dispatched by the Keyboard Plugin when a [Key Combo]{@link Phaser.Input.Keyboard.KeyCombo} is matched.
       *
       * Listen for this event from the Key Plugin after a combo has been created:
       *
       * ```javascript
       * this.input.keyboard.createCombo([ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13 ], { resetOnMatch: true });
       *
       * this.input.keyboard.on('keycombomatch', function (event) {
       *     console.info('Konami Code entered!');
       * });
       * ```
       */
      const COMBO_MATCH: any;

      /**
       * The Key Down Event.
       *
       * This event is dispatched by a [Key]{@link Phaser.Input.Keyboard.Key} object when it is pressed.
       *
       * Listen for this event from the Key object instance directly:
       *
       * ```javascript
       * var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
       *
       * spaceBar.on('down', listener)
       * ```
       *
       * You can also create a generic 'global' listener. See [Keyboard.Events.ANY_KEY_DOWN]{@linkcode Phaser.Input.Keyboard.Events#event:ANY_KEY_DOWN} for details.
       */
      const DOWN: any;

      /**
       * The Key Down Event.
       *
       * This event is dispatched by the Keyboard Plugin when any key on the keyboard is pressed down.
       *
       * Unlike the `ANY_KEY_DOWN` event, this one has a special dynamic event name. For example, to listen for the `A` key being pressed
       * use the following from within a Scene: `this.input.keyboard.on('keydown-A', listener)`. You can replace the `-A` part of the event
       * name with any valid [Key Code string]{@link Phaser.Input.Keyboard.KeyCodes}. For example, this will listen for the space bar:
       * `this.input.keyboard.on('keydown-SPACE', listener)`.
       *
       * You can also create a generic 'global' listener. See [Keyboard.Events.ANY_KEY_DOWN]{@linkcode Phaser.Input.Keyboard.Events#event:ANY_KEY_DOWN} for details.
       *
       * Finally, you can create Key objects, which you can also listen for events from. See [Keyboard.Events.DOWN]{@linkcode Phaser.Input.Keyboard.Events#event:DOWN} for details.
       *
       * _Note_: Many keyboards are unable to process certain combinations of keys due to hardware limitations known as ghosting.
       * Read [this article on ghosting]{@link http://www.html5gamedevs.com/topic/4876-impossible-to-use-more-than-2-keyboard-input-buttons-at-the-same-time/} for details.
       *
       * Also, please be aware that some browser extensions can disable or override Phaser keyboard handling.
       * For example, the Chrome extension vimium is known to disable Phaser from using the D key, while EverNote disables the backtick key.
       * There are others. So, please check your extensions if you find you have specific keys that don't work.
       */
      const KEY_DOWN: any;

      /**
       * The Key Up Event.
       *
       * This event is dispatched by the Keyboard Plugin when any key on the keyboard is released.
       *
       * Unlike the `ANY_KEY_UP` event, this one has a special dynamic event name. For example, to listen for the `A` key being released
       * use the following from within a Scene: `this.input.keyboard.on('keyup-A', listener)`. You can replace the `-A` part of the event
       * name with any valid [Key Code string]{@link Phaser.Input.Keyboard.KeyCodes}. For example, this will listen for the space bar:
       * `this.input.keyboard.on('keyup-SPACE', listener)`.
       *
       * You can also create a generic 'global' listener. See [Keyboard.Events.ANY_KEY_UP]{@linkcode Phaser.Input.Keyboard.Events#event:ANY_KEY_UP} for details.
       *
       * Finally, you can create Key objects, which you can also listen for events from. See [Keyboard.Events.UP]{@linkcode Phaser.Input.Keyboard.Events#event:UP} for details.
       */
      const KEY_UP: any;

      /**
       * The Key Up Event.
       *
       * This event is dispatched by a [Key]{@link Phaser.Input.Keyboard.Key} object when it is released.
       *
       * Listen for this event from the Key object instance directly:
       *
       * ```javascript
       * var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
       *
       * spaceBar.on('up', listener)
       * ```
       *
       * You can also create a generic 'global' listener. See [Keyboard.Events.ANY_KEY_UP]{@linkcode Phaser.Input.Keyboard.Events#event:ANY_KEY_UP} for details.
       */
      const UP: any;

    }

    /**
     * The Keyboard Manager is a helper class that belongs to the global Input Manager.
     *
     * Its role is to listen for native DOM Keyboard Events and then store them for further processing by the Keyboard Plugin.
     *
     * You do not need to create this class directly, the Input Manager will create an instance of it automatically if keyboard
     * input has been enabled in the Game Config.
     */
    class KeyboardManager {
      /**
       *
       * @param inputManager A reference to the Input Manager.
       */
      constructor(inputManager: Phaser.Input.InputManager);

      /**
       * A reference to the Input Manager.
       */
      manager: Phaser.Input.InputManager;

      /**
       * A flag that controls if the non-modified keys, matching those stored in the `captures` array,
       * have `preventDefault` called on them or not.
       *
       * A non-modified key is one that doesn't have a modifier key held down with it. The modifier keys are
       * shift, control, alt and the meta key (Command on a Mac, the Windows Key on Windows).
       * Therefore, if the user presses shift + r, it won't prevent this combination, because of the modifier.
       * However, if the user presses just the r key on its own, it will have its event prevented.
       *
       * If you wish to stop capturing the keys, for example switching out to a DOM based element, then
       * you can toggle this property at run-time.
       */
      preventDefault: boolean;

      /**
       * An array of Key Code values that will automatically have `preventDefault` called on them,
       * as long as the `KeyboardManager.preventDefault` boolean is set to `true`.
       *
       * By default the array is empty.
       *
       * The key must be non-modified when pressed in order to be captured.
       *
       * A non-modified key is one that doesn't have a modifier key held down with it. The modifier keys are
       * shift, control, alt and the meta key (Command on a Mac, the Windows Key on Windows).
       * Therefore, if the user presses shift + r, it won't prevent this combination, because of the modifier.
       * However, if the user presses just the r key on its own, it will have its event prevented.
       *
       * If you wish to stop capturing the keys, for example switching out to a DOM based element, then
       * you can toggle the `KeyboardManager.preventDefault` boolean at run-time.
       *
       * If you need more specific control, you can create Key objects and set the flag on each of those instead.
       *
       * This array can be populated via the Game Config by setting the `input.keyboard.capture` array, or you
       * can call the `addCapture` method. See also `removeCapture` and `clearCaptures`.
       */
      captures: number[];

      /**
       * A boolean that controls if the Keyboard Manager is enabled or not.
       * Can be toggled on the fly.
       */
      enabled: boolean;

      /**
       * The Keyboard Event target, as defined in the Game Config.
       * Typically the window in which the game is rendering, but can be any interactive DOM element.
       */
      target: any;

      /**
       * The Key Down Event handler.
       * This function is sent the native DOM KeyEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onKeyDown: Function;

      /**
       * The Key Up Event handler.
       * This function is sent the native DOM KeyEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onKeyUp: Function;

      /**
       * Starts the Keyboard Event listeners running.
       * This is called automatically and does not need to be manually invoked.
       */
      startListeners(): void;

      /**
       * Stops the Key Event listeners.
       * This is called automatically and does not need to be manually invoked.
       */
      stopListeners(): void;

      /**
       * By default when a key is pressed Phaser will not stop the event from propagating up to the browser.
       * There are some keys this can be annoying for, like the arrow keys or space bar, which make the browser window scroll.
       *
       * This `addCapture` method enables consuming keyboard event for specific keys so it doesn't bubble up to the the browser
       * and cause the default browser behavior.
       *
       * Please note that keyboard captures are global. This means that if you call this method from within a Scene, to say prevent
       * the SPACE BAR from triggering a page scroll, then it will prevent it for any Scene in your game, not just the calling one.
       *
       * You can pass in a single key code value, or an array of key codes, or a string:
       *
       * ```javascript
       * this.input.keyboard.addCapture(62);
       * ```
       *
       * An array of key codes:
       *
       * ```javascript
       * this.input.keyboard.addCapture([ 62, 63, 64 ]);
       * ```
       *
       * Or a string:
       *
       * ```javascript
       * this.input.keyboard.addCapture('W,S,A,D');
       * ```
       *
       * To use non-alpha numeric keys, use a string, such as 'UP', 'SPACE' or 'LEFT'.
       *
       * You can also provide an array mixing both strings and key code integers.
       *
       * If there are active captures after calling this method, the `preventDefault` property is set to `true`.
       * @param keycode The Key Codes to enable capture for, preventing them reaching the browser.
       */
      addCapture(keycode: string | number | number[] | any[]): void;

      /**
       * Removes an existing key capture.
       *
       * Please note that keyboard captures are global. This means that if you call this method from within a Scene, to remove
       * the capture of a key, then it will remove it for any Scene in your game, not just the calling one.
       *
       * You can pass in a single key code value, or an array of key codes, or a string:
       *
       * ```javascript
       * this.input.keyboard.removeCapture(62);
       * ```
       *
       * An array of key codes:
       *
       * ```javascript
       * this.input.keyboard.removeCapture([ 62, 63, 64 ]);
       * ```
       *
       * Or a string:
       *
       * ```javascript
       * this.input.keyboard.removeCapture('W,S,A,D');
       * ```
       *
       * To use non-alpha numeric keys, use a string, such as 'UP', 'SPACE' or 'LEFT'.
       *
       * You can also provide an array mixing both strings and key code integers.
       *
       * If there are no captures left after calling this method, the `preventDefault` property is set to `false`.
       * @param keycode The Key Codes to disable capture for, allowing them reaching the browser again.
       */
      removeCapture(keycode: string | number | number[] | any[]): void;

      /**
       * Removes all keyboard captures and sets the `preventDefault` property to `false`.
       */
      clearCaptures(): void;

      /**
       * Destroys this Keyboard Manager instance.
       */
      destroy(): void;

    }

    /**
     * The Keyboard Plugin is an input plugin that belongs to the Scene-owned Input system.
     *
     * Its role is to listen for native DOM Keyboard Events and then process them.
     *
     * You do not need to create this class directly, the Input system will create an instance of it automatically.
     *
     * You can access it from within a Scene using `this.input.keyboard`. For example, you can do:
     *
     * ```javascript
     * this.input.keyboard.on('keydown', callback, context);
     * ```
     *
     * Or, to listen for a specific key:
     *
     * ```javascript
     * this.input.keyboard.on('keydown-A', callback, context);
     * ```
     *
     * You can also create Key objects, which you can then poll in your game loop:
     *
     * ```javascript
     * var spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
     * ```
     *
     * If you have multiple parallel Scenes, each trying to get keyboard input, be sure to disable capture on them to stop them from
     * stealing input from another Scene in the list. You can do this with `this.input.keyboard.enabled = false` within the
     * Scene to stop all input, or `this.input.keyboard.preventDefault = false` to stop a Scene halting input on another Scene.
     *
     * _Note_: Many keyboards are unable to process certain combinations of keys due to hardware limitations known as ghosting.
     * See http://www.html5gamedevs.com/topic/4876-impossible-to-use-more-than-2-keyboard-input-buttons-at-the-same-time/ for more details.
     *
     * Also please be aware that certain browser extensions can disable or override Phaser keyboard handling.
     * For example the Chrome extension vimium is known to disable Phaser from using the D key, while EverNote disables the backtick key.
     * And there are others. So, please check your extensions before opening Phaser issues about keys that don't work.
     */
    class KeyboardPlugin extends Phaser.Events.EventEmitter {
      /**
       *
       * @param sceneInputPlugin A reference to the Scene Input Plugin that the KeyboardPlugin belongs to.
       */
      constructor(sceneInputPlugin: Phaser.Input.InputPlugin);

      /**
       * A reference to the core game, so we can listen for visibility events.
       */
      game: Phaser.Game;

      /**
       * A reference to the Scene that this Input Plugin is responsible for.
       */
      scene: Phaser.Scene;

      /**
       * A reference to the Scene Systems Settings.
       */
      settings: Phaser.Types.Scenes.SettingsObject;

      /**
       * A reference to the Scene Input Plugin that created this Keyboard Plugin.
       */
      sceneInputPlugin: Phaser.Input.InputPlugin;

      /**
       * A reference to the global Keyboard Manager.
       */
      manager: Phaser.Input.Keyboard.KeyboardManager;

      /**
       * A boolean that controls if this Keyboard Plugin is enabled or not.
       * Can be toggled on the fly.
       */
      enabled: boolean;

      /**
       * An array of Key objects to process.
       */
      keys: Phaser.Input.Keyboard.Key[];

      /**
       * An array of KeyCombo objects to process.
       */
      combos: Phaser.Input.Keyboard.KeyCombo[];

      /**
       * Checks to see if both this plugin and the Scene to which it belongs is active.
       */
      isActive(): boolean;

      /**
       * By default when a key is pressed Phaser will not stop the event from propagating up to the browser.
       * There are some keys this can be annoying for, like the arrow keys or space bar, which make the browser window scroll.
       *
       * This `addCapture` method enables consuming keyboard events for specific keys, so they don't bubble up the browser
       * and cause the default behaviors.
       *
       * Please note that keyboard captures are global. This means that if you call this method from within a Scene, to say prevent
       * the SPACE BAR from triggering a page scroll, then it will prevent it for any Scene in your game, not just the calling one.
       *
       * You can pass a single key code value:
       *
       * ```javascript
       * this.input.keyboard.addCapture(62);
       * ```
       *
       * An array of key codes:
       *
       * ```javascript
       * this.input.keyboard.addCapture([ 62, 63, 64 ]);
       * ```
       *
       * Or, a comma-delimited string:
       *
       * ```javascript
       * this.input.keyboard.addCapture('W,S,A,D');
       * ```
       *
       * To use non-alpha numeric keys, use a string, such as 'UP', 'SPACE' or 'LEFT'.
       *
       * You can also provide an array mixing both strings and key code integers.
       * @param keycode The Key Codes to enable event capture for.
       */
      addCapture(keycode: string | number | number[] | any[]): this;

      /**
       * Removes an existing key capture.
       *
       * Please note that keyboard captures are global. This means that if you call this method from within a Scene, to remove
       * the capture of a key, then it will remove it for any Scene in your game, not just the calling one.
       *
       * You can pass a single key code value:
       *
       * ```javascript
       * this.input.keyboard.removeCapture(62);
       * ```
       *
       * An array of key codes:
       *
       * ```javascript
       * this.input.keyboard.removeCapture([ 62, 63, 64 ]);
       * ```
       *
       * Or, a comma-delimited string:
       *
       * ```javascript
       * this.input.keyboard.removeCapture('W,S,A,D');
       * ```
       *
       * To use non-alpha numeric keys, use a string, such as 'UP', 'SPACE' or 'LEFT'.
       *
       * You can also provide an array mixing both strings and key code integers.
       * @param keycode The Key Codes to disable event capture for.
       */
      removeCapture(keycode: string | number | number[] | any[]): this;

      /**
       * Returns an array that contains all of the keyboard captures currently enabled.
       */
      getCaptures(): number[];

      /**
       * Allows Phaser to prevent any key captures you may have defined from bubbling up the browser.
       * You can use this to re-enable event capturing if you had paused it via `disableGlobalCapture`.
       */
      enableGlobalCapture(): this;

      /**
       * Disables Phaser from preventing any key captures you may have defined, without actually removing them.
       * You can use this to temporarily disable event capturing if, for example, you swap to a DOM element.
       */
      disableGlobalCapture(): this;

      /**
       * Removes all keyboard captures.
       *
       * Note that this is a global change. It will clear all event captures across your game, not just for this specific Scene.
       */
      clearCaptures(): this;

      /**
       * Creates and returns an object containing 4 hotkeys for Up, Down, Left and Right, and also Space Bar and shift.
       */
      createCursorKeys(): Phaser.Types.Input.Keyboard.CursorKeys;

      /**
       * A practical way to create an object containing user selected hotkeys.
       *
       * For example:
       *
       * ```javascript
       * this.input.keyboard.addKeys({ 'up': Phaser.Input.Keyboard.KeyCodes.W, 'down': Phaser.Input.Keyboard.KeyCodes.S });
       * ```
       *
       * would return an object containing the properties (`up` and `down`) mapped to W and S {@link Phaser.Input.Keyboard.Key} objects.
       *
       * You can also pass in a comma-separated string:
       *
       * ```javascript
       * this.input.keyboard.addKeys('W,S,A,D');
       * ```
       *
       * Which will return an object with the properties W, S, A and D mapped to the relevant Key objects.
       *
       * To use non-alpha numeric keys, use a string, such as 'UP', 'SPACE' or 'LEFT'.
       * @param keys An object containing Key Codes, or a comma-separated string.
       * @param enableCapture Automatically call `preventDefault` on the native DOM browser event for the key codes being added. Default true.
       * @param emitOnRepeat Controls if the Key will continuously emit a 'down' event while being held down (true), or emit the event just once (false, the default). Default false.
       */
      addKeys(keys: object | string, enableCapture?: boolean, emitOnRepeat?: boolean): object;

      /**
       * Adds a Key object to this Keyboard Plugin.
       *
       * The given argument can be either an existing Key object, a string, such as `A` or `SPACE`, or a key code value.
       *
       * If a Key object is given, and one already exists matching the same key code, the existing one is replaced with the new one.
       * @param key Either a Key object, a string, such as `A` or `SPACE`, or a key code value.
       * @param enableCapture Automatically call `preventDefault` on the native DOM browser event for the key codes being added. Default true.
       * @param emitOnRepeat Controls if the Key will continuously emit a 'down' event while being held down (true), or emit the event just once (false, the default). Default false.
       */
      addKey(key: Phaser.Input.Keyboard.Key | string | number, enableCapture?: boolean, emitOnRepeat?: boolean): Phaser.Input.Keyboard.Key;

      /**
       * Removes a Key object from this Keyboard Plugin.
       *
       * The given argument can be either a Key object, a string, such as `A` or `SPACE`, or a key code value.
       * @param key Either a Key object, a string, such as `A` or `SPACE`, or a key code value.
       * @param destroy Call `Key.destroy` on the removed Key object? Default false.
       */
      removeKey(key: Phaser.Input.Keyboard.Key | string | number, destroy?: boolean): this;

      /**
       * Removes all Key objects created by _this_ Keyboard Plugin.
       * @param destroy Call `Key.destroy` on each removed Key object? Default false.
       */
      removeAllKeys(destroy?: boolean): this;

      /**
       * Creates a new KeyCombo.
       *
       * A KeyCombo will listen for a specific string of keys from the Keyboard, and when it receives them
       * it will emit a `keycombomatch` event from this Keyboard Plugin.
       *
       * The keys to be listened for can be defined as:
       *
       * A string (i.e. 'ATARI')
       * An array of either integers (key codes) or strings, or a mixture of both
       * An array of objects (such as Key objects) with a public 'keyCode' property
       *
       * For example, to listen for the Konami code (up, up, down, down, left, right, left, right, b, a, enter)
       * you could pass the following array of key codes:
       *
       * ```javascript
       * this.input.keyboard.createCombo([ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13 ], { resetOnMatch: true });
       *
       * this.input.keyboard.on('keycombomatch', function (event) {
       *     console.info('Konami Code entered!');
       * });
       * ```
       *
       * Or, to listen for the user entering the word PHASER:
       *
       * ```javascript
       * this.input.keyboard.createCombo('PHASER');
       * ```
       * @param keys The keys that comprise this combo.
       * @param config A Key Combo configuration object.
       */
      createCombo(keys: string | number[] | object[], config?: Phaser.Types.Input.Keyboard.KeyComboConfig): Phaser.Input.Keyboard.KeyCombo;

      /**
       * Checks if the given Key object is currently being held down.
       *
       * The difference between this method and checking the `Key.isDown` property directly is that you can provide
       * a duration to this method. For example, if you wanted a key press to fire a bullet, but you only wanted
       * it to be able to fire every 100ms, then you can call this method with a `duration` of 100 and it
       * will only return `true` every 100ms.
       *
       * If the Keyboard Plugin has been disabled, this method will always return `false`.
       * @param key A Key object.
       * @param duration The duration which must have elapsed before this Key is considered as being down. Default 0.
       */
      checkDown(key: Phaser.Input.Keyboard.Key, duration?: number): boolean;

      /**
       * Resets all Key objects created by _this_ Keyboard Plugin back to their default un-pressed states.
       * This can only reset keys created via the `addKey`, `addKeys` or `createCursorKeys` methods.
       * If you have created a Key object directly you'll need to reset it yourself.
       *
       * This method is called automatically when the Keyboard Plugin shuts down, but can be
       * invoked directly at any time you require.
       */
      resetKeys(): this;

    }

    /**
     * Returns `true` if the Key was pressed down within the `duration` value given, based on the current
     * game clock time. Or `false` if it either isn't down, or was pressed down longer ago than the given duration.
     * @param key The Key object to test.
     * @param duration The duration, in ms, within which the key must have been pressed down. Default 50.
     */
    function DownDuration(key: Phaser.Input.Keyboard.Key, duration?: number): boolean;

    /**
     * The justDown value allows you to test if this Key has just been pressed down or not.
     *
     * When you check this value it will return `true` if the Key is down, otherwise `false`.
     *
     * You can only call justDown once per key press. It will only return `true` once, until the Key is released and pressed down again.
     * This allows you to use it in situations where you want to check if this key is down without using an event, such as in a core game loop.
     * @param key The Key to check to see if it's just down or not.
     */
    function JustDown(key: Phaser.Input.Keyboard.Key): boolean;

    /**
     * The justUp value allows you to test if this Key has just been released or not.
     *
     * When you check this value it will return `true` if the Key is up, otherwise `false`.
     *
     * You can only call JustUp once per key release. It will only return `true` once, until the Key is pressed down and released again.
     * This allows you to use it in situations where you want to check if this key is up without using an event, such as in a core game loop.
     * @param key The Key to check to see if it's just up or not.
     */
    function JustUp(key: Phaser.Input.Keyboard.Key): boolean;

    /**
     * A generic Key object which can be passed to the Process functions (and so on)
     * keycode must be an integer
     */
    class Key extends Phaser.Events.EventEmitter {
      /**
       *
       * @param plugin The Keyboard Plugin instance that owns this Key object.
       * @param keyCode The keycode of this key.
       */
      constructor(plugin: Phaser.Input.Keyboard.KeyboardPlugin, keyCode: number);

      /**
       * The Keyboard Plugin instance that owns this Key object.
       */
      plugin: Phaser.Input.Keyboard.KeyboardPlugin;

      /**
       * The keycode of this key.
       */
      keyCode: number;

      /**
       * The original DOM event.
       */
      originalEvent: KeyboardEvent;

      /**
       * Can this Key be processed?
       */
      enabled: boolean;

      /**
       * The "down" state of the key. This will remain `true` for as long as the keyboard thinks this key is held down.
       */
      isDown: boolean;

      /**
       * The "up" state of the key. This will remain `true` for as long as the keyboard thinks this key is up.
       */
      isUp: boolean;

      /**
       * The down state of the ALT key, if pressed at the same time as this key.
       */
      altKey: boolean;

      /**
       * The down state of the CTRL key, if pressed at the same time as this key.
       */
      ctrlKey: boolean;

      /**
       * The down state of the SHIFT key, if pressed at the same time as this key.
       */
      shiftKey: boolean;

      /**
       * The down state of the Meta key, if pressed at the same time as this key.
       * On a Mac the Meta Key is the Command key. On Windows keyboards, it's the Windows key.
       */
      metaKey: boolean;

      /**
       * The location of the modifier key. 0 for standard (or unknown), 1 for left, 2 for right, 3 for numpad.
       */
      location: number;

      /**
       * The timestamp when the key was last pressed down.
       */
      timeDown: number;

      /**
       * The number of milliseconds this key was held down for in the previous down - up sequence.
       * This value isn't updated every game step, only when the Key changes state.
       * To get the current duration use the `getDuration` method.
       */
      duration: number;

      /**
       * The timestamp when the key was last released.
       */
      timeUp: number;

      /**
       * When a key is held down should it continuously fire the `down` event each time it repeats?
       *
       * By default it will emit the `down` event just once, but if you wish to receive the event
       * for each repeat as well, enable this property.
       */
      emitOnRepeat: boolean;

      /**
       * If a key is held down this holds down the number of times the key has 'repeated'.
       */
      repeats: number;

      /**
       * Controls if this Key will continuously emit a `down` event while being held down (true),
       * or emit the event just once, on first press, and then skip future events (false).
       * @param value Emit `down` events on repeated key down actions, or just once?
       */
      setEmitOnRepeat(value: boolean): this;

      /**
       * Processes the Key Down action for this Key.
       * Called automatically by the Keyboard Plugin.
       * @param event The native DOM Keyboard event.
       */
      onDown(event: KeyboardEvent): void;

      /**
       * Processes the Key Up action for this Key.
       * Called automatically by the Keyboard Plugin.
       * @param event The native DOM Keyboard event.
       */
      onUp(event: KeyboardEvent): void;

      /**
       * Resets this Key object back to its default un-pressed state.
       */
      reset(): this;

      /**
       * Returns the duration, in ms, that the Key has been held down for.
       *
       * If the key is not currently down it will return zero.
       *
       * The get the duration the Key was held down for in the previous up-down cycle,
       * use the `Key.duration` property value instead.
       */
      getDuration(): number;

      /**
       * Removes any bound event handlers and removes local references.
       */
      destroy(): void;

    }

    /**
     * Keyboard Codes.
     */
    namespace KeyCodes {
      /**
       * The BACKSPACE key.
       */
      var BACKSPACE: number;

      /**
       * The TAB key.
       */
      var TAB: number;

      /**
       * The ENTER key.
       */
      var ENTER: number;

      /**
       * The SHIFT key.
       */
      var SHIFT: number;

      /**
       * The CTRL key.
       */
      var CTRL: number;

      /**
       * The ALT key.
       */
      var ALT: number;

      /**
       * The PAUSE key.
       */
      var PAUSE: number;

      /**
       * The CAPS_LOCK key.
       */
      var CAPS_LOCK: number;

      /**
       * The ESC key.
       */
      var ESC: number;

      /**
       * The SPACE key.
       */
      var SPACE: number;

      /**
       * The PAGE_UP key.
       */
      var PAGE_UP: number;

      /**
       * The PAGE_DOWN key.
       */
      var PAGE_DOWN: number;

      /**
       * The END key.
       */
      var END: number;

      /**
       * The HOME key.
       */
      var HOME: number;

      /**
       * The LEFT key.
       */
      var LEFT: number;

      /**
       * The UP key.
       */
      var UP: number;

      /**
       * The RIGHT key.
       */
      var RIGHT: number;

      /**
       * The DOWN key.
       */
      var DOWN: number;

      /**
       * The PRINT_SCREEN key.
       */
      var PRINT_SCREEN: number;

      /**
       * The INSERT key.
       */
      var INSERT: number;

      /**
       * The DELETE key.
       */
      var DELETE: number;

      /**
       * The ZERO key.
       */
      var ZERO: number;

      /**
       * The ONE key.
       */
      var ONE: number;

      /**
       * The TWO key.
       */
      var TWO: number;

      /**
       * The THREE key.
       */
      var THREE: number;

      /**
       * The FOUR key.
       */
      var FOUR: number;

      /**
       * The FIVE key.
       */
      var FIVE: number;

      /**
       * The SIX key.
       */
      var SIX: number;

      /**
       * The SEVEN key.
       */
      var SEVEN: number;

      /**
       * The EIGHT key.
       */
      var EIGHT: number;

      /**
       * The NINE key.
       */
      var NINE: number;

      /**
       * The NUMPAD_ZERO key.
       */
      var NUMPAD_ZERO: number;

      /**
       * The NUMPAD_ONE key.
       */
      var NUMPAD_ONE: number;

      /**
       * The NUMPAD_TWO key.
       */
      var NUMPAD_TWO: number;

      /**
       * The NUMPAD_THREE key.
       */
      var NUMPAD_THREE: number;

      /**
       * The NUMPAD_FOUR key.
       */
      var NUMPAD_FOUR: number;

      /**
       * The NUMPAD_FIVE key.
       */
      var NUMPAD_FIVE: number;

      /**
       * The NUMPAD_SIX key.
       */
      var NUMPAD_SIX: number;

      /**
       * The NUMPAD_SEVEN key.
       */
      var NUMPAD_SEVEN: number;

      /**
       * The NUMPAD_EIGHT key.
       */
      var NUMPAD_EIGHT: number;

      /**
       * The NUMPAD_NINE key.
       */
      var NUMPAD_NINE: number;

      /**
       * The Numpad Addition (+) key.
       */
      var NUMPAD_ADD: number;

      /**
       * The Numpad Subtraction (-) key.
       */
      var NUMPAD_SUBTRACT: number;

      /**
       * The A key.
       */
      var A: number;

      /**
       * The B key.
       */
      var B: number;

      /**
       * The C key.
       */
      var C: number;

      /**
       * The D key.
       */
      var D: number;

      /**
       * The E key.
       */
      var E: number;

      /**
       * The F key.
       */
      var F: number;

      /**
       * The G key.
       */
      var G: number;

      /**
       * The H key.
       */
      var H: number;

      /**
       * The I key.
       */
      var I: number;

      /**
       * The J key.
       */
      var J: number;

      /**
       * The K key.
       */
      var K: number;

      /**
       * The L key.
       */
      var L: number;

      /**
       * The M key.
       */
      var M: number;

      /**
       * The N key.
       */
      var N: number;

      /**
       * The O key.
       */
      var O: number;

      /**
       * The P key.
       */
      var P: number;

      /**
       * The Q key.
       */
      var Q: number;

      /**
       * The R key.
       */
      var R: number;

      /**
       * The S key.
       */
      var S: number;

      /**
       * The T key.
       */
      var T: number;

      /**
       * The U key.
       */
      var U: number;

      /**
       * The V key.
       */
      var V: number;

      /**
       * The W key.
       */
      var W: number;

      /**
       * The X key.
       */
      var X: number;

      /**
       * The Y key.
       */
      var Y: number;

      /**
       * The Z key.
       */
      var Z: number;

      /**
       * The F1 key.
       */
      var F1: number;

      /**
       * The F2 key.
       */
      var F2: number;

      /**
       * The F3 key.
       */
      var F3: number;

      /**
       * The F4 key.
       */
      var F4: number;

      /**
       * The F5 key.
       */
      var F5: number;

      /**
       * The F6 key.
       */
      var F6: number;

      /**
       * The F7 key.
       */
      var F7: number;

      /**
       * The F8 key.
       */
      var F8: number;

      /**
       * The F9 key.
       */
      var F9: number;

      /**
       * The F10 key.
       */
      var F10: number;

      /**
       * The F11 key.
       */
      var F11: number;

      /**
       * The F12 key.
       */
      var F12: number;

      /**
       * The SEMICOLON key.
       */
      var SEMICOLON: number;

      /**
       * The PLUS key.
       */
      var PLUS: number;

      /**
       * The COMMA key.
       */
      var COMMA: number;

      /**
       * The MINUS key.
       */
      var MINUS: number;

      /**
       * The PERIOD key.
       */
      var PERIOD: number;

      /**
       * The FORWARD_SLASH key.
       */
      var FORWARD_SLASH: number;

      /**
       * The BACK_SLASH key.
       */
      var BACK_SLASH: number;

      /**
       * The QUOTES key.
       */
      var QUOTES: number;

      /**
       * The BACKTICK key.
       */
      var BACKTICK: number;

      /**
       * The OPEN_BRACKET key.
       */
      var OPEN_BRACKET: number;

      /**
       * The CLOSED_BRACKET key.
       */
      var CLOSED_BRACKET: number;

      /**
       * The SEMICOLON_FIREFOX key.
       */
      var SEMICOLON_FIREFOX: number;

      /**
       * The COLON key.
       */
      var COLON: number;

      /**
       * The COMMA_FIREFOX_WINDOWS key.
       */
      var COMMA_FIREFOX_WINDOWS: number;

      /**
       * The COMMA_FIREFOX key.
       */
      var COMMA_FIREFOX: number;

      /**
       * The BRACKET_RIGHT_FIREFOX key.
       */
      var BRACKET_RIGHT_FIREFOX: number;

      /**
       * The BRACKET_LEFT_FIREFOX key.
       */
      var BRACKET_LEFT_FIREFOX: number;

    }

    /**
     * Returns `true` if the Key was released within the `duration` value given, based on the current
     * game clock time. Or returns `false` if it either isn't up, or was released longer ago than the given duration.
     * @param key The Key object to test.
     * @param duration The duration, in ms, within which the key must have been released. Default 50.
     */
    function UpDuration(key: Phaser.Input.Keyboard.Key, duration?: number): boolean;

  }

  namespace Mouse {
    /**
     * The Mouse Manager is a helper class that belongs to the Input Manager.
     *
     * Its role is to listen for native DOM Mouse Events and then pass them onto the Input Manager for further processing.
     *
     * You do not need to create this class directly, the Input Manager will create an instance of it automatically.
     */
    class MouseManager {
      /**
       *
       * @param inputManager A reference to the Input Manager.
       */
      constructor(inputManager: Phaser.Input.InputManager);

      /**
       * A reference to the Input Manager.
       */
      manager: Phaser.Input.InputManager;

      /**
       * If `true` the DOM `mousedown` event will have `preventDefault` set.
       */
      preventDefaultDown: boolean;

      /**
       * If `true` the DOM `mouseup` event will have `preventDefault` set.
       */
      preventDefaultUp: boolean;

      /**
       * If `true` the DOM `mousemove` event will have `preventDefault` set.
       */
      preventDefaultMove: boolean;

      /**
       * If `true` the DOM `wheel` event will have `preventDefault` set.
       */
      preventDefaultWheel: boolean;

      /**
       * A boolean that controls if the Mouse Manager is enabled or not.
       * Can be toggled on the fly.
       */
      enabled: boolean;

      /**
       * The Mouse target, as defined in the Game Config.
       * Typically the canvas to which the game is rendering, but can be any interactive DOM element.
       */
      target: any;

      /**
       * If the mouse has been pointer locked successfully this will be set to true.
       */
      locked: boolean;

      /**
       * The Mouse Move Event handler.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onMouseMove: Function;

      /**
       * The Mouse Down Event handler.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onMouseDown: Function;

      /**
       * The Mouse Up Event handler.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onMouseUp: Function;

      /**
       * The Mouse Down Event handler specifically for events on the Window.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onMouseDownWindow: Function;

      /**
       * The Mouse Up Event handler specifically for events on the Window.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onMouseUpWindow: Function;

      /**
       * The Mouse Over Event handler.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onMouseOver: Function;

      /**
       * The Mouse Out Event handler.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onMouseOut: Function;

      /**
       * The Mouse Wheel Event handler.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      onMouseWheel: Function;

      /**
       * Internal pointerLockChange handler.
       * This function is sent the native DOM MouseEvent.
       * Initially empty and bound in the `startListeners` method.
       */
      pointerLockChange: Function;

      /**
       * Are the event listeners hooked into `window.top` or `window`?
       *
       * This is set during the `boot` sequence. If the browser does not have access to `window.top`,
       * such as in cross-origin iframe environments, this property gets set to `false` and the events
       * are hooked into `window` instead.
       */
      readonly isTop: boolean;

      /**
       * Attempts to disable the context menu from appearing if you right-click on the browser.
       *
       * Works by listening for the `contextmenu` event and prevent defaulting it.
       *
       * Use this if you need to enable right-button mouse support in your game, and the browser
       * menu keeps getting in the way.
       */
      disableContextMenu(): this;

      /**
       * If the browser supports it, you can request that the pointer be locked to the browser window.
       *
       * This is classically known as 'FPS controls', where the pointer can't leave the browser until
       * the user presses an exit key.
       *
       * If the browser successfully enters a locked state, a `POINTER_LOCK_CHANGE_EVENT` will be dispatched,
       * from the games Input Manager, with an `isPointerLocked` property.
       *
       * It is important to note that pointer lock can only be enabled after an 'engagement gesture',
       * see: https://w3c.github.io/pointerlock/#dfn-engagement-gesture.
       *
       * Note for Firefox: There is a bug in certain Firefox releases that cause native DOM events like
       * `mousemove` to fire continuously when in pointer lock mode. You can get around this by setting
       * `this.preventDefaultMove` to `false` in this class. You may also need to do the same for
       * `preventDefaultDown` and/or `preventDefaultUp`. Please test combinations of these if you encounter
       * the error.
       */
      requestPointerLock(): void;

      /**
       * If the browser supports pointer lock, this will request that the pointer lock is released. If
       * the browser successfully enters a locked state, a 'POINTER_LOCK_CHANGE_EVENT' will be
       * dispatched - from the game's input manager - with an `isPointerLocked` property.
       */
      releasePointerLock(): void;

      /**
       * Starts the Mouse Event listeners running.
       * This is called automatically and does not need to be manually invoked.
       */
      startListeners(): void;

      /**
       * Stops the Mouse Event listeners.
       * This is called automatically and does not need to be manually invoked.
       */
      stopListeners(): void;

      /**
       * Destroys this Mouse Manager instance.
       */
      destroy(): void;

    }

  }

  /**
   * A Pointer object encapsulates both mouse and touch input within Phaser.
   *
   * By default, Phaser will create 2 pointers for your game to use. If you require more, i.e. for a multi-touch
   * game, then use the `InputPlugin.addPointer` method to do so, rather than instantiating this class directly,
   * otherwise it won't be managed by the input system.
   *
   * You can reference the current active pointer via `InputPlugin.activePointer`. You can also use the properties
   * `InputPlugin.pointer1` through to `pointer10`, for each pointer you have enabled in your game.
   *
   * The properties of this object are set by the Input Plugin during processing. This object is then sent in all
   * input related events that the Input Plugin emits, so you can reference properties from it directly in your
   * callbacks.
   */
  class Pointer {
    /**
     *
     * @param manager A reference to the Input Manager.
     * @param id The internal ID of this Pointer.
     */
    constructor(manager: Phaser.Input.InputManager, id: number);

    /**
     * A reference to the Input Manager.
     */
    manager: Phaser.Input.InputManager;

    /**
     * The internal ID of this Pointer.
     */
    readonly id: number;

    /**
     * The most recent native DOM Event this Pointer has processed.
     */
    event: TouchEvent | MouseEvent | WheelEvent;

    /**
     * The DOM element the Pointer was pressed down on, taken from the DOM event.
     * In a default set-up this will be the Canvas that Phaser is rendering to, or the Window element.
     */
    readonly downElement: any;

    /**
     * The DOM element the Pointer was released on, taken from the DOM event.
     * In a default set-up this will be the Canvas that Phaser is rendering to, or the Window element.
     */
    readonly upElement: any;

    /**
     * The camera the Pointer interacted with during its last update.
     *
     * A Pointer can only ever interact with one camera at once, which will be the top-most camera
     * in the list should multiple cameras be positioned on-top of each other.
     */
    camera: Phaser.Cameras.Scene2D.Camera;

    /**
     * A read-only property that indicates which button was pressed, or released, on the pointer
     * during the most recent event. It is only set during `up` and `down` events.
     *
     * On Touch devices the value is always 0.
     *
     * Users may change the configuration of buttons on their pointing device so that if an event's button property
     * is zero, it may not have been caused by the button that is physically left–most on the pointing device;
     * however, it should behave as if the left button was clicked in the standard button layout.
     */
    readonly button: number;

    /**
     * 0: No button or un-initialized
     * 1: Left button
     * 2: Right button
     * 4: Wheel button or middle button
     * 8: 4th button (typically the "Browser Back" button)
     * 16: 5th button (typically the "Browser Forward" button)
     *
     * For a mouse configured for left-handed use, the button actions are reversed.
     * In this case, the values are read from right to left.
     */
    buttons: number;

    /**
     * The position of the Pointer in screen space.
     */
    readonly position: Phaser.Math.Vector2;

    /**
     * The previous position of the Pointer in screen space.
     *
     * The old x and y values are stored in here during the InputManager.transformPointer call.
     *
     * Use the properties `velocity`, `angle` and `distance` to create your own gesture recognition.
     */
    readonly prevPosition: Phaser.Math.Vector2;

    /**
     * The current velocity of the Pointer, based on its current and previous positions.
     *
     * This value is smoothed out each frame, according to the `motionFactor` property.
     *
     * This property is updated whenever the Pointer moves, regardless of any button states. In other words,
     * it changes based on movement alone - a button doesn't have to be pressed first.
     */
    readonly velocity: Phaser.Math.Vector2;

    /**
     * The current angle the Pointer is moving, in radians, based on its previous and current position.
     *
     * The angle is based on the old position facing to the current position.
     *
     * This property is updated whenever the Pointer moves, regardless of any button states. In other words,
     * it changes based on movement alone - a button doesn't have to be pressed first.
     */
    readonly angle: number;

    /**
     * The distance the Pointer has moved, based on its previous and current position.
     *
     * This value is smoothed out each frame, according to the `motionFactor` property.
     *
     * This property is updated whenever the Pointer moves, regardless of any button states. In other words,
     * it changes based on movement alone - a button doesn't have to be pressed first.
     *
     * If you need the total distance travelled since the primary buttons was pressed down,
     * then use the `Pointer.getDistance` method.
     */
    readonly distance: number;

    /**
     * The smoothing factor to apply to the Pointer position.
     *
     * Due to their nature, pointer positions are inherently noisy. While this is fine for lots of games, if you need cleaner positions
     * then you can set this value to apply an automatic smoothing to the positions as they are recorded.
     *
     * The default value of zero means 'no smoothing'.
     * Set to a small value, such as 0.2, to apply an average level of smoothing between positions. You can do this by changing this
     * value directly, or by setting the `input.smoothFactor` property in the Game Config.
     *
     * Positions are only smoothed when the pointer moves. If the primary button on this Pointer enters an Up or Down state, then the position
     * is always precise, and not smoothed.
     */
    smoothFactor: number;

    /**
     * The factor applied to the motion smoothing each frame.
     *
     * This value is passed to the Smooth Step Interpolation that is used to calculate the velocity,
     * angle and distance of the Pointer. It's applied every frame, until the midPoint reaches the current
     * position of the Pointer. 0.2 provides a good average but can be increased if you need a
     * quicker update and are working in a high performance environment. Never set this value to
     * zero.
     */
    motionFactor: number;

    /**
     * The x position of this Pointer, translated into the coordinate space of the most recent Camera it interacted with.
     *
     * If you wish to use this value _outside_ of an input event handler then you should update it first by calling
     * the `Pointer.updateWorldPoint` method.
     */
    worldX: number;

    /**
     * The y position of this Pointer, translated into the coordinate space of the most recent Camera it interacted with.
     *
     * If you wish to use this value _outside_ of an input event handler then you should update it first by calling
     * the `Pointer.updateWorldPoint` method.
     */
    worldY: number;

    /**
     * Time when this Pointer was most recently moved (regardless of the state of its buttons, if any)
     */
    moveTime: number;

    /**
     * X coordinate of the Pointer when Button 1 (left button), or Touch, was pressed, used for dragging objects.
     */
    downX: number;

    /**
     * Y coordinate of the Pointer when Button 1 (left button), or Touch, was pressed, used for dragging objects.
     */
    downY: number;

    /**
     * The Event timestamp when the first button, or Touch input, was pressed. Used for dragging objects.
     */
    downTime: number;

    /**
     * X coordinate of the Pointer when Button 1 (left button), or Touch, was released, used for dragging objects.
     */
    upX: number;

    /**
     * Y coordinate of the Pointer when Button 1 (left button), or Touch, was released, used for dragging objects.
     */
    upY: number;

    /**
     * The Event timestamp when the final button, or Touch input, was released. Used for dragging objects.
     */
    upTime: number;

    /**
     * Is the primary button down? (usually button 0, the left mouse button)
     */
    primaryDown: boolean;

    /**
     * Is _any_ button on this pointer considered as being down?
     */
    isDown: boolean;

    /**
     * Did the previous input event come from a Touch input (true) or Mouse? (false)
     */
    wasTouch: boolean;

    /**
     * Did this Pointer get canceled by a touchcancel event?
     *
     * Note: "canceled" is the American-English spelling of "cancelled". Please don't submit PRs correcting it!
     */
    wasCanceled: boolean;

    /**
     * If the mouse is locked, the horizontal relative movement of the Pointer in pixels since last frame.
     */
    movementX: number;

    /**
     * If the mouse is locked, the vertical relative movement of the Pointer in pixels since last frame.
     */
    movementY: number;

    /**
     * The identifier property of the Pointer as set by the DOM event when this Pointer is started.
     */
    identifier: number;

    /**
     * The pointerId property of the Pointer as set by the DOM event when this Pointer is started.
     * The browser can and will recycle this value.
     */
    pointerId: number;

    /**
     * An active Pointer is one that is currently pressed down on the display.
     * A Mouse is always considered as active.
     */
    active: boolean;

    /**
     * Is this pointer Pointer Locked?
     *
     * Only a mouse pointer can be locked and it only becomes locked when requested via
     * the browsers Pointer Lock API.
     *
     * You can request this by calling the `this.input.mouse.requestPointerLock()` method from
     * a `pointerdown` or `pointerup` event handler.
     */
    readonly locked: boolean;

    /**
     * The horizontal scroll amount that occurred due to the user moving a mouse wheel or similar input device.
     */
    deltaX: number;

    /**
     * The vertical scroll amount that occurred due to the user moving a mouse wheel or similar input device.
     * This value will typically be less than 0 if the user scrolls up and greater than zero if scrolling down.
     */
    deltaY: number;

    /**
     * The z-axis scroll amount that occurred due to the user moving a mouse wheel or similar input device.
     */
    deltaZ: number;

    /**
     * Takes a Camera and updates this Pointer's `worldX` and `worldY` values so they are
     * the result of a translation through the given Camera.
     *
     * Note that the values will be automatically replaced the moment the Pointer is
     * updated by an input event, such as a mouse move, so should be used immediately.
     * @param camera The Camera which is being tested against.
     */
    updateWorldPoint(camera: Phaser.Cameras.Scene2D.Camera): this;

    /**
     * Takes a Camera and returns a Vector2 containing the translated position of this Pointer
     * within that Camera. This can be used to convert this Pointers position into camera space.
     * @param camera The Camera to use for the translation.
     * @param output A Vector2-like object in which to store the translated position.
     */
    positionToCamera(camera: Phaser.Cameras.Scene2D.Camera, output?: Phaser.Math.Vector2 | object): Phaser.Math.Vector2 | object;

    /**
     * Checks to see if any buttons are being held down on this Pointer.
     */
    noButtonDown(): boolean;

    /**
     * Checks to see if the left button is being held down on this Pointer.
     */
    leftButtonDown(): boolean;

    /**
     * Checks to see if the right button is being held down on this Pointer.
     */
    rightButtonDown(): boolean;

    /**
     * Checks to see if the middle button is being held down on this Pointer.
     */
    middleButtonDown(): boolean;

    /**
     * Checks to see if the back button is being held down on this Pointer.
     */
    backButtonDown(): boolean;

    /**
     * Checks to see if the forward button is being held down on this Pointer.
     */
    forwardButtonDown(): boolean;

    /**
     * Checks to see if the left button was just released on this Pointer.
     */
    leftButtonReleased(): boolean;

    /**
     * Checks to see if the right button was just released on this Pointer.
     */
    rightButtonReleased(): boolean;

    /**
     * Checks to see if the middle button was just released on this Pointer.
     */
    middleButtonReleased(): boolean;

    /**
     * Checks to see if the back button was just released on this Pointer.
     */
    backButtonReleased(): boolean;

    /**
     * Checks to see if the forward button was just released on this Pointer.
     */
    forwardButtonReleased(): boolean;

    /**
     * If the Pointer has a button pressed down at the time this method is called, it will return the
     * distance between the Pointer's `downX` and `downY` values and the current position.
     *
     * If no button is held down, it will return the last recorded distance, based on where
     * the Pointer was when the button was released.
     *
     * If you wish to get the distance being travelled currently, based on the velocity of the Pointer,
     * then see the `Pointer.distance` property.
     */
    getDistance(): number;

    /**
     * If the Pointer has a button pressed down at the time this method is called, it will return the
     * horizontal distance between the Pointer's `downX` and `downY` values and the current position.
     *
     * If no button is held down, it will return the last recorded horizontal distance, based on where
     * the Pointer was when the button was released.
     */
    getDistanceX(): number;

    /**
     * If the Pointer has a button pressed down at the time this method is called, it will return the
     * vertical distance between the Pointer's `downX` and `downY` values and the current position.
     *
     * If no button is held down, it will return the last recorded vertical distance, based on where
     * the Pointer was when the button was released.
     */
    getDistanceY(): number;

    /**
     * If the Pointer has a button pressed down at the time this method is called, it will return the
     * duration since the button was pressed down.
     *
     * If no button is held down, it will return the last recorded duration, based on the time
     * the last button on the Pointer was released.
     */
    getDuration(): number;

    /**
     * If the Pointer has a button pressed down at the time this method is called, it will return the
     * angle between the Pointer's `downX` and `downY` values and the current position.
     *
     * If no button is held down, it will return the last recorded angle, based on where
     * the Pointer was when the button was released.
     *
     * The angle is based on the old position facing to the current position.
     *
     * If you wish to get the current angle, based on the velocity of the Pointer, then
     * see the `Pointer.angle` property.
     */
    getAngle(): number;

    /**
     * Takes the previous and current Pointer positions and then generates an array of interpolated values between
     * the two. The array will be populated up to the size of the `steps` argument.
     *
     * ```javaScript
     * var points = pointer.getInterpolatedPosition(4);
     *
     * // points[0] = { x: 0, y: 0 }
     * // points[1] = { x: 2, y: 1 }
     * // points[2] = { x: 3, y: 2 }
     * // points[3] = { x: 6, y: 3 }
     * ```
     *
     * Use this if you need to get smoothed values between the previous and current pointer positions. DOM pointer
     * events can often fire faster than the main browser loop, and this will help you avoid janky movement
     * especially if you have an object following a Pointer.
     *
     * Note that if you provide an output array it will only be populated up to the number of steps provided.
     * It will not clear any previous data that may have existed beyond the range of the steps count.
     *
     * Internally it uses the Smooth Step interpolation calculation.
     * @param steps The number of interpolation steps to use. Default 10.
     * @param out An array to store the results in. If not provided a new one will be created.
     */
    getInterpolatedPosition(steps?: number, out?: any[]): any[];

    /**
     * Destroys this Pointer instance and resets its external references.
     */
    destroy(): void;

    /**
     * The x position of this Pointer.
     * The value is in screen space.
     * See `worldX` to get a camera converted position.
     */
    x: number;

    /**
     * The y position of this Pointer.
     * The value is in screen space.
     * See `worldY` to get a camera converted position.
     */
    y: number;

    /**
     * Time when this Pointer was most recently updated by a DOM Event.
     * This comes directly from the `event.timeStamp` property.
     * If no event has yet taken place, it will return zero.
     */
    readonly time: number;

  }

  namespace Touch {
    /**
     * The Touch Manager is a helper class that belongs to the Input Manager.
     *
     * Its role is to listen for native DOM Touch Events and then pass them onto the Input Manager for further processing.
     *
     * You do not need to create this class directly, the Input Manager will create an instance of it automatically.
     */
    class TouchManager {
      /**
       *
       * @param inputManager A reference to the Input Manager.
       */
      constructor(inputManager: Phaser.Input.InputManager);

      /**
       * A reference to the Input Manager.
       */
      manager: Phaser.Input.InputManager;

      /**
       * If true the DOM events will have event.preventDefault applied to them, if false they will propagate fully.
       */
      capture: boolean;

      /**
       * A boolean that controls if the Touch Manager is enabled or not.
       * Can be toggled on the fly.
       */
      enabled: boolean;

      /**
       * The Touch Event target, as defined in the Game Config.
       * Typically the canvas to which the game is rendering, but can be any interactive DOM element.
       */
      target: any;

      /**
       * The Touch Start event handler function.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchStart: Function;

      /**
       * The Touch Start event handler function specifically for events on the Window.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchStartWindow: Function;

      /**
       * The Touch Move event handler function.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchMove: Function;

      /**
       * The Touch End event handler function.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchEnd: Function;

      /**
       * The Touch End event handler function specifically for events on the Window.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchEndWindow: Function;

      /**
       * The Touch Cancel event handler function.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchCancel: Function;

      /**
       * The Touch Cancel event handler function specifically for events on the Window.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchCancelWindow: Function;

      /**
       * The Touch Over event handler function.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchOver: Function;

      /**
       * The Touch Out event handler function.
       * Initially empty and bound in the `startListeners` method.
       */
      onTouchOut: Function;

      /**
       * Attempts to disable the context menu from appearing if you touch-hold on the browser.
       *
       * Works by listening for the `contextmenu` event and prevent defaulting it.
       *
       * Use this if you need to disable the OS context menu on mobile.
       */
      disableContextMenu(): this;

      /**
       * Starts the Touch Event listeners running as long as an input target is set.
       *
       * This method is called automatically if Touch Input is enabled in the game config,
       * which it is by default. However, you can call it manually should you need to
       * delay input capturing until later in the game.
       */
      startListeners(): void;

      /**
       * Stops the Touch Event listeners.
       * This is called automatically and does not need to be manually invoked.
       */
      stopListeners(): void;

      /**
       * Destroys this Touch Manager instance.
       */
      destroy(): void;

    }

  }

}