namespace Phaser.Utils {
  namespace Array {
    /**
     * Adds the given item, or array of items, to the array.
     *
     * Each item must be unique within the array.
     *
     * The array is modified in-place and returned.
     *
     * You can optionally specify a limit to the maximum size of the array. If the quantity of items being
     * added will take the array length over this limit, it will stop adding once the limit is reached.
     *
     * You can optionally specify a callback to be invoked for each item successfully added to the array.
     * @param array The array to be added to.
     * @param item The item, or array of items, to add to the array. Each item must be unique within the array.
     * @param limit Optional limit which caps the size of the array.
     * @param callback A callback to be invoked for each item successfully added to the array.
     * @param context The context in which the callback is invoked.
     */
    function Add(array: any[], item: any | any[], limit?: number, callback?: Function, context?: object): any[];

    /**
     * Adds the given item, or array of items, to the array starting at the index specified.
     *
     * Each item must be unique within the array.
     *
     * Existing elements in the array are shifted up.
     *
     * The array is modified in-place and returned.
     *
     * You can optionally specify a limit to the maximum size of the array. If the quantity of items being
     * added will take the array length over this limit, it will stop adding once the limit is reached.
     *
     * You can optionally specify a callback to be invoked for each item successfully added to the array.
     * @param array The array to be added to.
     * @param item The item, or array of items, to add to the array.
     * @param index The index in the array where the item will be inserted. Default 0.
     * @param limit Optional limit which caps the size of the array.
     * @param callback A callback to be invoked for each item successfully added to the array.
     * @param context The context in which the callback is invoked.
     */
    function AddAt(array: any[], item: any | any[], index?: number, limit?: number, callback?: Function, context?: object): any[];

    /**
     * Moves the given element to the top of the array.
     * The array is modified in-place.
     * @param array The array.
     * @param item The element to move.
     */
    function BringToTop(array: any[], item: any): any;

    /**
     * Returns the total number of elements in the array which have a property matching the given value.
     * @param array The array to search.
     * @param property The property to test on each array element.
     * @param value The value to test the property against. Must pass a strict (`===`) comparison check.
     * @param startIndex An optional start index to search from.
     * @param endIndex An optional end index to search to.
     */
    function CountAllMatching(array: any[], property: string, value: any, startIndex?: number, endIndex?: number): number;

    /**
     * Passes each element in the array to the given callback.
     * @param array The array to search.
     * @param callback A callback to be invoked for each item in the array.
     * @param context The context in which the callback is invoked.
     * @param args Additional arguments that will be passed to the callback, after the current array item.
     */
    function Each(array: any[], callback: Function, context: object, ...args: any[]): any[];

    /**
     * Passes each element in the array, between the start and end indexes, to the given callback.
     * @param array The array to search.
     * @param callback A callback to be invoked for each item in the array.
     * @param context The context in which the callback is invoked.
     * @param startIndex The start index to search from.
     * @param endIndex The end index to search to.
     * @param args Additional arguments that will be passed to the callback, after the child.
     */
    function EachInRange(array: any[], callback: Function, context: object, startIndex: number, endIndex: number, ...args: any[]): any[];

    /**
     * Searches a pre-sorted array for the closet value to the given number.
     *
     * If the `key` argument is given it will assume the array contains objects that all have the required `key` property name,
     * and will check for the closest value of those to the given number.
     * @param value The value to search for in the array.
     * @param array The array to search, which must be sorted.
     * @param key An optional property key. If specified the array elements property will be checked against value.
     */
    function FindClosestInSorted(value: number, array: any[], key?: string): number | any;

    /**
     * Returns all elements in the array.
     *
     * You can optionally specify a matching criteria using the `property` and `value` arguments.
     *
     * For example: `getAll('visible', true)` would return only elements that have their visible property set.
     *
     * Optionally you can specify a start and end index. For example if the array had 100 elements,
     * and you set `startIndex` to 0 and `endIndex` to 50, it would return matches from only
     * the first 50 elements.
     * @param array The array to search.
     * @param property The property to test on each array element.
     * @param value The value to test the property against. Must pass a strict (`===`) comparison check.
     * @param startIndex An optional start index to search from.
     * @param endIndex An optional end index to search to.
     */
    function GetAll(array: any[], property?: string, value?: any, startIndex?: number, endIndex?: number): any[];

