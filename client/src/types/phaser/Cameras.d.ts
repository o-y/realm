namespace Phaser.Cameras {
  namespace Scene2D {
    /**
     * A Base Camera class.
     *
     * The Camera is the way in which all games are rendered in Phaser. They provide a view into your game world,
     * and can be positioned, rotated, zoomed and scrolled accordingly.
     *
     * A Camera consists of two elements: The viewport and the scroll values.
     *
     * The viewport is the physical position and size of the Camera within your game. Cameras, by default, are
     * created the same size as your game, but their position and size can be set to anything. This means if you
     * wanted to create a camera that was 320x200 in size, positioned in the bottom-right corner of your game,
     * you'd adjust the viewport to do that (using methods like `setViewport` and `setSize`).
     *
     * If you wish to change where the Camera is looking in your game, then you scroll it. You can do this
     * via the properties `scrollX` and `scrollY` or the method `setScroll`. Scrolling has no impact on the
     * viewport, and changing the viewport has no impact on the scrolling.
     *
     * By default a Camera will render all Game Objects it can see. You can change this using the `ignore` method,
     * allowing you to filter Game Objects out on a per-Camera basis.
     *
     * The Base Camera is extended by the Camera class, which adds in special effects including Fade,
     * Flash and Camera Shake, as well as the ability to follow Game Objects.
     *
     * The Base Camera was introduced in Phaser 3.12. It was split off from the Camera class, to allow
     * you to isolate special effects as needed. Therefore the 'since' values for properties of this class relate
     * to when they were added to the Camera class.
     */
    class BaseCamera extends Phaser.Events.EventEmitter implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.Visible {
      /**
       *
       * @param x The x position of the Camera, relative to the top-left of the game canvas.
       * @param y The y position of the Camera, relative to the top-left of the game canvas.
       * @param width The width of the Camera, in pixels.
       * @param height The height of the Camera, in pixels.
       */
      constructor(x: number, y: number, width: number, height: number);

      /**
       * A reference to the Scene this camera belongs to.
       */
      scene: Phaser.Scene;

      /**
       * A reference to the Game Scene Manager.
       */
      sceneManager: Phaser.Scenes.SceneManager;

      /**
       * A reference to the Game Scale Manager.
       */
      scaleManager: Phaser.Scale.ScaleManager;

      /**
       * A reference to the Scene's Camera Manager to which this Camera belongs.
       */
      cameraManager: Phaser.Cameras.Scene2D.CameraManager;

      /**
       * The Camera ID. Assigned by the Camera Manager and used to handle camera exclusion.
       * This value is a bitmask.
       */
      readonly id: number;

      /**
       * The name of the Camera. This is left empty for your own use.
       */
      name: string;

      /**
       * Should this camera round its pixel values to integers?
       */
      roundPixels: boolean;

      /**
       * Is this Camera visible or not?
       *
       * A visible camera will render and perform input tests.
       * An invisible camera will not render anything and will skip input tests.
       */
      visible: boolean;

      /**
       * Is this Camera using a bounds to restrict scrolling movement?
       *
       * Set this property along with the bounds via `Camera.setBounds`.
       */
      useBounds: boolean;

      /**
       * The World View is a Rectangle that defines the area of the 'world' the Camera is currently looking at.
       * This factors in the Camera viewport size, zoom and scroll position and is updated in the Camera preRender step.
       * If you have enabled Camera bounds the worldview will be clamped to those bounds accordingly.
       * You can use it for culling or intersection checks.
       */
      readonly worldView: Phaser.Geom.Rectangle;

      /**
       * Is this Camera dirty?
       *
       * A dirty Camera has had either its viewport size, bounds, scroll, rotation or zoom levels changed since the last frame.
       *
       * This flag is cleared during the `postRenderCamera` method of the renderer.
       */
      dirty: boolean;

      /**
       * Does this Camera have a transparent background?
       */
      transparent: boolean;

      /**
       * The background color of this Camera. Only used if `transparent` is `false`.
       */
      backgroundColor: Phaser.Display.Color;

      /**
       * The Camera alpha value. Setting this property impacts every single object that this Camera
       * renders. You can either set the property directly, i.e. via a Tween, to fade a Camera in or out,
       * or via the chainable `setAlpha` method instead.
       */
      alpha: number;

      /**
       * Should the camera cull Game Objects before checking them for input hit tests?
       * In some special cases it may be beneficial to disable this.
       */
      disableCull: boolean;

      /**
       * The mid-point of the Camera in 'world' coordinates.
       *
       * Use it to obtain exactly where in the world the center of the camera is currently looking.
       *
       * This value is updated in the preRender method, after the scroll values and follower
       * have been processed.
       */
      readonly midPoint: Phaser.Math.Vector2;

      /**
       * The horizontal origin of rotation for this Camera.
       *
       * By default the camera rotates around the center of the viewport.
       *
       * Changing the origin allows you to adjust the point in the viewport from which rotation happens.
       * A value of 0 would rotate from the top-left of the viewport. A value of 1 from the bottom right.
       *
       * See `setOrigin` to set both origins in a single, chainable call.
       */
      originX: number;

      /**
       * The vertical origin of rotation for this Camera.
       *
       * By default the camera rotates around the center of the viewport.
       *
       * Changing the origin allows you to adjust the point in the viewport from which rotation happens.
       * A value of 0 would rotate from the top-left of the viewport. A value of 1 from the bottom right.
       *
       * See `setOrigin` to set both origins in a single, chainable call.
       */
      originY: number;

      /**
       * The Mask this Camera is using during render.
       * Set the mask using the `setMask` method. Remove the mask using the `clearMask` method.
       */
      mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

      /**
       * This array is populated with all of the Game Objects that this Camera has rendered
       * in the previous (or current, depending on when you inspect it) frame.
       *
       * It is cleared at the start of `Camera.preUpdate`, or if the Camera is destroyed.
       *
       * You should not modify this array as it is used internally by the input system,
       * however you can read it as required. Note that Game Objects may appear in this
       * list multiple times if they belong to multiple non-exclusive Containers.
       */
      renderList: Phaser.GameObjects.GameObject[];

      /**
       * Adds the given Game Object to this cameras render list.
       *
       * This is invoked during the rendering stage. Only objects that are actually rendered
       * will appear in the render list.
       * @param child The Game Object to add to the render list.
       */
      addToRenderList(child: Phaser.GameObjects.GameObject): void;

      /**
       * Set the Alpha level of this Camera. The alpha controls the opacity of the Camera as it renders.
       * Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.
       * @param value The Camera alpha value. Default 1.
       */
      setAlpha(value?: number): this;

      /**
       * Sets the rotation origin of this Camera.
       *
       * The values are given in the range 0 to 1 and are only used when calculating Camera rotation.
       *
       * By default the camera rotates around the center of the viewport.
       *
       * Changing the origin allows you to adjust the point in the viewport from which rotation happens.
       * A value of 0 would rotate from the top-left of the viewport. A value of 1 from the bottom right.
       * @param x The horizontal origin value. Default 0.5.
       * @param y The vertical origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setOrigin(x?: number, y?: number): this;

      /**
       * Calculates what the Camera.scrollX and scrollY values would need to be in order to move
       * the Camera so it is centered on the given x and y coordinates, without actually moving
       * the Camera there. The results are clamped based on the Camera bounds, if set.
       * @param x The horizontal coordinate to center on.
       * @param y The vertical coordinate to center on.
       * @param out A Vector2 to store the values in. If not given a new Vector2 is created.
       */
      getScroll(x: number, y: number, out?: Phaser.Math.Vector2): Phaser.Math.Vector2;

      /**
       * Moves the Camera horizontally so that it is centered on the given x coordinate, bounds allowing.
       * Calling this does not change the scrollY value.
       * @param x The horizontal coordinate to center on.
       */
      centerOnX(x: number): this;

      /**
       * Moves the Camera vertically so that it is centered on the given y coordinate, bounds allowing.
       * Calling this does not change the scrollX value.
       * @param y The vertical coordinate to center on.
       */
      centerOnY(y: number): this;

      /**
       * Moves the Camera so that it is centered on the given coordinates, bounds allowing.
       * @param x The horizontal coordinate to center on.
       * @param y The vertical coordinate to center on.
       */
      centerOn(x: number, y: number): this;

      /**
       * Moves the Camera so that it is looking at the center of the Camera Bounds, if enabled.
       */
      centerToBounds(): this;

      /**
       * Moves the Camera so that it is re-centered based on its viewport size.
       */
      centerToSize(): this;

      /**
       * Takes an array of Game Objects and returns a new array featuring only those objects
       * visible by this camera.
       * @param renderableObjects An array of Game Objects to cull.
       */
      cull<G extends Phaser.GameObjects.GameObject[]>(renderableObjects: G): G;

      /**
       * Converts the given `x` and `y` coordinates into World space, based on this Cameras transform.
       * You can optionally provide a Vector2, or similar object, to store the results in.
       * @param x The x position to convert to world space.
       * @param y The y position to convert to world space.
       * @param output An optional object to store the results in. If not provided a new Vector2 will be created.
       */
      getWorldPoint<O extends Phaser.Math.Vector2>(x: number, y: number, output?: O): O;

      /**
       * Given a Game Object, or an array of Game Objects, it will update all of their camera filter settings
       * so that they are ignored by this Camera. This means they will not be rendered by this Camera.
       * @param entries The Game Object, or array of Game Objects, to be ignored by this Camera.
       */
      ignore(entries: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group): this;

      /**
       * Internal preRender step.
       */
      protected preRender(): void;

      /**
       * Takes an x value and checks it's within the range of the Camera bounds, adjusting if required.
       * Do not call this method if you are not using camera bounds.
       * @param x The value to horizontally scroll clamp.
       */
      clampX(x: number): number;

      /**
       * Takes a y value and checks it's within the range of the Camera bounds, adjusting if required.
       * Do not call this method if you are not using camera bounds.
       * @param y The value to vertically scroll clamp.
       */
      clampY(y: number): number;

      /**
       * If this Camera has previously had movement bounds set on it, this will remove them.
       */
      removeBounds(): this;

      /**
       * Set the rotation of this Camera. This causes everything it renders to appear rotated.
       *
       * Rotating a camera does not rotate the viewport itself, it is applied during rendering.
       * @param value The cameras angle of rotation, given in degrees. Default 0.
       */
      setAngle(value?: number): this;

      /**
       * Sets the background color for this Camera.
       *
       * By default a Camera has a transparent background but it can be given a solid color, with any level
       * of transparency, via this method.
       *
       * The color value can be specified using CSS color notation, hex or numbers.
       * @param color The color value. In CSS, hex or numeric color notation. Default 'rgba(0,0,0,0)'.
       */
      setBackgroundColor(color?: string | number | Phaser.Types.Display.InputColorObject): this;

      /**
       * Set the bounds of the Camera. The bounds are an axis-aligned rectangle.
       *
       * The Camera bounds controls where the Camera can scroll to, stopping it from scrolling off the
       * edges and into blank space. It does not limit the placement of Game Objects, or where
       * the Camera viewport can be positioned.
       *
       * Temporarily disable the bounds by changing the boolean `Camera.useBounds`.
       *
       * Clear the bounds entirely by calling `Camera.removeBounds`.
       *
       * If you set bounds that are smaller than the viewport it will stop the Camera from being
       * able to scroll. The bounds can be positioned where-ever you wish. By default they are from
       * 0x0 to the canvas width x height. This means that the coordinate 0x0 is the top left of
       * the Camera bounds. However, you can position them anywhere. So if you wanted a game world
       * that was 2048x2048 in size, with 0x0 being the center of it, you can set the bounds x/y
       * to be -1024, -1024, with a width and height of 2048. Depending on your game you may find
       * it easier for 0x0 to be the top-left of the bounds, or you may wish 0x0 to be the middle.
       * @param x The top-left x coordinate of the bounds.
       * @param y The top-left y coordinate of the bounds.
       * @param width The width of the bounds, in pixels.
       * @param height The height of the bounds, in pixels.
       * @param centerOn If `true` the Camera will automatically be centered on the new bounds. Default false.
       */
      setBounds(x: number, y: number, width: number, height: number, centerOn?: boolean): this;

      /**
       * Returns a rectangle containing the bounds of the Camera.
       *
       * If the Camera does not have any bounds the rectangle will be empty.
       *
       * The rectangle is a copy of the bounds, so is safe to modify.
       * @param out An optional Rectangle to store the bounds in. If not given, a new Rectangle will be created.
       */
      getBounds(out?: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle;

      /**
       * Sets the name of this Camera.
       * This value is for your own use and isn't used internally.
       * @param value The name of the Camera. Default ''.
       */
      setName(value?: string): this;

      /**
       * Set the position of the Camera viewport within the game.
       *
       * This does not change where the camera is 'looking'. See `setScroll` to control that.
       * @param x The top-left x coordinate of the Camera viewport.
       * @param y The top-left y coordinate of the Camera viewport. Default x.
       */
      setPosition(x: number, y?: number): this;

      /**
       * Set the rotation of this Camera. This causes everything it renders to appear rotated.
       *
       * Rotating a camera does not rotate the viewport itself, it is applied during rendering.
       * @param value The rotation of the Camera, in radians. Default 0.
       */
      setRotation(value?: number): this;

      /**
       * Should the Camera round pixel values to whole integers when rendering Game Objects?
       *
       * In some types of game, especially with pixel art, this is required to prevent sub-pixel aliasing.
       * @param value `true` to round Camera pixels, `false` to not.
       */
      setRoundPixels(value: boolean): this;

      /**
       * Sets the Scene the Camera is bound to.
       * @param scene The Scene the camera is bound to.
       */
      setScene(scene: Phaser.Scene): this;

      /**
       * Set the position of where the Camera is looking within the game.
       * You can also modify the properties `Camera.scrollX` and `Camera.scrollY` directly.
       * Use this method, or the scroll properties, to move your camera around the game world.
       *
       * This does not change where the camera viewport is placed. See `setPosition` to control that.
       * @param x The x coordinate of the Camera in the game world.
       * @param y The y coordinate of the Camera in the game world. Default x.
       */
      setScroll(x: number, y?: number): this;

      /**
       * Set the size of the Camera viewport.
       *
       * By default a Camera is the same size as the game, but can be made smaller via this method,
       * allowing you to create mini-cam style effects by creating and positioning a smaller Camera
       * viewport within your game.
       * @param width The width of the Camera viewport.
       * @param height The height of the Camera viewport. Default width.
       */
      setSize(width: number, height?: number): this;

      /**
       * This method sets the position and size of the Camera viewport in a single call.
       *
       * If you're trying to change where the Camera is looking at in your game, then see
       * the method `Camera.setScroll` instead. This method is for changing the viewport
       * itself, not what the camera can see.
       *
       * By default a Camera is the same size as the game, but can be made smaller via this method,
       * allowing you to create mini-cam style effects by creating and positioning a smaller Camera
       * viewport within your game.
       * @param x The top-left x coordinate of the Camera viewport.
       * @param y The top-left y coordinate of the Camera viewport.
       * @param width The width of the Camera viewport.
       * @param height The height of the Camera viewport. Default width.
       */
      setViewport(x: number, y: number, width: number, height?: number): this;

      /**
       * Set the zoom value of the Camera.
       *
       * Changing to a smaller value, such as 0.5, will cause the camera to 'zoom out'.
       * Changing to a larger value, such as 2, will cause the camera to 'zoom in'.
       *
       * A value of 1 means 'no zoom' and is the default.
       *
       * Changing the zoom does not impact the Camera viewport in any way, it is only applied during rendering.
       *
       * As of Phaser 3.50 you can now set the horizontal and vertical zoom values independently.
       * @param x The horizontal zoom value of the Camera. The minimum it can be is 0.001. Default 1.
       * @param y The vertical zoom value of the Camera. The minimum it can be is 0.001. Default x.
       */
      setZoom(x?: number, y?: number): this;

      /**
       * Sets the mask to be applied to this Camera during rendering.
       *
       * The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
       *
       * Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * If a mask is already set on this Camera it will be immediately replaced.
       *
       * Masks have no impact on physics or input detection. They are purely a rendering component
       * that allows you to limit what is visible during the render pass.
       * @param mask The mask this Camera will use when rendering.
       * @param fixedPosition Should the mask translate along with the Camera, or be fixed in place and not impacted by the Cameras transform? Default true.
       */
      setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask, fixedPosition?: boolean): this;

      /**
       * Clears the mask that this Camera was using.
       * @param destroyMask Destroy the mask before clearing it? Default false.
       */
      clearMask(destroyMask?: boolean): this;

      /**
       * Sets the visibility of this Camera.
       *
       * An invisible Camera will skip rendering and input tests of everything it can see.
       * @param value The visible state of the Camera.
       */
      setVisible(value: boolean): this;

      /**
       * Returns an Object suitable for JSON storage containing all of the Camera viewport and rendering properties.
       */
      toJSON(): Phaser.Types.Cameras.Scene2D.JSONCamera;

      /**
       * Internal method called automatically by the Camera Manager.
       * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
       * @param delta The delta time, in ms, elapsed since the last frame.
       */
      protected update(time: number, delta: number): void;

      /**
       * Destroys this Camera instance and its internal properties and references.
       * Once destroyed you cannot use this Camera again, even if re-added to a Camera Manager.
       *
       * This method is called automatically by `CameraManager.remove` if that methods `runDestroy` argument is `true`, which is the default.
       *
       * Unless you have a specific reason otherwise, always use `CameraManager.remove` and allow it to handle the camera destruction,
       * rather than calling this method directly.
       */
      destroy(): void;

      /**
       * The x position of the Camera viewport, relative to the top-left of the game canvas.
       * The viewport is the area into which the camera renders.
       * To adjust the position the camera is looking at in the game world, see the `scrollX` value.
       */
      x: number;

      /**
       * The y position of the Camera viewport, relative to the top-left of the game canvas.
       * The viewport is the area into which the camera renders.
       * To adjust the position the camera is looking at in the game world, see the `scrollY` value.
       */
      y: number;

      /**
       * The width of the Camera viewport, in pixels.
       *
       * The viewport is the area into which the Camera renders. Setting the viewport does
       * not restrict where the Camera can scroll to.
       */
      width: number;

      /**
       * The height of the Camera viewport, in pixels.
       *
       * The viewport is the area into which the Camera renders. Setting the viewport does
       * not restrict where the Camera can scroll to.
       */
      height: number;

      /**
       * The horizontal scroll position of this Camera.
       *
       * Change this value to cause the Camera to scroll around your Scene.
       *
       * Alternatively, setting the Camera to follow a Game Object, via the `startFollow` method,
       * will automatically adjust the Camera scroll values accordingly.
       *
       * You can set the bounds within which the Camera can scroll via the `setBounds` method.
       */
      scrollX: number;

      /**
       * The vertical scroll position of this Camera.
       *
       * Change this value to cause the Camera to scroll around your Scene.
       *
       * Alternatively, setting the Camera to follow a Game Object, via the `startFollow` method,
       * will automatically adjust the Camera scroll values accordingly.
       *
       * You can set the bounds within which the Camera can scroll via the `setBounds` method.
       */
      scrollY: number;

      /**
       * The Camera zoom value. Change this value to zoom in, or out of, a Scene.
       *
       * A value of 0.5 would zoom the Camera out, so you can now see twice as much
       * of the Scene as before. A value of 2 would zoom the Camera in, so every pixel
       * now takes up 2 pixels when rendered.
       *
       * Set to 1 to return to the default zoom level.
       *
       * Be careful to never set this value to zero.
       */
      zoom: number;

      /**
       * The Camera horizontal zoom value. Change this value to zoom in, or out of, a Scene.
       *
       * A value of 0.5 would zoom the Camera out, so you can now see twice as much
       * of the Scene as before. A value of 2 would zoom the Camera in, so every pixel
       * now takes up 2 pixels when rendered.
       *
       * Set to 1 to return to the default zoom level.
       *
       * Be careful to never set this value to zero.
       */
      zoomX: number;

      /**
       * The Camera vertical zoom value. Change this value to zoom in, or out of, a Scene.
       *
       * A value of 0.5 would zoom the Camera out, so you can now see twice as much
       * of the Scene as before. A value of 2 would zoom the Camera in, so every pixel
       * now takes up 2 pixels when rendered.
       *
       * Set to 1 to return to the default zoom level.
       *
       * Be careful to never set this value to zero.
       */
      zoomY: number;

      /**
       * The horizontal position of the center of the Camera's viewport, relative to the left of the game canvas.
       */
      readonly centerX: number;

      /**
       * The vertical position of the center of the Camera's viewport, relative to the top of the game canvas.
       */
      readonly centerY: number;

      /**
       * The displayed width of the camera viewport, factoring in the camera zoom level.
       *
       * If a camera has a viewport width of 800 and a zoom of 0.5 then its display width
       * would be 1600, as it's displaying twice as many pixels as zoom level 1.
       *
       * Equally, a camera with a width of 800 and zoom of 2 would have a display width
       * of 400 pixels.
       */
      readonly displayWidth: number;

      /**
       * The displayed height of the camera viewport, factoring in the camera zoom level.
       *
       * If a camera has a viewport height of 600 and a zoom of 0.5 then its display height
       * would be 1200, as it's displaying twice as many pixels as zoom level 1.
       *
       * Equally, a camera with a height of 600 and zoom of 2 would have a display height
       * of 300 pixels.
       */
      readonly displayHeight: number;

      /**
       * Clears all alpha values associated with this Game Object.
       *
       * Immediately sets the alpha levels back to 1 (fully opaque).
       */
      clearAlpha(): this;

      /**
       * The alpha value starting from the top-left of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       */
      alphaTopLeft: number;

      /**
       * The alpha value starting from the top-right of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       */
      alphaTopRight: number;

      /**
       * The alpha value starting from the bottom-left of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       */
      alphaBottomLeft: number;

      /**
       * The alpha value starting from the bottom-right of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       */
      alphaBottomRight: number;

    }

    /**
     * A Camera.
     *
     * The Camera is the way in which all games are rendered in Phaser. They provide a view into your game world,
     * and can be positioned, rotated, zoomed and scrolled accordingly.
     *
     * A Camera consists of two elements: The viewport and the scroll values.
     *
     * The viewport is the physical position and size of the Camera within your game. Cameras, by default, are
     * created the same size as your game, but their position and size can be set to anything. This means if you
     * wanted to create a camera that was 320x200 in size, positioned in the bottom-right corner of your game,
     * you'd adjust the viewport to do that (using methods like `setViewport` and `setSize`).
     *
     * If you wish to change where the Camera is looking in your game, then you scroll it. You can do this
     * via the properties `scrollX` and `scrollY` or the method `setScroll`. Scrolling has no impact on the
     * viewport, and changing the viewport has no impact on the scrolling.
     *
     * By default a Camera will render all Game Objects it can see. You can change this using the `ignore` method,
     * allowing you to filter Game Objects out on a per-Camera basis.
     *
     * A Camera also has built-in special effects including Fade, Flash and Camera Shake.
     */
    class Camera extends Phaser.Cameras.Scene2D.BaseCamera implements Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Pipeline {
      /**
       *
       * @param x The x position of the Camera, relative to the top-left of the game canvas.
       * @param y The y position of the Camera, relative to the top-left of the game canvas.
       * @param width The width of the Camera, in pixels.
       * @param height The height of the Camera, in pixels.
       */
      constructor(x: number, y: number, width: number, height: number);

      /**
       * Does this Camera allow the Game Objects it renders to receive input events?
       */
      inputEnabled: boolean;

      /**
       * The Camera Fade effect handler.
       * To fade this camera see the `Camera.fade` methods.
       */
      fadeEffect: Phaser.Cameras.Scene2D.Effects.Fade;

      /**
       * The Camera Flash effect handler.
       * To flash this camera see the `Camera.flash` method.
       */
      flashEffect: Phaser.Cameras.Scene2D.Effects.Flash;

      /**
       * The Camera Shake effect handler.
       * To shake this camera see the `Camera.shake` method.
       */
      shakeEffect: Phaser.Cameras.Scene2D.Effects.Shake;

      /**
       * The Camera Pan effect handler.
       * To pan this camera see the `Camera.pan` method.
       */
      panEffect: Phaser.Cameras.Scene2D.Effects.Pan;

      /**
       * The Camera Rotate To effect handler.
       * To rotate this camera see the `Camera.rotateTo` method.
       */
      rotateToEffect: Phaser.Cameras.Scene2D.Effects.RotateTo;

      /**
       * The Camera Zoom effect handler.
       * To zoom this camera see the `Camera.zoom` method.
       */
      zoomEffect: Phaser.Cameras.Scene2D.Effects.Zoom;

      /**
       * The linear interpolation value to use when following a target.
       *
       * Can also be set via `setLerp` or as part of the `startFollow` call.
       *
       * The default values of 1 means the camera will instantly snap to the target coordinates.
       * A lower value, such as 0.1 means the camera will more slowly track the target, giving
       * a smooth transition. You can set the horizontal and vertical values independently, and also
       * adjust this value in real-time during your game.
       *
       * Be sure to keep the value between 0 and 1. A value of zero will disable tracking on that axis.
       */
      lerp: Phaser.Math.Vector2;

      /**
       * The values stored in this property are subtracted from the Camera targets position, allowing you to
       * offset the camera from the actual target x/y coordinates by this amount.
       * Can also be set via `setFollowOffset` or as part of the `startFollow` call.
       */
      followOffset: Phaser.Math.Vector2;

      /**
       * The Camera dead zone.
       *
       * The deadzone is only used when the camera is following a target.
       *
       * It defines a rectangular region within which if the target is present, the camera will not scroll.
       * If the target moves outside of this area, the camera will begin scrolling in order to follow it.
       *
       * The `lerp` values that you can set for a follower target also apply when using a deadzone.
       *
       * You can directly set this property to be an instance of a Rectangle. Or, you can use the
       * `setDeadzone` method for a chainable approach.
       *
       * The rectangle you provide can have its dimensions adjusted dynamically, however, please
       * note that its position is updated every frame, as it is constantly re-centered on the cameras mid point.
       *
       * Calling `setDeadzone` with no arguments will reset an active deadzone, as will setting this property
       * to `null`.
       */
      deadzone: Phaser.Geom.Rectangle;

      /**
       * Sets the Camera dead zone.
       *
       * The deadzone is only used when the camera is following a target.
       *
       * It defines a rectangular region within which if the target is present, the camera will not scroll.
       * If the target moves outside of this area, the camera will begin scrolling in order to follow it.
       *
       * The deadzone rectangle is re-positioned every frame so that it is centered on the mid-point
       * of the camera. This allows you to use the object for additional game related checks, such as
       * testing if an object is within it or not via a Rectangle.contains call.
       *
       * The `lerp` values that you can set for a follower target also apply when using a deadzone.
       *
       * Calling this method with no arguments will reset an active deadzone.
       * @param width The width of the deadzone rectangle in pixels. If not specified the deadzone is removed.
       * @param height The height of the deadzone rectangle in pixels.
       */
      setDeadzone(width?: number, height?: number): this;

      /**
       * Fades the Camera in from the given color over the duration specified.
       * @param duration The duration of the effect in milliseconds. Default 1000.
       * @param red The amount to fade the red channel towards. A value between 0 and 255. Default 0.
       * @param green The amount to fade the green channel towards. A value between 0 and 255. Default 0.
       * @param blue The amount to fade the blue channel towards. A value between 0 and 255. Default 0.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      fadeIn(duration?: number, red?: number, green?: number, blue?: number, callback?: Function, context?: any): this;

      /**
       * Fades the Camera out to the given color over the duration specified.
       * This is an alias for Camera.fade that forces the fade to start, regardless of existing fades.
       * @param duration The duration of the effect in milliseconds. Default 1000.
       * @param red The amount to fade the red channel towards. A value between 0 and 255. Default 0.
       * @param green The amount to fade the green channel towards. A value between 0 and 255. Default 0.
       * @param blue The amount to fade the blue channel towards. A value between 0 and 255. Default 0.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      fadeOut(duration?: number, red?: number, green?: number, blue?: number, callback?: Function, context?: any): this;

      /**
       * Fades the Camera from the given color to transparent over the duration specified.
       * @param duration The duration of the effect in milliseconds. Default 1000.
       * @param red The amount to fade the red channel towards. A value between 0 and 255. Default 0.
       * @param green The amount to fade the green channel towards. A value between 0 and 255. Default 0.
       * @param blue The amount to fade the blue channel towards. A value between 0 and 255. Default 0.
       * @param force Force the effect to start immediately, even if already running. Default false.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      fadeFrom(duration?: number, red?: number, green?: number, blue?: number, force?: boolean, callback?: Function, context?: any): this;

      /**
       * Fades the Camera from transparent to the given color over the duration specified.
       * @param duration The duration of the effect in milliseconds. Default 1000.
       * @param red The amount to fade the red channel towards. A value between 0 and 255. Default 0.
       * @param green The amount to fade the green channel towards. A value between 0 and 255. Default 0.
       * @param blue The amount to fade the blue channel towards. A value between 0 and 255. Default 0.
       * @param force Force the effect to start immediately, even if already running. Default false.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      fade(duration?: number, red?: number, green?: number, blue?: number, force?: boolean, callback?: Function, context?: any): this;

      /**
       * Flashes the Camera by setting it to the given color immediately and then fading it away again quickly over the duration specified.
       * @param duration The duration of the effect in milliseconds. Default 250.
       * @param red The amount to fade the red channel towards. A value between 0 and 255. Default 255.
       * @param green The amount to fade the green channel towards. A value between 0 and 255. Default 255.
       * @param blue The amount to fade the blue channel towards. A value between 0 and 255. Default 255.
       * @param force Force the effect to start immediately, even if already running. Default false.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      flash(duration?: number, red?: number, green?: number, blue?: number, force?: boolean, callback?: Function, context?: any): this;

      /**
       * Shakes the Camera by the given intensity over the duration specified.
       * @param duration The duration of the effect in milliseconds. Default 100.
       * @param intensity The intensity of the shake. Default 0.05.
       * @param force Force the shake effect to start immediately, even if already running. Default false.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      shake(duration?: number, intensity?: number | Phaser.Math.Vector2, force?: boolean, callback?: Function, context?: any): this;

      /**
       * This effect will scroll the Camera so that the center of its viewport finishes at the given destination,
       * over the duration and with the ease specified.
       * @param x The destination x coordinate to scroll the center of the Camera viewport to.
       * @param y The destination y coordinate to scroll the center of the Camera viewport to.
       * @param duration The duration of the effect in milliseconds. Default 1000.
       * @param ease The ease to use for the pan. Can be any of the Phaser Easing constants or a custom function. Default 'Linear'.
       * @param force Force the pan effect to start immediately, even if already running. Default false.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent four arguments: A reference to the camera, a progress amount between 0 and 1 indicating how complete the effect is,
       * the current camera scroll x coordinate and the current camera scroll y coordinate.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      pan(x: number, y: number, duration?: number, ease?: string | Function, force?: boolean, callback?: Phaser.Types.Cameras.Scene2D.CameraPanCallback, context?: any): this;

      /**
       * This effect will rotate the Camera so that the viewport finishes at the given angle in radians,
       * over the duration and with the ease specified.
       * @param radians The destination angle in radians to rotate the Camera viewport to. If the angle is positive then the rotation is clockwise else anticlockwise
       * @param shortestPath If shortest path is set to true the camera will rotate in the quickest direction clockwise or anti-clockwise. Default false.
       * @param duration The duration of the effect in milliseconds. Default 1000.
       * @param ease The ease to use for the rotation. Can be any of the Phaser Easing constants or a custom function. Default 'Linear'.
       * @param force Force the rotation effect to start immediately, even if already running. Default false.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent four arguments: A reference to the camera, a progress amount between 0 and 1 indicating how complete the effect is,
       * the current camera rotation angle in radians.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      rotateTo(radians: number, shortestPath?: boolean, duration?: number, ease?: string | Function, force?: boolean, callback?: CameraRotateCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

      /**
       * This effect will zoom the Camera to the given scale, over the duration and with the ease specified.
       * @param zoom The target Camera zoom value.
       * @param duration The duration of the effect in milliseconds. Default 1000.
       * @param ease The ease to use for the pan. Can be any of the Phaser Easing constants or a custom function. Default 'Linear'.
       * @param force Force the pan effect to start immediately, even if already running. Default false.
       * @param callback This callback will be invoked every frame for the duration of the effect.
       * It is sent four arguments: A reference to the camera, a progress amount between 0 and 1 indicating how complete the effect is,
       * the current camera scroll x coordinate and the current camera scroll y coordinate.
       * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
       */
      zoomTo(zoom: number, duration?: number, ease?: string | Function, force?: boolean, callback?: Phaser.Types.Cameras.Scene2D.CameraPanCallback, context?: any): this;

      /**
       * Internal preRender step.
       */
      protected preRender(): void;

      /**
       * Sets the linear interpolation value to use when following a target.
       *
       * The default values of 1 means the camera will instantly snap to the target coordinates.
       * A lower value, such as 0.1 means the camera will more slowly track the target, giving
       * a smooth transition. You can set the horizontal and vertical values independently, and also
       * adjust this value in real-time during your game.
       *
       * Be sure to keep the value between 0 and 1. A value of zero will disable tracking on that axis.
       * @param x The amount added to the horizontal linear interpolation of the follow target. Default 1.
       * @param y The amount added to the vertical linear interpolation of the follow target. Default 1.
       */
      setLerp(x?: number, y?: number): this;

      /**
       * Sets the horizontal and vertical offset of the camera from its follow target.
       * The values are subtracted from the targets position during the Cameras update step.
       * @param x The horizontal offset from the camera follow target.x position. Default 0.
       * @param y The vertical offset from the camera follow target.y position. Default 0.
       */
      setFollowOffset(x?: number, y?: number): this;

      /**
       * Sets the Camera to follow a Game Object.
       *
       * When enabled the Camera will automatically adjust its scroll position to keep the target Game Object
       * in its center.
       *
       * You can set the linear interpolation value used in the follow code.
       * Use low lerp values (such as 0.1) to automatically smooth the camera motion.
       *
       * If you find you're getting a slight "jitter" effect when following an object it's probably to do with sub-pixel
       * rendering of the targets position. This can be rounded by setting the `roundPixels` argument to `true` to
       * force full pixel rounding rendering. Note that this can still be broken if you have specified a non-integer zoom
       * value on the camera. So be sure to keep the camera zoom to integers.
       * @param target The target for the Camera to follow.
       * @param roundPixels Round the camera position to whole integers to avoid sub-pixel rendering? Default false.
       * @param lerpX A value between 0 and 1. This value specifies the amount of linear interpolation to use when horizontally tracking the target. The closer the value to 1, the faster the camera will track. Default 1.
       * @param lerpY A value between 0 and 1. This value specifies the amount of linear interpolation to use when vertically tracking the target. The closer the value to 1, the faster the camera will track. Default 1.
       * @param offsetX The horizontal offset from the camera follow target.x position. Default 0.
       * @param offsetY The vertical offset from the camera follow target.y position. Default 0.
       */
      startFollow(target: Phaser.GameObjects.GameObject | object, roundPixels?: boolean, lerpX?: number, lerpY?: number, offsetX?: number, offsetY?: number): this;

      /**
       * Stops a Camera from following a Game Object, if previously set via `Camera.startFollow`.
       */
      stopFollow(): this;

      /**
       * Resets any active FX, such as a fade, flash or shake. Useful to call after a fade in order to
       * remove the fade.
       */
      resetFX(): this;

      /**
       * Internal method called automatically by the Camera Manager.
       * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
       * @param delta The delta time, in ms, elapsed since the last frame.
       */
      protected update(time: number, delta: number): void;

      /**
       * Destroys this Camera instance. You rarely need to call this directly.
       *
       * Called by the Camera Manager. If you wish to destroy a Camera please use `CameraManager.remove` as
       * cameras are stored in a pool, ready for recycling later, and calling this directly will prevent that.
       */
      destroy(): void;

      /**
       * Clears all alpha values associated with this Game Object.
       *
       * Immediately sets the alpha levels back to 1 (fully opaque).
       */
      clearAlpha(): this;

      /**
       * The alpha value starting from the top-left of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       */
      alphaTopLeft: number;

      /**
       * The alpha value starting from the top-right of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       */
      alphaTopRight: number;

      /**
       * The alpha value starting from the bottom-left of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       */
      alphaBottomLeft: number;

      /**
       * The alpha value starting from the bottom-right of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       */
      alphaBottomRight: number;

      /**
       * The horizontally flipped state of the Game Object.
       *
       * A Game Object that is flipped horizontally will render inversed on the horizontal axis.
       * Flipping always takes place from the middle of the texture and does not impact the scale value.
       * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
       */
      flipX: boolean;

      /**
       * The vertically flipped state of the Game Object.
       *
       * A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down)
       * Flipping always takes place from the middle of the texture and does not impact the scale value.
       * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
       */
      flipY: boolean;

      /**
       * Toggles the horizontal flipped state of this Game Object.
       *
       * A Game Object that is flipped horizontally will render inversed on the horizontal axis.
       * Flipping always takes place from the middle of the texture and does not impact the scale value.
       * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
       */
      toggleFlipX(): this;

      /**
       * Toggles the vertical flipped state of this Game Object.
       */
      toggleFlipY(): this;

      /**
       * Sets the horizontal flipped state of this Game Object.
       *
       * A Game Object that is flipped horizontally will render inversed on the horizontal axis.
       * Flipping always takes place from the middle of the texture and does not impact the scale value.
       * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
       * @param value The flipped state. `false` for no flip, or `true` to be flipped.
       */
      setFlipX(value: boolean): this;

      /**
       * Sets the vertical flipped state of this Game Object.
       * @param value The flipped state. `false` for no flip, or `true` to be flipped.
       */
      setFlipY(value: boolean): this;

      /**
       * Sets the horizontal and vertical flipped state of this Game Object.
       *
       * A Game Object that is flipped will render inversed on the flipped axis.
       * Flipping always takes place from the middle of the texture and does not impact the scale value.
       * If this Game Object has a physics body, it will not change the body. This is a rendering toggle only.
       * @param x The horizontal flipped state. `false` for no flip, or `true` to be flipped.
       * @param y The horizontal flipped state. `false` for no flip, or `true` to be flipped.
       */
      setFlip(x: boolean, y: boolean): this;

      /**
       * Resets the horizontal and vertical flipped state of this Game Object back to their default un-flipped state.
       */
      resetFlip(): this;

      /**
       * The tint value being applied to the top-left vertice of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       * The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.
       */
      tintTopLeft: number;

      /**
       * The tint value being applied to the top-right vertice of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       * The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.
       */
      tintTopRight: number;

      /**
       * The tint value being applied to the bottom-left vertice of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       * The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.
       */
      tintBottomLeft: number;

      /**
       * The tint value being applied to the bottom-right vertice of the Game Object.
       * This value is interpolated from the corner to the center of the Game Object.
       * The value should be set as a hex number, i.e. 0xff0000 for red, or 0xff00ff for purple.
       */
      tintBottomRight: number;

      /**
       * The tint fill mode.
       *
       * `false` = An additive tint (the default), where vertices colors are blended with the texture.
       * `true` = A fill tint, where the vertices colors replace the texture, but respects texture alpha.
       */
      tintFill: boolean;

      /**
       * Clears all tint values associated with this Game Object.
       *
       * Immediately sets the color values back to 0xffffff and the tint type to 'additive',
       * which results in no visible change to the texture.
       */
      clearTint(): this;

      /**
       * Sets an additive tint on this Game Object.
       *
       * The tint works by taking the pixel color values from the Game Objects texture, and then
       * multiplying it by the color value of the tint. You can provide either one color value,
       * in which case the whole Game Object will be tinted in that color. Or you can provide a color
       * per corner. The colors are blended together across the extent of the Game Object.
       *
       * To modify the tint color once set, either call this method again with new values or use the
       * `tint` property to set all colors at once. Or, use the properties `tintTopLeft`, `tintTopRight,
       * `tintBottomLeft` and `tintBottomRight` to set the corner color values independently.
       *
       * To remove a tint call `clearTint`.
       *
       * To swap this from being an additive tint to a fill based tint set the property `tintFill` to `true`.
       * @param topLeft The tint being applied to the top-left of the Game Object. If no other values are given this value is applied evenly, tinting the whole Game Object. Default 0xffffff.
       * @param topRight The tint being applied to the top-right of the Game Object.
       * @param bottomLeft The tint being applied to the bottom-left of the Game Object.
       * @param bottomRight The tint being applied to the bottom-right of the Game Object.
       */
      setTint(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

      /**
       * Sets a fill-based tint on this Game Object.
       *
       * Unlike an additive tint, a fill-tint literally replaces the pixel colors from the texture
       * with those in the tint. You can use this for effects such as making a player flash 'white'
       * if hit by something. You can provide either one color value, in which case the whole
       * Game Object will be rendered in that color. Or you can provide a color per corner. The colors
       * are blended together across the extent of the Game Object.
       *
       * To modify the tint color once set, either call this method again with new values or use the
       * `tint` property to set all colors at once. Or, use the properties `tintTopLeft`, `tintTopRight,
       * `tintBottomLeft` and `tintBottomRight` to set the corner color values independently.
       *
       * To remove a tint call `clearTint`.
       *
       * To swap this from being a fill-tint to an additive tint set the property `tintFill` to `false`.
       * @param topLeft The tint being applied to the top-left of the Game Object. If not other values are given this value is applied evenly, tinting the whole Game Object. Default 0xffffff.
       * @param topRight The tint being applied to the top-right of the Game Object.
       * @param bottomLeft The tint being applied to the bottom-left of the Game Object.
       * @param bottomRight The tint being applied to the bottom-right of the Game Object.
       */
      setTintFill(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

      /**
       * The tint value being applied to the whole of the Game Object.
       * This property is a setter-only. Use the properties `tintTopLeft` etc to read the current tint value.
       */
      tint: number;

      /**
       * Does this Game Object have a tint applied?
       *
       * It checks to see if the 4 tint properties are set to the value 0xffffff
       * and that the `tintFill` property is `false`. This indicates that a Game Object isn't tinted.
       */
      readonly isTinted: boolean;

      /**
       * The initial WebGL pipeline of this Game Object.
       *
       * If you call `resetPipeline` on this Game Object, the pipeline is reset to this default.
       */
      defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      /**
       * The current WebGL pipeline of this Game Object.
       */
      pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

      /**
       * Does this Game Object have any Post Pipelines set?
       */
      hasPostPipeline: boolean;

      /**
       * The WebGL Post FX Pipelines this Game Object uses for post-render effects.
       *
       * The pipelines are processed in the order in which they appear in this array.
       *
       * If you modify this array directly, be sure to set the
       * `hasPostPipeline` property accordingly.
       */
      postPipelines: Phaser.Renderer.WebGL.Pipelines.PostFXPipeline[];

      /**
       * An object to store pipeline specific data in, to be read by the pipelines this Game Object uses.
       */
      pipelineData: object;

      /**
       * Sets the initial WebGL Pipeline of this Game Object.
       *
       * This should only be called during the instantiation of the Game Object. After that, use `setPipeline`.
       * @param pipeline Either the string-based name of the pipeline, or a pipeline instance to set.
       */
      initPipeline(pipeline: string | Phaser.Renderer.WebGL.WebGLPipeline): boolean;

      /**
       * Sets the main WebGL Pipeline of this Game Object.
       *
       * Also sets the `pipelineData` property, if the parameter is given.
       *
       * Both the pipeline and post pipelines share the same pipeline data object.
       * @param pipeline Either the string-based name of the pipeline, or a pipeline instance to set.
       * @param pipelineData Optional pipeline data object that is _deep copied_ into the `pipelineData` property of this Game Object.
       * @param copyData Should the pipeline data object be _deep copied_ into the `pipelineData` property of this Game Object? If `false` it will be set by reference instead. Default true.
       */
      setPipeline(pipeline: string | Phaser.Renderer.WebGL.WebGLPipeline, pipelineData?: object, copyData?: boolean): this;

      /**
       * Sets one, or more, Post Pipelines on this Game Object.
       *
       * Post Pipelines are invoked after this Game Object has rendered to its target and
       * are commonly used for post-fx.
       *
       * The post pipelines are appended to the `postPipelines` array belonging to this
       * Game Object. When the renderer processes this Game Object, it iterates through the post
       * pipelines in the order in which they appear in the array. If you are stacking together
       * multiple effects, be aware that the order is important.
       *
       * If you call this method multiple times, the new pipelines will be appended to any existing
       * post pipelines already set. Use the `resetPostPipeline` method to clear them first, if required.
       *
       * You can optionally also sets the `pipelineData` property, if the parameter is given.
       *
       * Both the pipeline and post pipelines share the pipeline data object together.
       * @param pipelines Either the string-based name of the pipeline, or a pipeline instance, or class, or an array of them.
       * @param pipelineData Optional pipeline data object that is _deep copied_ into the `pipelineData` property of this Game Object.
       * @param copyData Should the pipeline data object be _deep copied_ into the `pipelineData` property of this Game Object? If `false` it will be set by reference instead. Default true.
       */
      setPostPipeline(pipelines: string | string[] | Function | Function[] | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline[], pipelineData?: object, copyData?: boolean): this;

      /**
       * Adds an entry to the `pipelineData` object belonging to this Game Object.
       *
       * If the 'key' already exists, its value is updated. If it doesn't exist, it is created.
       *
       * If `value` is undefined, and `key` exists, `key` is removed from the data object.
       *
       * Both the pipeline and post pipelines share the pipeline data object together.
       * @param key The key of the pipeline data to set, update, or delete.
       * @param value The value to be set with the key. If `undefined` then `key` will be deleted from the object.
       */
      setPipelineData(key: string, value?: any): this;

      /**
       * Gets a Post Pipeline instance from this Game Object, based on the given name, and returns it.
       * @param pipeline The string-based name of the pipeline, or a pipeline class.
       */
      getPostPipeline(pipeline: string | Function | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline): Phaser.Renderer.WebGL.Pipelines.PostFXPipeline | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline[];

      /**
       * Resets the WebGL Pipeline of this Game Object back to the default it was created with.
       * @param resetPostPipelines Reset all of the post pipelines? Default false.
       * @param resetData Reset the `pipelineData` object to being an empty object? Default false.
       */
      resetPipeline(resetPostPipelines?: boolean, resetData?: boolean): boolean;

      /**
       * Resets the WebGL Post Pipelines of this Game Object. It does this by calling
       * the `destroy` method on each post pipeline and then clearing the local array.
       * @param resetData Reset the `pipelineData` object to being an empty object? Default false.
       */
      resetPostPipeline(resetData?: boolean): void;

      /**
       * Removes a type of Post Pipeline instances from this Game Object, based on the given name, and destroys them.
       *
       * If you wish to remove all Post Pipelines use the `resetPostPipeline` method instead.
       * @param pipeline The string-based name of the pipeline, or a pipeline class.
       */
      removePostPipeline(pipeline: string | Phaser.Renderer.WebGL.Pipelines.PostFXPipeline): this;

      /**
       * Gets the name of the WebGL Pipeline this Game Object is currently using.
       */
      getPipelineName(): string;

    }

    /**
     * The Camera Manager is a plugin that belongs to a Scene and is responsible for managing all of the Scene Cameras.
     *
     * By default you can access the Camera Manager from within a Scene using `this.cameras`, although this can be changed
     * in your game config.
     *
     * Create new Cameras using the `add` method. Or extend the Camera class with your own addition code and then add
     * the new Camera in using the `addExisting` method.
     *
     * Cameras provide a view into your game world, and can be positioned, rotated, zoomed and scrolled accordingly.
     *
     * A Camera consists of two elements: The viewport and the scroll values.
     *
     * The viewport is the physical position and size of the Camera within your game. Cameras, by default, are
     * created the same size as your game, but their position and size can be set to anything. This means if you
     * wanted to create a camera that was 320x200 in size, positioned in the bottom-right corner of your game,
     * you'd adjust the viewport to do that (using methods like `setViewport` and `setSize`).
     *
     * If you wish to change where the Camera is looking in your game, then you scroll it. You can do this
     * via the properties `scrollX` and `scrollY` or the method `setScroll`. Scrolling has no impact on the
     * viewport, and changing the viewport has no impact on the scrolling.
     *
     * By default a Camera will render all Game Objects it can see. You can change this using the `ignore` method,
     * allowing you to filter Game Objects out on a per-Camera basis. The Camera Manager can manage up to 31 unique
     * 'Game Object ignore capable' Cameras. Any Cameras beyond 31 that you create will all be given a Camera ID of
     * zero, meaning that they cannot be used for Game Object exclusion. This means if you need your Camera to ignore
     * Game Objects, make sure it's one of the first 31 created.
     *
     * A Camera also has built-in special effects including Fade, Flash, Camera Shake, Pan and Zoom.
     */
    class CameraManager {
      /**
       *
       * @param scene The Scene that owns the Camera Manager plugin.
       */
      constructor(scene: Phaser.Scene);

      /**
       * The Scene that owns the Camera Manager plugin.
       */
      scene: Phaser.Scene;

      /**
       * A reference to the Scene.Systems handler for the Scene that owns the Camera Manager.
       */
      systems: Phaser.Scenes.Systems;

      /**
       * All Cameras created by, or added to, this Camera Manager, will have their `roundPixels`
       * property set to match this value. By default it is set to match the value set in the
       * game configuration, but can be changed at any point. Equally, individual cameras can
       * also be changed as needed.
       */
      roundPixels: boolean;

      /**
       * An Array of the Camera objects being managed by this Camera Manager.
       * The Cameras are updated and rendered in the same order in which they appear in this array.
       * Do not directly add or remove entries to this array. However, you can move the contents
       * around the array should you wish to adjust the display order.
       */
      cameras: Phaser.Cameras.Scene2D.Camera[];

      /**
       * A handy reference to the 'main' camera. By default this is the first Camera the
       * Camera Manager creates. You can also set it directly, or use the `makeMain` argument
       * in the `add` and `addExisting` methods. It allows you to access it from your game:
       *
       * ```javascript
       * var cam = this.cameras.main;
       * ```
       *
       * Also see the properties `camera1`, `camera2` and so on.
       */
      main: Phaser.Cameras.Scene2D.Camera;

      /**
       * A default un-transformed Camera that doesn't exist on the camera list and doesn't
       * count towards the total number of cameras being managed. It exists for other
       * systems, as well as your own code, should they require a basic un-transformed
       * camera instance from which to calculate a view matrix.
       */
      default: Phaser.Cameras.Scene2D.Camera;

      /**
       * Adds a new Camera into the Camera Manager. The Camera Manager can support up to 31 different Cameras.
       *
       * Each Camera has its own viewport, which controls the size of the Camera and its position within the canvas.
       *
       * Use the `Camera.scrollX` and `Camera.scrollY` properties to change where the Camera is looking, or the
       * Camera methods such as `centerOn`. Cameras also have built in special effects, such as fade, flash, shake,
       * pan and zoom.
       *
       * By default Cameras are transparent and will render anything that they can see based on their `scrollX`
       * and `scrollY` values. Game Objects can be set to be ignored by a Camera by using the `Camera.ignore` method.
       *
       * The Camera will have its `roundPixels` property set to whatever `CameraManager.roundPixels` is. You can change
       * it after creation if required.
       *
       * See the Camera class documentation for more details.
       * @param x The horizontal position of the Camera viewport. Default 0.
       * @param y The vertical position of the Camera viewport. Default 0.
       * @param width The width of the Camera viewport. If not given it'll be the game config size.
       * @param height The height of the Camera viewport. If not given it'll be the game config size.
       * @param makeMain Set this Camera as being the 'main' camera. This just makes the property `main` a reference to it. Default false.
       * @param name The name of the Camera. Default ''.
       */
      add(x?: number, y?: number, width?: number, height?: number, makeMain?: boolean, name?: string): Phaser.Cameras.Scene2D.Camera;

      /**
       * Adds an existing Camera into the Camera Manager.
       *
       * The Camera should either be a `Phaser.Cameras.Scene2D.Camera` instance, or a class that extends from it.
       *
       * The Camera will have its `roundPixels` property set to whatever `CameraManager.roundPixels` is. You can change
       * it after addition if required.
       *
       * The Camera will be assigned an ID, which is used for Game Object exclusion and then added to the
       * manager. As long as it doesn't already exist in the manager it will be added then returned.
       *
       * If this method returns `null` then the Camera already exists in this Camera Manager.
       * @param camera The Camera to be added to the Camera Manager.
       * @param makeMain Set this Camera as being the 'main' camera. This just makes the property `main` a reference to it. Default false.
       */
      addExisting(camera: Phaser.Cameras.Scene2D.Camera, makeMain?: boolean): Phaser.Cameras.Scene2D.Camera;

      /**
       * Gets the total number of Cameras in this Camera Manager.
       *
       * If the optional `isVisible` argument is set it will only count Cameras that are currently visible.
       * @param isVisible Set the `true` to only include visible Cameras in the total. Default false.
       */
      getTotal(isVisible?: boolean): number;

      /**
       * Populates this Camera Manager based on the given configuration object, or an array of config objects.
       *
       * See the `Phaser.Types.Cameras.Scene2D.CameraConfig` documentation for details of the object structure.
       * @param config A Camera configuration object, or an array of them, to be added to this Camera Manager.
       */
      fromJSON(config: Phaser.Types.Cameras.Scene2D.CameraConfig | Phaser.Types.Cameras.Scene2D.CameraConfig[]): this;

      /**
       * Gets a Camera based on its name.
       *
       * Camera names are optional and don't have to be set, so this method is only of any use if you
       * have given your Cameras unique names.
       * @param name The name of the Camera.
       */
      getCamera(name: string): Phaser.Cameras.Scene2D.Camera;

      /**
       * Returns an array of all cameras below the given Pointer.
       *
       * The first camera in the array is the top-most camera in the camera list.
       * @param pointer The Pointer to check against.
       */
      getCamerasBelowPointer(pointer: Phaser.Input.Pointer): Phaser.Cameras.Scene2D.Camera[];

      /**
       * Removes the given Camera, or an array of Cameras, from this Camera Manager.
       *
       * If found in the Camera Manager it will be immediately removed from the local cameras array.
       * If also currently the 'main' camera, 'main' will be reset to be camera 0.
       *
       * The removed Cameras are automatically destroyed if the `runDestroy` argument is `true`, which is the default.
       * If you wish to re-use the cameras then set this to `false`, but know that they will retain their references
       * and internal data until destroyed or re-added to a Camera Manager.
       * @param camera The Camera, or an array of Cameras, to be removed from this Camera Manager.
       * @param runDestroy Automatically call `Camera.destroy` on each Camera removed from this Camera Manager. Default true.
       */
      remove(camera: Phaser.Cameras.Scene2D.Camera | Phaser.Cameras.Scene2D.Camera[], runDestroy?: boolean): number;

      /**
       * The internal render method. This is called automatically by the Scene and should not be invoked directly.
       *
       * It will iterate through all local cameras and render them in turn, as long as they're visible and have
       * an alpha level > 0.
       * @param renderer The Renderer that will render the children to this camera.
       * @param displayList The Display List for the Scene.
       */
      protected render(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer, displayList: Phaser.GameObjects.DisplayList): void;

      /**
       * Takes an array of Game Objects and a Camera and returns a new array
       * containing only those Game Objects that pass the `willRender` test
       * against the given Camera.
       * @param children An array of Game Objects to be checked against the camera.
       * @param camera The camera to filte the Game Objects against.
       */
      getVisibleChildren(children: Phaser.GameObjects.GameObject[], camera: Phaser.Cameras.Scene2D.Camera): Phaser.GameObjects.GameObject[];

      /**
       * Resets this Camera Manager.
       *
       * This will iterate through all current Cameras, destroying them all, then it will reset the
       * cameras array, reset the ID counter and create 1 new single camera using the default values.
       */
      resetAll(): Phaser.Cameras.Scene2D.Camera;

      /**
       * The main update loop. Called automatically when the Scene steps.
       * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
       * @param delta The delta time, in ms, elapsed since the last frame.
       */
      protected update(time: number, delta: number): void;

      /**
       * The event handler that manages the `resize` event dispatched by the Scale Manager.
       * @param gameSize The default Game Size object. This is the un-modified game dimensions.
       * @param baseSize The base Size object. The game dimensions. The canvas width / height values match this.
       */
      onResize(gameSize: Phaser.Structs.Size, baseSize: Phaser.Structs.Size): void;

      /**
       * Resizes all cameras to the given dimensions.
       * @param width The new width of the camera.
       * @param height The new height of the camera.
       */
      resize(width: number, height: number): void;

    }

    namespace Effects {
      /**
       * A Camera Fade effect.
       *
       * This effect will fade the camera viewport to the given color, over the duration specified.
       *
       * Only the camera viewport is faded. None of the objects it is displaying are impacted, i.e. their colors do
       * not change.
       *
       * The effect will dispatch several events on the Camera itself and you can also specify an `onUpdate` callback,
       * which is invoked each frame for the duration of the effect, if required.
       */
      class Fade {
        /**
         *
         * @param camera The camera this effect is acting upon.
         */
        constructor(camera: Phaser.Cameras.Scene2D.Camera);

        /**
         * The Camera this effect belongs to.
         */
        readonly camera: Phaser.Cameras.Scene2D.Camera;

        /**
         * Is this effect actively running?
         */
        readonly isRunning: boolean;

        /**
         * Has this effect finished running?
         *
         * This is different from `isRunning` because it remains set to `true` when the effect is over,
         * until the effect is either reset or started again.
         */
        readonly isComplete: boolean;

        /**
         * The direction of the fade.
         * `true` = fade out (transparent to color), `false` = fade in (color to transparent)
         */
        readonly direction: boolean;

        /**
         * The duration of the effect, in milliseconds.
         */
        readonly duration: number;

        /**
         * If this effect is running this holds the current percentage of the progress, a value between 0 and 1.
         */
        progress: number;

        /**
         * Fades the Camera to or from the given color over the duration specified.
         * @param direction The direction of the fade. `true` = fade out (transparent to color), `false` = fade in (color to transparent) Default true.
         * @param duration The duration of the effect in milliseconds. Default 1000.
         * @param red The amount to fade the red channel towards. A value between 0 and 255. Default 0.
         * @param green The amount to fade the green channel towards. A value between 0 and 255. Default 0.
         * @param blue The amount to fade the blue channel towards. A value between 0 and 255. Default 0.
         * @param force Force the effect to start immediately, even if already running. Default false.
         * @param callback This callback will be invoked every frame for the duration of the effect.
         * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
         * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
         */
        start(direction?: boolean, duration?: number, red?: number, green?: number, blue?: number, force?: boolean, callback?: Phaser.Types.Cameras.Scene2D.CameraFadeCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

        /**
         * The main update loop for this effect. Called automatically by the Camera.
         * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
         * @param delta The delta time, in ms, elapsed since the last frame.
         */
        update(time: number, delta: number): void;

        /**
         * Called internally by the Canvas Renderer.
         * @param ctx The Canvas context to render to.
         */
        postRenderCanvas(ctx: CanvasRenderingContext2D): boolean;

        /**
         * Called internally by the WebGL Renderer.
         * @param pipeline The WebGL Pipeline to render to. Must provide the `drawFillRect` method.
         * @param getTintFunction A function that will return the gl safe tint colors.
         */
        postRenderWebGL(pipeline: Phaser.Renderer.WebGL.Pipelines.MultiPipeline, getTintFunction: Function): boolean;

        /**
         * Called internally when the effect completes.
         */
        effectComplete(): void;

        /**
         * Resets this camera effect.
         * If it was previously running, it stops instantly without calling its onComplete callback or emitting an event.
         */
        reset(): void;

        /**
         * Destroys this effect, releasing it from the Camera.
         */
        destroy(): void;

      }

      /**
       * A Camera Flash effect.
       *
       * This effect will flash the camera viewport to the given color, over the duration specified.
       *
       * Only the camera viewport is flashed. None of the objects it is displaying are impacted, i.e. their colors do
       * not change.
       *
       * The effect will dispatch several events on the Camera itself and you can also specify an `onUpdate` callback,
       * which is invoked each frame for the duration of the effect, if required.
       */
      class Flash {
        /**
         *
         * @param camera The camera this effect is acting upon.
         */
        constructor(camera: Phaser.Cameras.Scene2D.Camera);

        /**
         * The Camera this effect belongs to.
         */
        readonly camera: Phaser.Cameras.Scene2D.Camera;

        /**
         * Is this effect actively running?
         */
        readonly isRunning: boolean;

        /**
         * The duration of the effect, in milliseconds.
         */
        readonly duration: number;

        /**
         * If this effect is running this holds the current percentage of the progress, a value between 0 and 1.
         */
        progress: number;

        /**
         * Flashes the Camera to or from the given color over the duration specified.
         * @param duration The duration of the effect in milliseconds. Default 250.
         * @param red The amount to flash the red channel towards. A value between 0 and 255. Default 255.
         * @param green The amount to flash the green channel towards. A value between 0 and 255. Default 255.
         * @param blue The amount to flash the blue channel towards. A value between 0 and 255. Default 255.
         * @param force Force the effect to start immediately, even if already running. Default false.
         * @param callback This callback will be invoked every frame for the duration of the effect.
         * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
         * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
         */
        start(duration?: number, red?: number, green?: number, blue?: number, force?: boolean, callback?: Phaser.Types.Cameras.Scene2D.CameraFlashCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

        /**
         * The main update loop for this effect. Called automatically by the Camera.
         * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
         * @param delta The delta time, in ms, elapsed since the last frame.
         */
        update(time: number, delta: number): void;

        /**
         * Called internally by the Canvas Renderer.
         * @param ctx The Canvas context to render to.
         */
        postRenderCanvas(ctx: CanvasRenderingContext2D): boolean;

        /**
         * Called internally by the WebGL Renderer.
         * @param pipeline The WebGL Pipeline to render to. Must provide the `drawFillRect` method.
         * @param getTintFunction A function that will return the gl safe tint colors.
         */
        postRenderWebGL(pipeline: Phaser.Renderer.WebGL.Pipelines.MultiPipeline, getTintFunction: Function): boolean;

        /**
         * Called internally when the effect completes.
         */
        effectComplete(): void;

        /**
         * Resets this camera effect.
         * If it was previously running, it stops instantly without calling its onComplete callback or emitting an event.
         */
        reset(): void;

        /**
         * Destroys this effect, releasing it from the Camera.
         */
        destroy(): void;

      }

      /**
       * A Camera Pan effect.
       *
       * This effect will scroll the Camera so that the center of its viewport finishes at the given destination,
       * over the duration and with the ease specified.
       *
       * Only the camera scroll is moved. None of the objects it is displaying are impacted, i.e. their positions do
       * not change.
       *
       * The effect will dispatch several events on the Camera itself and you can also specify an `onUpdate` callback,
       * which is invoked each frame for the duration of the effect if required.
       */
      class Pan {
        /**
         *
         * @param camera The camera this effect is acting upon.
         */
        constructor(camera: Phaser.Cameras.Scene2D.Camera);

        /**
         * The Camera this effect belongs to.
         */
        readonly camera: Phaser.Cameras.Scene2D.Camera;

        /**
         * Is this effect actively running?
         */
        readonly isRunning: boolean;

        /**
         * The duration of the effect, in milliseconds.
         */
        readonly duration: number;

        /**
         * The starting scroll coordinates to pan the camera from.
         */
        source: Phaser.Math.Vector2;

        /**
         * The constantly updated value based on zoom.
         */
        current: Phaser.Math.Vector2;

        /**
         * The destination scroll coordinates to pan the camera to.
         */
        destination: Phaser.Math.Vector2;

        /**
         * The ease function to use during the pan.
         */
        ease: Function;

        /**
         * If this effect is running this holds the current percentage of the progress, a value between 0 and 1.
         */
        progress: number;

        /**
         * This effect will scroll the Camera so that the center of its viewport finishes at the given destination,
         * over the duration and with the ease specified.
         * @param x The destination x coordinate to scroll the center of the Camera viewport to.
         * @param y The destination y coordinate to scroll the center of the Camera viewport to.
         * @param duration The duration of the effect in milliseconds. Default 1000.
         * @param ease The ease to use for the pan. Can be any of the Phaser Easing constants or a custom function. Default 'Linear'.
         * @param force Force the pan effect to start immediately, even if already running. Default false.
         * @param callback This callback will be invoked every frame for the duration of the effect.
         * It is sent four arguments: A reference to the camera, a progress amount between 0 and 1 indicating how complete the effect is,
         * the current camera scroll x coordinate and the current camera scroll y coordinate.
         * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
         */
        start(x: number, y: number, duration?: number, ease?: string | Function, force?: boolean, callback?: Phaser.Types.Cameras.Scene2D.CameraPanCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

        /**
         * The main update loop for this effect. Called automatically by the Camera.
         * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
         * @param delta The delta time, in ms, elapsed since the last frame.
         */
        update(time: number, delta: number): void;

        /**
         * Called internally when the effect completes.
         */
        effectComplete(): void;

        /**
         * Resets this camera effect.
         * If it was previously running, it stops instantly without calling its onComplete callback or emitting an event.
         */
        reset(): void;

        /**
         * Destroys this effect, releasing it from the Camera.
         */
        destroy(): void;

      }

      /**
       * A Camera Rotate effect.
       *
       * This effect will rotate the Camera so that the its viewport finishes at the given angle in radians,
       * over the duration and with the ease specified.
       *
       * Camera rotation always takes place based on the Camera viewport. By default, rotation happens
       * in the center of the viewport. You can adjust this with the `originX` and `originY` properties.
       *
       * Rotation influences the rendering of _all_ Game Objects visible by this Camera. However, it does not
       * rotate the Camera viewport itself, which always remains an axis-aligned rectangle.
       *
       * Only the camera is rotates. None of the objects it is displaying are impacted, i.e. their positions do
       * not change.
       *
       * The effect will dispatch several events on the Camera itself and you can also specify an `onUpdate` callback,
       * which is invoked each frame for the duration of the effect if required.
       */
      class RotateTo {
        /**
         *
         * @param camera The camera this effect is acting upon.
         */
        constructor(camera: Phaser.Cameras.Scene2D.Camera);

        /**
         * The Camera this effect belongs to.
         */
        readonly camera: Phaser.Cameras.Scene2D.Camera;

        /**
         * Is this effect actively running?
         */
        readonly isRunning: boolean;

        /**
         * The duration of the effect, in milliseconds.
         */
        readonly duration: number;

        /**
         * The starting angle to rotate the camera from.
         */
        source: number;

        /**
         * The constantly updated value based on the force.
         */
        current: number;

        /**
         * The destination angle in radians to rotate the camera to.
         */
        destination: number;

        /**
         * The ease function to use during the Rotate.
         */
        ease: Function;

        /**
         * If this effect is running this holds the current percentage of the progress, a value between 0 and 1.
         */
        progress: number;

        /**
         * The direction of the rotation.
         */
        clockwise: boolean;

        /**
         * The shortest direction to the target rotation.
         */
        shortestPath: boolean;

        /**
         * This effect will scroll the Camera so that the center of its viewport finishes at the given angle,
         * over the duration and with the ease specified.
         * @param radians The destination angle in radians to rotate the Camera viewport to. If the angle is positive then the rotation is clockwise else anticlockwise
         * @param shortestPath If shortest path is set to true the camera will rotate in the quickest direction clockwise or anti-clockwise. Default false.
         * @param duration The duration of the effect in milliseconds. Default 1000.
         * @param ease The ease to use for the Rotate. Can be any of the Phaser Easing constants or a custom function. Default 'Linear'.
         * @param force Force the rotation effect to start immediately, even if already running. Default false.
         * @param callback This callback will be invoked every frame for the duration of the effect.
         * It is sent four arguments: A reference to the camera, a progress amount between 0 and 1 indicating how complete the effect is,
         * the current camera scroll x coordinate and the current camera scroll y coordinate.
         * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
         */
        start(radians: number, shortestPath?: boolean, duration?: number, ease?: string | Function, force?: boolean, callback?: CameraRotateCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

        /**
         * The main update loop for this effect. Called automatically by the Camera.
         * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
         * @param delta The delta time, in ms, elapsed since the last frame.
         */
        update(time: number, delta: number): void;

        /**
         * Called internally when the effect completes.
         */
        effectComplete(): void;

        /**
         * Resets this camera effect.
         * If it was previously running, it stops instantly without calling its onComplete callback or emitting an event.
         */
        reset(): void;

        /**
         * Destroys this effect, releasing it from the Camera.
         */
        destroy(): void;

      }

      /**
       * A Camera Shake effect.
       *
       * This effect will shake the camera viewport by a random amount, bounded by the specified intensity, each frame.
       *
       * Only the camera viewport is moved. None of the objects it is displaying are impacted, i.e. their positions do
       * not change.
       *
       * The effect will dispatch several events on the Camera itself and you can also specify an `onUpdate` callback,
       * which is invoked each frame for the duration of the effect if required.
       */
      class Shake {
        /**
         *
         * @param camera The camera this effect is acting upon.
         */
        constructor(camera: Phaser.Cameras.Scene2D.Camera);

        /**
         * The Camera this effect belongs to.
         */
        readonly camera: Phaser.Cameras.Scene2D.Camera;

        /**
         * Is this effect actively running?
         */
        readonly isRunning: boolean;

        /**
         * The duration of the effect, in milliseconds.
         */
        readonly duration: number;

        /**
         * The intensity of the effect. Use small float values. The default when the effect starts is 0.05.
         * This is a Vector2 object, allowing you to control the shake intensity independently across x and y.
         * You can modify this value while the effect is active to create more varied shake effects.
         */
        intensity: Phaser.Math.Vector2;

        /**
         * If this effect is running this holds the current percentage of the progress, a value between 0 and 1.
         */
        progress: number;

        /**
         * Shakes the Camera by the given intensity over the duration specified.
         * @param duration The duration of the effect in milliseconds. Default 100.
         * @param intensity The intensity of the shake. Default 0.05.
         * @param force Force the shake effect to start immediately, even if already running. Default false.
         * @param callback This callback will be invoked every frame for the duration of the effect.
         * It is sent two arguments: A reference to the camera and a progress amount between 0 and 1 indicating how complete the effect is.
         * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
         */
        start(duration?: number, intensity?: number | Phaser.Math.Vector2, force?: boolean, callback?: Phaser.Types.Cameras.Scene2D.CameraShakeCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

        /**
         * The pre-render step for this effect. Called automatically by the Camera.
         */
        preRender(): void;

        /**
         * The main update loop for this effect. Called automatically by the Camera.
         * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
         * @param delta The delta time, in ms, elapsed since the last frame.
         */
        update(time: number, delta: number): void;

        /**
         * Called internally when the effect completes.
         */
        effectComplete(): void;

        /**
         * Resets this camera effect.
         * If it was previously running, it stops instantly without calling its onComplete callback or emitting an event.
         */
        reset(): void;

        /**
         * Destroys this effect, releasing it from the Camera.
         */
        destroy(): void;

      }

      /**
       * A Camera Zoom effect.
       *
       * This effect will zoom the Camera to the given scale, over the duration and with the ease specified.
       *
       * The effect will dispatch several events on the Camera itself and you can also specify an `onUpdate` callback,
       * which is invoked each frame for the duration of the effect if required.
       */
      class Zoom {
        /**
         *
         * @param camera The camera this effect is acting upon.
         */
        constructor(camera: Phaser.Cameras.Scene2D.Camera);

        /**
         * The Camera this effect belongs to.
         */
        readonly camera: Phaser.Cameras.Scene2D.Camera;

        /**
         * Is this effect actively running?
         */
        readonly isRunning: boolean;

        /**
         * The duration of the effect, in milliseconds.
         */
        readonly duration: number;

        /**
         * The starting zoom value;
         */
        source: number;

        /**
         * The destination zoom value.
         */
        destination: number;

        /**
         * The ease function to use during the zoom.
         */
        ease: Function;

        /**
         * If this effect is running this holds the current percentage of the progress, a value between 0 and 1.
         */
        progress: number;

        /**
         * This effect will zoom the Camera to the given scale, over the duration and with the ease specified.
         * @param zoom The target Camera zoom value.
         * @param duration The duration of the effect in milliseconds. Default 1000.
         * @param ease The ease to use for the Zoom. Can be any of the Phaser Easing constants or a custom function. Default 'Linear'.
         * @param force Force the zoom effect to start immediately, even if already running. Default false.
         * @param callback This callback will be invoked every frame for the duration of the effect.
         * It is sent three arguments: A reference to the camera, a progress amount between 0 and 1 indicating how complete the effect is,
         * and the current camera zoom value.
         * @param context The context in which the callback is invoked. Defaults to the Scene to which the Camera belongs.
         */
        start(zoom: number, duration?: number, ease?: string | Function, force?: boolean, callback?: Phaser.Types.Cameras.Scene2D.CameraZoomCallback, context?: any): Phaser.Cameras.Scene2D.Camera;

        /**
         * The main update loop for this effect. Called automatically by the Camera.
         * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
         * @param delta The delta time, in ms, elapsed since the last frame.
         */
        update(time: number, delta: number): void;

        /**
         * Called internally when the effect completes.
         */
        effectComplete(): void;

        /**
         * Resets this camera effect.
         * If it was previously running, it stops instantly without calling its onComplete callback or emitting an event.
         */
        reset(): void;

        /**
         * Destroys this effect, releasing it from the Camera.
         */
        destroy(): void;

      }

    }

    namespace Events {
      /**
       * The Destroy Camera Event.
       *
       * This event is dispatched by a Camera instance when it is destroyed by the Camera Manager.
       */
      const DESTROY: any;

      /**
       * The Camera Fade In Complete Event.
       *
       * This event is dispatched by a Camera instance when the Fade In Effect completes.
       *
       * Listen to it from a Camera instance using `Camera.on('camerafadeincomplete', listener)`.
       */
      const FADE_IN_COMPLETE: any;

      /**
       * The Camera Fade In Start Event.
       *
       * This event is dispatched by a Camera instance when the Fade In Effect starts.
       *
       * Listen to it from a Camera instance using `Camera.on('camerafadeinstart', listener)`.
       */
      const FADE_IN_START: any;

      /**
       * The Camera Fade Out Complete Event.
       *
       * This event is dispatched by a Camera instance when the Fade Out Effect completes.
       *
       * Listen to it from a Camera instance using `Camera.on('camerafadeoutcomplete', listener)`.
       */
      const FADE_OUT_COMPLETE: any;

      /**
       * The Camera Fade Out Start Event.
       *
       * This event is dispatched by a Camera instance when the Fade Out Effect starts.
       *
       * Listen to it from a Camera instance using `Camera.on('camerafadeoutstart', listener)`.
       */
      const FADE_OUT_START: any;

      /**
       * The Camera Flash Complete Event.
       *
       * This event is dispatched by a Camera instance when the Flash Effect completes.
       */
      const FLASH_COMPLETE: any;

      /**
       * The Camera Flash Start Event.
       *
       * This event is dispatched by a Camera instance when the Flash Effect starts.
       */
      const FLASH_START: any;

      /**
       * The Camera Follower Update Event.
       *
       * This event is dispatched by a Camera instance when it is following a
       * Game Object and the Camera position has been updated as a result of
       * that following.
       *
       * Listen to it from a Camera instance using: `camera.on('followupdate', listener)`.
       */
      const FOLLOW_UPDATE: any;

      /**
       * The Camera Pan Complete Event.
       *
       * This event is dispatched by a Camera instance when the Pan Effect completes.
       */
      const PAN_COMPLETE: any;

      /**
       * The Camera Pan Start Event.
       *
       * This event is dispatched by a Camera instance when the Pan Effect starts.
       */
      const PAN_START: any;

      /**
       * The Camera Post-Render Event.
       *
       * This event is dispatched by a Camera instance after is has finished rendering.
       * It is only dispatched if the Camera is rendering to a texture.
       *
       * Listen to it from a Camera instance using: `camera.on('postrender', listener)`.
       */
      const POST_RENDER: any;

      /**
       * The Camera Pre-Render Event.
       *
       * This event is dispatched by a Camera instance when it is about to render.
       * It is only dispatched if the Camera is rendering to a texture.
       *
       * Listen to it from a Camera instance using: `camera.on('prerender', listener)`.
       */
      const PRE_RENDER: any;

      /**
       * The Camera Rotate Complete Event.
       *
       * This event is dispatched by a Camera instance when the Rotate Effect completes.
       */
      const ROTATE_COMPLETE: any;

      /**
       * The Camera Rotate Start Event.
       *
       * This event is dispatched by a Camera instance when the Rotate Effect starts.
       */
      const ROTATE_START: any;

      /**
       * The Camera Shake Complete Event.
       *
       * This event is dispatched by a Camera instance when the Shake Effect completes.
       */
      const SHAKE_COMPLETE: any;

      /**
       * The Camera Shake Start Event.
       *
       * This event is dispatched by a Camera instance when the Shake Effect starts.
       */
      const SHAKE_START: any;

      /**
       * The Camera Zoom Complete Event.
       *
       * This event is dispatched by a Camera instance when the Zoom Effect completes.
       */
      const ZOOM_COMPLETE: any;

      /**
       * The Camera Zoom Start Event.
       *
       * This event is dispatched by a Camera instance when the Zoom Effect starts.
       */
      const ZOOM_START: any;

    }

  }

  namespace Controls {
    /**
     * A Fixed Key Camera Control.
     *
     * This allows you to control the movement and zoom of a camera using the defined keys.
     *
     * ```javascript
     * var camControl = new FixedKeyControl({
     *     camera: this.cameras.main,
     *     left: cursors.left,
     *     right: cursors.right,
     *     speed: float OR { x: 0, y: 0 }
     * });
     * ```
     *
     * Movement is precise and has no 'smoothing' applied to it.
     *
     * You must call the `update` method of this controller every frame.
     */
    class FixedKeyControl {
      /**
       *
       * @param config The Fixed Key Control configuration object.
       */
      constructor(config: Phaser.Types.Cameras.Controls.FixedKeyControlConfig);

      /**
       * The Camera that this Control will update.
       */
      camera: Phaser.Cameras.Scene2D.Camera;

      /**
       * The Key to be pressed that will move the Camera left.
       */
      left: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will move the Camera right.
       */
      right: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will move the Camera up.
       */
      up: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will move the Camera down.
       */
      down: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will zoom the Camera in.
       */
      zoomIn: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will zoom the Camera out.
       */
      zoomOut: Phaser.Input.Keyboard.Key;

      /**
       * The speed at which the camera will zoom if the `zoomIn` or `zoomOut` keys are pressed.
       */
      zoomSpeed: number;

      /**
       * The smallest zoom value the camera will reach when zoomed out.
       */
      minZoom: number;

      /**
       * The largest zoom value the camera will reach when zoomed in.
       */
      maxZoom: number;

      /**
       * The horizontal speed the camera will move.
       */
      speedX: number;

      /**
       * The vertical speed the camera will move.
       */
      speedY: number;

      /**
       * A flag controlling if the Controls will update the Camera or not.
       */
      active: boolean;

      /**
       * Starts the Key Control running, providing it has been linked to a camera.
       */
      start(): this;

      /**
       * Stops this Key Control from running. Call `start` to start it again.
       */
      stop(): this;

      /**
       * Binds this Key Control to a camera.
       * @param camera The camera to bind this Key Control to.
       */
      setCamera(camera: Phaser.Cameras.Scene2D.Camera): this;

      /**
       * Applies the results of pressing the control keys to the Camera.
       *
       * You must call this every step, it is not called automatically.
       * @param delta The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
       */
      update(delta: number): void;

      /**
       * Destroys this Key Control.
       */
      destroy(): void;

    }

    /**
     * A Smoothed Key Camera Control.
     *
     * This allows you to control the movement and zoom of a camera using the defined keys.
     * Unlike the Fixed Camera Control you can also provide physics values for acceleration, drag and maxSpeed for smoothing effects.
     *
     * ```javascript
     * var controlConfig = {
     *     camera: this.cameras.main,
     *     left: cursors.left,
     *     right: cursors.right,
     *     up: cursors.up,
     *     down: cursors.down,
     *     zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
     *     zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
     *     zoomSpeed: 0.02,
     *     acceleration: 0.06,
     *     drag: 0.0005,
     *     maxSpeed: 1.0
     * };
     * ```
     *
     * You must call the `update` method of this controller every frame.
     */
    class SmoothedKeyControl {
      /**
       *
       * @param config The Smoothed Key Control configuration object.
       */
      constructor(config: Phaser.Types.Cameras.Controls.SmoothedKeyControlConfig);

      /**
       * The Camera that this Control will update.
       */
      camera: Phaser.Cameras.Scene2D.Camera;

      /**
       * The Key to be pressed that will move the Camera left.
       */
      left: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will move the Camera right.
       */
      right: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will move the Camera up.
       */
      up: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will move the Camera down.
       */
      down: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will zoom the Camera in.
       */
      zoomIn: Phaser.Input.Keyboard.Key;

      /**
       * The Key to be pressed that will zoom the Camera out.
       */
      zoomOut: Phaser.Input.Keyboard.Key;

      /**
       * The speed at which the camera will zoom if the `zoomIn` or `zoomOut` keys are pressed.
       */
      zoomSpeed: number;

      /**
       * The smallest zoom value the camera will reach when zoomed out.
       */
      minZoom: number;

      /**
       * The largest zoom value the camera will reach when zoomed in.
       */
      maxZoom: number;

      /**
       * The horizontal acceleration the camera will move.
       */
      accelX: number;

      /**
       * The vertical acceleration the camera will move.
       */
      accelY: number;

      /**
       * The horizontal drag applied to the camera when it is moving.
       */
      dragX: number;

      /**
       * The vertical drag applied to the camera when it is moving.
       */
      dragY: number;

      /**
       * The maximum horizontal speed the camera will move.
       */
      maxSpeedX: number;

      /**
       * The maximum vertical speed the camera will move.
       */
      maxSpeedY: number;

      /**
       * A flag controlling if the Controls will update the Camera or not.
       */
      active: boolean;

      /**
       * Starts the Key Control running, providing it has been linked to a camera.
       */
      start(): this;

      /**
       * Stops this Key Control from running. Call `start` to start it again.
       */
      stop(): this;

      /**
       * Binds this Key Control to a camera.
       * @param camera The camera to bind this Key Control to.
       */
      setCamera(camera: Phaser.Cameras.Scene2D.Camera): this;

      /**
       * Applies the results of pressing the control keys to the Camera.
       *
       * You must call this every step, it is not called automatically.
       * @param delta The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
       */
      update(delta: number): void;

      /**
       * Destroys this Key Control.
       */
      destroy(): void;

    }

  }

}