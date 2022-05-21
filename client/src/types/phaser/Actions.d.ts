namespace Phaser.Actions {
  /**
   * Takes an array of Game Objects, or any objects that have public `x` and `y` properties, and aligns them next to each other.
   *
   * The first item isn't moved. The second item is aligned next to the first, then the third next to the second, and so on.
   * @param items The array of items to be updated by this action.
   * @param position The position to align the items with. This is an align constant, such as `Phaser.Display.Align.LEFT_CENTER`.
   * @param offsetX Optional horizontal offset from the position. Default 0.
   * @param offsetY Optional vertical offset from the position. Default 0.
   */
  function AlignTo<G extends Phaser.GameObjects.GameObject[]>(items: G, position: number, offsetX?: number, offsetY?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public `angle` property,
   * and then adds the given value to each of their `angle` properties.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `Angle(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to be added to the `angle` property.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function Angle<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of objects and passes each of them to the given callback.
   * @param items The array of items to be updated by this action.
   * @param callback The callback to be invoked. It will be passed just one argument: the item from the array.
   * @param context The scope in which the callback will be invoked.
   */
  function Call<G extends Phaser.GameObjects.GameObject[]>(items: G, callback: Phaser.Types.Actions.CallCallback, context: any): G;

  /**
   * Takes an array of objects and returns the first element in the array that has properties which match
   * all of those specified in the `compare` object. For example, if the compare object was: `{ scaleX: 0.5, alpha: 1 }`
   * then it would return the first item which had the property `scaleX` set to 0.5 and `alpha` set to 1.
   *
   * To use this with a Group: `GetFirst(group.getChildren(), compare, index)`
   * @param items The array of items to be searched by this action.
   * @param compare The comparison object. Each property in this object will be checked against the items of the array.
   * @param index An optional offset to start searching from within the items array. Default 0.
   */
  function GetFirst<G extends Phaser.GameObjects.GameObject[]>(items: G, compare: object, index?: number): object | Phaser.GameObjects.GameObject;

  /**
   * Takes an array of objects and returns the last element in the array that has properties which match
   * all of those specified in the `compare` object. For example, if the compare object was: `{ scaleX: 0.5, alpha: 1 }`
   * then it would return the last item which had the property `scaleX` set to 0.5 and `alpha` set to 1.
   *
   * To use this with a Group: `GetLast(group.getChildren(), compare, index)`
   * @param items The array of items to be searched by this action.
   * @param compare The comparison object. Each property in this object will be checked against the items of the array.
   * @param index An optional offset to start searching from within the items array. Default 0.
   */
  function GetLast<G extends Phaser.GameObjects.GameObject[]>(items: G, compare: object, index?: number): object | Phaser.GameObjects.GameObject;

  /**
   * Takes an array of Game Objects, or any objects that have public `x` and `y` properties,
   * and then aligns them based on the grid configuration given to this action.
   * @param items The array of items to be updated by this action.
   * @param options The GridAlign Configuration object.
   */
  function GridAlign<G extends Phaser.GameObjects.GameObject[]>(items: G, options: Phaser.Types.Actions.GridAlignConfig): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public `alpha` property,
   * and then adds the given value to each of their `alpha` properties.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `IncAlpha(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to be added to the `alpha` property.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function IncAlpha<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public `x` property,
   * and then adds the given value to each of their `x` properties.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `IncX(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to be added to the `x` property.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function IncX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have public `x` and `y` properties,
   * and then adds the given value to each of them.
   *
   * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `IncXY(group.getChildren(), x, y, stepX, stepY)`
   * @param items The array of items to be updated by this action.
   * @param x The amount to be added to the `x` property.
   * @param y The amount to be added to the `y` property. If `undefined` or `null` it uses the `x` value. Default x.
   * @param stepX This is added to the `x` amount, multiplied by the iteration counter. Default 0.
   * @param stepY This is added to the `y` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function IncXY<G extends Phaser.GameObjects.GameObject[]>(items: G, x: number, y?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public `y` property,
   * and then adds the given value to each of their `y` properties.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `IncY(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to be added to the `y` property.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function IncY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects and positions them on evenly spaced points around the perimeter of a Circle.
   *
   * If you wish to pass a `Phaser.GameObjects.Circle` Shape to this function, you should pass its `geom` property.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param circle The Circle to position the Game Objects on.
   * @param startAngle Optional angle to start position from, in radians. Default 0.
   * @param endAngle Optional angle to stop position at, in radians. Default 6.28.
   */
  function PlaceOnCircle<G extends Phaser.GameObjects.GameObject[]>(items: G, circle: Phaser.Geom.Circle, startAngle?: number, endAngle?: number): G;

  /**
   * Takes an array of Game Objects and positions them on evenly spaced points around the perimeter of an Ellipse.
   *
   * If you wish to pass a `Phaser.GameObjects.Ellipse` Shape to this function, you should pass its `geom` property.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param ellipse The Ellipse to position the Game Objects on.
   * @param startAngle Optional angle to start position from, in radians. Default 0.
   * @param endAngle Optional angle to stop position at, in radians. Default 6.28.
   */
  function PlaceOnEllipse<G extends Phaser.GameObjects.GameObject[]>(items: G, ellipse: Phaser.Geom.Ellipse, startAngle?: number, endAngle?: number): G;

  /**
   * Positions an array of Game Objects on evenly spaced points of a Line.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param line The Line to position the Game Objects on.
   */
  function PlaceOnLine<G extends Phaser.GameObjects.GameObject[]>(items: G, line: Phaser.Geom.Line): G;

  /**
   * Takes an array of Game Objects and positions them on evenly spaced points around the perimeter of a Rectangle.
   *
   * Placement starts from the top-left of the rectangle, and proceeds in a clockwise direction.
   * If the `shift` parameter is given you can offset where placement begins.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param rect The Rectangle to position the Game Objects on.
   * @param shift An optional positional offset. Default 0.
   */
  function PlaceOnRectangle<G extends Phaser.GameObjects.GameObject[]>(items: G, rect: Phaser.Geom.Rectangle, shift?: number): G;

  /**
   * Takes an array of Game Objects and positions them on evenly spaced points around the edges of a Triangle.
   *
   * If you wish to pass a `Phaser.GameObjects.Triangle` Shape to this function, you should pass its `geom` property.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param triangle The Triangle to position the Game Objects on.
   * @param stepRate An optional step rate, to increase or decrease the packing of the Game Objects on the lines. Default 1.
   */
  function PlaceOnTriangle<G extends Phaser.GameObjects.GameObject[]>(items: G, triangle: Phaser.Geom.Triangle, stepRate?: number): G;

  /**
   * Play an animation on all Game Objects in the array that have an Animation component.
   *
   * You can pass either an animation key, or an animation configuration object for more control over the playback.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param key The string-based key of the animation to play, or an Animation instance, or a `PlayAnimationConfig` object.
   * @param ignoreIfPlaying If this animation is already playing then ignore this call. Default false.
   */
  function PlayAnimation<G extends Phaser.GameObjects.GameObject[]>(items: G, key: string | Phaser.Animations.Animation | Phaser.Types.Animations.PlayAnimationConfig, ignoreIfPlaying?: boolean): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public property as defined in `key`,
   * and then adds the given value to it.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `PropertyValueInc(group.getChildren(), key, value, step)`
   * @param items The array of items to be updated by this action.
   * @param key The property to be updated.
   * @param value The amount to be added to the property.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function PropertyValueInc<G extends Phaser.GameObjects.GameObject[]>(items: G, key: string, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public property as defined in `key`,
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `PropertyValueSet(group.getChildren(), key, value, step)`
   * @param items The array of items to be updated by this action.
   * @param key The property to be updated.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function PropertyValueSet<G extends Phaser.GameObjects.GameObject[]>(items: G, key: string, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects and positions them at random locations within the Circle.
   *
   * If you wish to pass a `Phaser.GameObjects.Circle` Shape to this function, you should pass its `geom` property.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param circle The Circle to position the Game Objects within.
   */
  function RandomCircle<G extends Phaser.GameObjects.GameObject[]>(items: G, circle: Phaser.Geom.Circle): G;

  /**
   * Takes an array of Game Objects and positions them at random locations within the Ellipse.
   *
   * If you wish to pass a `Phaser.GameObjects.Ellipse` Shape to this function, you should pass its `geom` property.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param ellipse The Ellipse to position the Game Objects within.
   */
  function RandomEllipse<G extends Phaser.GameObjects.GameObject[]>(items: G, ellipse: Phaser.Geom.Ellipse): G;

  /**
   * Takes an array of Game Objects and positions them at random locations on the Line.
   *
   * If you wish to pass a `Phaser.GameObjects.Line` Shape to this function, you should pass its `geom` property.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param line The Line to position the Game Objects randomly on.
   */
  function RandomLine<G extends Phaser.GameObjects.GameObject[]>(items: G, line: Phaser.Geom.Line): G;

  /**
   * Takes an array of Game Objects and positions them at random locations within the Rectangle.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param rect The Rectangle to position the Game Objects within.
   */
  function RandomRectangle<G extends Phaser.GameObjects.GameObject[]>(items: G, rect: Phaser.Geom.Rectangle): G;

  /**
   * Takes an array of Game Objects and positions them at random locations within the Triangle.
   *
   * If you wish to pass a `Phaser.GameObjects.Triangle` Shape to this function, you should pass its `geom` property.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param triangle The Triangle to position the Game Objects within.
   */
  function RandomTriangle<G extends Phaser.GameObjects.GameObject[]>(items: G, triangle: Phaser.Geom.Triangle): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public `rotation` property,
   * and then adds the given value to each of their `rotation` properties.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `Rotate(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to be added to the `rotation` property (in radians).
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function Rotate<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Rotates each item around the given point by the given angle.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param point Any object with public `x` and `y` properties.
   * @param angle The angle to rotate by, in radians.
   */
  function RotateAround<G extends Phaser.GameObjects.GameObject[]>(items: G, point: object, angle: number): G;

  /**
   * Rotates an array of Game Objects around a point by the given angle and distance.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param point Any object with public `x` and `y` properties.
   * @param angle The angle to rotate by, in radians.
   * @param distance The distance from the point of rotation in pixels.
   */
  function RotateAroundDistance<G extends Phaser.GameObjects.GameObject[]>(items: G, point: object, angle: number, distance: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public `scaleX` property,
   * and then adds the given value to each of their `scaleX` properties.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `ScaleX(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to be added to the `scaleX` property.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function ScaleX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have public `scaleX` and `scaleY` properties,
   * and then adds the given value to each of them.
   *
   * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `ScaleXY(group.getChildren(), scaleX, scaleY, stepX, stepY)`
   * @param items The array of items to be updated by this action.
   * @param scaleX The amount to be added to the `scaleX` property.
   * @param scaleY The amount to be added to the `scaleY` property. If `undefined` or `null` it uses the `scaleX` value.
   * @param stepX This is added to the `scaleX` amount, multiplied by the iteration counter. Default 0.
   * @param stepY This is added to the `scaleY` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function ScaleXY<G extends Phaser.GameObjects.GameObject[]>(items: G, scaleX: number, scaleY?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have a public `scaleY` property,
   * and then adds the given value to each of their `scaleY` properties.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `ScaleY(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to be added to the `scaleY` property.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function ScaleY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `alpha`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetAlpha(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetAlpha<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `blendMode`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetBlendMode(group.getChildren(), value)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetBlendMode<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `depth`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetDepth(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetDepth<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Passes all provided Game Objects to the Input Manager to enable them for input with identical areas and callbacks.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param hitArea Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not specified a Rectangle will be used.
   * @param hitAreaCallback A callback to be invoked when the Game Object is interacted with. If you provide a shape you must also provide a callback.
   */
  function SetHitArea<G extends Phaser.GameObjects.GameObject[]>(items: G, hitArea: any, hitAreaCallback: Phaser.Types.Input.HitAreaCallback): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public properties `originX` and `originY`
   * and then sets them to the given values.
   *
   * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetOrigin(group.getChildren(), originX, originY, stepX, stepY)`
   * @param items The array of items to be updated by this action.
   * @param originX The amount to set the `originX` property to.
   * @param originY The amount to set the `originY` property to. If `undefined` or `null` it uses the `originX` value.
   * @param stepX This is added to the `originX` amount, multiplied by the iteration counter. Default 0.
   * @param stepY This is added to the `originY` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetOrigin<G extends Phaser.GameObjects.GameObject[]>(items: G, originX: number, originY?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `rotation`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetRotation(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetRotation<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public properties `scaleX` and `scaleY`
   * and then sets them to the given values.
   *
   * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetScale(group.getChildren(), scaleX, scaleY, stepX, stepY)`
   * @param items The array of items to be updated by this action.
   * @param scaleX The amount to set the `scaleX` property to.
   * @param scaleY The amount to set the `scaleY` property to. If `undefined` or `null` it uses the `scaleX` value.
   * @param stepX This is added to the `scaleX` amount, multiplied by the iteration counter. Default 0.
   * @param stepY This is added to the `scaleY` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetScale<G extends Phaser.GameObjects.GameObject[]>(items: G, scaleX: number, scaleY?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `scaleX`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetScaleX(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetScaleX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `scaleY`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetScaleY(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetScaleY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public properties `scrollFactorX` and `scrollFactorY`
   * and then sets them to the given values.
   *
   * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetScrollFactor(group.getChildren(), scrollFactorX, scrollFactorY, stepX, stepY)`
   * @param items The array of items to be updated by this action.
   * @param scrollFactorX The amount to set the `scrollFactorX` property to.
   * @param scrollFactorY The amount to set the `scrollFactorY` property to. If `undefined` or `null` it uses the `scrollFactorX` value.
   * @param stepX This is added to the `scrollFactorX` amount, multiplied by the iteration counter. Default 0.
   * @param stepY This is added to the `scrollFactorY` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetScrollFactor<G extends Phaser.GameObjects.GameObject[]>(items: G, scrollFactorX: number, scrollFactorY?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `scrollFactorX`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetScrollFactorX(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetScrollFactorX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `scrollFactorY`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetScrollFactorY(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetScrollFactorY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public method setTint() and then updates it to the given value(s). You can specify tint color per corner or provide only one color value for `topLeft` parameter, in which case whole item will be tinted with that color.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param topLeft The tint being applied to top-left corner of item. If other parameters are given no value, this tint will be applied to whole item.
   * @param topRight The tint to be applied to top-right corner of item.
   * @param bottomLeft The tint to be applied to the bottom-left corner of item.
   * @param bottomRight The tint to be applied to the bottom-right corner of item.
   */
  function SetTint<G extends Phaser.GameObjects.GameObject[]>(items: G, topLeft: number, topRight?: number, bottomLeft?: number, bottomRight?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `visible`
   * and then sets it to the given value.
   *
   * To use this with a Group: `SetVisible(group.getChildren(), value)`
   * @param items The array of items to be updated by this action.
   * @param value The value to set the property to.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetVisible<G extends Phaser.GameObjects.GameObject[]>(items: G, value: boolean, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `x`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetX(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetX<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public properties `x` and `y`
   * and then sets them to the given values.
   *
   * The optional `stepX` and `stepY` properties are applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetXY(group.getChildren(), x, y, stepX, stepY)`
   * @param items The array of items to be updated by this action.
   * @param x The amount to set the `x` property to.
   * @param y The amount to set the `y` property to. If `undefined` or `null` it uses the `x` value. Default x.
   * @param stepX This is added to the `x` amount, multiplied by the iteration counter. Default 0.
   * @param stepY This is added to the `y` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetXY<G extends Phaser.GameObjects.GameObject[]>(items: G, x: number, y?: number, stepX?: number, stepY?: number, index?: number, direction?: number): G;

  /**
   * Takes an array of Game Objects, or any objects that have the public property `y`
   * and then sets it to the given value.
   *
   * The optional `step` property is applied incrementally, multiplied by each item in the array.
   *
   * To use this with a Group: `SetY(group.getChildren(), value, step)`
   * @param items The array of items to be updated by this action.
   * @param value The amount to set the property to.
   * @param step This is added to the `value` amount, multiplied by the iteration counter. Default 0.
   * @param index An optional offset to start searching from within the items array. Default 0.
   * @param direction The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning. Default 1.
   */
  function SetY<G extends Phaser.GameObjects.GameObject[]>(items: G, value: number, step?: number, index?: number, direction?: number): G;

  /**
   * Iterate through the items array changing the position of each element to be that of the element that came before
   * it in the array (or after it if direction = 1)
   *
   * The first items position is set to x/y.
   *
   * The final x/y coords are returned
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param x The x coordinate to place the first item in the array at.
   * @param y The y coordinate to place the first item in the array at.
   * @param direction The iteration direction. 0 = first to last and 1 = last to first. Default 0.
   * @param output An optional objec to store the final objects position in.
   */
  function ShiftPosition<G extends Phaser.GameObjects.GameObject[], O extends Phaser.Math.Vector2>(items: G, x: number, y: number, direction?: number, output?: O): O;

  /**
   * Shuffles the array in place. The shuffled array is both modified and returned.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   */
  function Shuffle<G extends Phaser.GameObjects.GameObject[]>(items: G): G;

  /**
   * Smootherstep is a sigmoid-like interpolation and clamping function.
   *
   * The function depends on three parameters, the input x, the "left edge" and the "right edge", with the left edge being assumed smaller than the right edge. The function receives a real number x as an argument and returns 0 if x is less than or equal to the left edge, 1 if x is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial, between 0 and 1 otherwise. The slope of the smoothstep function is zero at both edges. This is convenient for creating a sequence of transitions using smoothstep to interpolate each segment as an alternative to using more sophisticated or expensive interpolation techniques.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param property The property of the Game Object to interpolate.
   * @param min The minimum interpolation value.
   * @param max The maximum interpolation value.
   * @param inc Should the values be incremented? `true` or set (`false`) Default false.
   */
  function SmootherStep<G extends Phaser.GameObjects.GameObject[]>(items: G, property: string, min: number, max: number, inc?: boolean): G;

  /**
   * Smoothstep is a sigmoid-like interpolation and clamping function.
   *
   * The function depends on three parameters, the input x, the "left edge" and the "right edge", with the left edge being assumed smaller than the right edge. The function receives a real number x as an argument and returns 0 if x is less than or equal to the left edge, 1 if x is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial, between 0 and 1 otherwise. The slope of the smoothstep function is zero at both edges. This is convenient for creating a sequence of transitions using smoothstep to interpolate each segment as an alternative to using more sophisticated or expensive interpolation techniques.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param property The property of the Game Object to interpolate.
   * @param min The minimum interpolation value.
   * @param max The maximum interpolation value.
   * @param inc Should the values be incremented? `true` or set (`false`) Default false.
   */
  function SmoothStep<G extends Phaser.GameObjects.GameObject[]>(items: G, property: string, min: number, max: number, inc?: boolean): G;

  /**
   * Takes an array of Game Objects and then modifies their `property` so the value equals, or is incremented, by the
   * calculated spread value.
   *
   * The spread value is derived from the given `min` and `max` values and the total number of items in the array.
   *
   * For example, to cause an array of Sprites to change in alpha from 0 to 1 you could call:
   *
   * ```javascript
   * Phaser.Actions.Spread(itemsArray, 'alpha', 0, 1);
   * ```
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param property The property of the Game Object to spread.
   * @param min The minimum value.
   * @param max The maximum value.
   * @param inc Should the values be incremented? `true` or set (`false`) Default false.
   */
  function Spread<G extends Phaser.GameObjects.GameObject[]>(items: G, property: string, min: number, max: number, inc?: boolean): G;

  /**
   * Takes an array of Game Objects and toggles the visibility of each one.
   * Those previously `visible = false` will become `visible = true`, and vice versa.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   */
  function ToggleVisible<G extends Phaser.GameObjects.GameObject[]>(items: G): G;

  /**
   * Wrap each item's coordinates within a rectangle's area.
   * @param items An array of Game Objects. The contents of this array are updated by this Action.
   * @param rect The rectangle.
   * @param padding An amount added to each side of the rectangle during the operation. Default 0.
   */
  function WrapInRectangle<G extends Phaser.GameObjects.GameObject[]>(items: G, rect: Phaser.Geom.Rectangle, padding?: number): G;
}