    /**
     * Returns the first element in the array.
     *
     * You can optionally specify a matching criteria using the `property` and `value` arguments.
     *
     * For example: `getAll('visible', true)` would return the first element that had its `visible` property set.
     *
     * Optionally you can specify a start and end index. For example if the array had 100 elements,
     * and you set `startIndex` to 0 and `endIndex` to 50, it would search only the first 50 elements.
     * @param array The array to search.
     * @param property The property to test on each array element.
     * @param value The value to test the property against. Must pass a strict (`===`) comparison check.
     * @param startIndex An optional start index to search from. Default 0.
     * @param endIndex An optional end index to search up to (but not included) Default array.length.
     */
    function GetFirst(array: any[], property?: string, value?: any, startIndex?: number, endIndex?: number): object;

    /**
     * Returns a Random element from the array.
     * @param array The array to select the random entry from.
     * @param startIndex An optional start index. Default 0.
     * @param length An optional length, the total number of elements (from the startIndex) to choose from. Default array.length.
     */
    function GetRandom(array: any[], startIndex?: number, length?: number): any;

    namespace Matrix {
      /**
       * Checks if an array can be used as a matrix.
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix The array to check.
       */
      function CheckMatrix<T>(matrix?: T[][]): boolean;

      /**
       * Generates a string (which you can pass to console.log) from the given Array Matrix.
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix A 2-dimensional array.
       */
      function MatrixToString<T>(matrix?: T[][]): string;

      /**
       * Reverses the columns in the given Array Matrix.
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix The array matrix to reverse the columns for.
       */
      function ReverseColumns<T>(matrix?: T[][]): T[][];

      /**
       * Reverses the rows in the given Array Matrix.
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix The array matrix to reverse the rows for.
       */
      function ReverseRows<T>(matrix?: T[][]): T[][];

      /**
       * Rotates the array matrix 180 degrees.
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix The array to rotate.
       */
      function Rotate180<T>(matrix?: T[][]): T[][];

      /**
       * Rotates the array matrix to the left (or 90 degrees)
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix The array to rotate.
       */
      function RotateLeft<T>(matrix?: T[][]): T[][];

      /**
       * Rotates the array matrix based on the given rotation value.
       *
       * The value can be given in degrees: 90, -90, 270, -270 or 180,
       * or a string command: `rotateLeft`, `rotateRight` or `rotate180`.
       *
       * Based on the routine from {@link http://jsfiddle.net/MrPolywhirl/NH42z/}.
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix The array to rotate.
       * @param direction The amount to rotate the matrix by. Default 90.
       */
      function RotateMatrix<T>(matrix?: T[][], direction?: number | string): T[][];

      /**
       * Rotates the array matrix to the left (or -90 degrees)
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix The array to rotate.
       */
      function RotateRight<T>(matrix?: T[][]): T[][];

      /**
       * Translates the given Array Matrix by shifting each column and row the
       * amount specified.
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param matrix The array matrix to translate.
       * @param x The amount to horizontally translate the matrix by. Default 0.
       * @param y The amount to vertically translate the matrix by. Default 0.
       */
      function Translate<T>(matrix?: T[][], x?: number, y?: number): T[][];

      /**
       * Transposes the elements of the given matrix (array of arrays).
       *
       * The transpose of a matrix is a new matrix whose rows are the columns of the original.
       *
       * A matrix is a two-dimensional array (array of arrays), where all sub-arrays (rows)
       * have the same length. There must be at least two rows. This is an example matrix:
       *
       * ```
       * [
       *    [ 1, 1, 1, 1, 1, 1 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 2, 0, 1, 2, 0, 4 ],
       *    [ 2, 0, 3, 4, 0, 4 ],
       *    [ 2, 0, 0, 0, 0, 4 ],
       *    [ 3, 3, 3, 3, 3, 3 ]
       * ]
       * ```
       * @param array The array matrix to transpose.
       */
      function TransposeMatrix<T>(array?: T[][]): T[][];

    }

