namespace Phaser.Plugins {
  /**
   * A Global Plugin is installed just once into the Game owned Plugin Manager.
   * It can listen for Game events and respond to them.
   */
  class BasePlugin {
    /**
     *
     * @param pluginManager A reference to the Plugin Manager.
     */
    constructor(pluginManager: Phaser.Plugins.PluginManager);

    /**
     * A handy reference to the Plugin Manager that is responsible for this plugin.
     * Can be used as a route to gain access to game systems and  events.
     */
    protected pluginManager: Phaser.Plugins.PluginManager;

    /**
     * A reference to the Game instance this plugin is running under.
     */
    protected game: Phaser.Game;

    /**
     * The PluginManager calls this method on a Global Plugin when the plugin is first instantiated.
     * It will never be called again on this instance.
     * In here you can set-up whatever you need for this plugin to run.
     * If a plugin is set to automatically start then `BasePlugin.start` will be called immediately after this.
     * On a Scene Plugin, this method is never called. Use {@link Phaser.Plugins.ScenePlugin#boot} instead.
     * @param data A value specified by the user, if any, from the `data` property of the plugin's configuration object (if started at game boot) or passed in the PluginManager's `install` method (if started manually).
     */
    init(data?: any): void;

    /**
     * The PluginManager calls this method on a Global Plugin when the plugin is started.
     * If a plugin is stopped, and then started again, this will get called again.
     * Typically called immediately after `BasePlugin.init`.
     * On a Scene Plugin, this method is never called.
     */
    start(): void;

    /**
     * The PluginManager calls this method on a Global Plugin when the plugin is stopped.
     * The game code has requested that your plugin stop doing whatever it does.
     * It is now considered as 'inactive' by the PluginManager.
     * Handle that process here (i.e. stop listening for events, etc)
     * If the plugin is started again then `BasePlugin.start` will be called again.
     * On a Scene Plugin, this method is never called.
     */
    stop(): void;

    /**
     * Game instance has been destroyed.
     * You must release everything in here, all references, all objects, free it all up.
     */
    destroy(): void;

  }

  /**
   * The Default Plugins.
   */
  namespace DefaultPlugins {
    /**
     * These are the Global Managers that are created by the Phaser.Game instance.
     * They are referenced from Scene.Systems so that plugins can use them.
     */
    var Global: any[];

    /**
     * These are the core plugins that are installed into every Scene.Systems instance, no matter what.
     * They are optionally exposed in the Scene as well (see the InjectionMap for details)
     *
     * They are created in the order in which they appear in this array and EventEmitter is always first.
     */
    var CoreScene: any[];

    /**
     * These plugins are created in Scene.Systems in addition to the CoreScenePlugins.
     *
     * You can elect not to have these plugins by either creating a DefaultPlugins object as part
     * of the Game Config, by creating a Plugins object as part of a Scene Config, or by modifying this array
     * and building your own bundle.
     *
     * They are optionally exposed in the Scene as well (see the InjectionMap for details)
     *
     * They are always created in the order in which they appear in the array.
     */
    var DefaultScene: any[];

  }

  namespace PluginCache {
    /**
     * Static method called directly by the Core internal Plugins.
     * Key is a reference used to get the plugin from the plugins object (i.e. InputPlugin)
     * Plugin is the object to instantiate to create the plugin
     * Mapping is what the plugin is injected into the Scene.Systems as (i.e. input)
     * @param key A reference used to get this plugin from the plugin cache.
     * @param plugin The plugin to be stored. Should be the core object, not instantiated.
     * @param mapping If this plugin is to be injected into the Scene Systems, this is the property key map used.
     * @param custom Core Scene plugin or a Custom Scene plugin? Default false.
     */
    function register(key: string, plugin: Function, mapping: string, custom?: boolean): void;

