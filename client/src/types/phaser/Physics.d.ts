namespace Phaser.Physics {
  namespace Arcade {
    /**
     * An Arcade Physics Image is an Image with an Arcade Physics body and related components.
     * The body can be dynamic or static.
     *
     * The main difference between an Arcade Image and an Arcade Sprite is that you cannot animate an Arcade Image.
     */
    class Image extends Phaser.GameObjects.Image implements Phaser.Physics.Arcade.Components.Acceleration, Phaser.Physics.Arcade.Components.Angular, Phaser.Physics.Arcade.Components.Bounce, Phaser.Physics.Arcade.Components.Debug, Phaser.Physics.Arcade.Components.Drag, Phaser.Physics.Arcade.Components.Enable, Phaser.Physics.Arcade.Components.Friction, Phaser.Physics.Arcade.Components.Gravity, Phaser.Physics.Arcade.Components.Immovable, Phaser.Physics.Arcade.Components.Mass, Phaser.Physics.Arcade.Components.Pushable, Phaser.Physics.Arcade.Components.Size, Phaser.Physics.Arcade.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
      /**
       *
       * @param scene The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param texture The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with.
       */
      constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number);

      /**
       * This Game Object's Physics Body.
       */
      body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody;

      /**
       * Clears all alpha values associated with this Game Object.
       *
       * Immediately sets the alpha levels back to 1 (fully opaque).
       */
      clearAlpha(): this;

      /**
       * Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
       * Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.
       *
       * If your game is running under WebGL you can optionally specify four different alpha values, each of which
       * correspond to the four corners of the Game Object. Under Canvas only the `topLeft` value given is used.
       * @param topLeft The alpha value used for the top-left of the Game Object. If this is the only value given it's applied across the whole Game Object. Default 1.
       * @param topRight The alpha value used for the top-right of the Game Object. WebGL only.
       * @param bottomLeft The alpha value used for the bottom-left of the Game Object. WebGL only.
       * @param bottomRight The alpha value used for the bottom-right of the Game Object. WebGL only.
       */
      setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

      /**
       * The alpha value of the Game Object.
       *
       * This is a global value, impacting the entire Game Object, not just a region of it.
       */
      alpha: number;

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
       * Sets the Blend Mode being used by this Game Object.
       *
       * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
       *
       * Under WebGL only the following Blend Modes are available:
       *
       * * ADD
       * * MULTIPLY
       * * SCREEN
       * * ERASE
       *
       * Canvas has more available depending on browser support.
       *
       * You can also create your own custom Blend Modes in WebGL.
       *
       * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
       * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
       * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
       * are used.
       */
      blendMode: Phaser.BlendModes | string;

      /**
       * Sets the Blend Mode being used by this Game Object.
       *
       * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
       *
       * Under WebGL only the following Blend Modes are available:
       *
       * * ADD
       * * MULTIPLY
       * * SCREEN
       * * ERASE (only works when rendering to a framebuffer, like a Render Texture)
       *
       * Canvas has more available depending on browser support.
       *
       * You can also create your own custom Blend Modes in WebGL.
       *
       * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
       * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
       * reasons try to be careful about the construction of your Scene and the frequency in which blend modes
       * are used.
       * @param value The BlendMode value. Either a string or a CONST.
       */
      setBlendMode(value: string | Phaser.BlendModes): this;

      /**
       * The depth of this Game Object within the Scene.
       *
       * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
       * of Game Objects, without actually moving their position in the display list.
       *
       * The default depth is zero. A Game Object with a higher depth
       * value will always render in front of one with a lower value.
       *
       * Setting the depth will queue a depth sort event within the Scene.
       */
      depth: number;

      /**
       * The depth of this Game Object within the Scene.
       *
       * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
       * of Game Objects, without actually moving their position in the display list.
       *
       * The default depth is zero. A Game Object with a higher depth
       * value will always render in front of one with a lower value.
       *
       * Setting the depth will queue a depth sort event within the Scene.
       * @param value The depth of this Game Object.
       */
      setDepth(value: number): this;

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
       * Gets the center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       */
      getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

      /**
       * Gets the top-left corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the top-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the top-right corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the left-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getLeftCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the right-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getRightCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-left corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-right corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bounds of this Game Object, regardless of origin.
       * The values are stored and returned in a Rectangle, or Rectangle-like, object.
       * @param output An object to store the values in. If not provided a new Rectangle will be created.
       */
      getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

      /**
       * The Mask this Game Object is using during render.
       */
      mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

      /**
       * Sets the mask that this Game Object will use to render with.
       *
       * The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
       * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * If a mask is already set on this Game Object it will be immediately replaced.
       *
       * Masks are positioned in global space and are not relative to the Game Object to which they
       * are applied. The reason for this is that multiple Game Objects can all share the same mask.
       *
       * Masks have no impact on physics or input detection. They are purely a rendering component
       * that allows you to limit what is visible during the render pass.
       * @param mask The mask this Game Object will use when rendering.
       */
      setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

      /**
       * Clears the mask that this Game Object was using.
       * @param destroyMask Destroy the mask before clearing it? Default false.
       */
      clearMask(destroyMask?: boolean): this;

      /**
       * Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
       * including this one.
       *
       * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * To create the mask you need to pass in a reference to a renderable Game Object.
       * A renderable Game Object is one that uses a texture to render with, such as an
       * Image, Sprite, Render Texture or BitmapText.
       *
       * If you do not provide a renderable object, and this Game Object has a texture,
       * it will use itself as the object. This means you can call this method to create
       * a Bitmap Mask from any renderable Game Object.
       * @param renderable A renderable Game Object that uses a texture, such as a Sprite.
       */
      createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

      /**
       * Creates and returns a Geometry Mask. This mask can be used by any Game Object,
       * including this one.
       *
       * To create the mask you need to pass in a reference to a Graphics Game Object.
       *
       * If you do not provide a graphics object, and this Game Object is an instance
       * of a Graphics object, then it will use itself to create the mask.
       *
       * This means you can call this method to create a Geometry Mask from any Graphics Game Object.
       * @param graphics A Graphics Game Object. The geometry within it will be used as the mask.
       */
      createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

      /**
       * The horizontal origin of this Game Object.
       * The origin maps the relationship between the size and position of the Game Object.
       * The default value is 0.5, meaning all Game Objects are positioned based on their center.
       * Setting the value to 0 means the position now relates to the left of the Game Object.
       */
      originX: number;

      /**
       * The vertical origin of this Game Object.
       * The origin maps the relationship between the size and position of the Game Object.
       * The default value is 0.5, meaning all Game Objects are positioned based on their center.
       * Setting the value to 0 means the position now relates to the top of the Game Object.
       */
      originY: number;

      /**
       * The horizontal display origin of this Game Object.
       * The origin is a normalized value between 0 and 1.
       * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
       */
      displayOriginX: number;

      /**
       * The vertical display origin of this Game Object.
       * The origin is a normalized value between 0 and 1.
       * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
       */
      displayOriginY: number;

      /**
       * Sets the origin of this Game Object.
       *
       * The values are given in the range 0 to 1.
       * @param x The horizontal origin value. Default 0.5.
       * @param y The vertical origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setOrigin(x?: number, y?: number): this;

      /**
       * Sets the origin of this Game Object based on the Pivot values in its Frame.
       */
      setOriginFromFrame(): this;

      /**
       * Sets the display origin of this Game Object.
       * The difference between this and setting the origin is that you can use pixel values for setting the display origin.
       * @param x The horizontal display origin value. Default 0.
       * @param y The vertical display origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setDisplayOrigin(x?: number, y?: number): this;

      /**
       * Updates the Display Origin cached values internally stored on this Game Object.
       * You don't usually call this directly, but it is exposed for edge-cases where you may.
       */
      updateDisplayOrigin(): this;

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

      /**
       * The horizontal scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       */
      scrollFactorX: number;

      /**
       * The vertical scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       */
      scrollFactorY: number;

      /**
       * Sets the scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       * @param x The horizontal scroll factor of this Game Object.
       * @param y The vertical scroll factor of this Game Object. If not set it will use the `x` value. Default x.
       */
      setScrollFactor(x: number, y?: number): this;

      /**
       * The native (un-scaled) width of this Game Object.
       *
       * Changing this value will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or use
       * the `displayWidth` property.
       */
      width: number;

      /**
       * The native (un-scaled) height of this Game Object.
       *
       * Changing this value will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or use
       * the `displayHeight` property.
       */
      height: number;

      /**
       * The displayed width of this Game Object.
       *
       * This value takes into account the scale factor.
       *
       * Setting this value will adjust the Game Object's scale property.
       */
      displayWidth: number;

      /**
       * The displayed height of this Game Object.
       *
       * This value takes into account the scale factor.
       *
       * Setting this value will adjust the Game Object's scale property.
       */
      displayHeight: number;

      /**
       * Sets the size of this Game Object to be that of the given Frame.
       *
       * This will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or call the
       * `setDisplaySize` method, which is the same thing as changing the scale but allows you
       * to do so by giving pixel values.
       *
       * If you have enabled this Game Object for input, changing the size will _not_ change the
       * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
       * @param frame The frame to base the size of this Game Object on.
       */
      setSizeToFrame(frame: Phaser.Textures.Frame): this;

      /**
       * Sets the internal size of this Game Object, as used for frame or physics body creation.
       *
       * This will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or call the
       * `setDisplaySize` method, which is the same thing as changing the scale but allows you
       * to do so by giving pixel values.
       *
       * If you have enabled this Game Object for input, changing the size will _not_ change the
       * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
       * @param width The width of this Game Object.
       * @param height The height of this Game Object.
       */
      setSize(width: number, height: number): this;

      /**
       * Sets the display size of this Game Object.
       *
       * Calling this will adjust the scale.
       * @param width The width of this Game Object.
       * @param height The height of this Game Object.
       */
      setDisplaySize(width: number, height: number): this;

      /**
       * The Texture this Game Object is using to render with.
       */
      texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

      /**
       * The Texture Frame this Game Object is using to render with.
       */
      frame: Phaser.Textures.Frame;

      /**
       * A boolean flag indicating if this Game Object is being cropped or not.
       * You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
       * Equally, calling `setCrop` with no arguments will reset the crop and disable it.
       */
      isCropped: boolean;

      /**
       * Applies a crop to a texture based Game Object, such as a Sprite or Image.
       *
       * The crop is a rectangle that limits the area of the texture frame that is visible during rendering.
       *
       * Cropping a Game Object does not change its size, dimensions, physics body or hit area, it just
       * changes what is shown when rendered.
       *
       * The crop coordinates are relative to the texture frame, not the Game Object, meaning 0 x 0 is the top-left.
       *
       * Therefore, if you had a Game Object that had an 800x600 sized texture, and you wanted to show only the left
       * half of it, you could call `setCrop(0, 0, 400, 600)`.
       *
       * It is also scaled to match the Game Object scale automatically. Therefore a crop rect of 100x50 would crop
       * an area of 200x100 when applied to a Game Object that had a scale factor of 2.
       *
       * You can either pass in numeric values directly, or you can provide a single Rectangle object as the first argument.
       *
       * Call this method with no arguments at all to reset the crop, or toggle the property `isCropped` to `false`.
       *
       * You should do this if the crop rectangle becomes the same size as the frame itself, as it will allow
       * the renderer to skip several internal calculations.
       * @param x The x coordinate to start the crop from. Or a Phaser.Geom.Rectangle object, in which case the rest of the arguments are ignored.
       * @param y The y coordinate to start the crop from.
       * @param width The width of the crop rectangle in pixels.
       * @param height The height of the crop rectangle in pixels.
       */
      setCrop(x?: number | Phaser.Geom.Rectangle, y?: number, width?: number, height?: number): this;

      /**
       * Sets the texture and frame this Game Object will use to render with.
       *
       * Textures are referenced by their string-based keys, as stored in the Texture Manager.
       * @param key The key of the texture to be used, as stored in the Texture Manager.
       * @param frame The name or index of the frame within the Texture.
       */
      setTexture(key: string, frame?: string | number): this;

      /**
       * Sets the frame this Game Object will use to render with.
       *
       * The Frame has to belong to the current Texture being used.
       *
       * It can be either a string or an index.
       *
       * Calling `setFrame` will modify the `width` and `height` properties of your Game Object.
       * It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.
       * @param frame The name or index of the frame within the Texture.
       * @param updateSize Should this call adjust the size of the Game Object? Default true.
       * @param updateOrigin Should this call adjust the origin of the Game Object? Default true.
       */
      setFrame(frame: string | number, updateSize?: boolean, updateOrigin?: boolean): this;

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
       * The x position of this Game Object.
       */
      x: number;

      /**
       * The y position of this Game Object.
       */
      y: number;

      /**
       * The z position of this Game Object.
       *
       * Note: The z position does not control the rendering order of 2D Game Objects. Use
       * {@link Phaser.GameObjects.Components.Depth#depth} instead.
       */
      z: number;

      /**
       * The w position of this Game Object.
       */
      w: number;

      /**
       * This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
       * to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.
       *
       * Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
       * isn't the case, use the `scaleX` or `scaleY` properties instead.
       */
      scale: number;

      /**
       * The horizontal scale of this Game Object.
       */
      scaleX: number;

      /**
       * The vertical scale of this Game Object.
       */
      scaleY: number;

      /**
       * The angle of this Game Object as expressed in degrees.
       *
       * Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
       * and -90 is up.
       *
       * If you prefer to work in radians, see the `rotation` property instead.
       */
      angle: number;

      /**
       * The angle of this Game Object in radians.
       *
       * Phaser uses a right-hand clockwise rotation system, where 0 is right, PI/2 is down, +-PI is left
       * and -PI/2 is up.
       *
       * If you prefer to work in degrees, see the `angle` property instead.
       */
      rotation: number;

      /**
       * Sets the position of this Game Object.
       * @param x The x position of this Game Object. Default 0.
       * @param y The y position of this Game Object. If not set it will use the `x` value. Default x.
       * @param z The z position of this Game Object. Default 0.
       * @param w The w position of this Game Object. Default 0.
       */
      setPosition(x?: number, y?: number, z?: number, w?: number): this;

      /**
       * Copies an object's coordinates to this Game Object's position.
       * @param source An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied.
       */
      copyPosition(source: Phaser.Types.Math.Vector2Like | Phaser.Types.Math.Vector3Like | Phaser.Types.Math.Vector4Like): this;

      /**
       * Sets the position of this Game Object to be a random position within the confines of
       * the given area.
       *
       * If no area is specified a random position between 0 x 0 and the game width x height is used instead.
       *
       * The position does not factor in the size of this Game Object, meaning that only the origin is
       * guaranteed to be within the area.
       * @param x The x position of the top-left of the random area. Default 0.
       * @param y The y position of the top-left of the random area. Default 0.
       * @param width The width of the random area.
       * @param height The height of the random area.
       */
      setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

      /**
       * Sets the rotation of this Game Object.
       * @param radians The rotation of this Game Object, in radians. Default 0.
       */
      setRotation(radians?: number): this;

      /**
       * Sets the angle of this Game Object.
       * @param degrees The rotation of this Game Object, in degrees. Default 0.
       */
      setAngle(degrees?: number): this;

      /**
       * Sets the scale of this Game Object.
       * @param x The horizontal scale of this Game Object.
       * @param y The vertical scale of this Game Object. If not set it will use the `x` value. Default x.
       */
      setScale(x: number, y?: number): this;

      /**
       * Sets the x position of this Game Object.
       * @param value The x position of this Game Object. Default 0.
       */
      setX(value?: number): this;

      /**
       * Sets the y position of this Game Object.
       * @param value The y position of this Game Object. Default 0.
       */
      setY(value?: number): this;

      /**
       * Sets the z position of this Game Object.
       *
       * Note: The z position does not control the rendering order of 2D Game Objects. Use
       * {@link Phaser.GameObjects.Components.Depth#setDepth} instead.
       * @param value The z position of this Game Object. Default 0.
       */
      setZ(value?: number): this;

      /**
       * Sets the w position of this Game Object.
       * @param value The w position of this Game Object. Default 0.
       */
      setW(value?: number): this;

      /**
       * Gets the local transform matrix for this Game Object.
       * @param tempMatrix The matrix to populate with the values from this Game Object.
       */
      getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

      /**
       * Gets the world transform matrix for this Game Object, factoring in any parent Containers.
       * @param tempMatrix The matrix to populate with the values from this Game Object.
       * @param parentMatrix A temporary matrix to hold parent values during the calculations.
       */
      getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix, parentMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

      /**
       * Takes the given `x` and `y` coordinates and converts them into local space for this
       * Game Object, taking into account parent and local transforms, and the Display Origin.
       *
       * The returned Vector2 contains the translated point in its properties.
       *
       * A Camera needs to be provided in order to handle modified scroll factors. If no
       * camera is specified, it will use the `main` camera from the Scene to which this
       * Game Object belongs.
       * @param x The x position to translate.
       * @param y The y position to translate.
       * @param point A Vector2, or point-like object, to store the results in.
       * @param camera The Camera which is being tested against. If not given will use the Scene default camera.
       */
      getLocalPoint(x: number, y: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

      /**
       * Gets the sum total rotation of all of this Game Objects parent Containers.
       *
       * The returned value is in radians and will be zero if this Game Object has no parent container.
       */
      getParentRotation(): number;

      /**
       * The visible state of the Game Object.
       *
       * An invisible Game Object will skip rendering, but will still process update logic.
       */
      visible: boolean;

      /**
       * Sets the visibility of this Game Object.
       *
       * An invisible Game Object will skip rendering, but will still process update logic.
       * @param value The visible state of the Game Object.
       */
      setVisible(value: boolean): this;

      /**
       * Sets the body's horizontal and vertical acceleration. If the vertical acceleration value is not provided, the vertical acceleration is set to the same value as the horizontal acceleration.
       * @param x The horizontal acceleration
       * @param y The vertical acceleration Default x.
       */
      setAcceleration(x: number, y?: number): this;

      /**
       * Sets the body's horizontal acceleration.
       * @param value The horizontal acceleration
       */
      setAccelerationX(value: number): this;

      /**
       * Sets the body's vertical acceleration.
       * @param value The vertical acceleration
       */
      setAccelerationY(value: number): this;

      /**
       * Sets the angular velocity of the body.
       *
       * In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
       * However, they can have angular motion, which is passed on to the Game Object bound to the body,
       * causing them to visually rotate, even though the body remains axis-aligned.
       * @param value The amount of angular velocity.
       */
      setAngularVelocity(value: number): this;

      /**
       * Sets the angular acceleration of the body.
       *
       * In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
       * However, they can have angular motion, which is passed on to the Game Object bound to the body,
       * causing them to visually rotate, even though the body remains axis-aligned.
       * @param value The amount of angular acceleration.
       */
      setAngularAcceleration(value: number): this;

      /**
       * Sets the angular drag of the body. Drag is applied to the current velocity, providing a form of deceleration.
       * @param value The amount of drag.
       */
      setAngularDrag(value: number): this;

      /**
       * Sets the bounce values of this body.
       *
       * Bounce is the amount of restitution, or elasticity, the body has when it collides with another object.
       * A value of 1 means that it will retain its full velocity after the rebound. A value of 0 means it will not rebound at all.
       * @param x The amount of horizontal bounce to apply on collision. A float, typically between 0 and 1.
       * @param y The amount of vertical bounce to apply on collision. A float, typically between 0 and 1. Default x.
       */
      setBounce(x: number, y?: number): this;

      /**
       * Sets the horizontal bounce value for this body.
       * @param value The amount of horizontal bounce to apply on collision. A float, typically between 0 and 1.
       */
      setBounceX(value: number): this;

      /**
       * Sets the vertical bounce value for this body.
       * @param value The amount of vertical bounce to apply on collision. A float, typically between 0 and 1.
       */
      setBounceY(value: number): this;

      /**
       * Sets whether this Body collides with the world boundary.
       *
       * Optionally also sets the World Bounce values. If the `Body.worldBounce` is null, it's set to a new Phaser.Math.Vector2 first.
       * @param value `true` if this body should collide with the world bounds, otherwise `false`. Default true.
       * @param bounceX If given this will be replace the `worldBounce.x` value.
       * @param bounceY If given this will be replace the `worldBounce.y` value.
       */
      setCollideWorldBounds(value?: boolean, bounceX?: number, bounceY?: number): this;

      /**
       * Sets the debug values of this body.
       *
       * Bodies will only draw their debug if debug has been enabled for Arcade Physics as a whole.
       * Note that there is a performance cost in drawing debug displays. It should never be used in production.
       * @param showBody Set to `true` to have this body render its outline to the debug display.
       * @param showVelocity Set to `true` to have this body render a velocity marker to the debug display.
       * @param bodyColor The color of the body outline when rendered to the debug display.
       */
      setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): this;

      /**
       * Sets the color of the body outline when it renders to the debug display.
       * @param value The color of the body outline when rendered to the debug display.
       */
      setDebugBodyColor(value: number): this;

      /**
       * Set to `true` to have this body render its outline to the debug display.
       */
      debugShowBody: boolean;

      /**
       * Set to `true` to have this body render a velocity marker to the debug display.
       */
      debugShowVelocity: boolean;

      /**
       * The color of the body outline when it renders to the debug display.
       */
      debugBodyColor: number;

      /**
       * Sets the body's horizontal and vertical drag. If the vertical drag value is not provided, the vertical drag is set to the same value as the horizontal drag.
       *
       * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
       * It is the absolute loss of velocity due to movement, in pixels per second squared.
       * The x and y components are applied separately.
       *
       * When `useDamping` is true, this is 1 minus the damping factor.
       * A value of 1 means the Body loses no velocity.
       * A value of 0.95 means the Body loses 5% of its velocity per step.
       * A value of 0.5 means the Body loses 50% of its velocity per step.
       *
       * Drag is applied only when `acceleration` is zero.
       * @param x The amount of horizontal drag to apply.
       * @param y The amount of vertical drag to apply. Default x.
       */
      setDrag(x: number, y?: number): this;

      /**
       * Sets the body's horizontal drag.
       *
       * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
       * It is the absolute loss of velocity due to movement, in pixels per second squared.
       * The x and y components are applied separately.
       *
       * When `useDamping` is true, this is 1 minus the damping factor.
       * A value of 1 means the Body loses no velocity.
       * A value of 0.95 means the Body loses 5% of its velocity per step.
       * A value of 0.5 means the Body loses 50% of its velocity per step.
       *
       * Drag is applied only when `acceleration` is zero.
       * @param value The amount of horizontal drag to apply.
       */
      setDragX(value: number): this;

      /**
       * Sets the body's vertical drag.
       *
       * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
       * It is the absolute loss of velocity due to movement, in pixels per second squared.
       * The x and y components are applied separately.
       *
       * When `useDamping` is true, this is 1 minus the damping factor.
       * A value of 1 means the Body loses no velocity.
       * A value of 0.95 means the Body loses 5% of its velocity per step.
       * A value of 0.5 means the Body loses 50% of its velocity per step.
       *
       * Drag is applied only when `acceleration` is zero.
       * @param value The amount of vertical drag to apply.
       */
      setDragY(value: number): this;

      /**
       * If this Body is using `drag` for deceleration this function controls how the drag is applied.
       * If set to `true` drag will use a damping effect rather than a linear approach. If you are
       * creating a game where the Body moves freely at any angle (i.e. like the way the ship moves in
       * the game Asteroids) then you will get a far smoother and more visually correct deceleration
       * by using damping, avoiding the axis-drift that is prone with linear deceleration.
       *
       * If you enable this property then you should use far smaller `drag` values than with linear, as
       * they are used as a multiplier on the velocity. Values such as 0.95 will give a nice slow
       * deceleration, where-as smaller values, such as 0.5 will stop an object almost immediately.
       * @param value `true` to use damping for deceleration, or `false` to use linear deceleration.
       */
      setDamping(value: boolean): this;

      /**
       * Enables this Game Object's Body.
       * @param reset Also reset the Body and place it at (x, y).
       * @param x The horizontal position to place the Game Object and Body.
       * @param y The horizontal position to place the Game Object and Body.
       * @param enableGameObject Also activate this Game Object.
       * @param showGameObject Also show this Game Object.
       */
      enableBody(reset: boolean, x: number, y: number, enableGameObject: boolean, showGameObject: boolean): this;

      /**
       * Stops and disables this Game Object's Body.
       * @param disableGameObject Also deactivate this Game Object. Default false.
       * @param hideGameObject Also hide this Game Object. Default false.
       */
      disableBody(disableGameObject?: boolean, hideGameObject?: boolean): this;

      /**
       * Syncs the Body's position and size with its parent Game Object.
       * You don't need to call this for Dynamic Bodies, as it happens automatically.
       * But for Static bodies it's a useful way of modifying the position of a Static Body
       * in the Physics World, based on its Game Object.
       */
      refreshBody(): this;

      /**
       * Sets the friction of this game object's physics body.
       * In Arcade Physics, friction is a special case of motion transfer from an "immovable" body to a riding body.
       * @param x The amount of horizontal friction to apply, [0, 1].
       * @param y The amount of vertical friction to apply, [0, 1]. Default x.
       */
      setFriction(x: number, y?: number): this;

      /**
       * Sets the horizontal friction of this game object's physics body.
       * This can move a riding body horizontally when it collides with this one on the vertical axis.
       * @param x The amount of friction to apply, [0, 1].
       */
      setFrictionX(x: number): this;

      /**
       * Sets the vertical friction of this game object's physics body.
       * This can move a riding body vertically when it collides with this one on the horizontal axis.
       * @param y The amount of friction to apply, [0, 1].
       */
      setFrictionY(y: number): this;

      /**
       * Set the X and Y values of the gravitational pull to act upon this Arcade Physics Game Object. Values can be positive or negative. Larger values result in a stronger effect.
       *
       * If only one value is provided, this value will be used for both the X and Y axis.
       * @param x The gravitational force to be applied to the X-axis.
       * @param y The gravitational force to be applied to the Y-axis. If this is not specified, the X value will be used. Default x.
       */
      setGravity(x: number, y?: number): this;

      /**
       * Set the gravitational force to be applied to the X axis. Value can be positive or negative. Larger values result in a stronger effect.
       * @param x The gravitational force to be applied to the X-axis.
       */
      setGravityX(x: number): this;

      /**
       * Set the gravitational force to be applied to the Y axis. Value can be positive or negative. Larger values result in a stronger effect.
       * @param y The gravitational force to be applied to the Y-axis.
       */
      setGravityY(y: number): this;

      /**
       * Sets if this Body can be separated during collisions with other bodies.
       *
       * When a body is immovable it means it won't move at all, not even to separate it from collision
       * overlap. If you just wish to prevent a body from being knocked around by other bodies, see
       * the `setPushable` method instead.
       * @param value Sets if this body will be separated during collisions with other bodies. Default true.
       */
      setImmovable(value?: boolean): this;

      /**
       * Sets the mass of the physics body
       * @param value New value for the mass of the body.
       */
      setMass(value: number): this;

      /**
       * Sets if this Body can be pushed by another Body.
       *
       * A body that cannot be pushed will reflect back all of the velocity it is given to the
       * colliding body. If that body is also not pushable, then the separation will be split
       * between them evenly.
       *
       * If you want your body to never move or seperate at all, see the `setImmovable` method.
       * @param value Sets if this body can be pushed by collisions with another Body. Default true.
       */
      setPushable(value?: boolean): this;

      /**
       * Sets the body offset. This allows you to adjust the difference between the center of the body
       * and the x and y coordinates of the parent Game Object.
       * @param x The amount to offset the body from the parent Game Object along the x-axis.
       * @param y The amount to offset the body from the parent Game Object along the y-axis. Defaults to the value given for the x-axis. Default x.
       */
      setOffset(x: number, y?: number): this;

      /**
       * Sets the size of this physics body. Setting the size does not adjust the dimensions of the parent Game Object.
       * @param width The new width of the physics body, in pixels.
       * @param height The new height of the physics body, in pixels.
       * @param center Should the body be re-positioned so its center aligns with the parent Game Object? Default true.
       */
      setBodySize(width: number, height: number, center?: boolean): this;

      /**
       * Sets this physics body to use a circle for collision instead of a rectangle.
       * @param radius The radius of the physics body, in pixels.
       * @param offsetX The amount to offset the body from the parent Game Object along the x-axis.
       * @param offsetY The amount to offset the body from the parent Game Object along the y-axis.
       */
      setCircle(radius: number, offsetX?: number, offsetY?: number): this;

      /**
       * Sets the velocity of the Body.
       * @param x The horizontal velocity of the body. Positive values move the body to the right, while negative values move it to the left.
       * @param y The vertical velocity of the body. Positive values move the body down, while negative values move it up. Default x.
       */
      setVelocity(x: number, y?: number): this;

      /**
       * Sets the horizontal component of the body's velocity.
       *
       * Positive values move the body to the right, while negative values move it to the left.
       * @param x The new horizontal velocity.
       */
      setVelocityX(x: number): this;

      /**
       * Sets the vertical component of the body's velocity.
       *
       * Positive values move the body down, while negative values move it up.
       * @param y The new vertical velocity of the body.
       */
      setVelocityY(y: number): this;

      /**
       * Sets the maximum velocity of the body.
       * @param x The new maximum horizontal velocity.
       * @param y The new maximum vertical velocity. Default x.
       */
      setMaxVelocity(x: number, y?: number): this;

    }

    /**
     * The Arcade Physics Plugin belongs to a Scene and sets up and manages the Scene's physics simulation.
     * It also holds some useful methods for moving and rotating Arcade Physics Bodies.
     *
     * You can access it from within a Scene using `this.physics`.
     *
     * Arcade Physics uses the Projection Method of collision resolution and separation. While it's fast and suitable
     * for 'arcade' style games it lacks stability when multiple objects are in close proximity or resting upon each other.
     * The separation that stops two objects penetrating may create a new penetration against a different object. If you
     * require a high level of stability please consider using an alternative physics system, such as Matter.js.
     */
    class ArcadePhysics {
      /**
       *
       * @param scene The Scene that this Plugin belongs to.
       */
      constructor(scene: Phaser.Scene);

      /**
       * The Scene that this Plugin belongs to.
       */
      scene: Phaser.Scene;

      /**
       * The Scene's Systems.
       */
      systems: Phaser.Scenes.Systems;

      /**
       * A configuration object. Union of the `physics.arcade.*` properties of the GameConfig and SceneConfig objects.
       */
      config: Phaser.Types.Physics.Arcade.ArcadeWorldConfig;

      /**
       * The physics simulation.
       */
      world: Phaser.Physics.Arcade.World;

      /**
       * An object holding the Arcade Physics factory methods.
       */
      add: Phaser.Physics.Arcade.Factory;

      /**
       * Causes `World.update` to be automatically called each time the Scene
       * emits and `UPDATE` event. This is the default setting, so only needs
       * calling if you have specifically disabled it.
       */
      enableUpdate(): void;

      /**
       * Causes `World.update` to **not** be automatically called each time the Scene
       * emits and `UPDATE` event.
       *
       * If you wish to run the World update at your own rate, or from your own
       * component, then you should call this method to disable the built-in link,
       * and then call `World.update(delta, time)` accordingly.
       *
       * Note that `World.postUpdate` is always automatically called when the Scene
       * emits a `POST_UPDATE` event, regardless of this setting.
       */
      disableUpdate(): void;

      /**
       * Creates the physics configuration for the current Scene.
       */
      getConfig(): Phaser.Types.Physics.Arcade.ArcadeWorldConfig;

      /**
       * Tests if Game Objects overlap. See {@link Phaser.Physics.Arcade.World#overlap}
       * @param object1 The first object or array of objects to check.
       * @param object2 The second object or array of objects to check, or `undefined`.
       * @param collideCallback An optional callback function that is called if the objects collide.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they overlap. If this is set then `collideCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       */
      overlap(object1: Phaser.Types.Physics.Arcade.ArcadeColliderType, object2?: Phaser.Types.Physics.Arcade.ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * Performs a collision check and separation between the two physics enabled objects given, which can be single
       * Game Objects, arrays of Game Objects, Physics Groups, arrays of Physics Groups or normal Groups.
       *
       * If you don't require separation then use {@link #overlap} instead.
       *
       * If two Groups or arrays are passed, each member of one will be tested against each member of the other.
       *
       * If **only** one Group is passed (as `object1`), each member of the Group will be collided against the other members.
       *
       * If **only** one Array is passed, the array is iterated and every element in it is tested against the others.
       *
       * Two callbacks can be provided. The `collideCallback` is invoked if a collision occurs and the two colliding
       * objects are passed to it.
       *
       * Arcade Physics uses the Projection Method of collision resolution and separation. While it's fast and suitable
       * for 'arcade' style games it lacks stability when multiple objects are in close proximity or resting upon each other.
       * The separation that stops two objects penetrating may create a new penetration against a different object. If you
       * require a high level of stability please consider using an alternative physics system, such as Matter.js.
       * @param object1 The first object or array of objects to check.
       * @param object2 The second object or array of objects to check, or `undefined`.
       * @param collideCallback An optional callback function that is called if the objects collide.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they collide. If this is set then `collideCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       */
      collide(object1: Phaser.Types.Physics.Arcade.ArcadeColliderType, object2?: Phaser.Types.Physics.Arcade.ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * This advanced method is specifically for testing for collision between a single Sprite and an array of Tile objects.
       *
       * You should generally use the `collide` method instead, with a Sprite vs. a Tilemap Layer, as that will perform
       * tile filtering and culling for you, as well as handle the interesting face collision automatically.
       *
       * This method is offered for those who would like to check for collision with specific Tiles in a layer, without
       * having to set any collision attributes on the tiles in question. This allows you to perform quick dynamic collisions
       * on small sets of Tiles. As such, no culling or checks are made to the array of Tiles given to this method,
       * you should filter them before passing them to this method.
       *
       * Important: Use of this method skips the `interesting faces` system that Tilemap Layers use. This means if you have
       * say a row or column of tiles, and you jump into, or walk over them, it's possible to get stuck on the edges of the
       * tiles as the interesting face calculations are skipped. However, for quick-fire small collision set tests on
       * dynamic maps, this method can prove very useful.
       * @param sprite The first object to check for collision.
       * @param tiles An array of Tiles to check for collision against.
       * @param collideCallback An optional callback function that is called if the objects collide.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they collide. If this is set then `collideCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       */
      collideTiles(sprite: Phaser.GameObjects.GameObject, tiles: Phaser.Tilemaps.Tile[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * This advanced method is specifically for testing for overlaps between a single Sprite and an array of Tile objects.
       *
       * You should generally use the `overlap` method instead, with a Sprite vs. a Tilemap Layer, as that will perform
       * tile filtering and culling for you, as well as handle the interesting face collision automatically.
       *
       * This method is offered for those who would like to check for overlaps with specific Tiles in a layer, without
       * having to set any collision attributes on the tiles in question. This allows you to perform quick dynamic overlap
       * tests on small sets of Tiles. As such, no culling or checks are made to the array of Tiles given to this method,
       * you should filter them before passing them to this method.
       * @param sprite The first object to check for collision.
       * @param tiles An array of Tiles to check for collision against.
       * @param collideCallback An optional callback function that is called if the objects overlap.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they collide. If this is set then `collideCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       */
      overlapTiles(sprite: Phaser.GameObjects.GameObject, tiles: Phaser.Tilemaps.Tile[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * Pauses the simulation.
       */
      pause(): Phaser.Physics.Arcade.World;

      /**
       * Resumes the simulation (if paused).
       */
      resume(): Phaser.Physics.Arcade.World;

      /**
       * Sets the acceleration.x/y property on the game object so it will move towards the x/y coordinates at the given rate (in pixels per second squared)
       *
       * You must give a maximum speed value, beyond which the game object won't go any faster.
       *
       * Note: The game object does not continuously track the target. If the target changes location during transit the game object will not modify its course.
       * Note: The game object doesn't stop moving once it reaches the destination coordinates.
       * @param gameObject Any Game Object with an Arcade Physics body.
       * @param x The x coordinate to accelerate towards.
       * @param y The y coordinate to accelerate towards.
       * @param speed The acceleration (change in speed) in pixels per second squared. Default 60.
       * @param xSpeedMax The maximum x velocity the game object can reach. Default 500.
       * @param ySpeedMax The maximum y velocity the game object can reach. Default 500.
       */
      accelerateTo(gameObject: Phaser.GameObjects.GameObject, x: number, y: number, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;

      /**
       * Sets the acceleration.x/y property on the game object so it will move towards the x/y coordinates at the given rate (in pixels per second squared)
       *
       * You must give a maximum speed value, beyond which the game object won't go any faster.
       *
       * Note: The game object does not continuously track the target. If the target changes location during transit the game object will not modify its course.
       * Note: The game object doesn't stop moving once it reaches the destination coordinates.
       * @param gameObject Any Game Object with an Arcade Physics body.
       * @param destination The Game Object to move towards. Can be any object but must have visible x/y properties.
       * @param speed The acceleration (change in speed) in pixels per second squared. Default 60.
       * @param xSpeedMax The maximum x velocity the game object can reach. Default 500.
       * @param ySpeedMax The maximum y velocity the game object can reach. Default 500.
       */
      accelerateToObject(gameObject: Phaser.GameObjects.GameObject, destination: Phaser.GameObjects.GameObject, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;

      /**
       * Finds the Body or Game Object closest to a source point or object.
       *
       * If a `targets` argument is passed, this method finds the closest of those.
       * The targets can be Arcade Physics Game Objects, Dynamic Bodies, or Static Bodies.
       *
       * If no `targets` argument is passed, this method finds the closest Dynamic Body.
       *
       * If two or more targets are the exact same distance from the source point, only the first target
       * is returned.
       * @param source Any object with public `x` and `y` properties, such as a Game Object or Geometry object.
       * @param targets The targets.
       */
      closest(source: any, targets?: Phaser.Physics.Arcade.Body[] | Phaser.Physics.Arcade.StaticBody[] | Phaser.GameObjects.GameObject[]): Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody | Phaser.GameObjects.GameObject;

      /**
       * Finds the Body or Game Object farthest from a source point or object.
       *
       * If a `targets` argument is passed, this method finds the farthest of those.
       * The targets can be Arcade Physics Game Objects, Dynamic Bodies, or Static Bodies.
       *
       * If no `targets` argument is passed, this method finds the farthest Dynamic Body.
       *
       * If two or more targets are the exact same distance from the source point, only the first target
       * is returned.
       * @param source Any object with public `x` and `y` properties, such as a Game Object or Geometry object.
       * @param targets The targets.
       */
      furthest(source: any, targets?: Phaser.Physics.Arcade.Body[] | Phaser.Physics.Arcade.StaticBody[] | Phaser.GameObjects.GameObject[]): Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody | Phaser.GameObjects.GameObject;

      /**
       * Move the given display object towards the x/y coordinates at a steady velocity.
       * If you specify a maxTime then it will adjust the speed (over-writing what you set) so it arrives at the destination in that number of seconds.
       * Timings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.
       * Note: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.
       * Note: The display object doesn't stop moving once it reaches the destination coordinates.
       * Note: Doesn't take into account acceleration, maxVelocity or drag (if you've set drag or acceleration too high this object may not move at all)
       * @param gameObject Any Game Object with an Arcade Physics body.
       * @param x The x coordinate to move towards.
       * @param y The y coordinate to move towards.
       * @param speed The speed it will move, in pixels per second (default is 60 pixels/sec) Default 60.
       * @param maxTime Time given in milliseconds (1000 = 1 sec). If set the speed is adjusted so the object will arrive at destination in the given number of ms. Default 0.
       */
      moveTo(gameObject: Phaser.GameObjects.GameObject, x: number, y: number, speed?: number, maxTime?: number): number;

      /**
       * Move the given display object towards the destination object at a steady velocity.
       * If you specify a maxTime then it will adjust the speed (overwriting what you set) so it arrives at the destination in that number of seconds.
       * Timings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.
       * Note: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.
       * Note: The display object doesn't stop moving once it reaches the destination coordinates.
       * Note: Doesn't take into account acceleration, maxVelocity or drag (if you've set drag or acceleration too high this object may not move at all)
       * @param gameObject Any Game Object with an Arcade Physics body.
       * @param destination Any object with public `x` and `y` properties, such as a Game Object or Geometry object.
       * @param speed The speed it will move, in pixels per second (default is 60 pixels/sec) Default 60.
       * @param maxTime Time given in milliseconds (1000 = 1 sec). If set the speed is adjusted so the object will arrive at destination in the given number of ms. Default 0.
       */
      moveToObject(gameObject: Phaser.GameObjects.GameObject, destination: object, speed?: number, maxTime?: number): number;

      /**
       * Given the angle (in degrees) and speed calculate the velocity and return it as a vector, or set it to the given vector object.
       * One way to use this is: velocityFromAngle(angle, 200, sprite.body.velocity) which will set the values directly to the sprite's velocity and not create a new vector object.
       * @param angle The angle in degrees calculated in clockwise positive direction (down = 90 degrees positive, right = 0 degrees positive, up = 90 degrees negative)
       * @param speed The speed it will move, in pixels per second squared. Default 60.
       * @param vec2 The Vector2 in which the x and y properties will be set to the calculated velocity.
       */
      velocityFromAngle(angle: number, speed?: number, vec2?: Phaser.Math.Vector2): Phaser.Math.Vector2;

      /**
       * Given the rotation (in radians) and speed calculate the velocity and return it as a vector, or set it to the given vector object.
       * One way to use this is: velocityFromRotation(rotation, 200, sprite.body.velocity) which will set the values directly to the sprite's velocity and not create a new vector object.
       * @param rotation The angle in radians.
       * @param speed The speed it will move, in pixels per second squared Default 60.
       * @param vec2 The Vector2 in which the x and y properties will be set to the calculated velocity.
       */
      velocityFromRotation(rotation: number, speed?: number, vec2?: Phaser.Math.Vector2): Phaser.Math.Vector2;

      /**
       * This method will search the given rectangular area and return an array of all physics bodies that
       * overlap with it. It can return either Dynamic, Static bodies or a mixture of both.
       *
       * A body only has to intersect with the search area to be considered, it doesn't have to be fully
       * contained within it.
       *
       * If Arcade Physics is set to use the RTree (which it is by default) then the search for is extremely fast,
       * otherwise the search is O(N) for Dynamic Bodies.
       * @param x The top-left x coordinate of the area to search within.
       * @param y The top-left y coordinate of the area to search within.
       * @param width The width of the area to search within.
       * @param height The height of the area to search within.
       * @param includeDynamic Should the search include Dynamic Bodies? Default true.
       * @param includeStatic Should the search include Static Bodies? Default false.
       */
      overlapRect(x: number, y: number, width: number, height: number, includeDynamic?: boolean, includeStatic?: boolean): Phaser.Physics.Arcade.Body[] | Phaser.Physics.Arcade.StaticBody[];

      /**
       * This method will search the given circular area and return an array of all physics bodies that
       * overlap with it. It can return either Dynamic, Static bodies or a mixture of both.
       *
       * A body only has to intersect with the search area to be considered, it doesn't have to be fully
       * contained within it.
       *
       * If Arcade Physics is set to use the RTree (which it is by default) then the search is rather fast,
       * otherwise the search is O(N) for Dynamic Bodies.
       * @param x The x coordinate of the center of the area to search within.
       * @param y The y coordinate of the center of the area to search within.
       * @param radius The radius of the area to search within.
       * @param includeDynamic Should the search include Dynamic Bodies? Default true.
       * @param includeStatic Should the search include Static Bodies? Default false.
       */
      overlapCirc(x: number, y: number, radius: number, includeDynamic?: boolean, includeStatic?: boolean): Phaser.Physics.Arcade.Body[] | Phaser.Physics.Arcade.StaticBody[];

      /**
       * The Scene that owns this plugin is shutting down.
       * We need to kill and reset all internal properties as well as stop listening to Scene events.
       */
      shutdown(): void;

      /**
       * The Scene that owns this plugin is being destroyed.
       * We need to shutdown and then kill off all external references.
       */
      destroy(): void;

    }

    /**
     * An Arcade Physics Sprite is a Sprite with an Arcade Physics body and related components.
     * The body can be dynamic or static.
     *
     * The main difference between an Arcade Sprite and an Arcade Image is that you cannot animate an Arcade Image.
     * If you do not require animation then you can safely use Arcade Images instead of Arcade Sprites.
     */
    class Sprite extends Phaser.GameObjects.Sprite implements Phaser.Physics.Arcade.Components.Acceleration, Phaser.Physics.Arcade.Components.Angular, Phaser.Physics.Arcade.Components.Bounce, Phaser.Physics.Arcade.Components.Debug, Phaser.Physics.Arcade.Components.Drag, Phaser.Physics.Arcade.Components.Enable, Phaser.Physics.Arcade.Components.Friction, Phaser.Physics.Arcade.Components.Gravity, Phaser.Physics.Arcade.Components.Immovable, Phaser.Physics.Arcade.Components.Mass, Phaser.Physics.Arcade.Components.Pushable, Phaser.Physics.Arcade.Components.Size, Phaser.Physics.Arcade.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
      /**
       *
       * @param scene The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param texture The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with.
       */
      constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number);

      /**
       * This Game Object's Physics Body.
       */
      body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody;

      /**
       * Clears all alpha values associated with this Game Object.
       *
       * Immediately sets the alpha levels back to 1 (fully opaque).
       */
      clearAlpha(): this;

      /**
       * Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
       * Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.
       *
       * If your game is running under WebGL you can optionally specify four different alpha values, each of which
       * correspond to the four corners of the Game Object. Under Canvas only the `topLeft` value given is used.
       * @param topLeft The alpha value used for the top-left of the Game Object. If this is the only value given it's applied across the whole Game Object. Default 1.
       * @param topRight The alpha value used for the top-right of the Game Object. WebGL only.
       * @param bottomLeft The alpha value used for the bottom-left of the Game Object. WebGL only.
       * @param bottomRight The alpha value used for the bottom-right of the Game Object. WebGL only.
       */
      setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

      /**
       * The alpha value of the Game Object.
       *
       * This is a global value, impacting the entire Game Object, not just a region of it.
       */
      alpha: number;

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
       * Sets the Blend Mode being used by this Game Object.
       *
       * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
       *
       * Under WebGL only the following Blend Modes are available:
       *
       * * ADD
       * * MULTIPLY
       * * SCREEN
       * * ERASE
       *
       * Canvas has more available depending on browser support.
       *
       * You can also create your own custom Blend Modes in WebGL.
       *
       * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
       * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
       * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
       * are used.
       */
      blendMode: Phaser.BlendModes | string;

      /**
       * Sets the Blend Mode being used by this Game Object.
       *
       * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
       *
       * Under WebGL only the following Blend Modes are available:
       *
       * * ADD
       * * MULTIPLY
       * * SCREEN
       * * ERASE (only works when rendering to a framebuffer, like a Render Texture)
       *
       * Canvas has more available depending on browser support.
       *
       * You can also create your own custom Blend Modes in WebGL.
       *
       * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
       * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
       * reasons try to be careful about the construction of your Scene and the frequency in which blend modes
       * are used.
       * @param value The BlendMode value. Either a string or a CONST.
       */
      setBlendMode(value: string | Phaser.BlendModes): this;

      /**
       * The depth of this Game Object within the Scene.
       *
       * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
       * of Game Objects, without actually moving their position in the display list.
       *
       * The default depth is zero. A Game Object with a higher depth
       * value will always render in front of one with a lower value.
       *
       * Setting the depth will queue a depth sort event within the Scene.
       */
      depth: number;

      /**
       * The depth of this Game Object within the Scene.
       *
       * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
       * of Game Objects, without actually moving their position in the display list.
       *
       * The default depth is zero. A Game Object with a higher depth
       * value will always render in front of one with a lower value.
       *
       * Setting the depth will queue a depth sort event within the Scene.
       * @param value The depth of this Game Object.
       */
      setDepth(value: number): this;

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
       * Gets the center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       */
      getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

      /**
       * Gets the top-left corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the top-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the top-right corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the left-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getLeftCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the right-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getRightCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-left corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-right corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bounds of this Game Object, regardless of origin.
       * The values are stored and returned in a Rectangle, or Rectangle-like, object.
       * @param output An object to store the values in. If not provided a new Rectangle will be created.
       */
      getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

      /**
       * The Mask this Game Object is using during render.
       */
      mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

      /**
       * Sets the mask that this Game Object will use to render with.
       *
       * The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
       * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * If a mask is already set on this Game Object it will be immediately replaced.
       *
       * Masks are positioned in global space and are not relative to the Game Object to which they
       * are applied. The reason for this is that multiple Game Objects can all share the same mask.
       *
       * Masks have no impact on physics or input detection. They are purely a rendering component
       * that allows you to limit what is visible during the render pass.
       * @param mask The mask this Game Object will use when rendering.
       */
      setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

      /**
       * Clears the mask that this Game Object was using.
       * @param destroyMask Destroy the mask before clearing it? Default false.
       */
      clearMask(destroyMask?: boolean): this;

      /**
       * Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
       * including this one.
       *
       * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * To create the mask you need to pass in a reference to a renderable Game Object.
       * A renderable Game Object is one that uses a texture to render with, such as an
       * Image, Sprite, Render Texture or BitmapText.
       *
       * If you do not provide a renderable object, and this Game Object has a texture,
       * it will use itself as the object. This means you can call this method to create
       * a Bitmap Mask from any renderable Game Object.
       * @param renderable A renderable Game Object that uses a texture, such as a Sprite.
       */
      createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

      /**
       * Creates and returns a Geometry Mask. This mask can be used by any Game Object,
       * including this one.
       *
       * To create the mask you need to pass in a reference to a Graphics Game Object.
       *
       * If you do not provide a graphics object, and this Game Object is an instance
       * of a Graphics object, then it will use itself to create the mask.
       *
       * This means you can call this method to create a Geometry Mask from any Graphics Game Object.
       * @param graphics A Graphics Game Object. The geometry within it will be used as the mask.
       */
      createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

      /**
       * The horizontal origin of this Game Object.
       * The origin maps the relationship between the size and position of the Game Object.
       * The default value is 0.5, meaning all Game Objects are positioned based on their center.
       * Setting the value to 0 means the position now relates to the left of the Game Object.
       */
      originX: number;

      /**
       * The vertical origin of this Game Object.
       * The origin maps the relationship between the size and position of the Game Object.
       * The default value is 0.5, meaning all Game Objects are positioned based on their center.
       * Setting the value to 0 means the position now relates to the top of the Game Object.
       */
      originY: number;

      /**
       * The horizontal display origin of this Game Object.
       * The origin is a normalized value between 0 and 1.
       * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
       */
      displayOriginX: number;

      /**
       * The vertical display origin of this Game Object.
       * The origin is a normalized value between 0 and 1.
       * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
       */
      displayOriginY: number;

      /**
       * Sets the origin of this Game Object.
       *
       * The values are given in the range 0 to 1.
       * @param x The horizontal origin value. Default 0.5.
       * @param y The vertical origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setOrigin(x?: number, y?: number): this;

      /**
       * Sets the origin of this Game Object based on the Pivot values in its Frame.
       */
      setOriginFromFrame(): this;

      /**
       * Sets the display origin of this Game Object.
       * The difference between this and setting the origin is that you can use pixel values for setting the display origin.
       * @param x The horizontal display origin value. Default 0.
       * @param y The vertical display origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setDisplayOrigin(x?: number, y?: number): this;

      /**
       * Updates the Display Origin cached values internally stored on this Game Object.
       * You don't usually call this directly, but it is exposed for edge-cases where you may.
       */
      updateDisplayOrigin(): this;

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

      /**
       * The horizontal scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       */
      scrollFactorX: number;

      /**
       * The vertical scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       */
      scrollFactorY: number;

      /**
       * Sets the scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       * @param x The horizontal scroll factor of this Game Object.
       * @param y The vertical scroll factor of this Game Object. If not set it will use the `x` value. Default x.
       */
      setScrollFactor(x: number, y?: number): this;

      /**
       * The native (un-scaled) width of this Game Object.
       *
       * Changing this value will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or use
       * the `displayWidth` property.
       */
      width: number;

      /**
       * The native (un-scaled) height of this Game Object.
       *
       * Changing this value will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or use
       * the `displayHeight` property.
       */
      height: number;

      /**
       * The displayed width of this Game Object.
       *
       * This value takes into account the scale factor.
       *
       * Setting this value will adjust the Game Object's scale property.
       */
      displayWidth: number;

      /**
       * The displayed height of this Game Object.
       *
       * This value takes into account the scale factor.
       *
       * Setting this value will adjust the Game Object's scale property.
       */
      displayHeight: number;

      /**
       * Sets the size of this Game Object to be that of the given Frame.
       *
       * This will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or call the
       * `setDisplaySize` method, which is the same thing as changing the scale but allows you
       * to do so by giving pixel values.
       *
       * If you have enabled this Game Object for input, changing the size will _not_ change the
       * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
       * @param frame The frame to base the size of this Game Object on.
       */
      setSizeToFrame(frame: Phaser.Textures.Frame): this;

      /**
       * Sets the internal size of this Game Object, as used for frame or physics body creation.
       *
       * This will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or call the
       * `setDisplaySize` method, which is the same thing as changing the scale but allows you
       * to do so by giving pixel values.
       *
       * If you have enabled this Game Object for input, changing the size will _not_ change the
       * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
       * @param width The width of this Game Object.
       * @param height The height of this Game Object.
       */
      setSize(width: number, height: number): this;

      /**
       * Sets the display size of this Game Object.
       *
       * Calling this will adjust the scale.
       * @param width The width of this Game Object.
       * @param height The height of this Game Object.
       */
      setDisplaySize(width: number, height: number): this;

      /**
       * The Texture this Game Object is using to render with.
       */
      texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

      /**
       * The Texture Frame this Game Object is using to render with.
       */
      frame: Phaser.Textures.Frame;

      /**
       * A boolean flag indicating if this Game Object is being cropped or not.
       * You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
       * Equally, calling `setCrop` with no arguments will reset the crop and disable it.
       */
      isCropped: boolean;

      /**
       * Applies a crop to a texture based Game Object, such as a Sprite or Image.
       *
       * The crop is a rectangle that limits the area of the texture frame that is visible during rendering.
       *
       * Cropping a Game Object does not change its size, dimensions, physics body or hit area, it just
       * changes what is shown when rendered.
       *
       * The crop coordinates are relative to the texture frame, not the Game Object, meaning 0 x 0 is the top-left.
       *
       * Therefore, if you had a Game Object that had an 800x600 sized texture, and you wanted to show only the left
       * half of it, you could call `setCrop(0, 0, 400, 600)`.
       *
       * It is also scaled to match the Game Object scale automatically. Therefore a crop rect of 100x50 would crop
       * an area of 200x100 when applied to a Game Object that had a scale factor of 2.
       *
       * You can either pass in numeric values directly, or you can provide a single Rectangle object as the first argument.
       *
       * Call this method with no arguments at all to reset the crop, or toggle the property `isCropped` to `false`.
       *
       * You should do this if the crop rectangle becomes the same size as the frame itself, as it will allow
       * the renderer to skip several internal calculations.
       * @param x The x coordinate to start the crop from. Or a Phaser.Geom.Rectangle object, in which case the rest of the arguments are ignored.
       * @param y The y coordinate to start the crop from.
       * @param width The width of the crop rectangle in pixels.
       * @param height The height of the crop rectangle in pixels.
       */
      setCrop(x?: number | Phaser.Geom.Rectangle, y?: number, width?: number, height?: number): this;

      /**
       * Sets the texture and frame this Game Object will use to render with.
       *
       * Textures are referenced by their string-based keys, as stored in the Texture Manager.
       * @param key The key of the texture to be used, as stored in the Texture Manager.
       * @param frame The name or index of the frame within the Texture.
       */
      setTexture(key: string, frame?: string | number): this;

      /**
       * Sets the frame this Game Object will use to render with.
       *
       * The Frame has to belong to the current Texture being used.
       *
       * It can be either a string or an index.
       *
       * Calling `setFrame` will modify the `width` and `height` properties of your Game Object.
       * It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.
       * @param frame The name or index of the frame within the Texture.
       * @param updateSize Should this call adjust the size of the Game Object? Default true.
       * @param updateOrigin Should this call adjust the origin of the Game Object? Default true.
       */
      setFrame(frame: string | number, updateSize?: boolean, updateOrigin?: boolean): this;

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
       * The x position of this Game Object.
       */
      x: number;

      /**
       * The y position of this Game Object.
       */
      y: number;

      /**
       * The z position of this Game Object.
       *
       * Note: The z position does not control the rendering order of 2D Game Objects. Use
       * {@link Phaser.GameObjects.Components.Depth#depth} instead.
       */
      z: number;

      /**
       * The w position of this Game Object.
       */
      w: number;

      /**
       * This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
       * to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.
       *
       * Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
       * isn't the case, use the `scaleX` or `scaleY` properties instead.
       */
      scale: number;

      /**
       * The horizontal scale of this Game Object.
       */
      scaleX: number;

      /**
       * The vertical scale of this Game Object.
       */
      scaleY: number;

      /**
       * The angle of this Game Object as expressed in degrees.
       *
       * Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
       * and -90 is up.
       *
       * If you prefer to work in radians, see the `rotation` property instead.
       */
      angle: number;

      /**
       * The angle of this Game Object in radians.
       *
       * Phaser uses a right-hand clockwise rotation system, where 0 is right, PI/2 is down, +-PI is left
       * and -PI/2 is up.
       *
       * If you prefer to work in degrees, see the `angle` property instead.
       */
      rotation: number;

      /**
       * Sets the position of this Game Object.
       * @param x The x position of this Game Object. Default 0.
       * @param y The y position of this Game Object. If not set it will use the `x` value. Default x.
       * @param z The z position of this Game Object. Default 0.
       * @param w The w position of this Game Object. Default 0.
       */
      setPosition(x?: number, y?: number, z?: number, w?: number): this;

      /**
       * Copies an object's coordinates to this Game Object's position.
       * @param source An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied.
       */
      copyPosition(source: Phaser.Types.Math.Vector2Like | Phaser.Types.Math.Vector3Like | Phaser.Types.Math.Vector4Like): this;

      /**
       * Sets the position of this Game Object to be a random position within the confines of
       * the given area.
       *
       * If no area is specified a random position between 0 x 0 and the game width x height is used instead.
       *
       * The position does not factor in the size of this Game Object, meaning that only the origin is
       * guaranteed to be within the area.
       * @param x The x position of the top-left of the random area. Default 0.
       * @param y The y position of the top-left of the random area. Default 0.
       * @param width The width of the random area.
       * @param height The height of the random area.
       */
      setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

      /**
       * Sets the rotation of this Game Object.
       * @param radians The rotation of this Game Object, in radians. Default 0.
       */
      setRotation(radians?: number): this;

      /**
       * Sets the angle of this Game Object.
       * @param degrees The rotation of this Game Object, in degrees. Default 0.
       */
      setAngle(degrees?: number): this;

      /**
       * Sets the scale of this Game Object.
       * @param x The horizontal scale of this Game Object.
       * @param y The vertical scale of this Game Object. If not set it will use the `x` value. Default x.
       */
      setScale(x: number, y?: number): this;

      /**
       * Sets the x position of this Game Object.
       * @param value The x position of this Game Object. Default 0.
       */
      setX(value?: number): this;

      /**
       * Sets the y position of this Game Object.
       * @param value The y position of this Game Object. Default 0.
       */
      setY(value?: number): this;

      /**
       * Sets the z position of this Game Object.
       *
       * Note: The z position does not control the rendering order of 2D Game Objects. Use
       * {@link Phaser.GameObjects.Components.Depth#setDepth} instead.
       * @param value The z position of this Game Object. Default 0.
       */
      setZ(value?: number): this;

      /**
       * Sets the w position of this Game Object.
       * @param value The w position of this Game Object. Default 0.
       */
      setW(value?: number): this;

      /**
       * Gets the local transform matrix for this Game Object.
       * @param tempMatrix The matrix to populate with the values from this Game Object.
       */
      getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

      /**
       * Gets the world transform matrix for this Game Object, factoring in any parent Containers.
       * @param tempMatrix The matrix to populate with the values from this Game Object.
       * @param parentMatrix A temporary matrix to hold parent values during the calculations.
       */
      getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix, parentMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

      /**
       * Takes the given `x` and `y` coordinates and converts them into local space for this
       * Game Object, taking into account parent and local transforms, and the Display Origin.
       *
       * The returned Vector2 contains the translated point in its properties.
       *
       * A Camera needs to be provided in order to handle modified scroll factors. If no
       * camera is specified, it will use the `main` camera from the Scene to which this
       * Game Object belongs.
       * @param x The x position to translate.
       * @param y The y position to translate.
       * @param point A Vector2, or point-like object, to store the results in.
       * @param camera The Camera which is being tested against. If not given will use the Scene default camera.
       */
      getLocalPoint(x: number, y: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

      /**
       * Gets the sum total rotation of all of this Game Objects parent Containers.
       *
       * The returned value is in radians and will be zero if this Game Object has no parent container.
       */
      getParentRotation(): number;

      /**
       * The visible state of the Game Object.
       *
       * An invisible Game Object will skip rendering, but will still process update logic.
       */
      visible: boolean;

      /**
       * Sets the visibility of this Game Object.
       *
       * An invisible Game Object will skip rendering, but will still process update logic.
       * @param value The visible state of the Game Object.
       */
      setVisible(value: boolean): this;

      /**
       * Sets the body's horizontal and vertical acceleration. If the vertical acceleration value is not provided, the vertical acceleration is set to the same value as the horizontal acceleration.
       * @param x The horizontal acceleration
       * @param y The vertical acceleration Default x.
       */
      setAcceleration(x: number, y?: number): this;

      /**
       * Sets the body's horizontal acceleration.
       * @param value The horizontal acceleration
       */
      setAccelerationX(value: number): this;

      /**
       * Sets the body's vertical acceleration.
       * @param value The vertical acceleration
       */
      setAccelerationY(value: number): this;

      /**
       * Sets the angular velocity of the body.
       *
       * In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
       * However, they can have angular motion, which is passed on to the Game Object bound to the body,
       * causing them to visually rotate, even though the body remains axis-aligned.
       * @param value The amount of angular velocity.
       */
      setAngularVelocity(value: number): this;

      /**
       * Sets the angular acceleration of the body.
       *
       * In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
       * However, they can have angular motion, which is passed on to the Game Object bound to the body,
       * causing them to visually rotate, even though the body remains axis-aligned.
       * @param value The amount of angular acceleration.
       */
      setAngularAcceleration(value: number): this;

      /**
       * Sets the angular drag of the body. Drag is applied to the current velocity, providing a form of deceleration.
       * @param value The amount of drag.
       */
      setAngularDrag(value: number): this;

      /**
       * Sets the bounce values of this body.
       *
       * Bounce is the amount of restitution, or elasticity, the body has when it collides with another object.
       * A value of 1 means that it will retain its full velocity after the rebound. A value of 0 means it will not rebound at all.
       * @param x The amount of horizontal bounce to apply on collision. A float, typically between 0 and 1.
       * @param y The amount of vertical bounce to apply on collision. A float, typically between 0 and 1. Default x.
       */
      setBounce(x: number, y?: number): this;

      /**
       * Sets the horizontal bounce value for this body.
       * @param value The amount of horizontal bounce to apply on collision. A float, typically between 0 and 1.
       */
      setBounceX(value: number): this;

      /**
       * Sets the vertical bounce value for this body.
       * @param value The amount of vertical bounce to apply on collision. A float, typically between 0 and 1.
       */
      setBounceY(value: number): this;

      /**
       * Sets whether this Body collides with the world boundary.
       *
       * Optionally also sets the World Bounce values. If the `Body.worldBounce` is null, it's set to a new Phaser.Math.Vector2 first.
       * @param value `true` if this body should collide with the world bounds, otherwise `false`. Default true.
       * @param bounceX If given this will be replace the `worldBounce.x` value.
       * @param bounceY If given this will be replace the `worldBounce.y` value.
       */
      setCollideWorldBounds(value?: boolean, bounceX?: number, bounceY?: number): this;

      /**
       * Sets the debug values of this body.
       *
       * Bodies will only draw their debug if debug has been enabled for Arcade Physics as a whole.
       * Note that there is a performance cost in drawing debug displays. It should never be used in production.
       * @param showBody Set to `true` to have this body render its outline to the debug display.
       * @param showVelocity Set to `true` to have this body render a velocity marker to the debug display.
       * @param bodyColor The color of the body outline when rendered to the debug display.
       */
      setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): this;

      /**
       * Sets the color of the body outline when it renders to the debug display.
       * @param value The color of the body outline when rendered to the debug display.
       */
      setDebugBodyColor(value: number): this;

      /**
       * Set to `true` to have this body render its outline to the debug display.
       */
      debugShowBody: boolean;

      /**
       * Set to `true` to have this body render a velocity marker to the debug display.
       */
      debugShowVelocity: boolean;

      /**
       * The color of the body outline when it renders to the debug display.
       */
      debugBodyColor: number;

      /**
       * Sets the body's horizontal and vertical drag. If the vertical drag value is not provided, the vertical drag is set to the same value as the horizontal drag.
       *
       * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
       * It is the absolute loss of velocity due to movement, in pixels per second squared.
       * The x and y components are applied separately.
       *
       * When `useDamping` is true, this is 1 minus the damping factor.
       * A value of 1 means the Body loses no velocity.
       * A value of 0.95 means the Body loses 5% of its velocity per step.
       * A value of 0.5 means the Body loses 50% of its velocity per step.
       *
       * Drag is applied only when `acceleration` is zero.
       * @param x The amount of horizontal drag to apply.
       * @param y The amount of vertical drag to apply. Default x.
       */
      setDrag(x: number, y?: number): this;

      /**
       * Sets the body's horizontal drag.
       *
       * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
       * It is the absolute loss of velocity due to movement, in pixels per second squared.
       * The x and y components are applied separately.
       *
       * When `useDamping` is true, this is 1 minus the damping factor.
       * A value of 1 means the Body loses no velocity.
       * A value of 0.95 means the Body loses 5% of its velocity per step.
       * A value of 0.5 means the Body loses 50% of its velocity per step.
       *
       * Drag is applied only when `acceleration` is zero.
       * @param value The amount of horizontal drag to apply.
       */
      setDragX(value: number): this;

      /**
       * Sets the body's vertical drag.
       *
       * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
       * It is the absolute loss of velocity due to movement, in pixels per second squared.
       * The x and y components are applied separately.
       *
       * When `useDamping` is true, this is 1 minus the damping factor.
       * A value of 1 means the Body loses no velocity.
       * A value of 0.95 means the Body loses 5% of its velocity per step.
       * A value of 0.5 means the Body loses 50% of its velocity per step.
       *
       * Drag is applied only when `acceleration` is zero.
       * @param value The amount of vertical drag to apply.
       */
      setDragY(value: number): this;

      /**
       * If this Body is using `drag` for deceleration this function controls how the drag is applied.
       * If set to `true` drag will use a damping effect rather than a linear approach. If you are
       * creating a game where the Body moves freely at any angle (i.e. like the way the ship moves in
       * the game Asteroids) then you will get a far smoother and more visually correct deceleration
       * by using damping, avoiding the axis-drift that is prone with linear deceleration.
       *
       * If you enable this property then you should use far smaller `drag` values than with linear, as
       * they are used as a multiplier on the velocity. Values such as 0.95 will give a nice slow
       * deceleration, where-as smaller values, such as 0.5 will stop an object almost immediately.
       * @param value `true` to use damping for deceleration, or `false` to use linear deceleration.
       */
      setDamping(value: boolean): this;

      /**
       * Enables this Game Object's Body.
       * @param reset Also reset the Body and place it at (x, y).
       * @param x The horizontal position to place the Game Object and Body.
       * @param y The horizontal position to place the Game Object and Body.
       * @param enableGameObject Also activate this Game Object.
       * @param showGameObject Also show this Game Object.
       */
      enableBody(reset: boolean, x: number, y: number, enableGameObject: boolean, showGameObject: boolean): this;

      /**
       * Stops and disables this Game Object's Body.
       * @param disableGameObject Also deactivate this Game Object. Default false.
       * @param hideGameObject Also hide this Game Object. Default false.
       */
      disableBody(disableGameObject?: boolean, hideGameObject?: boolean): this;

      /**
       * Syncs the Body's position and size with its parent Game Object.
       * You don't need to call this for Dynamic Bodies, as it happens automatically.
       * But for Static bodies it's a useful way of modifying the position of a Static Body
       * in the Physics World, based on its Game Object.
       */
      refreshBody(): this;

      /**
       * Sets the friction of this game object's physics body.
       * In Arcade Physics, friction is a special case of motion transfer from an "immovable" body to a riding body.
       * @param x The amount of horizontal friction to apply, [0, 1].
       * @param y The amount of vertical friction to apply, [0, 1]. Default x.
       */
      setFriction(x: number, y?: number): this;

      /**
       * Sets the horizontal friction of this game object's physics body.
       * This can move a riding body horizontally when it collides with this one on the vertical axis.
       * @param x The amount of friction to apply, [0, 1].
       */
      setFrictionX(x: number): this;

      /**
       * Sets the vertical friction of this game object's physics body.
       * This can move a riding body vertically when it collides with this one on the horizontal axis.
       * @param y The amount of friction to apply, [0, 1].
       */
      setFrictionY(y: number): this;

      /**
       * Set the X and Y values of the gravitational pull to act upon this Arcade Physics Game Object. Values can be positive or negative. Larger values result in a stronger effect.
       *
       * If only one value is provided, this value will be used for both the X and Y axis.
       * @param x The gravitational force to be applied to the X-axis.
       * @param y The gravitational force to be applied to the Y-axis. If this is not specified, the X value will be used. Default x.
       */
      setGravity(x: number, y?: number): this;

      /**
       * Set the gravitational force to be applied to the X axis. Value can be positive or negative. Larger values result in a stronger effect.
       * @param x The gravitational force to be applied to the X-axis.
       */
      setGravityX(x: number): this;

      /**
       * Set the gravitational force to be applied to the Y axis. Value can be positive or negative. Larger values result in a stronger effect.
       * @param y The gravitational force to be applied to the Y-axis.
       */
      setGravityY(y: number): this;

      /**
       * Sets if this Body can be separated during collisions with other bodies.
       *
       * When a body is immovable it means it won't move at all, not even to separate it from collision
       * overlap. If you just wish to prevent a body from being knocked around by other bodies, see
       * the `setPushable` method instead.
       * @param value Sets if this body will be separated during collisions with other bodies. Default true.
       */
      setImmovable(value?: boolean): this;

      /**
       * Sets the mass of the physics body
       * @param value New value for the mass of the body.
       */
      setMass(value: number): this;

      /**
       * Sets if this Body can be pushed by another Body.
       *
       * A body that cannot be pushed will reflect back all of the velocity it is given to the
       * colliding body. If that body is also not pushable, then the separation will be split
       * between them evenly.
       *
       * If you want your body to never move or seperate at all, see the `setImmovable` method.
       * @param value Sets if this body can be pushed by collisions with another Body. Default true.
       */
      setPushable(value?: boolean): this;

      /**
       * Sets the body offset. This allows you to adjust the difference between the center of the body
       * and the x and y coordinates of the parent Game Object.
       * @param x The amount to offset the body from the parent Game Object along the x-axis.
       * @param y The amount to offset the body from the parent Game Object along the y-axis. Defaults to the value given for the x-axis. Default x.
       */
      setOffset(x: number, y?: number): this;

      /**
       * Sets the size of this physics body. Setting the size does not adjust the dimensions of the parent Game Object.
       * @param width The new width of the physics body, in pixels.
       * @param height The new height of the physics body, in pixels.
       * @param center Should the body be re-positioned so its center aligns with the parent Game Object? Default true.
       */
      setBodySize(width: number, height: number, center?: boolean): this;

      /**
       * Sets this physics body to use a circle for collision instead of a rectangle.
       * @param radius The radius of the physics body, in pixels.
       * @param offsetX The amount to offset the body from the parent Game Object along the x-axis.
       * @param offsetY The amount to offset the body from the parent Game Object along the y-axis.
       */
      setCircle(radius: number, offsetX?: number, offsetY?: number): this;

      /**
       * Sets the velocity of the Body.
       * @param x The horizontal velocity of the body. Positive values move the body to the right, while negative values move it to the left.
       * @param y The vertical velocity of the body. Positive values move the body down, while negative values move it up. Default x.
       */
      setVelocity(x: number, y?: number): this;

      /**
       * Sets the horizontal component of the body's velocity.
       *
       * Positive values move the body to the right, while negative values move it to the left.
       * @param x The new horizontal velocity.
       */
      setVelocityX(x: number): this;

      /**
       * Sets the vertical component of the body's velocity.
       *
       * Positive values move the body down, while negative values move it up.
       * @param y The new vertical velocity of the body.
       */
      setVelocityY(y: number): this;

      /**
       * Sets the maximum velocity of the body.
       * @param x The new maximum horizontal velocity.
       * @param y The new maximum vertical velocity. Default x.
       */
      setMaxVelocity(x: number, y?: number): this;

    }

    /**
     * A Dynamic Arcade Body.
     *
     * Its static counterpart is {@link Phaser.Physics.Arcade.StaticBody}.
     */
    class Body {
      /**
       *
       * @param world The Arcade Physics simulation this Body belongs to.
       * @param gameObject The Game Object this Body belongs to.
       */
      constructor(world: Phaser.Physics.Arcade.World, gameObject: Phaser.GameObjects.GameObject);

      /**
       * The Arcade Physics simulation this Body belongs to.
       */
      world: Phaser.Physics.Arcade.World;

      /**
       * The Game Object this Body belongs to.
       */
      gameObject: Phaser.GameObjects.GameObject;

      /**
       * Transformations applied to this Body.
       */
      transform: object;

      /**
       * Whether the Body is drawn to the debug display.
       */
      debugShowBody: boolean;

      /**
       * Whether the Body's velocity is drawn to the debug display.
       */
      debugShowVelocity: boolean;

      /**
       * The color of this Body on the debug display.
       */
      debugBodyColor: number;

      /**
       * Whether this Body is updated by the physics simulation.
       */
      enable: boolean;

      /**
       * Whether this Body is circular (true) or rectangular (false).
       */
      isCircle: boolean;

      /**
       * If this Body is circular, this is the unscaled radius of the Body, as set by setCircle(), in source pixels.
       * The true radius is equal to `halfWidth`.
       */
      radius: number;

      /**
       * The offset of this Body's position from its Game Object's position, in source pixels.
       */
      offset: Phaser.Math.Vector2;

      /**
       * The position of this Body within the simulation.
       */
      position: Phaser.Math.Vector2;

      /**
       * The position of this Body during the previous step.
       */
      prev: Phaser.Math.Vector2;

      /**
       * The position of this Body during the previous frame.
       */
      prevFrame: Phaser.Math.Vector2;

      /**
       * Whether this Body's `rotation` is affected by its angular acceleration and angular velocity.
       */
      allowRotation: boolean;

      /**
       * This body's rotation, in degrees, based on its angular acceleration and angular velocity.
       * The Body's rotation controls the `angle` of its Game Object.
       * It doesn't rotate the Body's own geometry, which is always an axis-aligned rectangle or a circle.
       */
      rotation: number;

      /**
       * The Body rotation, in degrees, during the previous step.
       */
      preRotation: number;

      /**
       * The width of the Body, in pixels.
       * If the Body is circular, this is also the diameter.
       * If you wish to change the width use the `Body.setSize` method.
       */
      readonly width: number;

      /**
       * The height of the Body, in pixels.
       * If the Body is circular, this is also the diameter.
       * If you wish to change the height use the `Body.setSize` method.
       */
      readonly height: number;

      /**
       * The unscaled width of the Body, in source pixels, as set by setSize().
       * The default is the width of the Body's Game Object's texture frame.
       */
      sourceWidth: number;

      /**
       * The unscaled height of the Body, in source pixels, as set by setSize().
       * The default is the height of the Body's Game Object's texture frame.
       */
      sourceHeight: number;

      /**
       * Half the Body's width, in pixels.
       */
      halfWidth: number;

      /**
       * Half the Body's height, in pixels.
       */
      halfHeight: number;

      /**
       * The center of the Body.
       * The midpoint of its `position` (top-left corner) and its bottom-right corner.
       */
      center: Phaser.Math.Vector2;

      /**
       * The Body's velocity, in pixels per second.
       */
      velocity: Phaser.Math.Vector2;

      /**
       * The Body's change in position (due to velocity) at the last step, in pixels.
       *
       * The size of this value depends on the simulation's step rate.
       */
      readonly newVelocity: Phaser.Math.Vector2;

      /**
       * The Body's absolute maximum change in position, in pixels per step.
       */
      deltaMax: Phaser.Math.Vector2;

      /**
       * The Body's change in velocity, in pixels per second squared.
       */
      acceleration: Phaser.Math.Vector2;

      /**
       * Whether this Body's velocity is affected by its `drag`.
       */
      allowDrag: boolean;

      /**
       * When `useDamping` is false (the default), this is absolute loss of velocity due to movement, in pixels per second squared.
       *
       * When `useDamping` is true, this is a damping multiplier between 0 and 1.
       * A value of 0 means the Body stops instantly.
       * A value of 0.01 mean the Body keeps 1% of its velocity per second, losing 99%.
       * A value of 0.1 means the Body keeps 10% of its velocity per second, losing 90%.
       * A value of 1 means the Body loses no velocity.
       * You can use very small values (e.g., 0.001) to stop the Body quickly.
       *
       * The x and y components are applied separately.
       *
       * Drag is applied only when `acceleration` is zero.
       */
      drag: Phaser.Math.Vector2;

      /**
       * Whether this Body's position is affected by gravity (local or world).
       */
      allowGravity: boolean;

      /**
       * Acceleration due to gravity (specific to this Body), in pixels per second squared.
       * Total gravity is the sum of this vector and the simulation's `gravity`.
       */
      gravity: Phaser.Math.Vector2;

      /**
       * Rebound following a collision, relative to 1.
       */
      bounce: Phaser.Math.Vector2;

      /**
       * Rebound following a collision with the world boundary, relative to 1.
       * If null, `bounce` is used instead.
       */
      worldBounce: Phaser.Math.Vector2;

      /**
       * The rectangle used for world boundary collisions.
       *
       * By default it is set to the world boundary rectangle. Or, if this Body was
       * created by a Physics Group, then whatever rectangle that Group defined.
       *
       * You can also change it by using the `Body.setBoundsRectangle` method.
       */
      customBoundsRectangle: Phaser.Geom.Rectangle;

      /**
       * Whether the simulation emits a `worldbounds` event when this Body collides with the world boundary (and `collideWorldBounds` is also true).
       */
      onWorldBounds: boolean;

      /**
       * Whether the simulation emits a `collide` event when this Body collides with another.
       */
      onCollide: boolean;

      /**
       * Whether the simulation emits an `overlap` event when this Body overlaps with another.
       */
      onOverlap: boolean;

      /**
       * The Body's absolute maximum velocity, in pixels per second.
       * The horizontal and vertical components are applied separately.
       */
      maxVelocity: Phaser.Math.Vector2;

      /**
       * The maximum speed this Body is allowed to reach, in pixels per second.
       *
       * If not negative it limits the scalar value of speed.
       *
       * Any negative value means no maximum is being applied (the default).
       */
      maxSpeed: number;

      /**
       * If this Body is `immovable` and in motion, `friction` is the proportion of this Body's motion received by the riding Body on each axis, relative to 1.
       * The horizontal component (x) is applied only when two colliding Bodies are separated vertically.
       * The vertical component (y) is applied only when two colliding Bodies are separated horizontally.
       * The default value (1, 0) moves the riding Body horizontally in equal proportion to this Body and vertically not at all.
       */
      friction: Phaser.Math.Vector2;

      /**
       * If this Body is using `drag` for deceleration this property controls how the drag is applied.
       * If set to `true` drag will use a damping effect rather than a linear approach. If you are
       * creating a game where the Body moves freely at any angle (i.e. like the way the ship moves in
       * the game Asteroids) then you will get a far smoother and more visually correct deceleration
       * by using damping, avoiding the axis-drift that is prone with linear deceleration.
       *
       * If you enable this property then you should use far smaller `drag` values than with linear, as
       * they are used as a multiplier on the velocity. Values such as 0.05 will give a nice slow
       * deceleration.
       */
      useDamping: boolean;

      /**
       * The rate of change of this Body's `rotation`, in degrees per second.
       */
      angularVelocity: number;

      /**
       * The Body's angular acceleration (change in angular velocity), in degrees per second squared.
       */
      angularAcceleration: number;

      /**
       * Loss of angular velocity due to angular movement, in degrees per second.
       *
       * Angular drag is applied only when angular acceleration is zero.
       */
      angularDrag: number;

      /**
       * The Body's maximum angular velocity, in degrees per second.
       */
      maxAngular: number;

      /**
       * The Body's inertia, relative to a default unit (1).
       * With `bounce`, this affects the exchange of momentum (velocities) during collisions.
       */
      mass: number;

      /**
       * The calculated angle of this Body's velocity vector, in radians, during the last step.
       */
      angle: number;

      /**
       * The calculated magnitude of the Body's velocity, in pixels per second, during the last step.
       */
      speed: number;

      /**
       * The direction of the Body's velocity, as calculated during the last step.
       * This is a numeric constant value (FACING_UP, FACING_DOWN, FACING_LEFT, FACING_RIGHT).
       * If the Body is moving on both axes, this describes motion on the vertical axis only.
       */
      facing: number;

      /**
       * Whether this Body can be moved by collisions with another Body.
       */
      immovable: boolean;

      /**
       * Sets if this Body can be pushed by another Body.
       *
       * A body that cannot be pushed will reflect back all of the velocity it is given to the
       * colliding body. If that body is also not pushable, then the separation will be split
       * between them evenly.
       *
       * If you want your body to never move or seperate at all, see the `setImmovable` method.
       *
       * By default, Dynamic Bodies are always pushable.
       */
      pushable: boolean;

      /**
       * Whether the Body's position and rotation are affected by its velocity, acceleration, drag, and gravity.
       */
      moves: boolean;

      /**
       * A flag disabling the default horizontal separation of colliding bodies.
       * Pass your own `collideCallback` to the collider.
       */
      customSeparateX: boolean;

      /**
       * A flag disabling the default vertical separation of colliding bodies.
       * Pass your own `collideCallback` to the collider.
       */
      customSeparateY: boolean;

      /**
       * The amount of horizontal overlap (before separation), if this Body is colliding with another.
       */
      overlapX: number;

      /**
       * The amount of vertical overlap (before separation), if this Body is colliding with another.
       */
      overlapY: number;

      /**
       * The amount of overlap (before separation), if this Body is circular and colliding with another circular body.
       */
      overlapR: number;

      /**
       * Whether this Body is overlapped with another and both are not moving, on at least one axis.
       */
      embedded: boolean;

      /**
       * Whether this Body interacts with the world boundary.
       */
      collideWorldBounds: boolean;

      /**
       * Whether this Body is checked for collisions and for which directions.
       * You can set `checkCollision.none = true` to disable collision checks.
       */
      checkCollision: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;

      /**
       * Whether this Body is colliding with a Body or Static Body and in which direction.
       * In a collision where both bodies have zero velocity, `embedded` will be set instead.
       */
      touching: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;

      /**
       * This Body's `touching` value during the previous step.
       */
      wasTouching: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;

      /**
       * Whether this Body is colliding with a Static Body, a tile, or the world boundary.
       * In a collision with a Static Body, if this Body has zero velocity then `embedded` will be set instead.
       */
      blocked: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;

      /**
       * Whether to automatically synchronize this Body's dimensions to the dimensions of its Game Object's visual bounds.
       */
      syncBounds: boolean;

      /**
       * The Body's physics type (dynamic or static).
       */
      readonly physicsType: number;

      /**
       * Updates the Body's `transform`, `width`, `height`, and `center` from its Game Object.
       * The Body's `position` isn't changed.
       */
      updateBounds(): void;

      /**
       * Updates the Body's `center` from its `position`, `width`, and `height`.
       */
      updateCenter(): void;

      /**
       * Updates the Body's `position`, `width`, `height`, and `center` from its Game Object and `offset`.
       *
       * You don't need to call this for Dynamic Bodies, as it happens automatically during the physics step.
       * But you could use it if you have modified the Body offset or Game Object transform and need to immediately
       * read the Body's new `position` or `center`.
       *
       * To resynchronize the Body with its Game Object, use `reset()` instead.
       */
      updateFromGameObject(): void;

      /**
       * Prepares the Body for a physics step by resetting the `wasTouching`, `touching` and `blocked` states.
       *
       * This method is only called if the physics world is going to run a step this frame.
       * @param clear Set the `wasTouching` values to their defaults. Default false.
       */
      resetFlags(clear?: boolean): void;

      /**
       * Syncs the position body position with the parent Game Object.
       *
       * This method is called every game frame, regardless if the world steps or not.
       * @param willStep Will this Body run an update as well?
       * @param delta The delta time, in seconds, elapsed since the last frame.
       */
      preUpdate(willStep: boolean, delta: number): void;

      /**
       * Performs a single physics step and updates the body velocity, angle, speed and other properties.
       *
       * This method can be called multiple times per game frame, depending on the physics step rate.
       *
       * The results are synced back to the Game Object in `postUpdate`.
       * @param delta The delta time, in seconds, elapsed since the last frame.
       */
      update(delta: number): void;

      /**
       * Feeds the Body results back into the parent Game Object.
       *
       * This method is called every game frame, regardless if the world steps or not.
       */
      postUpdate(): void;

      /**
       * Sets a custom collision boundary rectangle. Use if you want to have a custom
       * boundary instead of the world boundaries.
       * @param bounds The new boundary rectangle. Pass `null` to use the World bounds.
       */
      setBoundsRectangle(bounds?: Phaser.Geom.Rectangle): this;

      /**
       * Checks for collisions between this Body and the world boundary and separates them.
       */
      checkWorldBounds(): boolean;

      /**
       * Sets the offset of the Body's position from its Game Object's position.
       * The Body's `position` isn't changed until the next `preUpdate`.
       * @param x The horizontal offset, in source pixels.
       * @param y The vertical offset, in source pixels. Default x.
       */
      setOffset(x: number, y?: number): Phaser.Physics.Arcade.Body;

      /**
       * Sizes and positions this Body, as a rectangle.
       * Modifies the Body `offset` if `center` is true (the default).
       * Resets the width and height to match current frame, if no width and height provided and a frame is found.
       * @param width The width of the Body in pixels. Cannot be zero. If not given, and the parent Game Object has a frame, it will use the frame width.
       * @param height The height of the Body in pixels. Cannot be zero. If not given, and the parent Game Object has a frame, it will use the frame height.
       * @param center Modify the Body's `offset`, placing the Body's center on its Game Object's center. Only works if the Game Object has the `getCenter` method. Default true.
       */
      setSize(width?: number, height?: number, center?: boolean): Phaser.Physics.Arcade.Body;

      /**
       * Sizes and positions this Body, as a circle.
       * @param radius The radius of the Body, in source pixels.
       * @param offsetX The horizontal offset of the Body from its Game Object, in source pixels.
       * @param offsetY The vertical offset of the Body from its Game Object, in source pixels.
       */
      setCircle(radius: number, offsetX?: number, offsetY?: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets this Body's parent Game Object to the given coordinates and resets this Body at the new coordinates.
       * If the Body had any velocity or acceleration it is lost as a result of calling this.
       * @param x The horizontal position to place the Game Object.
       * @param y The vertical position to place the Game Object.
       */
      reset(x: number, y: number): void;

      /**
       * Sets acceleration, velocity, and speed to zero.
       */
      stop(): Phaser.Physics.Arcade.Body;

      /**
       * Copies the coordinates of this Body's edges into an object.
       * @param obj An object to copy the values into.
       */
      getBounds(obj: Phaser.Types.Physics.Arcade.ArcadeBodyBounds): Phaser.Types.Physics.Arcade.ArcadeBodyBounds;

      /**
       * Tests if the coordinates are within this Body.
       * @param x The horizontal coordinate.
       * @param y The vertical coordinate.
       */
      hitTest(x: number, y: number): boolean;

      /**
       * Whether this Body is touching a tile or the world boundary while moving down.
       */
      onFloor(): boolean;

      /**
       * Whether this Body is touching a tile or the world boundary while moving up.
       */
      onCeiling(): boolean;

      /**
       * Whether this Body is touching a tile or the world boundary while moving left or right.
       */
      onWall(): boolean;

      /**
       * The absolute (non-negative) change in this Body's horizontal position from the previous step.
       */
      deltaAbsX(): number;

      /**
       * The absolute (non-negative) change in this Body's vertical position from the previous step.
       */
      deltaAbsY(): number;

      /**
       * The change in this Body's horizontal position from the previous step.
       * This value is set during the Body's update phase.
       *
       * As a Body can update multiple times per step this may not hold the final
       * delta value for the Body. In this case, please see the `deltaXFinal` method.
       */
      deltaX(): number;

      /**
       * The change in this Body's vertical position from the previous step.
       * This value is set during the Body's update phase.
       *
       * As a Body can update multiple times per step this may not hold the final
       * delta value for the Body. In this case, please see the `deltaYFinal` method.
       */
      deltaY(): number;

      /**
       * The change in this Body's horizontal position from the previous game update.
       *
       * This value is set during the `postUpdate` phase and takes into account the
       * `deltaMax` and final position of the Body.
       *
       * Because this value is not calculated until `postUpdate`, you must listen for it
       * during a Scene `POST_UPDATE` or `RENDER` event, and not in `update`, as it will
       * not be calculated by that point. If you _do_ use these values in `update` they
       * will represent the delta from the _previous_ game frame.
       */
      deltaXFinal(): number;

      /**
       * The change in this Body's vertical position from the previous game update.
       *
       * This value is set during the `postUpdate` phase and takes into account the
       * `deltaMax` and final position of the Body.
       *
       * Because this value is not calculated until `postUpdate`, you must listen for it
       * during a Scene `POST_UPDATE` or `RENDER` event, and not in `update`, as it will
       * not be calculated by that point. If you _do_ use these values in `update` they
       * will represent the delta from the _previous_ game frame.
       */
      deltaYFinal(): number;

      /**
       * The change in this Body's rotation from the previous step, in degrees.
       */
      deltaZ(): number;

      /**
       * Disables this Body and marks it for deletion by the simulation.
       */
      destroy(): void;

      /**
       * Draws this Body and its velocity, if enabled.
       * @param graphic The Graphics object to draw on.
       */
      drawDebug(graphic: Phaser.GameObjects.Graphics): void;

      /**
       * Whether this Body will be drawn to the debug display.
       */
      willDrawDebug(): boolean;

      /**
       * Sets whether this Body collides with the world boundary.
       *
       * Optionally also sets the World Bounce and `onWorldBounds` values.
       * @param value `true` if the Body should collide with the world bounds, otherwise `false`. Default true.
       * @param bounceX If given this replaces the Body's `worldBounce.x` value.
       * @param bounceY If given this replaces the Body's `worldBounce.y` value.
       * @param onWorldBounds If given this replaces the Body's `onWorldBounds` value.
       */
      setCollideWorldBounds(value?: boolean, bounceX?: number, bounceY?: number, onWorldBounds?: boolean): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's velocity.
       * @param x The horizontal velocity, in pixels per second.
       * @param y The vertical velocity, in pixels per second. Default x.
       */
      setVelocity(x: number, y?: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's horizontal velocity.
       * @param value The velocity, in pixels per second.
       */
      setVelocityX(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's vertical velocity.
       * @param value The velocity, in pixels per second.
       */
      setVelocityY(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's maximum velocity.
       * @param x The horizontal velocity, in pixels per second.
       * @param y The vertical velocity, in pixels per second. Default x.
       */
      setMaxVelocity(x: number, y?: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's maximum horizontal velocity.
       * @param value The maximum horizontal velocity, in pixels per second.
       */
      setMaxVelocityX(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's maximum vertical velocity.
       * @param value The maximum vertical velocity, in pixels per second.
       */
      setMaxVelocityY(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the maximum speed the Body can move.
       * @param value The maximum speed value, in pixels per second. Set to a negative value to disable.
       */
      setMaxSpeed(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's bounce.
       * @param x The horizontal bounce, relative to 1.
       * @param y The vertical bounce, relative to 1.
       */
      setBounce(x: number, y: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's horizontal bounce.
       * @param value The bounce, relative to 1.
       */
      setBounceX(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's vertical bounce.
       * @param value The bounce, relative to 1.
       */
      setBounceY(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's acceleration.
       * @param x The horizontal component, in pixels per second squared.
       * @param y The vertical component, in pixels per second squared.
       */
      setAcceleration(x: number, y: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's horizontal acceleration.
       * @param value The acceleration, in pixels per second squared.
       */
      setAccelerationX(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's vertical acceleration.
       * @param value The acceleration, in pixels per second squared.
       */
      setAccelerationY(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Enables or disables drag.
       * @param value `true` to allow drag on this body, or `false` to disable it. Default true.
       */
      setAllowDrag(value?: boolean): Phaser.Physics.Arcade.Body;

      /**
       * Enables or disables gravity's effect on this Body.
       * @param value `true` to allow gravity on this body, or `false` to disable it. Default true.
       */
      setAllowGravity(value?: boolean): Phaser.Physics.Arcade.Body;

      /**
       * Enables or disables rotation.
       * @param value `true` to allow rotation on this body, or `false` to disable it. Default true.
       */
      setAllowRotation(value?: boolean): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's drag.
       * @param x The horizontal component, in pixels per second squared.
       * @param y The vertical component, in pixels per second squared.
       */
      setDrag(x: number, y: number): Phaser.Physics.Arcade.Body;

      /**
       * If this Body is using `drag` for deceleration this property controls how the drag is applied.
       * If set to `true` drag will use a damping effect rather than a linear approach. If you are
       * creating a game where the Body moves freely at any angle (i.e. like the way the ship moves in
       * the game Asteroids) then you will get a far smoother and more visually correct deceleration
       * by using damping, avoiding the axis-drift that is prone with linear deceleration.
       *
       * If you enable this property then you should use far smaller `drag` values than with linear, as
       * they are used as a multiplier on the velocity. Values such as 0.95 will give a nice slow
       * deceleration, where-as smaller values, such as 0.5 will stop an object almost immediately.
       * @param value `true` to use damping, or `false` to use drag.
       */
      setDamping(value: boolean): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's horizontal drag.
       * @param value The drag, in pixels per second squared.
       */
      setDragX(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's vertical drag.
       * @param value The drag, in pixels per second squared.
       */
      setDragY(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's gravity.
       * @param x The horizontal component, in pixels per second squared.
       * @param y The vertical component, in pixels per second squared.
       */
      setGravity(x: number, y: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's horizontal gravity.
       * @param value The gravity, in pixels per second squared.
       */
      setGravityX(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's vertical gravity.
       * @param value The gravity, in pixels per second squared.
       */
      setGravityY(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's friction.
       * @param x The horizontal component, relative to 1.
       * @param y The vertical component, relative to 1.
       */
      setFriction(x: number, y: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's horizontal friction.
       * @param value The friction value, relative to 1.
       */
      setFrictionX(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's vertical friction.
       * @param value The friction value, relative to 1.
       */
      setFrictionY(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's angular velocity.
       * @param value The velocity, in degrees per second.
       */
      setAngularVelocity(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's angular acceleration.
       * @param value The acceleration, in degrees per second squared.
       */
      setAngularAcceleration(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's angular drag.
       * @param value The drag, in degrees per second squared.
       */
      setAngularDrag(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's mass.
       * @param value The mass value, relative to 1.
       */
      setMass(value: number): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's `immovable` property.
       * @param value The value to assign to `immovable`. Default true.
       */
      setImmovable(value?: boolean): Phaser.Physics.Arcade.Body;

      /**
       * Sets the Body's `enable` property.
       * @param value The value to assign to `enable`. Default true.
       */
      setEnable(value?: boolean): Phaser.Physics.Arcade.Body;

      /**
       * This is an internal handler, called by the `ProcessX` function as part
       * of the collision step. You should almost never call this directly.
       * @param x The amount to add to the Body position.
       * @param vx The amount to add to the Body velocity.
       * @param left Set the blocked.left value?
       * @param right Set the blocked.right value?
       */
      processX(x: number, vx?: number, left?: boolean, right?: boolean): void;

      /**
       * This is an internal handler, called by the `ProcessY` function as part
       * of the collision step. You should almost never call this directly.
       * @param y The amount to add to the Body position.
       * @param vy The amount to add to the Body velocity.
       * @param up Set the blocked.up value?
       * @param down Set the blocked.down value?
       */
      processY(y: number, vy?: number, up?: boolean, down?: boolean): void;

      /**
       * The Bodys horizontal position (left edge).
       */
      x: number;

      /**
       * The Bodys vertical position (top edge).
       */
      y: number;

      /**
       * The left edge of the Body. Identical to x.
       */
      readonly left: number;

      /**
       * The right edge of the Body.
       */
      readonly right: number;

      /**
       * The top edge of the Body. Identical to y.
       */
      readonly top: number;

      /**
       * The bottom edge of this Body.
       */
      readonly bottom: number;

    }

    /**
     * An Arcade Physics Collider will automatically check for collision, or overlaps, between two objects
     * every step. If a collision, or overlap, occurs it will invoke the given callbacks.
     */
    class Collider {
      /**
       *
       * @param world The Arcade physics World that will manage the collisions.
       * @param overlapOnly Whether to check for collisions or overlap.
       * @param object1 The first object to check for collision.
       * @param object2 The second object to check for collision.
       * @param collideCallback The callback to invoke when the two objects collide.
       * @param processCallback The callback to invoke when the two objects collide. Must return a boolean.
       * @param callbackContext The scope in which to call the callbacks.
       */
      constructor(world: Phaser.Physics.Arcade.World, overlapOnly: boolean, object1: Phaser.Types.Physics.Arcade.ArcadeColliderType, object2: Phaser.Types.Physics.Arcade.ArcadeColliderType, collideCallback: ArcadePhysicsCallback, processCallback: ArcadePhysicsCallback, callbackContext: any);

      /**
       * The world in which the bodies will collide.
       */
      world: Phaser.Physics.Arcade.World;

      /**
       * The name of the collider (unused by Phaser).
       */
      name: string;

      /**
       * Whether the collider is active.
       */
      active: boolean;

      /**
       * Whether to check for collisions or overlaps.
       */
      overlapOnly: boolean;

      /**
       * The first object to check for collision.
       */
      object1: Phaser.Types.Physics.Arcade.ArcadeColliderType;

      /**
       * The second object to check for collision.
       */
      object2: Phaser.Types.Physics.Arcade.ArcadeColliderType;

      /**
       * The callback to invoke when the two objects collide.
       */
      collideCallback: ArcadePhysicsCallback;

      /**
       * If a processCallback exists it must return true or collision checking will be skipped.
       */
      processCallback: ArcadePhysicsCallback;

      /**
       * The context the collideCallback and processCallback will run in.
       */
      callbackContext: object;

      /**
       * A name for the Collider.
       *
       * Phaser does not use this value, it's for your own reference.
       * @param name The name to assign to the Collider.
       */
      setName(name: string): Phaser.Physics.Arcade.Collider;

      /**
       * Called by World as part of its step processing, initial operation of collision checking.
       */
      update(): void;

      /**
       * Removes Collider from World and disposes of its resources.
       */
      destroy(): void;

    }

    namespace Components {
      /**
       * Provides methods used for setting the acceleration properties of an Arcade Physics Body.
       */
      interface Acceleration {
        /**
         * Sets the body's horizontal and vertical acceleration. If the vertical acceleration value is not provided, the vertical acceleration is set to the same value as the horizontal acceleration.
         * @param x The horizontal acceleration
         * @param y The vertical acceleration Default x.
         */
        setAcceleration(x: number, y?: number): this;
        /**
         * Sets the body's horizontal acceleration.
         * @param value The horizontal acceleration
         */
        setAccelerationX(value: number): this;
        /**
         * Sets the body's vertical acceleration.
         * @param value The vertical acceleration
         */
        setAccelerationY(value: number): this;
      }

      /**
       * Provides methods used for setting the angular acceleration properties of an Arcade Physics Body.
       */
      interface Angular {
        /**
         * Sets the angular velocity of the body.
         *
         * In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
         * However, they can have angular motion, which is passed on to the Game Object bound to the body,
         * causing them to visually rotate, even though the body remains axis-aligned.
         * @param value The amount of angular velocity.
         */
        setAngularVelocity(value: number): this;
        /**
         * Sets the angular acceleration of the body.
         *
         * In Arcade Physics, bodies cannot rotate. They are always axis-aligned.
         * However, they can have angular motion, which is passed on to the Game Object bound to the body,
         * causing them to visually rotate, even though the body remains axis-aligned.
         * @param value The amount of angular acceleration.
         */
        setAngularAcceleration(value: number): this;
        /**
         * Sets the angular drag of the body. Drag is applied to the current velocity, providing a form of deceleration.
         * @param value The amount of drag.
         */
        setAngularDrag(value: number): this;
      }

      /**
       * Provides methods used for setting the bounce properties of an Arcade Physics Body.
       */
      interface Bounce {
        /**
         * Sets the bounce values of this body.
         *
         * Bounce is the amount of restitution, or elasticity, the body has when it collides with another object.
         * A value of 1 means that it will retain its full velocity after the rebound. A value of 0 means it will not rebound at all.
         * @param x The amount of horizontal bounce to apply on collision. A float, typically between 0 and 1.
         * @param y The amount of vertical bounce to apply on collision. A float, typically between 0 and 1. Default x.
         */
        setBounce(x: number, y?: number): this;
        /**
         * Sets the horizontal bounce value for this body.
         * @param value The amount of horizontal bounce to apply on collision. A float, typically between 0 and 1.
         */
        setBounceX(value: number): this;
        /**
         * Sets the vertical bounce value for this body.
         * @param value The amount of vertical bounce to apply on collision. A float, typically between 0 and 1.
         */
        setBounceY(value: number): this;
        /**
         * Sets whether this Body collides with the world boundary.
         *
         * Optionally also sets the World Bounce values. If the `Body.worldBounce` is null, it's set to a new Phaser.Math.Vector2 first.
         * @param value `true` if this body should collide with the world bounds, otherwise `false`. Default true.
         * @param bounceX If given this will be replace the `worldBounce.x` value.
         * @param bounceY If given this will be replace the `worldBounce.y` value.
         */
        setCollideWorldBounds(value?: boolean, bounceX?: number, bounceY?: number): this;
      }

      /**
       * Provides methods used for setting the debug properties of an Arcade Physics Body.
       */
      interface Debug {
        /**
         * Sets the debug values of this body.
         *
         * Bodies will only draw their debug if debug has been enabled for Arcade Physics as a whole.
         * Note that there is a performance cost in drawing debug displays. It should never be used in production.
         * @param showBody Set to `true` to have this body render its outline to the debug display.
         * @param showVelocity Set to `true` to have this body render a velocity marker to the debug display.
         * @param bodyColor The color of the body outline when rendered to the debug display.
         */
        setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): this;
        /**
         * Sets the color of the body outline when it renders to the debug display.
         * @param value The color of the body outline when rendered to the debug display.
         */
        setDebugBodyColor(value: number): this;
        /**
         * Set to `true` to have this body render its outline to the debug display.
         */
        debugShowBody: boolean;
        /**
         * Set to `true` to have this body render a velocity marker to the debug display.
         */
        debugShowVelocity: boolean;
        /**
         * The color of the body outline when it renders to the debug display.
         */
        debugBodyColor: number;
      }

      /**
       * Provides methods used for setting the drag properties of an Arcade Physics Body.
       */
      interface Drag {
        /**
         * Sets the body's horizontal and vertical drag. If the vertical drag value is not provided, the vertical drag is set to the same value as the horizontal drag.
         *
         * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
         * It is the absolute loss of velocity due to movement, in pixels per second squared.
         * The x and y components are applied separately.
         *
         * When `useDamping` is true, this is 1 minus the damping factor.
         * A value of 1 means the Body loses no velocity.
         * A value of 0.95 means the Body loses 5% of its velocity per step.
         * A value of 0.5 means the Body loses 50% of its velocity per step.
         *
         * Drag is applied only when `acceleration` is zero.
         * @param x The amount of horizontal drag to apply.
         * @param y The amount of vertical drag to apply. Default x.
         */
        setDrag(x: number, y?: number): this;
        /**
         * Sets the body's horizontal drag.
         *
         * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
         * It is the absolute loss of velocity due to movement, in pixels per second squared.
         * The x and y components are applied separately.
         *
         * When `useDamping` is true, this is 1 minus the damping factor.
         * A value of 1 means the Body loses no velocity.
         * A value of 0.95 means the Body loses 5% of its velocity per step.
         * A value of 0.5 means the Body loses 50% of its velocity per step.
         *
         * Drag is applied only when `acceleration` is zero.
         * @param value The amount of horizontal drag to apply.
         */
        setDragX(value: number): this;
        /**
         * Sets the body's vertical drag.
         *
         * Drag can be considered as a form of deceleration that will return the velocity of a body back to zero over time.
         * It is the absolute loss of velocity due to movement, in pixels per second squared.
         * The x and y components are applied separately.
         *
         * When `useDamping` is true, this is 1 minus the damping factor.
         * A value of 1 means the Body loses no velocity.
         * A value of 0.95 means the Body loses 5% of its velocity per step.
         * A value of 0.5 means the Body loses 50% of its velocity per step.
         *
         * Drag is applied only when `acceleration` is zero.
         * @param value The amount of vertical drag to apply.
         */
        setDragY(value: number): this;
        /**
         * If this Body is using `drag` for deceleration this function controls how the drag is applied.
         * If set to `true` drag will use a damping effect rather than a linear approach. If you are
         * creating a game where the Body moves freely at any angle (i.e. like the way the ship moves in
         * the game Asteroids) then you will get a far smoother and more visually correct deceleration
         * by using damping, avoiding the axis-drift that is prone with linear deceleration.
         *
         * If you enable this property then you should use far smaller `drag` values than with linear, as
         * they are used as a multiplier on the velocity. Values such as 0.95 will give a nice slow
         * deceleration, where-as smaller values, such as 0.5 will stop an object almost immediately.
         * @param value `true` to use damping for deceleration, or `false` to use linear deceleration.
         */
        setDamping(value: boolean): this;
      }

      /**
       * Provides methods used for setting the enable properties of an Arcade Physics Body.
       */
      interface Enable {
        /**
         * Enables this Game Object's Body.
         * @param reset Also reset the Body and place it at (x, y).
         * @param x The horizontal position to place the Game Object and Body.
         * @param y The horizontal position to place the Game Object and Body.
         * @param enableGameObject Also activate this Game Object.
         * @param showGameObject Also show this Game Object.
         */
        enableBody(reset: boolean, x: number, y: number, enableGameObject: boolean, showGameObject: boolean): this;
        /**
         * Stops and disables this Game Object's Body.
         * @param disableGameObject Also deactivate this Game Object. Default false.
         * @param hideGameObject Also hide this Game Object. Default false.
         */
        disableBody(disableGameObject?: boolean, hideGameObject?: boolean): this;
        /**
         * Syncs the Body's position and size with its parent Game Object.
         * You don't need to call this for Dynamic Bodies, as it happens automatically.
         * But for Static bodies it's a useful way of modifying the position of a Static Body
         * in the Physics World, based on its Game Object.
         */
        refreshBody(): this;
      }

      /**
       * Methods for setting the friction of an Arcade Physics Body.
       *
       * In Arcade Physics, friction is a special case of motion transfer from an "immovable" body to a riding body.
       */
      interface Friction {
        /**
         * Sets the friction of this game object's physics body.
         * In Arcade Physics, friction is a special case of motion transfer from an "immovable" body to a riding body.
         * @param x The amount of horizontal friction to apply, [0, 1].
         * @param y The amount of vertical friction to apply, [0, 1]. Default x.
         */
        setFriction(x: number, y?: number): this;
        /**
         * Sets the horizontal friction of this game object's physics body.
         * This can move a riding body horizontally when it collides with this one on the vertical axis.
         * @param x The amount of friction to apply, [0, 1].
         */
        setFrictionX(x: number): this;
        /**
         * Sets the vertical friction of this game object's physics body.
         * This can move a riding body vertically when it collides with this one on the horizontal axis.
         * @param y The amount of friction to apply, [0, 1].
         */
        setFrictionY(y: number): this;
      }

      /**
       * Provides methods for setting the gravity properties of an Arcade Physics Game Object.
       * Should be applied as a mixin and not used directly.
       */
      interface Gravity {
        /**
         * Set the X and Y values of the gravitational pull to act upon this Arcade Physics Game Object. Values can be positive or negative. Larger values result in a stronger effect.
         *
         * If only one value is provided, this value will be used for both the X and Y axis.
         * @param x The gravitational force to be applied to the X-axis.
         * @param y The gravitational force to be applied to the Y-axis. If this is not specified, the X value will be used. Default x.
         */
        setGravity(x: number, y?: number): this;
        /**
         * Set the gravitational force to be applied to the X axis. Value can be positive or negative. Larger values result in a stronger effect.
         * @param x The gravitational force to be applied to the X-axis.
         */
        setGravityX(x: number): this;
        /**
         * Set the gravitational force to be applied to the Y axis. Value can be positive or negative. Larger values result in a stronger effect.
         * @param y The gravitational force to be applied to the Y-axis.
         */
        setGravityY(y: number): this;
      }

      /**
       * Provides methods used for setting the immovable properties of an Arcade Physics Body.
       */
      interface Immovable {
        /**
         * Sets if this Body can be separated during collisions with other bodies.
         *
         * When a body is immovable it means it won't move at all, not even to separate it from collision
         * overlap. If you just wish to prevent a body from being knocked around by other bodies, see
         * the `setPushable` method instead.
         * @param value Sets if this body will be separated during collisions with other bodies. Default true.
         */
        setImmovable(value?: boolean): this;
      }

      /**
       * Provides methods used for setting the mass properties of an Arcade Physics Body.
       */
      interface Mass {
        /**
         * Sets the mass of the physics body
         * @param value New value for the mass of the body.
         */
        setMass(value: number): this;
      }

      /**
       * This method will search the given circular area and return an array of all physics bodies that
       * overlap with it. It can return either Dynamic, Static bodies or a mixture of both.
       *
       * A body only has to intersect with the search area to be considered, it doesn't have to be fully
       * contained within it.
       *
       * If Arcade Physics is set to use the RTree (which it is by default) then the search is rather fast,
       * otherwise the search is O(N) for Dynamic Bodies.
       */
      interface OverlapCirc {
      }

      /**
       * This method will search the given rectangular area and return an array of all physics bodies that
       * overlap with it. It can return either Dynamic, Static bodies or a mixture of both.
       *
       * A body only has to intersect with the search area to be considered, it doesn't have to be fully
       * contained within it.
       *
       * If Arcade Physics is set to use the RTree (which it is by default) then the search for is extremely fast,
       * otherwise the search is O(N) for Dynamic Bodies.
       */
      interface OverlapRect {
      }

      /**
       * Provides methods used for setting the pushable property of an Arcade Physics Body.
       */
      interface Pushable {
        /**
         * Sets if this Body can be pushed by another Body.
         *
         * A body that cannot be pushed will reflect back all of the velocity it is given to the
         * colliding body. If that body is also not pushable, then the separation will be split
         * between them evenly.
         *
         * If you want your body to never move or seperate at all, see the `setImmovable` method.
         * @param value Sets if this body can be pushed by collisions with another Body. Default true.
         */
        setPushable(value?: boolean): this;
      }

      /**
       * Provides methods for setting the size of an Arcade Physics Game Object.
       * Should be applied as a mixin and not used directly.
       */
      interface Size {
        /**
         * Sets the body offset. This allows you to adjust the difference between the center of the body
         * and the x and y coordinates of the parent Game Object.
         * @param x The amount to offset the body from the parent Game Object along the x-axis.
         * @param y The amount to offset the body from the parent Game Object along the y-axis. Defaults to the value given for the x-axis. Default x.
         */
        setOffset(x: number, y?: number): this;
        /**
         * **DEPRECATED**: Please use `setBodySize` instead.
         *
         * Sets the size of this physics body. Setting the size does not adjust the dimensions of the parent Game Object.
         * @param width The new width of the physics body, in pixels.
         * @param height The new height of the physics body, in pixels.
         * @param center Should the body be re-positioned so its center aligns with the parent Game Object? Default true.
         */
        setSize(width: number, height: number, center?: boolean): this;
        /**
         * Sets the size of this physics body. Setting the size does not adjust the dimensions of the parent Game Object.
         * @param width The new width of the physics body, in pixels.
         * @param height The new height of the physics body, in pixels.
         * @param center Should the body be re-positioned so its center aligns with the parent Game Object? Default true.
         */
        setBodySize(width: number, height: number, center?: boolean): this;
        /**
         * Sets this physics body to use a circle for collision instead of a rectangle.
         * @param radius The radius of the physics body, in pixels.
         * @param offsetX The amount to offset the body from the parent Game Object along the x-axis.
         * @param offsetY The amount to offset the body from the parent Game Object along the y-axis.
         */
        setCircle(radius: number, offsetX?: number, offsetY?: number): this;
      }

      /**
       * Provides methods for modifying the velocity of an Arcade Physics body.
       *
       * Should be applied as a mixin and not used directly.
       */
      interface Velocity {
        /**
         * Sets the velocity of the Body.
         * @param x The horizontal velocity of the body. Positive values move the body to the right, while negative values move it to the left.
         * @param y The vertical velocity of the body. Positive values move the body down, while negative values move it up. Default x.
         */
        setVelocity(x: number, y?: number): this;
        /**
         * Sets the horizontal component of the body's velocity.
         *
         * Positive values move the body to the right, while negative values move it to the left.
         * @param x The new horizontal velocity.
         */
        setVelocityX(x: number): this;
        /**
         * Sets the vertical component of the body's velocity.
         *
         * Positive values move the body down, while negative values move it up.
         * @param y The new vertical velocity of the body.
         */
        setVelocityY(y: number): this;
        /**
         * Sets the maximum velocity of the body.
         * @param x The new maximum horizontal velocity.
         * @param y The new maximum vertical velocity. Default x.
         */
        setMaxVelocity(x: number, y?: number): this;
      }

    }

    /**
     * Dynamic Body.
     */
    var DYNAMIC_BODY: number;

    /**
     * Static Body.
     */
    var STATIC_BODY: number;

    /**
     * Arcade Physics Group containing Dynamic Bodies.
     */
    var GROUP: number;

    /**
     * A Tilemap Layer.
     */
    var TILEMAPLAYER: number;

    /**
     * Facing no direction (initial value).
     */
    var FACING_NONE: number;

    /**
     * Facing up.
     */
    var FACING_UP: number;

    /**
     * Facing down.
     */
    var FACING_DOWN: number;

    /**
     * Facing left.
     */
    var FACING_LEFT: number;

    /**
     * Facing right.
     */
    var FACING_RIGHT: number;

    namespace Events {
      /**
       * The Arcade Physics World Collide Event.
       *
       * This event is dispatched by an Arcade Physics World instance if two bodies collide _and_ at least
       * one of them has their [onCollide]{@link Phaser.Physics.Arcade.Body#onCollide} property set to `true`.
       *
       * It provides an alternative means to handling collide events rather than using the callback approach.
       *
       * Listen to it from a Scene using: `this.physics.world.on('collide', listener)`.
       *
       * Please note that 'collide' and 'overlap' are two different things in Arcade Physics.
       */
      const COLLIDE: any;

      /**
       * The Arcade Physics World Overlap Event.
       *
       * This event is dispatched by an Arcade Physics World instance if two bodies overlap _and_ at least
       * one of them has their [onOverlap]{@link Phaser.Physics.Arcade.Body#onOverlap} property set to `true`.
       *
       * It provides an alternative means to handling overlap events rather than using the callback approach.
       *
       * Listen to it from a Scene using: `this.physics.world.on('overlap', listener)`.
       *
       * Please note that 'collide' and 'overlap' are two different things in Arcade Physics.
       */
      const OVERLAP: any;

      /**
       * The Arcade Physics World Pause Event.
       *
       * This event is dispatched by an Arcade Physics World instance when it is paused.
       *
       * Listen to it from a Scene using: `this.physics.world.on('pause', listener)`.
       */
      const PAUSE: any;

      /**
       * The Arcade Physics World Resume Event.
       *
       * This event is dispatched by an Arcade Physics World instance when it resumes from a paused state.
       *
       * Listen to it from a Scene using: `this.physics.world.on('resume', listener)`.
       */
      const RESUME: any;

      /**
       * The Arcade Physics Tile Collide Event.
       *
       * This event is dispatched by an Arcade Physics World instance if a body collides with a Tile _and_
       * has its [onCollide]{@link Phaser.Physics.Arcade.Body#onCollide} property set to `true`.
       *
       * It provides an alternative means to handling collide events rather than using the callback approach.
       *
       * Listen to it from a Scene using: `this.physics.world.on('tilecollide', listener)`.
       *
       * Please note that 'collide' and 'overlap' are two different things in Arcade Physics.
       */
      const TILE_COLLIDE: any;

      /**
       * The Arcade Physics Tile Overlap Event.
       *
       * This event is dispatched by an Arcade Physics World instance if a body overlaps with a Tile _and_
       * has its [onOverlap]{@link Phaser.Physics.Arcade.Body#onOverlap} property set to `true`.
       *
       * It provides an alternative means to handling overlap events rather than using the callback approach.
       *
       * Listen to it from a Scene using: `this.physics.world.on('tileoverlap', listener)`.
       *
       * Please note that 'collide' and 'overlap' are two different things in Arcade Physics.
       */
      const TILE_OVERLAP: any;

      /**
       * The Arcade Physics World Bounds Event.
       *
       * This event is dispatched by an Arcade Physics World instance if a body makes contact with the world bounds _and_
       * it has its [onWorldBounds]{@link Phaser.Physics.Arcade.Body#onWorldBounds} property set to `true`.
       *
       * It provides an alternative means to handling collide events rather than using the callback approach.
       *
       * Listen to it from a Scene using: `this.physics.world.on('worldbounds', listener)`.
       */
      const WORLD_BOUNDS: any;

      /**
       * The Arcade Physics World Step Event.
       *
       * This event is dispatched by an Arcade Physics World instance whenever a physics step is run.
       * It is emitted _after_ the bodies and colliders have been updated.
       *
       * In high framerate settings this can be multiple times per game frame.
       *
       * Listen to it from a Scene using: `this.physics.world.on('worldstep', listener)`.
       */
      const WORLD_STEP: any;

    }

    /**
     * The Arcade Physics Factory allows you to easily create Arcade Physics enabled Game Objects.
     * Objects that are created by this Factory are automatically added to the physics world.
     */
    class Factory {
      /**
       *
       * @param world The Arcade Physics World instance.
       */
      constructor(world: Phaser.Physics.Arcade.World);

      /**
       * A reference to the Arcade Physics World.
       */
      world: Phaser.Physics.Arcade.World;

      /**
       * A reference to the Scene this Arcade Physics instance belongs to.
       */
      scene: Phaser.Scene;

      /**
       * A reference to the Scene.Systems this Arcade Physics instance belongs to.
       */
      sys: Phaser.Scenes.Systems;

      /**
       * Creates a new Arcade Physics Collider object.
       * @param object1 The first object to check for collision.
       * @param object2 The second object to check for collision.
       * @param collideCallback The callback to invoke when the two objects collide.
       * @param processCallback The callback to invoke when the two objects collide. Must return a boolean.
       * @param callbackContext The scope in which to call the callbacks.
       */
      collider(object1: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], object2: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): Phaser.Physics.Arcade.Collider;

      /**
       * Creates a new Arcade Physics Collider Overlap object.
       * @param object1 The first object to check for overlap.
       * @param object2 The second object to check for overlap.
       * @param collideCallback The callback to invoke when the two objects collide.
       * @param processCallback The callback to invoke when the two objects collide. Must return a boolean.
       * @param callbackContext The scope in which to call the callbacks.
       */
      overlap(object1: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], object2: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): Phaser.Physics.Arcade.Collider;

      /**
       * Adds an Arcade Physics Body to the given Game Object.
       * @param gameObject A Game Object.
       * @param isStatic Create a Static body (true) or Dynamic body (false). Default false.
       */
      existing<G extends Phaser.GameObjects.GameObject>(gameObject: G, isStatic?: boolean): G;

      /**
       * Creates a new Arcade Image object with a Static body.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param texture The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with.
       */
      staticImage(x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number): Phaser.Types.Physics.Arcade.ImageWithStaticBody;

      /**
       * Creates a new Arcade Image object with a Dynamic body.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param texture The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with.
       */
      image(x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number): Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

      /**
       * Creates a new Arcade Sprite object with a Static body.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param texture The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with.
       */
      staticSprite(x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number): Phaser.Types.Physics.Arcade.SpriteWithStaticBody;

      /**
       * Creates a new Arcade Sprite object with a Dynamic body.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param key The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with.
       */
      sprite(x: number, y: number, key: string, frame?: string | number): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

      /**
       * Creates a Static Physics Group object.
       * All Game Objects created by this Group will automatically be static Arcade Physics objects.
       * @param children Game Objects to add to this group; or the `config` argument.
       * @param config Settings for this group.
       */
      staticGroup(children?: Phaser.GameObjects.GameObject[] | Phaser.Types.GameObjects.Group.GroupConfig | Phaser.Types.GameObjects.Group.GroupCreateConfig, config?: Phaser.Types.GameObjects.Group.GroupConfig | Phaser.Types.GameObjects.Group.GroupCreateConfig): Phaser.Physics.Arcade.StaticGroup;

      /**
       * Creates a Physics Group object.
       * All Game Objects created by this Group will automatically be dynamic Arcade Physics objects.
       * @param children Game Objects to add to this group; or the `config` argument.
       * @param config Settings for this group.
       */
      group(children?: Phaser.GameObjects.GameObject[] | Phaser.Types.Physics.Arcade.PhysicsGroupConfig | Phaser.Types.GameObjects.Group.GroupCreateConfig, config?: Phaser.Types.Physics.Arcade.PhysicsGroupConfig | Phaser.Types.GameObjects.Group.GroupCreateConfig): Phaser.Physics.Arcade.Group;

      /**
       * Destroys this Factory.
       */
      destroy(): void;

    }

    /**
     * Calculates and returns the horizontal overlap between two arcade physics bodies and sets their properties
     * accordingly, including: `touching.left`, `touching.right`, `touching.none` and `overlapX'.
     * @param body1 The first Body to separate.
     * @param body2 The second Body to separate.
     * @param overlapOnly Is this an overlap only check, or part of separation?
     * @param bias A value added to the delta values during collision checks. Increase it to prevent sprite tunneling(sprites passing through another instead of colliding).
     */
    function GetOverlapX(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): number;

    /**
     * Calculates and returns the vertical overlap between two arcade physics bodies and sets their properties
     * accordingly, including: `touching.up`, `touching.down`, `touching.none` and `overlapY'.
     * @param body1 The first Body to separate.
     * @param body2 The second Body to separate.
     * @param overlapOnly Is this an overlap only check, or part of separation?
     * @param bias A value added to the delta values during collision checks. Increase it to prevent sprite tunneling(sprites passing through another instead of colliding).
     */
    function GetOverlapY(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): number;

    /**
     * An Arcade Physics Group object.
     *
     * The primary use of a Physics Group is a way to collect together physics enable objects
     * that share the same intrinsic structure into a single pool. They can they be easily
     * compared against other Groups, or Game Objects.
     *
     * All Game Objects created by, or added to this Group will automatically be given **dynamic**
     * Arcade Physics bodies (if they have no body already) and the bodies will receive the
     * Groups {@link Phaser.Physics.Arcade.Group#defaults default values}.
     *
     * You should not pass objects into this Group that should not receive a body. For example,
     * do not add basic Geometry or Tilemap Layers into a Group, as they will not behave in the
     * way you may expect. Groups should all ideally have objects of the same type in them.
     *
     * If you wish to create a Group filled with Static Bodies, please see {@link Phaser.Physics.Arcade.StaticGroup}.
     */
    class Group extends Phaser.GameObjects.Group {
      /**
       *
       * @param world The physics simulation.
       * @param scene The scene this group belongs to.
       * @param children Game Objects to add to this group; or the `config` argument.
       * @param config Settings for this group.
       */
      constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene, children?: Phaser.GameObjects.GameObject[] | Phaser.Types.Physics.Arcade.PhysicsGroupConfig | Phaser.Types.GameObjects.Group.GroupCreateConfig, config?: Phaser.Types.Physics.Arcade.PhysicsGroupConfig | Phaser.Types.GameObjects.Group.GroupCreateConfig);

      /**
       * The physics simulation.
       */
      world: Phaser.Physics.Arcade.World;

      /**
       * The class to create new Group members from.
       *
       * This should be either `Phaser.Physics.Arcade.Image`, `Phaser.Physics.Arcade.Sprite`, or a class extending one of those.
       */
      classType: Function;

      /**
       * The physics type of the Group's members.
       */
      physicsType: number;

      /**
       * Default physics properties applied to Game Objects added to the Group or created by the Group. Derived from the `config` argument.
       *
       * You can remove the default values by setting this property to `{}`.
       */
      defaults: Phaser.Types.Physics.Arcade.PhysicsGroupDefaults;

      /**
       * A textual representation of this Game Object.
       * Used internally by Phaser but is available for your own custom classes to populate.
       */
      type: string;

      /**
       * Enables a Game Object's Body and assigns `defaults`. Called when a Group member is added or created.
       * @param child The Game Object being added.
       */
      createCallbackHandler(child: Phaser.GameObjects.GameObject): void;

      /**
       * Disables a Game Object's Body. Called when a Group member is removed.
       * @param child The Game Object being removed.
       */
      removeCallbackHandler(child: Phaser.GameObjects.GameObject): void;

      /**
       * Sets the velocity of each Group member.
       * @param x The horizontal velocity.
       * @param y The vertical velocity.
       * @param step The velocity increment. When set, the first member receives velocity (x, y), the second (x + step, y + step), and so on. Default 0.
       */
      setVelocity(x: number, y: number, step?: number): Phaser.Physics.Arcade.Group;

      /**
       * Sets the horizontal velocity of each Group member.
       * @param value The velocity value.
       * @param step The velocity increment. When set, the first member receives velocity (x), the second (x + step), and so on. Default 0.
       */
      setVelocityX(value: number, step?: number): Phaser.Physics.Arcade.Group;

      /**
       * Sets the vertical velocity of each Group member.
       * @param value The velocity value.
       * @param step The velocity increment. When set, the first member receives velocity (y), the second (y + step), and so on. Default 0.
       */
      setVelocityY(value: number, step?: number): Phaser.Physics.Arcade.Group;

    }

    /**
     * Separates two overlapping bodies on the X-axis (horizontally).
     *
     * Separation involves moving two overlapping bodies so they don't overlap anymore and adjusting their velocities based on their mass. This is a core part of collision detection.
     *
     * The bodies won't be separated if there is no horizontal overlap between them, if they are static, or if either one uses custom logic for its separation.
     * @param body1 The first Body to separate.
     * @param body2 The second Body to separate.
     * @param overlapOnly If `true`, the bodies will only have their overlap data set and no separation will take place.
     * @param bias A value to add to the delta value during overlap checking. Used to prevent sprite tunneling.
     */
    function SeparateX(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): boolean;

    /**
     * Separates two overlapping bodies on the Y-axis (vertically).
     *
     * Separation involves moving two overlapping bodies so they don't overlap anymore and adjusting their velocities based on their mass. This is a core part of collision detection.
     *
     * The bodies won't be separated if there is no vertical overlap between them, if they are static, or if either one uses custom logic for its separation.
     * @param body1 The first Body to separate.
     * @param body2 The second Body to separate.
     * @param overlapOnly If `true`, the bodies will only have their overlap data set and no separation will take place.
     * @param bias A value to add to the delta value during overlap checking. Used to prevent sprite tunneling.
     */
    function SeparateY(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly: boolean, bias: number): boolean;

    /**
     * A Static Arcade Physics Body.
     *
     * A Static Body never moves, and isn't automatically synchronized with its parent Game Object.
     * That means if you make any change to the parent's origin, position, or scale after creating or adding the body, you'll need to update the Static Body manually.
     *
     * A Static Body can collide with other Bodies, but is never moved by collisions.
     *
     * Its dynamic counterpart is {@link Phaser.Physics.Arcade.Body}.
     */
    class StaticBody {
      /**
       *
       * @param world The Arcade Physics simulation this Static Body belongs to.
       * @param gameObject The Game Object this Static Body belongs to.
       */
      constructor(world: Phaser.Physics.Arcade.World, gameObject: Phaser.GameObjects.GameObject);

      /**
       * The Arcade Physics simulation this Static Body belongs to.
       */
      world: Phaser.Physics.Arcade.World;

      /**
       * The Game Object this Static Body belongs to.
       */
      gameObject: Phaser.GameObjects.GameObject;

      /**
       * Whether the Static Body's boundary is drawn to the debug display.
       */
      debugShowBody: boolean;

      /**
       * The color of this Static Body on the debug display.
       */
      debugBodyColor: number;

      /**
       * Whether this Static Body is updated by the physics simulation.
       */
      enable: boolean;

      /**
       * Whether this Static Body's boundary is circular (`true`) or rectangular (`false`).
       */
      isCircle: boolean;

      /**
       * If this Static Body is circular, this is the radius of the boundary, as set by {@link Phaser.Physics.Arcade.StaticBody#setCircle}, in pixels.
       * Equal to `halfWidth`.
       */
      radius: number;

      /**
       * The offset set by {@link Phaser.Physics.Arcade.StaticBody#setCircle} or {@link Phaser.Physics.Arcade.StaticBody#setSize}.
       *
       * This doesn't affect the Static Body's position, because a Static Body does not follow its Game Object.
       */
      readonly offset: Phaser.Math.Vector2;

      /**
       * The position of this Static Body within the simulation.
       */
      position: Phaser.Math.Vector2;

      /**
       * The width of the Static Body's boundary, in pixels.
       * If the Static Body is circular, this is also the Static Body's diameter.
       */
      width: number;

      /**
       * The height of the Static Body's boundary, in pixels.
       * If the Static Body is circular, this is also the Static Body's diameter.
       */
      height: number;

      /**
       * Half the Static Body's width, in pixels.
       * If the Static Body is circular, this is also the Static Body's radius.
       */
      halfWidth: number;

      /**
       * Half the Static Body's height, in pixels.
       * If the Static Body is circular, this is also the Static Body's radius.
       */
      halfHeight: number;

      /**
       * The center of the Static Body's boundary.
       * This is the midpoint of its `position` (top-left corner) and its bottom-right corner.
       */
      center: Phaser.Math.Vector2;

      /**
       * A constant zero velocity used by the Arcade Physics simulation for calculations.
       */
      readonly velocity: Phaser.Math.Vector2;

      /**
       * A constant `false` value expected by the Arcade Physics simulation.
       */
      readonly allowGravity: boolean;

      /**
       * Gravitational force applied specifically to this Body. Values are in pixels per second squared. Always zero for a Static Body.
       */
      readonly gravity: Phaser.Math.Vector2;

      /**
       * Rebound, or restitution, following a collision, relative to 1. Always zero for a Static Body.
       */
      readonly bounce: Phaser.Math.Vector2;

      /**
       * Whether the simulation emits a `worldbounds` event when this StaticBody collides with the world boundary.
       * Always false for a Static Body. (Static Bodies never collide with the world boundary and never trigger a `worldbounds` event.)
       */
      readonly onWorldBounds: boolean;

      /**
       * Whether the simulation emits a `collide` event when this StaticBody collides with another.
       */
      onCollide: boolean;

      /**
       * Whether the simulation emits an `overlap` event when this StaticBody overlaps with another.
       */
      onOverlap: boolean;

      /**
       * The StaticBody's inertia, relative to a default unit (1). With `bounce`, this affects the exchange of momentum (velocities) during collisions.
       */
      mass: number;

      /**
       * Whether this object can be moved by collisions with another body.
       */
      immovable: boolean;

      /**
       * Sets if this Body can be pushed by another Body.
       *
       * A body that cannot be pushed will reflect back all of the velocity it is given to the
       * colliding body. If that body is also not pushable, then the separation will be split
       * between them evenly.
       *
       * If you want your body to never move or seperate at all, see the `setImmovable` method.
       *
       * By default, Static Bodies are not pushable.
       */
      pushable: boolean;

      /**
       * A flag disabling the default horizontal separation of colliding bodies. Pass your own `collideHandler` to the collider.
       */
      customSeparateX: boolean;

      /**
       * A flag disabling the default vertical separation of colliding bodies. Pass your own `collideHandler` to the collider.
       */
      customSeparateY: boolean;

      /**
       * The amount of horizontal overlap (before separation), if this Body is colliding with another.
       */
      overlapX: number;

      /**
       * The amount of vertical overlap (before separation), if this Body is colliding with another.
       */
      overlapY: number;

      /**
       * The amount of overlap (before separation), if this StaticBody is circular and colliding with another circular body.
       */
      overlapR: number;

      /**
       * Whether this StaticBody has ever overlapped with another while both were not moving.
       */
      embedded: boolean;

      /**
       * Whether this StaticBody interacts with the world boundary.
       * Always false for a Static Body. (Static Bodies never collide with the world boundary.)
       */
      readonly collideWorldBounds: boolean;

      /**
       * Whether this StaticBody is checked for collisions and for which directions. You can set `checkCollision.none = false` to disable collision checks.
       */
      checkCollision: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;

      /**
       * This property is kept for compatibility with Dynamic Bodies.
       * Avoid using it.
       */
      touching: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;

      /**
       * This property is kept for compatibility with Dynamic Bodies.
       * Avoid using it.
       * The values are always false for a Static Body.
       */
      wasTouching: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;

      /**
       * This property is kept for compatibility with Dynamic Bodies.
       * Avoid using it.
       */
      blocked: Phaser.Types.Physics.Arcade.ArcadeBodyCollision;

      /**
       * The StaticBody's physics type (static by default).
       */
      physicsType: number;

      /**
       * Changes the Game Object this Body is bound to.
       * First it removes its reference from the old Game Object, then sets the new one.
       * You can optionally update the position and dimensions of this Body to reflect that of the new Game Object.
       * @param gameObject The new Game Object that will own this Body.
       * @param update Reposition and resize this Body to match the new Game Object? Default true.
       */
      setGameObject(gameObject: Phaser.GameObjects.GameObject, update?: boolean): Phaser.Physics.Arcade.StaticBody;

      /**
       * Syncs the Static Body's position and size with its parent Game Object.
       */
      updateFromGameObject(): Phaser.Physics.Arcade.StaticBody;

      /**
       * Positions the Static Body at an offset from its Game Object.
       * @param x The horizontal offset of the Static Body from the Game Object's `x`.
       * @param y The vertical offset of the Static Body from the Game Object's `y`.
       */
      setOffset(x: number, y: number): Phaser.Physics.Arcade.StaticBody;

      /**
       * Sets the size of the Static Body.
       * When `center` is true, also repositions it.
       * Resets the width and height to match current frame, if no width and height provided and a frame is found.
       * @param width The width of the Static Body in pixels. Cannot be zero. If not given, and the parent Game Object has a frame, it will use the frame width.
       * @param height The height of the Static Body in pixels. Cannot be zero. If not given, and the parent Game Object has a frame, it will use the frame height.
       * @param center Place the Static Body's center on its Game Object's center. Only works if the Game Object has the `getCenter` method. Default true.
       */
      setSize(width?: number, height?: number, center?: boolean): Phaser.Physics.Arcade.StaticBody;

      /**
       * Sets this Static Body to have a circular body and sets its size and position.
       * @param radius The radius of the StaticBody, in pixels.
       * @param offsetX The horizontal offset of the StaticBody from its Game Object, in pixels.
       * @param offsetY The vertical offset of the StaticBody from its Game Object, in pixels.
       */
      setCircle(radius: number, offsetX?: number, offsetY?: number): Phaser.Physics.Arcade.StaticBody;

      /**
       * Updates the StaticBody's `center` from its `position` and dimensions.
       */
      updateCenter(): void;

      /**
       * Resets this Body to the given coordinates. Also positions its parent Game Object to the same coordinates.
       * @param x The x coordinate to reset the body to. If not given will use the parent Game Object's coordinate.
       * @param y The y coordinate to reset the body to. If not given will use the parent Game Object's coordinate.
       */
      reset(x?: number, y?: number): void;

      /**
       * NOOP function. A Static Body cannot be stopped.
       */
      stop(): Phaser.Physics.Arcade.StaticBody;

      /**
       * Returns the x and y coordinates of the top left and bottom right points of the StaticBody.
       * @param obj The object which will hold the coordinates of the bounds.
       */
      getBounds(obj: Phaser.Types.Physics.Arcade.ArcadeBodyBounds): Phaser.Types.Physics.Arcade.ArcadeBodyBounds;

      /**
       * Checks to see if a given x,y coordinate is colliding with this Static Body.
       * @param x The x coordinate to check against this body.
       * @param y The y coordinate to check against this body.
       */
      hitTest(x: number, y: number): boolean;

      /**
       * NOOP
       */
      postUpdate(): void;

      /**
       * The absolute (non-negative) change in this StaticBody's horizontal position from the previous step. Always zero.
       */
      deltaAbsX(): number;

      /**
       * The absolute (non-negative) change in this StaticBody's vertical position from the previous step. Always zero.
       */
      deltaAbsY(): number;

      /**
       * The change in this StaticBody's horizontal position from the previous step. Always zero.
       */
      deltaX(): number;

      /**
       * The change in this StaticBody's vertical position from the previous step. Always zero.
       */
      deltaY(): number;

      /**
       * The change in this StaticBody's rotation from the previous step. Always zero.
       */
      deltaZ(): number;

      /**
       * Disables this Body and marks it for destruction during the next step.
       */
      destroy(): void;

      /**
       * Draws a graphical representation of the StaticBody for visual debugging purposes.
       * @param graphic The Graphics object to use for the debug drawing of the StaticBody.
       */
      drawDebug(graphic: Phaser.GameObjects.Graphics): void;

      /**
       * Indicates whether the StaticBody is going to be showing a debug visualization during postUpdate.
       */
      willDrawDebug(): boolean;

      /**
       * Sets the Mass of the StaticBody. Will set the Mass to 0.1 if the value passed is less than or equal to zero.
       * @param value The value to set the Mass to. Values of zero or less are changed to 0.1.
       */
      setMass(value: number): Phaser.Physics.Arcade.StaticBody;

      /**
       * The x coordinate of the StaticBody.
       */
      x: number;

      /**
       * The y coordinate of the StaticBody.
       */
      y: number;

      /**
       * Returns the left-most x coordinate of the area of the StaticBody.
       */
      readonly left: number;

      /**
       * The right-most x coordinate of the area of the StaticBody.
       */
      readonly right: number;

      /**
       * The highest y coordinate of the area of the StaticBody.
       */
      readonly top: number;

      /**
       * The lowest y coordinate of the area of the StaticBody. (y + height)
       */
      readonly bottom: number;

    }

    /**
     * An Arcade Physics Static Group object.
     *
     * All Game Objects created by or added to this Group will automatically be given static Arcade Physics bodies, if they have no body.
     *
     * Its dynamic counterpart is {@link Phaser.Physics.Arcade.Group}.
     */
    class StaticGroup extends Phaser.GameObjects.Group {
      /**
       *
       * @param world The physics simulation.
       * @param scene The scene this group belongs to.
       * @param children Game Objects to add to this group; or the `config` argument.
       * @param config Settings for this group.
       */
      constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene, children?: Phaser.GameObjects.GameObject[] | Phaser.Types.GameObjects.Group.GroupConfig | Phaser.Types.GameObjects.Group.GroupCreateConfig, config?: Phaser.Types.GameObjects.Group.GroupConfig | Phaser.Types.GameObjects.Group.GroupCreateConfig);

      /**
       * The physics simulation.
       */
      world: Phaser.Physics.Arcade.World;

      /**
       * The scene this group belongs to.
       */
      physicsType: number;

      /**
       * A textual representation of this Game Object.
       * Used internally by Phaser but is available for your own custom classes to populate.
       */
      type: string;

      /**
       * Adds a static physics body to the new group member (if it lacks one) and adds it to the simulation.
       * @param child The new group member.
       */
      createCallbackHandler(child: Phaser.GameObjects.GameObject): void;

      /**
       * Disables the group member's physics body, removing it from the simulation.
       * @param child The group member being removed.
       */
      removeCallbackHandler(child: Phaser.GameObjects.GameObject): void;

      /**
       * Refreshes the group.
       * @param entries The newly created group members.
       */
      createMultipleCallbackHandler(entries: Phaser.GameObjects.GameObject[]): void;

      /**
       * Resets each Body to the position of its parent Game Object.
       * Body sizes aren't changed (use {@link Phaser.Physics.Arcade.Components.Enable#refreshBody} for that).
       */
      refresh(): Phaser.Physics.Arcade.StaticGroup;

    }

    namespace Tilemap {
      /**
       * A function to process the collision callbacks between a single tile and an Arcade Physics enabled Game Object.
       * @param tile The Tile to process.
       * @param sprite The Game Object to process with the Tile.
       */
      function ProcessTileCallbacks(tile: Phaser.Tilemaps.Tile, sprite: Phaser.GameObjects.Sprite): boolean;

      /**
       * Internal function to process the separation of a physics body from a tile.
       * @param body The Body object to separate.
       * @param x The x separation amount.
       */
      function ProcessTileSeparationX(body: Phaser.Physics.Arcade.Body, x: number): void;

      /**
       * Internal function to process the separation of a physics body from a tile.
       * @param body The Body object to separate.
       * @param y The y separation amount.
       */
      function ProcessTileSeparationY(body: Phaser.Physics.Arcade.Body, y: number): void;

      /**
       * The core separation function to separate a physics body and a tile.
       * @param i The index of the tile within the map data.
       * @param body The Body object to separate.
       * @param tile The tile to collide against.
       * @param tileWorldRect A rectangle-like object defining the dimensions of the tile.
       * @param tilemapLayer The tilemapLayer to collide against.
       * @param tileBias The tile bias value. Populated by the `World.TILE_BIAS` constant.
       * @param isLayer Is this check coming from a TilemapLayer or an array of tiles?
       */
      function SeparateTile(i: number, body: Phaser.Physics.Arcade.Body, tile: Phaser.Tilemaps.Tile, tileWorldRect: Phaser.Geom.Rectangle, tilemapLayer: Phaser.Tilemaps.TilemapLayer, tileBias: number, isLayer: boolean): boolean;

      /**
       * Check the body against the given tile on the X axis.
       * Used internally by the SeparateTile function.
       * @param body The Body object to separate.
       * @param tile The tile to check.
       * @param tileLeft The left position of the tile within the tile world.
       * @param tileRight The right position of the tile within the tile world.
       * @param tileBias The tile bias value. Populated by the `World.TILE_BIAS` constant.
       * @param isLayer Is this check coming from a TilemapLayer or an array of tiles?
       */
      function TileCheckX(body: Phaser.Physics.Arcade.Body, tile: Phaser.Tilemaps.Tile, tileLeft: number, tileRight: number, tileBias: number, isLayer: boolean): number;

      /**
       * Check the body against the given tile on the Y axis.
       * Used internally by the SeparateTile function.
       * @param body The Body object to separate.
       * @param tile The tile to check.
       * @param tileTop The top position of the tile within the tile world.
       * @param tileBottom The bottom position of the tile within the tile world.
       * @param tileBias The tile bias value. Populated by the `World.TILE_BIAS` constant.
       * @param isLayer Is this check coming from a TilemapLayer or an array of tiles?
       */
      function TileCheckY(body: Phaser.Physics.Arcade.Body, tile: Phaser.Tilemaps.Tile, tileTop: number, tileBottom: number, tileBias: number, isLayer: boolean): number;

      /**
       * Checks for intersection between the given tile rectangle-like object and an Arcade Physics body.
       * @param tileWorldRect A rectangle object that defines the tile placement in the world.
       * @param body The body to check for intersection against.
       */
      function TileIntersectsBody(tileWorldRect: Object, body: Phaser.Physics.Arcade.Body): boolean;

    }

    /**
     * The Arcade Physics World.
     *
     * The World is responsible for creating, managing, colliding and updating all of the bodies within it.
     *
     * An instance of the World belongs to a Phaser.Scene and is accessed via the property `physics.world`.
     */
    class World extends Phaser.Events.EventEmitter {
      /**
       *
       * @param scene The Scene to which this World instance belongs.
       * @param config An Arcade Physics Configuration object.
       */
      constructor(scene: Phaser.Scene, config: Phaser.Types.Physics.Arcade.ArcadeWorldConfig);

      /**
       * The Scene this simulation belongs to.
       */
      scene: Phaser.Scene;

      /**
       * Dynamic Bodies in this simulation.
       */
      bodies: Phaser.Structs.Set<Phaser.Physics.Arcade.Body>;

      /**
       * Static Bodies in this simulation.
       */
      staticBodies: Phaser.Structs.Set<Phaser.Physics.Arcade.StaticBody>;

      /**
       * Static Bodies marked for deletion.
       */
      pendingDestroy: Phaser.Structs.Set<(Phaser.Physics.Arcade.Body|Phaser.Physics.Arcade.StaticBody)>;

      /**
       * This simulation's collision processors.
       */
      colliders: Phaser.Structs.ProcessQueue<Phaser.Physics.Arcade.Collider>;

      /**
       * Acceleration of Bodies due to gravity, in pixels per second.
       */
      gravity: Phaser.Math.Vector2;

      /**
       * A boundary constraining Bodies.
       */
      bounds: Phaser.Geom.Rectangle;

      /**
       * The boundary edges that Bodies can collide with.
       */
      checkCollision: Phaser.Types.Physics.Arcade.CheckCollisionObject;

      /**
       * The number of physics steps to be taken per second.
       *
       * This property is read-only. Use the `setFPS` method to modify it at run-time.
       */
      readonly fps: number;

      /**
       * Should Physics use a fixed update time-step (true) or sync to the render fps (false)?.
       * False value of this property disables fps and timeScale properties.
       */
      fixedStep: boolean;

      /**
       * The number of steps that took place in the last frame.
       */
      readonly stepsLastFrame: number;

      /**
       * Scaling factor applied to the frame rate.
       *
       * - 1.0 = normal speed
       * - 2.0 = half speed
       * - 0.5 = double speed
       */
      timeScale: number;

      /**
       * The maximum absolute difference of a Body's per-step velocity and its overlap with another Body that will result in separation on *each axis*.
       * Larger values favor separation.
       * Smaller values favor no separation.
       */
      OVERLAP_BIAS: number;

      /**
       * The maximum absolute value of a Body's overlap with a tile that will result in separation on *each axis*.
       * Larger values favor separation.
       * Smaller values favor no separation.
       * The optimum value may be similar to the tile size.
       */
      TILE_BIAS: number;

      /**
       * Always separate overlapping Bodies horizontally before vertically.
       * False (the default) means Bodies are first separated on the axis of greater gravity, or the vertical axis if neither is greater.
       */
      forceX: boolean;

      /**
       * Whether the simulation advances with the game loop.
       */
      isPaused: boolean;

      /**
       * Enables the debug display.
       */
      drawDebug: boolean;

      /**
       * The graphics object drawing the debug display.
       */
      debugGraphic: Phaser.GameObjects.Graphics;

      /**
       * Default debug display settings for new Bodies.
       */
      defaults: Phaser.Types.Physics.Arcade.ArcadeWorldDefaults;

      /**
       * The maximum number of items per node on the RTree.
       *
       * This is ignored if `useTree` is `false`. If you have a large number of bodies in
       * your world then you may find search performance improves by increasing this value,
       * to allow more items per node and less node division.
       */
      maxEntries: number;

      /**
       * Should this Arcade Physics World use an RTree for Dynamic bodies?
       *
       * An RTree is a fast way of spatially sorting of all the bodies in the world.
       * However, at certain limits, the cost of clearing and inserting the bodies into the
       * tree every frame becomes more expensive than the search speed gains it provides.
       *
       * If you have a large number of dynamic bodies in your world then it may be best to
       * disable the use of the RTree by setting this property to `false` in the physics config.
       *
       * The number it can cope with depends on browser and device, but a conservative estimate
       * of around 5,000 bodies should be considered the max before disabling it.
       *
       * This only applies to dynamic bodies. Static bodies are always kept in an RTree,
       * because they don't have to be cleared every frame, so you benefit from the
       * massive search speeds all the time.
       */
      useTree: boolean;

      /**
       * The spatial index of Dynamic Bodies.
       */
      tree: Phaser.Structs.RTree;

      /**
       * The spatial index of Static Bodies.
       */
      staticTree: Phaser.Structs.RTree;

      /**
       * Recycled input for tree searches.
       */
      treeMinMax: Phaser.Types.Physics.Arcade.ArcadeWorldTreeMinMax;

      /**
       * Adds an Arcade Physics Body to a Game Object, an array of Game Objects, or the children of a Group.
       *
       * The difference between this and the `enableBody` method is that you can pass arrays or Groups
       * to this method.
       *
       * You can specify if the bodies are to be Dynamic or Static. A dynamic body can move via velocity and
       * acceleration. A static body remains fixed in place and as such is able to use an optimized search
       * tree, making it ideal for static elements such as level objects. You can still collide and overlap
       * with static bodies.
       *
       * Normally, rather than calling this method directly, you'd use the helper methods available in the
       * Arcade Physics Factory, such as:
       *
       * ```javascript
       * this.physics.add.image(x, y, textureKey);
       * this.physics.add.sprite(x, y, textureKey);
       * ```
       *
       * Calling factory methods encapsulates the creation of a Game Object and the creation of its
       * body at the same time. If you are creating custom classes then you can pass them to this
       * method to have their bodies created.
       * @param object The object, or objects, on which to create the bodies.
       * @param bodyType The type of Body to create. Either `DYNAMIC_BODY` or `STATIC_BODY`.
       */
      enable(object: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[], bodyType?: number): void;

      /**
       * Creates an Arcade Physics Body on a single Game Object.
       *
       * If the Game Object already has a body, this method will simply add it back into the simulation.
       *
       * You can specify if the body is Dynamic or Static. A dynamic body can move via velocity and
       * acceleration. A static body remains fixed in place and as such is able to use an optimized search
       * tree, making it ideal for static elements such as level objects. You can still collide and overlap
       * with static bodies.
       *
       * Normally, rather than calling this method directly, you'd use the helper methods available in the
       * Arcade Physics Factory, such as:
       *
       * ```javascript
       * this.physics.add.image(x, y, textureKey);
       * this.physics.add.sprite(x, y, textureKey);
       * ```
       *
       * Calling factory methods encapsulates the creation of a Game Object and the creation of its
       * body at the same time. If you are creating custom classes then you can pass them to this
       * method to have their bodies created.
       * @param object The Game Object on which to create the body.
       * @param bodyType The type of Body to create. Either `DYNAMIC_BODY` or `STATIC_BODY`.
       */
      enableBody(object: Phaser.GameObjects.GameObject, bodyType?: number): Phaser.GameObjects.GameObject;

      /**
       * Adds an existing Arcade Physics Body or StaticBody to the simulation.
       *
       * The body is enabled and added to the local search trees.
       * @param body The Body to be added to the simulation.
       */
      add(body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody): Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody;

      /**
       * Disables the Arcade Physics Body of a Game Object, an array of Game Objects, or the children of a Group.
       *
       * The difference between this and the `disableBody` method is that you can pass arrays or Groups
       * to this method.
       *
       * The body itself is not deleted, it just has its `enable` property set to false, which
       * means you can re-enable it again at any point by passing it to enable `World.enable` or `World.add`.
       * @param object The object, or objects, on which to disable the bodies.
       */
      disable(object: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.GameObjects.Group | Phaser.GameObjects.Group[]): void;

      /**
       * Disables an existing Arcade Physics Body or StaticBody and removes it from the simulation.
       *
       * The body is disabled and removed from the local search trees.
       *
       * The body itself is not deleted, it just has its `enable` property set to false, which
       * means you can re-enable it again at any point by passing it to enable `World.enable` or `World.add`.
       * @param body The Body to be disabled.
       */
      disableBody(body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody): void;

      /**
       * Removes an existing Arcade Physics Body or StaticBody from the simulation.
       *
       * The body is disabled and removed from the local search trees.
       *
       * The body itself is not deleted, it just has its `enabled` property set to false, which
       * means you can re-enable it again at any point by passing it to enable `enable` or `add`.
       * @param body The body to be removed from the simulation.
       */
      remove(body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody): void;

      /**
       * Creates a Graphics Game Object that the world will use to render the debug display to.
       *
       * This is called automatically when the World is instantiated if the `debug` config property
       * was set to `true`. However, you can call it at any point should you need to display the
       * debug Graphic from a fixed point.
       *
       * You can control which objects are drawn to the Graphics object, and the colors they use,
       * by setting the debug properties in the physics config.
       *
       * You should not typically use this in a production game. Use it to aid during debugging.
       */
      createDebugGraphic(): Phaser.GameObjects.Graphics;

      /**
       * Sets the position, size and properties of the World boundary.
       *
       * The World boundary is an invisible rectangle that defines the edges of the World.
       * If a Body is set to collide with the world bounds then it will automatically stop
       * when it reaches any of the edges. You can optionally set which edges of the boundary
       * should be checked against.
       * @param x The top-left x coordinate of the boundary.
       * @param y The top-left y coordinate of the boundary.
       * @param width The width of the boundary.
       * @param height The height of the boundary.
       * @param checkLeft Should bodies check against the left edge of the boundary?
       * @param checkRight Should bodies check against the right edge of the boundary?
       * @param checkUp Should bodies check against the top edge of the boundary?
       * @param checkDown Should bodies check against the bottom edge of the boundary?
       */
      setBounds(x: number, y: number, width: number, height: number, checkLeft?: boolean, checkRight?: boolean, checkUp?: boolean, checkDown?: boolean): Phaser.Physics.Arcade.World;

      /**
       * Enables or disables collisions on each edge of the World boundary.
       * @param left Should bodies check against the left edge of the boundary? Default true.
       * @param right Should bodies check against the right edge of the boundary? Default true.
       * @param up Should bodies check against the top edge of the boundary? Default true.
       * @param down Should bodies check against the bottom edge of the boundary? Default true.
       */
      setBoundsCollision(left?: boolean, right?: boolean, up?: boolean, down?: boolean): Phaser.Physics.Arcade.World;

      /**
       * Pauses the simulation.
       *
       * A paused simulation does not update any existing bodies, or run any Colliders.
       *
       * However, you can still enable and disable bodies within it, or manually run collide or overlap
       * checks.
       */
      pause(): Phaser.Physics.Arcade.World;

      /**
       * Resumes the simulation, if paused.
       */
      resume(): Phaser.Physics.Arcade.World;

      /**
       * Creates a new Collider object and adds it to the simulation.
       *
       * A Collider is a way to automatically perform collision checks between two objects,
       * calling the collide and process callbacks if they occur.
       *
       * Colliders are run as part of the World update, after all of the Bodies have updated.
       *
       * By creating a Collider you don't need then call `World.collide` in your `update` loop,
       * as it will be handled for you automatically.
       * @param object1 The first object to check for collision.
       * @param object2 The second object to check for collision.
       * @param collideCallback The callback to invoke when the two objects collide.
       * @param processCallback The callback to invoke when the two objects collide. Must return a boolean.
       * @param callbackContext The scope in which to call the callbacks.
       */
      addCollider(object1: Phaser.Types.Physics.Arcade.ArcadeColliderType, object2: Phaser.Types.Physics.Arcade.ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): Phaser.Physics.Arcade.Collider;

      /**
       * Creates a new Overlap Collider object and adds it to the simulation.
       *
       * A Collider is a way to automatically perform overlap checks between two objects,
       * calling the collide and process callbacks if they occur.
       *
       * Colliders are run as part of the World update, after all of the Bodies have updated.
       *
       * By creating a Collider you don't need then call `World.overlap` in your `update` loop,
       * as it will be handled for you automatically.
       * @param object1 The first object to check for overlap.
       * @param object2 The second object to check for overlap.
       * @param collideCallback The callback to invoke when the two objects overlap.
       * @param processCallback The callback to invoke when the two objects overlap. Must return a boolean.
       * @param callbackContext The scope in which to call the callbacks.
       */
      addOverlap(object1: Phaser.Types.Physics.Arcade.ArcadeColliderType, object2: Phaser.Types.Physics.Arcade.ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): Phaser.Physics.Arcade.Collider;

      /**
       * Removes a Collider from the simulation so it is no longer processed.
       *
       * This method does not destroy the Collider. If you wish to add it back at a later stage you can call
       * `World.colliders.add(Collider)`.
       *
       * If you no longer need the Collider you can call the `Collider.destroy` method instead, which will
       * automatically clear all of its references and then remove it from the World. If you call destroy on
       * a Collider you _don't_ need to pass it to this method too.
       * @param collider The Collider to remove from the simulation.
       */
      removeCollider(collider: Phaser.Physics.Arcade.Collider): Phaser.Physics.Arcade.World;

      /**
       * Sets the frame rate to run the simulation at.
       *
       * The frame rate value is used to simulate a fixed update time step. This fixed
       * time step allows for a straightforward implementation of a deterministic game state.
       *
       * This frame rate is independent of the frequency at which the game is rendering. The
       * higher you set the fps, the more physics simulation steps will occur per game step.
       * Conversely, the lower you set it, the less will take place.
       *
       * You can optionally advance the simulation directly yourself by calling the `step` method.
       * @param framerate The frame rate to advance the simulation at.
       */
      setFPS(framerate: number): this;

      /**
       * Advances the simulation based on the elapsed time and fps rate.
       *
       * This is called automatically by your Scene and does not need to be invoked directly.
       * @param time The current timestamp as generated by the Request Animation Frame or SetTimeout.
       * @param delta The delta time, in ms, elapsed since the last frame.
       */
      update(time: number, delta: number): void;

      /**
       * Advances the simulation by a time increment.
       * @param delta The delta time amount, in seconds, by which to advance the simulation.
       */
      step(delta: number): void;

      /**
       * Updates bodies, draws the debug display, and handles pending queue operations.
       */
      postUpdate(): void;

      /**
       * Calculates a Body's velocity and updates its position.
       * @param body The Body to be updated.
       * @param delta The delta value to be used in the motion calculations, in seconds.
       */
      updateMotion(body: Phaser.Physics.Arcade.Body, delta: number): void;

      /**
       * Calculates a Body's angular velocity.
       * @param body The Body to compute the velocity for.
       * @param delta The delta value to be used in the calculation, in seconds.
       */
      computeAngularVelocity(body: Phaser.Physics.Arcade.Body, delta: number): void;

      /**
       * Calculates a Body's per-axis velocity.
       * @param body The Body to compute the velocity for.
       * @param delta The delta value to be used in the calculation, in seconds.
       */
      computeVelocity(body: Phaser.Physics.Arcade.Body, delta: number): void;

      /**
       * Separates two Bodies.
       * @param body1 The first Body to be separated.
       * @param body2 The second Body to be separated.
       * @param processCallback The process callback.
       * @param callbackContext The context in which to invoke the callback.
       * @param overlapOnly If this a collide or overlap check?
       * @param intersects Assert that the bodies intersect and should not be tested before separation.
       */
      separate(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, processCallback?: ArcadePhysicsCallback, callbackContext?: any, overlapOnly?: boolean, intersects?: boolean): boolean;

      /**
       * Separates two Bodies, when both are circular.
       * @param body1 The first Body to be separated.
       * @param body2 The second Body to be separated.
       * @param overlapOnly If this a collide or overlap check?
       * @param bias A small value added to the calculations.
       */
      separateCircle(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body, overlapOnly?: boolean, bias?: number): boolean;

      /**
       * Checks to see if two Bodies intersect at all.
       * @param body1 The first body to check.
       * @param body2 The second body to check.
       */
      intersects(body1: Phaser.Physics.Arcade.Body, body2: Phaser.Physics.Arcade.Body): boolean;

      /**
       * Tests if a circular Body intersects with another Body.
       * @param circle The circular body to test.
       * @param body The rectangular body to test.
       */
      circleBodyIntersects(circle: Phaser.Physics.Arcade.Body, body: Phaser.Physics.Arcade.Body): boolean;

      /**
       * Tests if Game Objects overlap.
       *
       * See details in {@link Phaser.Physics.Arcade.World#collide}.
       * @param object1 The first object or array of objects to check.
       * @param object2 The second object or array of objects to check, or `undefined`.
       * @param overlapCallback An optional callback function that is called if the objects overlap.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they overlap. If this is set then `overlapCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       */
      overlap(object1: Phaser.Types.Physics.Arcade.ArcadeColliderType, object2?: Phaser.Types.Physics.Arcade.ArcadeColliderType, overlapCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * Performs a collision check and separation between the two physics enabled objects given, which can be single
       * Game Objects, arrays of Game Objects, Physics Groups, arrays of Physics Groups or normal Groups.
       *
       * If you don't require separation then use {@link Phaser.Physics.Arcade.World#overlap} instead.
       *
       * If two Groups or arrays are passed, each member of one will be tested against each member of the other.
       *
       * If **only** one Group is passed (as `object1`), each member of the Group will be collided against the other members.
       *
       * If **only** one Array is passed, the array is iterated and every element in it is tested against the others.
       *
       * Two callbacks can be provided; they receive the colliding game objects as arguments.
       * If an overlap is detected, the `processCallback` is called first. It can cancel the collision by returning false.
       * Next the objects are separated and `collideCallback` is invoked.
       *
       * Arcade Physics uses the Projection Method of collision resolution and separation. While it's fast and suitable
       * for 'arcade' style games it lacks stability when multiple objects are in close proximity or resting upon each other.
       * The separation that stops two objects penetrating may create a new penetration against a different object. If you
       * require a high level of stability please consider using an alternative physics system, such as Matter.js.
       * @param object1 The first object or array of objects to check.
       * @param object2 The second object or array of objects to check, or `undefined`.
       * @param collideCallback An optional callback function that is called if the objects collide.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they collide. If this is set then `collideCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       */
      collide(object1: Phaser.Types.Physics.Arcade.ArcadeColliderType, object2?: Phaser.Types.Physics.Arcade.ArcadeColliderType, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * This advanced method is specifically for testing for collision between a single Sprite and an array of Tile objects.
       *
       * You should generally use the `collide` method instead, with a Sprite vs. a Tilemap Layer, as that will perform
       * tile filtering and culling for you, as well as handle the interesting face collision automatically.
       *
       * This method is offered for those who would like to check for collision with specific Tiles in a layer, without
       * having to set any collision attributes on the tiles in question. This allows you to perform quick dynamic collisions
       * on small sets of Tiles. As such, no culling or checks are made to the array of Tiles given to this method,
       * you should filter them before passing them to this method.
       *
       * Important: Use of this method skips the `interesting faces` system that Tilemap Layers use. This means if you have
       * say a row or column of tiles, and you jump into, or walk over them, it's possible to get stuck on the edges of the
       * tiles as the interesting face calculations are skipped. However, for quick-fire small collision set tests on
       * dynamic maps, this method can prove very useful.
       * @param sprite The first object to check for collision.
       * @param tiles An array of Tiles to check for collision against.
       * @param collideCallback An optional callback function that is called if the objects collide.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they collide. If this is set then `collideCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       */
      collideTiles(sprite: Phaser.GameObjects.GameObject, tiles: Phaser.Tilemaps.Tile[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * This advanced method is specifically for testing for overlaps between a single Sprite and an array of Tile objects.
       *
       * You should generally use the `overlap` method instead, with a Sprite vs. a Tilemap Layer, as that will perform
       * tile filtering and culling for you, as well as handle the interesting face collision automatically.
       *
       * This method is offered for those who would like to check for overlaps with specific Tiles in a layer, without
       * having to set any collision attributes on the tiles in question. This allows you to perform quick dynamic overlap
       * tests on small sets of Tiles. As such, no culling or checks are made to the array of Tiles given to this method,
       * you should filter them before passing them to this method.
       * @param sprite The first object to check for collision.
       * @param tiles An array of Tiles to check for collision against.
       * @param collideCallback An optional callback function that is called if the objects overlap.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they collide. If this is set then `collideCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       */
      overlapTiles(sprite: Phaser.GameObjects.GameObject, tiles: Phaser.Tilemaps.Tile[], collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * Internal handler for Sprite vs. Tilemap collisions.
       * Please use Phaser.Physics.Arcade.World#collide instead.
       * @param sprite The first object to check for collision.
       * @param tilemapLayer The second object to check for collision.
       * @param collideCallback An optional callback function that is called if the objects collide.
       * @param processCallback An optional callback function that lets you perform additional checks against the two objects if they collide. If this is set then `collideCallback` will only be called if this callback returns `true`.
       * @param callbackContext The context in which to run the callbacks.
       * @param overlapOnly Whether this is a collision or overlap check.
       */
      collideSpriteVsTilemapLayer(sprite: Phaser.GameObjects.GameObject, tilemapLayer: Phaser.Tilemaps.TilemapLayer, collideCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any, overlapOnly?: boolean): boolean;

      /**
       * Wrap an object's coordinates (or several objects' coordinates) within {@link Phaser.Physics.Arcade.World#bounds}.
       *
       * If the object is outside any boundary edge (left, top, right, bottom), it will be moved to the same offset from the opposite edge (the interior).
       * @param object A Game Object, a Group, an object with `x` and `y` coordinates, or an array of such objects.
       * @param padding An amount added to each boundary edge during the operation. Default 0.
       */
      wrap(object: any, padding?: number): void;

      /**
       * Wrap each object's coordinates within {@link Phaser.Physics.Arcade.World#bounds}.
       * @param objects An array of objects to be wrapped.
       * @param padding An amount added to the boundary. Default 0.
       */
      wrapArray(objects: any[], padding?: number): void;

      /**
       * Wrap an object's coordinates within {@link Phaser.Physics.Arcade.World#bounds}.
       * @param object A Game Object, a Physics Body, or any object with `x` and `y` coordinates
       * @param padding An amount added to the boundary. Default 0.
       */
      wrapObject(object: any, padding?: number): void;

      /**
       * Shuts down the simulation, clearing physics data and removing listeners.
       */
      shutdown(): void;

      /**
       * Shuts down the simulation and disconnects it from the current scene.
       */
      destroy(): void;

    }

  }

  namespace Matter {
    /**
     * The Body Bounds class contains methods to help you extract the world coordinates from various points around
     * the bounds of a Matter Body. Because Matter bodies are positioned based on their center of mass, and not a
     * dimension based center, you often need to get the bounds coordinates in order to properly align them in the world.
     *
     * You can access this class via the MatterPhysics class from a Scene, i.e.:
     *
     * ```javascript
     * this.matter.bodyBounds.getTopLeft(body);
     * ```
     *
     * See also the `MatterPhysics.alignBody` method.
     */
    class BodyBounds {
      /**
       * A Vector2 that stores the temporary bounds center value during calculations by methods in this class.
       */
      boundsCenter: Phaser.Math.Vector2;

      /**
       * A Vector2 that stores the temporary center diff values during calculations by methods in this class.
       */
      centerDiff: Phaser.Math.Vector2;

      /**
       * Parses the given body to get the bounds diff values from it.
       *
       * They're stored in this class in the temporary properties `boundsCenter` and `centerDiff`.
       *
       * This method is called automatically by all other methods in this class.
       * @param body The Body to get the bounds position from.
       */
      parseBody(body: Phaser.Types.Physics.Matter.MatterBody): boolean;

      /**
       * Takes a Body and returns the world coordinates of the top-left of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getTopLeft(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

      /**
       * Takes a Body and returns the world coordinates of the top-center of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getTopCenter(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

      /**
       * Takes a Body and returns the world coordinates of the top-right of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getTopRight(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

      /**
       * Takes a Body and returns the world coordinates of the left-center of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getLeftCenter(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

      /**
       * Takes a Body and returns the world coordinates of the center of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getCenter(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

      /**
       * Takes a Body and returns the world coordinates of the right-center of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getRightCenter(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

      /**
       * Takes a Body and returns the world coordinates of the bottom-left of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getBottomLeft(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

      /**
       * Takes a Body and returns the world coordinates of the bottom-center of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getBottomCenter(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

      /**
       * Takes a Body and returns the world coordinates of the bottom-right of its _bounds_.
       *
       * Body bounds are updated by Matter each step and factor in scale and rotation.
       * This will return the world coordinate based on the bodies _current_ position and bounds.
       * @param body The Body to get the position from.
       * @param x Optional horizontal offset to add to the returned coordinates. Default 0.
       * @param y Optional vertical offset to add to the returned coordinates. Default 0.
       */
      getBottomRight(body: Phaser.Types.Physics.Matter.MatterBody, x?: number, y?: number): Phaser.Math.Vector2 | false;

    }

    namespace Components {
      /**
       * A component to set restitution on objects.
       */
      interface Bounce {
        /**
         * Sets the restitution on the physics object.
         * @param value A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8 means the body may bounce back with approximately 80% of its kinetic energy. Note that collision response is based on pairs of bodies, and that restitution values are combined with the following formula: `Math.max(bodyA.restitution, bodyB.restitution)`
         */
        setBounce(value: number): Phaser.GameObjects.GameObject;
      }

      /**
       * Contains methods for changing the collision filter of a Matter Body. Should be used as a mixin and not called directly.
       */
      interface Collision {
        /**
         * Sets the collision category of this Game Object's Matter Body. This number must be a power of two between 2^0 (= 1) and 2^31.
         * Two bodies with different collision groups (see {@link #setCollisionGroup}) will only collide if their collision
         * categories are included in their collision masks (see {@link #setCollidesWith}).
         * @param value Unique category bitfield.
         */
        setCollisionCategory(value: number): Phaser.GameObjects.GameObject;
        /**
         * Sets the collision group of this Game Object's Matter Body. If this is zero or two Matter Bodies have different values,
         * they will collide according to the usual rules (see {@link #setCollisionCategory} and {@link #setCollisionGroup}).
         * If two Matter Bodies have the same positive value, they will always collide; if they have the same negative value,
         * they will never collide.
         * @param value Unique group index.
         */
        setCollisionGroup(value: number): Phaser.GameObjects.GameObject;
        /**
         * Sets the collision mask for this Game Object's Matter Body. Two Matter Bodies with different collision groups will only
         * collide if each one includes the other's category in its mask based on a bitwise AND, i.e. `(categoryA & maskB) !== 0`
         * and `(categoryB & maskA) !== 0` are both true.
         * @param categories A unique category bitfield, or an array of them.
         */
        setCollidesWith(categories: number | number[]): Phaser.GameObjects.GameObject;
        /**
         * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
         *
         * This does not change the bodies collision category, group or filter. Those must be set in addition
         * to the callback.
         * @param callback The callback to invoke when this body starts colliding with another.
         */
        setOnCollide(callback: Function): Phaser.GameObjects.GameObject;
        /**
         * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
         *
         * This does not change the bodies collision category, group or filter. Those must be set in addition
         * to the callback.
         * @param callback The callback to invoke when this body stops colliding with another.
         */
        setOnCollideEnd(callback: Function): Phaser.GameObjects.GameObject;
        /**
         * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
         *
         * This does not change the bodies collision category, group or filter. Those must be set in addition
         * to the callback.
         * @param callback The callback to invoke for the duration of this body colliding with another.
         */
        setOnCollideActive(callback: Function): Phaser.GameObjects.GameObject;
        /**
         * The callback is sent a reference to the other body, along with a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
         *
         * This does not change the bodies collision category, group or filter. Those must be set in addition
         * to the callback.
         * @param body The body, or an array of bodies, to test for collisions with.
         * @param callback The callback to invoke when this body collides with the given body or bodies.
         */
        setOnCollideWith(body: MatterJS.Body | MatterJS.Body[], callback: Function): Phaser.GameObjects.GameObject;
      }

      /**
       * A component to apply force to Matter.js bodies.
       */
      interface Force {
        /**
         * Applies a force to a body.
         * @param force A Vector that specifies the force to apply.
         */
        applyForce(force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;
        /**
         * Applies a force to a body from a given position.
         * @param position The position in which the force comes from.
         * @param force A Vector that specifies the force to apply.
         */
        applyForceFrom(position: Phaser.Math.Vector2, force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;
        /**
         * Apply thrust to the forward position of the body.
         *
         * Use very small values, such as 0.1, depending on the mass and required speed.
         * @param speed A speed value to be applied to a directional force.
         */
        thrust(speed: number): Phaser.GameObjects.GameObject;
        /**
         * Apply thrust to the left position of the body.
         *
         * Use very small values, such as 0.1, depending on the mass and required speed.
         * @param speed A speed value to be applied to a directional force.
         */
        thrustLeft(speed: number): Phaser.GameObjects.GameObject;
        /**
         * Apply thrust to the right position of the body.
         *
         * Use very small values, such as 0.1, depending on the mass and required speed.
         * @param speed A speed value to be applied to a directional force.
         */
        thrustRight(speed: number): Phaser.GameObjects.GameObject;
        /**
         * Apply thrust to the back position of the body.
         *
         * Use very small values, such as 0.1, depending on the mass and required speed.
         * @param speed A speed value to be applied to a directional force.
         */
        thrustBack(speed: number): Phaser.GameObjects.GameObject;
      }

      /**
       * Contains methods for changing the friction of a Game Object's Matter Body. Should be used a mixin, not called directly.
       */
      interface Friction {
        /**
         * Sets new friction values for this Game Object's Matter Body.
         * @param value The new friction of the body, between 0 and 1, where 0 allows the Body to slide indefinitely, while 1 allows it to stop almost immediately after a force is applied.
         * @param air If provided, the new air resistance of the Body. The higher the value, the faster the Body will slow as it moves through space. 0 means the body has no air resistance.
         * @param fstatic If provided, the new static friction of the Body. The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary. 0 means the body will never "stick" when it is nearly stationary.
         */
        setFriction(value: number, air?: number, fstatic?: number): Phaser.GameObjects.GameObject;
        /**
         * Sets a new air resistance for this Game Object's Matter Body.
         * A value of 0 means the Body will never slow as it moves through space.
         * The higher the value, the faster a Body slows when moving through space.
         * @param value The new air resistance for the Body.
         */
        setFrictionAir(value: number): Phaser.GameObjects.GameObject;
        /**
         * Sets a new static friction for this Game Object's Matter Body.
         * A value of 0 means the Body will never "stick" when it is nearly stationary.
         * The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary.
         * @param value The new static friction for the Body.
         */
        setFrictionStatic(value: number): Phaser.GameObjects.GameObject;
      }

      /**
       * A component to manipulate world gravity for Matter.js bodies.
       */
      interface Gravity {
        /**
         * A togglable function for ignoring world gravity in real-time on the current body.
         * @param value Set to true to ignore the effect of world gravity, or false to not ignore it.
         */
        setIgnoreGravity(value: boolean): Phaser.GameObjects.GameObject;
      }

      /**
       * Allows accessing the mass, density, and center of mass of a Matter-enabled Game Object. Should be used as a mixin and not directly.
       */
      interface Mass {
        /**
         * Sets the mass of the Game Object's Matter Body.
         * @param value The new mass of the body.
         */
        setMass(value: number): Phaser.GameObjects.GameObject;
        /**
         * Sets density of the body.
         * @param value The new density of the body.
         */
        setDensity(value: number): Phaser.GameObjects.GameObject;
        /**
         * The body's center of mass.
         *
         * Calling this creates a new `Vector2 each time to avoid mutation.
         *
         * If you only need to read the value and won't change it, you can get it from `GameObject.body.centerOfMass`.
         */
        readonly centerOfMass: Phaser.Math.Vector2;
      }

      /**
       * Enables a Matter-enabled Game Object to be a sensor. Should be used as a mixin and not directly.
       */
      interface Sensor {
        /**
         * Set the body belonging to this Game Object to be a sensor.
         * Sensors trigger collision events, but don't react with colliding body physically.
         * @param value `true` to set the body as a sensor, or `false` to disable it.
         */
        setSensor(value: boolean): Phaser.GameObjects.GameObject;
        /**
         * Is the body belonging to this Game Object a sensor or not?
         */
        isSensor(): boolean;
      }

      /**
       * Enables a Matter-enabled Game Object to set its Body. Should be used as a mixin and not directly.
       */
      interface SetBody {
        /**
         * Set the body on a Game Object to a rectangle.
         *
         * Calling this methods resets previous properties you may have set on the body, including
         * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
         * @param width Width of the rectangle.
         * @param height Height of the rectangle.
         * @param options An optional Body configuration object that is used to set initial Body properties on creation.
         */
        setRectangle(width: number, height: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;
        /**
         * Set the body on a Game Object to a circle.
         *
         * Calling this methods resets previous properties you may have set on the body, including
         * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
         * @param radius The radius of the circle.
         * @param options An optional Body configuration object that is used to set initial Body properties on creation.
         */
        setCircle(radius: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;
        /**
         * Set the body on the Game Object to a polygon shape.
         *
         * Calling this methods resets previous properties you may have set on the body, including
         * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
         * @param radius The "radius" of the polygon, i.e. the distance from its center to any vertex. This is also the radius of its circumcircle.
         * @param sides The number of sides the polygon will have.
         * @param options An optional Body configuration object that is used to set initial Body properties on creation.
         */
        setPolygon(radius: number, sides: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;
        /**
         * Set the body on the Game Object to a trapezoid shape.
         *
         * Calling this methods resets previous properties you may have set on the body, including
         * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
         * @param width The width of the trapezoid Body.
         * @param height The height of the trapezoid Body.
         * @param slope The slope of the trapezoid. 0 creates a rectangle, while 1 creates a triangle. Positive values make the top side shorter, while negative values make the bottom side shorter.
         * @param options An optional Body configuration object that is used to set initial Body properties on creation.
         */
        setTrapezoid(width: number, height: number, slope: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;
        /**
         * Set this Game Object to use the given existing Matter Body.
         *
         * The body is first removed from the world before being added to this Game Object.
         * @param body The Body this Game Object should use.
         * @param addToWorld Should the body be immediately added to the World? Default true.
         */
        setExistingBody(body: MatterJS.BodyType, addToWorld?: boolean): Phaser.GameObjects.GameObject;
        /**
         * Set this Game Object to create and use a new Body based on the configuration object given.
         *
         * Calling this method resets previous properties you may have set on the body, including
         * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
         * @param config Either a string, such as `circle`, or a Matter Set Body Configuration object.
         * @param options An optional Body configuration object that is used to set initial Body properties on creation.
         */
        setBody(config: string | Phaser.Types.Physics.Matter.MatterSetBodyConfig, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;
      }

      /**
       * Enables a Matter-enabled Game Object to be able to go to sleep. Should be used as a mixin and not directly.
       */
      interface Sleep {
        /**
         * Sets this Body to sleep.
         */
        setToSleep(): this;
        /**
         * Wakes this Body if asleep.
         */
        setAwake(): this;
        /**
         * Sets the number of updates in which this body must have near-zero velocity before it is set as sleeping (if sleeping is enabled by the engine).
         * @param value A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping. Default 60.
         */
        setSleepThreshold(value?: number): this;
        /**
         * Enable sleep and wake events for this body.
         *
         * By default when a body goes to sleep, or wakes up, it will not emit any events.
         *
         * The events are emitted by the Matter World instance and can be listened to via
         * the `SLEEP_START` and `SLEEP_END` events.
         * @param start `true` if you want the sleep start event to be emitted for this body.
         * @param end `true` if you want the sleep end event to be emitted for this body.
         */
        setSleepEvents(start: boolean, end: boolean): this;
        /**
         * Enables or disables the Sleep Start event for this body.
         * @param value `true` to enable the sleep event, or `false` to disable it.
         */
        setSleepStartEvent(value: boolean): this;
        /**
         * Enables or disables the Sleep End event for this body.
         * @param value `true` to enable the sleep event, or `false` to disable it.
         */
        setSleepEndEvent(value: boolean): this;
      }

      /**
       * Provides methods used for getting and setting the static state of a physics body.
       */
      interface Static {
        /**
         * Changes the physics body to be either static `true` or dynamic `false`.
         * @param value `true` to set the body as being static, or `false` to make it dynamic.
         */
        setStatic(value: boolean): Phaser.GameObjects.GameObject;
        /**
         * Returns `true` if the body is static, otherwise `false` for a dynamic body.
         */
        isStatic(): boolean;
      }

      /**
       * Provides methods used for getting and setting the position, scale and rotation of a Game Object.
       */
      interface Transform {
        /**
         * The x position of this Game Object.
         */
        x: number;
        /**
         * The y position of this Game Object.
         */
        y: number;
        /**
         * The horizontal scale of this Game Object.
         */
        scaleX: number;
        /**
         * The vertical scale of this Game Object.
         */
        scaleY: number;
        /**
         * Use `angle` to set or get rotation of the physics body associated to this GameObject.
         * Unlike rotation, when using set the value can be in degrees, which will be converted to radians internally.
         */
        angle: number;
        /**
         * Use `rotation` to set or get the rotation of the physics body associated with this GameObject.
         * The value when set must be in radians.
         */
        rotation: number;
        /**
         * Sets the position of the physics body along x and y axes.
         * Both the parameters to this function are optional and if not passed any they default to 0.
         * Velocity, angle, force etc. are unchanged.
         * @param x The horizontal position of the body. Default 0.
         * @param y The vertical position of the body. Default x.
         */
        setPosition(x?: number, y?: number): this;
        /**
         * Immediately sets the angle of the Body.
         * Angular velocity, position, force etc. are unchanged.
         * @param radians The angle of the body, in radians. Default 0.
         */
        setRotation(radians?: number): this;
        /**
         * Setting fixed rotation sets the Body inertia to Infinity, which stops it
         * from being able to rotate when forces are applied to it.
         */
        setFixedRotation(): this;
        /**
         * Immediately sets the angle of the Body.
         * Angular velocity, position, force etc. are unchanged.
         * @param degrees The angle to set, in degrees. Default 0.
         */
        setAngle(degrees?: number): this;
        /**
         * Sets the scale of this Game Object.
         * @param x The horizontal scale of this Game Object. Default 1.
         * @param y The vertical scale of this Game Object. If not set it will use the x value. Default x.
         * @param point The point (Vector2) from which scaling will occur.
         */
        setScale(x?: number, y?: number, point?: Phaser.Math.Vector2): this;
      }

      /**
       * Contains methods for changing the velocity of a Matter Body. Should be used as a mixin and not called directly.
       */
      interface Velocity {
        /**
         * Sets the angular velocity of the body instantly.
         * Position, angle, force etc. are unchanged.
         * @param value The angular velocity.
         */
        setAngularVelocity(value: number): Phaser.GameObjects.GameObject;
        /**
         * Sets the horizontal velocity of the physics body.
         * @param x The horizontal velocity value.
         */
        setVelocityX(x: number): Phaser.GameObjects.GameObject;
        /**
         * Sets vertical velocity of the physics body.
         * @param y The vertical velocity value.
         */
        setVelocityY(y: number): Phaser.GameObjects.GameObject;
        /**
         * Sets both the horizontal and vertical velocity of the physics body.
         * @param x The horizontal velocity value.
         * @param y The vertical velocity value, it can be either positive or negative. If not given, it will be the same as the `x` value. Default x.
         */
        setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;
      }

    }

    namespace Matter {
    }

    namespace Events {
      type AfterAddEvent = {
        /**
         * An array of the object(s) that have been added. May be a single body, constraint, composite or a mixture of these.
         */
        object: any[];
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics After Add Event.
       *
       * This event is dispatched by a Matter Physics World instance at the end of the process when a new Body
       * or Constraint has just been added to the world.
       *
       * Listen to it from a Scene using: `this.matter.world.on('afteradd', listener)`.
       */
      const AFTER_ADD: any;

      type AfterRemoveEvent = {
        /**
         * An array of the object(s) that were removed. May be a single body, constraint, composite or a mixture of these.
         */
        object: any[];
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics After Remove Event.
       *
       * This event is dispatched by a Matter Physics World instance at the end of the process when a
       * Body or Constraint was removed from the world.
       *
       * Listen to it from a Scene using: `this.matter.world.on('afterremove', listener)`.
       */
      const AFTER_REMOVE: any;

      type AfterUpdateEvent = {
        /**
         * The Matter Engine `timing.timestamp` value for the event.
         */
        timestamp: number;
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics After Update Event.
       *
       * This event is dispatched by a Matter Physics World instance after the engine has updated and all collision events have resolved.
       *
       * Listen to it from a Scene using: `this.matter.world.on('afterupdate', listener)`.
       */
      const AFTER_UPDATE: any;

      type BeforeAddEvent = {
        /**
         * An array of the object(s) to be added. May be a single body, constraint, composite or a mixture of these.
         */
        object: any[];
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics Before Add Event.
       *
       * This event is dispatched by a Matter Physics World instance at the start of the process when a new Body
       * or Constraint is being added to the world.
       *
       * Listen to it from a Scene using: `this.matter.world.on('beforeadd', listener)`.
       */
      const BEFORE_ADD: any;

      type BeforeRemoveEvent = {
        /**
         * An array of the object(s) to be removed. May be a single body, constraint, composite or a mixture of these.
         */
        object: any[];
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics Before Remove Event.
       *
       * This event is dispatched by a Matter Physics World instance at the start of the process when a
       * Body or Constraint is being removed from the world.
       *
       * Listen to it from a Scene using: `this.matter.world.on('beforeremove', listener)`.
       */
      const BEFORE_REMOVE: any;

      type BeforeUpdateEvent = {
        /**
         * The Matter Engine `timing.timestamp` value for the event.
         */
        timestamp: number;
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics Before Update Event.
       *
       * This event is dispatched by a Matter Physics World instance right before all the collision processing takes place.
       *
       * Listen to it from a Scene using: `this.matter.world.on('beforeupdate', listener)`.
       */
      const BEFORE_UPDATE: any;

      type CollisionActiveEvent = {
        /**
         * A list of all affected pairs in the collision.
         */
        pairs: Phaser.Types.Physics.Matter.MatterCollisionData[];
        /**
         * The Matter Engine `timing.timestamp` value for the event.
         */
        timestamp: number;
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics Collision Active Event.
       *
       * This event is dispatched by a Matter Physics World instance after the engine has updated.
       * It provides a list of all pairs that are colliding in the current tick (if any).
       *
       * Listen to it from a Scene using: `this.matter.world.on('collisionactive', listener)`.
       */
      const COLLISION_ACTIVE: any;

      type CollisionEndEvent = {
        /**
         * A list of all affected pairs in the collision.
         */
        pairs: Phaser.Types.Physics.Matter.MatterCollisionData[];
        /**
         * The Matter Engine `timing.timestamp` value for the event.
         */
        timestamp: number;
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics Collision End Event.
       *
       * This event is dispatched by a Matter Physics World instance after the engine has updated.
       * It provides a list of all pairs that have finished colliding in the current tick (if any).
       *
       * Listen to it from a Scene using: `this.matter.world.on('collisionend', listener)`.
       */
      const COLLISION_END: any;

      type CollisionStartEvent = {
        /**
         * A list of all affected pairs in the collision.
         */
        pairs: Phaser.Types.Physics.Matter.MatterCollisionData[];
        /**
         * The Matter Engine `timing.timestamp` value for the event.
         */
        timestamp: number;
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics Collision Start Event.
       *
       * This event is dispatched by a Matter Physics World instance after the engine has updated.
       * It provides a list of all pairs that have started to collide in the current tick (if any).
       *
       * Listen to it from a Scene using: `this.matter.world.on('collisionstart', listener)`.
       */
      const COLLISION_START: any;

      /**
       * The Matter Physics Drag End Event.
       *
       * This event is dispatched by a Matter Physics World instance when a Pointer Constraint
       * stops dragging a body.
       *
       * Listen to it from a Scene using: `this.matter.world.on('dragend', listener)`.
       */
      const DRAG_END: any;

      /**
       * The Matter Physics Drag Event.
       *
       * This event is dispatched by a Matter Physics World instance when a Pointer Constraint
       * is actively dragging a body. It is emitted each time the pointer moves.
       *
       * Listen to it from a Scene using: `this.matter.world.on('drag', listener)`.
       */
      const DRAG: any;

      /**
       * The Matter Physics Drag Start Event.
       *
       * This event is dispatched by a Matter Physics World instance when a Pointer Constraint
       * starts dragging a body.
       *
       * Listen to it from a Scene using: `this.matter.world.on('dragstart', listener)`.
       */
      const DRAG_START: any;

      /**
       * The Matter Physics World Pause Event.
       *
       * This event is dispatched by an Matter Physics World instance when it is paused.
       *
       * Listen to it from a Scene using: `this.matter.world.on('pause', listener)`.
       */
      const PAUSE: any;

      /**
       * The Matter Physics World Resume Event.
       *
       * This event is dispatched by an Matter Physics World instance when it resumes from a paused state.
       *
       * Listen to it from a Scene using: `this.matter.world.on('resume', listener)`.
       */
      const RESUME: any;

      type SleepEndEvent = {
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics Sleep End Event.
       *
       * This event is dispatched by a Matter Physics World instance when a Body stop sleeping.
       *
       * Listen to it from a Scene using: `this.matter.world.on('sleepend', listener)`.
       */
      const SLEEP_END: any;

      type SleepStartEvent = {
        /**
         * The source object of the event.
         */
        source: any;
        /**
         * The name of the event.
         */
        name: string;
      };

      /**
       * The Matter Physics Sleep Start Event.
       *
       * This event is dispatched by a Matter Physics World instance when a Body goes to sleep.
       *
       * Listen to it from a Scene using: `this.matter.world.on('sleepstart', listener)`.
       */
      const SLEEP_START: any;

    }

    /**
     * The Matter Factory is responsible for quickly creating a variety of different types of
     * bodies, constraints and Game Objects and adding them into the physics world.
     *
     * You access the factory from within a Scene using `add`:
     *
     * ```javascript
     * this.matter.add.rectangle(x, y, width, height);
     * ```
     *
     * Use of the Factory is optional. All of the objects it creates can also be created
     * directly via your own code or constructors. It is provided as a means to keep your
     * code concise.
     */
    class Factory {
      /**
       *
       * @param world The Matter World which this Factory adds to.
       */
      constructor(world: Phaser.Physics.Matter.World);

      /**
       * The Matter World which this Factory adds to.
       */
      world: Phaser.Physics.Matter.World;

      /**
       * The Scene which this Factory's Matter World belongs to.
       */
      scene: Phaser.Scene;

      /**
       * A reference to the Scene.Systems this Matter Physics instance belongs to.
       */
      sys: Phaser.Scenes.Systems;

      /**
       * Creates a new rigid rectangular Body and adds it to the World.
       * @param x The X coordinate of the center of the Body.
       * @param y The Y coordinate of the center of the Body.
       * @param width The width of the Body.
       * @param height The height of the Body.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      rectangle(x: number, y: number, width: number, height: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): MatterJS.BodyType;

      /**
       * Creates a new rigid trapezoidal Body and adds it to the World.
       * @param x The X coordinate of the center of the Body.
       * @param y The Y coordinate of the center of the Body.
       * @param width The width of the trapezoid Body.
       * @param height The height of the trapezoid Body.
       * @param slope The slope of the trapezoid. 0 creates a rectangle, while 1 creates a triangle. Positive values make the top side shorter, while negative values make the bottom side shorter.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      trapezoid(x: number, y: number, width: number, height: number, slope: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): MatterJS.BodyType;

      /**
       * Creates a new rigid circular Body and adds it to the World.
       * @param x The X coordinate of the center of the Body.
       * @param y The Y coordinate of the center of the Body.
       * @param radius The radius of the circle.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       * @param maxSides The maximum amount of sides to use for the polygon which will approximate this circle.
       */
      circle(x: number, y: number, radius: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig, maxSides?: number): MatterJS.BodyType;

      /**
       * Creates a new rigid polygonal Body and adds it to the World.
       * @param x The X coordinate of the center of the Body.
       * @param y The Y coordinate of the center of the Body.
       * @param sides The number of sides the polygon will have.
       * @param radius The "radius" of the polygon, i.e. the distance from its center to any vertex. This is also the radius of its circumcircle.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      polygon(x: number, y: number, sides: number, radius: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): MatterJS.BodyType;

      /**
       * Creates a body using the supplied vertices (or an array containing multiple sets of vertices) and adds it to the World.
       * If the vertices are convex, they will pass through as supplied. Otherwise, if the vertices are concave, they will be decomposed. Note that this process is not guaranteed to support complex sets of vertices, e.g. ones with holes.
       * @param x The X coordinate of the center of the Body.
       * @param y The Y coordinate of the center of the Body.
       * @param vertexSets The vertices data. Either a path string or an array of vertices.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       * @param flagInternal Flag internal edges (coincident part edges) Default false.
       * @param removeCollinear Whether Matter.js will discard collinear edges (to improve performance). Default 0.01.
       * @param minimumArea During decomposition discard parts that have an area less than this. Default 10.
       */
      fromVertices(x: number, y: number, vertexSets: string | any[], options?: Phaser.Types.Physics.Matter.MatterBodyConfig, flagInternal?: boolean, removeCollinear?: number, minimumArea?: number): MatterJS.BodyType;

      /**
       * Creates a body using data exported from the application PhysicsEditor (https://www.codeandweb.com/physicseditor)
       *
       * The PhysicsEditor file should be loaded as JSON:
       *
       * ```javascript
       * preload ()
       * {
       *   this.load.json('vehicles', 'assets/vehicles.json);
       * }
       *
       * create ()
       * {
       *   const vehicleShapes = this.cache.json.get('vehicles');
       *   this.matter.add.fromPhysicsEditor(400, 300, vehicleShapes.truck);
       * }
       * ```
       *
       * Do not pass the entire JSON file to this method, but instead pass one of the shapes contained within it.
       *
       * If you pas in an `options` object, any settings in there will override those in the PhysicsEditor config object.
       * @param x The horizontal world location of the body.
       * @param y The vertical world location of the body.
       * @param config The JSON data exported from PhysicsEditor.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       * @param addToWorld Should the newly created body be immediately added to the World? Default true.
       */
      fromPhysicsEditor(x: number, y: number, config: any, options?: Phaser.Types.Physics.Matter.MatterBodyConfig, addToWorld?: boolean): MatterJS.BodyType;

      /**
       * Creates a body using the path data from an SVG file.
       *
       * SVG Parsing requires the pathseg polyfill from https://github.com/progers/pathseg
       *
       * The SVG file should be loaded as XML, as this method requires the ability to extract
       * the path data from it. I.e.:
       *
       * ```javascript
       * preload ()
       * {
       *   this.load.xml('face', 'assets/face.svg);
       * }
       *
       * create ()
       * {
       *   this.matter.add.fromSVG(400, 300, this.cache.xml.get('face'));
       * }
       * ```
       * @param x The X coordinate of the body.
       * @param y The Y coordinate of the body.
       * @param xml The SVG Path data.
       * @param scale Scale the vertices by this amount after creation. Default 1.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       * @param addToWorld Should the newly created body be immediately added to the World? Default true.
       */
      fromSVG(x: number, y: number, xml: object, scale?: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig, addToWorld?: boolean): MatterJS.BodyType;

      /**
       * Creates a body using the supplied physics data, as provided by a JSON file.
       *
       * The data file should be loaded as JSON:
       *
       * ```javascript
       * preload ()
       * {
       *   this.load.json('ninjas', 'assets/ninjas.json);
       * }
       *
       * create ()
       * {
       *   const ninjaShapes = this.cache.json.get('ninjas');
       *
       *   this.matter.add.fromJSON(400, 300, ninjaShapes.shinobi);
       * }
       * ```
       *
       * Do not pass the entire JSON file to this method, but instead pass one of the shapes contained within it.
       *
       * If you pas in an `options` object, any settings in there will override those in the config object.
       *
       * The structure of the JSON file is as follows:
       *
       * ```text
       * {
       *   'generator_info': // The name of the application that created the JSON data
       *   'shapeName': {
       *     'type': // The type of body
       *     'label': // Optional body label
       *     'vertices': // An array, or an array of arrays, containing the vertex data in x/y object pairs
       *   }
       * }
       * ```
       *
       * At the time of writing, only the Phaser Physics Tracer App exports in this format.
       * @param x The X coordinate of the body.
       * @param y The Y coordinate of the body.
       * @param config The JSON physics data.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       * @param addToWorld Should the newly created body be immediately added to the World? Default true.
       */
      fromJSON(x: number, y: number, config: any, options?: Phaser.Types.Physics.Matter.MatterBodyConfig, addToWorld?: boolean): MatterJS.BodyType;

      /**
       * Create a new composite containing Matter Image objects created in a grid arrangement.
       * This function uses the body bounds to prevent overlaps.
       * @param key The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with. Set to `null` to skip this value.
       * @param x The horizontal position of this composite in the world.
       * @param y The vertical position of this composite in the world.
       * @param columns The number of columns in the grid.
       * @param rows The number of rows in the grid.
       * @param columnGap The distance between each column. Default 0.
       * @param rowGap The distance between each row. Default 0.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      imageStack(key: string, frame: string | number, x: number, y: number, columns: number, rows: number, columnGap?: number, rowGap?: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): MatterJS.CompositeType;

      /**
       * Create a new composite containing bodies created in the callback in a grid arrangement.
       *
       * This function uses the body bounds to prevent overlaps.
       * @param x The horizontal position of this composite in the world.
       * @param y The vertical position of this composite in the world.
       * @param columns The number of columns in the grid.
       * @param rows The number of rows in the grid.
       * @param columnGap The distance between each column.
       * @param rowGap The distance between each row.
       * @param callback The callback that creates the stack.
       */
      stack(x: number, y: number, columns: number, rows: number, columnGap: number, rowGap: number, callback: Function): MatterJS.CompositeType;

      /**
       * Create a new composite containing bodies created in the callback in a pyramid arrangement.
       * This function uses the body bounds to prevent overlaps.
       * @param x The horizontal position of this composite in the world.
       * @param y The vertical position of this composite in the world.
       * @param columns The number of columns in the pyramid.
       * @param rows The number of rows in the pyramid.
       * @param columnGap The distance between each column.
       * @param rowGap The distance between each row.
       * @param callback The callback function to be invoked.
       */
      pyramid(x: number, y: number, columns: number, rows: number, columnGap: number, rowGap: number, callback: Function): MatterJS.CompositeType;

      /**
       * Chains all bodies in the given composite together using constraints.
       * @param composite The composite in which all bodies will be chained together sequentially.
       * @param xOffsetA The horizontal offset of the BodyA constraint. This is a percentage based on the body size, not a world position.
       * @param yOffsetA The vertical offset of the BodyA constraint. This is a percentage based on the body size, not a world position.
       * @param xOffsetB The horizontal offset of the BodyB constraint. This is a percentage based on the body size, not a world position.
       * @param yOffsetB The vertical offset of the BodyB constraint. This is a percentage based on the body size, not a world position.
       * @param options An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      chain(composite: MatterJS.CompositeType, xOffsetA: number, yOffsetA: number, xOffsetB: number, yOffsetB: number, options?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.CompositeType;

      /**
       * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
       * @param composite The composite in which all bodies will be chained together.
       * @param columns The number of columns in the mesh.
       * @param rows The number of rows in the mesh.
       * @param crossBrace Create cross braces for the mesh as well?
       * @param options An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      mesh(composite: MatterJS.CompositeType, columns: number, rows: number, crossBrace: boolean, options?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.CompositeType;

      /**
       * Creates a composite with a Newton's Cradle setup of bodies and constraints.
       * @param x The horizontal position of the start of the cradle.
       * @param y The vertical position of the start of the cradle.
       * @param number The number of balls in the cradle.
       * @param size The radius of each ball in the cradle.
       * @param length The length of the 'string' the balls hang from.
       */
      newtonsCradle(x: number, y: number, number: number, size: number, length: number): MatterJS.CompositeType;

      /**
       * Creates a composite with simple car setup of bodies and constraints.
       * @param x The horizontal position of the car in the world.
       * @param y The vertical position of the car in the world.
       * @param width The width of the car chasis.
       * @param height The height of the car chasis.
       * @param wheelSize The radius of the car wheels.
       */
      car(x: number, y: number, width: number, height: number, wheelSize: number): MatterJS.CompositeType;

      /**
       * Creates a simple soft body like object.
       * @param x The horizontal position of this composite in the world.
       * @param y The vertical position of this composite in the world.
       * @param columns The number of columns in the Composite.
       * @param rows The number of rows in the Composite.
       * @param columnGap The distance between each column.
       * @param rowGap The distance between each row.
       * @param crossBrace `true` to create cross braces between the bodies, or `false` to create just straight braces.
       * @param particleRadius The radius of this circlular composite.
       * @param particleOptions An optional Body configuration object that is used to set initial Body properties on creation.
       * @param constraintOptions An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      softBody(x: number, y: number, columns: number, rows: number, columnGap: number, rowGap: number, crossBrace: boolean, particleRadius: number, particleOptions?: Phaser.Types.Physics.Matter.MatterBodyConfig, constraintOptions?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.CompositeType;

      /**
       * This method is an alias for `Factory.constraint`.
       *
       * Constraints (or joints) are used for specifying that a fixed distance must be maintained
       * between two bodies, or a body and a fixed world-space position.
       *
       * The stiffness of constraints can be modified to create springs or elastic.
       *
       * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness`
       * value (e.g. `0.7` or above).
       *
       * If the constraint is unstable, try lowering the `stiffness` value and / or increasing
       * `constraintIterations` within the Matter Config.
       *
       * For compound bodies, constraints must be applied to the parent body and not one of its parts.
       * @param bodyA The first possible `Body` that this constraint is attached to.
       * @param bodyB The second possible `Body` that this constraint is attached to.
       * @param length A Number that specifies the target resting length of the constraint. If not given it is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
       * @param stiffness A Number that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`. A value of `1` means the constraint should be very stiff. A value of `0.2` means the constraint acts as a soft spring. Default 1.
       * @param options An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      joint(bodyA: MatterJS.BodyType, bodyB: MatterJS.BodyType, length?: number, stiffness?: number, options?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.ConstraintType;

      /**
       * This method is an alias for `Factory.constraint`.
       *
       * Constraints (or joints) are used for specifying that a fixed distance must be maintained
       * between two bodies, or a body and a fixed world-space position.
       *
       * The stiffness of constraints can be modified to create springs or elastic.
       *
       * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness`
       * value (e.g. `0.7` or above).
       *
       * If the constraint is unstable, try lowering the `stiffness` value and / or increasing
       * `constraintIterations` within the Matter Config.
       *
       * For compound bodies, constraints must be applied to the parent body and not one of its parts.
       * @param bodyA The first possible `Body` that this constraint is attached to.
       * @param bodyB The second possible `Body` that this constraint is attached to.
       * @param length A Number that specifies the target resting length of the constraint. If not given it is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
       * @param stiffness A Number that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`. A value of `1` means the constraint should be very stiff. A value of `0.2` means the constraint acts as a soft spring. Default 1.
       * @param options An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      spring(bodyA: MatterJS.BodyType, bodyB: MatterJS.BodyType, length?: number, stiffness?: number, options?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.ConstraintType;

      /**
       * Constraints (or joints) are used for specifying that a fixed distance must be maintained
       * between two bodies, or a body and a fixed world-space position.
       *
       * The stiffness of constraints can be modified to create springs or elastic.
       *
       * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness`
       * value (e.g. `0.7` or above).
       *
       * If the constraint is unstable, try lowering the `stiffness` value and / or increasing
       * `constraintIterations` within the Matter Config.
       *
       * For compound bodies, constraints must be applied to the parent body and not one of its parts.
       * @param bodyA The first possible `Body` that this constraint is attached to.
       * @param bodyB The second possible `Body` that this constraint is attached to.
       * @param length A Number that specifies the target resting length of the constraint. If not given it is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
       * @param stiffness A Number that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`. A value of `1` means the constraint should be very stiff. A value of `0.2` means the constraint acts as a soft spring. Default 1.
       * @param options An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      constraint(bodyA: MatterJS.BodyType, bodyB: MatterJS.BodyType, length?: number, stiffness?: number, options?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.ConstraintType;

      /**
       * Constraints (or joints) are used for specifying that a fixed distance must be maintained
       * between two bodies, or a body and a fixed world-space position.
       *
       * A world constraint has only one body, you should specify a `pointA` position in
       * the constraint options parameter to attach the constraint to the world.
       *
       * The stiffness of constraints can be modified to create springs or elastic.
       *
       * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness`
       * value (e.g. `0.7` or above).
       *
       * If the constraint is unstable, try lowering the `stiffness` value and / or increasing
       * `constraintIterations` within the Matter Config.
       *
       * For compound bodies, constraints must be applied to the parent body and not one of its parts.
       * @param body The Matter `Body` that this constraint is attached to.
       * @param length A number that specifies the target resting length of the constraint. If not given it is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
       * @param stiffness A Number that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`. A value of `1` means the constraint should be very stiff. A value of `0.2` means the constraint acts as a soft spring. Default 1.
       * @param options An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      worldConstraint(body: MatterJS.BodyType, length?: number, stiffness?: number, options?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.ConstraintType;

      /**
       * This method is an alias for `Factory.pointerConstraint`.
       *
       * A Pointer Constraint is a special type of constraint that allows you to click
       * and drag bodies in a Matter World. It monitors the active Pointers in a Scene,
       * and when one is pressed down it checks to see if that hit any part of any active
       * body in the world. If it did, and the body has input enabled, it will begin to
       * drag it until either released, or you stop it via the `stopDrag` method.
       *
       * You can adjust the stiffness, length and other properties of the constraint via
       * the `options` object on creation.
       * @param options An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      mouseSpring(options?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.ConstraintType;

      /**
       * A Pointer Constraint is a special type of constraint that allows you to click
       * and drag bodies in a Matter World. It monitors the active Pointers in a Scene,
       * and when one is pressed down it checks to see if that hit any part of any active
       * body in the world. If it did, and the body has input enabled, it will begin to
       * drag it until either released, or you stop it via the `stopDrag` method.
       *
       * You can adjust the stiffness, length and other properties of the constraint via
       * the `options` object on creation.
       * @param options An optional Constraint configuration object that is used to set initial Constraint properties on creation.
       */
      pointerConstraint(options?: Phaser.Types.Physics.Matter.MatterConstraintConfig): MatterJS.ConstraintType;

      /**
       * Creates a Matter Physics Image Game Object.
       *
       * An Image is a light-weight Game Object useful for the display of static images in your game,
       * such as logos, backgrounds, scenery or other non-animated elements. Images can have input
       * events and physics bodies, or be tweened, tinted or scrolled. The main difference between an
       * Image and a Sprite is that you cannot animate an Image as they do not have the Animation component.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param key The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with. Set to `null` to skip this value.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      image(x: number, y: number, key: string, frame?: string | number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.Physics.Matter.Image;

      /**
       * Creates a wrapper around a Tile that provides access to a corresponding Matter body. A tile can only
       * have one Matter body associated with it. You can either pass in an existing Matter body for
       * the tile or allow the constructor to create the corresponding body for you. If the Tile has a
       * collision group (defined in Tiled), those shapes will be used to create the body. If not, the
       * tile's rectangle bounding box will be used.
       *
       * The corresponding body will be accessible on the Tile itself via Tile.physics.matterBody.
       *
       * Note: not all Tiled collision shapes are supported. See
       * Phaser.Physics.Matter.TileBody#setFromTileCollision for more information.
       * @param tile The target tile that should have a Matter body.
       * @param options Options to be used when creating the Matter body.
       */
      tileBody(tile: Phaser.Tilemaps.Tile, options?: Phaser.Types.Physics.Matter.MatterTileOptions): Phaser.Physics.Matter.TileBody;

      /**
       * Creates a Matter Physics Sprite Game Object.
       *
       * A Sprite Game Object is used for the display of both static and animated images in your game.
       * Sprites can have input events and physics bodies. They can also be tweened, tinted, scrolled
       * and animated.
       *
       * The main difference between a Sprite and an Image Game Object is that you cannot animate Images.
       * As such, Sprites take a fraction longer to process and have a larger API footprint due to the Animation
       * Component. If you do not require animation then you can safely use Images to replace Sprites in all cases.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param key The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with. Set to `null` to skip this value.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      sprite(x: number, y: number, key: string, frame?: string | number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.Physics.Matter.Sprite;

      /**
       * Takes an existing Game Object and injects all of the Matter Components into it.
       *
       * This enables you to use component methods such as `setVelocity` or `isSensor` directly from
       * this Game Object.
       *
       * You can also pass in either a Matter Body Configuration object, or a Matter Body instance
       * to link with this Game Object.
       * @param gameObject The Game Object to inject the Matter Components in to.
       * @param options A Matter Body configuration object, or an instance of a Matter Body.
       * @param addToWorld Add this Matter Body to the World? Default true.
       */
      gameObject(gameObject: Phaser.GameObjects.GameObject, options?: Phaser.Types.Physics.Matter.MatterBodyConfig | MatterJS.Body, addToWorld?: boolean): Phaser.Physics.Matter.Image | Phaser.Physics.Matter.Sprite | Phaser.GameObjects.GameObject;

      /**
       * Destroys this Factory.
       */
      destroy(): void;

    }

    /**
     * A Matter Game Object is a generic object that allows you to combine any Phaser Game Object,
     * including those you have extended or created yourself, with all of the Matter Components.
     *
     * This enables you to use component methods such as `setVelocity` or `isSensor` directly from
     * this Game Object.
     * @param world The Matter world to add the body to.
     * @param gameObject The Game Object that will have the Matter body applied to it.
     * @param options A Matter Body configuration object, or an instance of a Matter Body.
     * @param addToWorld Should the newly created body be immediately added to the World? Default true.
     */
    function MatterGameObject(world: Phaser.Physics.Matter.World, gameObject: Phaser.GameObjects.GameObject, options?: Phaser.Types.Physics.Matter.MatterBodyConfig | MatterJS.Body, addToWorld?: boolean): Phaser.GameObjects.GameObject;

    /**
     * A Matter Physics Image Game Object.
     *
     * An Image is a light-weight Game Object useful for the display of static images in your game,
     * such as logos, backgrounds, scenery or other non-animated elements. Images can have input
     * events and physics bodies, or be tweened, tinted or scrolled. The main difference between an
     * Image and a Sprite is that you cannot animate an Image as they do not have the Animation component.
     */
    class Image extends Phaser.GameObjects.Image implements Phaser.Physics.Matter.Components.Bounce, Phaser.Physics.Matter.Components.Collision, Phaser.Physics.Matter.Components.Force, Phaser.Physics.Matter.Components.Friction, Phaser.Physics.Matter.Components.Gravity, Phaser.Physics.Matter.Components.Mass, Phaser.Physics.Matter.Components.Sensor, Phaser.Physics.Matter.Components.SetBody, Phaser.Physics.Matter.Components.Sleep, Phaser.Physics.Matter.Components.Static, Phaser.Physics.Matter.Components.Transform, Phaser.Physics.Matter.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
      /**
       *
       * @param world A reference to the Matter.World instance that this body belongs to.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param texture The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig);

      /**
       * A reference to the Matter.World instance that this body belongs to.
       */
      world: Phaser.Physics.Matter.World;

      /**
       * Clears all alpha values associated with this Game Object.
       *
       * Immediately sets the alpha levels back to 1 (fully opaque).
       */
      clearAlpha(): this;

      /**
       * Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
       * Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.
       *
       * If your game is running under WebGL you can optionally specify four different alpha values, each of which
       * correspond to the four corners of the Game Object. Under Canvas only the `topLeft` value given is used.
       * @param topLeft The alpha value used for the top-left of the Game Object. If this is the only value given it's applied across the whole Game Object. Default 1.
       * @param topRight The alpha value used for the top-right of the Game Object. WebGL only.
       * @param bottomLeft The alpha value used for the bottom-left of the Game Object. WebGL only.
       * @param bottomRight The alpha value used for the bottom-right of the Game Object. WebGL only.
       */
      setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

      /**
       * The alpha value of the Game Object.
       *
       * This is a global value, impacting the entire Game Object, not just a region of it.
       */
      alpha: number;

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
       * Sets the Blend Mode being used by this Game Object.
       *
       * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
       *
       * Under WebGL only the following Blend Modes are available:
       *
       * * ADD
       * * MULTIPLY
       * * SCREEN
       * * ERASE
       *
       * Canvas has more available depending on browser support.
       *
       * You can also create your own custom Blend Modes in WebGL.
       *
       * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
       * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
       * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
       * are used.
       */
      blendMode: Phaser.BlendModes | string;

      /**
       * Sets the Blend Mode being used by this Game Object.
       *
       * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
       *
       * Under WebGL only the following Blend Modes are available:
       *
       * * ADD
       * * MULTIPLY
       * * SCREEN
       * * ERASE (only works when rendering to a framebuffer, like a Render Texture)
       *
       * Canvas has more available depending on browser support.
       *
       * You can also create your own custom Blend Modes in WebGL.
       *
       * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
       * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
       * reasons try to be careful about the construction of your Scene and the frequency in which blend modes
       * are used.
       * @param value The BlendMode value. Either a string or a CONST.
       */
      setBlendMode(value: string | Phaser.BlendModes): this;

      /**
       * The depth of this Game Object within the Scene.
       *
       * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
       * of Game Objects, without actually moving their position in the display list.
       *
       * The default depth is zero. A Game Object with a higher depth
       * value will always render in front of one with a lower value.
       *
       * Setting the depth will queue a depth sort event within the Scene.
       */
      depth: number;

      /**
       * The depth of this Game Object within the Scene.
       *
       * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
       * of Game Objects, without actually moving their position in the display list.
       *
       * The default depth is zero. A Game Object with a higher depth
       * value will always render in front of one with a lower value.
       *
       * Setting the depth will queue a depth sort event within the Scene.
       * @param value The depth of this Game Object.
       */
      setDepth(value: number): this;

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
       * Gets the center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       */
      getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

      /**
       * Gets the top-left corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the top-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the top-right corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the left-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getLeftCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the right-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getRightCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-left corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-right corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bounds of this Game Object, regardless of origin.
       * The values are stored and returned in a Rectangle, or Rectangle-like, object.
       * @param output An object to store the values in. If not provided a new Rectangle will be created.
       */
      getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

      /**
       * The Mask this Game Object is using during render.
       */
      mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

      /**
       * Sets the mask that this Game Object will use to render with.
       *
       * The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
       * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * If a mask is already set on this Game Object it will be immediately replaced.
       *
       * Masks are positioned in global space and are not relative to the Game Object to which they
       * are applied. The reason for this is that multiple Game Objects can all share the same mask.
       *
       * Masks have no impact on physics or input detection. They are purely a rendering component
       * that allows you to limit what is visible during the render pass.
       * @param mask The mask this Game Object will use when rendering.
       */
      setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

      /**
       * Clears the mask that this Game Object was using.
       * @param destroyMask Destroy the mask before clearing it? Default false.
       */
      clearMask(destroyMask?: boolean): this;

      /**
       * Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
       * including this one.
       *
       * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * To create the mask you need to pass in a reference to a renderable Game Object.
       * A renderable Game Object is one that uses a texture to render with, such as an
       * Image, Sprite, Render Texture or BitmapText.
       *
       * If you do not provide a renderable object, and this Game Object has a texture,
       * it will use itself as the object. This means you can call this method to create
       * a Bitmap Mask from any renderable Game Object.
       * @param renderable A renderable Game Object that uses a texture, such as a Sprite.
       */
      createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

      /**
       * Creates and returns a Geometry Mask. This mask can be used by any Game Object,
       * including this one.
       *
       * To create the mask you need to pass in a reference to a Graphics Game Object.
       *
       * If you do not provide a graphics object, and this Game Object is an instance
       * of a Graphics object, then it will use itself to create the mask.
       *
       * This means you can call this method to create a Geometry Mask from any Graphics Game Object.
       * @param graphics A Graphics Game Object. The geometry within it will be used as the mask.
       */
      createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

      /**
       * The horizontal origin of this Game Object.
       * The origin maps the relationship between the size and position of the Game Object.
       * The default value is 0.5, meaning all Game Objects are positioned based on their center.
       * Setting the value to 0 means the position now relates to the left of the Game Object.
       */
      originX: number;

      /**
       * The vertical origin of this Game Object.
       * The origin maps the relationship between the size and position of the Game Object.
       * The default value is 0.5, meaning all Game Objects are positioned based on their center.
       * Setting the value to 0 means the position now relates to the top of the Game Object.
       */
      originY: number;

      /**
       * The horizontal display origin of this Game Object.
       * The origin is a normalized value between 0 and 1.
       * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
       */
      displayOriginX: number;

      /**
       * The vertical display origin of this Game Object.
       * The origin is a normalized value between 0 and 1.
       * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
       */
      displayOriginY: number;

      /**
       * Sets the origin of this Game Object.
       *
       * The values are given in the range 0 to 1.
       * @param x The horizontal origin value. Default 0.5.
       * @param y The vertical origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setOrigin(x?: number, y?: number): this;

      /**
       * Sets the origin of this Game Object based on the Pivot values in its Frame.
       */
      setOriginFromFrame(): this;

      /**
       * Sets the display origin of this Game Object.
       * The difference between this and setting the origin is that you can use pixel values for setting the display origin.
       * @param x The horizontal display origin value. Default 0.
       * @param y The vertical display origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setDisplayOrigin(x?: number, y?: number): this;

      /**
       * Updates the Display Origin cached values internally stored on this Game Object.
       * You don't usually call this directly, but it is exposed for edge-cases where you may.
       */
      updateDisplayOrigin(): this;

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

      /**
       * The horizontal scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       */
      scrollFactorX: number;

      /**
       * The vertical scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       */
      scrollFactorY: number;

      /**
       * Sets the scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       * @param x The horizontal scroll factor of this Game Object.
       * @param y The vertical scroll factor of this Game Object. If not set it will use the `x` value. Default x.
       */
      setScrollFactor(x: number, y?: number): this;

      /**
       * The native (un-scaled) width of this Game Object.
       *
       * Changing this value will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or use
       * the `displayWidth` property.
       */
      width: number;

      /**
       * The native (un-scaled) height of this Game Object.
       *
       * Changing this value will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or use
       * the `displayHeight` property.
       */
      height: number;

      /**
       * The displayed width of this Game Object.
       *
       * This value takes into account the scale factor.
       *
       * Setting this value will adjust the Game Object's scale property.
       */
      displayWidth: number;

      /**
       * The displayed height of this Game Object.
       *
       * This value takes into account the scale factor.
       *
       * Setting this value will adjust the Game Object's scale property.
       */
      displayHeight: number;

      /**
       * Sets the size of this Game Object to be that of the given Frame.
       *
       * This will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or call the
       * `setDisplaySize` method, which is the same thing as changing the scale but allows you
       * to do so by giving pixel values.
       *
       * If you have enabled this Game Object for input, changing the size will _not_ change the
       * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
       * @param frame The frame to base the size of this Game Object on.
       */
      setSizeToFrame(frame: Phaser.Textures.Frame): this;

      /**
       * Sets the internal size of this Game Object, as used for frame or physics body creation.
       *
       * This will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or call the
       * `setDisplaySize` method, which is the same thing as changing the scale but allows you
       * to do so by giving pixel values.
       *
       * If you have enabled this Game Object for input, changing the size will _not_ change the
       * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
       * @param width The width of this Game Object.
       * @param height The height of this Game Object.
       */
      setSize(width: number, height: number): this;

      /**
       * Sets the display size of this Game Object.
       *
       * Calling this will adjust the scale.
       * @param width The width of this Game Object.
       * @param height The height of this Game Object.
       */
      setDisplaySize(width: number, height: number): this;

      /**
       * The Texture this Game Object is using to render with.
       */
      texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

      /**
       * The Texture Frame this Game Object is using to render with.
       */
      frame: Phaser.Textures.Frame;

      /**
       * A boolean flag indicating if this Game Object is being cropped or not.
       * You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
       * Equally, calling `setCrop` with no arguments will reset the crop and disable it.
       */
      isCropped: boolean;

      /**
       * Applies a crop to a texture based Game Object, such as a Sprite or Image.
       *
       * The crop is a rectangle that limits the area of the texture frame that is visible during rendering.
       *
       * Cropping a Game Object does not change its size, dimensions, physics body or hit area, it just
       * changes what is shown when rendered.
       *
       * The crop coordinates are relative to the texture frame, not the Game Object, meaning 0 x 0 is the top-left.
       *
       * Therefore, if you had a Game Object that had an 800x600 sized texture, and you wanted to show only the left
       * half of it, you could call `setCrop(0, 0, 400, 600)`.
       *
       * It is also scaled to match the Game Object scale automatically. Therefore a crop rect of 100x50 would crop
       * an area of 200x100 when applied to a Game Object that had a scale factor of 2.
       *
       * You can either pass in numeric values directly, or you can provide a single Rectangle object as the first argument.
       *
       * Call this method with no arguments at all to reset the crop, or toggle the property `isCropped` to `false`.
       *
       * You should do this if the crop rectangle becomes the same size as the frame itself, as it will allow
       * the renderer to skip several internal calculations.
       * @param x The x coordinate to start the crop from. Or a Phaser.Geom.Rectangle object, in which case the rest of the arguments are ignored.
       * @param y The y coordinate to start the crop from.
       * @param width The width of the crop rectangle in pixels.
       * @param height The height of the crop rectangle in pixels.
       */
      setCrop(x?: number | Phaser.Geom.Rectangle, y?: number, width?: number, height?: number): this;

      /**
       * Sets the texture and frame this Game Object will use to render with.
       *
       * Textures are referenced by their string-based keys, as stored in the Texture Manager.
       * @param key The key of the texture to be used, as stored in the Texture Manager.
       * @param frame The name or index of the frame within the Texture.
       */
      setTexture(key: string, frame?: string | number): this;

      /**
       * Sets the frame this Game Object will use to render with.
       *
       * The Frame has to belong to the current Texture being used.
       *
       * It can be either a string or an index.
       *
       * Calling `setFrame` will modify the `width` and `height` properties of your Game Object.
       * It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.
       * @param frame The name or index of the frame within the Texture.
       * @param updateSize Should this call adjust the size of the Game Object? Default true.
       * @param updateOrigin Should this call adjust the origin of the Game Object? Default true.
       */
      setFrame(frame: string | number, updateSize?: boolean, updateOrigin?: boolean): this;

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
       * The x position of this Game Object.
       */
      x: number;

      /**
       * The y position of this Game Object.
       */
      y: number;

      /**
       * The z position of this Game Object.
       *
       * Note: The z position does not control the rendering order of 2D Game Objects. Use
       * {@link Phaser.GameObjects.Components.Depth#depth} instead.
       */
      z: number;

      /**
       * The w position of this Game Object.
       */
      w: number;

      /**
       * This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
       * to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.
       *
       * Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
       * isn't the case, use the `scaleX` or `scaleY` properties instead.
       */
      scale: number;

      /**
       * The horizontal scale of this Game Object.
       */
      scaleX: number;

      /**
       * The vertical scale of this Game Object.
       */
      scaleY: number;

      /**
       * The angle of this Game Object as expressed in degrees.
       *
       * Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
       * and -90 is up.
       *
       * If you prefer to work in radians, see the `rotation` property instead.
       */
      angle: number;

      /**
       * The angle of this Game Object in radians.
       *
       * Phaser uses a right-hand clockwise rotation system, where 0 is right, PI/2 is down, +-PI is left
       * and -PI/2 is up.
       *
       * If you prefer to work in degrees, see the `angle` property instead.
       */
      rotation: number;

      /**
       * Sets the position of this Game Object.
       * @param x The x position of this Game Object. Default 0.
       * @param y The y position of this Game Object. If not set it will use the `x` value. Default x.
       * @param z The z position of this Game Object. Default 0.
       * @param w The w position of this Game Object. Default 0.
       */
      setPosition(x?: number, y?: number, z?: number, w?: number): this;

      /**
       * Copies an object's coordinates to this Game Object's position.
       * @param source An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied.
       */
      copyPosition(source: Phaser.Types.Math.Vector2Like | Phaser.Types.Math.Vector3Like | Phaser.Types.Math.Vector4Like): this;

      /**
       * Sets the position of this Game Object to be a random position within the confines of
       * the given area.
       *
       * If no area is specified a random position between 0 x 0 and the game width x height is used instead.
       *
       * The position does not factor in the size of this Game Object, meaning that only the origin is
       * guaranteed to be within the area.
       * @param x The x position of the top-left of the random area. Default 0.
       * @param y The y position of the top-left of the random area. Default 0.
       * @param width The width of the random area.
       * @param height The height of the random area.
       */
      setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

      /**
       * Sets the rotation of this Game Object.
       * @param radians The rotation of this Game Object, in radians. Default 0.
       */
      setRotation(radians?: number): this;

      /**
       * Sets the angle of this Game Object.
       * @param degrees The rotation of this Game Object, in degrees. Default 0.
       */
      setAngle(degrees?: number): this;

      /**
       * Sets the scale of this Game Object.
       * @param x The horizontal scale of this Game Object.
       * @param y The vertical scale of this Game Object. If not set it will use the `x` value. Default x.
       */
      setScale(x: number, y?: number): this;

      /**
       * Sets the x position of this Game Object.
       * @param value The x position of this Game Object. Default 0.
       */
      setX(value?: number): this;

      /**
       * Sets the y position of this Game Object.
       * @param value The y position of this Game Object. Default 0.
       */
      setY(value?: number): this;

      /**
       * Sets the z position of this Game Object.
       *
       * Note: The z position does not control the rendering order of 2D Game Objects. Use
       * {@link Phaser.GameObjects.Components.Depth#setDepth} instead.
       * @param value The z position of this Game Object. Default 0.
       */
      setZ(value?: number): this;

      /**
       * Sets the w position of this Game Object.
       * @param value The w position of this Game Object. Default 0.
       */
      setW(value?: number): this;

      /**
       * Gets the local transform matrix for this Game Object.
       * @param tempMatrix The matrix to populate with the values from this Game Object.
       */
      getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

      /**
       * Gets the world transform matrix for this Game Object, factoring in any parent Containers.
       * @param tempMatrix The matrix to populate with the values from this Game Object.
       * @param parentMatrix A temporary matrix to hold parent values during the calculations.
       */
      getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix, parentMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

      /**
       * Takes the given `x` and `y` coordinates and converts them into local space for this
       * Game Object, taking into account parent and local transforms, and the Display Origin.
       *
       * The returned Vector2 contains the translated point in its properties.
       *
       * A Camera needs to be provided in order to handle modified scroll factors. If no
       * camera is specified, it will use the `main` camera from the Scene to which this
       * Game Object belongs.
       * @param x The x position to translate.
       * @param y The y position to translate.
       * @param point A Vector2, or point-like object, to store the results in.
       * @param camera The Camera which is being tested against. If not given will use the Scene default camera.
       */
      getLocalPoint(x: number, y: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

      /**
       * Gets the sum total rotation of all of this Game Objects parent Containers.
       *
       * The returned value is in radians and will be zero if this Game Object has no parent container.
       */
      getParentRotation(): number;

      /**
       * The visible state of the Game Object.
       *
       * An invisible Game Object will skip rendering, but will still process update logic.
       */
      visible: boolean;

      /**
       * Sets the visibility of this Game Object.
       *
       * An invisible Game Object will skip rendering, but will still process update logic.
       * @param value The visible state of the Game Object.
       */
      setVisible(value: boolean): this;

      /**
       * Sets the restitution on the physics object.
       * @param value A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8 means the body may bounce back with approximately 80% of its kinetic energy. Note that collision response is based on pairs of bodies, and that restitution values are combined with the following formula: `Math.max(bodyA.restitution, bodyB.restitution)`
       */
      setBounce(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision category of this Game Object's Matter Body. This number must be a power of two between 2^0 (= 1) and 2^31.
       * Two bodies with different collision groups (see {@link #setCollisionGroup}) will only collide if their collision
       * categories are included in their collision masks (see {@link #setCollidesWith}).
       * @param value Unique category bitfield.
       */
      setCollisionCategory(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision group of this Game Object's Matter Body. If this is zero or two Matter Bodies have different values,
       * they will collide according to the usual rules (see {@link #setCollisionCategory} and {@link #setCollisionGroup}).
       * If two Matter Bodies have the same positive value, they will always collide; if they have the same negative value,
       * they will never collide.
       * @param value Unique group index.
       */
      setCollisionGroup(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision mask for this Game Object's Matter Body. Two Matter Bodies with different collision groups will only
       * collide if each one includes the other's category in its mask based on a bitwise AND, i.e. `(categoryA & maskB) !== 0`
       * and `(categoryB & maskA) !== 0` are both true.
       * @param categories A unique category bitfield, or an array of them.
       */
      setCollidesWith(categories: number | number[]): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke when this body starts colliding with another.
       */
      setOnCollide(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke when this body stops colliding with another.
       */
      setOnCollideEnd(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke for the duration of this body colliding with another.
       */
      setOnCollideActive(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a reference to the other body, along with a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param body The body, or an array of bodies, to test for collisions with.
       * @param callback The callback to invoke when this body collides with the given body or bodies.
       */
      setOnCollideWith(body: MatterJS.Body | MatterJS.Body[], callback: Function): Phaser.GameObjects.GameObject;

      /**
       * Applies a force to a body.
       * @param force A Vector that specifies the force to apply.
       */
      applyForce(force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;

      /**
       * Applies a force to a body from a given position.
       * @param position The position in which the force comes from.
       * @param force A Vector that specifies the force to apply.
       */
      applyForceFrom(position: Phaser.Math.Vector2, force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;

      /**
       * Apply thrust to the forward position of the body.
       *
       * Use very small values, such as 0.1, depending on the mass and required speed.
       * @param speed A speed value to be applied to a directional force.
       */
      thrust(speed: number): Phaser.GameObjects.GameObject;

      /**
       * Apply thrust to the left position of the body.
       *
       * Use very small values, such as 0.1, depending on the mass and required speed.
       * @param speed A speed value to be applied to a directional force.
       */
      thrustLeft(speed: number): Phaser.GameObjects.GameObject;

      /**
       * Apply thrust to the right position of the body.
       *
       * Use very small values, such as 0.1, depending on the mass and required speed.
       * @param speed A speed value to be applied to a directional force.
       */
      thrustRight(speed: number): Phaser.GameObjects.GameObject;

      /**
       * Apply thrust to the back position of the body.
       *
       * Use very small values, such as 0.1, depending on the mass and required speed.
       * @param speed A speed value to be applied to a directional force.
       */
      thrustBack(speed: number): Phaser.GameObjects.GameObject;

      /**
       * Sets new friction values for this Game Object's Matter Body.
       * @param value The new friction of the body, between 0 and 1, where 0 allows the Body to slide indefinitely, while 1 allows it to stop almost immediately after a force is applied.
       * @param air If provided, the new air resistance of the Body. The higher the value, the faster the Body will slow as it moves through space. 0 means the body has no air resistance.
       * @param fstatic If provided, the new static friction of the Body. The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary. 0 means the body will never "stick" when it is nearly stationary.
       */
      setFriction(value: number, air?: number, fstatic?: number): Phaser.GameObjects.GameObject;

      /**
       * Sets a new air resistance for this Game Object's Matter Body.
       * A value of 0 means the Body will never slow as it moves through space.
       * The higher the value, the faster a Body slows when moving through space.
       * @param value The new air resistance for the Body.
       */
      setFrictionAir(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets a new static friction for this Game Object's Matter Body.
       * A value of 0 means the Body will never "stick" when it is nearly stationary.
       * The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary.
       * @param value The new static friction for the Body.
       */
      setFrictionStatic(value: number): Phaser.GameObjects.GameObject;

      /**
       * A togglable function for ignoring world gravity in real-time on the current body.
       * @param value Set to true to ignore the effect of world gravity, or false to not ignore it.
       */
      setIgnoreGravity(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Sets the mass of the Game Object's Matter Body.
       * @param value The new mass of the body.
       */
      setMass(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets density of the body.
       * @param value The new density of the body.
       */
      setDensity(value: number): Phaser.GameObjects.GameObject;

      /**
       * The body's center of mass.
       *
       * Calling this creates a new `Vector2 each time to avoid mutation.
       *
       * If you only need to read the value and won't change it, you can get it from `GameObject.body.centerOfMass`.
       */
      readonly centerOfMass: Phaser.Math.Vector2;

      /**
       * Set the body belonging to this Game Object to be a sensor.
       * Sensors trigger collision events, but don't react with colliding body physically.
       * @param value `true` to set the body as a sensor, or `false` to disable it.
       */
      setSensor(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Is the body belonging to this Game Object a sensor or not?
       */
      isSensor(): boolean;

      /**
       * Set the body on a Game Object to a rectangle.
       *
       * Calling this methods resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param width Width of the rectangle.
       * @param height Height of the rectangle.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setRectangle(width: number, height: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Set the body on a Game Object to a circle.
       *
       * Calling this methods resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param radius The radius of the circle.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setCircle(radius: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Set the body on the Game Object to a polygon shape.
       *
       * Calling this methods resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param radius The "radius" of the polygon, i.e. the distance from its center to any vertex. This is also the radius of its circumcircle.
       * @param sides The number of sides the polygon will have.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setPolygon(radius: number, sides: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Set the body on the Game Object to a trapezoid shape.
       *
       * Calling this methods resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param width The width of the trapezoid Body.
       * @param height The height of the trapezoid Body.
       * @param slope The slope of the trapezoid. 0 creates a rectangle, while 1 creates a triangle. Positive values make the top side shorter, while negative values make the bottom side shorter.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setTrapezoid(width: number, height: number, slope: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Set this Game Object to use the given existing Matter Body.
       *
       * The body is first removed from the world before being added to this Game Object.
       * @param body The Body this Game Object should use.
       * @param addToWorld Should the body be immediately added to the World? Default true.
       */
      setExistingBody(body: MatterJS.BodyType, addToWorld?: boolean): Phaser.GameObjects.GameObject;

      /**
       * Set this Game Object to create and use a new Body based on the configuration object given.
       *
       * Calling this method resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param config Either a string, such as `circle`, or a Matter Set Body Configuration object.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setBody(config: string | Phaser.Types.Physics.Matter.MatterSetBodyConfig, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Sets this Body to sleep.
       */
      setToSleep(): this;

      /**
       * Wakes this Body if asleep.
       */
      setAwake(): this;

      /**
       * Sets the number of updates in which this body must have near-zero velocity before it is set as sleeping (if sleeping is enabled by the engine).
       * @param value A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping. Default 60.
       */
      setSleepThreshold(value?: number): this;

      /**
       * Enable sleep and wake events for this body.
       *
       * By default when a body goes to sleep, or wakes up, it will not emit any events.
       *
       * The events are emitted by the Matter World instance and can be listened to via
       * the `SLEEP_START` and `SLEEP_END` events.
       * @param start `true` if you want the sleep start event to be emitted for this body.
       * @param end `true` if you want the sleep end event to be emitted for this body.
       */
      setSleepEvents(start: boolean, end: boolean): this;

      /**
       * Enables or disables the Sleep Start event for this body.
       * @param value `true` to enable the sleep event, or `false` to disable it.
       */
      setSleepStartEvent(value: boolean): this;

      /**
       * Enables or disables the Sleep End event for this body.
       * @param value `true` to enable the sleep event, or `false` to disable it.
       */
      setSleepEndEvent(value: boolean): this;

      /**
       * Changes the physics body to be either static `true` or dynamic `false`.
       * @param value `true` to set the body as being static, or `false` to make it dynamic.
       */
      setStatic(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Returns `true` if the body is static, otherwise `false` for a dynamic body.
       */
      isStatic(): boolean;

      /**
       * Setting fixed rotation sets the Body inertia to Infinity, which stops it
       * from being able to rotate when forces are applied to it.
       */
      setFixedRotation(): this;

      /**
       * Sets the angular velocity of the body instantly.
       * Position, angle, force etc. are unchanged.
       * @param value The angular velocity.
       */
      setAngularVelocity(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the horizontal velocity of the physics body.
       * @param x The horizontal velocity value.
       */
      setVelocityX(x: number): Phaser.GameObjects.GameObject;

      /**
       * Sets vertical velocity of the physics body.
       * @param y The vertical velocity value.
       */
      setVelocityY(y: number): Phaser.GameObjects.GameObject;

      /**
       * Sets both the horizontal and vertical velocity of the physics body.
       * @param x The horizontal velocity value.
       * @param y The vertical velocity value, it can be either positive or negative. If not given, it will be the same as the `x` value. Default x.
       */
      setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

    }

    /**
     * The Phaser Matter plugin provides the ability to use the Matter JS Physics Engine within your Phaser games.
     *
     * Unlike Arcade Physics, the other physics system provided with Phaser, Matter JS is a full-body physics system.
     * It features:
     *
     * * Rigid bodies
     * * Compound bodies
     * * Composite bodies
     * * Concave and convex hulls
     * * Physical properties (mass, area, density etc.)
     * * Restitution (elastic and inelastic collisions)
     * * Collisions (broad-phase, mid-phase and narrow-phase)
     * * Stable stacking and resting
     * * Conservation of momentum
     * * Friction and resistance
     * * Constraints
     * * Gravity
     * * Sleeping and static bodies
     * * Rounded corners (chamfering)
     * * Views (translate, zoom)
     * * Collision queries (raycasting, region tests)
     * * Time scaling (slow-mo, speed-up)
     *
     * Configuration of Matter is handled via the Matter World Config object, which can be passed in either the
     * Phaser Game Config, or Phaser Scene Config. Here is a basic example:
     *
     * ```js
     * physics: {
     *     default: 'matter',
     *     matter: {
     *         enableSleeping: true,
     *         gravity: {
     *             y: 0
     *         },
     *         debug: {
     *             showBody: true,
     *             showStaticBody: true
     *         }
     *     }
     * }
     * ```
     *
     * This class acts as an interface between a Phaser Scene and a single instance of the Matter Engine.
     *
     * Use it to access the most common Matter features and helper functions.
     *
     * You can find details, documentation and examples on the Matter JS website: https://brm.io/matter-js/
     */
    class MatterPhysics {
      /**
       *
       * @param scene The Phaser Scene that owns this Matter Physics instance.
       */
      constructor(scene: Phaser.Scene);

      /**
       * The Phaser Scene that owns this Matter Physics instance
       */
      scene: Phaser.Scene;

      /**
       * A reference to the Scene Systems that belong to the Scene owning this Matter Physics instance.
       */
      systems: Phaser.Scenes.Systems;

      /**
       * The parsed Matter Configuration object.
       */
      config: Phaser.Types.Physics.Matter.MatterWorldConfig;

      /**
       * An instance of the Matter World class. This class is responsible for the updating of the
       * Matter Physics world, as well as handling debug drawing functions.
       */
      world: Phaser.Physics.Matter.World;

      /**
       * An instance of the Matter Factory. This class provides lots of functions for creating a
       * wide variety of physics objects and adds them automatically to the Matter World.
       *
       * You can use this class to cut-down on the amount of code required in your game, however,
       * use of the Factory is entirely optional and should be seen as a development aid. It's
       * perfectly possible to create and add components to the Matter world without using it.
       */
      add: Phaser.Physics.Matter.Factory;

      /**
       * An instance of the Body Bounds class. This class contains functions used for getting the
       * world position from various points around the bounds of a physics body.
       */
      bodyBounds: Phaser.Physics.Matter.BodyBounds;

      /**
       * A reference to the `Matter.Body` module.
       *
       * The `Matter.Body` module contains methods for creating and manipulating body models.
       * A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
       * Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the `Bodies` module.
       */
      body: MatterJS.BodyFactory;

      /**
       * A reference to the `Matter.Composite` module.
       *
       * The `Matter.Composite` module contains methods for creating and manipulating composite bodies.
       * A composite body is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`, therefore composites form a tree structure.
       * It is important to use the functions in this module to modify composites, rather than directly modifying their properties.
       * Note that the `Matter.World` object is also a type of `Matter.Composite` and as such all composite methods here can also operate on a `Matter.World`.
       */
      composite: MatterJS.CompositeFactory;

      /**
       * A reference to the `Matter.Detector` module.
       *
       * The `Matter.Detector` module contains methods for detecting collisions given a set of pairs.
       */
      detector: MatterJS.DetectorFactory;

      /**
       * A reference to the `Matter.Grid` module.
       *
       * The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
       */
      grid: MatterJS.GridFactory;

      /**
       * A reference to the `Matter.Pair` module.
       *
       * The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
       */
      pair: MatterJS.PairFactory;

      /**
       * A reference to the `Matter.Pairs` module.
       *
       * The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
       */
      pairs: MatterJS.PairsFactory;

      /**
       * A reference to the `Matter.Query` module.
       *
       * The `Matter.Query` module contains methods for performing collision queries.
       */
      query: MatterJS.QueryFactory;

      /**
       * A reference to the `Matter.Resolver` module.
       *
       * The `Matter.Resolver` module contains methods for resolving collision pairs.
       */
      resolver: MatterJS.ResolverFactory;

      /**
       * A reference to the `Matter.SAT` module.
       *
       * The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
       */
      sat: MatterJS.SATFactory;

      /**
       * A reference to the `Matter.Constraint` module.
       *
       * The `Matter.Constraint` module contains methods for creating and manipulating constraints.
       * Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
       * The stiffness of constraints can be modified to create springs or elastic.
       */
      constraint: MatterJS.ConstraintFactory;

      /**
       * A reference to the `Matter.Bodies` module.
       *
       * The `Matter.Bodies` module contains factory methods for creating rigid bodies
       * with commonly used body configurations (such as rectangles, circles and other polygons).
       */
      bodies: MatterJS.BodiesFactory;

      /**
       * A reference to the `Matter.Composites` module.
       *
       * The `Matter.Composites` module contains factory methods for creating composite bodies
       * with commonly used configurations (such as stacks and chains).
       */
      composites: MatterJS.CompositesFactory;

      /**
       * A reference to the `Matter.Axes` module.
       *
       * The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
       */
      axes: MatterJS.AxesFactory;

      /**
       * A reference to the `Matter.Bounds` module.
       *
       * The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
       */
      bounds: MatterJS.BoundsFactory;

      /**
       * A reference to the `Matter.Svg` module.
       *
       * The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
       *
       * To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
       */
      svg: MatterJS.SvgFactory;

      /**
       * A reference to the `Matter.Vector` module.
       *
       * The `Matter.Vector` module contains methods for creating and manipulating vectors.
       * Vectors are the basis of all the geometry related operations in the engine.
       * A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
       */
      vector: MatterJS.VectorFactory;

      /**
       * A reference to the `Matter.Vertices` module.
       *
       * The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
       * A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
       * A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
       */
      vertices: MatterJS.VerticesFactory;

      /**
       * A reference to the `Matter.Vertices` module.
       *
       * The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
       * A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
       * A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
       */
      verts: MatterJS.VerticesFactory;

      /**
       * This internal method is called when this class starts and retrieves the final Matter World Config.
       */
      getConfig(): Phaser.Types.Physics.Matter.MatterWorldConfig;

      /**
       * Enables the Matter Attractors Plugin.
       *
       * The attractors plugin that makes it easy to apply continual forces on bodies.
       * It's possible to simulate effects such as wind, gravity and magnetism.
       *
       * https://github.com/liabru/matter-attractors
       *
       * This method is called automatically if `plugins.attractors` is set in the Matter World Config.
       * However, you can also call it directly from within your game.
       */
      enableAttractorPlugin(): this;

      /**
       * Enables the Matter Wrap Plugin.
       *
       * The coordinate wrapping plugin that automatically wraps the position of bodies such that they always stay
       * within the given bounds. Upon crossing a boundary the body will appear on the opposite side of the bounds,
       * while maintaining its velocity.
       *
       * https://github.com/liabru/matter-wrap
       *
       * This method is called automatically if `plugins.wrap` is set in the Matter World Config.
       * However, you can also call it directly from within your game.
       */
      enableWrapPlugin(): this;

      /**
       * Enables the Matter Collision Events Plugin.
       *
       * Note that this plugin is enabled by default. So you should only ever need to call this
       * method if you have specifically disabled the plugin in your Matter World Config.
       * You can disable it by setting `plugins.collisionevents: false` in your Matter World Config.
       *
       * This plugin triggers three new events on Matter.Body:
       *
       * 1. `onCollide`
       * 2. `onCollideEnd`
       * 3. `onCollideActive`
       *
       * These events correspond to the Matter.js events `collisionStart`, `collisionActive` and `collisionEnd`, respectively.
       * You can listen to these events via Matter.Events or they will also be emitted from the Matter World.
       *
       * This plugin also extends Matter.Body with three convenience functions:
       *
       * `Matter.Body.setOnCollide(callback)`
       * `Matter.Body.setOnCollideEnd(callback)`
       * `Matter.Body.setOnCollideActive(callback)`
       *
       * You can register event callbacks by providing a function of type (pair: Matter.Pair) => void
       *
       * https://github.com/dxu/matter-collision-events
       */
      enableCollisionEventsPlugin(): this;

      /**
       * Pauses the Matter World instance and sets `enabled` to `false`.
       *
       * A paused world will not run any simulations for the duration it is paused.
       */
      pause(): Phaser.Physics.Matter.World;

      /**
       * Resumes this Matter World instance from a paused state and sets `enabled` to `true`.
       */
      resume(): Phaser.Physics.Matter.World;

      /**
       * Sets the Matter Engine to run at fixed timestep of 60Hz and enables `autoUpdate`.
       * If you have set a custom `getDelta` function then this will override it.
       */
      set60Hz(): this;

      /**
       * Sets the Matter Engine to run at fixed timestep of 30Hz and enables `autoUpdate`.
       * If you have set a custom `getDelta` function then this will override it.
       */
      set30Hz(): this;

      /**
       * Manually advances the physics simulation by one iteration.
       *
       * You can optionally pass in the `delta` and `correction` values to be used by Engine.update.
       * If undefined they use the Matter defaults of 60Hz and no correction.
       *
       * Calling `step` directly bypasses any checks of `enabled` or `autoUpdate`.
       *
       * It also ignores any custom `getDelta` functions, as you should be passing the delta
       * value in to this call.
       *
       * You can adjust the number of iterations that Engine.update performs internally.
       * Use the Scene Matter Physics config object to set the following properties:
       *
       * positionIterations (defaults to 6)
       * velocityIterations (defaults to 4)
       * constraintIterations (defaults to 2)
       *
       * Adjusting these values can help performance in certain situations, depending on the physics requirements
       * of your game.
       * @param delta The delta value. Default 16.666.
       * @param correction Optional delta correction value. Default 1.
       */
      step(delta?: number, correction?: number): void;

      /**
       * Checks if the vertices of the given body, or an array of bodies, contains the given point, or not.
       *
       * You can pass in either a single body, or an array of bodies to be checked. This method will
       * return `true` if _any_ of the bodies in the array contain the point. See the `intersectPoint` method if you need
       * to get a list of intersecting bodies.
       *
       * The point should be transformed into the Matter World coordinate system in advance. This happens by
       * default with Input Pointers, but if you wish to use points from another system you may need to
       * transform them before passing them.
       * @param body The body, or an array of bodies, to check against the point.
       * @param x The horizontal coordinate of the point.
       * @param y The vertical coordinate of the point.
       */
      containsPoint(body: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], x: number, y: number): boolean;

      /**
       * Checks the given coordinates to see if any vertices of the given bodies contain it.
       *
       * If no bodies are provided it will search all bodies in the Matter World, including within Composites.
       *
       * The coordinates should be transformed into the Matter World coordinate system in advance. This happens by
       * default with Input Pointers, but if you wish to use coordinates from another system you may need to
       * transform them before passing them.
       * @param x The horizontal coordinate of the point.
       * @param y The vertical coordinate of the point.
       * @param bodies An array of bodies to check. If not provided it will search all bodies in the world.
       */
      intersectPoint(x: number, y: number, bodies?: Phaser.Types.Physics.Matter.MatterBody[]): Phaser.Types.Physics.Matter.MatterBody[];

      /**
       * Checks the given rectangular area to see if any vertices of the given bodies intersect with it.
       * Or, if the `outside` parameter is set to `true`, it checks to see which bodies do not
       * intersect with it.
       *
       * If no bodies are provided it will search all bodies in the Matter World, including within Composites.
       * @param x The horizontal coordinate of the top-left of the area.
       * @param y The vertical coordinate of the top-left of the area.
       * @param width The width of the area.
       * @param height The height of the area.
       * @param outside If `false` it checks for vertices inside the area, if `true` it checks for vertices outside the area. Default false.
       * @param bodies An array of bodies to check. If not provided it will search all bodies in the world.
       */
      intersectRect(x: number, y: number, width: number, height: number, outside?: boolean, bodies?: Phaser.Types.Physics.Matter.MatterBody[]): Phaser.Types.Physics.Matter.MatterBody[];

      /**
       * Checks the given ray segment to see if any vertices of the given bodies intersect with it.
       *
       * If no bodies are provided it will search all bodies in the Matter World.
       *
       * The width of the ray can be specified via the `rayWidth` parameter.
       * @param x1 The horizontal coordinate of the start of the ray segment.
       * @param y1 The vertical coordinate of the start of the ray segment.
       * @param x2 The horizontal coordinate of the end of the ray segment.
       * @param y2 The vertical coordinate of the end of the ray segment.
       * @param rayWidth The width of the ray segment. Default 1.
       * @param bodies An array of bodies to check. If not provided it will search all bodies in the world.
       */
      intersectRay(x1: number, y1: number, x2: number, y2: number, rayWidth?: number, bodies?: Phaser.Types.Physics.Matter.MatterBody[]): Phaser.Types.Physics.Matter.MatterBody[];

      /**
       * Checks the given Matter Body to see if it intersects with any of the given bodies.
       *
       * If no bodies are provided it will check against all bodies in the Matter World.
       * @param body The target body.
       * @param bodies An array of bodies to check the target body against. If not provided it will search all bodies in the world.
       */
      intersectBody(body: Phaser.Types.Physics.Matter.MatterBody, bodies?: Phaser.Types.Physics.Matter.MatterBody[]): Phaser.Types.Physics.Matter.MatterBody[];

      /**
       * Checks to see if the target body, or an array of target bodies, intersects with any of the given bodies.
       *
       * If intersection occurs this method will return `true` and, if provided, invoke the callbacks.
       *
       * If no bodies are provided for the second parameter the target will check again all bodies in the Matter World.
       *
       * Note that bodies can only overlap if they are in non-colliding collision groups or categories.
       *
       * If you provide a `processCallback` then the two bodies that overlap are sent to it. This callback
       * must return a boolean and is used to allow you to perform additional processing tests before a final
       * outcome is decided. If it returns `true` then the bodies are finally passed to the `overlapCallback`, if set.
       *
       * If you provide an `overlapCallback` then the matching pairs of overlapping bodies will be sent to it.
       *
       * Both callbacks have the following signature: `function (bodyA, bodyB, collisionInfo)` where `bodyA` is always
       * the target body. The `collisionInfo` object contains additional data, such as the angle and depth of penetration.
       * @param target The target body, or array of target bodies, to check.
       * @param bodies The second body, or array of bodies, to check. If falsey it will check against all bodies in the world.
       * @param overlapCallback An optional callback function that is called if the bodies overlap.
       * @param processCallback An optional callback function that lets you perform additional checks against the two bodies if they overlap. If this is set then `overlapCallback` will only be invoked if this callback returns `true`.
       * @param callbackContext The context, or scope, in which to run the callbacks.
       */
      overlap(target: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], bodies?: Phaser.Types.Physics.Matter.MatterBody[], overlapCallback?: ArcadePhysicsCallback, processCallback?: ArcadePhysicsCallback, callbackContext?: any): boolean;

      /**
       * Sets the collision filter category of all given Matter Bodies to the given value.
       *
       * This number must be a power of two between 2^0 (= 1) and 2^31.
       *
       * Bodies with different collision groups (see {@link #setCollisionGroup}) will only collide if their collision
       * categories are included in their collision masks (see {@link #setCollidesWith}).
       * @param bodies An array of bodies to update. If falsey it will use all bodies in the world.
       * @param value Unique category bitfield.
       */
      setCollisionCategory(bodies: Phaser.Types.Physics.Matter.MatterBody[], value: number): this;

      /**
       * Sets the collision filter group of all given Matter Bodies to the given value.
       *
       * If the group value is zero, or if two Matter Bodies have different group values,
       * they will collide according to the usual collision filter rules (see {@link #setCollisionCategory} and {@link #setCollisionGroup}).
       *
       * If two Matter Bodies have the same positive group value, they will always collide;
       * if they have the same negative group value they will never collide.
       * @param bodies An array of bodies to update. If falsey it will use all bodies in the world.
       * @param value Unique group index.
       */
      setCollisionGroup(bodies: Phaser.Types.Physics.Matter.MatterBody[], value: number): this;

      /**
       * Sets the collision filter mask of all given Matter Bodies to the given value.
       *
       * Two Matter Bodies with different collision groups will only collide if each one includes the others
       * category in its mask based on a bitwise AND operation: `(categoryA & maskB) !== 0` and
       * `(categoryB & maskA) !== 0` are both true.
       * @param bodies An array of bodies to update. If falsey it will use all bodies in the world.
       * @param categories A unique category bitfield, or an array of them.
       */
      setCollidesWith(bodies: Phaser.Types.Physics.Matter.MatterBody[], categories: number | number[]): this;

      /**
       * Takes an array and returns a new array made from all of the Matter Bodies found in the original array.
       *
       * For example, passing in Matter Game Objects, such as a bunch of Matter Sprites, to this method, would
       * return an array containing all of their native Matter Body objects.
       *
       * If the `bodies` argument is falsey, it will return all bodies in the world.
       * @param bodies An array of objects to extract the bodies from. If falsey, it will return all bodies in the world.
       */
      getMatterBodies(bodies?: any[]): MatterJS.BodyType[];

      /**
       * Sets both the horizontal and vertical linear velocity of the physics bodies.
       * @param bodies Either a single Body, or an array of bodies to update. If falsey it will use all bodies in the world.
       * @param x The horizontal linear velocity value.
       * @param y The vertical linear velocity value.
       */
      setVelocity(bodies: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], x: number, y: number): this;

      /**
       * Sets just the horizontal linear velocity of the physics bodies.
       * The vertical velocity of the body is unchanged.
       * @param bodies Either a single Body, or an array of bodies to update. If falsey it will use all bodies in the world.
       * @param x The horizontal linear velocity value.
       */
      setVelocityX(bodies: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], x: number): this;

      /**
       * Sets just the vertical linear velocity of the physics bodies.
       * The horizontal velocity of the body is unchanged.
       * @param bodies Either a single Body, or an array of bodies to update. If falsey it will use all bodies in the world.
       * @param y The vertical linear velocity value.
       */
      setVelocityY(bodies: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], y: number): this;

      /**
       * Sets the angular velocity of the bodies instantly.
       * Position, angle, force etc. are unchanged.
       * @param bodies Either a single Body, or an array of bodies to update. If falsey it will use all bodies in the world.
       * @param value The angular velocity.
       */
      setAngularVelocity(bodies: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], value: number): this;

      /**
       * Applies a force to a body, at the bodies current position, including resulting torque.
       * @param bodies Either a single Body, or an array of bodies to update. If falsey it will use all bodies in the world.
       * @param force A Vector that specifies the force to apply.
       */
      applyForce(bodies: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], force: Phaser.Types.Math.Vector2Like): this;

      /**
       * Applies a force to a body, from the given world position, including resulting torque.
       * If no angle is given, the current body angle is used.
       *
       * Use very small speed values, such as 0.1, depending on the mass and required velocity.
       * @param bodies Either a single Body, or an array of bodies to update. If falsey it will use all bodies in the world.
       * @param position A Vector that specifies the world-space position to apply the force at.
       * @param speed A speed value to be applied to a directional force.
       * @param angle The angle, in radians, to apply the force from. Leave undefined to use the current body angle.
       */
      applyForceFromPosition(bodies: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], position: Phaser.Types.Math.Vector2Like, speed: number, angle?: number): this;

      /**
       * Apply a force to a body based on the given angle and speed.
       * If no angle is given, the current body angle is used.
       *
       * Use very small speed values, such as 0.1, depending on the mass and required velocity.
       * @param bodies Either a single Body, or an array of bodies to update. If falsey it will use all bodies in the world.
       * @param speed A speed value to be applied to a directional force.
       * @param angle The angle, in radians, to apply the force from. Leave undefined to use the current body angle.
       */
      applyForceFromAngle(bodies: Phaser.Types.Physics.Matter.MatterBody | Phaser.Types.Physics.Matter.MatterBody[], speed: number, angle?: number): this;

      /**
       * Returns the length of the given constraint, which is the distance between the two points.
       * @param constraint The constraint to get the length from.
       */
      getConstraintLength(constraint: MatterJS.ConstraintType): number;

      /**
       * Aligns a Body, or Matter Game Object, against the given coordinates.
       *
       * The alignment takes place using the body bounds, which take into consideration things
       * like body scale and rotation.
       *
       * Although a Body has a `position` property, it is based on the center of mass for the body,
       * not a dimension based center. This makes aligning bodies difficult, especially if they have
       * rotated or scaled. This method will derive the correct position based on the body bounds and
       * its center of mass offset, in order to align the body with the given coordinate.
       *
       * For example, if you wanted to align a body so it sat in the bottom-center of the
       * Scene, and the world was 800 x 600 in size:
       *
       * ```javascript
       * this.matter.alignBody(body, 400, 600, Phaser.Display.Align.BOTTOM_CENTER);
       * ```
       *
       * You pass in 400 for the x coordinate, because that is the center of the world, and 600 for
       * the y coordinate, as that is the base of the world.
       * @param body The Body to align.
       * @param x The horizontal position to align the body to.
       * @param y The vertical position to align the body to.
       * @param align One of the `Phaser.Display.Align` constants, such as `Phaser.Display.Align.TOP_LEFT`.
       */
      alignBody(body: Phaser.Types.Physics.Matter.MatterBody, x: number, y: number, align: number): this;

    }

    /**
     * A Matter Physics Sprite Game Object.
     *
     * A Sprite Game Object is used for the display of both static and animated images in your game.
     * Sprites can have input events and physics bodies. They can also be tweened, tinted, scrolled
     * and animated.
     *
     * The main difference between a Sprite and an Image Game Object is that you cannot animate Images.
     * As such, Sprites take a fraction longer to process and have a larger API footprint due to the Animation
     * Component. If you do not require animation then you can safely use Images to replace Sprites in all cases.
     */
    class Sprite extends Phaser.GameObjects.Sprite implements Phaser.Physics.Matter.Components.Bounce, Phaser.Physics.Matter.Components.Collision, Phaser.Physics.Matter.Components.Force, Phaser.Physics.Matter.Components.Friction, Phaser.Physics.Matter.Components.Gravity, Phaser.Physics.Matter.Components.Mass, Phaser.Physics.Matter.Components.Sensor, Phaser.Physics.Matter.Components.SetBody, Phaser.Physics.Matter.Components.Sleep, Phaser.Physics.Matter.Components.Static, Phaser.Physics.Matter.Components.Transform, Phaser.Physics.Matter.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
      /**
       *
       * @param world A reference to the Matter.World instance that this body belongs to.
       * @param x The horizontal position of this Game Object in the world.
       * @param y The vertical position of this Game Object in the world.
       * @param texture The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
       * @param frame An optional frame from the Texture this Game Object is rendering with.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      constructor(world: Phaser.Physics.Matter.World, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig);

      /**
       * A reference to the Matter.World instance that this body belongs to.
       */
      world: Phaser.Physics.Matter.World;

      /**
       * Clears all alpha values associated with this Game Object.
       *
       * Immediately sets the alpha levels back to 1 (fully opaque).
       */
      clearAlpha(): this;

      /**
       * Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
       * Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.
       *
       * If your game is running under WebGL you can optionally specify four different alpha values, each of which
       * correspond to the four corners of the Game Object. Under Canvas only the `topLeft` value given is used.
       * @param topLeft The alpha value used for the top-left of the Game Object. If this is the only value given it's applied across the whole Game Object. Default 1.
       * @param topRight The alpha value used for the top-right of the Game Object. WebGL only.
       * @param bottomLeft The alpha value used for the bottom-left of the Game Object. WebGL only.
       * @param bottomRight The alpha value used for the bottom-right of the Game Object. WebGL only.
       */
      setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

      /**
       * The alpha value of the Game Object.
       *
       * This is a global value, impacting the entire Game Object, not just a region of it.
       */
      alpha: number;

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
       * Sets the Blend Mode being used by this Game Object.
       *
       * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
       *
       * Under WebGL only the following Blend Modes are available:
       *
       * * ADD
       * * MULTIPLY
       * * SCREEN
       * * ERASE
       *
       * Canvas has more available depending on browser support.
       *
       * You can also create your own custom Blend Modes in WebGL.
       *
       * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
       * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
       * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
       * are used.
       */
      blendMode: Phaser.BlendModes | string;

      /**
       * Sets the Blend Mode being used by this Game Object.
       *
       * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
       *
       * Under WebGL only the following Blend Modes are available:
       *
       * * ADD
       * * MULTIPLY
       * * SCREEN
       * * ERASE (only works when rendering to a framebuffer, like a Render Texture)
       *
       * Canvas has more available depending on browser support.
       *
       * You can also create your own custom Blend Modes in WebGL.
       *
       * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
       * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
       * reasons try to be careful about the construction of your Scene and the frequency in which blend modes
       * are used.
       * @param value The BlendMode value. Either a string or a CONST.
       */
      setBlendMode(value: string | Phaser.BlendModes): this;

      /**
       * The depth of this Game Object within the Scene.
       *
       * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
       * of Game Objects, without actually moving their position in the display list.
       *
       * The default depth is zero. A Game Object with a higher depth
       * value will always render in front of one with a lower value.
       *
       * Setting the depth will queue a depth sort event within the Scene.
       */
      depth: number;

      /**
       * The depth of this Game Object within the Scene.
       *
       * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
       * of Game Objects, without actually moving their position in the display list.
       *
       * The default depth is zero. A Game Object with a higher depth
       * value will always render in front of one with a lower value.
       *
       * Setting the depth will queue a depth sort event within the Scene.
       * @param value The depth of this Game Object.
       */
      setDepth(value: number): this;

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
       * Gets the center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       */
      getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

      /**
       * Gets the top-left corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the top-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the top-right corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the left-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getLeftCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the right-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getRightCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-left corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-center coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomCenter<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bottom-right corner coordinate of this Game Object, regardless of origin.
       * The returned point is calculated in local space and does not factor in any parent containers
       * @param output An object to store the values in. If not provided a new Vector2 will be created.
       * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
       */
      getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

      /**
       * Gets the bounds of this Game Object, regardless of origin.
       * The values are stored and returned in a Rectangle, or Rectangle-like, object.
       * @param output An object to store the values in. If not provided a new Rectangle will be created.
       */
      getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

      /**
       * The Mask this Game Object is using during render.
       */
      mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

      /**
       * Sets the mask that this Game Object will use to render with.
       *
       * The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
       * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * If a mask is already set on this Game Object it will be immediately replaced.
       *
       * Masks are positioned in global space and are not relative to the Game Object to which they
       * are applied. The reason for this is that multiple Game Objects can all share the same mask.
       *
       * Masks have no impact on physics or input detection. They are purely a rendering component
       * that allows you to limit what is visible during the render pass.
       * @param mask The mask this Game Object will use when rendering.
       */
      setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

      /**
       * Clears the mask that this Game Object was using.
       * @param destroyMask Destroy the mask before clearing it? Default false.
       */
      clearMask(destroyMask?: boolean): this;

      /**
       * Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
       * including this one.
       *
       * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
       *
       * To create the mask you need to pass in a reference to a renderable Game Object.
       * A renderable Game Object is one that uses a texture to render with, such as an
       * Image, Sprite, Render Texture or BitmapText.
       *
       * If you do not provide a renderable object, and this Game Object has a texture,
       * it will use itself as the object. This means you can call this method to create
       * a Bitmap Mask from any renderable Game Object.
       * @param renderable A renderable Game Object that uses a texture, such as a Sprite.
       */
      createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

      /**
       * Creates and returns a Geometry Mask. This mask can be used by any Game Object,
       * including this one.
       *
       * To create the mask you need to pass in a reference to a Graphics Game Object.
       *
       * If you do not provide a graphics object, and this Game Object is an instance
       * of a Graphics object, then it will use itself to create the mask.
       *
       * This means you can call this method to create a Geometry Mask from any Graphics Game Object.
       * @param graphics A Graphics Game Object. The geometry within it will be used as the mask.
       */
      createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

      /**
       * The horizontal origin of this Game Object.
       * The origin maps the relationship between the size and position of the Game Object.
       * The default value is 0.5, meaning all Game Objects are positioned based on their center.
       * Setting the value to 0 means the position now relates to the left of the Game Object.
       */
      originX: number;

      /**
       * The vertical origin of this Game Object.
       * The origin maps the relationship between the size and position of the Game Object.
       * The default value is 0.5, meaning all Game Objects are positioned based on their center.
       * Setting the value to 0 means the position now relates to the top of the Game Object.
       */
      originY: number;

      /**
       * The horizontal display origin of this Game Object.
       * The origin is a normalized value between 0 and 1.
       * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
       */
      displayOriginX: number;

      /**
       * The vertical display origin of this Game Object.
       * The origin is a normalized value between 0 and 1.
       * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
       */
      displayOriginY: number;

      /**
       * Sets the origin of this Game Object.
       *
       * The values are given in the range 0 to 1.
       * @param x The horizontal origin value. Default 0.5.
       * @param y The vertical origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setOrigin(x?: number, y?: number): this;

      /**
       * Sets the origin of this Game Object based on the Pivot values in its Frame.
       */
      setOriginFromFrame(): this;

      /**
       * Sets the display origin of this Game Object.
       * The difference between this and setting the origin is that you can use pixel values for setting the display origin.
       * @param x The horizontal display origin value. Default 0.
       * @param y The vertical display origin value. If not defined it will be set to the value of `x`. Default x.
       */
      setDisplayOrigin(x?: number, y?: number): this;

      /**
       * Updates the Display Origin cached values internally stored on this Game Object.
       * You don't usually call this directly, but it is exposed for edge-cases where you may.
       */
      updateDisplayOrigin(): this;

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

      /**
       * The horizontal scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       */
      scrollFactorX: number;

      /**
       * The vertical scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       */
      scrollFactorY: number;

      /**
       * Sets the scroll factor of this Game Object.
       *
       * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
       *
       * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
       * It does not change the Game Objects actual position values.
       *
       * A value of 1 means it will move exactly in sync with a camera.
       * A value of 0 means it will not move at all, even if the camera moves.
       * Other values control the degree to which the camera movement is mapped to this Game Object.
       *
       * Please be aware that scroll factor values other than 1 are not taken in to consideration when
       * calculating physics collisions. Bodies always collide based on their world position, but changing
       * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
       * them from physics bodies if not accounted for in your code.
       * @param x The horizontal scroll factor of this Game Object.
       * @param y The vertical scroll factor of this Game Object. If not set it will use the `x` value. Default x.
       */
      setScrollFactor(x: number, y?: number): this;

      /**
       * The native (un-scaled) width of this Game Object.
       *
       * Changing this value will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or use
       * the `displayWidth` property.
       */
      width: number;

      /**
       * The native (un-scaled) height of this Game Object.
       *
       * Changing this value will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or use
       * the `displayHeight` property.
       */
      height: number;

      /**
       * The displayed width of this Game Object.
       *
       * This value takes into account the scale factor.
       *
       * Setting this value will adjust the Game Object's scale property.
       */
      displayWidth: number;

      /**
       * The displayed height of this Game Object.
       *
       * This value takes into account the scale factor.
       *
       * Setting this value will adjust the Game Object's scale property.
       */
      displayHeight: number;

      /**
       * Sets the size of this Game Object to be that of the given Frame.
       *
       * This will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or call the
       * `setDisplaySize` method, which is the same thing as changing the scale but allows you
       * to do so by giving pixel values.
       *
       * If you have enabled this Game Object for input, changing the size will _not_ change the
       * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
       * @param frame The frame to base the size of this Game Object on.
       */
      setSizeToFrame(frame: Phaser.Textures.Frame): this;

      /**
       * Sets the internal size of this Game Object, as used for frame or physics body creation.
       *
       * This will not change the size that the Game Object is rendered in-game.
       * For that you need to either set the scale of the Game Object (`setScale`) or call the
       * `setDisplaySize` method, which is the same thing as changing the scale but allows you
       * to do so by giving pixel values.
       *
       * If you have enabled this Game Object for input, changing the size will _not_ change the
       * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
       * @param width The width of this Game Object.
       * @param height The height of this Game Object.
       */
      setSize(width: number, height: number): this;

      /**
       * Sets the display size of this Game Object.
       *
       * Calling this will adjust the scale.
       * @param width The width of this Game Object.
       * @param height The height of this Game Object.
       */
      setDisplaySize(width: number, height: number): this;

      /**
       * The Texture this Game Object is using to render with.
       */
      texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

      /**
       * The Texture Frame this Game Object is using to render with.
       */
      frame: Phaser.Textures.Frame;

      /**
       * A boolean flag indicating if this Game Object is being cropped or not.
       * You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
       * Equally, calling `setCrop` with no arguments will reset the crop and disable it.
       */
      isCropped: boolean;

      /**
       * Applies a crop to a texture based Game Object, such as a Sprite or Image.
       *
       * The crop is a rectangle that limits the area of the texture frame that is visible during rendering.
       *
       * Cropping a Game Object does not change its size, dimensions, physics body or hit area, it just
       * changes what is shown when rendered.
       *
       * The crop coordinates are relative to the texture frame, not the Game Object, meaning 0 x 0 is the top-left.
       *
       * Therefore, if you had a Game Object that had an 800x600 sized texture, and you wanted to show only the left
       * half of it, you could call `setCrop(0, 0, 400, 600)`.
       *
       * It is also scaled to match the Game Object scale automatically. Therefore a crop rect of 100x50 would crop
       * an area of 200x100 when applied to a Game Object that had a scale factor of 2.
       *
       * You can either pass in numeric values directly, or you can provide a single Rectangle object as the first argument.
       *
       * Call this method with no arguments at all to reset the crop, or toggle the property `isCropped` to `false`.
       *
       * You should do this if the crop rectangle becomes the same size as the frame itself, as it will allow
       * the renderer to skip several internal calculations.
       * @param x The x coordinate to start the crop from. Or a Phaser.Geom.Rectangle object, in which case the rest of the arguments are ignored.
       * @param y The y coordinate to start the crop from.
       * @param width The width of the crop rectangle in pixels.
       * @param height The height of the crop rectangle in pixels.
       */
      setCrop(x?: number | Phaser.Geom.Rectangle, y?: number, width?: number, height?: number): this;

      /**
       * Sets the texture and frame this Game Object will use to render with.
       *
       * Textures are referenced by their string-based keys, as stored in the Texture Manager.
       * @param key The key of the texture to be used, as stored in the Texture Manager.
       * @param frame The name or index of the frame within the Texture.
       */
      setTexture(key: string, frame?: string | number): this;

      /**
       * Sets the frame this Game Object will use to render with.
       *
       * The Frame has to belong to the current Texture being used.
       *
       * It can be either a string or an index.
       *
       * Calling `setFrame` will modify the `width` and `height` properties of your Game Object.
       * It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.
       * @param frame The name or index of the frame within the Texture.
       * @param updateSize Should this call adjust the size of the Game Object? Default true.
       * @param updateOrigin Should this call adjust the origin of the Game Object? Default true.
       */
      setFrame(frame: string | number, updateSize?: boolean, updateOrigin?: boolean): this;

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
       * The x position of this Game Object.
       */
      x: number;

      /**
       * The y position of this Game Object.
       */
      y: number;

      /**
       * The z position of this Game Object.
       *
       * Note: The z position does not control the rendering order of 2D Game Objects. Use
       * {@link Phaser.GameObjects.Components.Depth#depth} instead.
       */
      z: number;

      /**
       * The w position of this Game Object.
       */
      w: number;

      /**
       * This is a special setter that allows you to set both the horizontal and vertical scale of this Game Object
       * to the same value, at the same time. When reading this value the result returned is `(scaleX + scaleY) / 2`.
       *
       * Use of this property implies you wish the horizontal and vertical scales to be equal to each other. If this
       * isn't the case, use the `scaleX` or `scaleY` properties instead.
       */
      scale: number;

      /**
       * The horizontal scale of this Game Object.
       */
      scaleX: number;

      /**
       * The vertical scale of this Game Object.
       */
      scaleY: number;

      /**
       * The angle of this Game Object as expressed in degrees.
       *
       * Phaser uses a right-hand clockwise rotation system, where 0 is right, 90 is down, 180/-180 is left
       * and -90 is up.
       *
       * If you prefer to work in radians, see the `rotation` property instead.
       */
      angle: number;

      /**
       * The angle of this Game Object in radians.
       *
       * Phaser uses a right-hand clockwise rotation system, where 0 is right, PI/2 is down, +-PI is left
       * and -PI/2 is up.
       *
       * If you prefer to work in degrees, see the `angle` property instead.
       */
      rotation: number;

      /**
       * Sets the position of this Game Object.
       * @param x The x position of this Game Object. Default 0.
       * @param y The y position of this Game Object. If not set it will use the `x` value. Default x.
       * @param z The z position of this Game Object. Default 0.
       * @param w The w position of this Game Object. Default 0.
       */
      setPosition(x?: number, y?: number, z?: number, w?: number): this;

      /**
       * Copies an object's coordinates to this Game Object's position.
       * @param source An object with numeric 'x', 'y', 'z', or 'w' properties. Undefined values are not copied.
       */
      copyPosition(source: Phaser.Types.Math.Vector2Like | Phaser.Types.Math.Vector3Like | Phaser.Types.Math.Vector4Like): this;

      /**
       * Sets the position of this Game Object to be a random position within the confines of
       * the given area.
       *
       * If no area is specified a random position between 0 x 0 and the game width x height is used instead.
       *
       * The position does not factor in the size of this Game Object, meaning that only the origin is
       * guaranteed to be within the area.
       * @param x The x position of the top-left of the random area. Default 0.
       * @param y The y position of the top-left of the random area. Default 0.
       * @param width The width of the random area.
       * @param height The height of the random area.
       */
      setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

      /**
       * Sets the rotation of this Game Object.
       * @param radians The rotation of this Game Object, in radians. Default 0.
       */
      setRotation(radians?: number): this;

      /**
       * Sets the angle of this Game Object.
       * @param degrees The rotation of this Game Object, in degrees. Default 0.
       */
      setAngle(degrees?: number): this;

      /**
       * Sets the scale of this Game Object.
       * @param x The horizontal scale of this Game Object.
       * @param y The vertical scale of this Game Object. If not set it will use the `x` value. Default x.
       */
      setScale(x: number, y?: number): this;

      /**
       * Sets the x position of this Game Object.
       * @param value The x position of this Game Object. Default 0.
       */
      setX(value?: number): this;

      /**
       * Sets the y position of this Game Object.
       * @param value The y position of this Game Object. Default 0.
       */
      setY(value?: number): this;

      /**
       * Sets the z position of this Game Object.
       *
       * Note: The z position does not control the rendering order of 2D Game Objects. Use
       * {@link Phaser.GameObjects.Components.Depth#setDepth} instead.
       * @param value The z position of this Game Object. Default 0.
       */
      setZ(value?: number): this;

      /**
       * Sets the w position of this Game Object.
       * @param value The w position of this Game Object. Default 0.
       */
      setW(value?: number): this;

      /**
       * Gets the local transform matrix for this Game Object.
       * @param tempMatrix The matrix to populate with the values from this Game Object.
       */
      getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

      /**
       * Gets the world transform matrix for this Game Object, factoring in any parent Containers.
       * @param tempMatrix The matrix to populate with the values from this Game Object.
       * @param parentMatrix A temporary matrix to hold parent values during the calculations.
       */
      getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix, parentMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

      /**
       * Takes the given `x` and `y` coordinates and converts them into local space for this
       * Game Object, taking into account parent and local transforms, and the Display Origin.
       *
       * The returned Vector2 contains the translated point in its properties.
       *
       * A Camera needs to be provided in order to handle modified scroll factors. If no
       * camera is specified, it will use the `main` camera from the Scene to which this
       * Game Object belongs.
       * @param x The x position to translate.
       * @param y The y position to translate.
       * @param point A Vector2, or point-like object, to store the results in.
       * @param camera The Camera which is being tested against. If not given will use the Scene default camera.
       */
      getLocalPoint(x: number, y: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

      /**
       * Gets the sum total rotation of all of this Game Objects parent Containers.
       *
       * The returned value is in radians and will be zero if this Game Object has no parent container.
       */
      getParentRotation(): number;

      /**
       * The visible state of the Game Object.
       *
       * An invisible Game Object will skip rendering, but will still process update logic.
       */
      visible: boolean;

      /**
       * Sets the visibility of this Game Object.
       *
       * An invisible Game Object will skip rendering, but will still process update logic.
       * @param value The visible state of the Game Object.
       */
      setVisible(value: boolean): this;

      /**
       * Sets the restitution on the physics object.
       * @param value A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8 means the body may bounce back with approximately 80% of its kinetic energy. Note that collision response is based on pairs of bodies, and that restitution values are combined with the following formula: `Math.max(bodyA.restitution, bodyB.restitution)`
       */
      setBounce(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision category of this Game Object's Matter Body. This number must be a power of two between 2^0 (= 1) and 2^31.
       * Two bodies with different collision groups (see {@link #setCollisionGroup}) will only collide if their collision
       * categories are included in their collision masks (see {@link #setCollidesWith}).
       * @param value Unique category bitfield.
       */
      setCollisionCategory(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision group of this Game Object's Matter Body. If this is zero or two Matter Bodies have different values,
       * they will collide according to the usual rules (see {@link #setCollisionCategory} and {@link #setCollisionGroup}).
       * If two Matter Bodies have the same positive value, they will always collide; if they have the same negative value,
       * they will never collide.
       * @param value Unique group index.
       */
      setCollisionGroup(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision mask for this Game Object's Matter Body. Two Matter Bodies with different collision groups will only
       * collide if each one includes the other's category in its mask based on a bitwise AND, i.e. `(categoryA & maskB) !== 0`
       * and `(categoryB & maskA) !== 0` are both true.
       * @param categories A unique category bitfield, or an array of them.
       */
      setCollidesWith(categories: number | number[]): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke when this body starts colliding with another.
       */
      setOnCollide(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke when this body stops colliding with another.
       */
      setOnCollideEnd(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke for the duration of this body colliding with another.
       */
      setOnCollideActive(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a reference to the other body, along with a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param body The body, or an array of bodies, to test for collisions with.
       * @param callback The callback to invoke when this body collides with the given body or bodies.
       */
      setOnCollideWith(body: MatterJS.Body | MatterJS.Body[], callback: Function): Phaser.GameObjects.GameObject;

      /**
       * Applies a force to a body.
       * @param force A Vector that specifies the force to apply.
       */
      applyForce(force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;

      /**
       * Applies a force to a body from a given position.
       * @param position The position in which the force comes from.
       * @param force A Vector that specifies the force to apply.
       */
      applyForceFrom(position: Phaser.Math.Vector2, force: Phaser.Math.Vector2): Phaser.GameObjects.GameObject;

      /**
       * Apply thrust to the forward position of the body.
       *
       * Use very small values, such as 0.1, depending on the mass and required speed.
       * @param speed A speed value to be applied to a directional force.
       */
      thrust(speed: number): Phaser.GameObjects.GameObject;

      /**
       * Apply thrust to the left position of the body.
       *
       * Use very small values, such as 0.1, depending on the mass and required speed.
       * @param speed A speed value to be applied to a directional force.
       */
      thrustLeft(speed: number): Phaser.GameObjects.GameObject;

      /**
       * Apply thrust to the right position of the body.
       *
       * Use very small values, such as 0.1, depending on the mass and required speed.
       * @param speed A speed value to be applied to a directional force.
       */
      thrustRight(speed: number): Phaser.GameObjects.GameObject;

      /**
       * Apply thrust to the back position of the body.
       *
       * Use very small values, such as 0.1, depending on the mass and required speed.
       * @param speed A speed value to be applied to a directional force.
       */
      thrustBack(speed: number): Phaser.GameObjects.GameObject;

      /**
       * Sets new friction values for this Game Object's Matter Body.
       * @param value The new friction of the body, between 0 and 1, where 0 allows the Body to slide indefinitely, while 1 allows it to stop almost immediately after a force is applied.
       * @param air If provided, the new air resistance of the Body. The higher the value, the faster the Body will slow as it moves through space. 0 means the body has no air resistance.
       * @param fstatic If provided, the new static friction of the Body. The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary. 0 means the body will never "stick" when it is nearly stationary.
       */
      setFriction(value: number, air?: number, fstatic?: number): Phaser.GameObjects.GameObject;

      /**
       * Sets a new air resistance for this Game Object's Matter Body.
       * A value of 0 means the Body will never slow as it moves through space.
       * The higher the value, the faster a Body slows when moving through space.
       * @param value The new air resistance for the Body.
       */
      setFrictionAir(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets a new static friction for this Game Object's Matter Body.
       * A value of 0 means the Body will never "stick" when it is nearly stationary.
       * The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary.
       * @param value The new static friction for the Body.
       */
      setFrictionStatic(value: number): Phaser.GameObjects.GameObject;

      /**
       * A togglable function for ignoring world gravity in real-time on the current body.
       * @param value Set to true to ignore the effect of world gravity, or false to not ignore it.
       */
      setIgnoreGravity(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Sets the mass of the Game Object's Matter Body.
       * @param value The new mass of the body.
       */
      setMass(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets density of the body.
       * @param value The new density of the body.
       */
      setDensity(value: number): Phaser.GameObjects.GameObject;

      /**
       * The body's center of mass.
       *
       * Calling this creates a new `Vector2 each time to avoid mutation.
       *
       * If you only need to read the value and won't change it, you can get it from `GameObject.body.centerOfMass`.
       */
      readonly centerOfMass: Phaser.Math.Vector2;

      /**
       * Set the body belonging to this Game Object to be a sensor.
       * Sensors trigger collision events, but don't react with colliding body physically.
       * @param value `true` to set the body as a sensor, or `false` to disable it.
       */
      setSensor(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Is the body belonging to this Game Object a sensor or not?
       */
      isSensor(): boolean;

      /**
       * Set the body on a Game Object to a rectangle.
       *
       * Calling this methods resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param width Width of the rectangle.
       * @param height Height of the rectangle.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setRectangle(width: number, height: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Set the body on a Game Object to a circle.
       *
       * Calling this methods resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param radius The radius of the circle.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setCircle(radius: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Set the body on the Game Object to a polygon shape.
       *
       * Calling this methods resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param radius The "radius" of the polygon, i.e. the distance from its center to any vertex. This is also the radius of its circumcircle.
       * @param sides The number of sides the polygon will have.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setPolygon(radius: number, sides: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Set the body on the Game Object to a trapezoid shape.
       *
       * Calling this methods resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param width The width of the trapezoid Body.
       * @param height The height of the trapezoid Body.
       * @param slope The slope of the trapezoid. 0 creates a rectangle, while 1 creates a triangle. Positive values make the top side shorter, while negative values make the bottom side shorter.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setTrapezoid(width: number, height: number, slope: number, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Set this Game Object to use the given existing Matter Body.
       *
       * The body is first removed from the world before being added to this Game Object.
       * @param body The Body this Game Object should use.
       * @param addToWorld Should the body be immediately added to the World? Default true.
       */
      setExistingBody(body: MatterJS.BodyType, addToWorld?: boolean): Phaser.GameObjects.GameObject;

      /**
       * Set this Game Object to create and use a new Body based on the configuration object given.
       *
       * Calling this method resets previous properties you may have set on the body, including
       * plugins, mass, friction, etc. So be sure to re-apply these in the options object if needed.
       * @param config Either a string, such as `circle`, or a Matter Set Body Configuration object.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      setBody(config: string | Phaser.Types.Physics.Matter.MatterSetBodyConfig, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): Phaser.GameObjects.GameObject;

      /**
       * Sets this Body to sleep.
       */
      setToSleep(): this;

      /**
       * Wakes this Body if asleep.
       */
      setAwake(): this;

      /**
       * Sets the number of updates in which this body must have near-zero velocity before it is set as sleeping (if sleeping is enabled by the engine).
       * @param value A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping. Default 60.
       */
      setSleepThreshold(value?: number): this;

      /**
       * Enable sleep and wake events for this body.
       *
       * By default when a body goes to sleep, or wakes up, it will not emit any events.
       *
       * The events are emitted by the Matter World instance and can be listened to via
       * the `SLEEP_START` and `SLEEP_END` events.
       * @param start `true` if you want the sleep start event to be emitted for this body.
       * @param end `true` if you want the sleep end event to be emitted for this body.
       */
      setSleepEvents(start: boolean, end: boolean): this;

      /**
       * Enables or disables the Sleep Start event for this body.
       * @param value `true` to enable the sleep event, or `false` to disable it.
       */
      setSleepStartEvent(value: boolean): this;

      /**
       * Enables or disables the Sleep End event for this body.
       * @param value `true` to enable the sleep event, or `false` to disable it.
       */
      setSleepEndEvent(value: boolean): this;

      /**
       * Changes the physics body to be either static `true` or dynamic `false`.
       * @param value `true` to set the body as being static, or `false` to make it dynamic.
       */
      setStatic(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Returns `true` if the body is static, otherwise `false` for a dynamic body.
       */
      isStatic(): boolean;

      /**
       * Setting fixed rotation sets the Body inertia to Infinity, which stops it
       * from being able to rotate when forces are applied to it.
       */
      setFixedRotation(): this;

      /**
       * Sets the angular velocity of the body instantly.
       * Position, angle, force etc. are unchanged.
       * @param value The angular velocity.
       */
      setAngularVelocity(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the horizontal velocity of the physics body.
       * @param x The horizontal velocity value.
       */
      setVelocityX(x: number): Phaser.GameObjects.GameObject;

      /**
       * Sets vertical velocity of the physics body.
       * @param y The vertical velocity value.
       */
      setVelocityY(y: number): Phaser.GameObjects.GameObject;

      /**
       * Sets both the horizontal and vertical velocity of the physics body.
       * @param x The horizontal velocity value.
       * @param y The vertical velocity value, it can be either positive or negative. If not given, it will be the same as the `x` value. Default x.
       */
      setVelocity(x: number, y?: number): Phaser.GameObjects.GameObject;

    }

    /**
     * A wrapper around a Tile that provides access to a corresponding Matter body. A tile can only
     * have one Matter body associated with it. You can either pass in an existing Matter body for
     * the tile or allow the constructor to create the corresponding body for you. If the Tile has a
     * collision group (defined in Tiled), those shapes will be used to create the body. If not, the
     * tile's rectangle bounding box will be used.
     *
     * The corresponding body will be accessible on the Tile itself via Tile.physics.matterBody.
     *
     * Note: not all Tiled collision shapes are supported. See
     * Phaser.Physics.Matter.TileBody#setFromTileCollision for more information.
     */
    class TileBody extends Phaser.Events.EventEmitter implements Phaser.Physics.Matter.Components.Bounce, Phaser.Physics.Matter.Components.Collision, Phaser.Physics.Matter.Components.Friction, Phaser.Physics.Matter.Components.Gravity, Phaser.Physics.Matter.Components.Mass, Phaser.Physics.Matter.Components.Sensor, Phaser.Physics.Matter.Components.Sleep, Phaser.Physics.Matter.Components.Static {
      /**
       *
       * @param world The Matter world instance this body belongs to.
       * @param tile The target tile that should have a Matter body.
       * @param options Options to be used when creating the Matter body.
       */
      constructor(world: Phaser.Physics.Matter.World, tile: Phaser.Tilemaps.Tile, options?: Phaser.Types.Physics.Matter.MatterTileOptions);

      /**
       * The tile object the body is associated with.
       */
      tile: Phaser.Tilemaps.Tile;

      /**
       * The Matter world the body exists within.
       */
      world: Phaser.Physics.Matter.World;

      /**
       * Sets the current body to a rectangle that matches the bounds of the tile.
       * @param options Options to be used when creating the Matter body. See MatterJS.Body for a list of what Matter accepts.
       */
      setFromTileRectangle(options?: Phaser.Types.Physics.Matter.MatterBodyTileOptions): Phaser.Physics.Matter.TileBody;

      /**
       * Sets the current body from the collision group associated with the Tile. This is typically
       * set up in Tiled's collision editor.
       *
       * Note: Matter doesn't support all shapes from Tiled. Rectangles and polygons are directly
       * supported. Ellipses are converted into circle bodies. Polylines are treated as if they are
       * closed polygons. If a tile has multiple shapes, a multi-part body will be created. Concave
       * shapes are supported if poly-decomp library is included. Decomposition is not guaranteed to
       * work for complex shapes (e.g. holes), so it's often best to manually decompose a concave
       * polygon into multiple convex polygons yourself.
       * @param options Options to be used when creating the Matter body. See MatterJS.Body for a list of what Matter accepts.
       */
      setFromTileCollision(options?: Phaser.Types.Physics.Matter.MatterBodyTileOptions): Phaser.Physics.Matter.TileBody;

      /**
       * Sets the current body to the given body. This will remove the previous body, if one already
       * exists.
       * @param body The new Matter body to use.
       * @param addToWorld Whether or not to add the body to the Matter world. Default true.
       */
      setBody(body: MatterJS.BodyType, addToWorld?: boolean): Phaser.Physics.Matter.TileBody;

      /**
       * Removes the current body from the TileBody and from the Matter world
       */
      removeBody(): Phaser.Physics.Matter.TileBody;

      /**
       * Removes the current body from the tile and the world.
       */
      destroy(): Phaser.Physics.Matter.TileBody;

      /**
       * Sets the restitution on the physics object.
       * @param value A Number that defines the restitution (elasticity) of the body. The value is always positive and is in the range (0, 1). A value of 0 means collisions may be perfectly inelastic and no bouncing may occur. A value of 0.8 means the body may bounce back with approximately 80% of its kinetic energy. Note that collision response is based on pairs of bodies, and that restitution values are combined with the following formula: `Math.max(bodyA.restitution, bodyB.restitution)`
       */
      setBounce(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision category of this Game Object's Matter Body. This number must be a power of two between 2^0 (= 1) and 2^31.
       * Two bodies with different collision groups (see {@link #setCollisionGroup}) will only collide if their collision
       * categories are included in their collision masks (see {@link #setCollidesWith}).
       * @param value Unique category bitfield.
       */
      setCollisionCategory(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision group of this Game Object's Matter Body. If this is zero or two Matter Bodies have different values,
       * they will collide according to the usual rules (see {@link #setCollisionCategory} and {@link #setCollisionGroup}).
       * If two Matter Bodies have the same positive value, they will always collide; if they have the same negative value,
       * they will never collide.
       * @param value Unique group index.
       */
      setCollisionGroup(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets the collision mask for this Game Object's Matter Body. Two Matter Bodies with different collision groups will only
       * collide if each one includes the other's category in its mask based on a bitwise AND, i.e. `(categoryA & maskB) !== 0`
       * and `(categoryB & maskA) !== 0` are both true.
       * @param categories A unique category bitfield, or an array of them.
       */
      setCollidesWith(categories: number | number[]): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke when this body starts colliding with another.
       */
      setOnCollide(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke when this body stops colliding with another.
       */
      setOnCollideEnd(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param callback The callback to invoke for the duration of this body colliding with another.
       */
      setOnCollideActive(callback: Function): Phaser.GameObjects.GameObject;

      /**
       * The callback is sent a reference to the other body, along with a `Phaser.Types.Physics.Matter.MatterCollisionData` object.
       *
       * This does not change the bodies collision category, group or filter. Those must be set in addition
       * to the callback.
       * @param body The body, or an array of bodies, to test for collisions with.
       * @param callback The callback to invoke when this body collides with the given body or bodies.
       */
      setOnCollideWith(body: MatterJS.Body | MatterJS.Body[], callback: Function): Phaser.GameObjects.GameObject;

      /**
       * Sets new friction values for this Game Object's Matter Body.
       * @param value The new friction of the body, between 0 and 1, where 0 allows the Body to slide indefinitely, while 1 allows it to stop almost immediately after a force is applied.
       * @param air If provided, the new air resistance of the Body. The higher the value, the faster the Body will slow as it moves through space. 0 means the body has no air resistance.
       * @param fstatic If provided, the new static friction of the Body. The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary. 0 means the body will never "stick" when it is nearly stationary.
       */
      setFriction(value: number, air?: number, fstatic?: number): Phaser.GameObjects.GameObject;

      /**
       * Sets a new air resistance for this Game Object's Matter Body.
       * A value of 0 means the Body will never slow as it moves through space.
       * The higher the value, the faster a Body slows when moving through space.
       * @param value The new air resistance for the Body.
       */
      setFrictionAir(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets a new static friction for this Game Object's Matter Body.
       * A value of 0 means the Body will never "stick" when it is nearly stationary.
       * The higher the value (e.g. 10), the more force it will take to initially get the Body moving when it is nearly stationary.
       * @param value The new static friction for the Body.
       */
      setFrictionStatic(value: number): Phaser.GameObjects.GameObject;

      /**
       * A togglable function for ignoring world gravity in real-time on the current body.
       * @param value Set to true to ignore the effect of world gravity, or false to not ignore it.
       */
      setIgnoreGravity(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Sets the mass of the Game Object's Matter Body.
       * @param value The new mass of the body.
       */
      setMass(value: number): Phaser.GameObjects.GameObject;

      /**
       * Sets density of the body.
       * @param value The new density of the body.
       */
      setDensity(value: number): Phaser.GameObjects.GameObject;

      /**
       * The body's center of mass.
       *
       * Calling this creates a new `Vector2 each time to avoid mutation.
       *
       * If you only need to read the value and won't change it, you can get it from `GameObject.body.centerOfMass`.
       */
      readonly centerOfMass: Phaser.Math.Vector2;

      /**
       * Set the body belonging to this Game Object to be a sensor.
       * Sensors trigger collision events, but don't react with colliding body physically.
       * @param value `true` to set the body as a sensor, or `false` to disable it.
       */
      setSensor(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Is the body belonging to this Game Object a sensor or not?
       */
      isSensor(): boolean;

      /**
       * Sets this Body to sleep.
       */
      setToSleep(): this;

      /**
       * Wakes this Body if asleep.
       */
      setAwake(): this;

      /**
       * Sets the number of updates in which this body must have near-zero velocity before it is set as sleeping (if sleeping is enabled by the engine).
       * @param value A `Number` that defines the number of updates in which this body must have near-zero velocity before it is set as sleeping. Default 60.
       */
      setSleepThreshold(value?: number): this;

      /**
       * Enable sleep and wake events for this body.
       *
       * By default when a body goes to sleep, or wakes up, it will not emit any events.
       *
       * The events are emitted by the Matter World instance and can be listened to via
       * the `SLEEP_START` and `SLEEP_END` events.
       * @param start `true` if you want the sleep start event to be emitted for this body.
       * @param end `true` if you want the sleep end event to be emitted for this body.
       */
      setSleepEvents(start: boolean, end: boolean): this;

      /**
       * Enables or disables the Sleep Start event for this body.
       * @param value `true` to enable the sleep event, or `false` to disable it.
       */
      setSleepStartEvent(value: boolean): this;

      /**
       * Enables or disables the Sleep End event for this body.
       * @param value `true` to enable the sleep event, or `false` to disable it.
       */
      setSleepEndEvent(value: boolean): this;

      /**
       * Changes the physics body to be either static `true` or dynamic `false`.
       * @param value `true` to set the body as being static, or `false` to make it dynamic.
       */
      setStatic(value: boolean): Phaser.GameObjects.GameObject;

      /**
       * Returns `true` if the body is static, otherwise `false` for a dynamic body.
       */
      isStatic(): boolean;

    }

    /**
     * Use PhysicsEditorParser.parseBody() to build a Matter body object, based on a physics data file
     * created and exported with PhysicsEditor (https://www.codeandweb.com/physicseditor).
     */
    namespace PhysicsEditorParser {
      /**
       * Parses a body element exported by PhysicsEditor.
       * @param x The horizontal world location of the body.
       * @param y The vertical world location of the body.
       * @param config The body configuration and fixture (child body) definitions, as exported by PhysicsEditor.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      function parseBody(x: number, y: number, config: object, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): MatterJS.BodyType;

      /**
       * Parses an element of the "fixtures" list exported by PhysicsEditor
       * @param fixtureConfig The fixture object to parse.
       */
      function parseFixture(fixtureConfig: object): MatterJS.BodyType[];

      /**
       * Parses the "vertices" lists exported by PhysicsEditor.
       * @param vertexSets The vertex lists to parse.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      function parseVertices(vertexSets: any[], options?: Phaser.Types.Physics.Matter.MatterBodyConfig): MatterJS.BodyType[];

    }

    /**
     * Creates a body using the supplied physics data, as provided by a JSON file.
     *
     * The data file should be loaded as JSON:
     *
     * ```javascript
     * preload ()
     * {
     *   this.load.json('ninjas', 'assets/ninjas.json);
     * }
     *
     * create ()
     * {
     *   const ninjaShapes = this.cache.json.get('ninjas');
     *
     *   this.matter.add.fromJSON(400, 300, ninjaShapes.shinobi);
     * }
     * ```
     *
     * Do not pass the entire JSON file to this method, but instead pass one of the shapes contained within it.
     *
     * If you pas in an `options` object, any settings in there will override those in the config object.
     *
     * The structure of the JSON file is as follows:
     *
     * ```text
     * {
     *   'generator_info': // The name of the application that created the JSON data
     *   'shapeName': {
     *     'type': // The type of body
     *     'label': // Optional body label
     *     'vertices': // An array, or an array of arrays, containing the vertex data in x/y object pairs
     *   }
     * }
     * ```
     *
     * At the time of writing, only the Phaser Physics Tracer App exports in this format.
     */
    namespace PhysicsJSONParser {
      /**
       * Parses a body element from the given JSON data.
       * @param x The horizontal world location of the body.
       * @param y The vertical world location of the body.
       * @param config The body configuration data.
       * @param options An optional Body configuration object that is used to set initial Body properties on creation.
       */
      function parseBody(x: number, y: number, config: object, options?: Phaser.Types.Physics.Matter.MatterBodyConfig): MatterJS.BodyType;

    }

    /**
     * A Pointer Constraint is a special type of constraint that allows you to click
     * and drag bodies in a Matter World. It monitors the active Pointers in a Scene,
     * and when one is pressed down it checks to see if that hit any part of any active
     * body in the world. If it did, and the body has input enabled, it will begin to
     * drag it until either released, or you stop it via the `stopDrag` method.
     *
     * You can adjust the stiffness, length and other properties of the constraint via
     * the `options` object on creation.
     */
    class PointerConstraint {
      /**
       *
       * @param scene A reference to the Scene to which this Pointer Constraint belongs.
       * @param world A reference to the Matter World instance to which this Constraint belongs.
       * @param options A Constraint configuration object.
       */
      constructor(scene: Phaser.Scene, world: Phaser.Physics.Matter.World, options?: object);

      /**
       * A reference to the Scene to which this Pointer Constraint belongs.
       * This is the same Scene as the Matter World instance.
       */
      scene: Phaser.Scene;

      /**
       * A reference to the Matter World instance to which this Constraint belongs.
       */
      world: Phaser.Physics.Matter.World;

      /**
       * The Camera the Pointer was interacting with when the input
       * down event was processed.
       */
      camera: Phaser.Cameras.Scene2D.Camera;

      /**
       * A reference to the Input Pointer that activated this Constraint.
       * This is set in the `onDown` handler.
       */
      pointer: Phaser.Input.Pointer;

      /**
       * Is this Constraint active or not?
       *
       * An active constraint will be processed each update. An inactive one will be skipped.
       * Use this to toggle a Pointer Constraint on and off.
       */
      active: boolean;

      /**
       * The internal transformed position.
       */
      position: Phaser.Math.Vector2;

      /**
       * The body that is currently being dragged, if any.
       */
      body: MatterJS.BodyType;

      /**
       * The part of the body that was clicked on to start the drag.
       */
      part: MatterJS.BodyType;

      /**
       * The native Matter Constraint that is used to attach to bodies.
       */
      constraint: MatterJS.ConstraintType;

      /**
       * A Pointer has been pressed down onto the Scene.
       *
       * If this Constraint doesn't have an active Pointer then a hit test is set to
       * run against all active bodies in the world during the _next_ call to `update`.
       * If a body is found, it is bound to this constraint and the drag begins.
       * @param pointer A reference to the Pointer that was pressed.
       */
      onDown(pointer: Phaser.Input.Pointer): void;

      /**
       * A Pointer has been released from the Scene. If it was the one this constraint was using, it's cleared.
       * @param pointer A reference to the Pointer that was pressed.
       */
      onUp(pointer: Phaser.Input.Pointer): void;

      /**
       * Scans all active bodies in the current Matter World to see if any of them
       * are hit by the Pointer. The _first one_ found to hit is set as the active contraint
       * body.
       */
      getBody(): boolean;

      /**
       * Scans the current body to determine if a part of it was clicked on.
       * If a part is found the body is set as the `constraint.bodyB` property,
       * as well as the `body` property of this class. The part is also set.
       * @param body The Matter Body to check.
       * @param position A translated hit test position.
       */
      hitTestBody(body: MatterJS.BodyType, position: Phaser.Math.Vector2): boolean;

      /**
       * Internal update handler. Called in the Matter BEFORE_UPDATE step.
       */
      update(): void;

      /**
       * Stops the Pointer Constraint from dragging the body any further.
       *
       * This is called automatically if the Pointer is released while actively
       * dragging a body. Or, you can call it manually to release a body from a
       * constraint without having to first release the pointer.
       */
      stopDrag(): void;

      /**
       * Destroys this Pointer Constraint instance and all of its references.
       */
      destroy(): void;

    }

    /**
     * The Matter World class is responsible for managing one single instance of a Matter Physics World for Phaser.
     *
     * Access this via `this.matter.world` from within a Scene.
     *
     * This class creates a Matter JS World Composite along with the Matter JS Engine during instantiation. It also
     * handles delta timing, bounds, body and constraint creation and debug drawing.
     *
     * If you wish to access the Matter JS World object directly, see the `localWorld` property.
     * If you wish to access the Matter Engine directly, see the `engine` property.
     *
     * This class is an Event Emitter and will proxy _all_ Matter JS events, as they are received.
     */
    class World extends Phaser.Events.EventEmitter {
      /**
       *
       * @param scene The Scene to which this Matter World instance belongs.
       * @param config The Matter World configuration object.
       */
      constructor(scene: Phaser.Scene, config: Phaser.Types.Physics.Matter.MatterWorldConfig);

      /**
       * The Scene to which this Matter World instance belongs.
       */
      scene: Phaser.Scene;

      /**
       * An instance of the MatterJS Engine.
       */
      engine: MatterJS.Engine;

      /**
       * A `World` composite object that will contain all simulated bodies and constraints.
       */
      localWorld: MatterJS.World;

      /**
       * An object containing the 4 wall bodies that bound the physics world.
       */
      walls: object;

      /**
       * A flag that toggles if the world is enabled or not.
       */
      enabled: boolean;

      /**
       * The correction argument is an optional Number that specifies the time correction factor to apply to the update.
       * This can help improve the accuracy of the simulation in cases where delta is changing between updates.
       * The value of correction is defined as delta / lastDelta, i.e. the percentage change of delta over the last step.
       * Therefore the value is always 1 (no correction) when delta is constant (or when no correction is desired, which is the default).
       * See the paper on Time Corrected Verlet for more information.
       */
      correction: number;

      /**
       * This function is called every time the core game loop steps, which is bound to the
       * Request Animation Frame frequency unless otherwise modified.
       *
       * The function is passed two values: `time` and `delta`, both of which come from the game step values.
       *
       * It must return a number. This number is used as the delta value passed to Matter.Engine.update.
       *
       * You can override this function with your own to define your own timestep.
       *
       * If you need to update the Engine multiple times in a single game step then call
       * `World.update` as many times as required. Each call will trigger the `getDelta` function.
       * If you wish to have full control over when the Engine updates then see the property `autoUpdate`.
       *
       * You can also adjust the number of iterations that Engine.update performs.
       * Use the Scene Matter Physics config object to set the following properties:
       *
       * positionIterations (defaults to 6)
       * velocityIterations (defaults to 4)
       * constraintIterations (defaults to 2)
       *
       * Adjusting these values can help performance in certain situations, depending on the physics requirements
       * of your game.
       */
      getDelta: Function;

      /**
       * The Matter JS Runner Configuration object.
       *
       * This object is populated via the Matter Configuration object's `runner` property and is
       * updated constantly during the game step.
       */
      runner: Phaser.Types.Physics.Matter.MatterRunnerConfig;

      /**
       * Automatically call Engine.update every time the game steps.
       * If you disable this then you are responsible for calling `World.step` directly from your game.
       * If you call `set60Hz` or `set30Hz` then `autoUpdate` is reset to `true`.
       */
      autoUpdate: boolean;

      /**
       * A flag that controls if the debug graphics will be drawn to or not.
       */
      drawDebug: boolean;

      /**
       * An instance of the Graphics object the debug bodies are drawn to, if enabled.
       */
      debugGraphic: Phaser.GameObjects.Graphics;

      /**
       * The debug configuration object.
       *
       * The values stored in this object are read from the Matter World Config `debug` property.
       *
       * When a new Body or Constraint is _added to the World_, they are given the values stored in this object,
       * unless they have their own `render` object set that will override them.
       *
       * Note that while you can modify the values of properties in this object at run-time, it will not change
       * any of the Matter objects _already added_. It will only impact objects newly added to the world, or one
       * that is removed and then re-added at a later time.
       */
      debugConfig: Phaser.Types.Physics.Matter.MatterDebugConfig;

      /**
       * Sets the debug render style for the children of the given Matter Composite.
       *
       * Composites themselves do not render, but they can contain bodies, constraints and other composites that may do.
       * So the children of this composite are passed to the `setBodyRenderStyle`, `setCompositeRenderStyle` and
       * `setConstraintRenderStyle` methods accordingly.
       * @param composite The Matter Composite to set the render style on.
       */
      setCompositeRenderStyle(composite: MatterJS.CompositeType): this;

      /**
       * Sets the debug render style for the given Matter Body.
       *
       * If you are using this on a Phaser Game Object, such as a Matter Sprite, then pass in the body property
       * to this method, not the Game Object itself.
       *
       * If you wish to skip a parameter, so it retains its current value, pass `false` for it.
       *
       * If you wish to reset the Body render colors to the defaults found in the World Debug Config, then call
       * this method with just the `body` parameter provided and no others.
       * @param body The Matter Body to set the render style on.
       * @param lineColor The line color. If `null` it will use the World Debug Config value.
       * @param lineOpacity The line opacity, between 0 and 1. If `null` it will use the World Debug Config value.
       * @param lineThickness The line thickness. If `null` it will use the World Debug Config value.
       * @param fillColor The fill color. If `null` it will use the World Debug Config value.
       * @param fillOpacity The fill opacity, between 0 and 1. If `null` it will use the World Debug Config value.
       */
      setBodyRenderStyle(body: MatterJS.BodyType, lineColor?: number, lineOpacity?: number, lineThickness?: number, fillColor?: number, fillOpacity?: number): this;

      /**
       * Sets the debug render style for the given Matter Constraint.
       *
       * If you are using this on a Phaser Game Object, then pass in the body property
       * to this method, not the Game Object itself.
       *
       * If you wish to skip a parameter, so it retains its current value, pass `false` for it.
       *
       * If you wish to reset the Constraint render colors to the defaults found in the World Debug Config, then call
       * this method with just the `constraint` parameter provided and no others.
       * @param constraint The Matter Constraint to set the render style on.
       * @param lineColor The line color. If `null` it will use the World Debug Config value.
       * @param lineOpacity The line opacity, between 0 and 1. If `null` it will use the World Debug Config value.
       * @param lineThickness The line thickness. If `null` it will use the World Debug Config value.
       * @param pinSize If this constraint is a pin, this sets the size of the pin circle. If `null` it will use the World Debug Config value.
       * @param anchorColor The color used when rendering this constraints anchors.  If `null` it will use the World Debug Config value.
       * @param anchorSize The size of the anchor circle, if this constraint has anchors. If `null` it will use the World Debug Config value.
       */
      setConstraintRenderStyle(constraint: MatterJS.ConstraintType, lineColor?: number, lineOpacity?: number, lineThickness?: number, pinSize?: number, anchorColor?: number, anchorSize?: number): this;

      /**
       * This internal method acts as a proxy between all of the Matter JS events and then re-emits them
       * via this class.
       */
      setEventsProxy(): void;

      /**
       * Sets the bounds of the Physics world to match the given world pixel dimensions.
       * You can optionally set which 'walls' to create: left, right, top or bottom.
       * If none of the walls are given it will default to use the walls settings it had previously.
       * I.e. if you previously told it to not have the left or right walls, and you then adjust the world size
       * the newly created bounds will also not have the left and right walls.
       * Explicitly state them in the parameters to override this.
       * @param x The x coordinate of the top-left corner of the bounds. Default 0.
       * @param y The y coordinate of the top-left corner of the bounds. Default 0.
       * @param width The width of the bounds.
       * @param height The height of the bounds.
       * @param thickness The thickness of each wall, in pixels. Default 64.
       * @param left If true will create the left bounds wall. Default true.
       * @param right If true will create the right bounds wall. Default true.
       * @param top If true will create the top bounds wall. Default true.
       * @param bottom If true will create the bottom bounds wall. Default true.
       */
      setBounds(x?: number, y?: number, width?: number, height?: number, thickness?: number, left?: boolean, right?: boolean, top?: boolean, bottom?: boolean): Phaser.Physics.Matter.World;

      /**
       * Updates the 4 rectangle bodies that were created, if `setBounds` was set in the Matter config, to use
       * the new positions and sizes. This method is usually only called internally via the `setBounds` method.
       * @param add `true` if the walls are being added or updated, `false` to remove them from the world.
       * @param position Either `left`, `right`, `top` or `bottom`. Only optional if `add` is `false`.
       * @param x The horizontal position to place the walls at. Only optional if `add` is `false`.
       * @param y The vertical position to place the walls at. Only optional if `add` is `false`.
       * @param width The width of the walls, in pixels. Only optional if `add` is `false`.
       * @param height The height of the walls, in pixels. Only optional if `add` is `false`.
       */
      updateWall(add: boolean, position?: string, x?: number, y?: number, width?: number, height?: number): void;

      /**
       * Creates a Phaser.GameObjects.Graphics object that is used to render all of the debug bodies and joints to.
       *
       * This method is called automatically by the constructor, if debugging has been enabled.
       *
       * The created Graphics object is automatically added to the Scene at 0x0 and given a depth of `Number.MAX_VALUE`,
       * so it renders above all else in the Scene.
       *
       * The Graphics object is assigned to the `debugGraphic` property of this class and `drawDebug` is enabled.
       */
      createDebugGraphic(): Phaser.GameObjects.Graphics;

      /**
       * Sets the world gravity and gravity scale to 0.
       */
      disableGravity(): this;

      /**
       * Sets the worlds gravity to the values given.
       *
       * Gravity effects all bodies in the world, unless they have the `ignoreGravity` flag set.
       * @param x The world gravity x component. Default 0.
       * @param y The world gravity y component. Default 1.
       * @param scale The gravity scale factor. Default 0.001.
       */
      setGravity(x?: number, y?: number, scale?: number): this;

      /**
       * Creates a rectangle Matter body and adds it to the world.
       * @param x The horizontal position of the body in the world.
       * @param y The vertical position of the body in the world.
       * @param width The width of the body.
       * @param height The height of the body.
       * @param options Optional Matter configuration object.
       */
      create(x: number, y: number, width: number, height: number, options: object): MatterJS.BodyType;

      /**
       * Adds a Matter JS object, or array of objects, to the world.
       *
       * The objects should be valid Matter JS entities, such as a Body, Composite or Constraint.
       *
       * Triggers `beforeAdd` and `afterAdd` events.
       * @param object Can be single object, or an array, and can be a body, composite or constraint.
       */
      add(object: object | object[]): this;

      /**
       * Removes a Matter JS object, or array of objects, from the world.
       *
       * The objects should be valid Matter JS entities, such as a Body, Composite or Constraint.
       *
       * Triggers `beforeRemove` and `afterRemove` events.
       * @param object Can be single object, or an array, and can be a body, composite or constraint.
       * @param deep Optionally search the objects children and recursively remove those as well. Default false.
       */
      remove(object: object | object[], deep?: boolean): this;

      /**
       * Removes a Matter JS constraint, or array of constraints, from the world.
       *
       * Triggers `beforeRemove` and `afterRemove` events.
       * @param constraint A Matter JS Constraint, or an array of constraints, to be removed.
       * @param deep Optionally search the objects children and recursively remove those as well. Default false.
       */
      removeConstraint(constraint: MatterJS.ConstraintType | MatterJS.ConstraintType[], deep?: boolean): this;

      /**
       * Adds `MatterTileBody` instances for all the colliding tiles within the given tilemap layer.
       *
       * Set the appropriate tiles in your layer to collide before calling this method!
       * @param tilemapLayer An array of tiles.
       * @param options Options to be passed to the MatterTileBody constructor. {@see Phaser.Physics.Matter.TileBody}
       */
      convertTilemapLayer(tilemapLayer: Phaser.Tilemaps.TilemapLayer, options?: object): this;

      /**
       * Adds `MatterTileBody` instances for the given tiles. This adds bodies regardless of whether the
       * tiles are set to collide or not.
       * @param tiles An array of tiles.
       * @param options Options to be passed to the MatterTileBody constructor. {@see Phaser.Physics.Matter.TileBody}
       */
      convertTiles(tiles: Phaser.Tilemaps.Tile[], options?: object): this;

      /**
       * Returns the next unique group index for which bodies will collide.
       * If `isNonColliding` is `true`, returns the next unique group index for which bodies will not collide.
       * @param isNonColliding If `true`, returns the next unique group index for which bodies will _not_ collide. Default false.
       */
      nextGroup(isNonColliding?: boolean): number;

      /**
       * Returns the next unique category bitfield (starting after the initial default category 0x0001).
       * There are 32 available.
       */
      nextCategory(): number;

      /**
       * Pauses this Matter World instance and sets `enabled` to `false`.
       *
       * A paused world will not run any simulations for the duration it is paused.
       */
      pause(): this;

      /**
       * Resumes this Matter World instance from a paused state and sets `enabled` to `true`.
       */
      resume(): this;

      /**
       * The internal update method. This is called automatically by the parent Scene.
       *
       * Moves the simulation forward in time by delta ms. Uses `World.correction` value as an optional number that
       * specifies the time correction factor to apply to the update. This can help improve the accuracy of the
       * simulation in cases where delta is changing between updates. The value of correction is defined as `delta / lastDelta`,
       * i.e. the percentage change of delta over the last step. Therefore the value is always 1 (no correction) when
       * delta is constant (or when no correction is desired, which is the default).
       * See the paper on Time Corrected Verlet for more information.
       *
       * Triggers `beforeUpdate` and `afterUpdate` events. Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
       *
       * If the World is paused, `update` is still run, but exits early and does not update the Matter Engine.
       * @param time The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
       * @param delta The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
       */
      update(time: number, delta: number): void;

      /**
       * Manually advances the physics simulation by one iteration.
       *
       * You can optionally pass in the `delta` and `correction` values to be used by Engine.update.
       * If undefined they use the Matter defaults of 60Hz and no correction.
       *
       * Calling `step` directly bypasses any checks of `enabled` or `autoUpdate`.
       *
       * It also ignores any custom `getDelta` functions, as you should be passing the delta
       * value in to this call.
       *
       * You can adjust the number of iterations that Engine.update performs internally.
       * Use the Scene Matter Physics config object to set the following properties:
       *
       * positionIterations (defaults to 6)
       * velocityIterations (defaults to 4)
       * constraintIterations (defaults to 2)
       *
       * Adjusting these values can help performance in certain situations, depending on the physics requirements
       * of your game.
       * @param delta The delta value. Default 16.666.
       * @param correction Optional delta correction value. Default 1.
       */
      step(delta?: number, correction?: number): void;

      /**
       * Runs the Matter Engine.update at a fixed timestep of 60Hz.
       */
      update60Hz(): number;

      /**
       * Runs the Matter Engine.update at a fixed timestep of 30Hz.
       */
      update30Hz(): number;

      /**
       * Returns `true` if the given body can be found within the World.
       * @param body The Matter Body, or Game Object, to search for within the world.
       */
      has(body: MatterJS.Body | Phaser.GameObjects.GameObject): MatterJS.BodyType[];

      /**
       * Returns all the bodies in the Matter World, including all bodies in children, recursively.
       */
      getAllBodies(): MatterJS.BodyType[];

      /**
       * Returns all the constraints in the Matter World, including all constraints in children, recursively.
       */
      getAllConstraints(): MatterJS.ConstraintType[];

      /**
       * Returns all the composites in the Matter World, including all composites in children, recursively.
       */
      getAllComposites(): MatterJS.CompositeType[];

      /**
       * Renders the Engine Broadphase Controller Grid to the given Graphics instance.
       *
       * The debug renderer calls this method if the `showBroadphase` config value is set.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render the Grid to your own Graphics instance.
       * @param grid The Matter Grid to be rendered.
       * @param graphics The Graphics object to render to.
       * @param lineColor The line color.
       * @param lineOpacity The line opacity, between 0 and 1.
       */
      renderGrid(grid: MatterJS.Grid, graphics: Phaser.GameObjects.Graphics, lineColor: number, lineOpacity: number): this;

      /**
       * Renders the list of Pair separations to the given Graphics instance.
       *
       * The debug renderer calls this method if the `showSeparations` config value is set.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render the Grid to your own Graphics instance.
       * @param pairs An array of Matter Pairs to be rendered.
       * @param graphics The Graphics object to render to.
       * @param lineColor The line color.
       */
      renderSeparations(pairs: MatterJS.Pair[], graphics: Phaser.GameObjects.Graphics, lineColor: number): this;

      /**
       * Renders the list of collision points and normals to the given Graphics instance.
       *
       * The debug renderer calls this method if the `showCollisions` config value is set.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render the Grid to your own Graphics instance.
       * @param pairs An array of Matter Pairs to be rendered.
       * @param graphics The Graphics object to render to.
       * @param lineColor The line color.
       */
      renderCollisions(pairs: MatterJS.Pair[], graphics: Phaser.GameObjects.Graphics, lineColor: number): this;

      /**
       * Renders the bounds of an array of Bodies to the given Graphics instance.
       *
       * If the body is a compound body, it will render the bounds for the parent compound.
       *
       * The debug renderer calls this method if the `showBounds` config value is set.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render bounds to your own Graphics instance.
       * @param bodies An array of bodies from the localWorld.
       * @param graphics The Graphics object to render to.
       * @param lineColor The line color.
       * @param lineOpacity The line opacity, between 0 and 1.
       */
      renderBodyBounds(bodies: any[], graphics: Phaser.GameObjects.Graphics, lineColor: number, lineOpacity: number): void;

      /**
       * Renders either all axes, or a single axis indicator, for an array of Bodies, to the given Graphics instance.
       *
       * The debug renderer calls this method if the `showAxes` or `showAngleIndicator` config values are set.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render bounds to your own Graphics instance.
       * @param bodies An array of bodies from the localWorld.
       * @param graphics The Graphics object to render to.
       * @param showAxes If `true` it will render all body axes. If `false` it will render a single axis indicator.
       * @param lineColor The line color.
       * @param lineOpacity The line opacity, between 0 and 1.
       */
      renderBodyAxes(bodies: any[], graphics: Phaser.GameObjects.Graphics, showAxes: boolean, lineColor: number, lineOpacity: number): void;

      /**
       * Renders a velocity indicator for an array of Bodies, to the given Graphics instance.
       *
       * The debug renderer calls this method if the `showVelocity` config value is set.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render bounds to your own Graphics instance.
       * @param bodies An array of bodies from the localWorld.
       * @param graphics The Graphics object to render to.
       * @param lineColor The line color.
       * @param lineOpacity The line opacity, between 0 and 1.
       * @param lineThickness The line thickness.
       */
      renderBodyVelocity(bodies: any[], graphics: Phaser.GameObjects.Graphics, lineColor: number, lineOpacity: number, lineThickness: number): void;

      /**
       * Renders a single Matter Body to the given Phaser Graphics Game Object.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render a Body to your own Graphics instance.
       *
       * If you don't wish to render a line around the body, set the `lineColor` parameter to `null`.
       * Equally, if you don't wish to render a fill, set the `fillColor` parameter to `null`.
       * @param body The Matter Body to be rendered.
       * @param graphics The Graphics object to render to.
       * @param showInternalEdges Render internal edges of the polygon?
       * @param lineColor The line color.
       * @param lineOpacity The line opacity, between 0 and 1.
       * @param lineThickness The line thickness. Default 1.
       * @param fillColor The fill color.
       * @param fillOpacity The fill opacity, between 0 and 1.
       */
      renderBody(body: MatterJS.BodyType, graphics: Phaser.GameObjects.Graphics, showInternalEdges: boolean, lineColor?: number, lineOpacity?: number, lineThickness?: number, fillColor?: number, fillOpacity?: number): this;

      /**
       * Renders the Convex Hull for a single Matter Body to the given Phaser Graphics Game Object.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render a Body hull to your own Graphics instance.
       * @param body The Matter Body to be rendered.
       * @param graphics The Graphics object to render to.
       * @param hullColor The color used to render the hull.
       * @param lineThickness The hull line thickness. Default 1.
       */
      renderConvexHull(body: MatterJS.BodyType, graphics: Phaser.GameObjects.Graphics, hullColor: number, lineThickness?: number): this;

      /**
       * Renders a single Matter Constraint, such as a Pin or a Spring, to the given Phaser Graphics Game Object.
       *
       * This method is used internally by the Matter Debug Renderer, but is also exposed publically should
       * you wish to render a Constraint to your own Graphics instance.
       * @param constraint The Matter Constraint to render.
       * @param graphics The Graphics object to render to.
       * @param lineColor The line color.
       * @param lineOpacity The line opacity, between 0 and 1.
       * @param lineThickness The line thickness.
       * @param pinSize If this constraint is a pin, this sets the size of the pin circle.
       * @param anchorColor The color used when rendering this constraints anchors. Set to `null` to not render anchors.
       * @param anchorSize The size of the anchor circle, if this constraint has anchors and is rendering them.
       */
      renderConstraint(constraint: MatterJS.ConstraintType, graphics: Phaser.GameObjects.Graphics, lineColor: number, lineOpacity: number, lineThickness: number, pinSize: number, anchorColor: number, anchorSize: number): this;

      /**
       * Resets the internal collision IDs that Matter.JS uses for Body collision groups.
       *
       * You should call this before destroying your game if you need to restart the game
       * again on the same page, without first reloading the page. Or, if you wish to
       * consistently destroy a Scene that contains Matter.js and then run it again
       * later in the same game.
       */
      resetCollisionIDs(): void;

      /**
       * Will remove all Matter physics event listeners and clear the matter physics world,
       * engine and any debug graphics, if any.
       */
      shutdown(): void;

      /**
       * Will remove all Matter physics event listeners and clear the matter physics world,
       * engine and any debug graphics, if any.
       *
       * After destroying the world it cannot be re-used again.
       */
      destroy(): void;

    }

  }

}