    /**
     * Moves the given array element above another one in the array.
     * The array is modified in-place.
     * @param array The input array.
     * @param item1 The element to move above base element.
     * @param item2 The base element.
     */
    function MoveAbove(array: any[], item1: any, item2: any): any[];

    /**
     * Moves the given array element below another one in the array.
     * The array is modified in-place.
     * @param array The input array.
     * @param item1 The element to move below base element.
     * @param item2 The base element.
     */
    function MoveBelow(array: any[], item1: any, item2: any): any[];

    /**
     * Moves the given array element down one place in the array.
     * The array is modified in-place.
     * @param array The input array.
     * @param item The element to move down the array.
     */
    function MoveDown(array: any[], item: any): any[];

    /**
     * Moves an element in an array to a new position within the same array.
     * The array is modified in-place.
     * @param array The array.
     * @param item The element to move.
     * @param index The new index that the element will be moved to.
     */
    function MoveTo(array: any[], item: any, index: number): any;

    /**
     * Moves the given array element up one place in the array.
     * The array is modified in-place.
     * @param array The input array.
     * @param item The element to move up the array.
     */
    function MoveUp(array: any[], item: any): any[];

    /**
     * Create an array representing the range of numbers (usually integers), between, and inclusive of,
     * the given `start` and `end` arguments. For example:
     *
     * `var array = Phaser.Utils.Array.NumberArray(2, 4); // array = [2, 3, 4]`
     * `var array = Phaser.Utils.Array.NumberArray(0, 9); // array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`
     * `var array = Phaser.Utils.Array.NumberArray(8, 2); // array = [8, 7, 6, 5, 4, 3, 2]`
     *
     * This is equivalent to `Phaser.Utils.Array.NumberArrayStep(start, end, 1)`.
     *
     * You can optionally provide a prefix and / or suffix string. If given the array will contain
     * strings, not integers. For example:
     *
     * `var array = Phaser.Utils.Array.NumberArray(1, 4, 'Level '); // array = ["Level 1", "Level 2", "Level 3", "Level 4"]`
     * `var array = Phaser.Utils.Array.NumberArray(5, 7, 'HD-', '.png'); // array = ["HD-5.png", "HD-6.png", "HD-7.png"]`
     * @param start The minimum value the array starts with.
     * @param end The maximum value the array contains.
     * @param prefix Optional prefix to place before the number. If provided the array will contain strings, not integers.
     * @param suffix Optional suffix to place after the number. If provided the array will contain strings, not integers.
     */
    function NumberArray(start: number, end: number, prefix?: string, suffix?: string): number[] | string[];

    /**
     * Create an array of numbers (positive and/or negative) progressing from `start`
     * up to but not including `end` by advancing by `step`.
     *
     * If `start` is less than `end` a zero-length range is created unless a negative `step` is specified.
     *
     * Certain values for `start` and `end` (eg. NaN/undefined/null) are currently coerced to 0;
     * for forward compatibility make sure to pass in actual numbers.
     * @param start The start of the range. Default 0.
     * @param end The end of the range. Default null.
     * @param step The value to increment or decrement by. Default 1.
     */
    function NumberArrayStep(start?: number, end?: number, step?: number): number[];

    /**
     * A [Floyd-Rivest](https://en.wikipedia.org/wiki/Floyd%E2%80%93Rivest_algorithm) quick selection algorithm.
     *
     * Rearranges the array items so that all items in the [left, k] range are smaller than all items in [k, right];
     * The k-th element will have the (k - left + 1)th smallest value in [left, right].
     *
     * The array is modified in-place.
     *
     * Based on code by [Vladimir Agafonkin](https://www.npmjs.com/~mourner)
     * @param arr The array to sort.
     * @param k The k-th element index.
     * @param left The index of the left part of the range. Default 0.
     * @param right The index of the right part of the range.
     * @param compare An optional comparison function. Is passed two elements and should return 0, 1 or -1.
     */
    function QuickSelect(arr: any[], k: number, left?: number, right?: number, compare?: Function): void;

