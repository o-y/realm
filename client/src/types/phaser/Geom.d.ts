namespace Phaser.Geom {
  /**
   * A Circle object.
   *
   * This is a geometry object, containing numerical values and related methods to inspect and modify them.
   * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
   * To render a Circle you should look at the capabilities of the Graphics class.
   */
  class Circle {
    /**
     *
     * @param x The x position of the center of the circle. Default 0.
     * @param y The y position of the center of the circle. Default 0.
     * @param radius The radius of the circle. Default 0.
     */
    constructor(x?: number, y?: number, radius?: number);

    /**
     * Calculates the area of the circle.
     * @param circle The Circle to get the area of.
     */
    static Area(circle: Phaser.Geom.Circle): number;

    /**
     * The geometry constant type of this object: `GEOM_CONST.CIRCLE`.
     * Used for fast type comparisons.
     */
    readonly type: number;

    /**
     * The x position of the center of the circle.
     */
    x: number;

    /**
     * The y position of the center of the circle.
     */
    y: number;

    /**
     * Check to see if the Circle contains the given x / y coordinates.
     * @param x The x coordinate to check within the circle.
     * @param y The y coordinate to check within the circle.
     */
    contains(x: number, y: number): boolean;

    /**
     * Returns a Point object containing the coordinates of a point on the circumference of the Circle
     * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
     * at 180 degrees around the circle.
     * @param position A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the circle.
     * @param out An object to store the return values in. If not given a Point object will be created.
     */
    getPoint<O extends Phaser.Geom.Point>(position: number, out?: O): O;

    /**
     * Returns an array of Point objects containing the coordinates of the points around the circumference of the Circle,
     * based on the given quantity or stepRate values.
     * @param quantity The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
     * @param stepRate Sets the quantity by getting the circumference of the circle and dividing it by the stepRate.
     * @param output An array to insert the points in to. If not provided a new array will be created.
     */
    getPoints<O extends Phaser.Geom.Point[]>(quantity: number, stepRate?: number, output?: O): O;

    /**
     * Returns a uniformly distributed random point from anywhere within the Circle.
     * @param point A Point or point-like object to set the random `x` and `y` values in.
     */
    getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

    /**
     * Sets the x, y and radius of this circle.
     * @param x The x position of the center of the circle. Default 0.
     * @param y The y position of the center of the circle. Default 0.
     * @param radius The radius of the circle. Default 0.
     */
    setTo(x?: number, y?: number, radius?: number): this;

    /**
     * Sets this Circle to be empty with a radius of zero.
     * Does not change its position.
     */
    setEmpty(): this;

    /**
     * Sets the position of this Circle.
     * @param x The x position of the center of the circle. Default 0.
     * @param y The y position of the center of the circle. Default 0.
     */
    setPosition(x?: number, y?: number): this;

    /**
     * Checks to see if the Circle is empty: has a radius of zero.
     */
    isEmpty(): boolean;

    /**
     * The radius of the Circle.
     */
    radius: number;

    /**
     * The diameter of the Circle.
     */
    diameter: number;

    /**
     * The left position of the Circle.
     */
    left: number;

    /**
     * The right position of the Circle.
     */
    right: number;

    /**
     * The top position of the Circle.
     */
    top: number;

    /**
     * The bottom position of the Circle.
     */
    bottom: number;

    /**
     * Returns the circumference of the given Circle.
     * @param circle The Circle to get the circumference of.
     */
    static Circumference(circle: Phaser.Geom.Circle): number;

    /**
     * Returns a Point object containing the coordinates of a point on the circumference of the Circle based on the given angle.
     * @param circle The Circle to get the circumference point on.
     * @param angle The angle from the center of the Circle to the circumference to return the point from. Given in radians.
     * @param out A Point, or point-like object, to store the results in. If not given a Point will be created.
     */
    static CircumferencePoint<O extends Phaser.Geom.Point>(circle: Phaser.Geom.Circle, angle: number, out?: O): O;

    /**
     * Creates a new Circle instance based on the values contained in the given source.
     * @param source The Circle to be cloned. Can be an instance of a Circle or a circle-like object, with x, y and radius properties.
     */
    static Clone(source: Phaser.Geom.Circle | object): Phaser.Geom.Circle;

    /**
     * Check to see if the Circle contains the given x / y coordinates.
     * @param circle The Circle to check.
     * @param x The x coordinate to check within the circle.
     * @param y The y coordinate to check within the circle.
     */
    static Contains(circle: Phaser.Geom.Circle, x: number, y: number): boolean;

    /**
     * Check to see if the Circle contains the given Point object.
     * @param circle The Circle to check.
     * @param point The Point object to check if it's within the Circle or not.
     */
    static ContainsPoint(circle: Phaser.Geom.Circle, point: Phaser.Geom.Point | object): boolean;

    /**
     * Check to see if the Circle contains all four points of the given Rectangle object.
     * @param circle The Circle to check.
     * @param rect The Rectangle object to check if it's within the Circle or not.
     */
    static ContainsRect(circle: Phaser.Geom.Circle, rect: Phaser.Geom.Rectangle | object): boolean;

    /**
     * Copies the `x`, `y` and `radius` properties from the `source` Circle
     * into the given `dest` Circle, then returns the `dest` Circle.
     * @param source The source Circle to copy the values from.
     * @param dest The destination Circle to copy the values to.
     */
    static CopyFrom<O extends Phaser.Geom.Circle>(source: Phaser.Geom.Circle, dest: O): O;

    /**
     * Compares the `x`, `y` and `radius` properties of the two given Circles.
     * Returns `true` if they all match, otherwise returns `false`.
     * @param circle The first Circle to compare.
     * @param toCompare The second Circle to compare.
     */
    static Equals(circle: Phaser.Geom.Circle, toCompare: Phaser.Geom.Circle): boolean;

    /**
     * Returns the bounds of the Circle object.
     * @param circle The Circle to get the bounds from.
     * @param out A Rectangle, or rectangle-like object, to store the circle bounds in. If not given a new Rectangle will be created.
     */
    static GetBounds<O extends Phaser.Geom.Rectangle>(circle: Phaser.Geom.Circle, out?: O): O;

    /**
     * Returns a Point object containing the coordinates of a point on the circumference of the Circle
     * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
     * at 180 degrees around the circle.
     * @param circle The Circle to get the circumference point on.
     * @param position A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the circle.
     * @param out An object to store the return values in. If not given a Point object will be created.
     */
    static GetPoint<O extends Phaser.Geom.Point>(circle: Phaser.Geom.Circle, position: number, out?: O): O;

    /**
     * Returns an array of Point objects containing the coordinates of the points around the circumference of the Circle,
     * based on the given quantity or stepRate values.
     * @param circle The Circle to get the points from.
     * @param quantity The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
     * @param stepRate Sets the quantity by getting the circumference of the circle and dividing it by the stepRate.
     * @param output An array to insert the points in to. If not provided a new array will be created.
     */
    static GetPoints(circle: Phaser.Geom.Circle, quantity: number, stepRate?: number, output?: any[]): Phaser.Geom.Point[];

    /**
     * Offsets the Circle by the values given.
     * @param circle The Circle to be offset (translated.)
     * @param x The amount to horizontally offset the Circle by.
     * @param y The amount to vertically offset the Circle by.
     */
    static Offset<O extends Phaser.Geom.Circle>(circle: O, x: number, y: number): O;

    /**
     * Offsets the Circle by the values given in the `x` and `y` properties of the Point object.
     * @param circle The Circle to be offset (translated.)
     * @param point The Point object containing the values to offset the Circle by.
     */
    static OffsetPoint<O extends Phaser.Geom.Circle>(circle: O, point: Phaser.Geom.Point | object): O;

    /**
     * Returns a uniformly distributed random point from anywhere within the given Circle.
     * @param circle The Circle to get a random point from.
     * @param out A Point or point-like object to set the random `x` and `y` values in.
     */
    static Random<O extends Phaser.Geom.Point>(circle: Phaser.Geom.Circle, out?: O): O;

  }

  /**
   * A Circle Geometry object type.
   */
  var CIRCLE: number;

  /**
   * An Ellipse Geometry object type.
   */
  var ELLIPSE: number;

  /**
   * A Line Geometry object type.
   */
  var LINE: number;

  /**
   * A Point Geometry object type.
   */
  var POINT: number;

  /**
   * A Polygon Geometry object type.
   */
  var POLYGON: number;

  /**
   * A Rectangle Geometry object type.
   */
  var RECTANGLE: number;

  /**
   * A Triangle Geometry object type.
   */
  var TRIANGLE: number;

  /**
   * An Ellipse object.
   *
   * This is a geometry object, containing numerical values and related methods to inspect and modify them.
   * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
   * To render an Ellipse you should look at the capabilities of the Graphics class.
   */
  class Ellipse {
    /**
     *
     * @param x The x position of the center of the ellipse. Default 0.
     * @param y The y position of the center of the ellipse. Default 0.
     * @param width The width of the ellipse. Default 0.
     * @param height The height of the ellipse. Default 0.
     */
    constructor(x?: number, y?: number, width?: number, height?: number);

    /**
     * Calculates the area of the Ellipse.
     * @param ellipse The Ellipse to get the area of.
     */
    static Area(ellipse: Phaser.Geom.Ellipse): number;

    /**
     * Returns the circumference of the given Ellipse.
     * @param ellipse The Ellipse to get the circumference of.
     */
    static Circumference(ellipse: Phaser.Geom.Ellipse): number;

    /**
     * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse based on the given angle.
     * @param ellipse The Ellipse to get the circumference point on.
     * @param angle The angle from the center of the Ellipse to the circumference to return the point from. Given in radians.
     * @param out A Point, or point-like object, to store the results in. If not given a Point will be created.
     */
    static CircumferencePoint<O extends Phaser.Geom.Point>(ellipse: Phaser.Geom.Ellipse, angle: number, out?: O): O;

    /**
     * Creates a new Ellipse instance based on the values contained in the given source.
     * @param source The Ellipse to be cloned. Can be an instance of an Ellipse or a ellipse-like object, with x, y, width and height properties.
     */
    static Clone(source: Phaser.Geom.Ellipse): Phaser.Geom.Ellipse;

    /**
     * Check to see if the Ellipse contains the given x / y coordinates.
     * @param ellipse The Ellipse to check.
     * @param x The x coordinate to check within the ellipse.
     * @param y The y coordinate to check within the ellipse.
     */
    static Contains(ellipse: Phaser.Geom.Ellipse, x: number, y: number): boolean;

    /**
     * Check to see if the Ellipse contains the given Point object.
     * @param ellipse The Ellipse to check.
     * @param point The Point object to check if it's within the Circle or not.
     */
    static ContainsPoint(ellipse: Phaser.Geom.Ellipse, point: Phaser.Geom.Point | object): boolean;

    /**
     * Check to see if the Ellipse contains all four points of the given Rectangle object.
     * @param ellipse The Ellipse to check.
     * @param rect The Rectangle object to check if it's within the Ellipse or not.
     */
    static ContainsRect(ellipse: Phaser.Geom.Ellipse, rect: Phaser.Geom.Rectangle | object): boolean;

    /**
     * Copies the `x`, `y`, `width` and `height` properties from the `source` Ellipse
     * into the given `dest` Ellipse, then returns the `dest` Ellipse.
     * @param source The source Ellipse to copy the values from.
     * @param dest The destination Ellipse to copy the values to.
     */
    static CopyFrom<O extends Phaser.Geom.Ellipse>(source: Phaser.Geom.Ellipse, dest: O): O;

    /**
     * The geometry constant type of this object: `GEOM_CONST.ELLIPSE`.
     * Used for fast type comparisons.
     */
    readonly type: number;

    /**
     * The x position of the center of the ellipse.
     */
    x: number;

    /**
     * The y position of the center of the ellipse.
     */
    y: number;

    /**
     * The width of the ellipse.
     */
    width: number;

    /**
     * The height of the ellipse.
     */
    height: number;

    /**
     * Check to see if the Ellipse contains the given x / y coordinates.
     * @param x The x coordinate to check within the ellipse.
     * @param y The y coordinate to check within the ellipse.
     */
    contains(x: number, y: number): boolean;

    /**
     * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse
     * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
     * at 180 degrees around the circle.
     * @param position A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the ellipse.
     * @param out An object to store the return values in. If not given a Point object will be created.
     */
    getPoint<O extends Phaser.Geom.Point>(position: number, out?: O): O;

    /**
     * Returns an array of Point objects containing the coordinates of the points around the circumference of the Ellipse,
     * based on the given quantity or stepRate values.
     * @param quantity The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
     * @param stepRate Sets the quantity by getting the circumference of the ellipse and dividing it by the stepRate.
     * @param output An array to insert the points in to. If not provided a new array will be created.
     */
    getPoints<O extends Phaser.Geom.Point[]>(quantity: number, stepRate?: number, output?: O): O;

    /**
     * Returns a uniformly distributed random point from anywhere within the given Ellipse.
     * @param point A Point or point-like object to set the random `x` and `y` values in.
     */
    getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

    /**
     * Sets the x, y, width and height of this ellipse.
     * @param x The x position of the center of the ellipse.
     * @param y The y position of the center of the ellipse.
     * @param width The width of the ellipse.
     * @param height The height of the ellipse.
     */
    setTo(x: number, y: number, width: number, height: number): this;

    /**
     * Sets this Ellipse to be empty with a width and height of zero.
     * Does not change its position.
     */
    setEmpty(): this;

    /**
     * Sets the position of this Ellipse.
     * @param x The x position of the center of the ellipse.
     * @param y The y position of the center of the ellipse.
     */
    setPosition(x: number, y: number): this;

    /**
     * Sets the size of this Ellipse.
     * Does not change its position.
     * @param width The width of the ellipse.
     * @param height The height of the ellipse. Default width.
     */
    setSize(width: number, height?: number): this;

    /**
     * Checks to see if the Ellipse is empty: has a width or height equal to zero.
     */
    isEmpty(): boolean;

    /**
     * Returns the minor radius of the ellipse. Also known as the Semi Minor Axis.
     */
    getMinorRadius(): number;

    /**
     * Returns the major radius of the ellipse. Also known as the Semi Major Axis.
     */
    getMajorRadius(): number;

    /**
     * The left position of the Ellipse.
     */
    left: number;

    /**
     * The right position of the Ellipse.
     */
    right: number;

    /**
     * The top position of the Ellipse.
     */
    top: number;

    /**
     * The bottom position of the Ellipse.
     */
    bottom: number;

    /**
     * Compares the `x`, `y`, `width` and `height` properties of the two given Ellipses.
     * Returns `true` if they all match, otherwise returns `false`.
     * @param ellipse The first Ellipse to compare.
     * @param toCompare The second Ellipse to compare.
     */
    static Equals(ellipse: Phaser.Geom.Ellipse, toCompare: Phaser.Geom.Ellipse): boolean;

    /**
     * Returns the bounds of the Ellipse object.
     * @param ellipse The Ellipse to get the bounds from.
     * @param out A Rectangle, or rectangle-like object, to store the ellipse bounds in. If not given a new Rectangle will be created.
     */
    static GetBounds<O extends Phaser.Geom.Rectangle>(ellipse: Phaser.Geom.Ellipse, out?: O): O;

    /**
     * Returns a Point object containing the coordinates of a point on the circumference of the Ellipse
     * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
     * at 180 degrees around the circle.
     * @param ellipse The Ellipse to get the circumference point on.
     * @param position A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the ellipse.
     * @param out An object to store the return values in. If not given a Point object will be created.
     */
    static GetPoint<O extends Phaser.Geom.Point>(ellipse: Phaser.Geom.Ellipse, position: number, out?: O): O;

    /**
     * Returns an array of Point objects containing the coordinates of the points around the circumference of the Ellipse,
     * based on the given quantity or stepRate values.
     * @param ellipse The Ellipse to get the points from.
     * @param quantity The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
     * @param stepRate Sets the quantity by getting the circumference of the ellipse and dividing it by the stepRate.
     * @param out An array to insert the points in to. If not provided a new array will be created.
     */
    static GetPoints<O extends Phaser.Geom.Point[]>(ellipse: Phaser.Geom.Ellipse, quantity: number, stepRate?: number, out?: O): O;

    /**
     * Offsets the Ellipse by the values given.
     * @param ellipse The Ellipse to be offset (translated.)
     * @param x The amount to horizontally offset the Ellipse by.
     * @param y The amount to vertically offset the Ellipse by.
     */
    static Offset<O extends Phaser.Geom.Ellipse>(ellipse: O, x: number, y: number): O;

    /**
     * Offsets the Ellipse by the values given in the `x` and `y` properties of the Point object.
     * @param ellipse The Ellipse to be offset (translated.)
     * @param point The Point object containing the values to offset the Ellipse by.
     */
    static OffsetPoint<O extends Phaser.Geom.Ellipse>(ellipse: O, point: Phaser.Geom.Point | object): O;

    /**
     * Returns a uniformly distributed random point from anywhere within the given Ellipse.
     * @param ellipse The Ellipse to get a random point from.
     * @param out A Point or point-like object to set the random `x` and `y` values in.
     */
    static Random<O extends Phaser.Geom.Point>(ellipse: Phaser.Geom.Ellipse, out?: O): O;

  }

  namespace Intersects {
    /**
     * Checks if two Circles intersect.
     * @param circleA The first Circle to check for intersection.
     * @param circleB The second Circle to check for intersection.
     */
    function CircleToCircle(circleA: Phaser.Geom.Circle, circleB: Phaser.Geom.Circle): boolean;

    /**
     * Checks for intersection between a circle and a rectangle.
     * @param circle The circle to be checked.
     * @param rect The rectangle to be checked.
     */
    function CircleToRectangle(circle: Phaser.Geom.Circle, rect: Phaser.Geom.Rectangle): boolean;

    /**
     * Checks if two Circles intersect and returns the intersection points as a Point object array.
     * @param circleA The first Circle to check for intersection.
     * @param circleB The second Circle to check for intersection.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetCircleToCircle(circleA: Phaser.Geom.Circle, circleB: Phaser.Geom.Circle, out?: any[]): any[];

    /**
     * Checks for intersection between a circle and a rectangle,
     * and returns the intersection points as a Point object array.
     * @param circle The circle to be checked.
     * @param rect The rectangle to be checked.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetCircleToRectangle(circle: Phaser.Geom.Circle, rect: Phaser.Geom.Rectangle, out?: any[]): any[];

    /**
     * Checks for intersection between the line segment and circle,
     * and returns the intersection points as a Point object array.
     * @param line The line segment to check.
     * @param circle The circle to check against the line.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetLineToCircle(line: Phaser.Geom.Line, circle: Phaser.Geom.Circle, out?: any[]): any[];

    /**
     * Checks for intersection between the two line segments and returns the intersection point as a Vector3,
     * or `null` if the lines are parallel, or do not intersect.
     *
     * The `z` property of the Vector3 contains the intersection distance, which can be used to find
     * the closest intersecting point from a group of line segments.
     * @param line1 The first line segment to check.
     * @param line2 The second line segment to check.
     * @param out A Vector3 to store the intersection results in.
     */
    function GetLineToLine(line1: Phaser.Geom.Line, line2: Phaser.Geom.Line, out?: Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Checks for the closest point of intersection between a line segment and an array of points, where each pair
     * of points are converted to line segments for the intersection tests.
     *
     * If no intersection is found, this function returns `null`.
     *
     * If intersection was found, a Vector3 is returned with the following properties:
     *
     * The `x` and `y` components contain the point of the intersection.
     * The `z` component contains the closest distance.
     * @param line The line segment to check.
     * @param points An array of points to check.
     * @param out A Vector3 to store the intersection results in.
     */
    function GetLineToPoints(line: Phaser.Geom.Line, points: Phaser.Math.Vector2[] | Phaser.Geom.Point[], out?: Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Checks for the closest point of intersection between a line segment and an array of polygons.
     *
     * If no intersection is found, this function returns `null`.
     *
     * If intersection was found, a Vector4 is returned with the following properties:
     *
     * The `x` and `y` components contain the point of the intersection.
     * The `z` component contains the closest distance.
     * The `w` component contains the index of the polygon, in the given array, that triggered the intersection.
     * @param line The line segment to check.
     * @param polygons A single polygon, or array of polygons, to check.
     * @param out A Vector4 to store the intersection results in.
     */
    function GetLineToPolygon(line: Phaser.Geom.Line, polygons: Phaser.Geom.Polygon | Phaser.Geom.Polygon[], out?: Phaser.Math.Vector4): Phaser.Math.Vector4;

    /**
     * Checks for intersection between the Line and a Rectangle shape,
     * and returns the intersection points as a Point object array.
     * @param line The Line to check for intersection.
     * @param rect The Rectangle to check for intersection.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetLineToRectangle(line: Phaser.Geom.Line, rect: Phaser.Geom.Rectangle | object, out?: any[]): any[];

    /**
     * Projects rays out from the given point to each line segment of the polygons.
     *
     * If the rays intersect with the polygons, the points of intersection are returned in an array.
     *
     * If no intersections are found, the returned array will be empty.
     *
     * Each Vector4 intersection result has the following properties:
     *
     * The `x` and `y` components contain the point of the intersection.
     * The `z` component contains the angle of intersection.
     * The `w` component contains the index of the polygon, in the given array, that triggered the intersection.
     * @param x The x coordinate to project the rays from.
     * @param y The y coordinate to project the rays from.
     * @param polygons A single polygon, or array of polygons, to check against the rays.
     */
    function GetRaysFromPointToPolygon(x: number, y: number, polygons: Phaser.Geom.Polygon | Phaser.Geom.Polygon[]): Phaser.Math.Vector4[];

    /**
     * Checks if two Rectangle shapes intersect and returns the area of this intersection as Rectangle object.
     *
     * If optional `output` parameter is omitted, new Rectangle object is created and returned. If there is intersection, it will contain intersection area. If there is no intersection, it wil be empty Rectangle (all values set to zero).
     *
     * If Rectangle object is passed as `output` and there is intersection, then intersection area data will be loaded into it and it will be returned. If there is no intersection, it will be returned without any change.
     * @param rectA The first Rectangle object.
     * @param rectB The second Rectangle object.
     * @param output Optional Rectangle object. If given, the intersection data will be loaded into it (in case of no intersection, it will be left unchanged). Otherwise, new Rectangle object will be created and returned with either intersection data or empty (all values set to zero), if there is no intersection.
     */
    function GetRectangleIntersection<O extends Phaser.Geom.Rectangle>(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle, output?: O): O;

    /**
     * Checks if two Rectangles intersect and returns the intersection points as a Point object array.
     *
     * A Rectangle intersects another Rectangle if any part of its bounds is within the other Rectangle's bounds. As such, the two Rectangles are considered "solid". A Rectangle with no width or no height will never intersect another Rectangle.
     * @param rectA The first Rectangle to check for intersection.
     * @param rectB The second Rectangle to check for intersection.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetRectangleToRectangle(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle, out?: any[]): any[];

    /**
     * Checks for intersection between Rectangle shape and Triangle shape,
     * and returns the intersection points as a Point object array.
     * @param rect Rectangle object to test.
     * @param triangle Triangle object to test.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetRectangleToTriangle(rect: Phaser.Geom.Rectangle, triangle: Phaser.Geom.Triangle, out?: any[]): any[];

    /**
     * Checks if a Triangle and a Circle intersect, and returns the intersection points as a Point object array.
     *
     * A Circle intersects a Triangle if its center is located within it or if any of the Triangle's sides intersect the Circle. As such, the Triangle and the Circle are considered "solid" for the intersection.
     * @param triangle The Triangle to check for intersection.
     * @param circle The Circle to check for intersection.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetTriangleToCircle(triangle: Phaser.Geom.Triangle, circle: Phaser.Geom.Circle, out?: any[]): any[];

    /**
     * Checks if a Triangle and a Line intersect, and returns the intersection points as a Point object array.
     *
     * The Line intersects the Triangle if it starts inside of it, ends inside of it, or crosses any of the Triangle's sides. Thus, the Triangle is considered "solid".
     * @param triangle The Triangle to check with.
     * @param line The Line to check with.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetTriangleToLine(triangle: Phaser.Geom.Triangle, line: Phaser.Geom.Line, out?: any[]): any[];

    /**
     * Checks if two Triangles intersect, and returns the intersection points as a Point object array.
     *
     * A Triangle intersects another Triangle if any pair of their lines intersects or if any point of one Triangle is within the other Triangle. Thus, the Triangles are considered "solid".
     * @param triangleA The first Triangle to check for intersection.
     * @param triangleB The second Triangle to check for intersection.
     * @param out An optional array in which to store the points of intersection.
     */
    function GetTriangleToTriangle(triangleA: Phaser.Geom.Triangle, triangleB: Phaser.Geom.Triangle, out?: any[]): any[];

    /**
     * Checks for intersection between the line segment and circle.
     *
     * Based on code by [Matt DesLauriers](https://github.com/mattdesl/line-circle-collision/blob/master/LICENSE.md).
     * @param line The line segment to check.
     * @param circle The circle to check against the line.
     * @param nearest An optional Point-like object. If given the closest point on the Line where the circle intersects will be stored in this object.
     */
    function LineToCircle(line: Phaser.Geom.Line, circle: Phaser.Geom.Circle, nearest?: Phaser.Geom.Point | any): boolean;

    /**
     * Checks if two Lines intersect. If the Lines are identical, they will be treated as parallel and thus non-intersecting.
     * @param line1 The first Line to check.
     * @param line2 The second Line to check.
     * @param out A Point in which to optionally store the point of intersection.
     */
    function LineToLine(line1: Phaser.Geom.Line, line2: Phaser.Geom.Line, out?: Phaser.Geom.Point): boolean;

    /**
     * Checks for intersection between the Line and a Rectangle shape, or a rectangle-like
     * object, with public `x`, `y`, `right` and `bottom` properties, such as a Sprite or Body.
     *
     * An intersection is considered valid if:
     *
     * The line starts within, or ends within, the Rectangle.
     * The line segment intersects one of the 4 rectangle edges.
     *
     * The for the purposes of this function rectangles are considered 'solid'.
     * @param line The Line to check for intersection.
     * @param rect The Rectangle to check for intersection.
     */
    function LineToRectangle(line: Phaser.Geom.Line, rect: Phaser.Geom.Rectangle | object): boolean;

    /**
     * Checks if the a Point falls between the two end-points of a Line, based on the given line thickness.
     *
     * Assumes that the line end points are circular, not square.
     * @param point The point, or point-like object to check.
     * @param line The line segment to test for intersection on.
     * @param lineThickness The line thickness. Assumes that the line end points are circular. Default 1.
     */
    function PointToLine(point: Phaser.Geom.Point | any, line: Phaser.Geom.Line, lineThickness?: number): boolean;

    /**
     * Checks if a Point is located on the given line segment.
     * @param point The Point to check for intersection.
     * @param line The line segment to check for intersection.
     */
    function PointToLineSegment(point: Phaser.Geom.Point, line: Phaser.Geom.Line): boolean;

    /**
     * Checks if two Rectangles intersect.
     *
     * A Rectangle intersects another Rectangle if any part of its bounds is within the other Rectangle's bounds.
     * As such, the two Rectangles are considered "solid".
     * A Rectangle with no width or no height will never intersect another Rectangle.
     * @param rectA The first Rectangle to check for intersection.
     * @param rectB The second Rectangle to check for intersection.
     */
    function RectangleToRectangle(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle): boolean;

    /**
     * Checks for intersection between Rectangle shape and Triangle shape.
     * @param rect Rectangle object to test.
     * @param triangle Triangle object to test.
     */
    function RectangleToTriangle(rect: Phaser.Geom.Rectangle, triangle: Phaser.Geom.Triangle): boolean;

    /**
     * Check if rectangle intersects with values.
     * @param rect The rectangle object
     * @param left The x coordinate of the left of the Rectangle.
     * @param right The x coordinate of the right of the Rectangle.
     * @param top The y coordinate of the top of the Rectangle.
     * @param bottom The y coordinate of the bottom of the Rectangle.
     * @param tolerance Tolerance allowed in the calculation, expressed in pixels. Default 0.
     */
    function RectangleToValues(rect: Phaser.Geom.Rectangle, left: number, right: number, top: number, bottom: number, tolerance?: number): boolean;

    /**
     * Checks if a Triangle and a Circle intersect.
     *
     * A Circle intersects a Triangle if its center is located within it or if any of the Triangle's sides intersect the Circle. As such, the Triangle and the Circle are considered "solid" for the intersection.
     * @param triangle The Triangle to check for intersection.
     * @param circle The Circle to check for intersection.
     */
    function TriangleToCircle(triangle: Phaser.Geom.Triangle, circle: Phaser.Geom.Circle): boolean;

    /**
     * Checks if a Triangle and a Line intersect.
     *
     * The Line intersects the Triangle if it starts inside of it, ends inside of it, or crosses any of the Triangle's sides. Thus, the Triangle is considered "solid".
     * @param triangle The Triangle to check with.
     * @param line The Line to check with.
     */
    function TriangleToLine(triangle: Phaser.Geom.Triangle, line: Phaser.Geom.Line): boolean;

    /**
     * Checks if two Triangles intersect.
     *
     * A Triangle intersects another Triangle if any pair of their lines intersects or if any point of one Triangle is within the other Triangle. Thus, the Triangles are considered "solid".
     * @param triangleA The first Triangle to check for intersection.
     * @param triangleB The second Triangle to check for intersection.
     */
    function TriangleToTriangle(triangleA: Phaser.Geom.Triangle, triangleB: Phaser.Geom.Triangle): boolean;

  }

  /**
   * Defines a Line segment, a part of a line between two endpoints.
   */
  class Line {
    /**
     *
     * @param x1 The x coordinate of the lines starting point. Default 0.
     * @param y1 The y coordinate of the lines starting point. Default 0.
     * @param x2 The x coordinate of the lines ending point. Default 0.
     * @param y2 The y coordinate of the lines ending point. Default 0.
     */
    constructor(x1?: number, y1?: number, x2?: number, y2?: number);

    /**
     * Calculate the angle of the line in radians.
     * @param line The line to calculate the angle of.
     */
    static Angle(line: Phaser.Geom.Line): number;

    /**
     * Using Bresenham's line algorithm this will return an array of all coordinates on this line.
     *
     * The `start` and `end` points are rounded before this runs as the algorithm works on integers.
     * @param line The line.
     * @param stepRate The optional step rate for the points on the line. Default 1.
     * @param results An optional array to push the resulting coordinates into.
     */
    static BresenhamPoints(line: Phaser.Geom.Line, stepRate?: number, results?: Phaser.Types.Math.Vector2Like[]): Phaser.Types.Math.Vector2Like[];

    /**
     * Center a line on the given coordinates.
     * @param line The line to center.
     * @param x The horizontal coordinate to center the line on.
     * @param y The vertical coordinate to center the line on.
     */
    static CenterOn(line: Phaser.Geom.Line, x: number, y: number): Phaser.Geom.Line;

    /**
     * Clone the given line.
     * @param source The source line to clone.
     */
    static Clone(source: Phaser.Geom.Line): Phaser.Geom.Line;

    /**
     * Copy the values of one line to a destination line.
     * @param source The source line to copy the values from.
     * @param dest The destination line to copy the values to.
     */
    static CopyFrom<O extends Phaser.Geom.Line>(source: Phaser.Geom.Line, dest: O): O;

    /**
     * Compare two lines for strict equality.
     * @param line The first line to compare.
     * @param toCompare The second line to compare.
     */
    static Equals(line: Phaser.Geom.Line, toCompare: Phaser.Geom.Line): boolean;

    /**
     * Extends the start and end points of a Line by the given amounts.
     *
     * The amounts can be positive or negative. Positive points will increase the length of the line,
     * while negative ones will decrease it.
     *
     * If no `right` value is provided it will extend the length of the line equally in both directions.
     *
     * Pass a value of zero to leave the start or end point unchanged.
     * @param line The line instance to extend.
     * @param left The amount to extend the start of the line by.
     * @param right The amount to extend the end of the line by. If not given it will be set to the `left` value.
     */
    static Extend(line: Phaser.Geom.Line, left: number, right?: number): Phaser.Geom.Line;

    /**
     * Returns an array of `quantity` Points where each point is taken from the given Line,
     * spaced out according to the ease function specified.
     *
     * ```javascript
     * const line = new Phaser.Geom.Line(100, 300, 700, 300);
     * const points = Phaser.Geom.Line.GetEasedPoints(line, 'sine.out', 32)
     * ```
     *
     * In the above example, the `points` array will contain 32 points spread-out across
     * the length of `line`, where the position of each point is determined by the `Sine.out`
     * ease function.
     *
     * You can optionally provide a collinear threshold. In this case, the resulting points
     * are checked against each other, and if they are `< collinearThreshold` distance apart,
     * they are dropped from the results. This can help avoid lots of clustered points at
     * far ends of the line with tightly-packed eases such as Quartic. Leave the value set
     * to zero to skip this check.
     *
     * Note that if you provide a collinear threshold, the resulting array may not always
     * contain `quantity` points.
     * @param line The Line object.
     * @param ease The ease to use. This can be either a string from the EaseMap, or a custom function.
     * @param quantity The number of points to return. Note that if you provide a `collinearThreshold`, the resulting array may not always contain this number of points.
     * @param collinearThreshold An optional threshold. The final array is reduced so that each point is spaced out at least this distance apart. This helps reduce clustering in noisey eases. Default 0.
     * @param easeParams An optional array of ease parameters to go with the ease.
     */
    static GetEasedPoints<O extends Phaser.Geom.Point[]>(line: Phaser.Geom.Line, ease: string | Function, quantity: number, collinearThreshold?: number, easeParams?: number[]): O;

    /**
     * Get the midpoint of the given line.
     * @param line The line to get the midpoint of.
     * @param out An optional point object to store the midpoint in.
     */
    static GetMidPoint<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, out?: O): O;

    /**
     * Get the nearest point on a line perpendicular to the given point.
     * @param line The line to get the nearest point on.
     * @param point The point to get the nearest point to.
     * @param out An optional point, or point-like object, to store the coordinates of the nearest point on the line.
     */
    static GetNearestPoint<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, point: Phaser.Geom.Point | object, out?: O): O;

    /**
     * Calculate the normal of the given line.
     *
     * The normal of a line is a vector that points perpendicular from it.
     * @param line The line to calculate the normal of.
     * @param out An optional point object to store the normal in.
     */
    static GetNormal<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, out?: O): O;

    /**
     * Get a point on a line that's a given percentage along its length.
     * @param line The line.
     * @param position A value between 0 and 1, where 0 is the start, 0.5 is the middle and 1 is the end of the line.
     * @param out An optional point, or point-like object, to store the coordinates of the point on the line.
     */
    static GetPoint<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, position: number, out?: O): O;

    /**
     * Get a number of points along a line's length.
     *
     * Provide a `quantity` to get an exact number of points along the line.
     *
     * Provide a `stepRate` to ensure a specific distance between each point on the line. Set `quantity` to `0` when
     * providing a `stepRate`.
     * @param line The line.
     * @param quantity The number of points to place on the line. Set to `0` to use `stepRate` instead.
     * @param stepRate The distance between each point on the line. When set, `quantity` is implied and should be set to `0`.
     * @param out An optional array of Points, or point-like objects, to store the coordinates of the points on the line.
     */
    static GetPoints<O extends Phaser.Geom.Point[]>(line: Phaser.Geom.Line, quantity: number, stepRate?: number, out?: O): O;

    /**
     * Get the shortest distance from a Line to the given Point.
     * @param line The line to get the distance from.
     * @param point The point to get the shortest distance to.
     */
    static GetShortestDistance<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, point: Phaser.Geom.Point | object): O;

    /**
     * Calculate the height of the given line.
     * @param line The line to calculate the height of.
     */
    static Height(line: Phaser.Geom.Line): number;

    /**
     * Calculate the length of the given line.
     * @param line The line to calculate the length of.
     */
    static Length(line: Phaser.Geom.Line): number;

    /**
     * The geometry constant type of this object: `GEOM_CONST.LINE`.
     * Used for fast type comparisons.
     */
    readonly type: number;

    /**
     * The x coordinate of the lines starting point.
     */
    x1: number;

    /**
     * The y coordinate of the lines starting point.
     */
    y1: number;

    /**
     * The x coordinate of the lines ending point.
     */
    x2: number;

    /**
     * The y coordinate of the lines ending point.
     */
    y2: number;

    /**
     * Get a point on a line that's a given percentage along its length.
     * @param position A value between 0 and 1, where 0 is the start, 0.5 is the middle and 1 is the end of the line.
     * @param output An optional point, or point-like object, to store the coordinates of the point on the line.
     */
    getPoint<O extends Phaser.Geom.Point>(position: number, output?: O): O;

    /**
     * Get a number of points along a line's length.
     *
     * Provide a `quantity` to get an exact number of points along the line.
     *
     * Provide a `stepRate` to ensure a specific distance between each point on the line. Set `quantity` to `0` when
     * providing a `stepRate`.
     * @param quantity The number of points to place on the line. Set to `0` to use `stepRate` instead.
     * @param stepRate The distance between each point on the line. When set, `quantity` is implied and should be set to `0`.
     * @param output An optional array of Points, or point-like objects, to store the coordinates of the points on the line.
     */
    getPoints<O extends Phaser.Geom.Point[]>(quantity: number, stepRate?: number, output?: O): O;

    /**
     * Get a random Point on the Line.
     * @param point An instance of a Point to be modified.
     */
    getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

    /**
     * Set new coordinates for the line endpoints.
     * @param x1 The x coordinate of the lines starting point. Default 0.
     * @param y1 The y coordinate of the lines starting point. Default 0.
     * @param x2 The x coordinate of the lines ending point. Default 0.
     * @param y2 The y coordinate of the lines ending point. Default 0.
     */
    setTo(x1?: number, y1?: number, x2?: number, y2?: number): this;

    /**
     * Returns a Vector2 object that corresponds to the start of this Line.
     * @param vec2 A Vector2 object to set the results in. If `undefined` a new Vector2 will be created.
     */
    getPointA<O extends Phaser.Math.Vector2>(vec2?: O): O;

    /**
     * Returns a Vector2 object that corresponds to the end of this Line.
     * @param vec2 A Vector2 object to set the results in. If `undefined` a new Vector2 will be created.
     */
    getPointB<O extends Phaser.Math.Vector2>(vec2?: O): O;

    /**
     * The left position of the Line.
     */
    left: number;

    /**
     * The right position of the Line.
     */
    right: number;

    /**
     * The top position of the Line.
     */
    top: number;

    /**
     * The bottom position of the Line.
     */
    bottom: number;

    /**
     * Get the angle of the normal of the given line in radians.
     * @param line The line to calculate the angle of the normal of.
     */
    static NormalAngle(line: Phaser.Geom.Line): number;

    /**
     * Returns the x component of the normal vector of the given line.
     * @param line The Line object to get the normal value from.
     */
    static NormalX(line: Phaser.Geom.Line): number;

    /**
     * The Y value of the normal of the given line.
     * The normal of a line is a vector that points perpendicular from it.
     * @param line The line to calculate the normal of.
     */
    static NormalY(line: Phaser.Geom.Line): number;

    /**
     * Offset a line by the given amount.
     * @param line The line to offset.
     * @param x The horizontal offset to add to the line.
     * @param y The vertical offset to add to the line.
     */
    static Offset<O extends Phaser.Geom.Line>(line: O, x: number, y: number): O;

    /**
     * Calculate the perpendicular slope of the given line.
     * @param line The line to calculate the perpendicular slope of.
     */
    static PerpSlope(line: Phaser.Geom.Line): number;

    /**
     * Returns a random point on a given Line.
     * @param line The Line to calculate the random Point on.
     * @param out An instance of a Point to be modified.
     */
    static Random<O extends Phaser.Geom.Point>(line: Phaser.Geom.Line, out?: O): O;

    /**
     * Calculate the reflected angle between two lines.
     *
     * This is the outgoing angle based on the angle of Line 1 and the normalAngle of Line 2.
     * @param lineA The first line.
     * @param lineB The second line.
     */
    static ReflectAngle(lineA: Phaser.Geom.Line, lineB: Phaser.Geom.Line): number;

    /**
     * Rotate a line around its midpoint by the given angle in radians.
     * @param line The line to rotate.
     * @param angle The angle of rotation in radians.
     */
    static Rotate<O extends Phaser.Geom.Line>(line: O, angle: number): O;

    /**
     * Rotate a line around a point by the given angle in radians.
     * @param line The line to rotate.
     * @param point The point to rotate the line around.
     * @param angle The angle of rotation in radians.
     */
    static RotateAroundPoint<O extends Phaser.Geom.Line>(line: O, point: Phaser.Geom.Point | object, angle: number): O;

    /**
     * Rotate a line around the given coordinates by the given angle in radians.
     * @param line The line to rotate.
     * @param x The horizontal coordinate to rotate the line around.
     * @param y The vertical coordinate to rotate the line around.
     * @param angle The angle of rotation in radians.
     */
    static RotateAroundXY<O extends Phaser.Geom.Line>(line: O, x: number, y: number, angle: number): O;

    /**
     * Set a line to a given position, angle and length.
     * @param line The line to set.
     * @param x The horizontal start position of the line.
     * @param y The vertical start position of the line.
     * @param angle The angle of the line in radians.
     * @param length The length of the line.
     */
    static SetToAngle<O extends Phaser.Geom.Line>(line: O, x: number, y: number, angle: number, length: number): O;

    /**
     * Calculate the slope of the given line.
     * @param line The line to calculate the slope of.
     */
    static Slope(line: Phaser.Geom.Line): number;

    /**
     * Calculate the width of the given line.
     * @param line The line to calculate the width of.
     */
    static Width(line: Phaser.Geom.Line): number;

  }

  namespace Mesh {
    /**
     * A Face Geometry Object.
     *
     * A Face is used by the Mesh Game Object. A Mesh consists of one, or more, faces that are
     * used to render the Mesh Game Objects in WebGL.
     *
     * A Face consists of 3 Vertex instances, for the 3 corners of the face and methods to help
     * you modify and test them.
     */
    class Face {
      /**
       *
       * @param vertex1 The first vertex of the Face.
       * @param vertex2 The second vertex of the Face.
       * @param vertex3 The third vertex of the Face.
       */
      constructor(vertex1: Phaser.Geom.Mesh.Vertex, vertex2: Phaser.Geom.Mesh.Vertex, vertex3: Phaser.Geom.Mesh.Vertex);

      /**
       * The first vertex in this Face.
       */
      vertex1: Phaser.Geom.Mesh.Vertex;

      /**
       * The second vertex in this Face.
       */
      vertex2: Phaser.Geom.Mesh.Vertex;

      /**
       * The third vertex in this Face.
       */
      vertex3: Phaser.Geom.Mesh.Vertex;

      /**
       * The bounds of this Face.
       *
       * Be sure to call the `Face.updateBounds` method _before_ using this property.
       */
      bounds: Phaser.Geom.Rectangle;

      /**
       * Calculates and returns the in-center position of this Face.
       * @param local Return the in center from the un-transformed vertex positions (`true`), or transformed? (`false`) Default true.
       */
      getInCenter(local?: boolean): Phaser.Math.Vector2;

      /**
       * Checks if the given coordinates are within this Face.
       *
       * You can optionally provide a transform matrix. If given, the Face vertices
       * will be transformed first, before being checked against the coordinates.
       * @param x The horizontal position to check.
       * @param y The vertical position to check.
       * @param calcMatrix Optional transform matrix to apply to the vertices before comparison.
       */
      contains(x: number, y: number, calcMatrix?: Phaser.GameObjects.Components.TransformMatrix): boolean;

      /**
       * Checks if the vertices in this Face are orientated counter-clockwise, or not.
       *
       * It checks the transformed position of the vertices, not the local one.
       * @param z The z-axis value to test against. Typically the `Mesh.modelPosition.z`.
       */
      isCounterClockwise(z: number): boolean;

      /**
       * Loads the data from this Vertex into the given Typed Arrays.
       * @param F32 A Float32 Array to insert the position, UV and unit data in to.
       * @param U32 A Uint32 Array to insert the color and alpha data in to.
       * @param offset The index of the array to insert this Vertex to.
       * @param textureUnit The texture unit currently in use.
       * @param tintEffect The tint effect to use.
       */
      load(F32: Float32Array, U32: Uint32Array, offset: number, textureUnit: number, tintEffect: number): number;

      /**
       * Transforms all Face vertices by the given matrix, storing the results in their `vx`, `vy` and `vz` properties.
       * @param transformMatrix The transform matrix to apply to this vertex.
       * @param width The width of the parent Mesh.
       * @param height The height of the parent Mesh.
       * @param cameraZ The z position of the MeshCamera.
       */
      transformCoordinatesLocal(transformMatrix: Phaser.Math.Matrix4, width: number, height: number, cameraZ: number): this;

      /**
       * Updates the bounds of this Face, based on the translated values of the vertices.
       *
       * Call this method prior to accessing the `Face.bounds` property.
       */
      updateBounds(): this;

      /**
       * Checks if this Face is within the view of the given Camera.
       *
       * This method is called in the `MeshWebGLRenderer` function. It performs the following tasks:
       *
       * First, the `Vertex.update` method is called on each of the vertices. This populates them
       * with the new translated values, updating their `tx`, `ty` and `ta` properties.
       *
       * Then it tests to see if this face is visible due to the alpha values, if not, it returns.
       *
       * After this, if `hideCCW` is set, it calls `isCounterClockwise` and returns if not.
       *
       * Finally, it will update the `Face.bounds` based on the newly translated vertex values
       * and return the results of an intersection test between the bounds and the camera world view
       * rectangle.
       * @param camera The Camera to check against.
       * @param hideCCW Test the counter-clockwise orientation of the verts?
       * @param z The Cameras z position, used in the CCW test.
       * @param alpha The alpha of the parent object.
       * @param a The parent transform matrix data a component.
       * @param b The parent transform matrix data b component.
       * @param c The parent transform matrix data c component.
       * @param d The parent transform matrix data d component.
       * @param e The parent transform matrix data e component.
       * @param f The parent transform matrix data f component.
       * @param roundPixels Round the vertex position or not?
       */
      isInView(camera: Phaser.Cameras.Scene2D.Camera, hideCCW: boolean, z: number, alpha: number, a: number, b: number, c: number, d: number, e: number, f: number, roundPixels: boolean): boolean;

      /**
       * Translates the vertices of this Face by the given amounts.
       *
       * The actual vertex positions are adjusted, not their transformed position.
       *
       * Therefore, this updates the vertex data directly.
       * @param x The amount to horizontally translate by.
       * @param y The amount to vertically translate by. Default 0.
       */
      translate(x: number, y?: number): this;

      /**
       * The x coordinate of this Face, based on the in center position of the Face.
       */
      x: number;

      /**
       * The y coordinate of this Face, based on the in center position of the Face.
       */
      y: number;

      /**
       * Set the alpha value of this Face.
       *
       * Each vertex is given the same value. If you need to adjust the alpha on a per-vertex basis
       * then use the `Vertex.alpha` property instead.
       *
       * When getting the alpha of this Face, it will return an average of the alpha
       * component of all three vertices.
       */
      alpha: number;

      /**
       * The depth of this Face, which is an average of the z component of all three vertices.
       *
       * The depth is calculated based on the transformed z value, not the local one.
       */
      readonly depth: number;

      /**
       * Destroys this Face and nulls the references to the vertices.
       */
      destroy(): void;

    }

    /**
     * Creates a grid of vertices based on the given configuration object and optionally adds it to a Mesh.
     *
     * The size of the grid is given in pixels. An example configuration may be:
     *
     * `{ width: 256, height: 256, widthSegments: 2, heightSegments: 2, tile: true }`
     *
     * This will create a grid 256 x 256 pixels in size, split into 2 x 2 segments, with
     * the texture tiling across the cells.
     *
     * You can split the grid into segments both vertically and horizontally. This will
     * generate two faces per grid segment as a result.
     *
     * The `tile` parameter allows you to control if the tile will repeat across the grid
     * segments, or be displayed in full.
     *
     * If adding this grid to a Mesh you can offset the grid via the `x` and `y` properties.
     *
     * UV coordinates are generated based on the given texture and frame in the config. For
     * example, no frame is given, the UVs will be in the range 0 to 1. If a frame is given,
     * such as from a texture atlas, the UVs will be generated within the range of that frame.
     * @param config A Grid configuration object.
     */
    function GenerateGridVerts(config: Phaser.Types.Geom.Mesh.GenerateGridConfig): Phaser.Types.Geom.Mesh.GenerateGridVertsResult;

    /**
     * This method will return an object containing Face and Vertex instances, generated
     * from the parsed triangulated OBJ Model data given to this function.
     *
     * The obj data should have been parsed in advance via the ParseObj function:
     *
     * ```javascript
     * var data = Phaser.Geom.Mesh.ParseObj(rawData, flipUV);
     *
     * var results = GenerateObjVerts(data);
     * ```
     *
     * Alternatively, you can parse obj files loaded via the OBJFile loader:
     *
     * ```javascript
     * preload ()
     * {
     *   this.load.obj('alien', 'assets/3d/alien.obj);
     * }
     *
     * var results = GenerateObjVerts(this.cache.obj.get('alien));
     * ```
     *
     * Make sure your 3D package has triangulated the model data prior to exporting it.
     *
     * You can use the data returned by this function to populate the vertices of a Mesh Game Object.
     *
     * You may add multiple models to a single Mesh, although they will act as one when
     * moved or rotated. You can scale the model data, should it be too small (or large) to visualize.
     * You can also offset the model via the `x`, `y` and `z` parameters.
     * @param data The parsed OBJ model data.
     * @param mesh An optional Mesh Game Object. If given, the generated Faces will be automatically added to this Mesh. Set to `null` to skip.
     * @param scale An amount to scale the model data by. Use this if the model has exported too small, or large, to see. Default 1.
     * @param x Translate the model x position by this amount. Default 0.
     * @param y Translate the model y position by this amount. Default 0.
     * @param z Translate the model z position by this amount. Default 0.
     * @param rotateX Rotate the model on the x axis by this amount, in radians. Default 0.
     * @param rotateY Rotate the model on the y axis by this amount, in radians. Default 0.
     * @param rotateZ Rotate the model on the z axis by this amount, in radians. Default 0.
     * @param zIsUp Is the z axis up (true), or is y axis up (false)? Default true.
     */
    function GenerateObjVerts(data: Phaser.Types.Geom.Mesh.OBJData, mesh?: Phaser.GameObjects.Mesh, scale?: number, x?: number, y?: number, z?: number, rotateX?: number, rotateY?: number, rotateZ?: number, zIsUp?: boolean): Phaser.Types.Geom.Mesh.GenerateVertsResult;

    /**
     * Generates a set of Face and Vertex objects by parsing the given data.
     *
     * This method will take vertex data in one of two formats, based on the `containsZ` parameter.
     *
     * If your vertex data are `x`, `y` pairs, then `containsZ` should be `false` (this is the default)
     *
     * If your vertex data is groups of `x`, `y` and `z` values, then the `containsZ` parameter must be true.
     *
     * The `uvs` parameter is a numeric array consisting of `u` and `v` pairs.
     *
     * The `normals` parameter is a numeric array consisting of `x`, `y` vertex normal values and, if `containsZ` is true, `z` values as well.
     *
     * The `indicies` parameter is an optional array that, if given, is an indexed list of vertices to be added.
     *
     * The `colors` parameter is an optional array, or single value, that if given sets the color of each vertex created.
     *
     * The `alphas` parameter is an optional array, or single value, that if given sets the alpha of each vertex created.
     *
     * When providing indexed data it is assumed that _all_ of the arrays are indexed, not just the vertices.
     *
     * The following example will create a 256 x 256 sized quad using an index array:
     *
     * ```javascript
     * const vertices = [
     *   -128, 128,
     *   128, 128,
     *   -128, -128,
     *   128, -128
     * ];
     *
     * const uvs = [
     *   0, 1,
     *   1, 1,
     *   0, 0,
     *   1, 0
     * ];
     *
     * const indices = [ 0, 2, 1, 2, 3, 1 ];
     *
     * GenerateVerts(vertices, uvs, indicies);
     * ```
     *
     * If the data is not indexed, it's assumed that the arrays all contain sequential data.
     * @param vertices The vertices array. Either `xy` pairs, or `xyz` if the `containsZ` parameter is `true`.
     * @param uvs The UVs pairs array.
     * @param indicies Optional vertex indicies array. If you don't have one, pass `null` or an empty array.
     * @param containsZ Does the vertices data include a `z` component? Default false.
     * @param normals Optional vertex normals array. If you don't have one, pass `null` or an empty array.
     * @param colors An array of colors, one per vertex, or a single color value applied to all vertices. Default 0xffffff.
     * @param alphas An array of alpha values, one per vertex, or a single alpha value applied to all vertices. Default 1.
     */
    function GenerateVerts(vertices: number[], uvs: number[], indicies?: number[], containsZ?: boolean, normals?: number[], colors?: number | number[], alphas?: number | number[]): Phaser.Types.Geom.Mesh.GenerateVertsResult;

    /**
     * Parses a Wavefront OBJ File, extracting the models from it and returning them in an array.
     *
     * The model data *must* be triangulated for a Mesh Game Object to be able to render it.
     * @param data The OBJ File data as a raw string.
     * @param flipUV Flip the UV coordinates? Default true.
     */
    function ParseObj(data: string, flipUV?: boolean): Phaser.Types.Geom.Mesh.OBJData;

    /**
     * Takes a Wavefront Material file and extracts the diffuse reflectivity of the named
     * materials, converts them to integer color values and returns them.
     *
     * This is used internally by the `addOBJ` and `addModel` methods, but is exposed for
     * public consumption as well.
     *
     * Note this only works with diffuse values, specified in the `Kd r g b` format, where
     * `g` and `b` are optional, but `r` is required. It does not support spectral rfl files,
     * or any other material statement (such as `Ka` or `Ks`)
     * @param mtl The OBJ MTL file as a raw string, i.e. loaded via `this.load.text`.
     */
    function ParseObjMaterial(mtl: string): object;

    /**
     * Rotates the vertices of a Face to the given angle.
     *
     * The actual vertex positions are adjusted, not their transformed positions.
     *
     * Therefore, this updates the vertex data directly.
     * @param face The Face to rotate.
     * @param angle The angle to rotate to, in radians.
     * @param cx An optional center of rotation. If not given, the Face in-center is used.
     * @param cy An optional center of rotation. If not given, the Face in-center is used.
     */
    function RotateFace(face: Phaser.Geom.Mesh.Face, angle: number, cx?: number, cy?: number): void;

    /**
     * A Vertex Geometry Object.
     *
     * This class consists of all the information required for a single vertex within a Face Geometry Object.
     *
     * Faces, and thus Vertex objects, are used by the Mesh Game Object in order to render objects in WebGL.
     */
    class Vertex extends Phaser.Math.Vector3 {
      /**
       *
       * @param x The x position of the vertex.
       * @param y The y position of the vertex.
       * @param z The z position of the vertex.
       * @param u The UV u coordinate of the vertex.
       * @param v The UV v coordinate of the vertex.
       * @param color The color value of the vertex. Default 0xffffff.
       * @param alpha The alpha value of the vertex. Default 1.
       * @param nx The x normal value of the vertex. Default 0.
       * @param ny The y normal value of the vertex. Default 0.
       * @param nz The z normal value of the vertex. Default 0.
       */
      constructor(x: number, y: number, z: number, u: number, v: number, color?: number, alpha?: number, nx?: number, ny?: number, nz?: number);

      /**
       * The projected x coordinate of this vertex.
       */
      vx: number;

      /**
       * The projected y coordinate of this vertex.
       */
      vy: number;

      /**
       * The projected z coordinate of this vertex.
       */
      vz: number;

      /**
       * The projected x coordinate of this vertex.
       */
      nx: number;

      /**
       * The projected y coordinate of this vertex.
       */
      ny: number;

      /**
       * The projected z coordinate of this vertex.
       */
      nz: number;

      /**
       * UV u coordinate of this vertex.
       */
      u: number;

      /**
       * UV v coordinate of this vertex.
       */
      v: number;

      /**
       * The color value of this vertex.
       */
      color: number;

      /**
       * The alpha value of this vertex.
       */
      alpha: number;

      /**
       * The translated x coordinate of this vertex.
       */
      tx: number;

      /**
       * The translated y coordinate of this vertex.
       */
      ty: number;

      /**
       * The translated alpha value of this vertex.
       */
      ta: number;

      /**
       * Sets the U and V properties.
       * @param u The UV u coordinate of the vertex.
       * @param v The UV v coordinate of the vertex.
       */
      setUVs(u: number, v: number): this;

      /**
       * Transforms this vertex by the given matrix, storing the results in `vx`, `vy` and `vz`.
       * @param transformMatrix The transform matrix to apply to this vertex.
       * @param width The width of the parent Mesh.
       * @param height The height of the parent Mesh.
       * @param cameraZ The z position of the MeshCamera.
       */
      transformCoordinatesLocal(transformMatrix: Phaser.Math.Matrix4, width: number, height: number, cameraZ: number): void;

      /**
       * Updates this Vertex based on the given transform.
       * @param a The parent transform matrix data a component.
       * @param b The parent transform matrix data b component.
       * @param c The parent transform matrix data c component.
       * @param d The parent transform matrix data d component.
       * @param e The parent transform matrix data e component.
       * @param f The parent transform matrix data f component.
       * @param roundPixels Round the vertex position or not?
       * @param alpha The alpha of the parent object.
       */
      update(a: number, b: number, c: number, d: number, e: number, f: number, roundPixels: boolean, alpha: number): this;

      /**
       * Loads the data from this Vertex into the given Typed Arrays.
       * @param F32 A Float32 Array to insert the position, UV and unit data in to.
       * @param U32 A Uint32 Array to insert the color and alpha data in to.
       * @param offset The index of the array to insert this Vertex to.
       * @param textureUnit The texture unit currently in use.
       * @param tintEffect The tint effect to use.
       */
      load(F32: Float32Array, U32: Uint32Array, offset: number, textureUnit: number, tintEffect: number): number;

    }

  }

  /**
   * Defines a Point in 2D space, with an x and y component.
   */
  class Point {
    /**
     *
     * @param x The x coordinate of this Point. Default 0.
     * @param y The y coordinate of this Point. Default x.
     */
    constructor(x?: number, y?: number);

    /**
     * Apply `Math.ceil()` to each coordinate of the given Point.
     * @param point The Point to ceil.
     */
    static Ceil<O extends Phaser.Geom.Point>(point: O): O;

    /**
     * Clone the given Point.
     * @param source The source Point to clone.
     */
    static Clone(source: Phaser.Geom.Point): Phaser.Geom.Point;

    /**
     * Copy the values of one Point to a destination Point.
     * @param source The source Point to copy the values from.
     * @param dest The destination Point to copy the values to.
     */
    static CopyFrom<O extends Phaser.Geom.Point>(source: Phaser.Geom.Point, dest: O): O;

    /**
     * A comparison of two `Point` objects to see if they are equal.
     * @param point The original `Point` to compare against.
     * @param toCompare The second `Point` to compare.
     */
    static Equals(point: Phaser.Geom.Point, toCompare: Phaser.Geom.Point): boolean;

    /**
     * Apply `Math.ceil()` to each coordinate of the given Point.
     * @param point The Point to floor.
     */
    static Floor<O extends Phaser.Geom.Point>(point: O): O;

    /**
     * Get the centroid or geometric center of a plane figure (the arithmetic mean position of all the points in the figure).
     * Informally, it is the point at which a cutout of the shape could be perfectly balanced on the tip of a pin.
     * @param points An array of Vector2Like objects to get the geometric center of.
     * @param out A Point object to store the output coordinates in. If not given, a new Point instance is created.
     */
    static GetCentroid<O extends Phaser.Geom.Point>(points: Phaser.Types.Math.Vector2Like[], out?: O): O;

    /**
     * Calculate the magnitude of the point, which equivalent to the length of the line from the origin to this point.
     * @param point The point to calculate the magnitude for
     */
    static GetMagnitude(point: Phaser.Geom.Point): number;

    /**
     * Calculates the square of magnitude of given point.(Can be used for fast magnitude calculation of point)
     * @param point Returns square of the magnitude/length of given point.
     */
    static GetMagnitudeSq(point: Phaser.Geom.Point): number;

    /**
     * Calculates the Axis Aligned Bounding Box (or aabb) from an array of points.
     * @param points An array of Vector2Like objects to get the AABB from.
     * @param out A Rectangle object to store the results in. If not given, a new Rectangle instance is created.
     */
    static GetRectangleFromPoints<O extends Phaser.Geom.Rectangle>(points: Phaser.Types.Math.Vector2Like[], out?: O): O;

    /**
     * Returns the linear interpolation point between the two given points, based on `t`.
     * @param pointA The starting `Point` for the interpolation.
     * @param pointB The target `Point` for the interpolation.
     * @param t The amount to interpolate between the two points. Generally, a value between 0 (returns the starting `Point`) and 1 (returns the target `Point`). If omitted, 0 is used. Default 0.
     * @param out An optional `Point` object whose `x` and `y` values will be set to the result of the interpolation (can also be any object with `x` and `y` properties). If omitted, a new `Point` created and returned.
     */
    static Interpolate<O extends Phaser.Geom.Point>(pointA: Phaser.Geom.Point, pointB: Phaser.Geom.Point, t?: number, out?: O): O;

    /**
     * Swaps the X and the Y coordinate of a point.
     * @param point The Point to modify.
     */
    static Invert<O extends Phaser.Geom.Point>(point: O): O;

    /**
     * Inverts a Point's coordinates.
     * @param point The Point to invert.
     * @param out The Point to return the inverted coordinates in.
     */
    static Negative<O extends Phaser.Geom.Point>(point: Phaser.Geom.Point, out?: O): O;

    /**
     * The geometry constant type of this object: `GEOM_CONST.POINT`.
     * Used for fast type comparisons.
     */
    readonly type: number;

    /**
     * The x coordinate of this Point.
     */
    x: number;

    /**
     * The y coordinate of this Point.
     */
    y: number;

    /**
     * Set the x and y coordinates of the point to the given values.
     * @param x The x coordinate of this Point. Default 0.
     * @param y The y coordinate of this Point. Default x.
     */
    setTo(x?: number, y?: number): this;

    /**
     * Calculates the vector projection of `pointA` onto the nonzero `pointB`. This is the
     * orthogonal projection of `pointA` onto a straight line parallel to `pointB`.
     * @param pointA Point A, to be projected onto Point B.
     * @param pointB Point B, to have Point A projected upon it.
     * @param out The Point object to store the position in. If not given, a new Point instance is created.
     */
    static Project<O extends Phaser.Geom.Point>(pointA: Phaser.Geom.Point, pointB: Phaser.Geom.Point, out?: O): O;

    /**
     * Calculates the vector projection of `pointA` onto the nonzero `pointB`. This is the
     * orthogonal projection of `pointA` onto a straight line paralle to `pointB`.
     * @param pointA Point A, to be projected onto Point B. Must be a normalized point with a magnitude of 1.
     * @param pointB Point B, to have Point A projected upon it.
     * @param out The Point object to store the position in. If not given, a new Point instance is created.
     */
    static ProjectUnit<O extends Phaser.Geom.Point>(pointA: Phaser.Geom.Point, pointB: Phaser.Geom.Point, out?: O): O;

    /**
     * Changes the magnitude (length) of a two-dimensional vector without changing its direction.
     * @param point The Point to treat as the end point of the vector.
     * @param magnitude The new magnitude of the vector.
     */
    static SetMagnitude<O extends Phaser.Geom.Point>(point: O, magnitude: number): O;

  }

  /**
   * A Polygon object
   *
   * The polygon is a closed shape consists of a series of connected straight lines defined by list of ordered points.
   * Several formats are supported to define the list of points, check the setTo method for details.
   * This is a geometry object allowing you to define and inspect the shape.
   * It is not a Game Object, in that you cannot add it to the display list, and it has no texture.
   * To render a Polygon you should look at the capabilities of the Graphics class.
   */
  class Polygon {
    /**
     *
     * @param points List of points defining the perimeter of this Polygon. Several formats are supported:
     * - A string containing paired x y values separated by a single space: `'40 0 40 20 100 20 100 80 40 80 40 100 0 50'`
     * - An array of Point objects: `[new Phaser.Point(x1, y1), ...]`
     * - An array of objects with public x y properties: `[obj1, obj2, ...]`
     * - An array of paired numbers that represent point coordinates: `[x1,y1, x2,y2, ...]`
     * - An array of arrays with two elements representing x/y coordinates: `[[x1, y1], [x2, y2], ...]`
     */
    constructor(points?: string | number[] | Phaser.Types.Math.Vector2Like[]);

    /**
     * Create a new polygon which is a copy of the specified polygon
     * @param polygon The polygon to create a clone of
     */
    static Clone(polygon: Phaser.Geom.Polygon): Phaser.Geom.Polygon;

    /**
     * Checks if a point is within the bounds of a Polygon.
     * @param polygon The Polygon to check against.
     * @param x The X coordinate of the point to check.
     * @param y The Y coordinate of the point to check.
     */
    static Contains(polygon: Phaser.Geom.Polygon, x: number, y: number): boolean;

    /**
     * Checks the given Point again the Polygon to see if the Point lays within its vertices.
     * @param polygon The Polygon to check.
     * @param point The Point to check if it's within the Polygon.
     */
    static ContainsPoint(polygon: Phaser.Geom.Polygon, point: Phaser.Geom.Point): boolean;

    /**
     * This module implements a modified ear slicing algorithm, optimized by z-order curve hashing and extended to
     * handle holes, twisted polygons, degeneracies and self-intersections in a way that doesn't guarantee correctness
     * of triangulation, but attempts to always produce acceptable results for practical data.
     *
     * Example:
     *
     * ```javascript
     * const triangles = Phaser.Geom.Polygon.Earcut([10,0, 0,50, 60,60, 70,10]); // returns [1,0,3, 3,2,1]
     * ```
     *
     * Each group of three vertex indices in the resulting array forms a triangle.
     *
     * ```javascript
     * // triangulating a polygon with a hole
     * earcut([0,0, 100,0, 100,100, 0,100,  20,20, 80,20, 80,80, 20,80], [4]);
     * // [3,0,4, 5,4,0, 3,4,7, 5,0,1, 2,3,7, 6,5,1, 2,7,6, 6,1,2]
     *
     * // triangulating a polygon with 3d coords
     * earcut([10,0,1, 0,50,2, 60,60,3, 70,10,4], null, 3);
     * // [1,0,3, 3,2,1]
     * ```
     *
     * If you pass a single vertex as a hole, Earcut treats it as a Steiner point.
     *
     * If your input is a multi-dimensional array (e.g. GeoJSON Polygon), you can convert it to the format
     * expected by Earcut with `Phaser.Geom.Polygon.Earcut.flatten`:
     *
     * ```javascript
     * var data = earcut.flatten(geojson.geometry.coordinates);
     * var triangles = earcut(data.vertices, data.holes, data.dimensions);
     * ```
     *
     * After getting a triangulation, you can verify its correctness with `Phaser.Geom.Polygon.Earcut.deviation`:
     *
     * ```javascript
     * var deviation = earcut.deviation(vertices, holes, dimensions, triangles);
     * ```
     * Returns the relative difference between the total area of triangles and the area of the input polygon.
     * 0 means the triangulation is fully correct.
     *
     * For more information see https://github.com/mapbox/earcut
     * @param data A flat array of vertex coordinate, like [x0,y0, x1,y1, x2,y2, ...]
     * @param holeIndices An array of hole indices if any (e.g. [5, 8] for a 12-vertex input would mean one hole with vertices 5–7 and another with 8–11).
     * @param dimensions The number of coordinates per vertex in the input array (2 by default). Default 2.
     */
    static Earcut(data: number[], holeIndices?: number[], dimensions?: number): number[];

    /**
     * Calculates the bounding AABB rectangle of a polygon.
     * @param polygon The polygon that should be calculated.
     * @param out The rectangle or object that has x, y, width, and height properties to store the result. Optional.
     */
    static GetAABB<O extends Phaser.Geom.Rectangle>(polygon: Phaser.Geom.Polygon, out?: O): O;

    /**
     * Stores all of the points of a Polygon into a flat array of numbers following the sequence [ x,y, x,y, x,y ],
     * i.e. each point of the Polygon, in the order it's defined, corresponds to two elements of the resultant
     * array for the point's X and Y coordinate.
     * @param polygon The Polygon whose points to export.
     * @param output An array to which the points' coordinates should be appended.
     */
    static GetNumberArray<O extends number[]>(polygon: Phaser.Geom.Polygon, output?: O): O;

    /**
     * Returns an array of Point objects containing the coordinates of the points around the perimeter of the Polygon,
     * based on the given quantity or stepRate values.
     * @param polygon The Polygon to get the points from.
     * @param quantity The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
     * @param stepRate Sets the quantity by getting the perimeter of the Polygon and dividing it by the stepRate.
     * @param output An array to insert the points in to. If not provided a new array will be created.
     */
    static GetPoints(polygon: Phaser.Geom.Polygon, quantity: number, stepRate?: number, output?: any[]): Phaser.Geom.Point[];

    /**
     * Returns the perimeter of the given Polygon.
     * @param polygon The Polygon to get the perimeter of.
     */
    static Perimeter(polygon: Phaser.Geom.Polygon): number;

    /**
     * The geometry constant type of this object: `GEOM_CONST.POLYGON`.
     * Used for fast type comparisons.
     */
    readonly type: number;

    /**
     * The area of this Polygon.
     */
    area: number;

    /**
     * An array of number pair objects that make up this polygon. I.e. [ {x,y}, {x,y}, {x,y} ]
     */
    points: Phaser.Geom.Point[];

    /**
     * Check to see if the Polygon contains the given x / y coordinates.
     * @param x The x coordinate to check within the polygon.
     * @param y The y coordinate to check within the polygon.
     */
    contains(x: number, y: number): boolean;

    /**
     * Sets this Polygon to the given points.
     *
     * The points can be set from a variety of formats:
     *
     * - A string containing paired values separated by a single space: `'40 0 40 20 100 20 100 80 40 80 40 100 0 50'`
     * - An array of Point objects: `[new Phaser.Point(x1, y1), ...]`
     * - An array of objects with public x/y properties: `[obj1, obj2, ...]`
     * - An array of paired numbers that represent point coordinates: `[x1,y1, x2,y2, ...]`
     * - An array of arrays with two elements representing x/y coordinates: `[[x1, y1], [x2, y2], ...]`
     *
     * `setTo` may also be called without any arguments to remove all points.
     * @param points Points defining the perimeter of this polygon. Please check function description above for the different supported formats.
     */
    setTo(points?: string | number[] | Phaser.Types.Math.Vector2Like[]): this;

    /**
     * Calculates the area of the Polygon. This is available in the property Polygon.area
     */
    calculateArea(): number;

    /**
     * Returns an array of Point objects containing the coordinates of the points around the perimeter of the Polygon,
     * based on the given quantity or stepRate values.
     * @param quantity The amount of points to return. If a falsey value the quantity will be derived from the `stepRate` instead.
     * @param stepRate Sets the quantity by getting the perimeter of the Polygon and dividing it by the stepRate.
     * @param output An array to insert the points in to. If not provided a new array will be created.
     */
    getPoints<O extends Phaser.Geom.Point[]>(quantity: number, stepRate?: number, output?: O): O;

    /**
     * Reverses the order of the points of a Polygon.
     * @param polygon The Polygon to modify.
     */
    static Reverse<O extends Phaser.Geom.Polygon>(polygon: O): O;

    /**
     * Takes a Polygon object and simplifies the points by running them through a combination of
     * Douglas-Peucker and Radial Distance algorithms. Simplification dramatically reduces the number of
     * points in a polygon while retaining its shape, giving a huge performance boost when processing
     * it and also reducing visual noise.
     * @param polygon The polygon to be simplified. The polygon will be modified in-place and returned.
     * @param tolerance Affects the amount of simplification (in the same metric as the point coordinates). Default 1.
     * @param highestQuality Excludes distance-based preprocessing step which leads to highest quality simplification but runs ~10-20 times slower. Default false.
     */
    static Simplify<O extends Phaser.Geom.Polygon>(polygon: O, tolerance?: number, highestQuality?: boolean): O;

    /**
     * Takes a Polygon object and applies Chaikin's smoothing algorithm on its points.
     * @param polygon The polygon to be smoothed. The polygon will be modified in-place and returned.
     */
    static Smooth<O extends Phaser.Geom.Polygon>(polygon: O): O;

    /**
     * Tranlates the points of the given Polygon.
     * @param polygon The Polygon to modify.
     * @param x The amount to horizontally translate the points by.
     * @param y The amount to vertically translate the points by.
     */
    static Translate<O extends Phaser.Geom.Polygon>(polygon: O, x: number, y: number): O;

  }

  /**
   * Encapsulates a 2D rectangle defined by its corner point in the top-left and its extends in x (width) and y (height)
   */
  class Rectangle {
    /**
     *
     * @param x The X coordinate of the top left corner of the Rectangle. Default 0.
     * @param y The Y coordinate of the top left corner of the Rectangle. Default 0.
     * @param width The width of the Rectangle. Default 0.
     * @param height The height of the Rectangle. Default 0.
     */
    constructor(x?: number, y?: number, width?: number, height?: number);

    /**
     * Calculates the area of the given Rectangle object.
     * @param rect The rectangle to calculate the area of.
     */
    static Area(rect: Phaser.Geom.Rectangle): number;

    /**
     * Rounds a Rectangle's position up to the smallest integer greater than or equal to each current coordinate.
     * @param rect The Rectangle to adjust.
     */
    static Ceil<O extends Phaser.Geom.Rectangle>(rect: O): O;

    /**
     * Rounds a Rectangle's position and size up to the smallest integer greater than or equal to each respective value.
     * @param rect The Rectangle to modify.
     */
    static CeilAll<O extends Phaser.Geom.Rectangle>(rect: O): O;

    /**
     * Moves the top-left corner of a Rectangle so that its center is at the given coordinates.
     * @param rect The Rectangle to be centered.
     * @param x The X coordinate of the Rectangle's center.
     * @param y The Y coordinate of the Rectangle's center.
     */
    static CenterOn<O extends Phaser.Geom.Rectangle>(rect: O, x: number, y: number): O;

    /**
     * Creates a new Rectangle which is identical to the given one.
     * @param source The Rectangle to clone.
     */
    static Clone(source: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle;

    /**
     * Checks if a given point is inside a Rectangle's bounds.
     * @param rect The Rectangle to check.
     * @param x The X coordinate of the point to check.
     * @param y The Y coordinate of the point to check.
     */
    static Contains(rect: Phaser.Geom.Rectangle, x: number, y: number): boolean;

    /**
     * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
     * @param rect The Rectangle object.
     * @param point The point object to be checked. Can be a Phaser Point object or any object with x and y values.
     */
    static ContainsPoint(rect: Phaser.Geom.Rectangle, point: Phaser.Geom.Point): boolean;

    /**
     * Tests if one rectangle fully contains another.
     * @param rectA The first rectangle.
     * @param rectB The second rectangle.
     */
    static ContainsRect(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle): boolean;

    /**
     * Copy the values of one Rectangle to a destination Rectangle.
     * @param source The source Rectangle to copy the values from.
     * @param dest The destination Rectangle to copy the values to.
     */
    static CopyFrom<O extends Phaser.Geom.Rectangle>(source: Phaser.Geom.Rectangle, dest: O): O;

    /**
     * Create an array of points for each corner of a Rectangle
     * If an array is specified, each point object will be added to the end of the array, otherwise a new array will be created.
     * @param rect The Rectangle object to be decomposed.
     * @param out If provided, each point will be added to this array.
     */
    static Decompose(rect: Phaser.Geom.Rectangle, out?: any[]): any[];

    /**
     * Compares the `x`, `y`, `width` and `height` properties of two rectangles.
     * @param rect Rectangle A
     * @param toCompare Rectangle B
     */
    static Equals(rect: Phaser.Geom.Rectangle, toCompare: Phaser.Geom.Rectangle): boolean;

    /**
     * Adjusts the target rectangle, changing its width, height and position,
     * so that it fits inside the area of the source rectangle, while maintaining its original
     * aspect ratio.
     *
     * Unlike the `FitOutside` function, there may be some space inside the source area not covered.
     * @param target The target rectangle to adjust.
     * @param source The source rectangle to envelop the target in.
     */
    static FitInside<O extends Phaser.Geom.Rectangle>(target: O, source: Phaser.Geom.Rectangle): O;

    /**
     * Adjusts the target rectangle, changing its width, height and position,
     * so that it fully covers the area of the source rectangle, while maintaining its original
     * aspect ratio.
     *
     * Unlike the `FitInside` function, the target rectangle may extend further out than the source.
     * @param target The target rectangle to adjust.
     * @param source The source rectangle to envelope the target in.
     */
    static FitOutside<O extends Phaser.Geom.Rectangle>(target: O, source: Phaser.Geom.Rectangle): O;

    /**
     * Rounds down (floors) the top left X and Y coordinates of the given Rectangle to the largest integer less than or equal to them
     * @param rect The rectangle to floor the top left X and Y coordinates of
     */
    static Floor<O extends Phaser.Geom.Rectangle>(rect: O): O;

    /**
     * Rounds a Rectangle's position and size down to the largest integer less than or equal to each current coordinate or dimension.
     * @param rect The Rectangle to adjust.
     */
    static FloorAll<O extends Phaser.Geom.Rectangle>(rect: O): O;

    /**
     * Constructs new Rectangle or repositions and resizes an existing Rectangle so that all of the given points are on or within its bounds.
     * @param points An array of points (either arrays with two elements corresponding to the X and Y coordinate or an object with public `x` and `y` properties) which should be surrounded by the Rectangle.
     * @param out Optional Rectangle to adjust.
     */
    static FromPoints<O extends Phaser.Geom.Rectangle>(points: any[], out?: O): O;

    /**
     * Create the smallest Rectangle containing two coordinate pairs.
     * @param x1 The X coordinate of the first point.
     * @param y1 The Y coordinate of the first point.
     * @param x2 The X coordinate of the second point.
     * @param y2 The Y coordinate of the second point.
     * @param out Optional Rectangle to adjust.
     */
    static FromXY<O extends Phaser.Geom.Rectangle>(x1: number, y1: number, x2: number, y2: number, out?: O): O;

    /**
     * Calculates the width/height ratio of a rectangle.
     * @param rect The rectangle.
     */
    static GetAspectRatio(rect: Phaser.Geom.Rectangle): number;

    /**
     * Returns the center of a Rectangle as a Point.
     * @param rect The Rectangle to get the center of.
     * @param out Optional point-like object to update with the center coordinates.
     */
    static GetCenter<O extends Phaser.Geom.Point>(rect: Phaser.Geom.Rectangle, out?: O): O;

    /**
     * Calculates the coordinates of a point at a certain `position` on the Rectangle's perimeter.
     *
     * The `position` is a fraction between 0 and 1 which defines how far into the perimeter the point is.
     *
     * A value of 0 or 1 returns the point at the top left corner of the rectangle, while a value of 0.5 returns the point at the bottom right corner of the rectangle. Values between 0 and 0.5 are on the top or the right side and values between 0.5 and 1 are on the bottom or the left side.
     * @param rectangle The Rectangle to get the perimeter point from.
     * @param position The normalized distance into the Rectangle's perimeter to return.
     * @param out An object to update with the `x` and `y` coordinates of the point.
     */
    static GetPoint<O extends Phaser.Geom.Point>(rectangle: Phaser.Geom.Rectangle, position: number, out?: O): O;

    /**
     * Return an array of points from the perimeter of the rectangle, each spaced out based on the quantity or step required.
     * @param rectangle The Rectangle object to get the points from.
     * @param step Step between points. Used to calculate the number of points to return when quantity is falsey. Ignored if quantity is positive.
     * @param quantity The number of evenly spaced points from the rectangles perimeter to return. If falsey, step param will be used to calculate the number of points.
     * @param out An optional array to store the points in.
     */
    static GetPoints<O extends Phaser.Geom.Point[]>(rectangle: Phaser.Geom.Rectangle, step: number, quantity: number, out?: O): O;

    /**
     * Returns the size of the Rectangle, expressed as a Point object.
     * With the value of the `width` as the `x` property and the `height` as the `y` property.
     * @param rect The Rectangle to get the size from.
     * @param out The Point object to store the size in. If not given, a new Point instance is created.
     */
    static GetSize<O extends Phaser.Geom.Point>(rect: Phaser.Geom.Rectangle, out?: O): O;

    /**
     * Increases the size of a Rectangle by a specified amount.
     *
     * The center of the Rectangle stays the same. The amounts are added to each side, so the actual increase in width or height is two times bigger than the respective argument.
     * @param rect The Rectangle to inflate.
     * @param x How many pixels the left and the right side should be moved by horizontally.
     * @param y How many pixels the top and the bottom side should be moved by vertically.
     */
    static Inflate<O extends Phaser.Geom.Rectangle>(rect: O, x: number, y: number): O;

    /**
     * Takes two Rectangles and first checks to see if they intersect.
     * If they intersect it will return the area of intersection in the `out` Rectangle.
     * If they do not intersect, the `out` Rectangle will have a width and height of zero.
     * @param rectA The first Rectangle to get the intersection from.
     * @param rectB The second Rectangle to get the intersection from.
     * @param out A Rectangle to store the intersection results in.
     */
    static Intersection<O extends Phaser.Geom.Rectangle>(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle, out?: Phaser.Geom.Rectangle): O;

    /**
     * Returns an array of points from the perimeter of the Rectangle, where each point is spaced out based
     * on either the `step` value, or the `quantity`.
     * @param rect The Rectangle to get the perimeter points from.
     * @param step The distance between each point of the perimeter. Set to `null` if you wish to use the `quantity` parameter instead.
     * @param quantity The total number of points to return. The step is then calculated based on the length of the Rectangle, divided by this value.
     * @param out An array in which the perimeter points will be stored. If not given, a new array instance is created.
     */
    static MarchingAnts<O extends Phaser.Geom.Point[]>(rect: Phaser.Geom.Rectangle, step?: number, quantity?: number, out?: O): O;

    /**
     * Merges a Rectangle with a list of points by repositioning and/or resizing it such that all points are located on or within its bounds.
     * @param target The Rectangle which should be merged.
     * @param points An array of Points (or any object with public `x` and `y` properties) which should be merged with the Rectangle.
     */
    static MergePoints<O extends Phaser.Geom.Rectangle>(target: O, points: Phaser.Geom.Point[]): O;

    /**
     * Merges the source rectangle into the target rectangle and returns the target.
     * Neither rectangle should have a negative width or height.
     * @param target Target rectangle. Will be modified to include source rectangle.
     * @param source Rectangle that will be merged into target rectangle.
     */
    static MergeRect<O extends Phaser.Geom.Rectangle>(target: O, source: Phaser.Geom.Rectangle): O;

    /**
     * Merges a Rectangle with a point by repositioning and/or resizing it so that the point is on or within its bounds.
     * @param target The Rectangle which should be merged and modified.
     * @param x The X coordinate of the point which should be merged.
     * @param y The Y coordinate of the point which should be merged.
     */
    static MergeXY<O extends Phaser.Geom.Rectangle>(target: O, x: number, y: number): O;

    /**
     * Nudges (translates) the top left corner of a Rectangle by a given offset.
     * @param rect The Rectangle to adjust.
     * @param x The distance to move the Rectangle horizontally.
     * @param y The distance to move the Rectangle vertically.
     */
    static Offset<O extends Phaser.Geom.Rectangle>(rect: O, x: number, y: number): O;

    /**
     * Nudges (translates) the top-left corner of a Rectangle by the coordinates of a point (translation vector).
     * @param rect The Rectangle to adjust.
     * @param point The point whose coordinates should be used as an offset.
     */
    static OffsetPoint<O extends Phaser.Geom.Rectangle>(rect: O, point: Phaser.Geom.Point | Phaser.Math.Vector2): O;

    /**
     * Checks if two Rectangles overlap. If a Rectangle is within another Rectangle, the two will be considered overlapping. Thus, the Rectangles are treated as "solid".
     * @param rectA The first Rectangle to check.
     * @param rectB The second Rectangle to check.
     */
    static Overlaps(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle): boolean;

    /**
     * Calculates the perimeter of a Rectangle.
     * @param rect The Rectangle to use.
     */
    static Perimeter(rect: Phaser.Geom.Rectangle): number;

    /**
     * Returns a Point from the perimeter of a Rectangle based on the given angle.
     * @param rectangle The Rectangle to get the perimeter point from.
     * @param angle The angle of the point, in degrees.
     * @param out The Point object to store the position in. If not given, a new Point instance is created.
     */
    static PerimeterPoint<O extends Phaser.Geom.Point>(rectangle: Phaser.Geom.Rectangle, angle: number, out?: O): O;

    /**
     * Returns a random point within a Rectangle.
     * @param rect The Rectangle to return a point from.
     * @param out The object to update with the point's coordinates.
     */
    static Random<O extends Phaser.Geom.Point>(rect: Phaser.Geom.Rectangle, out: O): O;

    /**
     * Calculates a random point that lies within the `outer` Rectangle, but outside of the `inner` Rectangle.
     * The inner Rectangle must be fully contained within the outer rectangle.
     * @param outer The outer Rectangle to get the random point within.
     * @param inner The inner Rectangle to exclude from the returned point.
     * @param out A Point, or Point-like object to store the result in. If not specified, a new Point will be created.
     */
    static RandomOutside<O extends Phaser.Geom.Point>(outer: Phaser.Geom.Rectangle, inner: Phaser.Geom.Rectangle, out?: O): O;

    /**
     * The geometry constant type of this object: `GEOM_CONST.RECTANGLE`.
     * Used for fast type comparisons.
     */
    readonly type: number;

    /**
     * The X coordinate of the top left corner of the Rectangle.
     */
    x: number;

    /**
     * The Y coordinate of the top left corner of the Rectangle.
     */
    y: number;

    /**
     * The width of the Rectangle, i.e. the distance between its left side (defined by `x`) and its right side.
     */
    width: number;

    /**
     * The height of the Rectangle, i.e. the distance between its top side (defined by `y`) and its bottom side.
     */
    height: number;

    /**
     * Checks if the given point is inside the Rectangle's bounds.
     * @param x The X coordinate of the point to check.
     * @param y The Y coordinate of the point to check.
     */
    contains(x: number, y: number): boolean;

    /**
     * Calculates the coordinates of a point at a certain `position` on the Rectangle's perimeter.
     *
     * The `position` is a fraction between 0 and 1 which defines how far into the perimeter the point is.
     *
     * A value of 0 or 1 returns the point at the top left corner of the rectangle, while a value of 0.5 returns the point at the bottom right corner of the rectangle. Values between 0 and 0.5 are on the top or the right side and values between 0.5 and 1 are on the bottom or the left side.
     * @param position The normalized distance into the Rectangle's perimeter to return.
     * @param output An object to update with the `x` and `y` coordinates of the point.
     */
    getPoint<O extends Phaser.Geom.Point>(position: number, output?: O): O;

    /**
     * Returns an array of points from the perimeter of the Rectangle, each spaced out based on the quantity or step required.
     * @param quantity The number of points to return. Set to `false` or 0 to return an arbitrary number of points (`perimeter / stepRate`) evenly spaced around the Rectangle based on the `stepRate`.
     * @param stepRate If `quantity` is 0, determines the normalized distance between each returned point.
     * @param output An array to which to append the points.
     */
    getPoints<O extends Phaser.Geom.Point[]>(quantity: number, stepRate?: number, output?: O): O;

    /**
     * Returns a random point within the Rectangle's bounds.
     * @param point The object in which to store the `x` and `y` coordinates of the point.
     */
    getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

    /**
     * Sets the position, width, and height of the Rectangle.
     * @param x The X coordinate of the top left corner of the Rectangle.
     * @param y The Y coordinate of the top left corner of the Rectangle.
     * @param width The width of the Rectangle.
     * @param height The height of the Rectangle.
     */
    setTo(x: number, y: number, width: number, height: number): this;

    /**
     * Resets the position, width, and height of the Rectangle to 0.
     */
    setEmpty(): this;

    /**
     * Sets the position of the Rectangle.
     * @param x The X coordinate of the top left corner of the Rectangle.
     * @param y The Y coordinate of the top left corner of the Rectangle. Default x.
     */
    setPosition(x: number, y?: number): this;

    /**
     * Sets the width and height of the Rectangle.
     * @param width The width to set the Rectangle to.
     * @param height The height to set the Rectangle to. Default width.
     */
    setSize(width: number, height?: number): this;

    /**
     * Determines if the Rectangle is empty. A Rectangle is empty if its width or height is less than or equal to 0.
     */
    isEmpty(): boolean;

    /**
     * Returns a Line object that corresponds to the top of this Rectangle.
     * @param line A Line object to set the results in. If `undefined` a new Line will be created.
     */
    getLineA<O extends Phaser.Geom.Line>(line?: O): O;

    /**
     * Returns a Line object that corresponds to the right of this Rectangle.
     * @param line A Line object to set the results in. If `undefined` a new Line will be created.
     */
    getLineB<O extends Phaser.Geom.Line>(line?: O): O;

    /**
     * Returns a Line object that corresponds to the bottom of this Rectangle.
     * @param line A Line object to set the results in. If `undefined` a new Line will be created.
     */
    getLineC<O extends Phaser.Geom.Line>(line?: O): O;

    /**
     * Returns a Line object that corresponds to the left of this Rectangle.
     * @param line A Line object to set the results in. If `undefined` a new Line will be created.
     */
    getLineD<O extends Phaser.Geom.Line>(line?: O): O;

    /**
     * The x coordinate of the left of the Rectangle.
     * Changing the left property of a Rectangle object has no effect on the y and height properties. However it does affect the width property, whereas changing the x value does not affect the width property.
     */
    left: number;

    /**
     * The sum of the x and width properties.
     * Changing the right property of a Rectangle object has no effect on the x, y and height properties, however it does affect the width property.
     */
    right: number;

    /**
     * The y coordinate of the top of the Rectangle. Changing the top property of a Rectangle object has no effect on the x and width properties.
     * However it does affect the height property, whereas changing the y value does not affect the height property.
     */
    top: number;

    /**
     * The sum of the y and height properties.
     * Changing the bottom property of a Rectangle object has no effect on the x, y and width properties, but does change the height property.
     */
    bottom: number;

    /**
     * The x coordinate of the center of the Rectangle.
     */
    centerX: number;

    /**
     * The y coordinate of the center of the Rectangle.
     */
    centerY: number;

    /**
     * Determines if the two objects (either Rectangles or Rectangle-like) have the same width and height values under strict equality.
     * @param rect The first Rectangle object.
     * @param toCompare The second Rectangle object.
     */
    static SameDimensions(rect: Phaser.Geom.Rectangle, toCompare: Phaser.Geom.Rectangle): boolean;

    /**
     * Scales the width and height of this Rectangle by the given amounts.
     * @param rect The `Rectangle` object that will be scaled by the specified amount(s).
     * @param x The factor by which to scale the rectangle horizontally.
     * @param y The amount by which to scale the rectangle vertically. If this is not specified, the rectangle will be scaled by the factor `x` in both directions.
     */
    static Scale<O extends Phaser.Geom.Rectangle>(rect: O, x: number, y: number): O;

    /**
     * Creates a new Rectangle or repositions and/or resizes an existing Rectangle so that it encompasses the two given Rectangles, i.e. calculates their union.
     * @param rectA The first Rectangle to use.
     * @param rectB The second Rectangle to use.
     * @param out The Rectangle to store the union in.
     */
    static Union<O extends Phaser.Geom.Rectangle>(rectA: Phaser.Geom.Rectangle, rectB: Phaser.Geom.Rectangle, out?: O): O;

  }

  /**
   * A triangle is a plane created by connecting three points.
   * The first two arguments specify the first point, the middle two arguments
   * specify the second point, and the last two arguments specify the third point.
   */
  class Triangle {
    /**
     *
     * @param x1 `x` coordinate of the first point. Default 0.
     * @param y1 `y` coordinate of the first point. Default 0.
     * @param x2 `x` coordinate of the second point. Default 0.
     * @param y2 `y` coordinate of the second point. Default 0.
     * @param x3 `x` coordinate of the third point. Default 0.
     * @param y3 `y` coordinate of the third point. Default 0.
     */
    constructor(x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number);

    /**
     * Returns the area of a Triangle.
     * @param triangle The Triangle to use.
     */
    static Area(triangle: Phaser.Geom.Triangle): number;

    /**
     * Builds an equilateral triangle. In the equilateral triangle, all the sides are the same length (congruent) and all the angles are the same size (congruent).
     * The x/y specifies the top-middle of the triangle (x1/y1) and length is the length of each side.
     * @param x x coordinate of the top point of the triangle.
     * @param y y coordinate of the top point of the triangle.
     * @param length Length of each side of the triangle.
     */
    static BuildEquilateral(x: number, y: number, length: number): Phaser.Geom.Triangle;

    /**
     * Takes an array of vertex coordinates, and optionally an array of hole indices, then returns an array
     * of Triangle instances, where the given vertices have been decomposed into a series of triangles.
     * @param data A flat array of vertex coordinates like [x0,y0, x1,y1, x2,y2, ...]
     * @param holes An array of hole indices if any (e.g. [5, 8] for a 12-vertex input would mean one hole with vertices 5–7 and another with 8–11). Default null.
     * @param scaleX Horizontal scale factor to multiply the resulting points by. Default 1.
     * @param scaleY Vertical scale factor to multiply the resulting points by. Default 1.
     * @param out An array to store the resulting Triangle instances in. If not provided, a new array is created.
     */
    static BuildFromPolygon<O extends Phaser.Geom.Triangle[]>(data: any[], holes?: any[], scaleX?: number, scaleY?: number, out?: O): O;

    /**
     * Builds a right triangle, i.e. one which has a 90-degree angle and two acute angles.
     * @param x The X coordinate of the right angle, which will also be the first X coordinate of the constructed Triangle.
     * @param y The Y coordinate of the right angle, which will also be the first Y coordinate of the constructed Triangle.
     * @param width The length of the side which is to the left or to the right of the right angle.
     * @param height The length of the side which is above or below the right angle.
     */
    static BuildRight(x: number, y: number, width: number, height: number): Phaser.Geom.Triangle;

    /**
     * Positions the Triangle so that it is centered on the given coordinates.
     * @param triangle The triangle to be positioned.
     * @param x The horizontal coordinate to center on.
     * @param y The vertical coordinate to center on.
     * @param centerFunc The function used to center the triangle. Defaults to Centroid centering.
     */
    static CenterOn<O extends Phaser.Geom.Triangle>(triangle: O, x: number, y: number, centerFunc?: CenterFunction): O;

    /**
     * Calculates the position of a Triangle's centroid, which is also its center of mass (center of gravity).
     *
     * The centroid is the point in a Triangle at which its three medians (the lines drawn from the vertices to the bisectors of the opposite sides) meet. It divides each one in a 2:1 ratio.
     * @param triangle The Triangle to use.
     * @param out An object to store the coordinates in.
     */
    static Centroid<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, out?: O): O;

    /**
     * Computes the circumcentre of a triangle. The circumcentre is the centre of
     * the circumcircle, the smallest circle which encloses the triangle. It is also
     * the common intersection point of the perpendicular bisectors of the sides of
     * the triangle, and is the only point which has equal distance to all three
     * vertices of the triangle.
     * @param triangle The Triangle to get the circumcenter of.
     * @param out The Vector2 object to store the position in. If not given, a new Vector2 instance is created.
     */
    static CircumCenter<O extends Phaser.Math.Vector2>(triangle: Phaser.Geom.Triangle, out?: O): O;

    /**
     * Finds the circumscribed circle (circumcircle) of a Triangle object. The circumcircle is the circle which touches all of the triangle's vertices.
     * @param triangle The Triangle to use as input.
     * @param out An optional Circle to store the result in.
     */
    static CircumCircle<O extends Phaser.Geom.Circle>(triangle: Phaser.Geom.Triangle, out?: O): O;

    /**
     * Clones a Triangle object.
     * @param source The Triangle to clone.
     */
    static Clone(source: Phaser.Geom.Triangle): Phaser.Geom.Triangle;

    /**
     * Checks if a point (as a pair of coordinates) is inside a Triangle's bounds.
     * @param triangle The Triangle to check.
     * @param x The X coordinate of the point to check.
     * @param y The Y coordinate of the point to check.
     */
    static Contains(triangle: Phaser.Geom.Triangle, x: number, y: number): boolean;

    /**
     * Filters an array of point-like objects to only those contained within a triangle.
     * If `returnFirst` is true, will return an array containing only the first point in the provided array that is within the triangle (or an empty array if there are no such points).
     * @param triangle The triangle that the points are being checked in.
     * @param points An array of point-like objects (objects that have an `x` and `y` property)
     * @param returnFirst If `true`, return an array containing only the first point found that is within the triangle. Default false.
     * @param out If provided, the points that are within the triangle will be appended to this array instead of being added to a new array. If `returnFirst` is true, only the first point found within the triangle will be appended. This array will also be returned by this function.
     */
    static ContainsArray(triangle: Phaser.Geom.Triangle, points: Phaser.Geom.Point[], returnFirst?: boolean, out?: any[]): Phaser.Geom.Point[];

    /**
     * Tests if a triangle contains a point.
     * @param triangle The triangle.
     * @param point The point to test, or any point-like object with public `x` and `y` properties.
     */
    static ContainsPoint(triangle: Phaser.Geom.Triangle, point: Phaser.Geom.Point | Phaser.Math.Vector2 | any): boolean;

    /**
     * Copy the values of one Triangle to a destination Triangle.
     * @param source The source Triangle to copy the values from.
     * @param dest The destination Triangle to copy the values to.
     */
    static CopyFrom<O extends Phaser.Geom.Triangle>(source: Phaser.Geom.Triangle, dest: O): O;

    /**
     * Decomposes a Triangle into an array of its points.
     * @param triangle The Triangle to decompose.
     * @param out An array to store the points into.
     */
    static Decompose(triangle: Phaser.Geom.Triangle, out?: any[]): any[];

    /**
     * Returns true if two triangles have the same coordinates.
     * @param triangle The first triangle to check.
     * @param toCompare The second triangle to check.
     */
    static Equals(triangle: Phaser.Geom.Triangle, toCompare: Phaser.Geom.Triangle): boolean;

    /**
     * Returns a Point from around the perimeter of a Triangle.
     * @param triangle The Triangle to get the point on its perimeter from.
     * @param position The position along the perimeter of the triangle. A value between 0 and 1.
     * @param out An option Point, or Point-like object to store the value in. If not given a new Point will be created.
     */
    static GetPoint<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, position: number, out?: O): O;

    /**
     * Returns an array of evenly spaced points on the perimeter of a Triangle.
     * @param triangle The Triangle to get the points from.
     * @param quantity The number of evenly spaced points to return. Set to 0 to return an arbitrary number of points based on the `stepRate`.
     * @param stepRate If `quantity` is 0, the distance between each returned point.
     * @param out An array to which the points should be appended.
     */
    static GetPoints<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, quantity: number, stepRate: number, out?: O): O;

    /**
     * Calculates the position of the incenter of a Triangle object. This is the point where its three angle bisectors meet and it's also the center of the incircle, which is the circle inscribed in the triangle.
     * @param triangle The Triangle to find the incenter of.
     * @param out An optional Point in which to store the coordinates.
     */
    static InCenter<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, out?: O): O;

    /**
     * Moves each point (vertex) of a Triangle by a given offset, thus moving the entire Triangle by that offset.
     * @param triangle The Triangle to move.
     * @param x The horizontal offset (distance) by which to move each point. Can be positive or negative.
     * @param y The vertical offset (distance) by which to move each point. Can be positive or negative.
     */
    static Offset<O extends Phaser.Geom.Triangle>(triangle: O, x: number, y: number): O;

    /**
     * Gets the length of the perimeter of the given triangle.
     * Calculated by adding together the length of each of the three sides.
     * @param triangle The Triangle to get the length from.
     */
    static Perimeter(triangle: Phaser.Geom.Triangle): number;

    /**
     * Returns a random Point from within the area of the given Triangle.
     * @param triangle The Triangle to get a random point from.
     * @param out The Point object to store the position in. If not given, a new Point instance is created.
     */
    static Random<O extends Phaser.Geom.Point>(triangle: Phaser.Geom.Triangle, out?: O): O;

    /**
     * Rotates a Triangle about its incenter, which is the point at which its three angle bisectors meet.
     * @param triangle The Triangle to rotate.
     * @param angle The angle by which to rotate the Triangle, in radians.
     */
    static Rotate<O extends Phaser.Geom.Triangle>(triangle: O, angle: number): O;

    /**
     * Rotates a Triangle at a certain angle about a given Point or object with public `x` and `y` properties.
     * @param triangle The Triangle to rotate.
     * @param point The Point to rotate the Triangle about.
     * @param angle The angle by which to rotate the Triangle, in radians.
     */
    static RotateAroundPoint<O extends Phaser.Geom.Triangle>(triangle: O, point: Phaser.Geom.Point, angle: number): O;

    /**
     * Rotates an entire Triangle at a given angle about a specific point.
     * @param triangle The Triangle to rotate.
     * @param x The X coordinate of the point to rotate the Triangle about.
     * @param y The Y coordinate of the point to rotate the Triangle about.
     * @param angle The angle by which to rotate the Triangle, in radians.
     */
    static RotateAroundXY<O extends Phaser.Geom.Triangle>(triangle: O, x: number, y: number, angle: number): O;

    /**
     * The geometry constant type of this object: `GEOM_CONST.TRIANGLE`.
     * Used for fast type comparisons.
     */
    readonly type: number;

    /**
     * `x` coordinate of the first point.
     */
    x1: number;

    /**
     * `y` coordinate of the first point.
     */
    y1: number;

    /**
     * `x` coordinate of the second point.
     */
    x2: number;

    /**
     * `y` coordinate of the second point.
     */
    y2: number;

    /**
     * `x` coordinate of the third point.
     */
    x3: number;

    /**
     * `y` coordinate of the third point.
     */
    y3: number;

    /**
     * Checks whether a given points lies within the triangle.
     * @param x The x coordinate of the point to check.
     * @param y The y coordinate of the point to check.
     */
    contains(x: number, y: number): boolean;

    /**
     * Returns a specific point  on the triangle.
     * @param position Position as float within `0` and `1`. `0` equals the first point.
     * @param output Optional Point, or point-like object, that the calculated point will be written to.
     */
    getPoint<O extends Phaser.Geom.Point>(position: number, output?: O): O;

    /**
     * Calculates a list of evenly distributed points on the triangle. It is either possible to pass an amount of points to be generated (`quantity`) or the distance between two points (`stepRate`).
     * @param quantity Number of points to be generated. Can be falsey when `stepRate` should be used. All points have the same distance along the triangle.
     * @param stepRate Distance between two points. Will only be used when `quantity` is falsey.
     * @param output Optional Array for writing the calculated points into. Otherwise a new array will be created.
     */
    getPoints<O extends Phaser.Geom.Point[]>(quantity: number, stepRate?: number, output?: O): O;

    /**
     * Returns a random point along the triangle.
     * @param point Optional `Point` that should be modified. Otherwise a new one will be created.
     */
    getRandomPoint<O extends Phaser.Geom.Point>(point?: O): O;

    /**
     * Sets all three points of the triangle. Leaving out any coordinate sets it to be `0`.
     * @param x1 `x` coordinate of the first point. Default 0.
     * @param y1 `y` coordinate of the first point. Default 0.
     * @param x2 `x` coordinate of the second point. Default 0.
     * @param y2 `y` coordinate of the second point. Default 0.
     * @param x3 `x` coordinate of the third point. Default 0.
     * @param y3 `y` coordinate of the third point. Default 0.
     */
    setTo(x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number): this;

    /**
     * Returns a Line object that corresponds to Line A of this Triangle.
     * @param line A Line object to set the results in. If `undefined` a new Line will be created.
     */
    getLineA<O extends Phaser.Geom.Line>(line?: O): O;

    /**
     * Returns a Line object that corresponds to Line B of this Triangle.
     * @param line A Line object to set the results in. If `undefined` a new Line will be created.
     */
    getLineB<O extends Phaser.Geom.Line>(line?: O): O;

    /**
     * Returns a Line object that corresponds to Line C of this Triangle.
     * @param line A Line object to set the results in. If `undefined` a new Line will be created.
     */
    getLineC<O extends Phaser.Geom.Line>(line?: O): O;

    /**
     * Left most X coordinate of the triangle. Setting it moves the triangle on the X axis accordingly.
     */
    left: number;

    /**
     * Right most X coordinate of the triangle. Setting it moves the triangle on the X axis accordingly.
     */
    right: number;

    /**
     * Top most Y coordinate of the triangle. Setting it moves the triangle on the Y axis accordingly.
     */
    top: number;

    /**
     * Bottom most Y coordinate of the triangle. Setting it moves the triangle on the Y axis accordingly.
     */
    bottom: number;

  }

}