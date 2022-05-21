namespace Phaser.Structs {
  namespace Events {
    /**
     * The Process Queue Add Event.
     *
     * This event is dispatched by a Process Queue when a new item is successfully moved to its active list.
     *
     * You will most commonly see this used by a Scene's Update List when a new Game Object has been added.
     *
     * In that instance, listen to this event from within a Scene using: `this.sys.updateList.on('add', listener)`.
     */
    const PROCESS_QUEUE_ADD: any;

    /**
     * The Process Queue Remove Event.
     *
     * This event is dispatched by a Process Queue when a new item is successfully removed from its active list.
     *
     * You will most commonly see this used by a Scene's Update List when a Game Object has been removed.
     *
     * In that instance, listen to this event from within a Scene using: `this.sys.updateList.on('remove', listener)`.
     */
    const PROCESS_QUEUE_REMOVE: any;

  }

  /**
   * List is a generic implementation of an ordered list which contains utility methods for retrieving, manipulating, and iterating items.
   */
  class List<T> {
    /**
     *
     * @param parent The parent of this list.
     */
    constructor(parent: any);

    /**
     * The parent of this list.
     */
    parent: any;

    /**
     * The objects that belong to this collection.
     */
    list: T[];

    /**
     * The index of the current element.
     *
     * This is used internally when iterating through the list with the {@link #first}, {@link #last}, {@link #get}, and {@link #previous} properties.
     */
    position: number;

    /**
     * A callback that is invoked every time a child is added to this list.
     */
    addCallback: Function;

    /**
     * A callback that is invoked every time a child is removed from this list.
     */
    removeCallback: Function;

    /**
     * The property key to sort by.
     */
    _sortKey: string;

    /**
     * Adds the given item to the end of the list. Each item must be unique.
     * @param child The item, or array of items, to add to the list.
     * @param skipCallback Skip calling the List.addCallback if this child is added successfully. Default false.
     */
    add(child: T, skipCallback?: boolean): T;

    /**
     * Adds an item to list, starting at a specified index. Each item must be unique within the list.
     * @param child The item, or array of items, to add to the list.
     * @param index The index in the list at which the element(s) will be inserted. Default 0.
     * @param skipCallback Skip calling the List.addCallback if this child is added successfully. Default false.
     */
    addAt(child: T, index?: number, skipCallback?: boolean): T;

    /**
     * Retrieves the item at a given position inside the List.
     * @param index The index of the item.
     */
    getAt(index: number): T;

    /**
     * Locates an item within the List and returns its index.
     * @param child The item to locate.
     */
    getIndex(child: T): number;

    /**
     * Sort the contents of this List so the items are in order based on the given property.
     * For example, `sort('alpha')` would sort the List contents based on the value of their `alpha` property.
     * @param property The property to lexically sort by.
     * @param handler Provide your own custom handler function. Will receive 2 children which it should compare and return a boolean.
     */
    sort(property: string, handler?: Function): T[];

    /**
     * Searches for the first instance of a child with its `name`
     * property matching the given argument. Should more than one child have
     * the same name only the first is returned.
     * @param name The name to search for.
     */
    getByName(name: string): T | null;

    /**
     * Returns a random child from the group.
     * @param startIndex Offset from the front of the group (lowest child). Default 0.
     * @param length Restriction on the number of values you want to randomly select from. Default (to top).
     */
    getRandom(startIndex?: number, length?: number): T | null;

    /**
     * Returns the first element in a given part of the List which matches a specific criterion.
     * @param property The name of the property to test or a falsey value to have no criterion.
     * @param value The value to test the `property` against, or `undefined` to allow any value and only check for existence.
     * @param startIndex The position in the List to start the search at. Default 0.
     * @param endIndex The position in the List to optionally stop the search at. It won't be checked.
     */
    getFirst(property: string, value: any, startIndex?: number, endIndex?: number): T | null;

    /**
     * Returns all children in this List.
     *
     * You can optionally specify a matching criteria using the `property` and `value` arguments.
     *
     * For example: `getAll('parent')` would return only children that have a property called `parent`.
     *
     * You can also specify a value to compare the property to:
     *
     * `getAll('visible', true)` would return only children that have their visible property set to `true`.
     *
     * Optionally you can specify a start and end index. For example if this List had 100 children,
     * and you set `startIndex` to 0 and `endIndex` to 50, it would return matches from only
     * the first 50 children in the List.
     * @param property An optional property to test against the value argument.
     * @param value If property is set then Child.property must strictly equal this value to be included in the results.
     * @param startIndex The first child index to start the search from.
     * @param endIndex The last child index to search up until.
     */
    getAll(property?: string, value?: T, startIndex?: number, endIndex?: number): T[];

    /**
     * Returns the total number of items in the List which have a property matching the given value.
     * @param property The property to test on each item.
     * @param value The value to test the property against.
     */
    count(property: string, value: T): number;

    /**
     * Swaps the positions of two items in the list.
     * @param child1 The first item to swap.
     * @param child2 The second item to swap.
     */
    swap(child1: T, child2: T): void;

    /**
     * Moves an item in the List to a new position.
     * @param child The item to move.
     * @param index Moves an item in the List to a new position.
     */
    moveTo(child: T, index: number): T;

    /**
     * Moves the given array element above another one in the array.
     * @param child1 The element to move above base element.
     * @param child2 The base element.
     */
    moveAbove(child1: T, child2: T): void;

    /**
     * Moves the given array element below another one in the array.
     * @param child1 The element to move below base element.
     * @param child2 The base element.
     */
    moveBelow(child1: T, child2: T): void;

    /**
     * Removes one or many items from the List.
     * @param child The item, or array of items, to remove.
     * @param skipCallback Skip calling the List.removeCallback. Default false.
     */
    remove(child: T, skipCallback?: boolean): T;

    /**
     * Removes the item at the given position in the List.
     * @param index The position to remove the item from.
     * @param skipCallback Skip calling the List.removeCallback. Default false.
     */
    removeAt(index: number, skipCallback?: boolean): T;

    /**
     * Removes the items within the given range in the List.
     * @param startIndex The index to start removing from. Default 0.
     * @param endIndex The position to stop removing at. The item at this position won't be removed.
     * @param skipCallback Skip calling the List.removeCallback. Default false.
     */
    removeBetween(startIndex?: number, endIndex?: number, skipCallback?: boolean): T[];

    /**
     * Removes all the items.
     * @param skipCallback Skip calling the List.removeCallback. Default false.
     */
    removeAll(skipCallback?: boolean): Phaser.Structs.List<T>;

    /**
     * Brings the given child to the top of this List.
     * @param child The item to bring to the top of the List.
     */
    bringToTop(child: T): T;

    /**
     * Sends the given child to the bottom of this List.
     * @param child The item to send to the back of the list.
     */
    sendToBack(child: T): T;

    /**
     * Moves the given child up one place in this group unless it's already at the top.
     * @param child The item to move up.
     */
    moveUp(child: T): T;

    /**
     * Moves the given child down one place in this group unless it's already at the bottom.
     * @param child The item to move down.
     */
    moveDown(child: T): T;

    /**
     * Reverses the order of all children in this List.
     */
    reverse(): Phaser.Structs.List<T>;

    /**
     * Shuffles the items in the list.
     */
    shuffle(): Phaser.Structs.List<T>;

    /**
     * Replaces a child of this List with the given newChild. The newChild cannot be a member of this List.
     * @param oldChild The child in this List that will be replaced.
     * @param newChild The child to be inserted into this List.
     */
    replace(oldChild: T, newChild: T): T;

    /**
     * Checks if an item exists within the List.
     * @param child The item to check for the existence of.
     */
    exists(child: T): boolean;

    /**
     * Sets the property `key` to the given value on all members of this List.
     * @param property The name of the property to set.
     * @param value The value to set the property to.
     * @param startIndex The first child index to start the search from.
     * @param endIndex The last child index to search up until.
     */
    setAll(property: string, value: T, startIndex?: number, endIndex?: number): void;

    /**
     * Passes all children to the given callback.
     * @param callback The function to call.
     * @param context Value to use as `this` when executing callback.
     * @param args Additional arguments that will be passed to the callback, after the child.
     */
    each(callback: EachListCallback<T>, context?: any, ...args: any[]): void;

    /**
     * Clears the List and recreates its internal array.
     */
    shutdown(): void;

    /**
     * Destroys this List.
     */
    destroy(): void;

    /**
     * The number of items inside the List.
     */
    readonly length: number;

    /**
     * The first item in the List or `null` for an empty List.
     */
    readonly first: T;

    /**
     * The last item in the List, or `null` for an empty List.
     */
    readonly last: T;

    /**
     * The next item in the List, or `null` if the entire List has been traversed.
     *
     * This property can be read successively after reading {@link #first} or manually setting the {@link #position} to iterate the List.
     */
    readonly next: T;

    /**
     * The previous item in the List, or `null` if the entire List has been traversed.
     *
     * This property can be read successively after reading {@link #last} or manually setting the {@link #position} to iterate the List backwards.
     */
    readonly previous: T;

  }

  /**
   * The keys of a Map can be arbitrary values.
   *
   * ```javascript
   * var map = new Map([
   *    [ 1, 'one' ],
   *    [ 2, 'two' ],
   *    [ 3, 'three' ]
   * ]);
   * ```
   */
  class Map<K, V> {
    /**
     *
     * @param elements An optional array of key-value pairs to populate this Map with.
     */
    constructor(elements: V[]);

    /**
     * The entries in this Map.
     */
    entries: {[key: string]:  V};

    /**
     * The number of key / value pairs in this Map.
     */
    size: number;

    /**
     * Adds an element with a specified `key` and `value` to this Map.
     * If the `key` already exists, the value will be replaced.
     * @param key The key of the element to be added to this Map.
     * @param value The value of the element to be added to this Map.
     */
    set(key: K, value: V): Phaser.Structs.Map<K, V>;

    /**
     * Returns the value associated to the `key`, or `undefined` if there is none.
     * @param key The key of the element to return from the `Map` object.
     */
    get(key: K): V;

    /**
     * Returns an `Array` of all the values stored in this Map.
     */
    getArray(): V[];

    /**
     * Returns a boolean indicating whether an element with the specified key exists or not.
     * @param key The key of the element to test for presence of in this Map.
     */
    has(key: K): boolean;

    /**
     * Delete the specified element from this Map.
     * @param key The key of the element to delete from this Map.
     */
    delete(key: K): Phaser.Structs.Map<K, V>;

    /**
     * Delete all entries from this Map.
     */
    clear(): Phaser.Structs.Map<K, V>;

    /**
     * Returns all entries keys in this Map.
     */
    keys(): K[];

    /**
     * Returns an `Array` of all entries.
     */
    values(): V[];

    /**
     * Dumps the contents of this Map to the console via `console.group`.
     */
    dump(): void;

    /**
     * Iterates through all entries in this Map, passing each one to the given callback.
     *
     * If the callback returns `false`, the iteration will break.
     * @param callback The callback which will receive the keys and entries held in this Map.
     */
    each(callback: EachMapCallback<V>): Phaser.Structs.Map<K, V>;

    /**
     * Returns `true` if the value exists within this Map. Otherwise, returns `false`.
     * @param value The value to search for.
     */
    contains(value: V): boolean;

    /**
     * Merges all new keys from the given Map into this one.
     * If it encounters a key that already exists it will be skipped unless override is set to `true`.
     * @param map The Map to merge in to this Map.
     * @param override Set to `true` to replace values in this Map with those from the source map, or `false` to skip them. Default false.
     */
    merge(map: Phaser.Structs.Map<K, V>, override?: boolean): Phaser.Structs.Map<K, V>;

  }

  /**
   * A Process Queue maintains three internal lists.
   *
   * The `pending` list is a selection of items which are due to be made 'active' in the next update.
   * The `active` list is a selection of items which are considered active and should be updated.
   * The `destroy` list is a selection of items that were active and are awaiting being destroyed in the next update.
   *
   * When new items are added to a Process Queue they are put in the pending list, rather than being added
   * immediately the active list. Equally, items that are removed are put into the destroy list, rather than
   * being destroyed immediately. This allows the Process Queue to carefully process each item at a specific, fixed
   * time, rather than at the time of the request from the API.
   */
  class ProcessQueue<T> extends Phaser.Events.EventEmitter {
    /**
     * If `true` only unique objects will be allowed in the queue.
     */
    checkQueue: boolean;

    /**
     * Adds a new item to the Process Queue.
     *
     * The item is added to the pending list and made active in the next update.
     * @param item The item to add to the queue.
     */
    add(item: T): Phaser.Structs.ProcessQueue<T>;

    /**
     * Removes an item from the Process Queue.
     *
     * The item is added to the pending destroy and fully removed in the next update.
     * @param item The item to be removed from the queue.
     */
    remove(item: T): Phaser.Structs.ProcessQueue<T>;

    /**
     * Removes all active items from this Process Queue.
     *
     * All the items are marked as 'pending destroy' and fully removed in the next update.
     */
    removeAll(): this;

    /**
     * Update this queue. First it will process any items awaiting destruction, and remove them.
     *
     * Then it will check to see if there are any items pending insertion, and move them to an
     * active state. Finally, it will return a list of active items for further processing.
     */
    update(): T[];

    /**
     * Returns the current list of active items.
     *
     * This method returns a reference to the active list array, not a copy of it.
     * Therefore, be careful to not modify this array outside of the ProcessQueue.
     */
    getActive(): T[];

    /**
     * The number of entries in the active list.
     */
    readonly length: number;

    /**
     * Immediately destroys this process queue, clearing all of its internal arrays and resetting the process totals.
     */
    destroy(): void;

  }

  /**
   * RBush is a high-performance JavaScript library for 2D spatial indexing of points and rectangles.
   * It's based on an optimized R-tree data structure with bulk insertion support.
   *
   * Spatial index is a special data structure for points and rectangles that allows you to perform queries like
   * "all items within this bounding box" very efficiently (e.g. hundreds of times faster than looping over all items).
   *
   * This version of RBush uses a fixed min/max accessor structure of `[ '.left', '.top', '.right', '.bottom' ]`.
   * This is to avoid the eval like function creation that the original library used, which caused CSP policy violations.
   *
   * rbush is forked from https://github.com/mourner/rbush by Vladimir Agafonkin
   */
  class RTree {
  }

  /**
   * A Set is a collection of unique elements.
   */
  class Set<T> {
    /**
     *
     * @param elements An optional array of elements to insert into this Set.
     */
    constructor(elements?: T[]);

    /**
     * The entries of this Set. Stored internally as an array.
     */
    entries: T[];

    /**
     * Inserts the provided value into this Set. If the value is already contained in this Set this method will have no effect.
     * @param value The value to insert into this Set.
     */
    set(value: T): Phaser.Structs.Set<T>;

    /**
     * Get an element of this Set which has a property of the specified name, if that property is equal to the specified value.
     * If no elements of this Set satisfy the condition then this method will return `null`.
     * @param property The property name to check on the elements of this Set.
     * @param value The value to check for.
     */
    get(property: string, value: T): T;

    /**
     * Returns an array containing all the values in this Set.
     */
    getArray(): T[];

    /**
     * Removes the given value from this Set if this Set contains that value.
     * @param value The value to remove from the Set.
     */
    delete(value: T): Phaser.Structs.Set<T>;

    /**
     * Dumps the contents of this Set to the console via `console.group`.
     */
    dump(): void;

    /**
     * Passes each value in this Set to the given callback.
     * Use this function when you know this Set will be modified during the iteration, otherwise use `iterate`.
     * @param callback The callback to be invoked and passed each value this Set contains.
     * @param callbackScope The scope of the callback.
     */
    each(callback: EachSetCallback<T>, callbackScope?: any): Phaser.Structs.Set<T>;

    /**
     * Passes each value in this Set to the given callback.
     * For when you absolutely know this Set won't be modified during the iteration.
     * @param callback The callback to be invoked and passed each value this Set contains.
     * @param callbackScope The scope of the callback.
     */
    iterate(callback: EachSetCallback<T>, callbackScope?: any): Phaser.Structs.Set<T>;

    /**
     * Goes through each entry in this Set and invokes the given function on them, passing in the arguments.
     * @param callbackKey The key of the function to be invoked on each Set entry.
     * @param args Additional arguments that will be passed to the callback, after the child.
     */
    iterateLocal(callbackKey: string, ...args: any[]): Phaser.Structs.Set<T>;

    /**
     * Clears this Set so that it no longer contains any values.
     */
    clear(): Phaser.Structs.Set<T>;

    /**
     * Returns `true` if this Set contains the given value, otherwise returns `false`.
     * @param value The value to check for in this Set.
     */
    contains(value: T): boolean;

    /**
     * Returns a new Set containing all values that are either in this Set or in the Set provided as an argument.
     * @param set The Set to perform the union with.
     */
    union(set: Phaser.Structs.Set<T>): Phaser.Structs.Set<T>;

    /**
     * Returns a new Set that contains only the values which are in this Set and that are also in the given Set.
     * @param set The Set to intersect this set with.
     */
    intersect(set: Phaser.Structs.Set<T>): Phaser.Structs.Set<T>;

    /**
     * Returns a new Set containing all the values in this Set which are *not* also in the given Set.
     * @param set The Set to perform the difference with.
     */
    difference(set: Phaser.Structs.Set<T>): Phaser.Structs.Set<T>;

    /**
     * The size of this Set. This is the number of entries within it.
     * Changing the size will truncate the Set if the given value is smaller than the current size.
     * Increasing the size larger than the current size has no effect.
     */
    size: number;

  }

  /**
   * The Size component allows you to set `width` and `height` properties and define the relationship between them.
   *
   * The component can automatically maintain the aspect ratios between the two values, and clamp them
   * to a defined min-max range. You can also control the dominant axis. When dimensions are given to the Size component
   * that would cause it to exceed its min-max range, the dimensions are adjusted based on the dominant axis.
   */
  class Size {
    /**
     *
     * @param width The width of the Size component. Default 0.
     * @param height The height of the Size component. If not given, it will use the `width`. Default width.
     * @param aspectMode The aspect mode of the Size component. Defaults to 0, no mode. Default 0.
     * @param parent The parent of this Size component. Can be any object with public `width` and `height` properties. Dimensions are clamped to keep them within the parent bounds where possible. Default null.
     */
    constructor(width?: number, height?: number, aspectMode?: number, parent?: any);

    /**
     * The aspect mode this Size component will use when calculating its dimensions.
     * This property is read-only. To change it use the `setAspectMode` method.
     */
    readonly aspectMode: number;

    /**
     * The proportional relationship between the width and height.
     *
     * This property is read-only and is updated automatically when either the `width` or `height` properties are changed,
     * depending on the aspect mode.
     */
    readonly aspectRatio: number;

    /**
     * The minimum allowed width.
     * Cannot be less than zero.
     * This value is read-only. To change it see the `setMin` method.
     */
    readonly minWidth: number;

    /**
     * The minimum allowed height.
     * Cannot be less than zero.
     * This value is read-only. To change it see the `setMin` method.
     */
    readonly minHeight: number;

    /**
     * The maximum allowed width.
     * This value is read-only. To change it see the `setMax` method.
     */
    readonly maxWidth: number;

    /**
     * The maximum allowed height.
     * This value is read-only. To change it see the `setMax` method.
     */
    readonly maxHeight: number;

    /**
     * A Vector2 containing the horizontal and vertical snap values, which the width and height are snapped to during resizing.
     *
     * By default this is disabled.
     *
     * This property is read-only. To change it see the `setSnap` method.
     */
    readonly snapTo: Phaser.Math.Vector2;

    /**
     * Sets the aspect mode of this Size component.
     *
     * The aspect mode controls what happens when you modify the `width` or `height` properties, or call `setSize`.
     *
     * It can be a number from 0 to 4, or a Size constant:
     *
     * 0. NONE = Do not make the size fit the aspect ratio. Change the ratio when the size changes.
     * 1. WIDTH_CONTROLS_HEIGHT = The height is automatically adjusted based on the width.
     * 2. HEIGHT_CONTROLS_WIDTH = The width is automatically adjusted based on the height.
     * 3. FIT = The width and height are automatically adjusted to fit inside the given target area, while keeping the aspect ratio. Depending on the aspect ratio there may be some space inside the area which is not covered.
     * 4. ENVELOP = The width and height are automatically adjusted to make the size cover the entire target area while keeping the aspect ratio. This may extend further out than the target size.
     *
     * Calling this method automatically recalculates the `width` and the `height`, if required.
     * @param value The aspect mode value. Default 0.
     */
    setAspectMode(value?: number): this;

    /**
     * By setting a Snap To value when this Size component is modified its dimensions will automatically
     * by snapped to the nearest grid slice, using floor. For example, if you have snap value of 16,
     * and the width changes to 68, then it will snap down to 64 (the closest multiple of 16 when floored)
     *
     * Note that snapping takes place before adjustments by the parent, or the min / max settings. If these
     * values are not multiples of the given snap values, then this can result in un-snapped dimensions.
     *
     * Call this method with no arguments to reset the snap values.
     *
     * Calling this method automatically recalculates the `width` and the `height`, if required.
     * @param snapWidth The amount to snap the width to. If you don't want to snap the width, pass a value of zero. Default 0.
     * @param snapHeight The amount to snap the height to. If not provided it will use the `snapWidth` value. If you don't want to snap the height, pass a value of zero. Default snapWidth.
     */
    setSnap(snapWidth?: number, snapHeight?: number): this;

    /**
     * Sets, or clears, the parent of this Size component.
     *
     * To clear the parent call this method with no arguments.
     *
     * The parent influences the maximum extents to which this Size component can expand,
     * based on the aspect mode:
     *
     * NONE - The parent clamps both the width and height.
     * WIDTH_CONTROLS_HEIGHT - The parent clamps just the width.
     * HEIGHT_CONTROLS_WIDTH - The parent clamps just the height.
     * FIT - The parent clamps whichever axis is required to ensure the size fits within it.
     * ENVELOP - The parent is used to ensure the size fully envelops the parent.
     *
     * Calling this method automatically calls `setSize`.
     * @param parent Sets the parent of this Size component. Don't provide a value to clear an existing parent.
     */
    setParent(parent?: any): this;

    /**
     * Set the minimum width and height values this Size component will allow.
     *
     * The minimum values can never be below zero, or greater than the maximum values.
     *
     * Setting this will automatically adjust both the `width` and `height` properties to ensure they are within range.
     *
     * Note that based on the aspect mode, and if this Size component has a parent set or not, the minimums set here
     * _can_ be exceed in some situations.
     * @param width The minimum allowed width of the Size component. Default 0.
     * @param height The minimum allowed height of the Size component. If not given, it will use the `width`. Default width.
     */
    setMin(width?: number, height?: number): this;

    /**
     * Set the maximum width and height values this Size component will allow.
     *
     * Setting this will automatically adjust both the `width` and `height` properties to ensure they are within range.
     *
     * Note that based on the aspect mode, and if this Size component has a parent set or not, the maximums set here
     * _can_ be exceed in some situations.
     * @param width The maximum allowed width of the Size component. Default Number.MAX_VALUE.
     * @param height The maximum allowed height of the Size component. If not given, it will use the `width`. Default width.
     */
    setMax(width?: number, height?: number): this;

    /**
     * Sets the width and height of this Size component based on the aspect mode.
     *
     * If the aspect mode is 'none' then calling this method will change the aspect ratio, otherwise the current
     * aspect ratio is honored across all other modes.
     *
     * If snapTo values have been set then the given width and height are snapped first, prior to any further
     * adjustment via min/max values, or a parent.
     *
     * If minimum and/or maximum dimensions have been specified, the values given to this method will be clamped into
     * that range prior to adjustment, but may still exceed them depending on the aspect mode.
     *
     * If this Size component has a parent set, and the aspect mode is `fit` or `envelop`, then the given sizes will
     * be clamped to the range specified by the parent.
     * @param width The new width of the Size component. Default 0.
     * @param height The new height of the Size component. If not given, it will use the `width`. Default width.
     */
    setSize(width?: number, height?: number): this;

    /**
     * Sets a new aspect ratio, overriding what was there previously.
     *
     * It then calls `setSize` immediately using the current dimensions.
     * @param ratio The new aspect ratio.
     */
    setAspectRatio(ratio: number): this;

    /**
     * Sets a new width and height for this Size component and updates the aspect ratio based on them.
     *
     * It _doesn't_ change the `aspectMode` and still factors in size limits such as the min max and parent bounds.
     * @param width The new width of the Size component.
     * @param height The new height of the Size component. If not given, it will use the `width`. Default width.
     */
    resize(width: number, height?: number): this;

    /**
     * Takes a new width and passes it through the min/max clamp and then checks it doesn't exceed the parent width.
     * @param value The value to clamp and check.
     * @param checkParent Check the given value against the parent, if set. Default true.
     */
    getNewWidth(value: number, checkParent?: boolean): number;

    /**
     * Takes a new height and passes it through the min/max clamp and then checks it doesn't exceed the parent height.
     * @param value The value to clamp and check.
     * @param checkParent Check the given value against the parent, if set. Default true.
     */
    getNewHeight(value: number, checkParent?: boolean): number;

    /**
     * The current `width` and `height` are adjusted to fit inside the given dimensions, while keeping the aspect ratio.
     *
     * If `fit` is true there may be some space inside the target area which is not covered if its aspect ratio differs.
     * If `fit` is false the size may extend further out than the target area if the aspect ratios differ.
     *
     * If this Size component has a parent set, then the width and height passed to this method will be clamped so
     * it cannot exceed that of the parent.
     * @param width The new width of the Size component. Default 0.
     * @param height The new height of the Size component. If not given, it will use the width value.
     * @param fit Perform a `fit` (true) constraint, or an `envelop` (false) constraint. Default true.
     */
    constrain(width?: number, height?: number, fit?: boolean): this;

    /**
     * The current `width` and `height` are adjusted to fit inside the given dimensions, while keeping the aspect ratio.
     *
     * There may be some space inside the target area which is not covered if its aspect ratio differs.
     *
     * If this Size component has a parent set, then the width and height passed to this method will be clamped so
     * it cannot exceed that of the parent.
     * @param width The new width of the Size component. Default 0.
     * @param height The new height of the Size component. If not given, it will use the width value.
     */
    fitTo(width?: number, height?: number): this;

    /**
     * The current `width` and `height` are adjusted so that they fully envelope the given dimensions, while keeping the aspect ratio.
     *
     * The size may extend further out than the target area if the aspect ratios differ.
     *
     * If this Size component has a parent set, then the values are clamped so that it never exceeds the parent
     * on the longest axis.
     * @param width The new width of the Size component. Default 0.
     * @param height The new height of the Size component. If not given, it will use the width value.
     */
    envelop(width?: number, height?: number): this;

    /**
     * Sets the width of this Size component.
     *
     * Depending on the aspect mode, changing the width may also update the height and aspect ratio.
     * @param width The new width of the Size component.
     */
    setWidth(width: number): this;

    /**
     * Sets the height of this Size component.
     *
     * Depending on the aspect mode, changing the height may also update the width and aspect ratio.
     * @param height The new height of the Size component.
     */
    setHeight(height: number): this;

    /**
     * Returns a string representation of this Size component.
     */
    toString(): string;

    /**
     * Sets the values of this Size component to the `element.style.width` and `height`
     * properties of the given DOM Element. The properties are set as `px` values.
     * @param element The DOM Element to set the CSS style on.
     */
    setCSS(element: HTMLElement): void;

    /**
     * Copies the aspect mode, aspect ratio, width and height from this Size component
     * to the given Size component. Note that the parent, if set, is not copied across.
     * @param destination The Size component to copy the values to.
     */
    copy(destination: Phaser.Structs.Size): Phaser.Structs.Size;

    /**
     * Destroys this Size component.
     *
     * This clears the local properties and any parent object, if set.
     *
     * A destroyed Size component cannot be re-used.
     */
    destroy(): void;

    /**
     * The width of this Size component.
     *
     * This value is clamped to the range specified by `minWidth` and `maxWidth`, if enabled.
     *
     * A width can never be less than zero.
     *
     * Changing this value will automatically update the `height` if the aspect ratio lock is enabled.
     * You can also use the `setWidth` and `getWidth` methods.
     */
    width: number;

    /**
     * The height of this Size component.
     *
     * This value is clamped to the range specified by `minHeight` and `maxHeight`, if enabled.
     *
     * A height can never be less than zero.
     *
     * Changing this value will automatically update the `width` if the aspect ratio lock is enabled.
     * You can also use the `setHeight` and `getHeight` methods.
     */
    height: number;

    /**
     * Do not make the size fit the aspect ratio. Change the ratio when the size changes.
     */
    static readonly NONE: number;

    /**
     * The height is automatically adjusted based on the width.
     */
    static readonly WIDTH_CONTROLS_HEIGHT: number;

    /**
     * The width is automatically adjusted based on the height.
     */
    static readonly HEIGHT_CONTROLS_WIDTH: number;

    /**
     * The width and height are automatically adjusted to fit inside the given target area, while keeping the aspect ratio. Depending on the aspect ratio there may be some space inside the area which is not covered.
     */
    static readonly FIT: number;

    /**
     * The width and height are automatically adjusted to make the size cover the entire target area while keeping the aspect ratio. This may extend further out than the target size.
     */
    static readonly ENVELOP: number;

  }

}