    /**
     * Creates an array populated with a range of values, based on the given arguments and configuration object.
     *
     * Range ([a,b,c], [1,2,3]) =
     * a1, a2, a3, b1, b2, b3, c1, c2, c3
     *
     * Range ([a,b], [1,2,3], qty = 3) =
     * a1, a1, a1, a2, a2, a2, a3, a3, a3, b1, b1, b1, b2, b2, b2, b3, b3, b3
     *
     * Range ([a,b,c], [1,2,3], repeat x1) =
     * a1, a2, a3, b1, b2, b3, c1, c2, c3, a1, a2, a3, b1, b2, b3, c1, c2, c3
     *
     * Range ([a,b], [1,2], repeat -1 = endless, max = 14) =
     * Maybe if max is set then repeat goes to -1 automatically?
     * a1, a2, b1, b2, a1, a2, b1, b2, a1, a2, b1, b2, a1, a2 (capped at 14 elements)
     *
     * Range ([a], [1,2,3,4,5], random = true) =
     * a4, a1, a5, a2, a3
     *
     * Range ([a, b], [1,2,3], random = true) =
     * b3, a2, a1, b1, a3, b2
     *
     * Range ([a, b, c], [1,2,3], randomB = true) =
     * a3, a1, a2, b2, b3, b1, c1, c3, c2
     *
     * Range ([a], [1,2,3,4,5], yoyo = true) =
     * a1, a2, a3, a4, a5, a5, a4, a3, a2, a1
     *
     * Range ([a, b], [1,2,3], yoyo = true) =
     * a1, a2, a3, b1, b2, b3, b3, b2, b1, a3, a2, a1
     * @param a The first array of range elements.
     * @param b The second array of range elements.
     * @param options A range configuration object. Can contain: repeat, random, randomB, yoyo, max, qty.
     */
    function Range(a: any[], b: any[], options?: object): any[];

    /**
     * Removes the given item, or array of items, from the array.
     *
     * The array is modified in-place.
     *
     * You can optionally specify a callback to be invoked for each item successfully removed from the array.
     * @param array The array to be modified.
     * @param item The item, or array of items, to be removed from the array.
     * @param callback A callback to be invoked for each item successfully removed from the array.
     * @param context The context in which the callback is invoked.
     */
    function Remove(array: any[], item: any | any[], callback?: Function, context?: object): any | any[];

    /**
     * Removes the item from the given position in the array.
     *
     * The array is modified in-place.
     *
     * You can optionally specify a callback to be invoked for the item if it is successfully removed from the array.
     * @param array The array to be modified.
     * @param index The array index to remove the item from. The index must be in bounds or it will throw an error.
     * @param callback A callback to be invoked for the item removed from the array.
     * @param context The context in which the callback is invoked.
     */
    function RemoveAt(array: any[], index: number, callback?: Function, context?: object): any;

    /**
     * Removes the item within the given range in the array.
     *
     * The array is modified in-place.
     *
     * You can optionally specify a callback to be invoked for the item/s successfully removed from the array.
     * @param array The array to be modified.
     * @param startIndex The start index to remove from.
     * @param endIndex The end index to remove to.
     * @param callback A callback to be invoked for the item removed from the array.
     * @param context The context in which the callback is invoked.
     */
    function RemoveBetween(array: any[], startIndex: number, endIndex: number, callback?: Function, context?: object): any[];

    /**
     * Removes a random object from the given array and returns it.
     * Will return null if there are no array items that fall within the specified range or if there is no item for the randomly chosen index.
     * @param array The array to removed a random element from.
     * @param start The array index to start the search from. Default 0.
     * @param length Optional restriction on the number of elements to randomly select from. Default array.length.
     */
    function RemoveRandomElement(array: any[], start?: number, length?: number): object;