    /**
     * Stores a custom plugin in the global plugin cache.
     * The key must be unique, within the scope of the cache.
     * @param key A reference used to get this plugin from the plugin cache.
     * @param plugin The plugin to be stored. Should be the core object, not instantiated.
     * @param mapping If this plugin is to be injected into the Scene Systems, this is the property key map used.
     * @param data A value to be passed to the plugin's `init` method.
     */
    function registerCustom(key: string, plugin: Function, mapping: string, data: any): void;

    /**
     * Checks if the given key is already being used in the core plugin cache.
     * @param key The key to check for.
     */
    function hasCore(key: string): boolean;

    /**
     * Checks if the given key is already being used in the custom plugin cache.
     * @param key The key to check for.
     */
    function hasCustom(key: string): boolean;

    /**
     * Returns the core plugin object from the cache based on the given key.
     * @param key The key of the core plugin to get.
     */
    function getCore(key: string): Phaser.Types.Plugins.CorePluginContainer;

    /**
     * Returns the custom plugin object from the cache based on the given key.
     * @param key The key of the custom plugin to get.
     */
    function getCustom(key: string): Phaser.Types.Plugins.CustomPluginContainer;

    /**
     * Returns an object from the custom cache based on the given key that can be instantiated.
     * @param key The key of the custom plugin to get.
     */
    function getCustomClass(key: string): Function;

    /**
     * Removes a core plugin based on the given key.
     * @param key The key of the core plugin to remove.
     */
    function remove(key: string): void;

    /**
     * Removes a custom plugin based on the given key.
     * @param key The key of the custom plugin to remove.
     */
    function removeCustom(key: string): void;

    /**
     * Removes all Core Plugins.
     *
     * This includes all of the internal system plugins that Phaser needs, like the Input Plugin and Loader Plugin.
     * So be sure you only call this if you do not wish to run Phaser again.
     */
    function destroyCorePlugins(): void;

    /**
     * Removes all Custom Plugins.
     */
    function destroyCustomPlugins(): void;

  }

  /**
   * The PluginManager is responsible for installing and adding plugins to Phaser.
   *
   * It is a global system and therefore belongs to the Game instance, not a specific Scene.
   *
   * It works in conjunction with the PluginCache. Core internal plugins automatically register themselves
   * with the Cache, but it's the Plugin Manager that is responsible for injecting them into the Scenes.
   *
   * There are two types of plugin:
   *
   * 1. A Global Plugin
   * 2. A Scene Plugin
   *
   * A Global Plugin is a plugin that lives within the Plugin Manager rather than a Scene. You can get
   * access to it by calling `PluginManager.get` and providing a key. Any Scene that requests a plugin in
   * this way will all get access to the same plugin instance, allowing you to use a single plugin across
   * multiple Scenes.
   *
   * A Scene Plugin is a plugin dedicated to running within a Scene. These are different to Global Plugins
   * in that their instances do not live within the Plugin Manager, but within the Scene Systems class instead.
   * And that every Scene created is given its own unique instance of a Scene Plugin. Examples of core Scene
   * Plugins include the Input Plugin, the Tween Plugin and the physics Plugins.
   *
   * You can add a plugin to Phaser in three different ways:
   *
   * 1. Preload it
   * 2. Include it in your source code and install it via the Game Config
   * 3. Include it in your source code and install it within a Scene
   *
   * For examples of all of these approaches please see the Phaser 3 Examples Repo `plugins` folder.
   *
   * For information on creating your own plugin please see the Phaser 3 Plugin Template.
   */
  class PluginManager {
    /**
     *
     * @param game The game instance that owns this Plugin Manager.
     */
    constructor(game: Phaser.Game);

    /**
     * The game instance that owns this Plugin Manager.
     */
    game: Phaser.Game;

    /**
     * The global plugins currently running and managed by this Plugin Manager.
     * A plugin must have been started at least once in order to appear in this list.
     */
    plugins: Phaser.Types.Plugins.GlobalPlugin[];

    /**
     * A list of plugin keys that should be installed into Scenes as well as the Core Plugins.
     */
    scenePlugins: string[];

