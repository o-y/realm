namespace Phaser.Cache {
  /**
   * The BaseCache is a base Cache class that can be used for storing references to any kind of data.
   *
   * Data can be added, retrieved and removed based on the given keys.
   *
   * Keys are string-based.
   */
  class BaseCache {
    /**
     * The Map in which the cache objects are stored.
     *
     * You can query the Map directly or use the BaseCache methods.
     */
    entries: Phaser.Structs.Map<String, any>;

    /**
     * An instance of EventEmitter used by the cache to emit related events.
     */
    events: Phaser.Events.EventEmitter;

    /**
     * Adds an item to this cache. The item is referenced by a unique string, which you are responsible
     * for setting and keeping track of. The item can only be retrieved by using this string.
     * @param key The unique key by which the data added to the cache will be referenced.
     * @param data The data to be stored in the cache.
     */
    add(key: string, data: any): this;

    /**
     * Checks if this cache contains an item matching the given key.
     * This performs the same action as `BaseCache.exists`.
     * @param key The unique key of the item to be checked in this cache.
     */
    has(key: string): boolean;

    /**
     * Checks if this cache contains an item matching the given key.
     * This performs the same action as `BaseCache.has` and is called directly by the Loader.
     * @param key The unique key of the item to be checked in this cache.
     */
    exists(key: string): boolean;

    /**
     * Gets an item from this cache based on the given key.
     * @param key The unique key of the item to be retrieved from this cache.
     */
    get(key: string): any;

    /**
     * Removes and item from this cache based on the given key.
     *
     * If an entry matching the key is found it is removed from the cache and a `remove` event emitted.
     * No additional checks are done on the item removed. If other systems or parts of your game code
     * are relying on this item, it is up to you to sever those relationships prior to removing the item.
     * @param key The unique key of the item to remove from the cache.
     */
    remove(key: string): this;

    /**
     * Returns all keys in use in this cache.
     */
    getKeys(): string[];

    /**
     * Destroys this cache and all items within it.
     */
    destroy(): void;

  }

  /**
   * The Cache Manager is the global cache owned and maintained by the Game instance.
   *
   * Various systems, such as the file Loader, rely on this cache in order to store the files
   * it has loaded. The manager itself doesn't store any files, but instead owns multiple BaseCache
   * instances, one per type of file. You can also add your own custom caches.
   */
  class CacheManager {
    /**
     *
     * @param game A reference to the Phaser.Game instance that owns this CacheManager.
     */
    constructor(game: Phaser.Game);

    /**
     * A reference to the Phaser.Game instance that owns this CacheManager.
     */
    protected game: Phaser.Game;

    /**
     * A Cache storing all binary files, typically added via the Loader.
     */
    binary: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all bitmap font data files, typically added via the Loader.
     * Only the font data is stored in this cache, the textures are part of the Texture Manager.
     */
    bitmapFont: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all JSON data files, typically added via the Loader.
     */
    json: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all physics data files, typically added via the Loader.
     */
    physics: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all shader source files, typically added via the Loader.
     */
    shader: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all non-streaming audio files, typically added via the Loader.
     */
    audio: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all non-streaming video files, typically added via the Loader.
     */
    video: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all text files, typically added via the Loader.
     */
    text: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all html files, typically added via the Loader.
     */
    html: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all WaveFront OBJ files, typically added via the Loader.
     */
    obj: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all tilemap data files, typically added via the Loader.
     * Only the data is stored in this cache, the textures are part of the Texture Manager.
     */
    tilemap: Phaser.Cache.BaseCache;

    /**
     * A Cache storing all xml data files, typically added via the Loader.
     */
    xml: Phaser.Cache.BaseCache;

    /**
     * An object that contains your own custom BaseCache entries.
     * Add to this via the `addCustom` method.
     */
    custom: {[key: string]: Phaser.Cache.BaseCache};

    /**
     * Add your own custom Cache for storing your own files.
     * The cache will be available under `Cache.custom.key`.
     * The cache will only be created if the key is not already in use.
     * @param key The unique key of your custom cache.
     */
    addCustom(key: string): Phaser.Cache.BaseCache;

    /**
     * Removes all entries from all BaseCaches and destroys all custom caches.
     */
    destroy(): void;

  }

  namespace Events {
    /**
     * The Cache Add Event.
     *
     * This event is dispatched by any Cache that extends the BaseCache each time a new object is added to it.
     */
    const ADD: any;

    /**
     * The Cache Remove Event.
     *
     * This event is dispatched by any Cache that extends the BaseCache each time an object is removed from it.
     */
    const REMOVE: any;

  }

}