    /**
     * Replaces an element of the array with the new element.
     * The new element cannot already be a member of the array.
     * The array is modified in-place.
     * @param array The array to search within.
     * @param oldChild The element in the array that will be replaced.
     * @param newChild The element to be inserted into the array at the position of `oldChild`.
     */
    function Replace(array: any[], oldChild: any, newChild: any): boolean;

    /**
     * Moves the element at the start of the array to the end, shifting all items in the process.
     * The "rotation" happens to the left.
     * @param array The array to shift to the left. This array is modified in place.
     * @param total The number of times to shift the array. Default 1.
     */
    function RotateLeft(array: any[], total?: number): any;

    /**
     * Moves the element at the end of the array to the start, shifting all items in the process.
     * The "rotation" happens to the right.
     * @param array The array to shift to the right. This array is modified in place.
     * @param total The number of times to shift the array. Default 1.
     */
    function RotateRight(array: any[], total?: number): any;

    /**
     * Tests if the start and end indexes are a safe range for the given array.
     * @param array The array to check.
     * @param startIndex The start index.
     * @param endIndex The end index.
     * @param throwError Throw an error if the range is out of bounds. Default true.
     */
    function SafeRange(array: any[], startIndex: number, endIndex: number, throwError?: boolean): boolean;

    /**
     * Moves the given element to the bottom of the array.
     * The array is modified in-place.
     * @param array The array.
     * @param item The element to move.
     */
    function SendToBack(array: any[], item: any): any;

    /**
     * Scans the array for elements with the given property. If found, the property is set to the `value`.
     *
     * For example: `SetAll('visible', true)` would set all elements that have a `visible` property to `false`.
     *
     * Optionally you can specify a start and end index. For example if the array had 100 elements,
     * and you set `startIndex` to 0 and `endIndex` to 50, it would update only the first 50 elements.
     * @param array The array to search.
     * @param property The property to test for on each array element.
     * @param value The value to set the property to.
     * @param startIndex An optional start index to search from.
     * @param endIndex An optional end index to search to.
     */
    function SetAll(array: any[], property: string, value: any, startIndex?: number, endIndex?: number): any[];

    /**
     * Shuffles the contents of the given array using the Fisher-Yates implementation.
     *
     * The original array is modified directly and returned.
     * @param array The array to shuffle. This array is modified in place.
     */
    function Shuffle<T>(array: T[]): T[];

    /**
     * Takes the given array and runs a numeric sort on it, ignoring any non-digits that
     * may be in the entries.
     *
     * You should only run this on arrays containing strings.
     * @param array The input array of strings.
     */
    function SortByDigits(array: string[]): string[];

    /**
     * Removes a single item from an array and returns it without creating gc, like the native splice does.
     * Based on code by Mike Reinstein.
     * @param array The array to splice from.
     * @param index The index of the item which should be spliced.
     */
    function SpliceOne(array: any[], index: number): any;

    /**
     * An in-place stable array sort, because `Array#sort()` is not guaranteed stable.
     *
     * This is an implementation of merge sort, without recursion.
     *
     * Function based on the Two-Screen/stable sort 0.1.8 from https://github.com/Two-Screen/stable
     * @param array The input array to be sorted.
     * @param compare The comparison function.
     */
    function StableSort(array: any[], compare?: Function): any[];

    /**
     * Swaps the position of two elements in the given array.
     * The elements must exist in the same array.
     * The array is modified in-place.
     * @param array The input array.
     * @param item1 The first element to swap.
     * @param item2 The second element to swap.
     */
    function Swap(array: any[], item1: any, item2: any): any[];

  }

  namespace Base64 {
    /**
     * Converts an ArrayBuffer into a base64 string.
     *
     * The resulting string can optionally be a data uri if the `mediaType` argument is provided.
     *
     * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs for more details.
     * @param arrayBuffer The Array Buffer to encode.
     * @param mediaType An optional media type, i.e. `audio/ogg` or `image/jpeg`. If included the resulting string will be a data URI.
     */
    function ArrayBufferToBase64(arrayBuffer: ArrayBuffer, mediaType?: string): string;

