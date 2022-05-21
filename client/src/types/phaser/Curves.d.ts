namespace Phaser.Curves {
  /**
   * A higher-order Bézier curve constructed of four points.
   */
  class CubicBezier extends Phaser.Curves.Curve {
    /**
     *
     * @param p0 Start point, or an array of point pairs.
     * @param p1 Control Point 1.
     * @param p2 Control Point 2.
     * @param p3 End Point.
     */
    constructor(p0: Phaser.Math.Vector2 | Phaser.Math.Vector2[], p1: Phaser.Math.Vector2, p2: Phaser.Math.Vector2, p3: Phaser.Math.Vector2);

    /**
     * The start point of this curve.
     */
    p0: Phaser.Math.Vector2;

    /**
     * The first control point of this curve.
     */
    p1: Phaser.Math.Vector2;

    /**
     * The second control point of this curve.
     */
    p2: Phaser.Math.Vector2;

    /**
     * The end point of this curve.
     */
    p3: Phaser.Math.Vector2;

    /**
     * Gets the starting point on the curve.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Returns the resolution of this curve.
     * @param divisions The amount of divisions used by this curve.
     */
    getResolution(divisions: number): number;

    /**
     * Get point at relative position in curve according to length.
     * @param t The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Draws this curve to the specified graphics object.
     * @param graphics The graphics object this curve should be drawn to.
     * @param pointsTotal The number of intermediary points that make up this curve. A higher number of points will result in a smoother curve. Default 32.
     */
    draw<G extends Phaser.GameObjects.Graphics>(graphics: G, pointsTotal?: number): G;

    /**
     * Returns a JSON object that describes this curve.
     */
    toJSON(): Phaser.Types.Curves.JSONCurve;

    /**
     * Generates a curve from a JSON object.
     * @param data The JSON object containing this curve data.
     */
    static fromJSON(data: Phaser.Types.Curves.JSONCurve): Phaser.Curves.CubicBezier;

  }

  /**
   * A Base Curve class, which all other curve types extend.
   *
   * Based on the three.js Curve classes created by [zz85](http://www.lab4games.net/zz85/blog)
   */
  class Curve {
    /**
     *
     * @param type The curve type.
     */
    constructor(type: string);

    /**
     * String based identifier for the type of curve.
     */
    type: string;

    /**
     * The default number of divisions within the curve.
     */
    defaultDivisions: number;

    /**
     * The quantity of arc length divisions within the curve.
     */
    arcLengthDivisions: number;

    /**
     * An array of cached arc length values.
     */
    cacheArcLengths: number[];

    /**
     * Does the data of this curve need updating?
     */
    needsUpdate: boolean;

    /**
     * For a curve on a Path, `false` means the Path will ignore this curve.
     */
    active: boolean;

    /**
     * Draws this curve on the given Graphics object.
     *
     * The curve is drawn using `Graphics.strokePoints` so will be drawn at whatever the present Graphics stroke color is.
     * The Graphics object is not cleared before the draw, so the curve will appear on-top of anything else already rendered to it.
     * @param graphics The Graphics instance onto which this curve will be drawn.
     * @param pointsTotal The resolution of the curve. The higher the value the smoother it will render, at the cost of rendering performance. Default 32.
     */
    draw<G extends Phaser.GameObjects.Graphics>(graphics: G, pointsTotal?: number): G;

    /**
     * Returns a Rectangle where the position and dimensions match the bounds of this Curve.
     *
     * You can control the accuracy of the bounds. The value given is used to work out how many points
     * to plot across the curve. Higher values are more accurate at the cost of calculation speed.
     * @param out The Rectangle to store the bounds in. If falsey a new object will be created.
     * @param accuracy The accuracy of the bounds calculations. Default 16.
     */
    getBounds(out?: Phaser.Geom.Rectangle, accuracy?: number): Phaser.Geom.Rectangle;

    /**
     * Returns an array of points, spaced out X distance pixels apart.
     * The smaller the distance, the larger the array will be.
     * @param distance The distance, in pixels, between each point along the curve.
     */
    getDistancePoints(distance: number): Phaser.Geom.Point[];

    /**
     * Get a point at the end of the curve.
     * @param out Optional Vector object to store the result in.
     */
    getEndPoint(out?: Phaser.Math.Vector2): Phaser.Math.Vector2;

    /**
     * Get total curve arc length
     */
    getLength(): number;

    /**
     * Get a list of cumulative segment lengths.
     *
     * These lengths are
     *
     * - [0] 0
     * - [1] The first segment
     * - [2] The first and second segment
     * - ...
     * - [divisions] All segments
     * @param divisions The number of divisions or segments.
     */
    getLengths(divisions?: number): number[];

    /**
     * Get a point at a relative position on the curve, by arc length.
     * @param u The relative position, [0..1].
     * @param out A point to store the result in.
     */
    getPointAt<O extends Phaser.Math.Vector2>(u: number, out?: O): O;

    /**
     * Get a sequence of evenly spaced points from the curve.
     *
     * You can pass `divisions`, `stepRate`, or neither.
     *
     * The number of divisions will be
     *
     * 1. `divisions`, if `divisions` > 0; or
     * 2. `this.getLength / stepRate`, if `stepRate` > 0; or
     * 3. `this.defaultDivisions`
     *
     * `1 + divisions` points will be returned.
     * @param divisions The number of divisions to make.
     * @param stepRate The curve distance between points, implying `divisions`.
     * @param out An optional array to store the points in.
     */
    getPoints<O extends Phaser.Math.Vector2[]>(divisions?: number, stepRate?: number, out?: O): O;

    /**
     * Get a random point from the curve.
     * @param out A point object to store the result in.
     */
    getRandomPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Get a sequence of equally spaced points (by arc distance) from the curve.
     *
     * `1 + divisions` points will be returned.
     * @param divisions The number of divisions to make. Default this.defaultDivisions.
     * @param stepRate Step between points. Used to calculate the number of points to return when divisions is falsy. Ignored if divisions is positive.
     * @param out An optional array to store the points in.
     */
    getSpacedPoints(divisions?: number, stepRate?: number, out?: any[] | Phaser.Math.Vector2[]): Phaser.Math.Vector2[];

    /**
     * Get a point at the start of the curve.
     * @param out A point to store the result in.
     */
    getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Get a unit vector tangent at a relative position on the curve.
     * In case any sub curve does not implement its tangent derivation,
     * 2 points a small delta apart will be used to find its gradient
     * which seems to give a reasonable approximation
     * @param t The relative position on the curve, [0..1].
     * @param out A vector to store the result in.
     */
    getTangent<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Get a unit vector tangent at a relative position on the curve, by arc length.
     * @param u The relative position on the curve, [0..1].
     * @param out A vector to store the result in.
     */
    getTangentAt<O extends Phaser.Math.Vector2>(u: number, out?: O): O;

    /**
     * Given a distance in pixels, get a t to find p.
     * @param distance The distance, in pixels.
     * @param divisions Optional amount of divisions.
     */
    getTFromDistance(distance: number, divisions?: number): number;

    /**
     * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant.
     * @param u A float between 0 and 1.
     * @param distance The distance, in pixels.
     * @param divisions Optional amount of divisions.
     */
    getUtoTmapping(u: number, distance: number, divisions?: number): number;

    /**
     * Calculate and cache the arc lengths.
     */
    updateArcLengths(): void;

  }

  /**
   * An Elliptical Curve derived from the Base Curve class.
   *
   * See https://en.wikipedia.org/wiki/Elliptic_curve for more details.
   */
  class Ellipse extends Phaser.Curves.Curve {
    /**
     *
     * @param x The x coordinate of the ellipse, or an Ellipse Curve configuration object. Default 0.
     * @param y The y coordinate of the ellipse. Default 0.
     * @param xRadius The horizontal radius of ellipse. Default 0.
     * @param yRadius The vertical radius of ellipse. Default 0.
     * @param startAngle The start angle of the ellipse, in degrees. Default 0.
     * @param endAngle The end angle of the ellipse, in degrees. Default 360.
     * @param clockwise Whether the ellipse angles are given as clockwise (`true`) or counter-clockwise (`false`). Default false.
     * @param rotation The rotation of the ellipse, in degrees. Default 0.
     */
    constructor(x?: number | Phaser.Types.Curves.EllipseCurveConfig, y?: number, xRadius?: number, yRadius?: number, startAngle?: number, endAngle?: number, clockwise?: boolean, rotation?: number);

    /**
     * The center point of the ellipse. Used for calculating rotation.
     */
    p0: Phaser.Math.Vector2;

    /**
     * Gets the starting point on the curve.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Get the resolution of the curve.
     * @param divisions Optional divisions value.
     */
    getResolution(divisions: number): number;

    /**
     * Get point at relative position in curve according to length.
     * @param t The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Sets the horizontal radius of this curve.
     * @param value The horizontal radius of this curve.
     */
    setXRadius(value: number): this;

    /**
     * Sets the vertical radius of this curve.
     * @param value The vertical radius of this curve.
     */
    setYRadius(value: number): this;

    /**
     * Sets the width of this curve.
     * @param value The width of this curve.
     */
    setWidth(value: number): this;

    /**
     * Sets the height of this curve.
     * @param value The height of this curve.
     */
    setHeight(value: number): this;

    /**
     * Sets the start angle of this curve.
     * @param value The start angle of this curve, in radians.
     */
    setStartAngle(value: number): this;

    /**
     * Sets the end angle of this curve.
     * @param value The end angle of this curve, in radians.
     */
    setEndAngle(value: number): this;

    /**
     * Sets if this curve extends clockwise or anti-clockwise.
     * @param value The clockwise state of this curve.
     */
    setClockwise(value: boolean): this;

    /**
     * Sets the rotation of this curve.
     * @param value The rotation of this curve, in radians.
     */
    setRotation(value: number): this;

    /**
     * The x coordinate of the center of the ellipse.
     */
    x: number;

    /**
     * The y coordinate of the center of the ellipse.
     */
    y: number;

    /**
     * The horizontal radius of the ellipse.
     */
    xRadius: number;

    /**
     * The vertical radius of the ellipse.
     */
    yRadius: number;

    /**
     * The start angle of the ellipse in degrees.
     */
    startAngle: number;

    /**
     * The end angle of the ellipse in degrees.
     */
    endAngle: number;

    /**
     * `true` if the ellipse rotation is clockwise or `false` if anti-clockwise.
     */
    clockwise: boolean;

    /**
     * The rotation of the ellipse, relative to the center, in degrees.
     */
    angle: number;

    /**
     * The rotation of the ellipse, relative to the center, in radians.
     */
    rotation: number;

    /**
     * JSON serialization of the curve.
     */
    toJSON(): Phaser.Types.Curves.JSONEllipseCurve;

    /**
     * Creates a curve from the provided Ellipse Curve Configuration object.
     * @param data The JSON object containing this curve data.
     */
    static fromJSON(data: Phaser.Types.Curves.JSONEllipseCurve): Phaser.Curves.Ellipse;

  }

  /**
   * A LineCurve is a "curve" comprising exactly two points (a line segment).
   */
  class Line extends Phaser.Curves.Curve {
    /**
     *
     * @param p0 The first endpoint.
     * @param p1 The second endpoint.
     */
    constructor(p0: Phaser.Math.Vector2 | number[], p1?: Phaser.Math.Vector2);

    /**
     * The first endpoint.
     */
    p0: Phaser.Math.Vector2;

    /**
     * The second endpoint.
     */
    p1: Phaser.Math.Vector2;

    /**
     * The quantity of arc length divisions within the curve.
     */
    arcLengthDivisions: number;

    /**
     * Returns a Rectangle where the position and dimensions match the bounds of this Curve.
     * @param out A Rectangle object to store the bounds in. If not given a new Rectangle will be created.
     */
    getBounds<O extends Phaser.Geom.Rectangle>(out?: O): O;

    /**
     * Gets the starting point on the curve.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Gets the resolution of the line.
     * @param divisions The number of divisions to consider. Default 1.
     */
    getResolution(divisions?: number): number;

    /**
     * Get point at relative position in curve according to length.
     * @param t The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Gets a point at a given position on the line.
     * @param u The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getPointAt<O extends Phaser.Math.Vector2>(u: number, out?: O): O;

    /**
     * Gets the slope of the line as a unit vector.
     * @param t The relative position on the line, [0..1].
     * @param out A vector to store the result in.
     */
    getTangent<O extends Phaser.Math.Vector2>(t?: number, out?: O): O;

    /**
     * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant.
     * @param u A float between 0 and 1.
     * @param distance The distance, in pixels.
     * @param divisions Optional amount of divisions.
     */
    getUtoTmapping(u: number, distance: number, divisions?: number): number;

    /**
     * Draws this curve on the given Graphics object.
     *
     * The curve is drawn using `Graphics.lineBetween` so will be drawn at whatever the present Graphics line color is.
     * The Graphics object is not cleared before the draw, so the curve will appear on-top of anything else already rendered to it.
     * @param graphics The Graphics instance onto which this curve will be drawn.
     */
    draw<G extends Phaser.GameObjects.Graphics>(graphics: G): G;

    /**
     * Gets a JSON representation of the line.
     */
    toJSON(): Phaser.Types.Curves.JSONCurve;

    /**
     * Configures this line from a JSON representation.
     * @param data The JSON object containing this curve data.
     */
    static fromJSON(data: Phaser.Types.Curves.JSONCurve): Phaser.Curves.Line;

  }

  /**
   * A MoveTo Curve is a very simple curve consisting of only a single point.
   * Its intended use is to move the ending point in a Path.
   */
  class MoveTo {
    /**
     *
     * @param x `x` pixel coordinate. Default 0.
     * @param y `y` pixel coordinate. Default 0.
     */
    constructor(x?: number, y?: number);

    /**
     * Denotes that this Curve does not influence the bounds, points, and drawing of its parent Path. Must be `false` or some methods in the parent Path will throw errors.
     */
    active: boolean;

    /**
     * The lone point which this curve consists of.
     */
    p0: Phaser.Math.Vector2;

    /**
     * Get point at relative position in curve according to length.
     * @param t The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Retrieves the point at given position in the curve. This will always return this curve's only point.
     * @param u The position in the path to retrieve, between 0 and 1. Not used.
     * @param out An optional vector in which to store the point.
     */
    getPointAt<O extends Phaser.Math.Vector2>(u: number, out?: O): O;

    /**
     * Gets the resolution of this curve.
     */
    getResolution(): number;

    /**
     * Gets the length of this curve.
     */
    getLength(): number;

    /**
     * Converts this curve into a JSON-serializable object.
     */
    toJSON(): Phaser.Types.Curves.JSONCurve;

  }

  /**
   * A Path combines multiple Curves into one continuous compound curve.
   * It does not matter how many Curves are in the Path or what type they are.
   *
   * A Curve in a Path does not have to start where the previous Curve ends - that is to say, a Path does not
   * have to be an uninterrupted curve. Only the order of the Curves influences the actual points on the Path.
   */
  class Path {
    /**
     *
     * @param x The X coordinate of the Path's starting point or a {@link Phaser.Types.Curves.JSONPath}. Default 0.
     * @param y The Y coordinate of the Path's starting point. Default 0.
     */
    constructor(x?: number, y?: number);

    /**
     * The name of this Path.
     * Empty by default and never populated by Phaser, this is left for developers to use.
     */
    name: string;

    /**
     * The list of Curves which make up this Path.
     */
    curves: Phaser.Curves.Curve[];

    /**
     * The cached length of each Curve in the Path.
     *
     * Used internally by {@link #getCurveLengths}.
     */
    cacheLengths: number[];

    /**
     * Automatically closes the path.
     */
    autoClose: boolean;

    /**
     * The starting point of the Path.
     *
     * This is not necessarily equivalent to the starting point of the first Curve in the Path. In an empty Path, it's also treated as the ending point.
     */
    startPoint: Phaser.Math.Vector2;

    /**
     * Appends a Curve to the end of the Path.
     *
     * The Curve does not have to start where the Path ends or, for an empty Path, at its defined starting point.
     * @param curve The Curve to append.
     */
    add(curve: Phaser.Curves.Curve): this;

    /**
     * Creates a circular Ellipse Curve positioned at the end of the Path.
     * @param radius The radius of the circle.
     * @param clockwise `true` to create a clockwise circle as opposed to a counter-clockwise circle. Default false.
     * @param rotation The rotation of the circle in degrees. Default 0.
     */
    circleTo(radius: number, clockwise?: boolean, rotation?: number): this;

    /**
     * Ensures that the Path is closed.
     *
     * A closed Path starts and ends at the same point. If the Path is not closed, a straight Line Curve will be created from the ending point directly to the starting point. During the check, the actual starting point of the Path, i.e. the starting point of the first Curve, will be used as opposed to the Path's defined {@link startPoint}, which could differ.
     *
     * Calling this method on an empty Path will result in an error.
     */
    closePath(): this;

    /**
     * Creates a cubic bezier curve starting at the previous end point and ending at p3, using p1 and p2 as control points.
     * @param x The x coordinate of the end point. Or, if a Vector2, the p1 value.
     * @param y The y coordinate of the end point. Or, if a Vector2, the p2 value.
     * @param control1X The x coordinate of the first control point. Or, if a Vector2, the p3 value.
     * @param control1Y The y coordinate of the first control point. Not used if Vector2s are provided as the first 3 arguments.
     * @param control2X The x coordinate of the second control point. Not used if Vector2s are provided as the first 3 arguments.
     * @param control2Y The y coordinate of the second control point. Not used if Vector2s are provided as the first 3 arguments.
     */
    cubicBezierTo(x: number | Phaser.Math.Vector2, y: number | Phaser.Math.Vector2, control1X: number | Phaser.Math.Vector2, control1Y?: number, control2X?: number, control2Y?: number): this;

    /**
     * Creates a Quadratic Bezier Curve starting at the ending point of the Path.
     * @param x The X coordinate of the second control point or, if it's a `Vector2`, the first control point.
     * @param y The Y coordinate of the second control point or, if `x` is a `Vector2`, the second control point.
     * @param controlX If `x` is not a `Vector2`, the X coordinate of the first control point.
     * @param controlY If `x` is not a `Vector2`, the Y coordinate of the first control point.
     */
    quadraticBezierTo(x: number | Phaser.Math.Vector2[], y?: number, controlX?: number, controlY?: number): this;

    /**
     * Draws all Curves in the Path to a Graphics Game Object.
     * @param graphics The Graphics Game Object to draw to.
     * @param pointsTotal The number of points to draw for each Curve. Higher numbers result in a smoother curve but require more processing. Default 32.
     */
    draw<G extends Phaser.GameObjects.Graphics>(graphics: Phaser.GameObjects.Graphics, pointsTotal?: number): G;

    /**
     * Creates an ellipse curve positioned at the previous end point, using the given parameters.
     * @param xRadius The horizontal radius of ellipse. Default 0.
     * @param yRadius The vertical radius of ellipse. Default 0.
     * @param startAngle The start angle of the ellipse, in degrees. Default 0.
     * @param endAngle The end angle of the ellipse, in degrees. Default 360.
     * @param clockwise Whether the ellipse angles are given as clockwise (`true`) or counter-clockwise (`false`). Default false.
     * @param rotation The rotation of the ellipse, in degrees. Default 0.
     */
    ellipseTo(xRadius?: number, yRadius?: number, startAngle?: number, endAngle?: number, clockwise?: boolean, rotation?: number): this;

    /**
     * Creates a Path from a Path Configuration object.
     *
     * The provided object should be a {@link Phaser.Types.Curves.JSONPath}, as returned by {@link #toJSON}. Providing a malformed object may cause errors.
     * @param data The JSON object containing the Path data.
     */
    fromJSON(data: Phaser.Types.Curves.JSONPath): this;

    /**
     * Returns a Rectangle with a position and size matching the bounds of this Path.
     * @param out The Rectangle to store the bounds in.
     * @param accuracy The accuracy of the bounds calculations. Higher values are more accurate at the cost of calculation speed. Default 16.
     */
    getBounds<O extends Phaser.Math.Vector2>(out?: O, accuracy?: number): O;

    /**
     * Returns an array containing the length of the Path at the end of each Curve.
     *
     * The result of this method will be cached to avoid recalculating it in subsequent calls. The cache is only invalidated when the {@link #curves} array changes in length, leading to potential inaccuracies if a Curve in the Path is changed, or if a Curve is removed and another is added in its place.
     */
    getCurveLengths(): number[];

    /**
     * Returns the ending point of the Path.
     *
     * A Path's ending point is equivalent to the ending point of the last Curve in the Path. For an empty Path, the ending point is at the Path's defined {@link #startPoint}.
     * @param out The object to store the point in.
     */
    getEndPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Returns the total length of the Path.
     */
    getLength(): number;

    /**
     * Calculates the coordinates of the point at the given normalized location (between 0 and 1) on the Path.
     *
     * The location is relative to the entire Path, not to an individual Curve. A location of 0.5 is always in the middle of the Path and is thus an equal distance away from both its starting and ending points. In a Path with one Curve, it would be in the middle of the Curve; in a Path with two Curves, it could be anywhere on either one of them depending on their lengths.
     * @param t The location of the point to return, between 0 and 1.
     * @param out The object in which to store the calculated point.
     */
    getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Get a sequence of points on the path.
     * @param divisions The number of divisions per resolution per curve. Default 12.
     */
    getPoints(divisions?: number): Phaser.Math.Vector2[];

    /**
     * Returns a randomly chosen point anywhere on the path. This follows the same rules as `getPoint` in that it may return a point on any Curve inside this path.
     *
     * When calling this method multiple times, the points are not guaranteed to be equally spaced spatially.
     * @param out `Vector2` instance that should be used for storing the result. If `undefined` a new `Vector2` will be created.
     */
    getRandomPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Divides this Path into a set of equally spaced points,
     *
     * The resulting points are equally spaced with respect to the points' position on the path, but not necessarily equally spaced spatially.
     * @param divisions The amount of points to divide this Path into. Default 40.
     */
    getSpacedPoints(divisions?: number): Phaser.Math.Vector2[];

    /**
     * Returns the starting point of the Path.
     * @param out `Vector2` instance that should be used for storing the result. If `undefined` a new `Vector2` will be created.
     */
    getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Gets a unit vector tangent at a relative position on the path.
     * @param t The relative position on the path, [0..1].
     * @param out A vector to store the result in.
     */
    getTangent<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Creates a line curve from the previous end point to x/y.
     * @param x The X coordinate of the line's end point, or a `Vector2` containing the entire end point.
     * @param y The Y coordinate of the line's end point, if a number was passed as the X parameter.
     */
    lineTo(x: number | Phaser.Math.Vector2, y?: number): this;

    /**
     * Creates a spline curve starting at the previous end point, using the given points on the curve.
     * @param points The points the newly created spline curve should consist of.
     */
    splineTo(points: Phaser.Math.Vector2[]): this;

    /**
     * Creates a "gap" in this path from the path's current end point to the given coordinates.
     *
     * After calling this function, this Path's end point will be equal to the given coordinates
     * @param x The X coordinate of the position to move the path's end point to, or a `Vector2` containing the entire new end point.
     * @param y The Y coordinate of the position to move the path's end point to, if a number was passed as the X coordinate.
     */
    moveTo(x: number | Phaser.Math.Vector2, y?: number): this;

    /**
     * Converts this Path to a JSON object containing the path information and its constituent curves.
     */
    toJSON(): Phaser.Types.Curves.JSONPath;

    /**
     * cacheLengths must be recalculated.
     */
    updateArcLengths(): void;

    /**
     * Disposes of this Path, clearing its internal references to objects so they can be garbage-collected.
     */
    destroy(): void;

  }

  /**
   * A quadratic Bézier curve constructed from two control points.
   */
  class QuadraticBezier extends Phaser.Curves.Curve {
    /**
     *
     * @param p0 Start point, or an array of point pairs.
     * @param p1 Control Point 1.
     * @param p2 Control Point 2.
     */
    constructor(p0: Phaser.Math.Vector2 | number[], p1: Phaser.Math.Vector2, p2: Phaser.Math.Vector2);

    /**
     * The start point.
     */
    p0: Phaser.Math.Vector2;

    /**
     * The first control point.
     */
    p1: Phaser.Math.Vector2;

    /**
     * The second control point.
     */
    p2: Phaser.Math.Vector2;

    /**
     * Gets the starting point on the curve.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Get the resolution of the curve.
     * @param divisions Optional divisions value.
     */
    getResolution(divisions: number): number;

    /**
     * Get point at relative position in curve according to length.
     * @param t The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Draws this curve on the given Graphics object.
     *
     * The curve is drawn using `Graphics.strokePoints` so will be drawn at whatever the present Graphics stroke color is.
     * The Graphics object is not cleared before the draw, so the curve will appear on-top of anything else already rendered to it.
     * @param graphics `Graphics` object to draw onto.
     * @param pointsTotal Number of points to be used for drawing the curve. Higher numbers result in smoother curve but require more processing. Default 32.
     */
    draw<G extends Phaser.GameObjects.Graphics>(graphics: G, pointsTotal?: number): G;

    /**
     * Converts the curve into a JSON compatible object.
     */
    toJSON(): Phaser.Types.Curves.JSONCurve;

    /**
     * Creates a curve from a JSON object, e. g. created by `toJSON`.
     * @param data The JSON object containing this curve data.
     */
    static fromJSON(data: Phaser.Types.Curves.JSONCurve): Phaser.Curves.QuadraticBezier;

  }

  /**
   * Create a smooth 2d spline curve from a series of points.
   */
  class Spline extends Phaser.Curves.Curve {
    /**
     *
     * @param points The points that configure the curve.
     */
    constructor(points?: Phaser.Math.Vector2[] | number[] | number[][]);

    /**
     * The Vector2 points that configure the curve.
     */
    points: Phaser.Math.Vector2[];

    /**
     * Add a list of points to the current list of Vector2 points of the curve.
     * @param points The points that configure the curve.
     */
    addPoints(points: Phaser.Math.Vector2[] | number[] | number[][]): this;

    /**
     * Add a point to the current list of Vector2 points of the curve.
     * @param x The x coordinate of this curve
     * @param y The y coordinate of this curve
     */
    addPoint(x: number, y: number): Phaser.Math.Vector2;

    /**
     * Gets the starting point on the curve.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getStartPoint<O extends Phaser.Math.Vector2>(out?: O): O;

    /**
     * Get the resolution of the curve.
     * @param divisions Optional divisions value.
     */
    getResolution(divisions: number): number;

    /**
     * Get point at relative position in curve according to length.
     * @param t The position along the curve to return. Where 0 is the start and 1 is the end.
     * @param out A Vector2 object to store the result in. If not given will be created.
     */
    getPoint<O extends Phaser.Math.Vector2>(t: number, out?: O): O;

    /**
     * Exports a JSON object containing this curve data.
     */
    toJSON(): Phaser.Types.Curves.JSONCurve;

    /**
     * Imports a JSON object containing this curve data.
     * @param data The JSON object containing this curve data.
     */
    static fromJSON(data: Phaser.Types.Curves.JSONCurve): Phaser.Curves.Spline;

  }

}