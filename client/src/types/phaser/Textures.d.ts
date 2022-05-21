namespace Phaser.Textures {
  /**
   * A Canvas Texture is a special kind of Texture that is backed by an HTML Canvas Element as its source.
   *
   * You can use the properties of this texture to draw to the canvas element directly, using all of the standard
   * canvas operations available in the browser. Any Game Object can be given this texture and will render with it.
   *
   * Note: When running under WebGL the Canvas Texture needs to re-generate its base WebGLTexture and reupload it to
   * the GPU every time you modify it, otherwise the changes you make to this texture will not be visible. To do this
   * you should call `CanvasTexture.refresh()` once you are finished with your changes to the canvas. Try and keep
   * this to a minimum, especially on large canvas sizes, or you may inadvertently thrash the GPU by constantly uploading
   * texture data to it. This restriction does not apply if using the Canvas Renderer.
   *
   * It starts with only one frame that covers the whole of the canvas. You can add further frames, that specify
   * sections of the canvas using the `add` method.
   *
   * Should you need to resize the canvas use the `setSize` method so that it accurately updates all of the underlying
   * texture data as well. Forgetting to do this (i.e. by changing the canvas size directly from your code) could cause
   * graphical errors.
   */
  class CanvasTexture extends Phaser.Textures.Texture {
    /**
     *
     * @param manager A reference to the Texture Manager this Texture belongs to.
     * @param key The unique string-based key of this Texture.
     * @param source The canvas element that is used as the base of this texture.
     * @param width The width of the canvas.
     * @param height The height of the canvas.
     */
    constructor(manager: Phaser.Textures.TextureManager, key: string, source: HTMLCanvasElement, width: number, height: number);

    /**
     * The source Canvas Element.
     */
    readonly canvas: HTMLCanvasElement;

    /**
     * The 2D Canvas Rendering Context.
     */
    readonly context: CanvasRenderingContext2D;

    /**
     * The width of the Canvas.
     * This property is read-only, if you wish to change it use the `setSize` method.
     */
    readonly width: number;

    /**
     * The height of the Canvas.
     * This property is read-only, if you wish to change it use the `setSize` method.
     */
    readonly height: number;

    /**
     * The context image data.
     * Use the `update` method to populate this when the canvas changes.
     */
    imageData: ImageData;

    /**
     * A Uint8ClampedArray view into the `buffer`.
     * Use the `update` method to populate this when the canvas changes.
     * Note that this is unavailable in some browsers, such as Epic Browser, due to their security restrictions.
     */
    data: Uint8ClampedArray;

    /**
     * An Uint32Array view into the `buffer`.
     */
    pixels: Uint32Array;

    /**
     * An ArrayBuffer the same size as the context ImageData.
     */
    buffer: ArrayBuffer;

    /**
     * This re-creates the `imageData` from the current context.
     * It then re-builds the ArrayBuffer, the `data` Uint8ClampedArray reference and the `pixels` Int32Array.
     *
     * Warning: This is a very expensive operation, so use it sparingly.
     */
    update(): Phaser.Textures.CanvasTexture;

    /**
     * Draws the given Image or Canvas element to this CanvasTexture, then updates the internal
     * ImageData buffer and arrays.
     * @param x The x coordinate to draw the source at.
     * @param y The y coordinate to draw the source at.
     * @param source The element to draw to this canvas.
     */
    draw(x: number, y: number, source: HTMLImageElement | HTMLCanvasElement): Phaser.Textures.CanvasTexture;

    /**
     * Draws the given texture frame to this CanvasTexture, then updates the internal
     * ImageData buffer and arrays.
     * @param key The unique string-based key of the Texture.
     * @param frame The string-based name, or integer based index, of the Frame to get from the Texture.
     * @param x The x coordinate to draw the source at. Default 0.
     * @param y The y coordinate to draw the source at. Default 0.
     */
    drawFrame(key: string, frame?: string | number, x?: number, y?: number): Phaser.Textures.CanvasTexture;

    /**
     * Sets a pixel in the CanvasTexture to the given color and alpha values.
     *
     * This is an expensive operation to run in large quantities, so use sparingly.
     * @param x The x coordinate of the pixel to get. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param y The y coordinate of the pixel to get. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param red The red color value. A number between 0 and 255.
     * @param green The green color value. A number between 0 and 255.
     * @param blue The blue color value. A number between 0 and 255.
     * @param alpha The alpha value. A number between 0 and 255. Default 255.
     */
    setPixel(x: number, y: number, red: number, green: number, blue: number, alpha?: number): this;

    /**
     * Puts the ImageData into the context of this CanvasTexture at the given coordinates.
     * @param imageData The ImageData to put at the given location.
     * @param x The x coordinate to put the imageData. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param y The y coordinate to put the imageData. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param dirtyX Horizontal position (x coordinate) of the top-left corner from which the image data will be extracted. Default 0.
     * @param dirtyY Vertical position (x coordinate) of the top-left corner from which the image data will be extracted. Default 0.
     * @param dirtyWidth Width of the rectangle to be painted. Defaults to the width of the image data.
     * @param dirtyHeight Height of the rectangle to be painted. Defaults to the height of the image data.
     */
    putData(imageData: ImageData, x: number, y: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): this;

    /**
     * Gets an ImageData region from this CanvasTexture from the position and size specified.
     * You can write this back using `CanvasTexture.putData`, or manipulate it.
     * @param x The x coordinate of the top-left of the area to get the ImageData from. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param y The y coordinate of the top-left of the area to get the ImageData from. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param width The width of the rectangle from which the ImageData will be extracted. Positive values are to the right, and negative to the left.
     * @param height The height of the rectangle from which the ImageData will be extracted. Positive values are down, and negative are up.
     */
    getData(x: number, y: number, width: number, height: number): ImageData;

    /**
     * Get the color of a specific pixel from this texture and store it in a Color object.
     *
     * If you have drawn anything to this CanvasTexture since it was created you must call `CanvasTexture.update` to refresh the array buffer,
     * otherwise this may return out of date color values, or worse - throw a run-time error as it tries to access an array element that doesn't exist.
     * @param x The x coordinate of the pixel to get. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param y The y coordinate of the pixel to get. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param out A Color object to store the pixel values in. If not provided a new Color object will be created.
     */
    getPixel(x: number, y: number, out?: Phaser.Display.Color): Phaser.Display.Color;

    /**
     * Returns an array containing all of the pixels in the given region.
     *
     * If the requested region extends outside the bounds of this CanvasTexture,
     * the region is truncated to fit.
     *
     * If you have drawn anything to this CanvasTexture since it was created you must call `CanvasTexture.update` to refresh the array buffer,
     * otherwise this may return out of date color values, or worse - throw a run-time error as it tries to access an array element that doesn't exist.
     * @param x The x coordinate of the top-left of the region. Must lay within the dimensions of this CanvasTexture and be an integer. Default 0.
     * @param y The y coordinate of the top-left of the region. Must lay within the dimensions of this CanvasTexture and be an integer. Default 0.
     * @param width The width of the region to get. Must be an integer. Defaults to the canvas width if not given.
     * @param height The height of the region to get. Must be an integer. If not given will be set to the `width`.
     */
    getPixels(x?: number, y?: number, width?: number, height?: number): Phaser.Types.Textures.PixelConfig[][];

    /**
     * Returns the Image Data index for the given pixel in this CanvasTexture.
     *
     * The index can be used to read directly from the `this.data` array.
     *
     * The index points to the red value in the array. The subsequent 3 indexes
     * point to green, blue and alpha respectively.
     * @param x The x coordinate of the pixel to get. Must lay within the dimensions of this CanvasTexture and be an integer.
     * @param y The y coordinate of the pixel to get. Must lay within the dimensions of this CanvasTexture and be an integer.
     */
    getIndex(x: number, y: number): number;

    /**
     * This should be called manually if you are running under WebGL.
     * It will refresh the WebGLTexture from the Canvas source. Only call this if you know that the
     * canvas has changed, as there is a significant GPU texture allocation cost involved in doing so.
     */
    refresh(): Phaser.Textures.CanvasTexture;

    /**
     * Gets the Canvas Element.
     */
    getCanvas(): HTMLCanvasElement;

    /**
     * Gets the 2D Canvas Rendering Context.
     */
    getContext(): CanvasRenderingContext2D;

    /**
     * Clears the given region of this Canvas Texture, resetting it back to transparent.
     * If no region is given, the whole Canvas Texture is cleared.
     * @param x The x coordinate of the top-left of the region to clear. Default 0.
     * @param y The y coordinate of the top-left of the region to clear. Default 0.
     * @param width The width of the region.
     * @param height The height of the region.
     */
    clear(x?: number, y?: number, width?: number, height?: number): Phaser.Textures.CanvasTexture;

    /**
     * Changes the size of this Canvas Texture.
     * @param width The new width of the Canvas.
     * @param height The new height of the Canvas. If not given it will use the width as the height.
     */
    setSize(width: number, height?: number): Phaser.Textures.CanvasTexture;

    /**
     * Destroys this Texture and releases references to its sources and frames.
     */
    destroy(): void;

  }

  /**
   * Filter Types.
   */
  enum FilterMode {
    /**
     * Linear filter type.
     */
    LINEAR,
    /**
     * Nearest neighbor filter type.
     */
    NEAREST,
  }

  namespace Events {
    /**
     * The Texture Add Event.
     *
     * This event is dispatched by the Texture Manager when a texture is added to it.
     *
     * Listen to this event from within a Scene using: `this.textures.on('addtexture', listener)`.
     */
    const ADD: any;

    /**
     * The Texture Load Error Event.
     *
     * This event is dispatched by the Texture Manager when a texture it requested to load failed.
     * This only happens when base64 encoded textures fail. All other texture types are loaded via the Loader Plugin.
     *
     * Listen to this event from within a Scene using: `this.textures.on('onerror', listener)`.
     */
    const ERROR: any;

    /**
     * The Texture Load Event.
     *
     * This event is dispatched by the Texture Manager when a texture has finished loading on it.
     * This only happens for base64 encoded textures. All other texture types are loaded via the Loader Plugin.
     *
     * Listen to this event from within a Scene using: `this.textures.on('onload', listener)`.
     *
     * This event is dispatched after the [ADD]{@linkcode Phaser.Textures.Events#event:ADD} event.
     */
    const LOAD: any;

    /**
     * This internal event signifies that the Texture Manager is now ready and the Game can continue booting.
     *
     * When a Phaser Game instance is booting for the first time, the Texture Manager has to wait on a couple of non-blocking
     * async events before it's fully ready to carry on. When those complete the Texture Manager emits this event via the Game
     * instance, which tells the Game to carry on booting.
     */
    const READY: any;

    /**
     * The Texture Remove Event.
     *
     * This event is dispatched by the Texture Manager when a texture is removed from it.
     *
     * Listen to this event from within a Scene using: `this.textures.on('removetexture', listener)`.
     *
     * If you have any Game Objects still using the removed texture, they will start throwing
     * errors the next time they try to render. Be sure to clear all use of the texture in this event handler.
     */
    const REMOVE: any;

  }

  /**
   * A Frame is a section of a Texture.
   */
  class Frame {
    /**
     *
     * @param texture The Texture this Frame is a part of.
     * @param name The name of this Frame. The name is unique within the Texture.
     * @param sourceIndex The index of the TextureSource that this Frame is a part of.
     * @param x The x coordinate of the top-left of this Frame.
     * @param y The y coordinate of the top-left of this Frame.
     * @param width The width of this Frame.
     * @param height The height of this Frame.
     */
    constructor(texture: Phaser.Textures.Texture, name: number | string, sourceIndex: number, x: number, y: number, width: number, height: number);

    /**
     * The Texture this Frame is a part of.
     */
    texture: Phaser.Textures.Texture;

    /**
     * The name of this Frame.
     * The name is unique within the Texture.
     */
    name: string;

    /**
     * The TextureSource this Frame is part of.
     */
    source: Phaser.Textures.TextureSource;

    /**
     * The index of the TextureSource in the Texture sources array.
     */
    sourceIndex: number;

    /**
     * A reference to the Texture Source WebGL Texture that this Frame is using.
     */
    glTexture: WebGLTexture;

    /**
     * X position within the source image to cut from.
     */
    cutX: number;

    /**
     * Y position within the source image to cut from.
     */
    cutY: number;

    /**
     * The width of the area in the source image to cut.
     */
    cutWidth: number;

    /**
     * The height of the area in the source image to cut.
     */
    cutHeight: number;

    /**
     * The X rendering offset of this Frame, taking trim into account.
     */
    x: number;

    /**
     * The Y rendering offset of this Frame, taking trim into account.
     */
    y: number;

    /**
     * The rendering width of this Frame, taking trim into account.
     */
    width: number;

    /**
     * The rendering height of this Frame, taking trim into account.
     */
    height: number;

    /**
     * Half the width, floored.
     * Precalculated for the renderer.
     */
    halfWidth: number;

    /**
     * Half the height, floored.
     * Precalculated for the renderer.
     */
    halfHeight: number;

    /**
     * The x center of this frame, floored.
     */
    centerX: number;

    /**
     * The y center of this frame, floored.
     */
    centerY: number;

    /**
     * The horizontal pivot point of this Frame.
     */
    pivotX: number;

    /**
     * The vertical pivot point of this Frame.
     */
    pivotY: number;

    /**
     * Does this Frame have a custom pivot point?
     */
    customPivot: boolean;

    /**
     * **CURRENTLY UNSUPPORTED**
     *
     * Is this frame is rotated or not in the Texture?
     * Rotation allows you to use rotated frames in texture atlas packing.
     * It has nothing to do with Sprite rotation.
     */
    rotated: boolean;

    /**
     * Over-rides the Renderer setting.
     * -1 = use Renderer Setting
     * 0 = No rounding
     * 1 = Round
     */
    autoRound: number;

    /**
     * Any Frame specific custom data can be stored here.
     */
    customData: object;

    /**
     * WebGL UV u0 value.
     */
    u0: number;

    /**
     * WebGL UV v0 value.
     */
    v0: number;

    /**
     * WebGL UV u1 value.
     */
    u1: number;

    /**
     * WebGL UV v1 value.
     */
    v1: number;

    /**
     * Sets the width, height, x and y of this Frame.
     *
     * This is called automatically by the constructor
     * and should rarely be changed on-the-fly.
     * @param width The width of the frame before being trimmed.
     * @param height The height of the frame before being trimmed.
     * @param x The x coordinate of the top-left of this Frame. Default 0.
     * @param y The y coordinate of the top-left of this Frame. Default 0.
     */
    setSize(width: number, height: number, x?: number, y?: number): Phaser.Textures.Frame;

    /**
     * If the frame was trimmed when added to the Texture Atlas, this records the trim and source data.
     * @param actualWidth The width of the frame before being trimmed.
     * @param actualHeight The height of the frame before being trimmed.
     * @param destX The destination X position of the trimmed frame for display.
     * @param destY The destination Y position of the trimmed frame for display.
     * @param destWidth The destination width of the trimmed frame for display.
     * @param destHeight The destination height of the trimmed frame for display.
     */
    setTrim(actualWidth: number, actualHeight: number, destX: number, destY: number, destWidth: number, destHeight: number): Phaser.Textures.Frame;

    /**
     * Takes a crop data object and, based on the rectangular region given, calculates the
     * required UV coordinates in order to crop this Frame for WebGL and Canvas rendering.
     *
     * This is called directly by the Game Object Texture Components `setCrop` method.
     * Please use that method to crop a Game Object.
     * @param crop The crop data object. This is the `GameObject._crop` property.
     * @param x The x coordinate to start the crop from. Cannot be negative or exceed the Frame width.
     * @param y The y coordinate to start the crop from. Cannot be negative or exceed the Frame height.
     * @param width The width of the crop rectangle. Cannot exceed the Frame width.
     * @param height The height of the crop rectangle. Cannot exceed the Frame height.
     * @param flipX Does the parent Game Object have flipX set?
     * @param flipY Does the parent Game Object have flipY set?
     */
    setCropUVs(crop: object, x: number, y: number, width: number, height: number, flipX: boolean, flipY: boolean): object;

    /**
     * Takes a crop data object and recalculates the UVs based on the dimensions inside the crop object.
     * Called automatically by `setFrame`.
     * @param crop The crop data object. This is the `GameObject._crop` property.
     * @param flipX Does the parent Game Object have flipX set?
     * @param flipY Does the parent Game Object have flipY set?
     */
    updateCropUVs(crop: object, flipX: boolean, flipY: boolean): object;

    /**
     * Directly sets the canvas and WebGL UV data for this frame.
     *
     * Use this if you need to override the values that are generated automatically
     * when the Frame is created.
     * @param width Width of this frame for the Canvas data.
     * @param height Height of this frame for the Canvas data.
     * @param u0 UV u0 value.
     * @param v0 UV v0 value.
     * @param u1 UV u1 value.
     * @param v1 UV v1 value.
     */
    setUVs(width: number, height: number, u0: number, v0: number, u1: number, v1: number): Phaser.Textures.Frame;

    /**
     * Updates the internal WebGL UV cache and the drawImage cache.
     */
    updateUVs(): Phaser.Textures.Frame;

    /**
     * Updates the internal WebGL UV cache.
     */
    updateUVsInverted(): Phaser.Textures.Frame;

    /**
     * Clones this Frame into a new Frame object.
     */
    clone(): Phaser.Textures.Frame;

    /**
     * Destroys this Frame by nulling its reference to the parent Texture and and data objects.
     */
    destroy(): void;

    /**
     * The width of the Frame in its un-trimmed, un-padded state, as prepared in the art package,
     * before being packed.
     */
    readonly realWidth: number;

    /**
     * The height of the Frame in its un-trimmed, un-padded state, as prepared in the art package,
     * before being packed.
     */
    readonly realHeight: number;

    /**
     * The radius of the Frame (derived from sqrt(w * w + h * h) / 2)
     */
    readonly radius: number;

    /**
     * Is the Frame trimmed or not?
     */
    readonly trimmed: boolean;

    /**
     * The Canvas drawImage data object.
     */
    readonly canvasData: object;

  }

  /**
   * Linear filter type.
   */
  const LINEAR: number;

  /**
   * Nearest Neighbor filter type.
   */
  const NEAREST: number;

  namespace Parsers {
  }

  /**
   * A Texture consists of a source, usually an Image from the Cache, and a collection of Frames.
   * The Frames represent the different areas of the Texture. For example a texture atlas
   * may have many Frames, one for each element within the atlas. Where-as a single image would have
   * just one frame, that encompasses the whole image.
   *
   * Every Texture, no matter where it comes from, always has at least 1 frame called the `__BASE` frame.
   * This frame represents the entirety of the source image.
   *
   * Textures are managed by the global TextureManager. This is a singleton class that is
   * responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
   *
   * Sprites and other Game Objects get the texture data they need from the TextureManager.
   */
  class Texture {
    /**
     *
     * @param manager A reference to the Texture Manager this Texture belongs to.
     * @param key The unique string-based key of this Texture.
     * @param source An array of sources that are used to create the texture. Usually Images, but can also be a Canvas.
     * @param width The width of the Texture. This is optional and automatically derived from the source images.
     * @param height The height of the Texture. This is optional and automatically derived from the source images.
     */
    constructor(manager: Phaser.Textures.TextureManager, key: string, source: HTMLImageElement | HTMLCanvasElement | HTMLImageElement[] | HTMLCanvasElement[], width?: number, height?: number);

    /**
     * A reference to the Texture Manager this Texture belongs to.
     */
    manager: Phaser.Textures.TextureManager;

    /**
     * The unique string-based key of this Texture.
     */
    key: string;

    /**
     * An array of TextureSource instances.
     * These are unique to this Texture and contain the actual Image (or Canvas) data.
     */
    source: Phaser.Textures.TextureSource[];

    /**
     * An array of TextureSource data instances.
     * Used to store additional data images, such as normal maps or specular maps.
     */
    dataSource: any[];

    /**
     * A key-value object pair associating the unique Frame keys with the Frames objects.
     */
    frames: object;

    /**
     * Any additional data that was set in the source JSON (if any),
     * or any extra data you'd like to store relating to this texture
     */
    customData: object;

    /**
     * The name of the first frame of the Texture.
     */
    firstFrame: string;

    /**
     * The total number of Frames in this Texture, including the `__BASE` frame.
     *
     * A Texture will always contain at least 1 frame because every Texture contains a `__BASE` frame by default,
     * in addition to any extra frames that have been added to it, such as when parsing a Sprite Sheet or Texture Atlas.
     */
    frameTotal: number;

    /**
     * Adds a new Frame to this Texture.
     *
     * A Frame is a rectangular region of a TextureSource with a unique index or string-based key.
     *
     * The name given must be unique within this Texture. If it already exists, this method will return `null`.
     * @param name The name of this Frame. The name is unique within the Texture.
     * @param sourceIndex The index of the TextureSource that this Frame is a part of.
     * @param x The x coordinate of the top-left of this Frame.
     * @param y The y coordinate of the top-left of this Frame.
     * @param width The width of this Frame.
     * @param height The height of this Frame.
     */
    add(name: number | string, sourceIndex: number, x: number, y: number, width: number, height: number): Phaser.Textures.Frame;

    /**
     * Removes the given Frame from this Texture. The Frame is destroyed immediately.
     *
     * Any Game Objects using this Frame should stop using it _before_ you remove it,
     * as it does not happen automatically.
     * @param name The key of the Frame to remove.
     */
    remove(name: string): boolean;

    /**
     * Checks to see if a Frame matching the given key exists within this Texture.
     * @param name The key of the Frame to check for.
     */
    has(name: string): boolean;

    /**
     * Gets a Frame from this Texture based on either the key or the index of the Frame.
     *
     * In a Texture Atlas Frames are typically referenced by a key.
     * In a Sprite Sheet Frames are referenced by an index.
     * Passing no value for the name returns the base texture.
     * @param name The string-based name, or integer based index, of the Frame to get from this Texture.
     */
    get(name?: string | number): Phaser.Textures.Frame;

    /**
     * Takes the given TextureSource and returns the index of it within this Texture.
     * If it's not in this Texture, it returns -1.
     * Unless this Texture has multiple TextureSources, such as with a multi-atlas, this
     * method will always return zero or -1.
     * @param source The TextureSource to check.
     */
    getTextureSourceIndex(source: Phaser.Textures.TextureSource): number;

    /**
     * Returns an array of all the Frames in the given TextureSource.
     * @param sourceIndex The index of the TextureSource to get the Frames from.
     * @param includeBase Include the `__BASE` Frame in the output array? Default false.
     */
    getFramesFromTextureSource(sourceIndex: number, includeBase?: boolean): Phaser.Textures.Frame[];

    /**
     * Returns an array with all of the names of the Frames in this Texture.
     *
     * Useful if you want to randomly assign a Frame to a Game Object, as you can
     * pick a random element from the returned array.
     * @param includeBase Include the `__BASE` Frame in the output array? Default false.
     */
    getFrameNames(includeBase?: boolean): string[];

    /**
     * Given a Frame name, return the source image it uses to render with.
     *
     * This will return the actual DOM Image or Canvas element.
     * @param name The string-based name, or integer based index, of the Frame to get from this Texture.
     */
    getSourceImage(name?: string | number): HTMLImageElement | HTMLCanvasElement | Phaser.GameObjects.RenderTexture;

    /**
     * Given a Frame name, return the data source image it uses to render with.
     * You can use this to get the normal map for an image for example.
     *
     * This will return the actual DOM Image.
     * @param name The string-based name, or integer based index, of the Frame to get from this Texture.
     */
    getDataSourceImage(name?: string | number): HTMLImageElement | HTMLCanvasElement;

    /**
     * Adds a data source image to this Texture.
     *
     * An example of a data source image would be a normal map, where all of the Frames for this Texture
     * equally apply to the normal map.
     * @param data The source image.
     */
    setDataSource(data: HTMLImageElement | HTMLCanvasElement | HTMLImageElement[] | HTMLCanvasElement[]): void;

    /**
     * Sets the Filter Mode for this Texture.
     *
     * The mode can be either Linear, the default, or Nearest.
     *
     * For pixel-art you should use Nearest.
     *
     * The mode applies to the entire Texture, not just a specific Frame of it.
     * @param filterMode The Filter Mode.
     */
    setFilter(filterMode: Phaser.Textures.FilterMode): void;

    /**
     * Destroys this Texture and releases references to its sources and frames.
     */
    destroy(): void;

  }

  /**
   * Textures are managed by the global TextureManager. This is a singleton class that is
   * responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
   *
   * Sprites and other Game Objects get the texture data they need from the TextureManager.
   *
   * Access it via `scene.textures`.
   */
  class TextureManager extends Phaser.Events.EventEmitter {
    /**
     *
     * @param game The Phaser.Game instance this Texture Manager belongs to.
     */
    constructor(game: Phaser.Game);

    /**
     * The Game that this TextureManager belongs to.
     */
    game: Phaser.Game;

    /**
     * The name of this manager.
     */
    name: string;

    /**
     * An object that has all of textures that Texture Manager creates.
     * Textures are assigned to keys so we can access to any texture that this object has directly by key value without iteration.
     */
    list: object;

    /**
     * Checks the given texture key and throws a console.warn if the key is already in use, then returns false.
     * If you wish to avoid the console.warn then use `TextureManager.exists` instead.
     * @param key The texture key to check.
     */
    checkKey(key: string): boolean;

    /**
     * Removes a Texture from the Texture Manager and destroys it. This will immediately
     * clear all references to it from the Texture Manager, and if it has one, destroy its
     * WebGLTexture. This will emit a `removetexture` event.
     *
     * Note: If you have any Game Objects still using this texture they will start throwing
     * errors the next time they try to render. Make sure that removing the texture is the final
     * step when clearing down to avoid this.
     * @param key The key of the Texture to remove, or a reference to it.
     */
    remove(key: string | Phaser.Textures.Texture): Phaser.Textures.TextureManager;

    /**
     * Removes a key from the Texture Manager but does not destroy the Texture that was using the key.
     * @param key The key to remove from the texture list.
     */
    removeKey(key: string): Phaser.Textures.TextureManager;

    /**
     * Adds a new Texture to the Texture Manager created from the given Base64 encoded data.
     *
     * It works by creating an `Image` DOM object, then setting the `src` attribute to
     * the given base64 encoded data. As a result, the process is asynchronous by its nature,
     * so be sure to listen for the events this method dispatches before using the texture.
     * @param key The unique string-based key of the Texture.
     * @param data The Base64 encoded data.
     */
    addBase64(key: string, data: any): this;

    /**
     * Gets an existing texture frame and converts it into a base64 encoded image and returns the base64 data.
     *
     * You can also provide the image type and encoder options.
     *
     * This will only work with bitmap based texture frames, such as those created from Texture Atlases.
     * It will not work with GL Texture objects, such as Shaders, or Render Textures. For those please
     * see the WebGL Snapshot function instead.
     * @param key The unique string-based key of the Texture.
     * @param frame The string-based name, or integer based index, of the Frame to get from the Texture.
     * @param type A DOMString indicating the image format. The default format type is image/png. Default 'image/png'.
     * @param encoderOptions A Number between 0 and 1 indicating the image quality to use for image formats that use lossy compression such as image/jpeg and image/webp. If this argument is anything else, the default value for image quality is used. The default value is 0.92. Other arguments are ignored. Default 0.92.
     */
    getBase64(key: string, frame?: string | number, type?: string, encoderOptions?: number): string;

    /**
     * Adds a new Texture to the Texture Manager created from the given Image element.
     * @param key The unique string-based key of the Texture.
     * @param source The source Image element.
     * @param dataSource An optional data Image element.
     */
    addImage(key: string, source: HTMLImageElement, dataSource?: HTMLImageElement | HTMLCanvasElement): Phaser.Textures.Texture;

    /**
     * Takes a WebGL Texture and creates a Phaser Texture from it, which is added to the Texture Manager using the given key.
     *
     * This allows you to then use the Texture as a normal texture for texture based Game Objects like Sprites.
     *
     * If the `width` and `height` arguments are omitted, but the WebGL Texture was created by Phaser's WebGL Renderer
     * and has `glTexture.width` and `glTexture.height` properties, these values will be used instead.
     *
     * This is a WebGL only feature.
     * @param key The unique string-based key of the Texture.
     * @param glTexture The source Render Texture.
     * @param width The new width of the Texture. Read from `glTexture.width` if omitted.
     * @param height The new height of the Texture. Read from `glTexture.height` if omitted.
     */
    addGLTexture(key: string, glTexture: WebGLTexture, width?: number, height?: number): Phaser.Textures.Texture;

    /**
     * Adds a Render Texture to the Texture Manager using the given key.
     * This allows you to then use the Render Texture as a normal texture for texture based Game Objects like Sprites.
     * @param key The unique string-based key of the Texture.
     * @param renderTexture The source Render Texture.
     */
    addRenderTexture(key: string, renderTexture: Phaser.GameObjects.RenderTexture): Phaser.Textures.Texture;

    /**
     * Creates a new Texture using the given config values.
     *
     * Generated textures consist of a Canvas element to which the texture data is drawn.
     *
     * Generates a texture based on the given Create configuration object.
     *
     * The texture is drawn using a fixed-size indexed palette of 16 colors, where the hex value in the
     * data cells map to a single color. For example, if the texture config looked like this:
     *
     * ```javascript
     * var star = [
     *   '.....828.....',
     *   '....72227....',
     *   '....82228....',
     *   '...7222227...',
     *   '2222222222222',
     *   '8222222222228',
     *   '.72222222227.',
     *   '..787777787..',
     *   '..877777778..',
     *   '.78778887787.',
     *   '.27887.78872.',
     *   '.787.....787.'
     * ];
     *
     * this.textures.generate('star', { data: star, pixelWidth: 4 });
     * ```
     *
     * Then it would generate a texture that is 52 x 48 pixels in size, because each cell of the data array
     * represents 1 pixel multiplied by the `pixelWidth` value. The cell values, such as `8`, maps to color
     * number 8 in the palette. If a cell contains a period character `.` then it is transparent.
     *
     * The default palette is Arne16, but you can specify your own using the `palette` property.
     * @param key The unique string-based key of the Texture.
     * @param config The configuration object needed to generate the texture.
     */
    generate(key: string, config: Phaser.Types.Create.GenerateTextureConfig): Phaser.Textures.Texture;

    /**
     * Creates a new Texture using a blank Canvas element of the size given.
     *
     * Canvas elements are automatically pooled and calling this method will
     * extract a free canvas from the CanvasPool, or create one if none are available.
     * @param key The unique string-based key of the Texture.
     * @param width The width of the Canvas element. Default 256.
     * @param height The height of the Canvas element. Default 256.
     */
    createCanvas(key: string, width?: number, height?: number): Phaser.Textures.CanvasTexture;

    /**
     * Creates a new Canvas Texture object from an existing Canvas element
     * and adds it to this Texture Manager, unless `skipCache` is true.
     * @param key The unique string-based key of the Texture.
     * @param source The Canvas element to form the base of the new Texture.
     * @param skipCache Skip adding this Texture into the Cache? Default false.
     */
    addCanvas(key: string, source: HTMLCanvasElement, skipCache?: boolean): Phaser.Textures.CanvasTexture;

    /**
     * Adds a new Texture Atlas to this Texture Manager.
     * It can accept either JSON Array or JSON Hash formats, as exported by Texture Packer and similar software.
     * @param key The unique string-based key of the Texture.
     * @param source The source Image element.
     * @param data The Texture Atlas data.
     * @param dataSource An optional data Image element.
     */
    addAtlas(key: string, source: HTMLImageElement, data: object, dataSource?: HTMLImageElement | HTMLCanvasElement | HTMLImageElement[] | HTMLCanvasElement[]): Phaser.Textures.Texture;

    /**
     * Adds a Texture Atlas to this Texture Manager.
     * The frame data of the atlas must be stored in an Array within the JSON.
     * This is known as a JSON Array in software such as Texture Packer.
     * @param key The unique string-based key of the Texture.
     * @param source The source Image element/s.
     * @param data The Texture Atlas data/s.
     * @param dataSource An optional data Image element.
     */
    addAtlasJSONArray(key: string, source: HTMLImageElement | HTMLImageElement[], data: object | object[], dataSource?: HTMLImageElement | HTMLCanvasElement | HTMLImageElement[] | HTMLCanvasElement[]): Phaser.Textures.Texture;

    /**
     * Adds a Texture Atlas to this Texture Manager.
     * The frame data of the atlas must be stored in an Object within the JSON.
     * This is known as a JSON Hash in software such as Texture Packer.
     * @param key The unique string-based key of the Texture.
     * @param source The source Image element.
     * @param data The Texture Atlas data.
     * @param dataSource An optional data Image element.
     */
    addAtlasJSONHash(key: string, source: HTMLImageElement, data: object, dataSource?: HTMLImageElement | HTMLCanvasElement | HTMLImageElement[] | HTMLCanvasElement[]): Phaser.Textures.Texture;

    /**
     * Adds a Texture Atlas to this Texture Manager, where the atlas data is given
     * in the XML format.
     * @param key The unique string-based key of the Texture.
     * @param source The source Image element.
     * @param data The Texture Atlas XML data.
     * @param dataSource An optional data Image element.
     */
    addAtlasXML(key: string, source: HTMLImageElement, data: object, dataSource?: HTMLImageElement | HTMLCanvasElement | HTMLImageElement[] | HTMLCanvasElement[]): Phaser.Textures.Texture;

    /**
     * Adds a Unity Texture Atlas to this Texture Manager.
     * The data must be in the form of a Unity YAML file.
     * @param key The unique string-based key of the Texture.
     * @param source The source Image element.
     * @param data The Texture Atlas data.
     * @param dataSource An optional data Image element.
     */
    addUnityAtlas(key: string, source: HTMLImageElement, data: object, dataSource?: HTMLImageElement | HTMLCanvasElement | HTMLImageElement[] | HTMLCanvasElement[]): Phaser.Textures.Texture;

    /**
     * Adds a Sprite Sheet to this Texture Manager.
     *
     * In Phaser terminology a Sprite Sheet is a texture containing different frames, but each frame is the exact
     * same size and cannot be trimmed or rotated.
     * @param key The unique string-based key of the Texture.
     * @param source The source Image element.
     * @param config The configuration object for this Sprite Sheet.
     */
    addSpriteSheet(key: string, source: HTMLImageElement, config: Phaser.Types.Textures.SpriteSheetConfig): Phaser.Textures.Texture;

    /**
     * Adds a Sprite Sheet to this Texture Manager, where the Sprite Sheet exists as a Frame within a Texture Atlas.
     *
     * In Phaser terminology a Sprite Sheet is a texture containing different frames, but each frame is the exact
     * same size and cannot be trimmed or rotated.
     * @param key The unique string-based key of the Texture.
     * @param config The configuration object for this Sprite Sheet.
     */
    addSpriteSheetFromAtlas(key: string, config: Phaser.Types.Textures.SpriteSheetFromAtlasConfig): Phaser.Textures.Texture;

    /**
     * Creates a new Texture using the given source and dimensions.
     * @param key The unique string-based key of the Texture.
     * @param source The source Image element.
     * @param width The width of the Texture.
     * @param height The height of the Texture.
     */
    create(key: string, source: HTMLImageElement, width: number, height: number): Phaser.Textures.Texture;

    /**
     * Checks the given key to see if a Texture using it exists within this Texture Manager.
     * @param key The unique string-based key of the Texture.
     */
    exists(key: string): boolean;

    /**
     * Returns a Texture from the Texture Manager that matches the given key.
     *
     * If the key is `undefined` it will return the `__DEFAULT` Texture.
     *
     * If the key is an instance of a Texture, it will return the key directly.
     *
     * Finally. if the key is given, but not found and not a Texture instance, it will return the `__MISSING` Texture.
     * @param key The unique string-based key of the Texture, or a Texture instance.
     */
    get(key: string | Phaser.Textures.Texture): Phaser.Textures.Texture;

    /**
     * Takes a Texture key and Frame name and returns a clone of that Frame if found.
     * @param key The unique string-based key of the Texture.
     * @param frame The string or index of the Frame to be cloned.
     */
    cloneFrame(key: string, frame: string | number): Phaser.Textures.Frame;

    /**
     * Takes a Texture key and Frame name and returns a reference to that Frame, if found.
     * @param key The unique string-based key of the Texture.
     * @param frame The string-based name, or integer based index, of the Frame to get from the Texture.
     */
    getFrame(key: string, frame?: string | number): Phaser.Textures.Frame;

    /**
     * Returns an array with all of the keys of all Textures in this Texture Manager.
     * The output array will exclude the `__DEFAULT` and `__MISSING` keys.
     */
    getTextureKeys(): string[];

    /**
     * Given a Texture and an `x` and `y` coordinate this method will return a new
     * Color object that has been populated with the color and alpha values of the pixel
     * at that location in the Texture.
     * @param x The x coordinate of the pixel within the Texture.
     * @param y The y coordinate of the pixel within the Texture.
     * @param key The unique string-based key of the Texture.
     * @param frame The string or index of the Frame.
     */
    getPixel(x: number, y: number, key: string, frame?: string | number): Phaser.Display.Color;

    /**
     * Given a Texture and an `x` and `y` coordinate this method will return a value between 0 and 255
     * corresponding to the alpha value of the pixel at that location in the Texture. If the coordinate
     * is out of bounds it will return null.
     * @param x The x coordinate of the pixel within the Texture.
     * @param y The y coordinate of the pixel within the Texture.
     * @param key The unique string-based key of the Texture.
     * @param frame The string or index of the Frame.
     */
    getPixelAlpha(x: number, y: number, key: string, frame?: string | number): number;

    /**
     * Sets the given Game Objects `texture` and `frame` properties so that it uses
     * the Texture and Frame specified in the `key` and `frame` arguments to this method.
     * @param gameObject The Game Object the texture would be set on.
     * @param key The unique string-based key of the Texture.
     * @param frame The string or index of the Frame.
     */
    setTexture(gameObject: Phaser.GameObjects.GameObject, key: string, frame?: string | number): Phaser.GameObjects.GameObject;

    /**
     * Changes the key being used by a Texture to the new key provided.
     *
     * The old key is removed, allowing it to be re-used.
     *
     * Game Objects are linked to Textures by a reference to the Texture object, so
     * all existing references will be retained.
     * @param currentKey The current string-based key of the Texture you wish to rename.
     * @param newKey The new unique string-based key to use for the Texture.
     */
    renameTexture(currentKey: string, newKey: string): boolean;

    /**
     * Passes all Textures to the given callback.
     * @param callback The callback function to be sent the Textures.
     * @param scope The value to use as `this` when executing the callback.
     * @param args Additional arguments that will be passed to the callback, after the child.
     */
    each(callback: EachTextureCallback, scope: object, ...args: any[]): void;

    /**
     * Destroys the Texture Manager and all Textures stored within it.
     */
    destroy(): void;

  }

  /**
   * A Texture Source is the encapsulation of the actual source data for a Texture.
   *
   * This is typically an Image Element, loaded from the file system or network, a Canvas Element or a Video Element.
   *
   * A Texture can contain multiple Texture Sources, which only happens when a multi-atlas is loaded.
   */
  class TextureSource {
    /**
     *
     * @param texture The Texture this TextureSource belongs to.
     * @param source The source image data.
     * @param width Optional width of the source image. If not given it's derived from the source itself.
     * @param height Optional height of the source image. If not given it's derived from the source itself.
     * @param flipY Sets the `UNPACK_FLIP_Y_WEBGL` flag the WebGL Texture uses during upload. Default false.
     */
    constructor(texture: Phaser.Textures.Texture, source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | Phaser.GameObjects.RenderTexture | WebGLTexture, width?: number, height?: number, flipY?: boolean);

    /**
     * The Texture this TextureSource belongs to.
     */
    renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer;

    /**
     * The Texture this TextureSource belongs to.
     */
    texture: Phaser.Textures.Texture;

    /**
     * The source of the image data.
     *
     * This is either an Image Element, a Canvas Element, a Video Element, a RenderTexture or a WebGLTexture.
     */
    source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | Phaser.GameObjects.RenderTexture | WebGLTexture;

    /**
     * The image data.
     *
     * This is either an Image element, Canvas element or a Video Element.
     */
    image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;

    /**
     * Currently un-used.
     */
    compressionAlgorithm: number;

    /**
     * The resolution of the source image.
     */
    resolution: number;

    /**
     * The width of the source image. If not specified in the constructor it will check
     * the `naturalWidth` and then `width` properties of the source image.
     */
    width: number;

    /**
     * The height of the source image. If not specified in the constructor it will check
     * the `naturalHeight` and then `height` properties of the source image.
     */
    height: number;

    /**
     * The Scale Mode the image will use when rendering.
     * Either Linear or Nearest.
     */
    scaleMode: number;

    /**
     * Is the source image a Canvas Element?
     */
    isCanvas: boolean;

    /**
     * Is the source image a Video Element?
     */
    isVideo: boolean;

    /**
     * Is the source image a Render Texture?
     */
    isRenderTexture: boolean;

    /**
     * Is the source image a WebGLTexture?
     */
    isGLTexture: boolean;

    /**
     * Are the source image dimensions a power of two?
     */
    isPowerOf2: boolean;

    /**
     * The WebGL Texture of the source image. If this TextureSource is driven from a WebGLTexture
     * already, then this is a reference to that WebGLTexture.
     */
    glTexture: WebGLTexture;

    /**
     * The current texture unit index as assigned by the WebGL Renderer.
     * Un-used in canvas. Should be treated as read-only.
     */
    glIndex: number;

    /**
     * The counter value when this texture was last assigned an index by the WebGL Renderer.
     * Un-used in canvas. Should be treated as read-only.
     */
    glIndexCounter: number;

    /**
     * Sets the `UNPACK_FLIP_Y_WEBGL` flag the WebGL Texture uses during upload.
     */
    flipY: boolean;

    /**
     * Creates a WebGL Texture, if required, and sets the Texture filter mode.
     * @param game A reference to the Phaser Game instance.
     */
    init(game: Phaser.Game): void;

    /**
     * Sets the Filter Mode for this Texture.
     *
     * The mode can be either Linear, the default, or Nearest.
     *
     * For pixel-art you should use Nearest.
     * @param filterMode The Filter Mode.
     */
    setFilter(filterMode: Phaser.Textures.FilterMode): void;

    /**
     * Sets the `UNPACK_FLIP_Y_WEBGL` flag for the WebGL Texture during texture upload.
     * @param value Should the WebGL Texture be flipped on the Y axis on texture upload or not? Default true.
     */
    setFlipY(value?: boolean): void;

    /**
     * If this TextureSource is backed by a Canvas and is running under WebGL,
     * it updates the WebGLTexture using the canvas data.
     */
    update(): void;

    /**
     * Destroys this Texture Source and nulls the references.
     */
    destroy(): void;

  }

}