    /**
     * Converts a base64 string, either with or without a data uri, into an Array Buffer.
     * @param base64 The base64 string to be decoded. Can optionally contain a data URI header, which will be stripped out prior to decoding.
     */
    function Base64ToArrayBuffer(base64: string): ArrayBuffer;

  }

  /**
   * A NOOP (No Operation) callback function.
   *
   * Used internally by Phaser when it's more expensive to determine if a callback exists
   * than it is to just invoke an empty function.
   */
  function NOOP(): void;

  namespace Objects {
    /**
     * Shallow Object Clone. Will not clone nested objects.
     * @param obj The object to clone.
     */
    function Clone(obj: object): object;

    /**
     * Deep Copy the given object or array.
     * @param obj The object to deep copy.
     */
    function DeepCopy(obj: object): object;

    /**
     * This is a slightly modified version of http://api.jquery.com/jQuery.extend/
     * @param args The objects that will be mixed.
     */
    function Extend(...args: any[]): object;

    /**
     * Retrieves a value from an object. Allows for more advanced selection options, including:
     *
     * Allowed types:
     *
     * Implicit
     * {
     *     x: 4
     * }
     *
     * From function
     * {
     *     x: function ()
     * }
     *
     * Randomly pick one element from the array
     * {
     *     x: [a, b, c, d, e, f]
     * }
     *
     * Random integer between min and max:
     * {
     *     x: { randInt: [min, max] }
     * }
     *
     * Random float between min and max:
     * {
     *     x: { randFloat: [min, max] }
     * }
     * @param source The object to retrieve the value from.
     * @param key The name of the property to retrieve from the object. If a property is nested, the names of its preceding properties should be separated by a dot (`.`) - `banner.hideBanner` would return the value of the `hideBanner` property from the object stored in the `banner` property of the `source` object.
     * @param defaultValue The value to return if the `key` isn't found in the `source` object.
     */
    function GetAdvancedValue(source: object, key: string, defaultValue: any): any;

    /**
     * Finds the key within the top level of the {@link source} object, or returns {@link defaultValue}
     * @param source The object to search
     * @param key The key for the property on source. Must exist at the top level of the source object (no periods)
     * @param defaultValue The default value to use if the key does not exist.
     */
    function GetFastValue(source: object, key: string, defaultValue?: any): any;

    /**
     * Retrieves and clamps a numerical value from an object.
     * @param source The object to retrieve the value from.
     * @param key The name of the property to retrieve from the object. If a property is nested, the names of its preceding properties should be separated by a dot (`.`).
     * @param min The minimum value which can be returned.
     * @param max The maximum value which can be returned.
     * @param defaultValue The value to return if the property doesn't exist. It's also constrained to the given bounds.
     */
    function GetMinMaxValue(source: object, key: string, min: number, max: number, defaultValue: number): number;

    /**
     * Retrieves a value from an object.
     * @param source The object to retrieve the value from.
     * @param key The name of the property to retrieve from the object. If a property is nested, the names of its preceding properties should be separated by a dot (`.`) - `banner.hideBanner` would return the value of the `hideBanner` property from the object stored in the `banner` property of the `source` object.
     * @param defaultValue The value to return if the `key` isn't found in the `source` object.
     */
    function GetValue(source: object, key: string, defaultValue: any): any;

    /**
     * Verifies that an object contains all requested keys
     * @param source an object on which to check for key existence
     * @param keys an array of keys to ensure the source object contains
     */
    function HasAll(source: object, keys: string[]): boolean;

    /**
     * Verifies that an object contains at least one of the requested keys
     * @param source an object on which to check for key existence
     * @param keys an array of keys to search the object for
     */
    function HasAny(source: object, keys: string[]): boolean;

    /**
     * Determine whether the source object has a property with the specified key.
     * @param source The source object to be checked.
     * @param key The property to check for within the object
     */
    function HasValue(source: object, key: string): boolean;

    /**
     * This is a slightly modified version of jQuery.isPlainObject.
     * A plain object is an object whose internal class property is [object Object].
     * @param obj The object to inspect.
     */
    function IsPlainObject(obj: object): boolean;

