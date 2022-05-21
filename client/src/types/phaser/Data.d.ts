namespace Phaser.Data {
  /**
   * The Data Manager Component features a means to store pieces of data specific to a Game Object, System or Plugin.
   * You can then search, query it, and retrieve the data. The parent must either extend EventEmitter,
   * or have a property called `events` that is an instance of it.
   */
  class DataManager {
    /**
     *
     * @param parent The object that this DataManager belongs to.
     * @param eventEmitter The DataManager's event emitter.
     */
    constructor(parent: object, eventEmitter?: Phaser.Events.EventEmitter);

    /**
     * The object that this DataManager belongs to.
     */
    parent: any;

    /**
     * The DataManager's event emitter.
     */
    events: Phaser.Events.EventEmitter;

    /**
     * The data list.
     */
    list: {[key: string]:  any};

    /**
     * The public values list. You can use this to access anything you have stored
     * in this Data Manager. For example, if you set a value called `gold` you can
     * access it via:
     *
     * ```javascript
     * this.data.values.gold;
     * ```
     *
     * You can also modify it directly:
     *
     * ```javascript
     * this.data.values.gold += 1000;
     * ```
     *
     * Doing so will emit a `setdata` event from the parent of this Data Manager.
     *
     * Do not modify this object directly. Adding properties directly to this object will not
     * emit any events. Always use `DataManager.set` to create new items the first time around.
     */
    values: {[key: string]:  any};

    /**
     * Retrieves the value for the given key, or undefined if it doesn't exist.
     *
     * You can also access values via the `values` object. For example, if you had a key called `gold` you can do either:
     *
     * ```javascript
     * this.data.get('gold');
     * ```
     *
     * Or access the value directly:
     *
     * ```javascript
     * this.data.values.gold;
     * ```
     *
     * You can also pass in an array of keys, in which case an array of values will be returned:
     *
     * ```javascript
     * this.data.get([ 'gold', 'armor', 'health' ]);
     * ```
     *
     * This approach is useful for destructuring arrays in ES6.
     * @param key The key of the value to retrieve, or an array of keys.
     */
    get(key: string | string[]): any;

    /**
     * Retrieves all data values in a new object.
     */
    getAll(): {[key: string]:  any};

    /**
     * Queries the DataManager for the values of keys matching the given regular expression.
     * @param search A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).
     */
    query(search: RegExp): {[key: string]:  any};

    /**
     * Sets a value for the given key. If the key doesn't already exist in the Data Manager then it is created.
     *
     * ```javascript
     * data.set('name', 'Red Gem Stone');
     * ```
     *
     * You can also pass in an object of key value pairs as the first argument:
     *
     * ```javascript
     * data.set({ name: 'Red Gem Stone', level: 2, owner: 'Link', gold: 50 });
     * ```
     *
     * To get a value back again you can call `get`:
     *
     * ```javascript
     * data.get('gold');
     * ```
     *
     * Or you can access the value directly via the `values` property, where it works like any other variable:
     *
     * ```javascript
     * data.values.gold += 50;
     * ```
     *
     * When the value is first set, a `setdata` event is emitted.
     *
     * If the key already exists, a `changedata` event is emitted instead, along an event named after the key.
     * For example, if you updated an existing key called `PlayerLives` then it would emit the event `changedata-PlayerLives`.
     * These events will be emitted regardless if you use this method to set the value, or the direct `values` setter.
     *
     * Please note that the data keys are case-sensitive and must be valid JavaScript Object property strings.
     * This means the keys `gold` and `Gold` are treated as two unique values within the Data Manager.
     * @param key The key to set the value for. Or an object or key value pairs. If an object the `data` argument is ignored.
     * @param data The value to set for the given key. If an object is provided as the key this argument is ignored.
     */
    set(key: string | object, data: any): this;

    /**
     * Increase a value for the given key. If the key doesn't already exist in the Data Manager then it is increased from 0.
     *
     * When the value is first set, a `setdata` event is emitted.
     * @param key The key to increase the value for.
     * @param data The value to increase for the given key.
     */
    inc(key: string | object, data?: any): Phaser.Data.DataManager;

    /**
     * Toggle a boolean value for the given key. If the key doesn't already exist in the Data Manager then it is toggled from false.
     *
     * When the value is first set, a `setdata` event is emitted.
     * @param key The key to toggle the value for.
     */
    toggle(key: string | object): Phaser.Data.DataManager;

    /**
     * Passes all data entries to the given callback.
     * @param callback The function to call.
     * @param context Value to use as `this` when executing callback.
     * @param args Additional arguments that will be passed to the callback, after the game object, key, and data.
     */
    each(callback: DataEachCallback, context?: any, ...args: any[]): this;

    /**
     * Merge the given object of key value pairs into this DataManager.
     *
     * Any newly created values will emit a `setdata` event. Any updated values (see the `overwrite` argument)
     * will emit a `changedata` event.
     * @param data The data to merge.
     * @param overwrite Whether to overwrite existing data. Defaults to true. Default true.
     */
    merge(data: {[key: string]:  any}, overwrite?: boolean): this;

    /**
     * Remove the value for the given key.
     *
     * If the key is found in this Data Manager it is removed from the internal lists and a
     * `removedata` event is emitted.
     *
     * You can also pass in an array of keys, in which case all keys in the array will be removed:
     *
     * ```javascript
     * this.data.remove([ 'gold', 'armor', 'health' ]);
     * ```
     * @param key The key to remove, or an array of keys to remove.
     */
    remove(key: string | string[]): this;

    /**
     * Retrieves the data associated with the given 'key', deletes it from this Data Manager, then returns it.
     * @param key The key of the value to retrieve and delete.
     */
    pop(key: string): any;

    /**
     * Determines whether the given key is set in this Data Manager.
     *
     * Please note that the keys are case-sensitive and must be valid JavaScript Object property strings.
     * This means the keys `gold` and `Gold` are treated as two unique values within the Data Manager.
     * @param key The key to check.
     */
    has(key: string): boolean;

    /**
     * Freeze or unfreeze this Data Manager. A frozen Data Manager will block all attempts
     * to create new values or update existing ones.
     * @param value Whether to freeze or unfreeze the Data Manager.
     */
    setFreeze(value: boolean): this;

    /**
     * Delete all data in this Data Manager and unfreeze it.
     */
    reset(): this;

    /**
     * Destroy this data manager.
     */
    destroy(): void;

    /**
     * Gets or sets the frozen state of this Data Manager.
     * A frozen Data Manager will block all attempts to create new values or update existing ones.
     */
    freeze: boolean;

    /**
     * Return the total number of entries in this Data Manager.
     */
    count: number;

  }

  /**
   * The Data Component features a means to store pieces of data specific to a Game Object, System or Plugin.
   * You can then search, query it, and retrieve the data. The parent must either extend EventEmitter,
   * or have a property called `events` that is an instance of it.
   */
  class DataManagerPlugin extends Phaser.Data.DataManager {
    /**
     *
     * @param scene A reference to the Scene that this DataManager belongs to.
     */
    constructor(scene: Phaser.Scene);

    /**
     * A reference to the Scene that this DataManager belongs to.
     */
    scene: Phaser.Scene;

    /**
     * A reference to the Scene's Systems.
     */
    systems: Phaser.Scenes.Systems;

    /**
     * The Scene that owns this plugin is being destroyed.
     * We need to shutdown and then kill off all external references.
     */
    destroy(): void;

  }

  namespace Events {
    /**
     * The Change Data Event.
     *
     * This event is dispatched by a Data Manager when an item in the data store is changed.
     *
     * Game Objects with data enabled have an instance of a Data Manager under the `data` property. So, to listen for
     * a change data event from a Game Object you would use: `sprite.data.on('changedata', listener)`.
     *
     * This event is dispatched for all items that change in the Data Manager.
     * To listen for the change of a specific item, use the `CHANGE_DATA_KEY_EVENT` event.
     */
    const CHANGE_DATA: any;

    /**
     * The Change Data Key Event.
     *
     * This event is dispatched by a Data Manager when an item in the data store is changed.
     *
     * Game Objects with data enabled have an instance of a Data Manager under the `data` property. So, to listen for
     * the change of a specific data item from a Game Object you would use: `sprite.data.on('changedata-key', listener)`,
     * where `key` is the unique string key of the data item. For example, if you have a data item stored called `gold`
     * then you can listen for `sprite.data.on('changedata-gold')`.
     */
    const CHANGE_DATA_KEY: any;

    /**
     * The Data Manager Destroy Event.
     *
     * The Data Manager will listen for the destroy event from its parent, and then close itself down.
     */
    const DESTROY: any;

    /**
     * The Remove Data Event.
     *
     * This event is dispatched by a Data Manager when an item is removed from it.
     *
     * Game Objects with data enabled have an instance of a Data Manager under the `data` property. So, to listen for
     * the removal of a data item on a Game Object you would use: `sprite.data.on('removedata', listener)`.
     */
    const REMOVE_DATA: any;

    /**
     * The Set Data Event.
     *
     * This event is dispatched by a Data Manager when a new item is added to the data store.
     *
     * Game Objects with data enabled have an instance of a Data Manager under the `data` property. So, to listen for
     * the addition of a new data item on a Game Object you would use: `sprite.data.on('setdata', listener)`.
     */
    const SET_DATA: any;

  }

}