    /**
     * Run once the game has booted and installs all of the plugins configured in the Game Config.
     */
    protected boot(): void;

    /**
     * Called by the Scene Systems class. Tells the plugin manager to install all Scene plugins into it.
     *
     * First it will install global references, i.e. references from the Game systems into the Scene Systems (and Scene if mapped.)
     * Then it will install Core Scene Plugins followed by Scene Plugins registered with the PluginManager.
     * Finally it will install any references to Global Plugins that have a Scene mapping property into the Scene itself.
     * @param sys The Scene Systems class to install all the plugins in to.
     * @param globalPlugins An array of global plugins to install.
     * @param scenePlugins An array of scene plugins to install.
     */
    protected addToScene(sys: Phaser.Scenes.Systems, globalPlugins: any[], scenePlugins: any[]): void;

    /**
     * Called by the Scene Systems class. Returns a list of plugins to be installed.
     */
    protected getDefaultScenePlugins(): string[];

    /**
     * Installs a new Scene Plugin into the Plugin Manager and optionally adds it
     * to the given Scene as well. A Scene Plugin added to the manager in this way
     * will be automatically installed into all new Scenes using the key and mapping given.
     *
     * The `key` property is what the plugin is injected into Scene.Systems as.
     * The `mapping` property is optional, and if specified is what the plugin is installed into
     * the Scene as. For example:
     *
     * ```javascript
     * this.plugins.installScenePlugin('powerupsPlugin', pluginCode, 'powerups');
     *
     * // and from within the scene:
     * this.sys.powerupsPlugin; // key value
     * this.powerups; // mapping value
     * ```
     *
     * This method is called automatically by Phaser if you install your plugins using either the
     * Game Configuration object, or by preloading them via the Loader.
     * @param key The property key that will be used to add this plugin to Scene.Systems.
     * @param plugin The plugin code. This should be the non-instantiated version.
     * @param mapping If this plugin is injected into the Phaser.Scene class, this is the property key to use.
     * @param addToScene Optionally automatically add this plugin to the given Scene.
     * @param fromLoader Is this being called by the Loader? Default false.
     */
    installScenePlugin(key: string, plugin: Function, mapping?: string, addToScene?: Phaser.Scene, fromLoader?: boolean): void;

    /**
     * Installs a new Global Plugin into the Plugin Manager and optionally starts it running.
     * A global plugin belongs to the Plugin Manager, rather than a specific Scene, and can be accessed
     * and used by all Scenes in your game.
     *
     * The `key` property is what you use to access this plugin from the Plugin Manager.
     *
     * ```javascript
     * this.plugins.install('powerupsPlugin', pluginCode);
     *
     * // and from within the scene:
     * this.plugins.get('powerupsPlugin');
     * ```
     *
     * This method is called automatically by Phaser if you install your plugins using either the
     * Game Configuration object, or by preloading them via the Loader.
     *
     * The same plugin can be installed multiple times into the Plugin Manager by simply giving each
     * instance its own unique key.
     * @param key The unique handle given to this plugin within the Plugin Manager.
     * @param plugin The plugin code. This should be the non-instantiated version.
     * @param start Automatically start the plugin running? This is always `true` if you provide a mapping value. Default false.
     * @param mapping If this plugin is injected into the Phaser.Scene class, this is the property key to use.
     * @param data A value passed to the plugin's `init` method.
     */
    install(key: string, plugin: Function, start?: boolean, mapping?: string, data?: any): Phaser.Plugins.BasePlugin;

    /**
     * Gets an index of a global plugin based on the given key.
     * @param key The unique plugin key.
     */
    protected getIndex(key: string): number;

    /**
     * Gets a global plugin based on the given key.
     * @param key The unique plugin key.
     */
    protected getEntry(key: string): Phaser.Types.Plugins.GlobalPlugin;

    /**
     * Checks if the given global plugin, based on its key, is active or not.
     * @param key The unique plugin key.
     */
    isActive(key: string): boolean;