    /**
     * Creates a new Object using all values from obj1 and obj2.
     * If a value exists in both obj1 and obj2, the value in obj1 is used.
     *
     * This is only a shallow copy. Deeply nested objects are not cloned, so be sure to only use this
     * function on shallow objects.
     * @param obj1 The first object.
     * @param obj2 The second object.
     */
    function Merge(obj1: object, obj2: object): object;

    /**
     * Creates a new Object using all values from obj1.
     *
     * Then scans obj2. If a property is found in obj2 that *also* exists in obj1, the value from obj2 is used, otherwise the property is skipped.
     * @param obj1 The first object to merge.
     * @param obj2 The second object to merge. Keys from this object which also exist in `obj1` will be copied to `obj1`.
     */
    function MergeRight(obj1: object, obj2: object): object;

    /**
     * Returns a new object that only contains the `keys` that were found on the object provided.
     * If no `keys` are found, an empty object is returned.
     * @param object The object to pick the provided keys from.
     * @param keys An array of properties to retrieve from the provided object.
     */
    function Pick(object: object, keys: any[]): object;

    /**
     * Sets a value in an object, allowing for dot notation to control the depth of the property.
     *
     * For example:
     *
     * ```javascript
     * var data = {
     *   world: {
     *     position: {
     *       x: 200,
     *       y: 100
     *     }
     *   }
     * };
     *
     * SetValue(data, 'world.position.y', 300);
     *
     * console.info(data.world.position.y); // 300
     * ```
     * @param source The object to set the value in.
     * @param key The name of the property in the object. If a property is nested, the names of its preceding properties should be separated by a dot (`.`)
     * @param value The value to set into the property, if found in the source object.
     */
    function SetValue(source: object, key: string, value: any): boolean;

  }

  namespace String {
    /**
     * Takes a string and replaces instances of markers with values in the given array.
     * The markers take the form of `%1`, `%2`, etc. I.e.:
     *
     * `Format("The %1 is worth %2 gold", [ 'Sword', 500 ])`
     * @param string The string containing the replacement markers.
     * @param values An array containing values that will replace the markers. If no value exists an empty string is inserted instead.
     */
    function Format(string: string, values: any[]): string;

    /**
     * Takes the given string and pads it out, to the length required, using the character
     * specified. For example if you need a string to be 6 characters long, you can call:
     *
     * `pad('bob', 6, '-', 2)`
     *
     * This would return: `bob---` as it has padded it out to 6 characters, using the `-` on the right.
     *
     * You can also use it to pad numbers (they are always returned as strings):
     *
     * `pad(512, 6, '0', 1)`
     *
     * Would return: `000512` with the string padded to the left.
     *
     * If you don't specify a direction it'll pad to both sides:
     *
     * `pad('c64', 7, '*')`
     *
     * Would return: `**c64**`
     * @param str The target string. `toString()` will be called on the string, which means you can also pass in common data types like numbers.
     * @param len The number of characters to be added. Default 0.
     * @param pad The string to pad it out with (defaults to a space). Default " ".
     * @param dir The direction dir = 1 (left), 2 (right), 3 (both). Default 3.
     */
    function Pad(str: string | number | object, len?: number, pad?: string, dir?: number): string;

    /**
     * Takes a string and removes the character at the given index.
     * @param string The string to be worked on.
     * @param index The index of the character to be removed.
     */
    function RemoveAt(string: string, index: number): string;

    /**
     * Takes the given string and reverses it, returning the reversed string.
     * For example if given the string `Atari 520ST` it would return `TS025 iratA`.
     * @param string The string to be reversed.
     */
    function Reverse(string: string): string;

    /**
     * Capitalizes the first letter of a string if there is one.
     * @param str The string to capitalize.
     */
    function UppercaseFirst(str: string): string;

    /**
     * Creates and returns an RFC4122 version 4 compliant UUID.
     *
     * The string is in the form: `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` where each `x` is replaced with a random
     * hexadecimal digit from 0 to f, and `y` is replaced with a random hexadecimal digit from 8 to b.
     */
    function UUID(): string;

  }

}