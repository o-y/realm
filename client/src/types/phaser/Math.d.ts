namespace Phaser.Math {
  namespace Angle {
    /**
     * Find the angle of a segment from (x1, y1) -> (x2, y2).
     * @param x1 The x coordinate of the first point.
     * @param y1 The y coordinate of the first point.
     * @param x2 The x coordinate of the second point.
     * @param y2 The y coordinate of the second point.
     */
    function Between(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y).
     *
     * Calculates the angle of the vector from the first point to the second point.
     * @param point1 The first point.
     * @param point2 The second point.
     */
    function BetweenPoints(point1: Phaser.Types.Math.Vector2Like, point2: Phaser.Types.Math.Vector2Like): number;

    /**
     * Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y).
     *
     * The difference between this method and {@link Phaser.Math.Angle.BetweenPoints} is that this assumes the y coordinate
     * travels down the screen.
     * @param point1 The first point.
     * @param point2 The second point.
     */
    function BetweenPointsY(point1: Phaser.Types.Math.Vector2Like, point2: Phaser.Types.Math.Vector2Like): number;

    /**
     * Find the angle of a segment from (x1, y1) -> (x2, y2).
     *
     * The difference between this method and {@link Phaser.Math.Angle.Between} is that this assumes the y coordinate
     * travels down the screen.
     * @param x1 The x coordinate of the first point.
     * @param y1 The y coordinate of the first point.
     * @param x2 The x coordinate of the second point.
     * @param y2 The y coordinate of the second point.
     */
    function BetweenY(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Takes an angle in Phasers default clockwise format and converts it so that
     * 0 is North, 90 is West, 180 is South and 270 is East,
     * therefore running counter-clockwise instead of clockwise.
     *
     * You can pass in the angle from a Game Object using:
     *
     * ```javascript
     * var converted = CounterClockwise(gameobject.rotation);
     * ```
     *
     * All values for this function are in radians.
     * @param angle The angle to convert, in radians.
     */
    function CounterClockwise(angle: number): number;

    /**
     * Normalize an angle to the [0, 2pi] range.
     * @param angle The angle to normalize, in radians.
     */
    function Normalize(angle: number): number;

    /**
     * Returns a random angle in the range [-pi, pi].
     */
    function Random(): number;

    /**
     * Returns a random angle in the range [-180, 180].
     */
    function RandomDegrees(): number;

    /**
     * Reverse the given angle.
     * @param angle The angle to reverse, in radians.
     */
    function Reverse(angle: number): number;

    /**
     * Rotates `currentAngle` towards `targetAngle`, taking the shortest rotation distance. The `lerp` argument is the amount to rotate by in this call.
     * @param currentAngle The current angle, in radians.
     * @param targetAngle The target angle to rotate to, in radians.
     * @param lerp The lerp value to add to the current angle. Default 0.05.
     */
    function RotateTo(currentAngle: number, targetAngle: number, lerp?: number): number;

    /**
     * Gets the shortest angle between `angle1` and `angle2`.
     *
     * Both angles must be in the range -180 to 180, which is the same clamped
     * range that `sprite.angle` uses, so you can pass in two sprite angles to
     * this method and get the shortest angle back between the two of them.
     *
     * The angle returned will be in the same range. If the returned angle is
     * greater than 0 then it's a counter-clockwise rotation, if < 0 then it's
     * a clockwise rotation.
     * @param angle1 The first angle in the range -180 to 180.
     * @param angle2 The second angle in the range -180 to 180.
     */
    function ShortestBetween(angle1: number, angle2: number): number;

    /**
     * Wrap an angle.
     *
     * Wraps the angle to a value in the range of -PI to PI.
     * @param angle The angle to wrap, in radians.
     */
    function Wrap(angle: number): number;

    /**
     * Wrap an angle in degrees.
     *
     * Wraps the angle to a value in the range of -180 to 180.
     * @param angle The angle to wrap, in degrees.
     */
    function WrapDegrees(angle: number): number;

  }

  /**
   * Calculate the mean average of the given values.
   * @param values The values to average.
   */
  function Average(values: number[]): number;

  /**
   * Calculates the Bernstein basis from the three factorial coefficients.
   * @param n The first value.
   * @param i The second value.
   */
  function Bernstein(n: number, i: number): number;

  /**
   * Compute a random integer between the `min` and `max` values, inclusive.
   * @param min The minimum value.
   * @param max The maximum value.
   */
  function Between(min: number, max: number): number;

  /**
   * Calculates a Catmull-Rom value from the given points, based on an alpha of 0.5.
   * @param t The amount to interpolate by.
   * @param p0 The first control point.
   * @param p1 The second control point.
   * @param p2 The third control point.
   * @param p3 The fourth control point.
   */
  function CatmullRom(t: number, p0: number, p1: number, p2: number, p3: number): number;

  /**
   * Ceils to some place comparative to a `base`, default is 10 for decimal place.
   *
   * The `place` is represented by the power applied to `base` to get that place.
   * @param value The value to round.
   * @param place The place to round to. Default 0.
   * @param base The base to round in. Default is 10 for decimal. Default 10.
   */
  function CeilTo(value: number, place?: number, base?: number): number;

  /**
   * Force a value within the boundaries by clamping it to the range `min`, `max`.
   * @param value The value to be clamped.
   * @param min The minimum bounds.
   * @param max The maximum bounds.
   */
  function Clamp(value: number, min: number, max: number): number;

  /**
   * The value of PI * 2.
   */
  var PI2: number;

  /**
   * The value of PI * 0.5.
   */
  var TAU: number;

  /**
   * An epsilon value (1.0e-6)
   */
  var EPSILON: number;

  /**
   * For converting degrees to radians (PI / 180)
   */
  var DEG_TO_RAD: number;

  /**
   * For converting radians to degrees (180 / PI)
   */
  var RAD_TO_DEG: number;

  /**
   * An instance of the Random Number Generator.
   * This is not set until the Game boots.
   */
  var RND: Phaser.Math.RandomDataGenerator;

  /**
   * The minimum safe integer this browser supports.
   * We use a const for backward compatibility with Internet Explorer.
   */
  var MIN_SAFE_INTEGER: number;

  /**
   * The maximum safe integer this browser supports.
   * We use a const for backward compatibility with Internet Explorer.
   */
  var MAX_SAFE_INTEGER: number;

  /**
   * Convert the given angle from degrees, to the equivalent angle in radians.
   * @param degrees The angle (in degrees) to convert to radians.
   */
  function DegToRad(degrees: number): number;

  /**
   * Calculates the positive difference of two given numbers.
   * @param a The first number in the calculation.
   * @param b The second number in the calculation.
   */
  function Difference(a: number, b: number): number;

  namespace Distance {
    /**
     * Calculate the distance between two sets of coordinates (points).
     * @param x1 The x coordinate of the first point.
     * @param y1 The y coordinate of the first point.
     * @param x2 The x coordinate of the second point.
     * @param y2 The y coordinate of the second point.
     */
    function Between(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Calculate the distance between two points.
     * @param a The first point.
     * @param b The second point.
     */
    function BetweenPoints(a: Phaser.Types.Math.Vector2Like, b: Phaser.Types.Math.Vector2Like): number;

    /**
     * Calculate the squared distance between two points.
     * @param a The first point.
     * @param b The second point.
     */
    function BetweenPointsSquared(a: Phaser.Types.Math.Vector2Like, b: Phaser.Types.Math.Vector2Like): number;

    /**
     * Calculate the Chebyshev distance between two sets of coordinates (points).
     *
     * Chebyshev distance (or chessboard distance) is the maximum of the horizontal and vertical distances.
     * It's the effective distance when movement can be horizontal, vertical, or diagonal.
     * @param x1 The x coordinate of the first point.
     * @param y1 The y coordinate of the first point.
     * @param x2 The x coordinate of the second point.
     * @param y2 The y coordinate of the second point.
     */
    function Chebyshev(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Calculate the distance between two sets of coordinates (points) to the power of `pow`.
     * @param x1 The x coordinate of the first point.
     * @param y1 The y coordinate of the first point.
     * @param x2 The x coordinate of the second point.
     * @param y2 The y coordinate of the second point.
     * @param pow The exponent.
     */
    function Power(x1: number, y1: number, x2: number, y2: number, pow: number): number;

    /**
     * Calculate the snake distance between two sets of coordinates (points).
     *
     * Snake distance (rectilinear distance, Manhattan distance) is the sum of the horizontal and vertical distances.
     * It's the effective distance when movement is allowed only horizontally or vertically (but not both).
     * @param x1 The x coordinate of the first point.
     * @param y1 The y coordinate of the first point.
     * @param x2 The x coordinate of the second point.
     * @param y2 The y coordinate of the second point.
     */
    function Snake(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Calculate the distance between two sets of coordinates (points), squared.
     * @param x1 The x coordinate of the first point.
     * @param y1 The y coordinate of the first point.
     * @param x2 The x coordinate of the second point.
     * @param y2 The y coordinate of the second point.
     */
    function Squared(x1: number, y1: number, x2: number, y2: number): number;

  }

  namespace Easing {
    namespace Back {
      /**
       * Back ease-in.
       * @param v The value to be tweened.
       * @param overshoot The overshoot amount. Default 1.70158.
       */
      function In(v: number, overshoot?: number): number;

      /**
       * Back ease-in/out.
       * @param v The value to be tweened.
       * @param overshoot The overshoot amount. Default 1.70158.
       */
      function InOut(v: number, overshoot?: number): number;

      /**
       * Back ease-out.
       * @param v The value to be tweened.
       * @param overshoot The overshoot amount. Default 1.70158.
       */
      function Out(v: number, overshoot?: number): number;

    }

    namespace Bounce {
      /**
       * Bounce ease-in.
       * @param v The value to be tweened.
       */
      function In(v: number): number;

      /**
       * Bounce ease-in/out.
       * @param v The value to be tweened.
       */
      function InOut(v: number): number;

      /**
       * Bounce ease-out.
       * @param v The value to be tweened.
       */
      function Out(v: number): number;

    }

    namespace Circular {
      /**
       * Circular ease-in.
       * @param v The value to be tweened.
       */
      function In(v: number): number;

      /**
       * Circular ease-in/out.
       * @param v The value to be tweened.
       */
      function InOut(v: number): number;

      /**
       * Circular ease-out.
       * @param v The value to be tweened.
       */
      function Out(v: number): number;

    }

    namespace Cubic {
      /**
       * Cubic ease-in.
       * @param v The value to be tweened.
       */
      function In(v: number): number;

      /**
       * Cubic ease-in/out.
       * @param v The value to be tweened.
       */
      function InOut(v: number): number;

      /**
       * Cubic ease-out.
       * @param v The value to be tweened.
       */
      function Out(v: number): number;

    }

    namespace Elastic {
      /**
       * Elastic ease-in.
       * @param v The value to be tweened.
       * @param amplitude The amplitude of the elastic ease. Default 0.1.
       * @param period Sets how tight the sine-wave is, where smaller values are tighter waves, which result in more cycles. Default 0.1.
       */
      function In(v: number, amplitude?: number, period?: number): number;

      /**
       * Elastic ease-in/out.
       * @param v The value to be tweened.
       * @param amplitude The amplitude of the elastic ease. Default 0.1.
       * @param period Sets how tight the sine-wave is, where smaller values are tighter waves, which result in more cycles. Default 0.1.
       */
      function InOut(v: number, amplitude?: number, period?: number): number;

      /**
       * Elastic ease-out.
       * @param v The value to be tweened.
       * @param amplitude The amplitude of the elastic ease. Default 0.1.
       * @param period Sets how tight the sine-wave is, where smaller values are tighter waves, which result in more cycles. Default 0.1.
       */
      function Out(v: number, amplitude?: number, period?: number): number;

    }

    namespace Expo {
      /**
       * Exponential ease-in.
       * @param v The value to be tweened.
       */
      function In(v: number): number;

      /**
       * Exponential ease-in/out.
       * @param v The value to be tweened.
       */
      function InOut(v: number): number;

      /**
       * Exponential ease-out.
       * @param v The value to be tweened.
       */
      function Out(v: number): number;

    }

    /**
     * Linear easing (no variation).
     * @param v The value to be tweened.
     */
    function Linear(v: number): number;

    namespace Quadratic {
      /**
       * Quadratic ease-in.
       * @param v The value to be tweened.
       */
      function In(v: number): number;

      /**
       * Quadratic ease-in/out.
       * @param v The value to be tweened.
       */
      function InOut(v: number): number;

      /**
       * Quadratic ease-out.
       * @param v The value to be tweened.
       */
      function Out(v: number): number;

    }

    namespace Quartic {
      /**
       * Quartic ease-in.
       * @param v The value to be tweened.
       */
      function In(v: number): number;

      /**
       * Quartic ease-in/out.
       * @param v The value to be tweened.
       */
      function InOut(v: number): number;

      /**
       * Quartic ease-out.
       * @param v The value to be tweened.
       */
      function Out(v: number): number;

    }

    namespace Quintic {
      /**
       * Quintic ease-in.
       * @param v The value to be tweened.
       */
      function In(v: number): number;

      /**
       * Quintic ease-in/out.
       * @param v The value to be tweened.
       */
      function InOut(v: number): number;

      /**
       * Quintic ease-out.
       * @param v The value to be tweened.
       */
      function Out(v: number): number;

    }

    namespace Sine {
      /**
       * Sinusoidal ease-in.
       * @param v The value to be tweened.
       */
      function In(v: number): number;

      /**
       * Sinusoidal ease-in/out.
       * @param v The value to be tweened.
       */
      function InOut(v: number): number;

      /**
       * Sinusoidal ease-out.
       * @param v The value to be tweened.
       */
      function Out(v: number): number;

    }

    namespace Stepped {
    }

    /**
     * Stepped easing.
     * @param v The value to be tweened.
     * @param steps The number of steps in the ease. Default 1.
     */
    function Stepped(v: number, steps?: number): number;

  }

  class Euler {
    /**
     *
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     */
    constructor(x?: number, y?: number, z?: number);

  }

  /**
   * Calculates the factorial of a given number for integer values greater than 0.
   * @param value A positive integer to calculate the factorial of.
   */
  function Factorial(value: number): number;

  /**
   * Generate a random floating point number between the two given bounds, minimum inclusive, maximum exclusive.
   * @param min The lower bound for the float, inclusive.
   * @param max The upper bound for the float exclusive.
   */
  function FloatBetween(min: number, max: number): number;

  /**
   * Floors to some place comparative to a `base`, default is 10 for decimal place.
   *
   * The `place` is represented by the power applied to `base` to get that place.
   * @param value The value to round.
   * @param place The place to round to. Default 0.
   * @param base The base to round in. Default is 10 for decimal. Default 10.
   */
  function FloorTo(value: number, place?: number, base?: number): number;

  /**
   * Return a value based on the range between `min` and `max` and the percentage given.
   * @param percent A value between 0 and 1 representing the percentage.
   * @param min The minimum value.
   * @param max The maximum value.
   */
  function FromPercent(percent: number, min: number, max?: number): number;

  namespace Fuzzy {
    /**
     * Calculate the fuzzy ceiling of the given value.
     * @param value The value.
     * @param epsilon The epsilon. Default 0.0001.
     */
    function Ceil(value: number, epsilon?: number): number;

    /**
     * Check whether the given values are fuzzily equal.
     *
     * Two numbers are fuzzily equal if their difference is less than `epsilon`.
     * @param a The first value.
     * @param b The second value.
     * @param epsilon The epsilon. Default 0.0001.
     */
    function Equal(a: number, b: number, epsilon?: number): boolean;

    /**
     * Calculate the fuzzy floor of the given value.
     * @param value The value.
     * @param epsilon The epsilon. Default 0.0001.
     */
    function Floor(value: number, epsilon?: number): number;

    /**
     * Check whether `a` is fuzzily greater than `b`.
     *
     * `a` is fuzzily greater than `b` if it is more than `b - epsilon`.
     * @param a The first value.
     * @param b The second value.
     * @param epsilon The epsilon. Default 0.0001.
     */
    function GreaterThan(a: number, b: number, epsilon?: number): boolean;

    /**
     * Check whether `a` is fuzzily less than `b`.
     *
     * `a` is fuzzily less than `b` if it is less than `b + epsilon`.
     * @param a The first value.
     * @param b The second value.
     * @param epsilon The epsilon. Default 0.0001.
     */
    function LessThan(a: number, b: number, epsilon?: number): boolean;

  }

  /**
   * Calculate a per-ms speed from a distance and time (given in seconds).
   * @param distance The distance.
   * @param time The time, in seconds.
   */
  function GetSpeed(distance: number, time: number): number;

  namespace Interpolation {
    /**
     * A bezier interpolation method.
     * @param v The input array of values to interpolate between.
     * @param k The percentage of interpolation, between 0 and 1.
     */
    function Bezier(v: number[], k: number): number;

    /**
     * A Catmull-Rom interpolation method.
     * @param v The input array of values to interpolate between.
     * @param k The percentage of interpolation, between 0 and 1.
     */
    function CatmullRom(v: number[], k: number): number;

    /**
     * A cubic bezier interpolation method.
     *
     * https://medium.com/@adrian_cooney/bezier-interpolation-13b68563313a
     * @param t The percentage of interpolation, between 0 and 1.
     * @param p0 The start point.
     * @param p1 The first control point.
     * @param p2 The second control point.
     * @param p3 The end point.
     */
    function CubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;

    /**
     * A linear interpolation method.
     * @param v The input array of values to interpolate between.
     * @param k The percentage of interpolation, between 0 and 1.
     */
    function Linear(v: number[], k: number): number;

    /**
     * A quadratic bezier interpolation method.
     * @param t The percentage of interpolation, between 0 and 1.
     * @param p0 The start point.
     * @param p1 The control point.
     * @param p2 The end point.
     */
    function QuadraticBezier(t: number, p0: number, p1: number, p2: number): number;

    /**
     * A Smoother Step interpolation method.
     * @param t The percentage of interpolation, between 0 and 1.
     * @param min The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
     * @param max The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
     */
    function SmootherStep(t: number, min: number, max: number): number;

    /**
     * A Smooth Step interpolation method.
     * @param t The percentage of interpolation, between 0 and 1.
     * @param min The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
     * @param max The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
     */
    function SmoothStep(t: number, min: number, max: number): number;

  }

  /**
   * Check if a given value is an even number.
   * @param value The number to perform the check with.
   */
  function IsEven(value: number): boolean;

  /**
   * Check if a given value is an even number using a strict type check.
   * @param value The number to perform the check with.
   */
  function IsEvenStrict(value: number): boolean;

  /**
   * Calculates a linear (interpolation) value over t.
   * @param p0 The first point.
   * @param p1 The second point.
   * @param t The percentage between p0 and p1 to return, represented as a number between 0 and 1.
   */
  function Linear(p0: number, p1: number, t: number): number;

  /**
   * A three-dimensional matrix.
   *
   * Defaults to the identity matrix when instantiated.
   */
  class Matrix3 {
    /**
     *
     * @param m Optional Matrix3 to copy values from.
     */
    constructor(m?: Phaser.Math.Matrix3);

    /**
     * The matrix values.
     */
    val: Float32Array;

    /**
     * Make a clone of this Matrix3.
     */
    clone(): Phaser.Math.Matrix3;

    /**
     * This method is an alias for `Matrix3.copy`.
     * @param src The Matrix to set the values of this Matrix's from.
     */
    set(src: Phaser.Math.Matrix3): Phaser.Math.Matrix3;

    /**
     * Copy the values of a given Matrix into this Matrix.
     * @param src The Matrix to copy the values from.
     */
    copy(src: Phaser.Math.Matrix3): Phaser.Math.Matrix3;

    /**
     * Copy the values of a given Matrix4 into this Matrix3.
     * @param m The Matrix4 to copy the values from.
     */
    fromMat4(m: Phaser.Math.Matrix4): Phaser.Math.Matrix3;

    /**
     * Set the values of this Matrix from the given array.
     * @param a The array to copy the values from.
     */
    fromArray(a: any[]): Phaser.Math.Matrix3;

    /**
     * Reset this Matrix to an identity (default) matrix.
     */
    identity(): Phaser.Math.Matrix3;

    /**
     * Transpose this Matrix.
     */
    transpose(): Phaser.Math.Matrix3;

    /**
     * Invert this Matrix.
     */
    invert(): Phaser.Math.Matrix3;

    /**
     * Calculate the adjoint, or adjugate, of this Matrix.
     */
    adjoint(): Phaser.Math.Matrix3;

    /**
     * Calculate the determinant of this Matrix.
     */
    determinant(): number;

    /**
     * Multiply this Matrix by the given Matrix.
     * @param src The Matrix to multiply this Matrix by.
     */
    multiply(src: Phaser.Math.Matrix3): Phaser.Math.Matrix3;

    /**
     * Translate this Matrix using the given Vector.
     * @param v The Vector to translate this Matrix with.
     */
    translate(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Matrix3;

    /**
     * Apply a rotation transformation to this Matrix.
     * @param rad The angle in radians to rotate by.
     */
    rotate(rad: number): Phaser.Math.Matrix3;

    /**
     * Apply a scale transformation to this Matrix.
     *
     * Uses the `x` and `y` components of the given Vector to scale the Matrix.
     * @param v The Vector to scale this Matrix with.
     */
    scale(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Matrix3;

    /**
     * Set the values of this Matrix from the given Quaternion.
     * @param q The Quaternion to set the values of this Matrix from.
     */
    fromQuat(q: Phaser.Math.Quaternion): Phaser.Math.Matrix3;

    /**
     * Set the values of this Matrix3 to be normalized from the given Matrix4.
     * @param m The Matrix4 to normalize the values from.
     */
    normalFromMat4(m: Phaser.Math.Matrix4): Phaser.Math.Matrix3;

  }

  /**
   * A four-dimensional matrix.
   *
   * Adapted from [gl-matrix](https://github.com/toji/gl-matrix) by toji
   * and [vecmath](https://github.com/mattdesl/vecmath) by mattdesl
   */
  class Matrix4 {
    /**
     *
     * @param m Optional Matrix4 to copy values from.
     */
    constructor(m?: Phaser.Math.Matrix4);

    /**
     * The matrix values.
     */
    val: Float32Array;

    /**
     * Make a clone of this Matrix4.
     */
    clone(): Phaser.Math.Matrix4;

    /**
     * This method is an alias for `Matrix4.copy`.
     * @param src The Matrix to set the values of this Matrix's from.
     */
    set(src: Phaser.Math.Matrix4): this;

    /**
     * Sets all values of this Matrix4.
     * @param m00 The m00 value.
     * @param m01 The m01 value.
     * @param m02 The m02 value.
     * @param m03 The m03 value.
     * @param m10 The m10 value.
     * @param m11 The m11 value.
     * @param m12 The m12 value.
     * @param m13 The m13 value.
     * @param m20 The m20 value.
     * @param m21 The m21 value.
     * @param m22 The m22 value.
     * @param m23 The m23 value.
     * @param m30 The m30 value.
     * @param m31 The m31 value.
     * @param m32 The m32 value.
     * @param m33 The m33 value.
     */
    setValues(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): this;

    /**
     * Copy the values of a given Matrix into this Matrix.
     * @param src The Matrix to copy the values from.
     */
    copy(src: Phaser.Math.Matrix4): this;

    /**
     * Set the values of this Matrix from the given array.
     * @param a The array to copy the values from. Must have at least 16 elements.
     */
    fromArray(a: number[]): this;

    /**
     * Reset this Matrix.
     *
     * Sets all values to `0`.
     */
    zero(): Phaser.Math.Matrix4;

    /**
     * Generates a transform matrix based on the given position, scale and rotation.
     * @param position The position vector.
     * @param scale The scale vector.
     * @param rotation The rotation quaternion.
     */
    transform(position: Phaser.Math.Vector3, scale: Phaser.Math.Vector3, rotation: Phaser.Math.Quaternion): this;

    /**
     * Set the `x`, `y` and `z` values of this Matrix.
     * @param x The x value.
     * @param y The y value.
     * @param z The z value.
     */
    xyz(x: number, y: number, z: number): this;

    /**
     * Set the scaling values of this Matrix.
     * @param x The x scaling value.
     * @param y The y scaling value.
     * @param z The z scaling value.
     */
    scaling(x: number, y: number, z: number): this;

    /**
     * Reset this Matrix to an identity (default) matrix.
     */
    identity(): this;

    /**
     * Transpose this Matrix.
     */
    transpose(): this;

    /**
     * Copies the given Matrix4 into this Matrix and then inverses it.
     * @param m The Matrix4 to invert into this Matrix4.
     */
    getInverse(m: Phaser.Math.Matrix4): this;

    /**
     * Invert this Matrix.
     */
    invert(): this;

    /**
     * Calculate the adjoint, or adjugate, of this Matrix.
     */
    adjoint(): this;

    /**
     * Calculate the determinant of this Matrix.
     */
    determinant(): number;

    /**
     * Multiply this Matrix by the given Matrix.
     * @param src The Matrix to multiply this Matrix by.
     */
    multiply(src: Phaser.Math.Matrix4): this;

    /**
     * Multiply the values of this Matrix4 by those given in the `src` argument.
     * @param src The source Matrix4 that this Matrix4 is multiplied by.
     */
    multiplyLocal(src: Phaser.Math.Matrix4): this;

    /**
     * Multiplies the given Matrix4 object with this Matrix.
     *
     * This is the same as calling `multiplyMatrices(m, this)`.
     * @param m The Matrix4 to multiply with this one.
     */
    premultiply(m: Phaser.Math.Matrix4): this;

    /**
     * Multiplies the two given Matrix4 objects and stores the results in this Matrix.
     * @param a The first Matrix4 to multiply.
     * @param b The second Matrix4 to multiply.
     */
    multiplyMatrices(a: Phaser.Math.Matrix4, b: Phaser.Math.Matrix4): this;

    /**
     * Translate this Matrix using the given Vector.
     * @param v The Vector to translate this Matrix with.
     */
    translate(v: Phaser.Math.Vector3 | Phaser.Math.Vector4): this;

    /**
     * Translate this Matrix using the given values.
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     */
    translateXYZ(x: number, y: number, z: number): this;

    /**
     * Apply a scale transformation to this Matrix.
     *
     * Uses the `x`, `y` and `z` components of the given Vector to scale the Matrix.
     * @param v The Vector to scale this Matrix with.
     */
    scale(v: Phaser.Math.Vector3 | Phaser.Math.Vector4): this;

    /**
     * Apply a scale transformation to this Matrix.
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     */
    scaleXYZ(x: number, y: number, z: number): this;

    /**
     * Derive a rotation matrix around the given axis.
     * @param axis The rotation axis.
     * @param angle The rotation angle in radians.
     */
    makeRotationAxis(axis: Phaser.Math.Vector3 | Phaser.Math.Vector4, angle: number): this;

    /**
     * Apply a rotation transformation to this Matrix.
     * @param rad The angle in radians to rotate by.
     * @param axis The axis to rotate upon.
     */
    rotate(rad: number, axis: Phaser.Math.Vector3): this;

    /**
     * Rotate this matrix on its X axis.
     * @param rad The angle in radians to rotate by.
     */
    rotateX(rad: number): this;

    /**
     * Rotate this matrix on its Y axis.
     * @param rad The angle to rotate by, in radians.
     */
    rotateY(rad: number): this;

    /**
     * Rotate this matrix on its Z axis.
     * @param rad The angle to rotate by, in radians.
     */
    rotateZ(rad: number): this;

    /**
     * Set the values of this Matrix from the given rotation Quaternion and translation Vector.
     * @param q The Quaternion to set rotation from.
     * @param v The Vector to set translation from.
     */
    fromRotationTranslation(q: Phaser.Math.Quaternion, v: Phaser.Math.Vector3): this;

    /**
     * Set the values of this Matrix from the given Quaternion.
     * @param q The Quaternion to set the values of this Matrix from.
     */
    fromQuat(q: Phaser.Math.Quaternion): this;

    /**
     * Generate a frustum matrix with the given bounds.
     * @param left The left bound of the frustum.
     * @param right The right bound of the frustum.
     * @param bottom The bottom bound of the frustum.
     * @param top The top bound of the frustum.
     * @param near The near bound of the frustum.
     * @param far The far bound of the frustum.
     */
    frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): this;

    /**
     * Generate a perspective projection matrix with the given bounds.
     * @param fovy Vertical field of view in radians
     * @param aspect Aspect ratio. Typically viewport width  /height.
     * @param near Near bound of the frustum.
     * @param far Far bound of the frustum.
     */
    perspective(fovy: number, aspect: number, near: number, far: number): this;

    /**
     * Generate a perspective projection matrix with the given bounds.
     * @param width The width of the frustum.
     * @param height The height of the frustum.
     * @param near Near bound of the frustum.
     * @param far Far bound of the frustum.
     */
    perspectiveLH(width: number, height: number, near: number, far: number): this;

    /**
     * Generate an orthogonal projection matrix with the given bounds.
     * @param left The left bound of the frustum.
     * @param right The right bound of the frustum.
     * @param bottom The bottom bound of the frustum.
     * @param top The top bound of the frustum.
     * @param near The near bound of the frustum.
     * @param far The far bound of the frustum.
     */
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): this;

    /**
     * Generate a right-handed look-at matrix with the given eye position, target and up axis.
     * @param eye Position of the viewer.
     * @param target Point the viewer is looking at.
     * @param up vec3 pointing up.
     */
    lookAtRH(eye: Phaser.Math.Vector3, target: Phaser.Math.Vector3, up: Phaser.Math.Vector3): this;

    /**
     * Generate a look-at matrix with the given eye position, focal point, and up axis.
     * @param eye Position of the viewer
     * @param center Point the viewer is looking at
     * @param up vec3 pointing up.
     */
    lookAt(eye: Phaser.Math.Vector3, center: Phaser.Math.Vector3, up: Phaser.Math.Vector3): this;

    /**
     * Set the values of this matrix from the given `yaw`, `pitch` and `roll` values.
     * @param yaw The yaw value.
     * @param pitch The pitch value.
     * @param roll The roll value.
     */
    yawPitchRoll(yaw: number, pitch: number, roll: number): this;

    /**
     * Generate a world matrix from the given rotation, position, scale, view matrix and projection matrix.
     * @param rotation The rotation of the world matrix.
     * @param position The position of the world matrix.
     * @param scale The scale of the world matrix.
     * @param viewMatrix The view matrix.
     * @param projectionMatrix The projection matrix.
     */
    setWorldMatrix(rotation: Phaser.Math.Vector3, position: Phaser.Math.Vector3, scale: Phaser.Math.Vector3, viewMatrix?: Phaser.Math.Matrix4, projectionMatrix?: Phaser.Math.Matrix4): this;

    /**
     * Multiplies this Matrix4 by the given `src` Matrix4 and stores the results in the `out` Matrix4.
     * @param src The Matrix4 to multiply with this one.
     * @param out The receiving Matrix.
     */
    multiplyToMat4(src: Phaser.Math.Matrix4, out: Phaser.Math.Matrix4): Phaser.Math.Matrix4;

    /**
     * Takes the rotation and position vectors and builds this Matrix4 from them.
     * @param rotation The rotation vector.
     * @param position The position vector.
     * @param translateFirst Should the operation translate then rotate (`true`), or rotate then translate? (`false`)
     */
    fromRotationXYTranslation(rotation: Phaser.Math.Vector3, position: Phaser.Math.Vector3, translateFirst: boolean): this;

    /**
     * Returns the maximum axis scale from this Matrix4.
     */
    getMaxScaleOnAxis(): number;

  }

  /**
   * Add an `amount` to a `value`, limiting the maximum result to `max`.
   * @param value The value to add to.
   * @param amount The amount to add.
   * @param max The maximum value to return.
   */
  function MaxAdd(value: number, amount: number, max: number): number;

  /**
   * Calculate the median of the given values. The values are sorted and the middle value is returned.
   * In case of an even number of values, the average of the two middle values is returned.
   * @param values The values to average.
   */
  function Median(values: number[]): number;

  /**
   * Subtract an `amount` from `value`, limiting the minimum result to `min`.
   * @param value The value to subtract from.
   * @param amount The amount to subtract.
   * @param min The minimum value to return.
   */
  function MinSub(value: number, amount: number, min: number): number;

  /**
   * Work out what percentage `value` is of the range between `min` and `max`.
   * If `max` isn't given then it will return the percentage of `value` to `min`.
   *
   * You can optionally specify an `upperMax` value, which is a mid-way point in the range that represents 100%, after which the % starts to go down to zero again.
   * @param value The value to determine the percentage of.
   * @param min The minimum value.
   * @param max The maximum value.
   * @param upperMax The mid-way point in the range that represents 100%.
   */
  function Percent(value: number, min: number, max?: number, upperMax?: number): number;

  namespace Pow2 {
    /**
     * Returns the nearest power of 2 to the given `value`.
     * @param value The value.
     */
    function GetNext(value: number): number;

    /**
     * Checks if the given `width` and `height` are a power of two.
     * Useful for checking texture dimensions.
     * @param width The width.
     * @param height The height.
     */
    function IsSize(width: number, height: number): boolean;

    /**
     * Tests the value and returns `true` if it is a power of two.
     * @param value The value to check if it's a power of two.
     */
    function IsValue(value: number): boolean;

  }

  /**
   * A quaternion.
   */
  class Quaternion {
    /**
     *
     * @param x The x component. Default 0.
     * @param y The y component. Default 0.
     * @param z The z component. Default 0.
     * @param w The w component. Default 1.
     */
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * This callback is invoked, if set, each time a value in this quaternion is changed.
     * The callback is passed one argument, a reference to this quaternion.
     */
    onChangeCallback: Function;

    /**
     * The x component of this Quaternion.
     */
    x: number;

    /**
     * The y component of this Quaternion.
     */
    y: number;

    /**
     * The z component of this Quaternion.
     */
    z: number;

    /**
     * The w component of this Quaternion.
     */
    w: number;

    /**
     * Copy the components of a given Quaternion or Vector into this Quaternion.
     * @param src The Quaternion or Vector to copy the components from.
     */
    copy(src: Phaser.Math.Quaternion | Phaser.Math.Vector4): Phaser.Math.Quaternion;

    /**
     * Set the components of this Quaternion and optionally call the `onChangeCallback`.
     * @param x The x component, or an object containing x, y, z, and w components. Default 0.
     * @param y The y component. Default 0.
     * @param z The z component. Default 0.
     * @param w The w component. Default 0.
     * @param update Call the `onChangeCallback`? Default true.
     */
    set(x?: number | object, y?: number, z?: number, w?: number, update?: boolean): Phaser.Math.Quaternion;

    /**
     * Add a given Quaternion or Vector to this Quaternion. Addition is component-wise.
     * @param v The Quaternion or Vector to add to this Quaternion.
     */
    add(v: Phaser.Math.Quaternion | Phaser.Math.Vector4): Phaser.Math.Quaternion;

    /**
     * Subtract a given Quaternion or Vector from this Quaternion. Subtraction is component-wise.
     * @param v The Quaternion or Vector to subtract from this Quaternion.
     */
    subtract(v: Phaser.Math.Quaternion | Phaser.Math.Vector4): Phaser.Math.Quaternion;

    /**
     * Scale this Quaternion by the given value.
     * @param scale The value to scale this Quaternion by.
     */
    scale(scale: number): Phaser.Math.Quaternion;

    /**
     * Calculate the length of this Quaternion.
     */
    length(): number;

    /**
     * Calculate the length of this Quaternion squared.
     */
    lengthSq(): number;

    /**
     * Normalize this Quaternion.
     */
    normalize(): Phaser.Math.Quaternion;

    /**
     * Calculate the dot product of this Quaternion and the given Quaternion or Vector.
     * @param v The Quaternion or Vector to dot product with this Quaternion.
     */
    dot(v: Phaser.Math.Quaternion | Phaser.Math.Vector4): number;

    /**
     * Linearly interpolate this Quaternion towards the given Quaternion or Vector.
     * @param v The Quaternion or Vector to interpolate towards.
     * @param t The percentage of interpolation. Default 0.
     */
    lerp(v: Phaser.Math.Quaternion | Phaser.Math.Vector4, t?: number): Phaser.Math.Quaternion;

    /**
     * Rotates this Quaternion based on the two given vectors.
     * @param a The transform rotation vector.
     * @param b The target rotation vector.
     */
    rotationTo(a: Phaser.Math.Vector3, b: Phaser.Math.Vector3): Phaser.Math.Quaternion;

    /**
     * Set the axes of this Quaternion.
     * @param view The view axis.
     * @param right The right axis.
     * @param up The upwards axis.
     */
    setAxes(view: Phaser.Math.Vector3, right: Phaser.Math.Vector3, up: Phaser.Math.Vector3): Phaser.Math.Quaternion;

    /**
     * Reset this Matrix to an identity (default) Quaternion.
     */
    identity(): Phaser.Math.Quaternion;

    /**
     * Set the axis angle of this Quaternion.
     * @param axis The axis.
     * @param rad The angle in radians.
     */
    setAxisAngle(axis: Phaser.Math.Vector3, rad: number): Phaser.Math.Quaternion;

    /**
     * Multiply this Quaternion by the given Quaternion or Vector.
     * @param b The Quaternion or Vector to multiply this Quaternion by.
     */
    multiply(b: Phaser.Math.Quaternion | Phaser.Math.Vector4): Phaser.Math.Quaternion;

    /**
     * Smoothly linearly interpolate this Quaternion towards the given Quaternion or Vector.
     * @param b The Quaternion or Vector to interpolate towards.
     * @param t The percentage of interpolation.
     */
    slerp(b: Phaser.Math.Quaternion | Phaser.Math.Vector4, t: number): Phaser.Math.Quaternion;

    /**
     * Invert this Quaternion.
     */
    invert(): Phaser.Math.Quaternion;

    /**
     * Convert this Quaternion into its conjugate.
     *
     * Sets the x, y and z components.
     */
    conjugate(): Phaser.Math.Quaternion;

    /**
     * Rotate this Quaternion on the X axis.
     * @param rad The rotation angle in radians.
     */
    rotateX(rad: number): Phaser.Math.Quaternion;

    /**
     * Rotate this Quaternion on the Y axis.
     * @param rad The rotation angle in radians.
     */
    rotateY(rad: number): Phaser.Math.Quaternion;

    /**
     * Rotate this Quaternion on the Z axis.
     * @param rad The rotation angle in radians.
     */
    rotateZ(rad: number): Phaser.Math.Quaternion;

    /**
     * Create a unit (or rotation) Quaternion from its x, y, and z components.
     *
     * Sets the w component.
     */
    calculateW(): Phaser.Math.Quaternion;

    /**
     * Set this Quaternion from the given Euler, based on Euler order.
     * @param euler The Euler to convert from.
     * @param update Run the `onChangeCallback`? Default true.
     */
    setFromEuler(euler: Phaser.Math.Euler, update?: boolean): Phaser.Math.Quaternion;

    /**
     * Sets the rotation of this Quaternion from the given Matrix4.
     * @param mat4 The Matrix4 to set the rotation from.
     */
    setFromRotationMatrix(mat4: Phaser.Math.Matrix4): Phaser.Math.Quaternion;

    /**
     * Convert the given Matrix into this Quaternion.
     * @param mat The Matrix to convert from.
     */
    fromMat3(mat: Phaser.Math.Matrix3): Phaser.Math.Quaternion;

  }

  /**
   * Convert the given angle in radians, to the equivalent angle in degrees.
   * @param radians The angle in radians to convert ot degrees.
   */
  function RadToDeg(radians: number): number;

  /**
   * A seeded Random Data Generator.
   *
   * Access via `Phaser.Math.RND` which is an instance of this class pre-defined
   * by Phaser. Or, create your own instance to use as you require.
   *
   * The `Math.RND` generator is seeded by the Game Config property value `seed`.
   * If no such config property exists, a random number is used.
   *
   * If you create your own instance of this class you should provide a seed for it.
   * If no seed is given it will use a 'random' one based on Date.now.
   */
  class RandomDataGenerator {
    /**
     *
     * @param seeds The seeds to use for the random number generator.
     */
    constructor(seeds?: string | string[]);

    /**
     * Signs to choose from.
     */
    signs: number[];

    /**
     * Initialize the state of the random data generator.
     * @param seeds The seeds to initialize the random data generator with.
     */
    init(seeds: string | string[]): void;

    /**
     * Reset the seed of the random data generator.
     *
     * _Note_: the seed array is only processed up to the first `undefined` (or `null`) value, should such be present.
     * @param seeds The array of seeds: the `toString()` of each value is used.
     */
    sow(seeds: string[]): void;

    /**
     * Returns a random integer between 0 and 2^32.
     */
    integer(): number;

    /**
     * Returns a random real number between 0 and 1.
     */
    frac(): number;

    /**
     * Returns a random real number between 0 and 2^32.
     */
    real(): number;

    /**
     * Returns a random integer between and including min and max.
     * @param min The minimum value in the range.
     * @param max The maximum value in the range.
     */
    integerInRange(min: number, max: number): number;

    /**
     * Returns a random integer between and including min and max.
     * This method is an alias for RandomDataGenerator.integerInRange.
     * @param min The minimum value in the range.
     * @param max The maximum value in the range.
     */
    between(min: number, max: number): number;

    /**
     * Returns a random real number between min and max.
     * @param min The minimum value in the range.
     * @param max The maximum value in the range.
     */
    realInRange(min: number, max: number): number;

    /**
     * Returns a random real number between -1 and 1.
     */
    normal(): number;

    /**
     * Returns a valid RFC4122 version4 ID hex string from https://gist.github.com/1308368
     */
    uuid(): string;

    /**
     * Returns a random element from within the given array.
     * @param array The array to pick a random element from.
     */
    pick<T>(array: T[]): T;

    /**
     * Returns a sign to be used with multiplication operator.
     */
    sign(): number;

    /**
     * Returns a random element from within the given array, favoring the earlier entries.
     * @param array The array to pick a random element from.
     */
    weightedPick<T>(array: T[]): T;

    /**
     * Returns a random timestamp between min and max, or between the beginning of 2000 and the end of 2020 if min and max aren't specified.
     * @param min The minimum value in the range.
     * @param max The maximum value in the range.
     */
    timestamp(min: number, max: number): number;

    /**
     * Returns a random angle between -180 and 180.
     */
    angle(): number;

    /**
     * Returns a random rotation in radians, between -3.141 and 3.141
     */
    rotation(): number;

    /**
     * Gets or Sets the state of the generator. This allows you to retain the values
     * that the generator is using between games, i.e. in a game save file.
     *
     * To seed this generator with a previously saved state you can pass it as the
     * `seed` value in your game config, or call this method directly after Phaser has booted.
     *
     * Call this method with no parameters to return the current state.
     *
     * If providing a state it should match the same format that this method
     * returns, which is a string with a header `!rnd` followed by the `c`,
     * `s0`, `s1` and `s2` values respectively, each comma-delimited.
     * @param state Generator state to be set.
     */
    state(state?: string): string;

    /**
     * Shuffles the given array, using the current seed.
     * @param array The array to be shuffled.
     */
    shuffle<T>(array?: T[]): T[];

  }

  /**
   * Compute a random unit vector.
   *
   * Computes random values for the given vector between -1 and 1 that can be used to represent a direction.
   *
   * Optionally accepts a scale value to scale the resulting vector by.
   * @param vector The Vector to compute random values for.
   * @param scale The scale of the random values. Default 1.
   */
  function RandomXY(vector: Phaser.Math.Vector2, scale?: number): Phaser.Math.Vector2;

  /**
   * Compute a random position vector in a spherical area, optionally defined by the given radius.
   * @param vec3 The Vector to compute random values for.
   * @param radius The radius. Default 1.
   */
  function RandomXYZ(vec3: Phaser.Math.Vector3, radius?: number): Phaser.Math.Vector3;

  /**
   * Compute a random four-dimensional vector.
   * @param vec4 The Vector to compute random values for.
   * @param scale The scale of the random values. Default 1.
   */
  function RandomXYZW(vec4: Phaser.Math.Vector4, scale?: number): Phaser.Math.Vector4;

  /**
   * Rotate a given point by a given angle around the origin (0, 0), in an anti-clockwise direction.
   * @param point The point to be rotated.
   * @param angle The angle to be rotated by in an anticlockwise direction.
   */
  function Rotate(point: Phaser.Geom.Point | object, angle: number): Phaser.Geom.Point;

  /**
   * Rotate a `point` around `x` and `y` to the given `angle`, at the same distance.
   *
   * In polar notation, this maps a point from (r, t) to (r, angle), vs. the origin (x, y).
   * @param point The point to be rotated.
   * @param x The horizontal coordinate to rotate around.
   * @param y The vertical coordinate to rotate around.
   * @param angle The angle of rotation in radians.
   */
  function RotateAround<T extends Phaser.Types.Math.Vector2Like>(point: T, x: number, y: number, angle: number): T;

  /**
   * Rotate a `point` around `x` and `y` by the given `angle` and `distance`.
   *
   * In polar notation, this maps a point from (r, t) to (distance, t + angle), vs. the origin (x, y).
   * @param point The point to be rotated.
   * @param x The horizontal coordinate to rotate around.
   * @param y The vertical coordinate to rotate around.
   * @param angle The angle of rotation in radians.
   * @param distance The distance from (x, y) to place the point at.
   */
  function RotateAroundDistance<T extends Phaser.Types.Math.Vector2Like>(point: T, x: number, y: number, angle: number, distance: number): T;

  /**
   * Position a `point` at the given `angle` and `distance` to (`x`, `y`).
   * @param point The point to be positioned.
   * @param x The horizontal coordinate to position from.
   * @param y The vertical coordinate to position from.
   * @param angle The angle of rotation in radians.
   * @param distance The distance from (x, y) to place the point at.
   */
  function RotateTo<T extends Phaser.Types.Math.Vector2Like>(point: T, x: number, y: number, angle: number, distance: number): T;

  /**
   * Rotates a vector in place by axis angle.
   *
   * This is the same as transforming a point by an
   * axis-angle quaternion, but it has higher precision.
   * @param vec The vector to be rotated.
   * @param axis The axis to rotate around.
   * @param radians The angle of rotation in radians.
   */
  function RotateVec3(vec: Phaser.Math.Vector3, axis: Phaser.Math.Vector3, radians: number): Phaser.Math.Vector3;

  /**
   * Round a given number so it is further away from zero. That is, positive numbers are rounded up, and negative numbers are rounded down.
   * @param value The number to round.
   */
  function RoundAwayFromZero(value: number): number;

  /**
   * Round a value to the given precision.
   *
   * For example:
   *
   * ```javascript
   * RoundTo(123.456, 0) = 123
   * RoundTo(123.456, 1) = 120
   * RoundTo(123.456, 2) = 100
   * ```
   *
   * To round the decimal, i.e. to round to precision, pass in a negative `place`:
   *
   * ```javascript
   * RoundTo(123.456789, 0) = 123
   * RoundTo(123.456789, -1) = 123.5
   * RoundTo(123.456789, -2) = 123.46
   * RoundTo(123.456789, -3) = 123.457
   * ```
   * @param value The value to round.
   * @param place The place to round to. Positive to round the units, negative to round the decimal. Default 0.
   * @param base The base to round in. Default is 10 for decimal. Default 10.
   */
  function RoundTo(value: number, place?: number, base?: number): number;

  /**
   * Generate a series of sine and cosine values.
   * @param length The number of values to generate.
   * @param sinAmp The sine value amplitude. Default 1.
   * @param cosAmp The cosine value amplitude. Default 1.
   * @param frequency The frequency of the values. Default 1.
   */
  function SinCosTableGenerator(length: number, sinAmp?: number, cosAmp?: number, frequency?: number): Phaser.Types.Math.SinCosTable;

  /**
   * Calculate a smoother interpolation percentage of `x` between `min` and `max`.
   *
   * The function receives the number `x` as an argument and returns 0 if `x` is less than or equal to the left edge,
   * 1 if `x` is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial,
   * between 0 and 1 otherwise.
   *
   * Produces an even smoother interpolation than {@link Phaser.Math.SmoothStep}.
   * @param x The input value.
   * @param min The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
   * @param max The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
   */
  function SmootherStep(x: number, min: number, max: number): number;

  /**
   * Calculate a smooth interpolation percentage of `x` between `min` and `max`.
   *
   * The function receives the number `x` as an argument and returns 0 if `x` is less than or equal to the left edge,
   * 1 if `x` is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial,
   * between 0 and 1 otherwise.
   * @param x The input value.
   * @param min The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
   * @param max The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
   */
  function SmoothStep(x: number, min: number, max: number): number;

  namespace Snap {
    /**
     * Snap a value to nearest grid slice, using ceil.
     *
     * Example: if you have an interval gap of `5` and a position of `12`... you will snap to `15`.
     * As will `14` snap to `15`... but `16` will snap to `20`.
     * @param value The value to snap.
     * @param gap The interval gap of the grid.
     * @param start Optional starting offset for gap. Default 0.
     * @param divide If `true` it will divide the snapped value by the gap before returning. Default false.
     */
    function Ceil(value: number, gap: number, start?: number, divide?: boolean): number;

    /**
     * Snap a value to nearest grid slice, using floor.
     *
     * Example: if you have an interval gap of `5` and a position of `12`... you will snap to `10`.
     * As will `14` snap to `10`... but `16` will snap to `15`.
     * @param value The value to snap.
     * @param gap The interval gap of the grid.
     * @param start Optional starting offset for gap. Default 0.
     * @param divide If `true` it will divide the snapped value by the gap before returning. Default false.
     */
    function Floor(value: number, gap: number, start?: number, divide?: boolean): number;

    /**
     * Snap a value to nearest grid slice, using rounding.
     *
     * Example: if you have an interval gap of `5` and a position of `12`... you will snap to `10` whereas `14` will snap to `15`.
     * @param value The value to snap.
     * @param gap The interval gap of the grid.
     * @param start Optional starting offset for gap. Default 0.
     * @param divide If `true` it will divide the snapped value by the gap before returning. Default false.
     */
    function To(value: number, gap: number, start?: number, divide?: boolean): number;

  }

  /**
   * Returns a Vector2 containing the x and y position of the given index in a `width` x `height` sized grid.
   *
   * For example, in a 6 x 4 grid, index 16 would equal x: 4 y: 2.
   *
   * If the given index is out of range an empty Vector2 is returned.
   * @param index The position within the grid to get the x/y value for.
   * @param width The width of the grid.
   * @param height The height of the grid.
   * @param out An optional Vector2 to store the result in. If not given, a new Vector2 instance will be created.
   */
  function ToXY(index: number, width: number, height: number, out?: Phaser.Math.Vector2): Phaser.Math.Vector2;

  /**
   * Takes the `x` and `y` coordinates and transforms them into the same space as
   * defined by the position, rotation and scale values.
   * @param x The x coordinate to be transformed.
   * @param y The y coordinate to be transformed.
   * @param positionX Horizontal position of the transform point.
   * @param positionY Vertical position of the transform point.
   * @param rotation Rotation of the transform point, in radians.
   * @param scaleX Horizontal scale of the transform point.
   * @param scaleY Vertical scale of the transform point.
   * @param output The output vector, point or object for the translated coordinates.
   */
  function TransformXY(x: number, y: number, positionX: number, positionY: number, rotation: number, scaleX: number, scaleY: number, output?: Phaser.Math.Vector2 | Phaser.Geom.Point | object): Phaser.Math.Vector2 | Phaser.Geom.Point | object;

  /**
   * A representation of a vector in 2D space.
   *
   * A two-component vector.
   */
  class Vector2 {
    /**
     *
     * @param x The x component, or an object with `x` and `y` properties.
     * @param y The y component.
     */
    constructor(x?: number | Phaser.Types.Math.Vector2Like, y?: number);

    /**
     * The x component of this Vector.
     */
    x: number;

    /**
     * The y component of this Vector.
     */
    y: number;

    /**
     * Make a clone of this Vector2.
     */
    clone(): Phaser.Math.Vector2;

    /**
     * Copy the components of a given Vector into this Vector.
     * @param src The Vector to copy the components from.
     */
    copy(src: Phaser.Types.Math.Vector2Like): Phaser.Math.Vector2;

    /**
     * Set the component values of this Vector from a given Vector2Like object.
     * @param obj The object containing the component values to set for this Vector.
     */
    setFromObject(obj: Phaser.Types.Math.Vector2Like): Phaser.Math.Vector2;

    /**
     * Set the `x` and `y` components of the this Vector to the given `x` and `y` values.
     * @param x The x value to set for this Vector.
     * @param y The y value to set for this Vector. Default x.
     */
    set(x: number, y?: number): Phaser.Math.Vector2;

    /**
     * This method is an alias for `Vector2.set`.
     * @param x The x value to set for this Vector.
     * @param y The y value to set for this Vector. Default x.
     */
    setTo(x: number, y?: number): Phaser.Math.Vector2;

    /**
     * Sets the `x` and `y` values of this object from a given polar coordinate.
     * @param azimuth The angular coordinate, in radians.
     * @param radius The radial coordinate (length). Default 1.
     */
    setToPolar(azimuth: number, radius?: number): Phaser.Math.Vector2;

    /**
     * Check whether this Vector is equal to a given Vector.
     *
     * Performs a strict equality check against each Vector's components.
     * @param v The vector to compare with this Vector.
     */
    equals(v: Phaser.Types.Math.Vector2Like): boolean;

    /**
     * Check whether this Vector is approximately equal to a given Vector.
     * @param v The vector to compare with this Vector.
     * @param epsilon The tolerance value. Default 0.0001.
     */
    fuzzyEquals(v: Phaser.Types.Math.Vector2Like, epsilon?: number): boolean;

    /**
     * Calculate the angle between this Vector and the positive x-axis, in radians.
     */
    angle(): number;

    /**
     * Set the angle of this Vector.
     * @param angle The angle, in radians.
     */
    setAngle(angle: number): Phaser.Math.Vector2;

    /**
     * Add a given Vector to this Vector. Addition is component-wise.
     * @param src The Vector to add to this Vector.
     */
    add(src: Phaser.Types.Math.Vector2Like): Phaser.Math.Vector2;

    /**
     * Subtract the given Vector from this Vector. Subtraction is component-wise.
     * @param src The Vector to subtract from this Vector.
     */
    subtract(src: Phaser.Types.Math.Vector2Like): Phaser.Math.Vector2;

    /**
     * Perform a component-wise multiplication between this Vector and the given Vector.
     *
     * Multiplies this Vector by the given Vector.
     * @param src The Vector to multiply this Vector by.
     */
    multiply(src: Phaser.Types.Math.Vector2Like): Phaser.Math.Vector2;

    /**
     * Scale this Vector by the given value.
     * @param value The value to scale this Vector by.
     */
    scale(value: number): Phaser.Math.Vector2;

    /**
     * Perform a component-wise division between this Vector and the given Vector.
     *
     * Divides this Vector by the given Vector.
     * @param src The Vector to divide this Vector by.
     */
    divide(src: Phaser.Types.Math.Vector2Like): Phaser.Math.Vector2;

    /**
     * Negate the `x` and `y` components of this Vector.
     */
    negate(): Phaser.Math.Vector2;

    /**
     * Calculate the distance between this Vector and the given Vector.
     * @param src The Vector to calculate the distance to.
     */
    distance(src: Phaser.Types.Math.Vector2Like): number;

    /**
     * Calculate the distance between this Vector and the given Vector, squared.
     * @param src The Vector to calculate the distance to.
     */
    distanceSq(src: Phaser.Types.Math.Vector2Like): number;

    /**
     * Calculate the length (or magnitude) of this Vector.
     */
    length(): number;

    /**
     * Set the length (or magnitude) of this Vector.
     */
    setLength(length: number): Phaser.Math.Vector2;

    /**
     * Calculate the length of this Vector squared.
     */
    lengthSq(): number;

    /**
     * Normalize this Vector.
     *
     * Makes the vector a unit length vector (magnitude of 1) in the same direction.
     */
    normalize(): Phaser.Math.Vector2;

    /**
     * Rotate this Vector to its perpendicular, in the positive direction.
     */
    normalizeRightHand(): Phaser.Math.Vector2;

    /**
     * Rotate this Vector to its perpendicular, in the negative direction.
     */
    normalizeLeftHand(): Phaser.Math.Vector2;

    /**
     * Calculate the dot product of this Vector and the given Vector.
     * @param src The Vector2 to dot product with this Vector2.
     */
    dot(src: Phaser.Types.Math.Vector2Like): number;

    /**
     * Calculate the cross product of this Vector and the given Vector.
     * @param src The Vector2 to cross with this Vector2.
     */
    cross(src: Phaser.Types.Math.Vector2Like): number;

    /**
     * Linearly interpolate between this Vector and the given Vector.
     *
     * Interpolates this Vector towards the given Vector.
     * @param src The Vector2 to interpolate towards.
     * @param t The interpolation percentage, between 0 and 1. Default 0.
     */
    lerp(src: Phaser.Types.Math.Vector2Like, t?: number): Phaser.Math.Vector2;

    /**
     * Transform this Vector with the given Matrix.
     * @param mat The Matrix3 to transform this Vector2 with.
     */
    transformMat3(mat: Phaser.Math.Matrix3): Phaser.Math.Vector2;

    /**
     * Transform this Vector with the given Matrix.
     * @param mat The Matrix4 to transform this Vector2 with.
     */
    transformMat4(mat: Phaser.Math.Matrix4): Phaser.Math.Vector2;

    /**
     * Make this Vector the zero vector (0, 0).
     */
    reset(): Phaser.Math.Vector2;

    /**
     * Limit the length (or magnitude) of this Vector.
     * @param max The maximum length.
     */
    limit(max: number): Phaser.Math.Vector2;

    /**
     * Reflect this Vector off a line defined by a normal.
     * @param normal A vector perpendicular to the line.
     */
    reflect(normal: Phaser.Math.Vector2): Phaser.Math.Vector2;

    /**
     * Reflect this Vector across another.
     * @param axis A vector to reflect across.
     */
    mirror(axis: Phaser.Math.Vector2): Phaser.Math.Vector2;

    /**
     * Rotate this Vector by an angle amount.
     * @param delta The angle to rotate by, in radians.
     */
    rotate(delta: number): Phaser.Math.Vector2;

    /**
     * A static zero Vector2 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly ZERO: Phaser.Math.Vector2;

    /**
     * A static right Vector2 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly RIGHT: Phaser.Math.Vector2;

    /**
     * A static left Vector2 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly LEFT: Phaser.Math.Vector2;

    /**
     * A static up Vector2 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly UP: Phaser.Math.Vector2;

    /**
     * A static down Vector2 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly DOWN: Phaser.Math.Vector2;

    /**
     * A static one Vector2 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly ONE: Phaser.Math.Vector2;

  }

  /**
   * A representation of a vector in 3D space.
   *
   * A three-component vector.
   */
  class Vector3 {
    /**
     *
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     */
    constructor(x?: number, y?: number, z?: number);

    /**
     * The x component of this Vector.
     */
    x: number;

    /**
     * The y component of this Vector.
     */
    y: number;

    /**
     * The z component of this Vector.
     */
    z: number;

    /**
     * Set this Vector to point up.
     *
     * Sets the y component of the vector to 1, and the others to 0.
     */
    up(): Phaser.Math.Vector3;

    /**
     * Sets the components of this Vector to be the `Math.min` result from the given vector.
     * @param v The Vector3 to check the minimum values against.
     */
    min(v: Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Sets the components of this Vector to be the `Math.max` result from the given vector.
     * @param v The Vector3 to check the maximum values against.
     */
    max(v: Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Make a clone of this Vector3.
     */
    clone(): Phaser.Math.Vector3;

    /**
     * Adds the two given Vector3s and sets the results into this Vector3.
     * @param a The first Vector to add.
     * @param b The second Vector to add.
     */
    addVectors(a: Phaser.Math.Vector3, b: Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Calculate the cross (vector) product of two given Vectors.
     * @param a The first Vector to multiply.
     * @param b The second Vector to multiply.
     */
    crossVectors(a: Phaser.Math.Vector3, b: Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Check whether this Vector is equal to a given Vector.
     *
     * Performs a strict equality check against each Vector's components.
     * @param v The Vector3 to compare against.
     */
    equals(v: Phaser.Math.Vector3): boolean;

    /**
     * Copy the components of a given Vector into this Vector.
     * @param src The Vector to copy the components from.
     */
    copy(src: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Set the `x`, `y`, and `z` components of this Vector to the given `x`, `y`, and `z` values.
     * @param x The x value to set for this Vector, or an object containing x, y and z components.
     * @param y The y value to set for this Vector.
     * @param z The z value to set for this Vector.
     */
    set(x: number | object, y?: number, z?: number): Phaser.Math.Vector3;

    /**
     * Sets the components of this Vector3 from the position of the given Matrix4.
     * @param mat4 The Matrix4 to get the position from.
     */
    setFromMatrixPosition(mat4: Phaser.Math.Matrix4): Phaser.Math.Vector3;

    /**
     * Sets the components of this Vector3 from the Matrix4 column specified.
     * @param mat4 The Matrix4 to get the column from.
     * @param index The column index.
     */
    setFromMatrixColumn(mat4: Phaser.Math.Matrix4, index: number): Phaser.Math.Vector3;

    /**
     * Sets the components of this Vector3 from the given array, based on the offset.
     *
     * Vector3.x = array[offset]
     * Vector3.y = array[offset + 1]
     * Vector3.z = array[offset + 2]
     * @param array The array of values to get this Vector from.
     * @param offset The offset index into the array. Default 0.
     */
    fromArray(array: number[], offset?: number): Phaser.Math.Vector3;

    /**
     * Add a given Vector to this Vector. Addition is component-wise.
     * @param v The Vector to add to this Vector.
     */
    add(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Add the given value to each component of this Vector.
     * @param s The amount to add to this Vector.
     */
    addScalar(s: number): Phaser.Math.Vector3;

    /**
     * Add and scale a given Vector to this Vector. Addition is component-wise.
     * @param v The Vector to add to this Vector.
     * @param scale The amount to scale `v` by.
     */
    addScale(v: Phaser.Math.Vector2 | Phaser.Math.Vector3, scale: number): Phaser.Math.Vector3;

    /**
     * Subtract the given Vector from this Vector. Subtraction is component-wise.
     * @param v The Vector to subtract from this Vector.
     */
    subtract(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Perform a component-wise multiplication between this Vector and the given Vector.
     *
     * Multiplies this Vector by the given Vector.
     * @param v The Vector to multiply this Vector by.
     */
    multiply(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Scale this Vector by the given value.
     * @param scale The value to scale this Vector by.
     */
    scale(scale: number): Phaser.Math.Vector3;

    /**
     * Perform a component-wise division between this Vector and the given Vector.
     *
     * Divides this Vector by the given Vector.
     * @param v The Vector to divide this Vector by.
     */
    divide(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Negate the `x`, `y` and `z` components of this Vector.
     */
    negate(): Phaser.Math.Vector3;

    /**
     * Calculate the distance between this Vector and the given Vector.
     * @param v The Vector to calculate the distance to.
     */
    distance(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): number;

    /**
     * Calculate the distance between this Vector and the given Vector, squared.
     * @param v The Vector to calculate the distance to.
     */
    distanceSq(v: Phaser.Math.Vector2 | Phaser.Math.Vector3): number;

    /**
     * Calculate the length (or magnitude) of this Vector.
     */
    length(): number;

    /**
     * Calculate the length of this Vector squared.
     */
    lengthSq(): number;

    /**
     * Normalize this Vector.
     *
     * Makes the vector a unit length vector (magnitude of 1) in the same direction.
     */
    normalize(): Phaser.Math.Vector3;

    /**
     * Calculate the dot product of this Vector and the given Vector.
     * @param v The Vector3 to dot product with this Vector3.
     */
    dot(v: Phaser.Math.Vector3): number;

    /**
     * Calculate the cross (vector) product of this Vector (which will be modified) and the given Vector.
     * @param v The Vector to cross product with.
     */
    cross(v: Phaser.Math.Vector3): Phaser.Math.Vector3;

    /**
     * Linearly interpolate between this Vector and the given Vector.
     *
     * Interpolates this Vector towards the given Vector.
     * @param v The Vector3 to interpolate towards.
     * @param t The interpolation percentage, between 0 and 1. Default 0.
     */
    lerp(v: Phaser.Math.Vector3, t?: number): Phaser.Math.Vector3;

    /**
     * Takes a Matrix3 and applies it to this Vector3.
     * @param mat3 The Matrix3 to apply to this Vector3.
     */
    applyMatrix3(mat3: Phaser.Math.Matrix3): Phaser.Math.Vector3;

    /**
     * Takes a Matrix4 and applies it to this Vector3.
     * @param mat4 The Matrix4 to apply to this Vector3.
     */
    applyMatrix4(mat4: Phaser.Math.Matrix4): Phaser.Math.Vector3;

    /**
     * Transform this Vector with the given Matrix.
     * @param mat The Matrix3 to transform this Vector3 with.
     */
    transformMat3(mat: Phaser.Math.Matrix3): Phaser.Math.Vector3;

    /**
     * Transform this Vector with the given Matrix4.
     * @param mat The Matrix4 to transform this Vector3 with.
     */
    transformMat4(mat: Phaser.Math.Matrix4): Phaser.Math.Vector3;

    /**
     * Transforms the coordinates of this Vector3 with the given Matrix4.
     * @param mat The Matrix4 to transform this Vector3 with.
     */
    transformCoordinates(mat: Phaser.Math.Matrix4): Phaser.Math.Vector3;

    /**
     * Transform this Vector with the given Quaternion.
     * @param q The Quaternion to transform this Vector with.
     */
    transformQuat(q: Phaser.Math.Quaternion): Phaser.Math.Vector3;

    /**
     * Multiplies this Vector3 by the specified matrix, applying a W divide. This is useful for projection,
     * e.g. unprojecting a 2D point into 3D space.
     * @param mat The Matrix4 to multiply this Vector3 with.
     */
    project(mat: Phaser.Math.Matrix4): Phaser.Math.Vector3;

    /**
     * Multiplies this Vector3 by the given view and projection matrices.
     * @param viewMatrix A View Matrix.
     * @param projectionMatrix A Projection Matrix.
     */
    projectViewMatrix(viewMatrix: Phaser.Math.Matrix4, projectionMatrix: Phaser.Math.Matrix4): Phaser.Math.Vector3;

    /**
     * Multiplies this Vector3 by the given inversed projection matrix and world matrix.
     * @param projectionMatrix An inversed Projection Matrix.
     * @param worldMatrix A World View Matrix.
     */
    unprojectViewMatrix(projectionMatrix: Phaser.Math.Matrix4, worldMatrix: Phaser.Math.Matrix4): Phaser.Math.Vector3;

    /**
     * Unproject this point from 2D space to 3D space.
     * The point should have its x and y properties set to
     * 2D screen space, and the z either at 0 (near plane)
     * or 1 (far plane). The provided matrix is assumed to already
     * be combined, i.e. projection * view * model.
     *
     * After this operation, this vector's (x, y, z) components will
     * represent the unprojected 3D coordinate.
     * @param viewport Screen x, y, width and height in pixels.
     * @param invProjectionView Combined projection and view matrix.
     */
    unproject(viewport: Phaser.Math.Vector4, invProjectionView: Phaser.Math.Matrix4): Phaser.Math.Vector3;

    /**
     * Make this Vector the zero vector (0, 0, 0).
     */
    reset(): Phaser.Math.Vector3;

    /**
     * A static zero Vector3 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly ZERO: Phaser.Math.Vector3;

    /**
     * A static right Vector3 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly RIGHT: Phaser.Math.Vector3;

    /**
     * A static left Vector3 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly LEFT: Phaser.Math.Vector3;

    /**
     * A static up Vector3 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly UP: Phaser.Math.Vector3;

    /**
     * A static down Vector3 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly DOWN: Phaser.Math.Vector3;

    /**
     * A static forward Vector3 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly FORWARD: Phaser.Math.Vector3;

    /**
     * A static back Vector3 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly BACK: Phaser.Math.Vector3;

    /**
     * A static one Vector3 for use by reference.
     *
     * This constant is meant for comparison operations and should not be modified directly.
     */
    static readonly ONE: Phaser.Math.Vector3;

  }

  /**
   * A representation of a vector in 4D space.
   *
   * A four-component vector.
   */
  class Vector4 {
    /**
     *
     * @param x The x component.
     * @param y The y component.
     * @param z The z component.
     * @param w The w component.
     */
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * The x component of this Vector.
     */
    x: number;

    /**
     * The y component of this Vector.
     */
    y: number;

    /**
     * The z component of this Vector.
     */
    z: number;

    /**
     * The w component of this Vector.
     */
    w: number;

    /**
     * Make a clone of this Vector4.
     */
    clone(): Phaser.Math.Vector4;

    /**
     * Copy the components of a given Vector into this Vector.
     * @param src The Vector to copy the components from.
     */
    copy(src: Phaser.Math.Vector4): Phaser.Math.Vector4;

    /**
     * Check whether this Vector is equal to a given Vector.
     *
     * Performs a strict quality check against each Vector's components.
     * @param v The vector to check equality with.
     */
    equals(v: Phaser.Math.Vector4): boolean;

    /**
     * Set the `x`, `y`, `z` and `w` components of the this Vector to the given `x`, `y`, `z` and `w` values.
     * @param x The x value to set for this Vector, or an object containing x, y, z and w components.
     * @param y The y value to set for this Vector.
     * @param z The z value to set for this Vector.
     * @param w The z value to set for this Vector.
     */
    set(x: number | object, y: number, z: number, w: number): Phaser.Math.Vector4;

    /**
     * Add a given Vector to this Vector. Addition is component-wise.
     * @param v The Vector to add to this Vector.
     */
    add(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Vector4;

    /**
     * Subtract the given Vector from this Vector. Subtraction is component-wise.
     * @param v The Vector to subtract from this Vector.
     */
    subtract(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Vector4;

    /**
     * Scale this Vector by the given value.
     * @param scale The value to scale this Vector by.
     */
    scale(scale: number): Phaser.Math.Vector4;

    /**
     * Calculate the length (or magnitude) of this Vector.
     */
    length(): number;

    /**
     * Calculate the length of this Vector squared.
     */
    lengthSq(): number;

    /**
     * Normalize this Vector.
     *
     * Makes the vector a unit length vector (magnitude of 1) in the same direction.
     */
    normalize(): Phaser.Math.Vector4;

    /**
     * Calculate the dot product of this Vector and the given Vector.
     * @param v The Vector4 to dot product with this Vector4.
     */
    dot(v: Phaser.Math.Vector4): number;

    /**
     * Linearly interpolate between this Vector and the given Vector.
     *
     * Interpolates this Vector towards the given Vector.
     * @param v The Vector4 to interpolate towards.
     * @param t The interpolation percentage, between 0 and 1. Default 0.
     */
    lerp(v: Phaser.Math.Vector4, t?: number): Phaser.Math.Vector4;

    /**
     * Perform a component-wise multiplication between this Vector and the given Vector.
     *
     * Multiplies this Vector by the given Vector.
     * @param v The Vector to multiply this Vector by.
     */
    multiply(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Vector4;

    /**
     * Perform a component-wise division between this Vector and the given Vector.
     *
     * Divides this Vector by the given Vector.
     * @param v The Vector to divide this Vector by.
     */
    divide(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): Phaser.Math.Vector4;

    /**
     * Calculate the distance between this Vector and the given Vector.
     * @param v The Vector to calculate the distance to.
     */
    distance(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): number;

    /**
     * Calculate the distance between this Vector and the given Vector, squared.
     * @param v The Vector to calculate the distance to.
     */
    distanceSq(v: Phaser.Math.Vector2 | Phaser.Math.Vector3 | Phaser.Math.Vector4): number;

    /**
     * Negate the `x`, `y`, `z` and `w` components of this Vector.
     */
    negate(): Phaser.Math.Vector4;

    /**
     * Transform this Vector with the given Matrix.
     * @param mat The Matrix4 to transform this Vector4 with.
     */
    transformMat4(mat: Phaser.Math.Matrix4): Phaser.Math.Vector4;

    /**
     * Transform this Vector with the given Quaternion.
     * @param q The Quaternion to transform this Vector with.
     */
    transformQuat(q: Phaser.Math.Quaternion): Phaser.Math.Vector4;

    /**
     * Make this Vector the zero vector (0, 0, 0, 0).
     */
    reset(): Phaser.Math.Vector4;

  }

  /**
   * Checks if the two values are within the given `tolerance` of each other.
   * @param a The first value to use in the calculation.
   * @param b The second value to use in the calculation.
   * @param tolerance The tolerance. Anything equal to or less than this value is considered as being within range.
   */
  function Within(a: number, b: number, tolerance: number): boolean;

  /**
   * Wrap the given `value` between `min` and `max.
   * @param value The value to wrap.
   * @param min The minimum value.
   * @param max The maximum value.
   */
  function Wrap(value: number, min: number, max: number): number;

}