    /**
     * Starts a global plugin running.
     *
     * If the plugin was previously active then calling `start` will reset it to an active state and then
     * call its `start` method.
     *
     * If the plugin has never been run before a new instance of it will be created within the Plugin Manager,
     * its active state set and then both of its `init` and `start` methods called, in that order.
     *
     * If the plugin is already running under the given key then nothing happens.
     * @param key The key of the plugin to start.
     * @param runAs Run the plugin under a new key. This allows you to run one plugin multiple times.
     */
    start(key: string, runAs?: string): Phaser.Plugins.BasePlugin;

    /**
     * Stops a global plugin from running.
     *
     * If the plugin is active then its active state will be set to false and the plugins `stop` method
     * will be called.
     *
     * If the plugin is not already running, nothing will happen.
     * @param key The key of the plugin to stop.
     */
    stop(key: string): this;

    /**
     * Gets a global plugin from the Plugin Manager based on the given key and returns it.
     *
     * If it cannot find an active plugin based on the key, but there is one in the Plugin Cache with the same key,
     * then it will create a new instance of the cached plugin and return that.
     * @param key The key of the plugin to get.
     * @param autoStart Automatically start a new instance of the plugin if found in the cache, but not actively running. Default true.
     */
    get(key: string, autoStart?: boolean): Phaser.Plugins.BasePlugin | Function;

    /**
     * Returns the plugin class from the cache.
     * Used internally by the Plugin Manager.
     * @param key The key of the plugin to get.
     */
    getClass(key: string): Phaser.Plugins.BasePlugin;

    /**
     * Removes a global plugin from the Plugin Manager and Plugin Cache.
     *
     * It is up to you to remove all references to this plugin that you may hold within your game code.
     * @param key The key of the plugin to remove.
     */
    removeGlobalPlugin(key: string): void;

    /**
     * Removes a scene plugin from the Plugin Manager and Plugin Cache.
     *
     * This will not remove the plugin from any active Scenes that are already using it.
     *
     * It is up to you to remove all references to this plugin that you may hold within your game code.
     * @param key The key of the plugin to remove.
     */
    removeScenePlugin(key: string): void;

    /**
     * Registers a new type of Game Object with the global Game Object Factory and / or Creator.
     * This is usually called from within your Plugin code and is a helpful short-cut for creating
     * new Game Objects.
     *
     * The key is the property that will be injected into the factories and used to create the
     * Game Object. For example:
     *
     * ```javascript
     * this.plugins.registerGameObject('clown', clownFactoryCallback, clownCreatorCallback);
     * // later in your game code:
     * this.add.clown();
     * this.make.clown();
     * ```
     *
     * The callbacks are what are called when the factories try to create a Game Object
     * matching the given key. It's important to understand that the callbacks are invoked within
     * the context of the GameObjectFactory. In this context there are several properties available
     * to use:
     *
     * this.scene - A reference to the Scene that owns the GameObjectFactory.
     * this.displayList - A reference to the Display List the Scene owns.
     * this.updateList - A reference to the Update List the Scene owns.
     *
     * See the GameObjectFactory and GameObjectCreator classes for more details.
     * Any public property or method listed is available from your callbacks under `this`.
     * @param key The key of the Game Object that the given callbacks will create, i.e. `image`, `sprite`.
     * @param factoryCallback The callback to invoke when the Game Object Factory is called.
     * @param creatorCallback The callback to invoke when the Game Object Creator is called.
     */
    registerGameObject(key: string, factoryCallback?: Function, creatorCallback?: Function): void;

    /**
     * Removes a previously registered Game Object from the global Game Object Factory and / or Creator.
     * This is usually called from within your Plugin destruction code to help clean-up after your plugin has been removed.
     * @param key The key of the Game Object to be removed from the factories.
     * @param removeFromFactory Should the Game Object be removed from the Game Object Factory? Default true.
     * @param removeFromCreator Should the Game Object be removed from the Game Object Creator? Default true.
     */
    removeGameObject(key: string, removeFromFactory?: boolean, removeFromCreator?: boolean): void;

