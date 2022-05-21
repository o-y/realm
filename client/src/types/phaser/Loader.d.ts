namespace Phaser.Loader {
  /**
   * The Loader is idle.
   */
  var LOADER_IDLE: number;

  /**
   * The Loader is actively loading.
   */
  var LOADER_LOADING: number;

  /**
   * The Loader is processing files is has loaded.
   */
  var LOADER_PROCESSING: number;

  /**
   * The Loader has completed loading and processing.
   */
  var LOADER_COMPLETE: number;

  /**
   * The Loader is shutting down.
   */
  var LOADER_SHUTDOWN: number;

  /**
   * The Loader has been destroyed.
   */
  var LOADER_DESTROYED: number;

  /**
   * File is in the load queue but not yet started
   */
  var FILE_PENDING: number;

  /**
   * File has been started to load by the loader (onLoad called)
   */
  var FILE_LOADING: number;

  /**
   * File has loaded successfully, awaiting processing
   */
  var FILE_LOADED: number;

  /**
   * File failed to load
   */
  var FILE_FAILED: number;

  /**
   * File is being processed (onProcess callback)
   */
  var FILE_PROCESSING: number;

  /**
   * The File has errored somehow during processing.
   */
  var FILE_ERRORED: number;

  /**
   * File has finished processing.
   */
  var FILE_COMPLETE: number;

  /**
   * File has been destroyed
   */
  var FILE_DESTROYED: number;

  /**
   * File was populated from local data and doesn't need an HTTP request
   */
  var FILE_POPULATED: number;

  namespace Events {
    /**
     * The Loader Plugin Add File Event.
     *
     * This event is dispatched when a new file is successfully added to the Loader and placed into the load queue.
     *
     * Listen to it from a Scene using: `this.load.on('addfile', listener)`.
     *
     * If you add lots of files to a Loader from a `preload` method, it will dispatch this event for each one of them.
     */
    const ADD: any;

    /**
     * The Loader Plugin Complete Event.
     *
     * This event is dispatched when the Loader has fully processed everything in the load queue.
     * By this point every loaded file will now be in its associated cache and ready for use.
     *
     * Listen to it from a Scene using: `this.load.on('complete', listener)`.
     */
    const COMPLETE: any;

    /**
     * The File Load Complete Event.
     *
     * This event is dispatched by the Loader Plugin when any file in the queue finishes loading.
     *
     * Listen to it from a Scene using: `this.load.on('filecomplete', listener)`.
     *
     * You can also listen for the completion of a specific file. See the [FILE_KEY_COMPLETE]{@linkcode Phaser.Loader.Events#event:FILE_KEY_COMPLETE} event.
     */
    const FILE_COMPLETE: any;

    /**
     * The File Load Complete Event.
     *
     * This event is dispatched by the Loader Plugin when any file in the queue finishes loading.
     *
     * It uses a special dynamic event name constructed from the key and type of the file.
     *
     * For example, if you have loaded an `image` with a key of `monster`, you can listen for it
     * using the following:
     *
     * ```javascript
     * this.load.on('filecomplete-image-monster', function (key, type, data) {
     *     // Your handler code
     * });
     * ```
     *
     * Or, if you have loaded a texture `atlas` with a key of `Level1`:
     *
     * ```javascript
     * this.load.on('filecomplete-atlas-Level1', function (key, type, data) {
     *     // Your handler code
     * });
     * ```
     *
     * Or, if you have loaded a sprite sheet with a key of `Explosion` and a prefix of `GAMEOVER`:
     *
     * ```javascript
     * this.load.on('filecomplete-spritesheet-GAMEOVERExplosion', function (key, type, data) {
     *     // Your handler code
     * });
     * ```
     *
     * You can also listen for the generic completion of files. See the [FILE_COMPLETE]{@linkcode Phaser.Loader.Events#event:FILE_COMPLETE} event.
     */
    const FILE_KEY_COMPLETE: any;

    /**
     * The File Load Error Event.
     *
     * This event is dispatched by the Loader Plugin when a file fails to load.
     *
     * Listen to it from a Scene using: `this.load.on('loaderror', listener)`.
     */
    const FILE_LOAD_ERROR: any;

    /**
     * The File Load Event.
     *
     * This event is dispatched by the Loader Plugin when a file finishes loading,
     * but _before_ it is processed and added to the internal Phaser caches.
     *
     * Listen to it from a Scene using: `this.load.on('load', listener)`.
     */
    const FILE_LOAD: any;

    /**
     * The File Load Progress Event.
     *
     * This event is dispatched by the Loader Plugin during the load of a file, if the browser receives a DOM ProgressEvent and
     * the `lengthComputable` event property is true. Depending on the size of the file and browser in use, this may, or may not happen.
     *
     * Listen to it from a Scene using: `this.load.on('fileprogress', listener)`.
     */
    const FILE_PROGRESS: any;

    /**
     * The Loader Plugin Post Process Event.
     *
     * This event is dispatched by the Loader Plugin when the Loader has finished loading everything in the load queue.
     * It is dispatched before the internal lists are cleared and each File is destroyed.
     *
     * Use this hook to perform any last minute processing of files that can only happen once the
     * Loader has completed, but prior to it emitting the `complete` event.
     *
     * Listen to it from a Scene using: `this.load.on('postprocess', listener)`.
     */
    const POST_PROCESS: any;

    /**
     * The Loader Plugin Progress Event.
     *
     * This event is dispatched when the Loader updates its load progress, typically as a result of a file having completed loading.
     *
     * Listen to it from a Scene using: `this.load.on('progress', listener)`.
     */
    const PROGRESS: any;

    /**
     * The Loader Plugin Start Event.
     *
     * This event is dispatched when the Loader starts running. At this point load progress is zero.
     *
     * This event is dispatched even if there aren't any files in the load queue.
     *
     * Listen to it from a Scene using: `this.load.on('start', listener)`.
     */
    const START: any;

  }

  /**
   * The base File class used by all File Types that the Loader can support.
   * You shouldn't create an instance of a File directly, but should extend it with your own class, setting a custom type and processing methods.
   */
  class File {
    /**
     *
     * @param loader The Loader that is going to load this File.
     * @param fileConfig The file configuration object, as created by the file type.
     */
    constructor(loader: Phaser.Loader.LoaderPlugin, fileConfig: Phaser.Types.Loader.FileConfig);

    /**
     * A reference to the Loader that is going to load this file.
     */
    loader: Phaser.Loader.LoaderPlugin;

    /**
     * A reference to the Cache, or Texture Manager, that is going to store this file if it loads.
     */
    cache: Phaser.Cache.BaseCache | Phaser.Textures.TextureManager;

    /**
     * The file type string (image, json, etc) for sorting within the Loader.
     */
    type: string;

    /**
     * Unique cache key (unique within its file type)
     */
    key: string;

    /**
     * The URL of the file, not including baseURL.
     *
     * Automatically has Loader.path prepended to it if a string.
     *
     * Can also be a JavaScript Object, such as the results of parsing JSON data.
     */
    url: object | string;

    /**
     * The final URL this file will load from, including baseURL and path.
     * Set automatically when the Loader calls 'load' on this file.
     */
    src: string;

    /**
     * The merged XHRSettings for this file.
     */
    xhrSettings: Phaser.Types.Loader.XHRSettingsObject;

    /**
     * The XMLHttpRequest instance (as created by XHR Loader) that is loading this File.
     */
    xhrLoader: XMLHttpRequest;

    /**
     * The current state of the file. One of the FILE_CONST values.
     */
    state: number;

    /**
     * The total size of this file.
     * Set by onProgress and only if loading via XHR.
     */
    bytesTotal: number;

    /**
     * Updated as the file loads.
     * Only set if loading via XHR.
     */
    bytesLoaded: number;

    /**
     * A percentage value between 0 and 1 indicating how much of this file has loaded.
     * Only set if loading via XHR.
     */
    percentComplete: number;

    /**
     * For CORs based loading.
     * If this is undefined then the File will check BaseLoader.crossOrigin and use that (if set)
     */
    crossOrigin: string | undefined;

    /**
     * The processed file data, stored here after the file has loaded.
     */
    data: any;

    /**
     * A config object that can be used by file types to store transitional data.
     */
    config: any;

    /**
     * If this is a multipart file, i.e. an atlas and its json together, then this is a reference
     * to the parent MultiFile. Set and used internally by the Loader or specific file types.
     */
    multiFile: Phaser.Loader.MultiFile;

    /**
     * Does this file have an associated linked file? Such as an image and a normal map.
     * Atlases and Bitmap Fonts use the multiFile, because those files need loading together but aren't
     * actually bound by data, where-as a linkFile is.
     */
    linkFile: Phaser.Loader.File;

    /**
     * Links this File with another, so they depend upon each other for loading and processing.
     * @param fileB The file to link to this one.
     */
    setLink(fileB: Phaser.Loader.File): void;

    /**
     * Resets the XHRLoader instance this file is using.
     */
    resetXHR(): void;

    /**
     * Called by the Loader, starts the actual file downloading.
     * During the load the methods onLoad, onError and onProgress are called, based on the XHR events.
     * You shouldn't normally call this method directly, it's meant to be invoked by the Loader.
     */
    load(): void;

    /**
     * Called when the file finishes loading, is sent a DOM ProgressEvent.
     * @param xhr The XMLHttpRequest that caused this onload event.
     * @param event The DOM ProgressEvent that resulted from this load.
     */
    onLoad(xhr: XMLHttpRequest, event: ProgressEvent): void;

    /**
     * Called if the file errors while loading, is sent a DOM ProgressEvent.
     * @param xhr The XMLHttpRequest that caused this onload event.
     * @param event The DOM ProgressEvent that resulted from this error.
     */
    onError(xhr: XMLHttpRequest, event: ProgressEvent): void;

    /**
     * Called during the file load progress. Is sent a DOM ProgressEvent.
     * @param event The DOM ProgressEvent.
     */
    onProgress(event: ProgressEvent): void;

    /**
     * Usually overridden by the FileTypes and is called by Loader.nextFile.
     * This method controls what extra work this File does with its loaded data, for example a JSON file will parse itself during this stage.
     */
    onProcess(): void;

    /**
     * Called when the File has completed processing.
     * Checks on the state of its multifile, if set.
     */
    onProcessComplete(): void;

    /**
     * Called when the File has completed processing but it generated an error.
     * Checks on the state of its multifile, if set.
     */
    onProcessError(): void;

    /**
     * Checks if a key matching the one used by this file exists in the target Cache or not.
     * This is called automatically by the LoaderPlugin to decide if the file can be safely
     * loaded or will conflict.
     */
    hasCacheConflict(): boolean;

    /**
     * Adds this file to its target cache upon successful loading and processing.
     * This method is often overridden by specific file types.
     */
    addToCache(): void;

    /**
     * Called once the file has been added to its cache and is now ready for deletion from the Loader.
     * It will emit a `filecomplete` event from the LoaderPlugin.
     */
    pendingDestroy(): void;

    /**
     * Destroy this File and any references it holds.
     */
    destroy(): void;

    /**
     * Static method for creating object URL using URL API and setting it as image 'src' attribute.
     * If URL API is not supported (usually on old browsers) it falls back to creating Base64 encoded url using FileReader.
     * @param image Image object which 'src' attribute should be set to object URL.
     * @param blob A Blob object to create an object URL for.
     * @param defaultType Default mime type used if blob type is not available.
     */
    static createObjectURL(image: HTMLImageElement, blob: Blob, defaultType: string): void;

    /**
     * Static method for releasing an existing object URL which was previously created
     * by calling {@link File#createObjectURL} method.
     * @param image Image object which 'src' attribute should be revoked.
     */
    static revokeObjectURL(image: HTMLImageElement): void;

  }

  namespace FileTypes {
    /**
     * A single Animation JSON File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#animation method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#animation.
     */
    class AnimationJSONFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       * @param dataKey When the JSON file loads only this property will be stored in the Cache.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.JSONFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject, dataKey?: string);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

      /**
       * Called at the end of the load process, after the Loader has finished all files in its queue.
       */
      onLoadComplete(): void;

    }

    /**
     * A single JSON based Texture Atlas File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#atlas method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#atlas.
     *
     * https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3?source=photonstorm
     */
    class AsepriteFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param textureURL The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
       * @param atlasURL The absolute or relative URL to load the texture atlas json data file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json". Or, a well formed JSON object.
       * @param textureXhrSettings An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
       * @param atlasXhrSettings An XHR Settings configuration object for the atlas json file. Used in replacement of the Loaders default XHR Settings.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.AsepriteFileConfig, textureURL?: string | string[], atlasURL?: object | string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single JSON based Texture Atlas File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#atlas method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#atlas.
     *
     * https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3?source=photonstorm
     */
    class AtlasJSONFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param textureURL The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
       * @param atlasURL The absolute or relative URL to load the texture atlas json data file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json". Or, a well formed JSON object.
       * @param textureXhrSettings An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
       * @param atlasXhrSettings An XHR Settings configuration object for the atlas json file. Used in replacement of the Loaders default XHR Settings.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.AtlasJSONFileConfig, textureURL?: string | string[], atlasURL?: object | string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single XML based Texture Atlas File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#atlasXML method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#atlasXML.
     */
    class AtlasXMLFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param textureURL The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
       * @param atlasURL The absolute or relative URL to load the texture atlas xml data file from. If undefined or `null` it will be set to `<key>.xml`, i.e. if `key` was "alien" then the URL will be "alien.xml".
       * @param textureXhrSettings An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
       * @param atlasXhrSettings An XHR Settings configuration object for the atlas xml file. Used in replacement of the Loaders default XHR Settings.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.AtlasXMLFileConfig, textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Audio File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#audio method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#audio.
     */
    class AudioFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param urlConfig The absolute or relative URL to load this file from in a config object.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       * @param audioContext The AudioContext this file will use to process itself.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.AudioFileConfig, urlConfig?: any, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject, audioContext?: AudioContext);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * An Audio Sprite File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#audioSprite method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#audioSprite.
     */
    class AudioSpriteFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param jsonURL The absolute or relative URL to load the json file from. Or a well formed JSON object to use instead.
       * @param audioURL The absolute or relative URL to load the audio file from. If empty it will be obtained by parsing the JSON file.
       * @param audioConfig The audio configuration options.
       * @param audioXhrSettings An XHR Settings configuration object for the audio file. Used in replacement of the Loaders default XHR Settings.
       * @param jsonXhrSettings An XHR Settings configuration object for the json file. Used in replacement of the Loaders default XHR Settings.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.AudioSpriteFileConfig, jsonURL: string, audioURL?: Object, audioConfig?: any, audioXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, jsonXhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called by each File when it finishes loading.
       * @param file The File that has completed processing.
       */
      onFileComplete(file: Phaser.Loader.File): void;

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Binary File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#binary method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#binary.
     */
    class BinaryFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.bin`, i.e. if `key` was "alien" then the URL will be "alien.bin".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       * @param dataType Optional type to cast the binary file to once loaded. For example, `Uint8Array`.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.BinaryFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject, dataType?: any);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * A single Bitmap Font based File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#bitmapFont method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#bitmapFont.
     */
    class BitmapFontFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param textureURL The absolute or relative URL to load the font image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
       * @param fontDataURL The absolute or relative URL to load the font xml data file from. If undefined or `null` it will be set to `<key>.xml`, i.e. if `key` was "alien" then the URL will be "alien.xml".
       * @param textureXhrSettings An XHR Settings configuration object for the font image file. Used in replacement of the Loaders default XHR Settings.
       * @param fontDataXhrSettings An XHR Settings configuration object for the font data xml file. Used in replacement of the Loaders default XHR Settings.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.BitmapFontFileConfig, textureURL?: string | string[], fontDataURL?: string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, fontDataXhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single CSS File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#css method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#css.
     */
    class CSSFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.CSSFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * A single GLSL File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#glsl method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#glsl.
     */
    class GLSLFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
       * @param shaderType The type of shader. Either `fragment` for a fragment shader, or `vertex` for a vertex shader. This is ignored if you load a shader bundle. Default 'fragment'.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.GLSLFileConfig, url?: string, shaderType?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

      /**
       * Returns the name of the shader from the header block.
       * @param headerSource The header data.
       */
      getShaderName(headerSource: string[]): string;

      /**
       * Returns the type of the shader from the header block.
       * @param headerSource The header data.
       */
      getShaderType(headerSource: string[]): string;

      /**
       * Returns the shader uniforms from the header block.
       * @param headerSource The header data.
       */
      getShaderUniforms(headerSource: string[]): any;

    }

    /**
     * A single Audio File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#audio method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#audio.
     */
    class HTML5AudioFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param urlConfig The absolute or relative URL to load this file from.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.AudioFileConfig, urlConfig?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called when the file finishes loading.
       */
      onLoad(): void;

      /**
       * Called if the file errors while loading.
       */
      onError(): void;

      /**
       * Called during the file load progress. Is sent a DOM ProgressEvent.
       */
      onProgress(): void;

      /**
       * Called by the Loader, starts the actual file downloading.
       * During the load the methods onLoad, onError and onProgress are called, based on the XHR events.
       * You shouldn't normally call this method directly, it's meant to be invoked by the Loader.
       */
      load(): void;

    }

    /**
     * A single HTML File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#html method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#html.
     */
    class HTMLFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.html`, i.e. if `key` was "alien" then the URL will be "alien.html".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.HTMLFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * A single HTML File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#htmlTexture method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#htmlTexture.
     */
    class HTMLTextureFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
       * @param width The width of the texture the HTML will be rendered to.
       * @param height The height of the texture the HTML will be rendered to.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.HTMLTextureFileConfig, url?: string, width?: number, height?: number, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Image File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#image method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#image.
     */
    class ImageFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       * @param frameConfig The frame configuration object. Only provided for, and used by, Sprite Sheets.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.ImageFileConfig, url?: string | string[], xhrSettings?: Phaser.Types.Loader.XHRSettingsObject, frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single JSON File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#json method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#json.
     */
    class JSONFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json". Or, can be a fully formed JSON Object.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       * @param dataKey When the JSON file loads only this property will be stored in the Cache.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.JSONFileConfig, url?: object | string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject, dataKey?: string);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * A single Multi Texture Atlas File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#multiatlas method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#multiatlas.
     */
    class MultiAtlasFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key of the file. Must be unique within both the Loader and the Texture Manager. Or a config object.
       * @param atlasURL The absolute or relative URL to load the multi atlas json file from.
       * @param path Optional path to use when loading the textures defined in the atlas data.
       * @param baseURL Optional Base URL to use when loading the textures defined in the atlas data.
       * @param atlasXhrSettings Extra XHR Settings specifically for the atlas json file.
       * @param textureXhrSettings Extra XHR Settings specifically for the texture files.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.MultiAtlasFileConfig, atlasURL?: string, path?: string, baseURL?: string, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called by each File when it finishes loading.
       * @param file The File that has completed processing.
       */
      onFileComplete(file: Phaser.Loader.File): void;

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A Multi Script File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#scripts method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#scripts.
     */
    class MultiScriptFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url An array of absolute or relative URLs to load the script files from. They are processed in the order given in the array.
       * @param xhrSettings An XHR Settings configuration object for the script files. Used in replacement of the Loaders default XHR Settings.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.MultiScriptFileConfig, url?: string[], xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Wavefront OBJ File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#obj method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#obj.
     */
    class OBJFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param objURL The absolute or relative URL to load the obj file from. If undefined or `null` it will be set to `<key>.obj`, i.e. if `key` was "alien" then the URL will be "alien.obj".
       * @param matURL The absolute or relative URL to load the material file from. If undefined or `null` it will be set to `<key>.mat`, i.e. if `key` was "alien" then the URL will be "alien.mat".
       * @param flipUV Flip the UV coordinates stored in the model data?
       * @param xhrSettings Extra XHR Settings specifically for these files.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.OBJFileConfig, objURL?: string, matURL?: string, flipUV?: boolean, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single JSON Pack File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#pack method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#pack.
     */
    class PackFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       * @param dataKey When the JSON file loads only this property will be stored in the Cache.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.PackFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject, dataKey?: string);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * A single Plugin Script File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#plugin method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#plugin.
     */
    class PluginFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js".
       * @param start Automatically start the plugin after loading? Default false.
       * @param mapping If this plugin is to be injected into the Scene, this is the property key used.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.PluginFileConfig, url?: string, start?: boolean, mapping?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * An external Scene JavaScript File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#sceneFile method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#sceneFile.
     */
    class SceneFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.SceneFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Scene Plugin Script File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#scenePlugin method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#scenePlugin.
     */
    class ScenePluginFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js".
       * @param systemKey If this plugin is to be added to Scene.Systems, this is the property key for it.
       * @param sceneKey If this plugin is to be added to the Scene, this is the property key for it.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.ScenePluginFileConfig, url?: string, systemKey?: string, sceneKey?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * A single Script File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#script method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#script.
     */
    class ScriptFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.ScriptFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * A single Sprite Sheet Image File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#spritesheet method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#spritesheet.
     */
    class SpriteSheetFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
       * @param frameConfig The frame configuration object.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig, url?: string | string[], frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single SVG File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#svg method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#svg.
     */
    class SVGFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.svg`, i.e. if `key` was "alien" then the URL will be "alien.svg".
       * @param svgConfig The svg size configuration object.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.SVGFileConfig, url?: string, svgConfig?: Phaser.Types.Loader.FileTypes.SVGSizeConfig, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Text File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#text method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#text.
     */
    class TextFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.TextFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

    /**
     * A single Tilemap CSV File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#tilemapCSV method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#tilemapCSV.
     */
    class TilemapCSVFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.csv`, i.e. if `key` was "alien" then the URL will be "alien.csv".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.TilemapCSVFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Impact.js Tilemap JSON File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#tilemapImpact method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#tilemapImpact.
     */
    class TilemapImpactFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.TilemapImpactFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Tiled Tilemap JSON File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#tilemapTiledJSON method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#tilemapTiledJSON.
     */
    class TilemapJSONFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json". Or, a well formed JSON object.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.TilemapJSONFileConfig, url?: object | string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single text file based Unity Texture Atlas File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#unityAtlas method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#unityAtlas.
     */
    class UnityAtlasFile extends Phaser.Loader.MultiFile {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param textureURL The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
       * @param atlasURL The absolute or relative URL to load the texture atlas data file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
       * @param textureXhrSettings An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
       * @param atlasXhrSettings An XHR Settings configuration object for the atlas data file. Used in replacement of the Loaders default XHR Settings.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.UnityAtlasFileConfig, textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Adds this file to its target cache upon successful loading and processing.
       */
      addToCache(): void;

    }

    /**
     * A single Video File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#video method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#video.
     */
    class VideoFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param urlConfig The absolute or relative URL to load this file from in a config object.
       * @param loadEvent The load event to listen for when _not_ loading as a blob. Either 'loadeddata', 'canplay' or 'canplaythrough'.
       * @param asBlob Load the video as a data blob, or via the Video element?
       * @param noAudio Does the video have an audio track? If not you can enable auto-playing on it.
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.VideoFileConfig, urlConfig?: any, loadEvent?: string, asBlob?: boolean, noAudio?: boolean, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

      /**
       * Called by the Loader, starts the actual file downloading.
       * During the load the methods onLoad, onError and onProgress are called, based on the XHR events.
       * You shouldn't normally call this method directly, it's meant to be invoked by the Loader.
       */
      load(): void;

    }

    /**
     * A single XML File suitable for loading by the Loader.
     *
     * These are created when you use the Phaser.Loader.LoaderPlugin#xml method and are not typically created directly.
     *
     * For documentation about what all the arguments and configuration options mean please see Phaser.Loader.LoaderPlugin#xml.
     */
    class XMLFile extends Phaser.Loader.File {
      /**
       *
       * @param loader A reference to the Loader that is responsible for this file.
       * @param key The key to use for this file, or a file configuration object.
       * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.xml`, i.e. if `key` was "alien" then the URL will be "alien.xml".
       * @param xhrSettings Extra XHR Settings specifically for this file.
       */
      constructor(loader: Phaser.Loader.LoaderPlugin, key: string | Phaser.Types.Loader.FileTypes.XMLFileConfig, url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject);

      /**
       * Called automatically by Loader.nextFile.
       * This method controls what extra work this File does with its loaded data.
       */
      onProcess(): void;

    }

  }

  namespace FileTypesManager {
    /**
     * Static method called when a LoaderPlugin is created.
     *
     * Loops through the local types object and injects all of them as
     * properties into the LoaderPlugin instance.
     * @param loader The LoaderPlugin to install the types into.
     */
    function install(loader: Phaser.Loader.LoaderPlugin): void;

    /**
     * Static method called directly by the File Types.
     *
     * The key is a reference to the function used to load the files via the Loader, i.e. `image`.
     * @param key The key that will be used as the method name in the LoaderPlugin.
     * @param factoryFunction The function that will be called when LoaderPlugin.key is invoked.
     */
    function register(key: string, factoryFunction: Function): void;

    /**
     * Removed all associated file types.
     */
    function destroy(): void;

  }

  /**
   * Given a File and a baseURL value this returns the URL the File will use to download from.
   * @param file The File object.
   * @param baseURL A default base URL.
   */
  function GetURL(file: Phaser.Loader.File, baseURL: string): string;

  /**
   * The Loader handles loading all external content such as Images, Sounds, Texture Atlases and data files.
   * You typically interact with it via `this.load` in your Scene. Scenes can have a `preload` method, which is always
   * called before the Scenes `create` method, allowing you to preload assets that the Scene may need.
   *
   * If you call any `this.load` methods from outside of `Scene.preload` then you need to start the Loader going
   * yourself by calling `Loader.start()`. It's only automatically started during the Scene preload.
   *
   * The Loader uses a combination of tag loading (eg. Audio elements) and XHR and provides progress and completion events.
   * Files are loaded in parallel by default. The amount of concurrent connections can be controlled in your Game Configuration.
   *
   * Once the Loader has started loading you are still able to add files to it. These can be injected as a result of a loader
   * event, the type of file being loaded (such as a pack file) or other external events. As long as the Loader hasn't finished
   * simply adding a new file to it, while running, will ensure it's added into the current queue.
   *
   * Every Scene has its own instance of the Loader and they are bound to the Scene in which they are created. However,
   * assets loaded by the Loader are placed into global game-level caches. For example, loading an XML file will place that
   * file inside `Game.cache.xml`, which is accessible from every Scene in your game, no matter who was responsible
   * for loading it. The same is true of Textures. A texture loaded in one Scene is instantly available to all other Scenes
   * in your game.
   *
   * The Loader works by using custom File Types. These are stored in the FileTypesManager, which injects them into the Loader
   * when it's instantiated. You can create your own custom file types by extending either the File or MultiFile classes.
   * See those files for more details.
   */
  class LoaderPlugin extends Phaser.Events.EventEmitter {
    /**
     *
     * @param scene The Scene which owns this Loader instance.
     */
    constructor(scene: Phaser.Scene);

    /**
     * Adds an Animation JSON Data file, or array of Animation JSON files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.animation('baddieAnims', 'files/BaddieAnims.json');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * The key must be a unique String. It is used to add the file to the global JSON Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the JSON Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the JSON Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.animation({
     *     key: 'baddieAnims',
     *     url: 'files/BaddieAnims.json'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.JSONFileConfig` for more details.
     *
     * Once the file has finished loading it will automatically be passed to the global Animation Managers `fromJSON` method.
     * This will parse all of the JSON data and create animation data from it. This process happens at the very end
     * of the Loader, once every other file in the load queue has finished. The reason for this is to allow you to load
     * both animation data and the images it relies upon in the same load call.
     *
     * Once the animation data has been parsed you will be able to play animations using that data.
     * Please see the Animation Manager `fromJSON` method for more details about the format and playback.
     *
     * You can also access the raw animation data from its Cache using its key:
     *
     * ```javascript
     * this.load.animation('baddieAnims', 'files/BaddieAnims.json');
     * // and later in your game ...
     * var data = this.cache.json.get('baddieAnims');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Waves` the final key will be `LEVEL1.Waves` and
     * this is what you would use to retrieve the text from the JSON Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "data"
     * and no URL is given then the Loader will set the URL to be "data.json". It will always add `.json` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * You can also optionally provide a `dataKey` to use. This allows you to extract only a part of the JSON and store it in the Cache,
     * rather than the whole file. For example, if your JSON data had a structure like this:
     *
     * ```json
     * {
     *     "level1": {
     *         "baddies": {
     *             "aliens": {},
     *             "boss": {}
     *         }
     *     },
     *     "level2": {},
     *     "level3": {}
     * }
     * ```
     *
     * And if you only wanted to create animations from the `boss` data, then you could pass `level1.baddies.boss`as the `dataKey`.
     *
     * Note: The ability to load this type of file will only be available if the JSON File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
     * @param dataKey When the Animation JSON file loads only this property will be stored in the Cache and used to create animation data.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    animation(key: string | Phaser.Types.Loader.FileTypes.JSONFileConfig | Phaser.Types.Loader.FileTypes.JSONFileConfig[], url?: string, dataKey?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Aseprite is a powerful animated sprite editor and pixel art tool.
     *
     * You can find more details at https://www.aseprite.org/
     *
     * Adds a JSON based Aseprite Animation, or array of animations, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.aseprite('gladiator', 'images/Gladiator.png', 'images/Gladiator.json');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * To export a compatible JSON file in Aseprite, please do the following:
     *
     * 1. Go to "File - Export Sprite Sheet"
     *
     * 2. On the **Layout** tab:
     * 2a. Set the "Sheet type" to "Packed"
     * 2b. Set the "Constraints" to "None"
     * 2c. Check the "Merge Duplicates" checkbox
     *
     * 3. On the **Sprite** tab:
     * 3a. Set "Layers" to "Visible layers"
     * 3b. Set "Frames" to "All frames", unless you only wish to export a sub-set of tags
     *
     * 4. On the **Borders** tab:
     * 4a. Check the "Trim Sprite" and "Trim Cells" options
     * 4b. Ensure "Border Padding", "Spacing" and "Inner Padding" are all > 0 (1 is usually enough)
     *
     * 5. On the **Output** tab:
     * 5a. Check "Output File", give your image a name and make sure you choose "png files" as the file type
     * 5b. Check "JSON Data" and give your json file a name
     * 5c. The JSON Data type can be either a Hash or Array, Phaser doesn't mind.
     * 5d. Make sure "Tags" is checked in the Meta options
     * 5e. In the "Item Filename" input box, make sure it says just "{frame}" and nothing more.
     *
     * 6. Click export
     *
     * This was tested with Aseprite 1.2.25.
     *
     * This will export a png and json file which you can load using the Aseprite Loader, i.e.:
     *
     * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.aseprite({
     *     key: 'gladiator',
     *     textureURL: 'images/Gladiator.png',
     *     atlasURL: 'images/Gladiator.json'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.AsepriteFileConfig` for more details.
     *
     * Instead of passing a URL for the JSON data you can also pass in a well formed JSON object instead.
     *
     * Once loaded, you can call this method from within a Scene with the 'atlas' key:
     *
     * ```javascript
     * this.anims.createFromAseprite('paladin');
     * ```
     *
     * Any animations defined in the JSON will now be available to use in Phaser and you play them
     * via their Tag name. For example, if you have an animation called 'War Cry' on your Aseprite timeline,
     * you can play it in Phaser using that Tag name:
     *
     * ```javascript
     * this.add.sprite(400, 300).play('War Cry');
     * ```
     *
     * When calling this method you can optionally provide an array of tag names, and only those animations
     * will be created. For example:
     *
     * ```javascript
     * this.anims.createFromAseprite('paladin', [ 'step', 'War Cry', 'Magnum Break' ]);
     * ```
     *
     * This will only create the 3 animations defined. Note that the tag names are case-sensitive.
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Aseprite File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param textureURL The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
     * @param atlasURL The absolute or relative URL to load the texture atlas json data file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json". Or, a well formed JSON object.
     * @param textureXhrSettings An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
     * @param atlasXhrSettings An XHR Settings configuration object for the atlas json file. Used in replacement of the Loaders default XHR Settings.
     */
    aseprite(key: string | Phaser.Types.Loader.FileTypes.AsepriteFileConfig | Phaser.Types.Loader.FileTypes.AsepriteFileConfig[], textureURL?: string | string[], atlasURL?: object | string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a JSON based Texture Atlas, or array of atlases, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.atlas('mainmenu', 'images/MainMenu.png', 'images/MainMenu.json');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * Phaser expects the atlas data to be provided in a JSON file, using either the JSON Hash or JSON Array format.
     * These files are created by software such as Texture Packer, Shoebox and Adobe Flash / Animate.
     * If you are using Texture Packer and have enabled multi-atlas support, then please use the Phaser Multi Atlas loader
     * instead of this one.
     *
     * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.atlas({
     *     key: 'mainmenu',
     *     textureURL: 'images/MainMenu.png',
     *     atlasURL: 'images/MainMenu.json'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.AtlasJSONFileConfig` for more details.
     *
     * Instead of passing a URL for the atlas JSON data you can also pass in a well formed JSON object instead.
     *
     * Once the atlas has finished loading you can use frames from it as textures for a Game Object by referencing its key:
     *
     * ```javascript
     * this.load.atlas('mainmenu', 'images/MainMenu.png', 'images/MainMenu.json');
     * // and later in your game ...
     * this.add.image(x, y, 'mainmenu', 'background');
     * ```
     *
     * To get a list of all available frames within an atlas please consult your Texture Atlas software.
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Phaser also supports the automatic loading of associated normal maps. If you have a normal map to go with this image,
     * then you can specify it by providing an array as the `url` where the second element is the normal map:
     *
     * ```javascript
     * this.load.atlas('mainmenu', [ 'images/MainMenu.png', 'images/MainMenu-n.png' ], 'images/MainMenu.json');
     * ```
     *
     * Or, if you are using a config object use the `normalMap` property:
     *
     * ```javascript
     * this.load.atlas({
     *     key: 'mainmenu',
     *     textureURL: 'images/MainMenu.png',
     *     normalMap: 'images/MainMenu-n.png',
     *     atlasURL: 'images/MainMenu.json'
     * });
     * ```
     *
     * The normal map file is subject to the same conditions as the image file with regard to the path, baseURL, CORs and XHR Settings.
     * Normal maps are a WebGL only feature.
     *
     * Note: The ability to load this type of file will only be available if the Atlas JSON File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param textureURL The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
     * @param atlasURL The absolute or relative URL to load the texture atlas json data file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json". Or, a well formed JSON object.
     * @param textureXhrSettings An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
     * @param atlasXhrSettings An XHR Settings configuration object for the atlas json file. Used in replacement of the Loaders default XHR Settings.
     */
    atlas(key: string | Phaser.Types.Loader.FileTypes.AtlasJSONFileConfig | Phaser.Types.Loader.FileTypes.AtlasJSONFileConfig[], textureURL?: string | string[], atlasURL?: object | string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an XML based Texture Atlas, or array of atlases, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.atlasXML('mainmenu', 'images/MainMenu.png', 'images/MainMenu.xml');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * Phaser expects the atlas data to be provided in an XML file format.
     * These files are created by software such as Shoebox and Adobe Flash / Animate.
     *
     * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.atlasXML({
     *     key: 'mainmenu',
     *     textureURL: 'images/MainMenu.png',
     *     atlasURL: 'images/MainMenu.xml'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.AtlasXMLFileConfig` for more details.
     *
     * Once the atlas has finished loading you can use frames from it as textures for a Game Object by referencing its key:
     *
     * ```javascript
     * this.load.atlasXML('mainmenu', 'images/MainMenu.png', 'images/MainMenu.xml');
     * // and later in your game ...
     * this.add.image(x, y, 'mainmenu', 'background');
     * ```
     *
     * To get a list of all available frames within an atlas please consult your Texture Atlas software.
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Phaser also supports the automatic loading of associated normal maps. If you have a normal map to go with this image,
     * then you can specify it by providing an array as the `url` where the second element is the normal map:
     *
     * ```javascript
     * this.load.atlasXML('mainmenu', [ 'images/MainMenu.png', 'images/MainMenu-n.png' ], 'images/MainMenu.xml');
     * ```
     *
     * Or, if you are using a config object use the `normalMap` property:
     *
     * ```javascript
     * this.load.atlasXML({
     *     key: 'mainmenu',
     *     textureURL: 'images/MainMenu.png',
     *     normalMap: 'images/MainMenu-n.png',
     *     atlasURL: 'images/MainMenu.xml'
     * });
     * ```
     *
     * The normal map file is subject to the same conditions as the image file with regard to the path, baseURL, CORs and XHR Settings.
     * Normal maps are a WebGL only feature.
     *
     * Note: The ability to load this type of file will only be available if the Atlas XML File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param textureURL The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
     * @param atlasURL The absolute or relative URL to load the texture atlas xml data file from. If undefined or `null` it will be set to `<key>.xml`, i.e. if `key` was "alien" then the URL will be "alien.xml".
     * @param textureXhrSettings An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
     * @param atlasXhrSettings An XHR Settings configuration object for the atlas xml file. Used in replacement of the Loaders default XHR Settings.
     */
    atlasXML(key: string | Phaser.Types.Loader.FileTypes.AtlasXMLFileConfig | Phaser.Types.Loader.FileTypes.AtlasXMLFileConfig[], textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an Audio or HTML5Audio file, or array of audio files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.audio('title', [ 'music/Title.ogg', 'music/Title.mp3', 'music/Title.m4a' ]);
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Audio Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Audio Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Audio Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.audio({
     *     key: 'title',
     *     url: [ 'music/Title.ogg', 'music/Title.mp3', 'music/Title.m4a' ]
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.AudioFileConfig` for more details.
     *
     * The URLs can be relative or absolute. If the URLs are relative the `Loader.baseURL` and `Loader.path` values will be prepended to them.
     *
     * Due to different browsers supporting different audio file types you should usually provide your audio files in a variety of formats.
     * ogg, mp3 and m4a are the most common. If you provide an array of URLs then the Loader will determine which _one_ file to load based on
     * browser support.
     *
     * If audio has been disabled in your game, either via the game config, or lack of support from the device, then no audio will be loaded.
     *
     * Note: The ability to load this type of file will only be available if the Audio File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param urls The absolute or relative URL to load the audio files from.
     * @param config An object containing an `instances` property for HTML5Audio. Defaults to 1.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    audio(key: string | Phaser.Types.Loader.FileTypes.AudioFileConfig | Phaser.Types.Loader.FileTypes.AudioFileConfig[], urls?: string | string[], config?: any, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a JSON based Audio Sprite, or array of audio sprites, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.audioSprite('kyobi', 'kyobi.json', [
     *         'kyobi.ogg',
     *         'kyobi.mp3',
     *         'kyobi.m4a'
     *     ]);
     * }
     * ```
     *
     * Audio Sprites are a combination of audio files and a JSON configuration.
     * The JSON follows the format of that created by https://github.com/tonistiigi/audiosprite
     *
     * If the JSON file includes a 'resource' object then you can let Phaser parse it and load the audio
     * files automatically based on its content. To do this exclude the audio URLs from the load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.audioSprite('kyobi', 'kyobi.json');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * The key must be a unique String. It is used to add the file to the global Audio Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Audio Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Audio Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.audioSprite({
     *     key: 'kyobi',
     *     jsonURL: 'audio/Kyobi.json',
     *     audioURL: [
     *         'audio/Kyobi.ogg',
     *         'audio/Kyobi.mp3',
     *         'audio/Kyobi.m4a'
     *     ]
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.AudioSpriteFileConfig` for more details.
     *
     * Instead of passing a URL for the audio JSON data you can also pass in a well formed JSON object instead.
     *
     * Once the audio has finished loading you can use it create an Audio Sprite by referencing its key:
     *
     * ```javascript
     * this.load.audioSprite('kyobi', 'kyobi.json');
     * // and later in your game ...
     * var music = this.sound.addAudioSprite('kyobi');
     * music.play('title');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * Due to different browsers supporting different audio file types you should usually provide your audio files in a variety of formats.
     * ogg, mp3 and m4a are the most common. If you provide an array of URLs then the Loader will determine which _one_ file to load based on
     * browser support.
     *
     * If audio has been disabled in your game, either via the game config, or lack of support from the device, then no audio will be loaded.
     *
     * Note: The ability to load this type of file will only be available if the Audio Sprite File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or an array of objects.
     * @param jsonURL The absolute or relative URL to load the json file from. Or a well formed JSON object to use instead.
     * @param audioURL The absolute or relative URL to load the audio file from. If empty it will be obtained by parsing the JSON file.
     * @param audioConfig The audio configuration options.
     * @param audioXhrSettings An XHR Settings configuration object for the audio file. Used in replacement of the Loaders default XHR Settings.
     * @param jsonXhrSettings An XHR Settings configuration object for the json file. Used in replacement of the Loaders default XHR Settings.
     */
    audioSprite(key: string | Phaser.Types.Loader.FileTypes.AudioSpriteFileConfig | Phaser.Types.Loader.FileTypes.AudioSpriteFileConfig[], jsonURL: string, audioURL?: string | string[], audioConfig?: any, audioXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, jsonXhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Binary file, or array of Binary files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.binary('doom', 'files/Doom.wad');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Binary Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Binary Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Binary Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.binary({
     *     key: 'doom',
     *     url: 'files/Doom.wad',
     *     dataType: Uint8Array
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.BinaryFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.binary('doom', 'files/Doom.wad');
     * // and later in your game ...
     * var data = this.cache.binary.get('doom');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Data` the final key will be `LEVEL1.Data` and
     * this is what you would use to retrieve the text from the Binary Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "doom"
     * and no URL is given then the Loader will set the URL to be "doom.bin". It will always add `.bin` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Binary File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.bin`, i.e. if `key` was "alien" then the URL will be "alien.bin".
     * @param dataType Optional type to cast the binary file to once loaded. For example, `Uint8Array`.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    binary(key: string | Phaser.Types.Loader.FileTypes.BinaryFileConfig | Phaser.Types.Loader.FileTypes.BinaryFileConfig[], url?: string, dataType?: any, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an XML based Bitmap Font, or array of fonts, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     * ```javascript
     * function preload ()
     * {
     *     this.load.bitmapFont('goldenFont', 'images/GoldFont.png', 'images/GoldFont.xml');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * Phaser expects the font data to be provided in an XML file format.
     * These files are created by software such as the [Angelcode Bitmap Font Generator](http://www.angelcode.com/products/bmfont/),
     * [Littera](http://kvazars.com/littera/) or [Glyph Designer](https://71squared.com/glyphdesigner)
     *
     * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.bitmapFont({
     *     key: 'goldenFont',
     *     textureURL: 'images/GoldFont.png',
     *     fontDataURL: 'images/GoldFont.xml'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.BitmapFontFileConfig` for more details.
     *
     * Once the atlas has finished loading you can use key of it when creating a Bitmap Text Game Object:
     *
     * ```javascript
     * this.load.bitmapFont('goldenFont', 'images/GoldFont.png', 'images/GoldFont.xml');
     * // and later in your game ...
     * this.add.bitmapText(x, y, 'goldenFont', 'Hello World');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use when creating a Bitmap Text object.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Phaser also supports the automatic loading of associated normal maps. If you have a normal map to go with this image,
     * then you can specify it by providing an array as the `url` where the second element is the normal map:
     *
     * ```javascript
     * this.load.bitmapFont('goldenFont', [ 'images/GoldFont.png', 'images/GoldFont-n.png' ], 'images/GoldFont.xml');
     * ```
     *
     * Or, if you are using a config object use the `normalMap` property:
     *
     * ```javascript
     * this.load.bitmapFont({
     *     key: 'goldenFont',
     *     textureURL: 'images/GoldFont.png',
     *     normalMap: 'images/GoldFont-n.png',
     *     fontDataURL: 'images/GoldFont.xml'
     * });
     * ```
     *
     * The normal map file is subject to the same conditions as the image file with regard to the path, baseURL, CORs and XHR Settings.
     * Normal maps are a WebGL only feature.
     *
     * Note: The ability to load this type of file will only be available if the Bitmap Font File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param textureURL The absolute or relative URL to load the font image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
     * @param fontDataURL The absolute or relative URL to load the font xml data file from. If undefined or `null` it will be set to `<key>.xml`, i.e. if `key` was "alien" then the URL will be "alien.xml".
     * @param textureXhrSettings An XHR Settings configuration object for the font image file. Used in replacement of the Loaders default XHR Settings.
     * @param fontDataXhrSettings An XHR Settings configuration object for the font data xml file. Used in replacement of the Loaders default XHR Settings.
     */
    bitmapFont(key: string | Phaser.Types.Loader.FileTypes.BitmapFontFileConfig | Phaser.Types.Loader.FileTypes.BitmapFontFileConfig[], textureURL?: string | string[], fontDataURL?: string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, fontDataXhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a CSS file, or array of CSS files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.css('headers', 'styles/headers.css');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String and not already in-use by another file in the Loader.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.css({
     *     key: 'headers',
     *     url: 'styles/headers.css'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.CSSFileConfig` for more details.
     *
     * Once the file has finished loading it will automatically be converted into a style DOM element
     * via `document.createElement('style')`. It will have its `defer` property set to false and then the
     * resulting element will be appended to `document.head`. The CSS styles are then applied to the current document.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.css". It will always add `.css` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the CSS File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.css`, i.e. if `key` was "alien" then the URL will be "alien.css".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    css(key: string | Phaser.Types.Loader.FileTypes.CSSFileConfig | Phaser.Types.Loader.FileTypes.CSSFileConfig[], url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a GLSL file, or array of GLSL files, to the current load queue.
     * In Phaser 3 GLSL files are just plain Text files at the current moment in time.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.glsl('plasma', 'shaders/Plasma.glsl');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Shader Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Shader Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Shader Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.glsl({
     *     key: 'plasma',
     *     shaderType: 'fragment',
     *     url: 'shaders/Plasma.glsl'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.GLSLFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.glsl('plasma', 'shaders/Plasma.glsl');
     * // and later in your game ...
     * var data = this.cache.shader.get('plasma');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `FX.` and the key was `Plasma` the final key will be `FX.Plasma` and
     * this is what you would use to retrieve the text from the Shader Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "plasma"
     * and no URL is given then the Loader will set the URL to be "plasma.glsl". It will always add `.glsl` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the GLSL File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.glsl`, i.e. if `key` was "alien" then the URL will be "alien.glsl".
     * @param shaderType The type of shader. Either `fragment` for a fragment shader, or `vertex` for a vertex shader. This is ignored if you load a shader bundle. Default 'fragment'.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    glsl(key: string | Phaser.Types.Loader.FileTypes.GLSLFileConfig | Phaser.Types.Loader.FileTypes.GLSLFileConfig[], url?: string, shaderType?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an HTML file, or array of HTML files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.html('story', 'files/LoginForm.html');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global HTML Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the HTML Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the HTML Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.html({
     *     key: 'login',
     *     url: 'files/LoginForm.html'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.HTMLFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.html('login', 'files/LoginForm.html');
     * // and later in your game ...
     * var data = this.cache.html.get('login');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Story` the final key will be `LEVEL1.Story` and
     * this is what you would use to retrieve the html from the HTML Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "story"
     * and no URL is given then the Loader will set the URL to be "story.html". It will always add `.html` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the HTML File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.html`, i.e. if `key` was "alien" then the URL will be "alien.html".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    html(key: string | Phaser.Types.Loader.FileTypes.HTMLFileConfig | Phaser.Types.Loader.FileTypes.HTMLFileConfig[], url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an HTML File, or array of HTML Files, to the current load queue. When the files are loaded they
     * will be rendered to textures and stored in the Texture Manager.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.htmlTexture('instructions', 'content/intro.html', 256, 512);
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.htmlTexture({
     *     key: 'instructions',
     *     url: 'content/intro.html',
     *     width: 256,
     *     height: 512
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.HTMLTextureFileConfig` for more details.
     *
     * Once the file has finished loading you can use it as a texture for a Game Object by referencing its key:
     *
     * ```javascript
     * this.load.htmlTexture('instructions', 'content/intro.html', 256, 512);
     * // and later in your game ...
     * this.add.image(x, y, 'instructions');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.html". It will always add `.html` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * The width and height are the size of the texture to which the HTML will be rendered. It's not possible to determine these
     * automatically, so you will need to provide them, either as arguments or in the file config object.
     * When the HTML file has loaded a new SVG element is created with a size and viewbox set to the width and height given.
     * The SVG file has a body tag added to it, with the HTML file contents included. It then calls `window.Blob` on the SVG,
     * and if successful is added to the Texture Manager, otherwise it fails processing. The overall quality of the rendered
     * HTML depends on your browser, and some of them may not even support the svg / blob process used. Be aware that there are
     * limitations on what HTML can be inside an SVG. You can find out more details in this
     * [Mozilla MDN entry](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas).
     *
     * Note: The ability to load this type of file will only be available if the HTMLTextureFile File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.html`, i.e. if `key` was "alien" then the URL will be "alien.html".
     * @param width The width of the texture the HTML will be rendered to. Default 512.
     * @param height The height of the texture the HTML will be rendered to. Default 512.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    htmlTexture(key: string | Phaser.Types.Loader.FileTypes.HTMLTextureFileConfig | Phaser.Types.Loader.FileTypes.HTMLTextureFileConfig[], url?: string, width?: number, height?: number, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an Image, or array of Images, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.image('logo', 'images/phaserLogo.png');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
     * If you try to load an animated gif only the first frame will be rendered. Browsers do not natively support playback
     * of animated gifs to Canvas elements.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.image({
     *     key: 'logo',
     *     url: 'images/AtariLogo.png'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.ImageFileConfig` for more details.
     *
     * Once the file has finished loading you can use it as a texture for a Game Object by referencing its key:
     *
     * ```javascript
     * this.load.image('logo', 'images/AtariLogo.png');
     * // and later in your game ...
     * this.add.image(x, y, 'logo');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Phaser also supports the automatic loading of associated normal maps. If you have a normal map to go with this image,
     * then you can specify it by providing an array as the `url` where the second element is the normal map:
     *
     * ```javascript
     * this.load.image('logo', [ 'images/AtariLogo.png', 'images/AtariLogo-n.png' ]);
     * ```
     *
     * Or, if you are using a config object use the `normalMap` property:
     *
     * ```javascript
     * this.load.image({
     *     key: 'logo',
     *     url: 'images/AtariLogo.png',
     *     normalMap: 'images/AtariLogo-n.png'
     * });
     * ```
     *
     * The normal map file is subject to the same conditions as the image file with regard to the path, baseURL, CORs and XHR Settings.
     * Normal maps are a WebGL only feature.
     *
     * Note: The ability to load this type of file will only be available if the Image File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    image(key: string | Phaser.Types.Loader.FileTypes.ImageFileConfig | Phaser.Types.Loader.FileTypes.ImageFileConfig[], url?: string | string[], xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a JSON file, or array of JSON files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.json('wavedata', 'files/AlienWaveData.json');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global JSON Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the JSON Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the JSON Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.json({
     *     key: 'wavedata',
     *     url: 'files/AlienWaveData.json'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.JSONFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.json('wavedata', 'files/AlienWaveData.json');
     * // and later in your game ...
     * var data = this.cache.json.get('wavedata');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Waves` the final key will be `LEVEL1.Waves` and
     * this is what you would use to retrieve the text from the JSON Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "data"
     * and no URL is given then the Loader will set the URL to be "data.json". It will always add `.json` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * You can also optionally provide a `dataKey` to use. This allows you to extract only a part of the JSON and store it in the Cache,
     * rather than the whole file. For example, if your JSON data had a structure like this:
     *
     * ```json
     * {
     *     "level1": {
     *         "baddies": {
     *             "aliens": {},
     *             "boss": {}
     *         }
     *     },
     *     "level2": {},
     *     "level3": {}
     * }
     * ```
     *
     * And you only wanted to store the `boss` data in the Cache, then you could pass `level1.baddies.boss`as the `dataKey`.
     *
     * Note: The ability to load this type of file will only be available if the JSON File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json". Or, can be a fully formed JSON Object.
     * @param dataKey When the JSON file loads only this property will be stored in the Cache.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    json(key: string | Phaser.Types.Loader.FileTypes.JSONFileConfig | Phaser.Types.Loader.FileTypes.JSONFileConfig[], url?: object | string, dataKey?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Multi Texture Atlas, or array of multi atlases, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.multiatlas('level1', 'images/Level1.json');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * Phaser expects the atlas data to be provided in a JSON file as exported from the application Texture Packer,
     * version 4.6.3 or above, where you have made sure to use the Phaser 3 Export option.
     *
     * The way it works internally is that you provide a URL to the JSON file. Phaser then loads this JSON, parses it and
     * extracts which texture files it also needs to load to complete the process. If the JSON also defines normal maps,
     * Phaser will load those as well.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.multiatlas({
     *     key: 'level1',
     *     atlasURL: 'images/Level1.json'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.MultiAtlasFileConfig` for more details.
     *
     * Instead of passing a URL for the atlas JSON data you can also pass in a well formed JSON object instead.
     *
     * Once the atlas has finished loading you can use frames from it as textures for a Game Object by referencing its key:
     *
     * ```javascript
     * this.load.multiatlas('level1', 'images/Level1.json');
     * // and later in your game ...
     * this.add.image(x, y, 'level1', 'background');
     * ```
     *
     * To get a list of all available frames within an atlas please consult your Texture Atlas software.
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Multi Atlas File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param atlasURL The absolute or relative URL to load the texture atlas json data file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
     * @param path Optional path to use when loading the textures defined in the atlas data.
     * @param baseURL Optional Base URL to use when loading the textures defined in the atlas data.
     * @param atlasXhrSettings An XHR Settings configuration object for the atlas json file. Used in replacement of the Loaders default XHR Settings.
     */
    multiatlas(key: string | Phaser.Types.Loader.FileTypes.MultiAtlasFileConfig | Phaser.Types.Loader.FileTypes.MultiAtlasFileConfig[], atlasURL?: string, path?: string, baseURL?: string, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an array of Script files to the current load queue.
     *
     * The difference between this and the `ScriptFile` file type is that you give an array of scripts to this method,
     * and the scripts are then processed _exactly_ in that order. This allows you to load a bunch of scripts that
     * may have dependencies on each other without worrying about the async nature of traditional script loading.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.scripts('PostProcess', [
     *         'libs/shaders/CopyShader.js',
     *         'libs/postprocessing/EffectComposer.js',
     *         'libs/postprocessing/RenderPass.js',
     *         'libs/postprocessing/MaskPass.js',
     *         'libs/postprocessing/ShaderPass.js',
     *         'libs/postprocessing/AfterimagePass.js'
     *    ]);
     * }
     * ```
     *
     * In the code above the script files will all be loaded in parallel but only processed (i.e. invoked) in the exact
     * order given in the array.
     *
     * The files are **not** loaded right away. They are added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the files are queued
     * it means you cannot use the files immediately after calling this method, but must wait for the files to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String and not already in-use by another file in the Loader.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.scripts({
     *     key: 'PostProcess',
     *     url: [
     *         'libs/shaders/CopyShader.js',
     *         'libs/postprocessing/EffectComposer.js',
     *         'libs/postprocessing/RenderPass.js',
     *         'libs/postprocessing/MaskPass.js',
     *         'libs/postprocessing/ShaderPass.js',
     *         'libs/postprocessing/AfterimagePass.js'
     *        ]
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.MultiScriptFileConfig` for more details.
     *
     * Once all the files have finished loading they will automatically be converted into a script element
     * via `document.createElement('script')`. They will have their language set to JavaScript, `defer` set to
     * false and then the resulting element will be appended to `document.head`. Any code then in the
     * script will be executed. This is done in the exact order the files are specified in the url array.
     *
     * The URLs can be relative or absolute. If the URLs are relative the `Loader.baseURL` and `Loader.path` values will be prepended to them.
     *
     * Note: The ability to load this type of file will only be available if the MultiScript File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url An array of absolute or relative URLs to load the script files from. They are processed in the order given in the array.
     * @param extension The default file extension to use if no url is provided. Default 'js'.
     * @param xhrSettings Extra XHR Settings specifically for these files.
     */
    scripts(key: string | Phaser.Types.Loader.FileTypes.MultiScriptFileConfig | Phaser.Types.Loader.FileTypes.MultiScriptFileConfig[], url?: string[], extension?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Wavefront OBJ file, or array of OBJ files, to the current load queue.
     *
     * Note: You should ensure your 3D package has triangulated the OBJ file prior to export.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.obj('ufo', 'files/spaceship.obj');
     * }
     * ```
     *
     * You can optionally also load a Wavefront Material file as well, by providing the 3rd parameter:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.obj('ufo', 'files/spaceship.obj', 'files/spaceship.mtl');
     * }
     * ```
     *
     * If given, the material will be parsed and stored along with the obj data in the cache.
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global OBJ Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the OBJ Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the OBJ Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.obj({
     *     key: 'ufo',
     *     url: 'files/spaceship.obj',
     *     matURL: 'files/spaceship.mtl',
     *     flipUV: true
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.OBJFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.obj('ufo', 'files/spaceship.obj');
     * // and later in your game ...
     * var data = this.cache.obj.get('ufo');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Story` the final key will be `LEVEL1.Story` and
     * this is what you would use to retrieve the obj from the OBJ Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "story"
     * and no URL is given then the Loader will set the URL to be "story.obj". It will always add `.obj` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the OBJ File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param objURL The absolute or relative URL to load the obj file from. If undefined or `null` it will be set to `<key>.obj`, i.e. if `key` was "alien" then the URL will be "alien.obj".
     * @param matURL Optional absolute or relative URL to load the obj material file from.
     * @param flipUV Flip the UV coordinates stored in the model data?
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    obj(key: string | Phaser.Types.Loader.FileTypes.OBJFileConfig | Phaser.Types.Loader.FileTypes.OBJFileConfig[], objURL?: string, matURL?: string, flipUV?: boolean, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a JSON File Pack, or array of packs, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.pack('level1', 'data/Level1Files.json');
     * }
     * ```
     *
     * A File Pack is a JSON file (or object) that contains details about other files that should be added into the Loader.
     * Here is a small example:
     *
     * ```json
     * {
     *    "test1": {
     *        "files": [
     *            {
     *                "type": "image",
     *                "key": "taikodrummaster",
     *                "url": "assets/pics/taikodrummaster.jpg"
     *            },
     *            {
     *                "type": "image",
     *                "key": "sukasuka-chtholly",
     *                "url": "assets/pics/sukasuka-chtholly.png"
     *            }
     *        ]
     *    },
     *    "meta": {
     *        "generated": "1401380327373",
     *        "app": "Phaser 3 Asset Packer",
     *        "url": "https://phaser.io",
     *        "version": "1.0",
     *        "copyright": "Photon Storm Ltd. 2018"
     *    }
     * }
     * ```
     *
     * The pack can be split into sections. In the example above you'll see a section called `test1. You can tell
     * the `load.pack` method to parse only a particular section of a pack. The pack is stored in the JSON Cache,
     * so you can pass it to the Loader to process additional sections as needed in your game, or you can just load
     * them all at once without specifying anything.
     *
     * The pack file can contain an entry for any type of file that Phaser can load. The object structures exactly
     * match that of the file type configs, and all properties available within the file type configs can be used
     * in the pack file too.
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * The key must be a unique String. It is used to add the file to the global JSON Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the JSON Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the JSON Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.pack({
     *     key: 'level1',
     *     url: 'data/Level1Files.json'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.PackFileConfig` for more details.
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Waves` the final key will be `LEVEL1.Waves` and
     * this is what you would use to retrieve the text from the JSON Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "data"
     * and no URL is given then the Loader will set the URL to be "data.json". It will always add `.json` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * You can also optionally provide a `dataKey` to use. This allows you to extract only a part of the JSON and store it in the Cache,
     * rather than the whole file. For example, if your JSON data had a structure like this:
     *
     * ```json
     * {
     *     "level1": {
     *         "baddies": {
     *             "aliens": {},
     *             "boss": {}
     *         }
     *     },
     *     "level2": {},
     *     "level3": {}
     * }
     * ```
     *
     * And you only wanted to store the `boss` data in the Cache, then you could pass `level1.baddies.boss`as the `dataKey`.
     *
     * Note: The ability to load this type of file will only be available if the Pack File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
     * @param dataKey When the JSON file loads only this property will be stored in the Cache.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    pack(key: string | Phaser.Types.Loader.FileTypes.PackFileConfig | Phaser.Types.Loader.FileTypes.PackFileConfig[], url?: string, dataKey?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Plugin Script file, or array of plugin files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.plugin('modplayer', 'plugins/ModPlayer.js');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String and not already in-use by another file in the Loader.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.plugin({
     *     key: 'modplayer',
     *     url: 'plugins/ModPlayer.js'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.PluginFileConfig` for more details.
     *
     * Once the file has finished loading it will automatically be converted into a script element
     * via `document.createElement('script')`. It will have its language set to JavaScript, `defer` set to
     * false and then the resulting element will be appended to `document.head`. Any code then in the
     * script will be executed. It will then be passed to the Phaser PluginCache.register method.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.js". It will always add `.js` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Plugin File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js". Or, a plugin function.
     * @param start Automatically start the plugin after loading?
     * @param mapping If this plugin is to be injected into the Scene, this is the property key used.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    plugin(key: string | Phaser.Types.Loader.FileTypes.PluginFileConfig | Phaser.Types.Loader.FileTypes.PluginFileConfig[], url?: string | Function, start?: boolean, mapping?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an external Scene file, or array of Scene files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.sceneFile('Level1', 'src/Level1.js');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Scene Manager upon a successful load.
     *
     * For a Scene File it's vitally important that the key matches the class name in the JavaScript file.
     *
     * For example here is the source file:
     *
     * ```javascript
     * class ExternalScene extends Phaser.Scene {
     *
     *     constructor ()
     *     {
     *         super('myScene');
     *     }
     *
     * }
     * ```
     *
     * Because the class is called `ExternalScene` that is the exact same key you must use when loading it:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.sceneFile('ExternalScene', 'src/yourScene.js');
     * }
     * ```
     *
     * The key that is used within the Scene Manager can either be set to the same, or you can override it in the Scene
     * constructor, as we've done in the example above, where the Scene key was changed to `myScene`.
     *
     * The key should be unique both in terms of files being loaded and Scenes already present in the Scene Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Scene Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.sceneFile({
     *     key: 'Level1',
     *     url: 'src/Level1.js'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.SceneFileConfig` for more details.
     *
     * Once the file has finished loading it will be added to the Scene Manager.
     *
     * ```javascript
     * this.load.sceneFile('Level1', 'src/Level1.js');
     * // and later in your game ...
     * this.scene.start('Level1');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `WORLD1.` and the key was `Story` the final key will be `WORLD1.Story` and
     * this is what you would use to retrieve the text from the Scene Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "story"
     * and no URL is given then the Loader will set the URL to be "story.js". It will always add `.js` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Scene File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    sceneFile(key: string | Phaser.Types.Loader.FileTypes.SceneFileConfig | Phaser.Types.Loader.FileTypes.SceneFileConfig[], url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Scene Plugin Script file, or array of plugin files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.scenePlugin('ModPlayer', 'plugins/ModPlayer.js', 'modPlayer', 'mods');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String and not already in-use by another file in the Loader.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.scenePlugin({
     *     key: 'modplayer',
     *     url: 'plugins/ModPlayer.js'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.ScenePluginFileConfig` for more details.
     *
     * Once the file has finished loading it will automatically be converted into a script element
     * via `document.createElement('script')`. It will have its language set to JavaScript, `defer` set to
     * false and then the resulting element will be appended to `document.head`. Any code then in the
     * script will be executed. It will then be passed to the Phaser PluginCache.register method.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.js". It will always add `.js` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Script File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js". Or, set to a plugin function.
     * @param systemKey If this plugin is to be added to Scene.Systems, this is the property key for it.
     * @param sceneKey If this plugin is to be added to the Scene, this is the property key for it.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    scenePlugin(key: string | Phaser.Types.Loader.FileTypes.ScenePluginFileConfig | Phaser.Types.Loader.FileTypes.ScenePluginFileConfig[], url?: string | Function, systemKey?: string, sceneKey?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Script file, or array of Script files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.script('aliens', 'lib/aliens.js');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String and not already in-use by another file in the Loader.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.script({
     *     key: 'aliens',
     *     url: 'lib/aliens.js'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.ScriptFileConfig` for more details.
     *
     * Once the file has finished loading it will automatically be converted into a script element
     * via `document.createElement('script')`. It will have its language set to JavaScript, `defer` set to
     * false and then the resulting element will be appended to `document.head`. Any code then in the
     * script will be executed.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.js". It will always add `.js` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Script File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.js`, i.e. if `key` was "alien" then the URL will be "alien.js".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    script(key: string | Phaser.Types.Loader.FileTypes.ScriptFileConfig | Phaser.Types.Loader.FileTypes.ScriptFileConfig[], url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Sprite Sheet Image, or array of Sprite Sheet Images, to the current load queue.
     *
     * The term 'Sprite Sheet' in Phaser means a fixed-size sheet. Where every frame in the sheet is the exact same size,
     * and you reference those frames using numbers, not frame names. This is not the same thing as a Texture Atlas, where
     * the frames are packed in a way where they take up the least amount of space, and are referenced by their names,
     * not numbers. Some articles and software use the term 'Sprite Sheet' to mean Texture Atlas, so please be aware of
     * what sort of file you're actually trying to load.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.spritesheet('bot', 'images/robot.png', { frameWidth: 32, frameHeight: 38 });
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
     * If you try to load an animated gif only the first frame will be rendered. Browsers do not natively support playback
     * of animated gifs to Canvas elements.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.spritesheet({
     *     key: 'bot',
     *     url: 'images/robot.png',
     *     frameConfig: {
     *         frameWidth: 32,
     *         frameHeight: 38,
     *         startFrame: 0,
     *         endFrame: 8
     *     }
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig` for more details.
     *
     * Once the file has finished loading you can use it as a texture for a Game Object by referencing its key:
     *
     * ```javascript
     * this.load.spritesheet('bot', 'images/robot.png', { frameWidth: 32, frameHeight: 38 });
     * // and later in your game ...
     * this.add.image(x, y, 'bot', 0);
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `PLAYER.` and the key was `Running` the final key will be `PLAYER.Running` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Phaser also supports the automatic loading of associated normal maps. If you have a normal map to go with this image,
     * then you can specify it by providing an array as the `url` where the second element is the normal map:
     *
     * ```javascript
     * this.load.spritesheet('logo', [ 'images/AtariLogo.png', 'images/AtariLogo-n.png' ], { frameWidth: 256, frameHeight: 80 });
     * ```
     *
     * Or, if you are using a config object use the `normalMap` property:
     *
     * ```javascript
     * this.load.spritesheet({
     *     key: 'logo',
     *     url: 'images/AtariLogo.png',
     *     normalMap: 'images/AtariLogo-n.png',
     *     frameConfig: {
     *         frameWidth: 256,
     *         frameHeight: 80
     *     }
     * });
     * ```
     *
     * The normal map file is subject to the same conditions as the image file with regard to the path, baseURL, CORs and XHR Settings.
     * Normal maps are a WebGL only feature.
     *
     * Note: The ability to load this type of file will only be available if the Sprite Sheet File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
     * @param frameConfig The frame configuration object. At a minimum it should have a `frameWidth` property.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    spritesheet(key: string | Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig | Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig[], url?: string, frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an SVG File, or array of SVG Files, to the current load queue. When the files are loaded they
     * will be rendered to bitmap textures and stored in the Texture Manager.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.svg('morty', 'images/Morty.svg');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.svg({
     *     key: 'morty',
     *     url: 'images/Morty.svg'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.SVGFileConfig` for more details.
     *
     * Once the file has finished loading you can use it as a texture for a Game Object by referencing its key:
     *
     * ```javascript
     * this.load.svg('morty', 'images/Morty.svg');
     * // and later in your game ...
     * this.add.image(x, y, 'morty');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.html". It will always add `.html` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * You can optionally pass an SVG Resize Configuration object when you load an SVG file. By default the SVG will be rendered to a texture
     * at the same size defined in the SVG file attributes. However, this isn't always desirable. You may wish to resize the SVG (either down
     * or up) to improve texture clarity, or reduce texture memory consumption. You can either specify an exact width and height to resize
     * the SVG to:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.svg('morty', 'images/Morty.svg', { width: 300, height: 600 });
     * }
     * ```
     *
     * Or when using a configuration object:
     *
     * ```javascript
     * this.load.svg({
     *     key: 'morty',
     *     url: 'images/Morty.svg',
     *     svgConfig: {
     *         width: 300,
     *         height: 600
     *     }
     * });
     * ```
     *
     * Alternatively, you can just provide a scale factor instead:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.svg('morty', 'images/Morty.svg', { scale: 2.5 });
     * }
     * ```
     *
     * Or when using a configuration object:
     *
     * ```javascript
     * this.load.svg({
     *     key: 'morty',
     *     url: 'images/Morty.svg',
     *     svgConfig: {
     *         scale: 2.5
     *     }
     * });
     * ```
     *
     * If scale, width and height values are all given, the scale has priority and the width and height values are ignored.
     *
     * Note: The ability to load this type of file will only be available if the SVG File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.svg`, i.e. if `key` was "alien" then the URL will be "alien.svg".
     * @param svgConfig The svg size configuration object.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    svg(key: string | Phaser.Types.Loader.FileTypes.SVGFileConfig | Phaser.Types.Loader.FileTypes.SVGFileConfig[], url?: string, svgConfig?: Phaser.Types.Loader.FileTypes.SVGSizeConfig, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Text file, or array of Text files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.text('story', 'files/IntroStory.txt');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Text Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Text Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Text Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.text({
     *     key: 'story',
     *     url: 'files/IntroStory.txt'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.TextFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.text('story', 'files/IntroStory.txt');
     * // and later in your game ...
     * var data = this.cache.text.get('story');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Story` the final key will be `LEVEL1.Story` and
     * this is what you would use to retrieve the text from the Text Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "story"
     * and no URL is given then the Loader will set the URL to be "story.txt". It will always add `.txt` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Text File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    text(key: string | Phaser.Types.Loader.FileTypes.TextFileConfig | Phaser.Types.Loader.FileTypes.TextFileConfig[], url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a CSV Tilemap file, or array of CSV files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.tilemapCSV('level1', 'maps/Level1.csv');
     * }
     * ```
     *
     * Tilemap CSV data can be created in a text editor, or a 3rd party app that exports as CSV.
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Tilemap Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Tilemap Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Text Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.tilemapCSV({
     *     key: 'level1',
     *     url: 'maps/Level1.csv'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.TilemapCSVFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.tilemapCSV('level1', 'maps/Level1.csv');
     * // and later in your game ...
     * var map = this.make.tilemap({ key: 'level1' });
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Story` the final key will be `LEVEL1.Story` and
     * this is what you would use to retrieve the text from the Tilemap Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "level"
     * and no URL is given then the Loader will set the URL to be "level.csv". It will always add `.csv` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Tilemap CSV File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.csv`, i.e. if `key` was "alien" then the URL will be "alien.csv".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    tilemapCSV(key: string | Phaser.Types.Loader.FileTypes.TilemapCSVFileConfig | Phaser.Types.Loader.FileTypes.TilemapCSVFileConfig[], url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an Impact.js Tilemap file, or array of map files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.tilemapImpact('level1', 'maps/Level1.json');
     * }
     * ```
     *
     * Impact Tilemap data is created the Impact.js Map Editor called Weltmeister.
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Tilemap Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Tilemap Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Text Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.tilemapImpact({
     *     key: 'level1',
     *     url: 'maps/Level1.json'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.TilemapImpactFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.tilemapImpact('level1', 'maps/Level1.json');
     * // and later in your game ...
     * var map = this.make.tilemap({ key: 'level1' });
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Story` the final key will be `LEVEL1.Story` and
     * this is what you would use to retrieve the text from the Tilemap Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "level"
     * and no URL is given then the Loader will set the URL to be "level.json". It will always add `.json` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Tilemap Impact File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    tilemapImpact(key: string | Phaser.Types.Loader.FileTypes.TilemapImpactFileConfig | Phaser.Types.Loader.FileTypes.TilemapImpactFileConfig[], url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Tiled JSON Tilemap file, or array of map files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.tilemapTiledJSON('level1', 'maps/Level1.json');
     * }
     * ```
     *
     * The Tilemap data is created using the Tiled Map Editor and selecting JSON as the export format.
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Tilemap Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Tilemap Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Text Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.tilemapTiledJSON({
     *     key: 'level1',
     *     url: 'maps/Level1.json'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.TilemapJSONFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.tilemapTiledJSON('level1', 'maps/Level1.json');
     * // and later in your game ...
     * var map = this.make.tilemap({ key: 'level1' });
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Story` the final key will be `LEVEL1.Story` and
     * this is what you would use to retrieve the text from the Tilemap Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "level"
     * and no URL is given then the Loader will set the URL to be "level.json". It will always add `.json` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the Tilemap JSON File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.json`, i.e. if `key` was "alien" then the URL will be "alien.json". Or, a well formed JSON object.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    tilemapTiledJSON(key: string | Phaser.Types.Loader.FileTypes.TilemapJSONFileConfig | Phaser.Types.Loader.FileTypes.TilemapJSONFileConfig[], url?: object | string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Unity YAML based Texture Atlas, or array of atlases, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.unityAtlas('mainmenu', 'images/MainMenu.png', 'images/MainMenu.txt');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * If you call this from outside of `preload` then you are responsible for starting the Loader afterwards and monitoring
     * its events to know when it's safe to use the asset. Please see the Phaser.Loader.LoaderPlugin class for more details.
     *
     * Phaser expects the atlas data to be provided in a YAML formatted text file as exported from Unity.
     *
     * Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
     *
     * The key must be a unique String. It is used to add the file to the global Texture Manager upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Texture Manager.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Texture Manager first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.unityAtlas({
     *     key: 'mainmenu',
     *     textureURL: 'images/MainMenu.png',
     *     atlasURL: 'images/MainMenu.txt'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.UnityAtlasFileConfig` for more details.
     *
     * Once the atlas has finished loading you can use frames from it as textures for a Game Object by referencing its key:
     *
     * ```javascript
     * this.load.unityAtlas('mainmenu', 'images/MainMenu.png', 'images/MainMenu.json');
     * // and later in your game ...
     * this.add.image(x, y, 'mainmenu', 'background');
     * ```
     *
     * To get a list of all available frames within an atlas please consult your Texture Atlas software.
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `MENU.` and the key was `Background` the final key will be `MENU.Background` and
     * this is what you would use to retrieve the image from the Texture Manager.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "alien"
     * and no URL is given then the Loader will set the URL to be "alien.png". It will always add `.png` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Phaser also supports the automatic loading of associated normal maps. If you have a normal map to go with this image,
     * then you can specify it by providing an array as the `url` where the second element is the normal map:
     *
     * ```javascript
     * this.load.unityAtlas('mainmenu', [ 'images/MainMenu.png', 'images/MainMenu-n.png' ], 'images/MainMenu.txt');
     * ```
     *
     * Or, if you are using a config object use the `normalMap` property:
     *
     * ```javascript
     * this.load.unityAtlas({
     *     key: 'mainmenu',
     *     textureURL: 'images/MainMenu.png',
     *     normalMap: 'images/MainMenu-n.png',
     *     atlasURL: 'images/MainMenu.txt'
     * });
     * ```
     *
     * The normal map file is subject to the same conditions as the image file with regard to the path, baseURL, CORs and XHR Settings.
     * Normal maps are a WebGL only feature.
     *
     * Note: The ability to load this type of file will only be available if the Unity Atlas File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param textureURL The absolute or relative URL to load the texture image file from. If undefined or `null` it will be set to `<key>.png`, i.e. if `key` was "alien" then the URL will be "alien.png".
     * @param atlasURL The absolute or relative URL to load the texture atlas data file from. If undefined or `null` it will be set to `<key>.txt`, i.e. if `key` was "alien" then the URL will be "alien.txt".
     * @param textureXhrSettings An XHR Settings configuration object for the atlas image file. Used in replacement of the Loaders default XHR Settings.
     * @param atlasXhrSettings An XHR Settings configuration object for the atlas data file. Used in replacement of the Loaders default XHR Settings.
     */
    unityAtlas(key: string | Phaser.Types.Loader.FileTypes.UnityAtlasFileConfig | Phaser.Types.Loader.FileTypes.UnityAtlasFileConfig[], textureURL?: string | string[], atlasURL?: string, textureXhrSettings?: Phaser.Types.Loader.XHRSettingsObject, atlasXhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds a Video file, or array of video files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.video('intro', [ 'video/level1.mp4', 'video/level1.webm', 'video/level1.mov' ]);
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global Video Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the Video Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the Video Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.video({
     *     key: 'intro',
     *     url: [ 'video/level1.mp4', 'video/level1.webm', 'video/level1.mov' ],
     *     asBlob: false,
     *     noAudio: true
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.VideoFileConfig` for more details.
     *
     * The URLs can be relative or absolute. If the URLs are relative the `Loader.baseURL` and `Loader.path` values will be prepended to them.
     *
     * Due to different browsers supporting different video file types you should usually provide your video files in a variety of formats.
     * mp4, mov and webm are the most common. If you provide an array of URLs then the Loader will determine which _one_ file to load based on
     * browser support, starting with the first in the array and progressing to the end.
     *
     * Unlike most asset-types, videos do not _need_ to be preloaded. You can create a Video Game Object and then call its `loadURL` method,
     * to load a video at run-time, rather than in advance.
     *
     * Note: The ability to load this type of file will only be available if the Video File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param urls The absolute or relative URL to load the video files from.
     * @param loadEvent The load event to listen for when _not_ loading as a blob. Either `loadeddata`, `canplay` or `canplaythrough`. Default 'loadeddata'.
     * @param asBlob Load the video as a data blob, or stream it via the Video element? Default false.
     * @param noAudio Does the video have an audio track? If not you can enable auto-playing on it. Default false.
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    video(key: string | Phaser.Types.Loader.FileTypes.VideoFileConfig | Phaser.Types.Loader.FileTypes.VideoFileConfig[], urls?: string | string[], loadEvent?: string, asBlob?: boolean, noAudio?: boolean, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * Adds an XML file, or array of XML files, to the current load queue.
     *
     * You can call this method from within your Scene's `preload`, along with any other files you wish to load:
     *
     * ```javascript
     * function preload ()
     * {
     *     this.load.xml('wavedata', 'files/AlienWaveData.xml');
     * }
     * ```
     *
     * The file is **not** loaded right away. It is added to a queue ready to be loaded either when the loader starts,
     * or if it's already running, when the next free load slot becomes available. This happens automatically if you
     * are calling this from within the Scene's `preload` method, or a related callback. Because the file is queued
     * it means you cannot use the file immediately after calling this method, but must wait for the file to complete.
     * The typical flow for a Phaser Scene is that you load assets in the Scene's `preload` method and then when the
     * Scene's `create` method is called you are guaranteed that all of those assets are ready for use and have been
     * loaded.
     *
     * The key must be a unique String. It is used to add the file to the global XML Cache upon a successful load.
     * The key should be unique both in terms of files being loaded and files already present in the XML Cache.
     * Loading a file using a key that is already taken will result in a warning. If you wish to replace an existing file
     * then remove it from the XML Cache first, before loading a new one.
     *
     * Instead of passing arguments you can pass a configuration object, such as:
     *
     * ```javascript
     * this.load.xml({
     *     key: 'wavedata',
     *     url: 'files/AlienWaveData.xml'
     * });
     * ```
     *
     * See the documentation for `Phaser.Types.Loader.FileTypes.XMLFileConfig` for more details.
     *
     * Once the file has finished loading you can access it from its Cache using its key:
     *
     * ```javascript
     * this.load.xml('wavedata', 'files/AlienWaveData.xml');
     * // and later in your game ...
     * var data = this.cache.xml.get('wavedata');
     * ```
     *
     * If you have specified a prefix in the loader, via `Loader.setPrefix` then this value will be prepended to this files
     * key. For example, if the prefix was `LEVEL1.` and the key was `Waves` the final key will be `LEVEL1.Waves` and
     * this is what you would use to retrieve the text from the XML Cache.
     *
     * The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
     *
     * If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is "data"
     * and no URL is given then the Loader will set the URL to be "data.xml". It will always add `.xml` as the extension, although
     * this can be overridden if using an object instead of method arguments. If you do not desire this action then provide a URL.
     *
     * Note: The ability to load this type of file will only be available if the XML File type has been built into Phaser.
     * It is available in the default build but can be excluded from custom builds.
     * @param key The key to use for this file, or a file configuration object, or array of them.
     * @param url The absolute or relative URL to load this file from. If undefined or `null` it will be set to `<key>.xml`, i.e. if `key` was "alien" then the URL will be "alien.xml".
     * @param xhrSettings An XHR Settings configuration object. Used in replacement of the Loaders default XHR Settings.
     */
    xml(key: string | Phaser.Types.Loader.FileTypes.XMLFileConfig | Phaser.Types.Loader.FileTypes.XMLFileConfig[], url?: string, xhrSettings?: Phaser.Types.Loader.XHRSettingsObject): this;

    /**
     * The Scene which owns this Loader instance.
     */
    scene: Phaser.Scene;

    /**
     * A reference to the Scene Systems.
     */
    systems: Phaser.Scenes.Systems;

    /**
     * A reference to the global Cache Manager.
     */
    cacheManager: Phaser.Cache.CacheManager;

    /**
     * A reference to the global Texture Manager.
     */
    textureManager: Phaser.Textures.TextureManager;

    /**
     * A reference to the global Scene Manager.
     */
    protected sceneManager: Phaser.Scenes.SceneManager;

    /**
     * An optional prefix that is automatically prepended to the start of every file key.
     * If prefix was `MENU.` and you load an image with the key 'Background' the resulting key would be `MENU.Background`.
     * You can set this directly, or call `Loader.setPrefix()`. It will then affect every file added to the Loader
     * from that point on. It does _not_ change any file already in the load queue.
     */
    prefix: string;

    /**
     * The value of `path`, if set, is placed before any _relative_ file path given. For example:
     *
     * ```javascript
     * this.load.path = "images/sprites/";
     * this.load.image("ball", "ball.png");
     * this.load.image("tree", "level1/oaktree.png");
     * this.load.image("boom", "http://server.com/explode.png");
     * ```
     *
     * Would load the `ball` file from `images/sprites/ball.png` and the tree from
     * `images/sprites/level1/oaktree.png` but the file `boom` would load from the URL
     * given as it's an absolute URL.
     *
     * Please note that the path is added before the filename but *after* the baseURL (if set.)
     *
     * If you set this property directly then it _must_ end with a "/". Alternatively, call `setPath()` and it'll do it for you.
     */
    path: string;

    /**
     * If you want to append a URL before the path of any asset you can set this here.
     *
     * Useful if allowing the asset base url to be configured outside of the game code.
     *
     * If you set this property directly then it _must_ end with a "/". Alternatively, call `setBaseURL()` and it'll do it for you.
     */
    baseURL: string;

    /**
     * The number of concurrent / parallel resources to try and fetch at once.
     *
     * Old browsers limit 6 requests per domain; modern ones, especially those with HTTP/2 don't limit it at all.
     *
     * The default is 32 but you can change this in your Game Config, or by changing this property before the Loader starts.
     */
    maxParallelDownloads: number;

    /**
     * xhr specific global settings (can be overridden on a per-file basis)
     */
    xhr: Phaser.Types.Loader.XHRSettingsObject;

    /**
     * The crossOrigin value applied to loaded images. Very often this needs to be set to 'anonymous'.
     */
    crossOrigin: string;

    /**
     * The total number of files to load. It may not always be accurate because you may add to the Loader during the process
     * of loading, especially if you load a Pack File. Therefore this value can change, but in most cases remains static.
     */
    totalToLoad: number;

    /**
     * The progress of the current load queue, as a float value between 0 and 1.
     * This is updated automatically as files complete loading.
     * Note that it is possible for this value to go down again if you add content to the current load queue during a load.
     */
    progress: number;

    /**
     * Files are placed in this Set when they're added to the Loader via `addFile`.
     *
     * They are moved to the `inflight` Set when they start loading, and assuming a successful
     * load, to the `queue` Set for further processing.
     *
     * By the end of the load process this Set will be empty.
     */
    list: Phaser.Structs.Set<Phaser.Loader.File>;

    /**
     * Files are stored in this Set while they're in the process of being loaded.
     *
     * Upon a successful load they are moved to the `queue` Set.
     *
     * By the end of the load process this Set will be empty.
     */
    inflight: Phaser.Structs.Set<Phaser.Loader.File>;

    /**
     * Files are stored in this Set while they're being processed.
     *
     * If the process is successful they are moved to their final destination, which could be
     * a Cache or the Texture Manager.
     *
     * At the end of the load process this Set will be empty.
     */
    queue: Phaser.Structs.Set<Phaser.Loader.File>;

    /**
     * The total number of files that failed to load during the most recent load.
     * This value is reset when you call `Loader.start`.
     */
    totalFailed: number;

    /**
     * The total number of files that successfully loaded during the most recent load.
     * This value is reset when you call `Loader.start`.
     */
    totalComplete: number;

    /**
     * The current state of the Loader.
     */
    readonly state: number;

    /**
     * If you want to append a URL before the path of any asset you can set this here.
     *
     * Useful if allowing the asset base url to be configured outside of the game code.
     *
     * Once a base URL is set it will affect every file loaded by the Loader from that point on. It does _not_ change any
     * file _already_ being loaded. To reset it, call this method with no arguments.
     * @param url The URL to use. Leave empty to reset.
     */
    setBaseURL(url?: string): this;

    /**
     * The value of `path`, if set, is placed before any _relative_ file path given. For example:
     *
     * ```javascript
     * this.load.setPath("images/sprites/");
     * this.load.image("ball", "ball.png");
     * this.load.image("tree", "level1/oaktree.png");
     * this.load.image("boom", "http://server.com/explode.png");
     * ```
     *
     * Would load the `ball` file from `images/sprites/ball.png` and the tree from
     * `images/sprites/level1/oaktree.png` but the file `boom` would load from the URL
     * given as it's an absolute URL.
     *
     * Please note that the path is added before the filename but *after* the baseURL (if set.)
     *
     * Once a path is set it will then affect every file added to the Loader from that point on. It does _not_ change any
     * file _already_ in the load queue. To reset it, call this method with no arguments.
     * @param path The path to use. Leave empty to reset.
     */
    setPath(path?: string): this;

    /**
     * An optional prefix that is automatically prepended to the start of every file key.
     *
     * If prefix was `MENU.` and you load an image with the key 'Background' the resulting key would be `MENU.Background`.
     *
     * Once a prefix is set it will then affect every file added to the Loader from that point on. It does _not_ change any
     * file _already_ in the load queue. To reset it, call this method with no arguments.
     * @param prefix The prefix to use. Leave empty to reset.
     */
    setPrefix(prefix?: string): this;

    /**
     * Sets the Cross Origin Resource Sharing value used when loading files.
     *
     * Files can override this value on a per-file basis by specifying an alternative `crossOrigin` value in their file config.
     *
     * Once CORs is set it will then affect every file loaded by the Loader from that point on, as long as they don't have
     * their own CORs setting. To reset it, call this method with no arguments.
     *
     * For more details about CORs see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
     * @param crossOrigin The value to use for the `crossOrigin` property in the load request.
     */
    setCORS(crossOrigin?: string): this;

    /**
     * Adds a file, or array of files, into the load queue.
     *
     * The file must be an instance of `Phaser.Loader.File`, or a class that extends it. The Loader will check that the key
     * used by the file won't conflict with any other key either in the loader, the inflight queue or the target cache.
     * If allowed it will then add the file into the pending list, read for the load to start. Or, if the load has already
     * started, ready for the next batch of files to be pulled from the list to the inflight queue.
     *
     * You should not normally call this method directly, but rather use one of the Loader methods like `image` or `atlas`,
     * however you can call this as long as the file given to it is well formed.
     * @param file The file, or array of files, to be added to the load queue.
     */
    addFile(file: Phaser.Loader.File | Phaser.Loader.File[]): void;

    /**
     * Checks the key and type of the given file to see if it will conflict with anything already
     * in a Cache, the Texture Manager, or the list or inflight queues.
     * @param file The file to check the key of.
     */
    keyExists(file: Phaser.Loader.File): boolean;

    /**
     * Takes a well formed, fully parsed pack file object and adds its entries into the load queue. Usually you do not call
     * this method directly, but instead use `Loader.pack` and supply a path to a JSON file that holds the
     * pack data. However, if you've got the data prepared you can pass it to this method.
     *
     * You can also provide an optional key. If you do then it will only add the entries from that part of the pack into
     * to the load queue. If not specified it will add all entries it finds. For more details about the pack file format
     * see the `LoaderPlugin.pack` method.
     * @param pack The Pack File data to be parsed and each entry of it to added to the load queue.
     * @param packKey An optional key to use from the pack file data.
     */
    addPack(pack: any, packKey?: string): boolean;

    /**
     * Is the Loader actively loading, or processing loaded files?
     */
    isLoading(): boolean;

    /**
     * Is the Loader ready to start a new load?
     */
    isReady(): boolean;

    /**
     * Starts the Loader running. This will reset the progress and totals and then emit a `start` event.
     * If there is nothing in the queue the Loader will immediately complete, otherwise it will start
     * loading the first batch of files.
     *
     * The Loader is started automatically if the queue is populated within your Scenes `preload` method.
     *
     * However, outside of this, you need to call this method to start it.
     *
     * If the Loader is already running this method will simply return.
     */
    start(): void;

    /**
     * Called automatically during the load process.
     * It updates the `progress` value and then emits a progress event, which you can use to
     * display a loading bar in your game.
     */
    updateProgress(): void;

    /**
     * Called automatically during the load process.
     */
    update(): void;

    /**
     * An internal method called automatically by the XHRLoader belong to a File.
     *
     * This method will remove the given file from the inflight Set and update the load progress.
     * If the file was successful its `onProcess` method is called, otherwise it is added to the delete queue.
     * @param file The File that just finished loading, or errored during load.
     * @param success `true` if the file loaded successfully, otherwise `false`.
     */
    nextFile(file: Phaser.Loader.File, success: boolean): void;

    /**
     * An internal method that is called automatically by the File when it has finished processing.
     *
     * If the process was successful, and the File isn't part of a MultiFile, its `addToCache` method is called.
     *
     * It this then removed from the queue. If there are no more files to load `loadComplete` is called.
     * @param file The file that has finished processing.
     */
    fileProcessComplete(file: Phaser.Loader.File): void;

    /**
     * Called at the end when the load queue is exhausted and all files have either loaded or errored.
     * By this point every loaded file will now be in its associated cache and ready for use.
     *
     * Also clears down the Sets, puts progress to 1 and clears the deletion queue.
     */
    loadComplete(): void;

    /**
     * Adds a File into the pending-deletion queue.
     * @param file The File to be queued for deletion when the Loader completes.
     */
    flagForRemoval(file: Phaser.Loader.File): void;

    /**
     * Converts the given JSON data into a file that the browser then prompts you to download so you can save it locally.
     *
     * The data must be well formed JSON and ready-parsed, not a JavaScript object.
     * @param data The JSON data, ready parsed.
     * @param filename The name to save the JSON file as. Default file.json.
     */
    saveJSON(data: any, filename?: string): this;

    /**
     * Causes the browser to save the given data as a file to its default Downloads folder.
     *
     * Creates a DOM level anchor link, assigns it as being a `download` anchor, sets the href
     * to be an ObjectURL based on the given data, and then invokes a click event.
     * @param data The data to be saved. Will be passed through URL.createObjectURL.
     * @param filename The filename to save the file as. Default file.json.
     * @param filetype The file type to use when saving the file. Defaults to JSON. Default application/json.
     */
    save(data: any, filename?: string, filetype?: string): this;

    /**
     * Resets the Loader.
     *
     * This will clear all lists and reset the base URL, path and prefix.
     *
     * Warning: If the Loader is currently downloading files, or has files in its queue, they will be aborted.
     */
    reset(): void;

  }

  /**
   * Takes two XHRSettings Objects and creates a new XHRSettings object from them.
   *
   * The new object is seeded by the values given in the global settings, but any setting in
   * the local object overrides the global ones.
   * @param global The global XHRSettings object.
   * @param local The local XHRSettings object.
   */
  function MergeXHRSettings(global: Phaser.Types.Loader.XHRSettingsObject, local: Phaser.Types.Loader.XHRSettingsObject): Phaser.Types.Loader.XHRSettingsObject;

  /**
   * A MultiFile is a special kind of parent that contains two, or more, Files as children and looks after
   * the loading and processing of them all. It is commonly extended and used as a base class for file types such as AtlasJSON or BitmapFont.
   *
   * You shouldn't create an instance of a MultiFile directly, but should extend it with your own class, setting a custom type and processing methods.
   */
  class MultiFile {
    /**
     *
     * @param loader The Loader that is going to load this File.
     * @param type The file type string for sorting within the Loader.
     * @param key The key of the file within the loader.
     * @param files An array of Files that make-up this MultiFile.
     */
    constructor(loader: Phaser.Loader.LoaderPlugin, type: string, key: string, files: Phaser.Loader.File[]);

    /**
     * A reference to the Loader that is going to load this file.
     */
    loader: Phaser.Loader.LoaderPlugin;

    /**
     * The file type string for sorting within the Loader.
     */
    type: string;

    /**
     * Unique cache key (unique within its file type)
     */
    key: string;

    /**
     * Array of files that make up this MultiFile.
     */
    files: Phaser.Loader.File[];

    /**
     * The completion status of this MultiFile.
     */
    complete: boolean;

    /**
     * The number of files to load.
     */
    pending: number;

    /**
     * The number of files that failed to load.
     */
    failed: number;

    /**
     * A storage container for transient data that the loading files need.
     */
    config: any;

    /**
     * A reference to the Loaders baseURL at the time this MultiFile was created.
     * Used to populate child-files.
     */
    baseURL: string;

    /**
     * A reference to the Loaders path at the time this MultiFile was created.
     * Used to populate child-files.
     */
    path: string;

    /**
     * A reference to the Loaders prefix at the time this MultiFile was created.
     * Used to populate child-files.
     */
    prefix: string;

    /**
     * Checks if this MultiFile is ready to process its children or not.
     */
    isReadyToProcess(): boolean;

    /**
     * Adds another child to this MultiFile, increases the pending count and resets the completion status.
     * @param files The File to add to this MultiFile.
     */
    addToMultiFile(files: Phaser.Loader.File): Phaser.Loader.MultiFile;

    /**
     * Called by each File when it finishes loading.
     * @param file The File that has completed processing.
     */
    onFileComplete(file: Phaser.Loader.File): void;

    /**
     * Called by each File that fails to load.
     * @param file The File that has failed to load.
     */
    onFileFailed(file: Phaser.Loader.File): void;

  }

  /**
   * Creates a new XMLHttpRequest (xhr) object based on the given File and XHRSettings
   * and starts the download of it. It uses the Files own XHRSettings and merges them
   * with the global XHRSettings object to set the xhr values before download.
   * @param file The File to download.
   * @param globalXHRSettings The global XHRSettings object.
   */
  function XHRLoader(file: Phaser.Loader.File, globalXHRSettings: Phaser.Types.Loader.XHRSettingsObject): XMLHttpRequest;

  /**
   * Creates an XHRSettings Object with default values.
   * @param responseType The responseType, such as 'text'. Default ''.
   * @param async Should the XHR request use async or not? Default true.
   * @param user Optional username for the XHR request. Default ''.
   * @param password Optional password for the XHR request. Default ''.
   * @param timeout Optional XHR timeout value. Default 0.
   * @param withCredentials Optional XHR withCredentials value. Default false.
   */
  function XHRSettings(responseType?: XMLHttpRequestResponseType, async?: boolean, user?: string, password?: string, timeout?: number, withCredentials?: boolean): Phaser.Types.Loader.XHRSettingsObject;

}