    /**
     * Registers a new file type with the global File Types Manager, making it available to all Loader
     * Plugins created after this.
     *
     * This is usually called from within your Plugin code and is a helpful short-cut for creating
     * new loader file types.
     *
     * The key is the property that will be injected into the Loader Plugin and used to load the
     * files. For example:
     *
     * ```javascript
     * this.plugins.registerFileType('wad', doomWadLoaderCallback);
     * // later in your preload code:
     * this.load.wad();
     * ```
     *
     * The callback is what is called when the loader tries to load a file  matching the given key.
     * It's important to understand that the callback is invoked within
     * the context of the LoaderPlugin. In this context there are several properties / methods available
     * to use:
     *
     * this.addFile - A method to add the new file to the load queue.
     * this.scene - The Scene that owns the Loader Plugin instance.
     *
     * See the LoaderPlugin class for more details. Any public property or method listed is available from
     * your callback under `this`.
     * @param key The key of the Game Object that the given callbacks will create, i.e. `image`, `sprite`.
     * @param callback The callback to invoke when the Game Object Factory is called.
     * @param addToScene Optionally add this file type into the Loader Plugin owned by the given Scene.
     */
    registerFileType(key: string, callback: Function, addToScene?: Phaser.Scene): void;

    /**
     * Destroys this Plugin Manager and all associated plugins.
     * It will iterate all plugins found and call their `destroy` methods.
     *
     * The PluginCache will remove all custom plugins.
     */
    destroy(): void;

  }

  /**
   * A Scene Level Plugin is installed into every Scene and belongs to that Scene.
   * It can listen for Scene events and respond to them.
   * It can map itself to a Scene property, or into the Scene Systems, or both.
   */
  class ScenePlugin extends Phaser.Plugins.BasePlugin {
    /**
     *
     * @param scene A reference to the Scene that has installed this plugin.
     * @param pluginManager A reference to the Plugin Manager.
     * @param pluginKey The key under which this plugin has been installed into the Scene Systems.
     */
    constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager, pluginKey: string);

    /**
     * A reference to the Scene that has installed this plugin.
     * Only set if it's a Scene Plugin, otherwise `null`.
     * This property is only set when the plugin is instantiated and added to the Scene, not before.
     * You can use it during the `boot` method.
     */
    protected scene: Phaser.Scene;

    /**
     * A reference to the Scene Systems of the Scene that has installed this plugin.
     * Only set if it's a Scene Plugin, otherwise `null`.
     * This property is only set when the plugin is instantiated and added to the Scene, not before.
     * You can use it during the `boot` method.
     */
    protected systems: Phaser.Scenes.Systems;

    /**
     * The key under which this plugin was installed into the Scene Systems.
     *
     * This property is only set when the plugin is instantiated and added to the Scene, not before.
     * You can use it during the `boot` method.
     */
    readonly pluginKey: string;

    /**
     * This method is called when the Scene boots. It is only ever called once.
     *
     * By this point the plugin properties `scene` and `systems` will have already been set.
     *
     * In here you can listen for {@link Phaser.Scenes.Events Scene events} and set-up whatever you need for this plugin to run.
     * Here are the Scene events you can listen to:
     *
     * - start
     * - ready
     * - preupdate
     * - update
     * - postupdate
     * - resize
     * - pause
     * - resume
     * - sleep
     * - wake
     * - transitioninit
     * - transitionstart
     * - transitioncomplete
     * - transitionout
     * - shutdown
     * - destroy
     *
     * At the very least you should offer a destroy handler for when the Scene closes down, i.e:
     *
     * ```javascript
     * var eventEmitter = this.systems.events;
     * eventEmitter.once('destroy', this.sceneDestroy, this);
     * ```
     */
    boot(): void;

    /**
     * Game instance has been destroyed.
     *
     * You must release everything in here, all references, all objects, free it all up.
     */
    destroy(): void;

  }

}