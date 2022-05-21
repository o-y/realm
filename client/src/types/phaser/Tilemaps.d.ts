namespace Phaser.Tilemaps {
  namespace Components {
    /**
     * Calculates interesting faces at the given tile coordinates of the specified layer. Interesting
     * faces are used internally for optimizing collisions against tiles. This method is mostly used
     * internally to optimize recalculating faces when only one tile has been changed.
     * @param tileX The x coordinate.
     * @param tileY The y coordinate.
     * @param layer The Tilemap Layer to act upon.
     */
    function CalculateFacesAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Calculates interesting faces within the rectangular area specified (in tile coordinates) of the
     * layer. Interesting faces are used internally for optimizing collisions against tiles. This method
     * is mostly used internally.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The Tilemap Layer to act upon.
     */
    function CalculateFacesWithin(tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Checks if the given tile coordinate is within the isometric layer bounds, or not.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param layer The Tilemap Layer to check against.
     * @param camera The Camera to run the cull check against.
     */
    function CheckIsoBounds(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData, camera?: Phaser.Cameras.Scene2D.Camera): boolean;

    /**
     * Copies the tiles in the source rectangular area to a new destination (all specified in tile
     * coordinates) within the layer. This copies all tile properties & recalculates collision
     * information in the destination region.
     * @param srcTileX The x coordinate of the area to copy from, in tiles, not pixels.
     * @param srcTileY The y coordinate of the area to copy from, in tiles, not pixels.
     * @param width The width of the area to copy, in tiles, not pixels.
     * @param height The height of the area to copy, in tiles, not pixels.
     * @param destTileX The x coordinate of the area to copy to, in tiles, not pixels.
     * @param destTileY The y coordinate of the area to copy to, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param layer The Tilemap Layer to act upon.
     */
    function Copy(srcTileX: number, srcTileY: number, width: number, height: number, destTileX: number, destTileY: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Creates a Sprite for every object matching the given tile indexes in the layer. You can
     * optionally specify if each tile will be replaced with a new tile after the Sprite has been
     * created. This is useful if you want to lay down special tiles in a level that are converted to
     * Sprites, but want to replace the tile itself with a floor tile or similar once converted.
     * @param indexes The tile index, or array of indexes, to create Sprites from.
     * @param replacements The tile index, or array of indexes, to change a converted tile to. Set to `null` to leave the tiles unchanged. If an array is given, it is assumed to be a one-to-one mapping with the indexes array.
     * @param spriteConfig The config object to pass into the Sprite creator (i.e. scene.make.sprite).
     * @param scene The Scene to create the Sprites within.
     * @param camera The Camera to use when determining the world XY
     * @param layer The Tilemap Layer to act upon.
     */
    function CreateFromTiles(indexes: number | number[], replacements: number | number[], spriteConfig: Phaser.Types.GameObjects.Sprite.SpriteConfig, scene: Phaser.Scene, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.GameObjects.Sprite[];

    /**
     * Returns the bounds in the given orthogonal layer that are within the cameras viewport.
     * This is used internally by the cull tiles function.
     * @param layer The Tilemap Layer to act upon.
     * @param camera The Camera to run the cull check against.
     */
    function CullBounds(layer: Phaser.Tilemaps.LayerData, camera: Phaser.Cameras.Scene2D.Camera): Phaser.Geom.Rectangle;

    /**
     * Returns the tiles in the given layer that are within the cameras viewport. This is used internally.
     * @param layer The Tilemap Layer to act upon.
     * @param camera The Camera to run the cull check against.
     * @param outputArray An optional array to store the Tile objects within.
     * @param renderOrder The rendering order constant. Default 0.
     */
    function CullTiles(layer: Phaser.Tilemaps.LayerData, camera: Phaser.Cameras.Scene2D.Camera, outputArray?: any[], renderOrder?: number): Phaser.Tilemaps.Tile[];

    /**
     * Sets the tiles in the given rectangular area (in tile coordinates) of the layer with the
     * specified index. Tiles will be set to collide if the given index is a colliding index.
     * Collision information in the region will be recalculated.
     * @param index The tile index to fill the area with.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    function Fill(index: number, tileX: number, tileY: number, width: number, height: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
     * filter callback function. Any tiles that pass the filter test (i.e. where the callback returns
     * true) will returned as a new array. Similar to Array.prototype.Filter in vanilla JS.
     * @param callback The callback. Each tile in the given area will be passed to this
     * callback as the first and only parameter. The callback should return true for tiles that pass the
     * filter.
     * @param context The context under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param layer The Tilemap Layer to act upon.
     */
    function FilterTiles(callback: Function, context: object, tileX: number, tileY: number, width: number, height: number, filteringOptions: Phaser.Types.Tilemaps.FilteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

    /**
     * Searches the entire map layer for the first tile matching the given index, then returns that Tile
     * object. If no match is found, it returns null. The search starts from the top-left tile and
     * continues horizontally until it hits the end of the row, then it drops down to the next column.
     * If the reverse boolean is true, it scans starting from the bottom-right corner traveling up to
     * the top-left.
     * @param index The tile index value to search for.
     * @param skip The number of times to skip a matching tile before returning.
     * @param reverse If true it will scan the layer in reverse, starting at the bottom-right. Otherwise it scans from the top-left.
     * @param layer The Tilemap Layer to act upon.
     */
    function FindByIndex(index: number, skip: number, reverse: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

    /**
     * Find the first tile in the given rectangular area (in tile coordinates) of the layer that
     * satisfies the provided testing function. I.e. finds the first tile for which `callback` returns
     * true. Similar to Array.prototype.find in vanilla JS.
     * @param callback The callback. Each tile in the given area will be passed to this callback as the first and only parameter.
     * @param context The context under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param layer The Tilemap Layer to act upon.
     */
    function FindTile(callback: FindTileCallback, context: object, tileX: number, tileY: number, width: number, height: number, filteringOptions: Phaser.Types.Tilemaps.FilteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

    /**
     * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
     * callback. Similar to Array.prototype.forEach in vanilla JS.
     * @param callback The callback. Each tile in the given area will be passed to this callback as the first and only parameter.
     * @param context The context under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param layer The Tilemap Layer to act upon.
     */
    function ForEachTile(callback: EachTileCallback, context: object, tileX: number, tileY: number, width: number, height: number, filteringOptions: Phaser.Types.Tilemaps.FilteringOptions, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Gets the correct function to use to cull tiles, based on the map orientation.
     * @param orientation The Tilemap orientation constant.
     */
    function GetCullTilesFunction(orientation: number): Function;

    /**
     * Gets a tile at the given tile coordinates from the given layer.
     * @param tileX X position to get the tile from (given in tile units, not pixels).
     * @param tileY Y position to get the tile from (given in tile units, not pixels).
     * @param nonNull If true getTile won't return null for empty tiles, but a Tile object with an index of -1.
     * @param layer The Tilemap Layer to act upon.
     */
    function GetTileAt(tileX: number, tileY: number, nonNull: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

    /**
     * Gets a tile at the given world coordinates from the given layer.
     * @param worldX X position to get the tile from (given in pixels)
     * @param worldY Y position to get the tile from (given in pixels)
     * @param nonNull If true, function won't return null for empty tiles, but a Tile object with an index of -1.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function GetTileAtWorldXY(worldX: number, worldY: number, nonNull: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

    /**
     * Gets the tiles in the given rectangular area (in tile coordinates) of the layer.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param layer The Tilemap Layer to act upon.
     */
    function GetTilesWithin(tileX: number, tileY: number, width: number, height: number, filteringOptions: Phaser.Types.Tilemaps.FilteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

    /**
     * Gets the tiles that overlap with the given shape in the given layer. The shape must be a Circle,
     * Line, Rectangle or Triangle. The shape should be in world coordinates.
     * @param shape A shape in world (pixel) coordinates
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function GetTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions: Phaser.Types.Tilemaps.FilteringOptions, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

    /**
     * Gets the tiles in the given rectangular area (in world coordinates) of the layer.
     * @param worldX The world x coordinate for the top-left of the area.
     * @param worldY The world y coordinate for the top-left of the area.
     * @param width The width of the area.
     * @param height The height of the area.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param camera The Camera to use when factoring in which tiles to return.
     * @param layer The Tilemap Layer to act upon.
     */
    function GetTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions: Phaser.Types.Tilemaps.FilteringOptions, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

    /**
     * Gets the correct function to use to translate tiles, based on the map orientation.
     * @param orientation The Tilemap orientation constant.
     */
    function GetTileToWorldXFunction(orientation: number): Function;

    /**
     * Gets the correct function to use to translate tiles, based on the map orientation.
     * @param orientation The Tilemap orientation constant.
     */
    function GetTileToWorldXYFunction(orientation: number): Function;

    /**
     * Gets the correct function to use to translate tiles, based on the map orientation.
     * @param orientation The Tilemap orientation constant.
     */
    function GetTileToWorldYFunction(orientation: number): Function;

    /**
     * Gets the correct function to use to translate tiles, based on the map orientation.
     * @param orientation The Tilemap orientation constant.
     */
    function GetWorldToTileXFunction(orientation: number): Function;

    /**
     * Gets the correct function to use to translate tiles, based on the map orientation.
     * @param orientation The Tilemap orientation constant.
     */
    function GetWorldToTileXYFunction(orientation: number): Function;

    /**
     * Gets the correct function to use to translate tiles, based on the map orientation.
     * @param orientation The Tilemap orientation constant.
     */
    function GetWorldToTileYFunction(orientation: number): Function;

    /**
     * Checks if there is a tile at the given location (in tile coordinates) in the given layer. Returns
     * false if there is no tile or if the tile at that location has an index of -1.
     * @param tileX X position to get the tile from (given in tile units, not pixels).
     * @param tileY Y position to get the tile from (given in tile units, not pixels).
     * @param layer The Tilemap Layer to act upon.
     */
    function HasTileAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): boolean;

    /**
     * Checks if there is a tile at the given location (in world coordinates) in the given layer. Returns
     * false if there is no tile or if the tile at that location has an index of -1.
     * @param worldX The X coordinate of the world position.
     * @param worldY The Y coordinate of the world position.
     * @param camera The Camera to use when factoring in which tiles to return.
     * @param layer The Tilemap Layer to act upon.
     */
    function HasTileAtWorldXY(worldX: number, worldY: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): boolean;

    /**
     * Returns the bounds in the given layer that are within the camera's viewport.
     * This is used internally by the cull tiles function.
     * @param layer The Tilemap Layer to act upon.
     * @param camera The Camera to run the cull check against.
     */
    function HexagonalCullBounds(layer: Phaser.Tilemaps.LayerData, camera: Phaser.Cameras.Scene2D.Camera): object;

    /**
     * Returns the tiles in the given layer that are within the cameras viewport. This is used internally.
     * @param layer The Tilemap Layer to act upon.
     * @param camera The Camera to run the cull check against.
     * @param outputArray An optional array to store the Tile objects within.
     * @param renderOrder The rendering order constant. Default 0.
     */
    function HexagonalCullTiles(layer: Phaser.Tilemaps.LayerData, camera: Phaser.Cameras.Scene2D.Camera, outputArray?: any[], renderOrder?: number): Phaser.Tilemaps.Tile[];

    /**
     * Converts from hexagonal tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
     * layer's position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function HexagonalTileToWorldXY(tileX: number, tileY: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

    /**
     * Converts from hexagonal tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
     * layer's position, scale and scroll.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function HexagonalTileToWorldY(tileY: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

    /**
     * Converts from world XY coordinates (pixels) to hexagonal tile XY coordinates (tile units), factoring in the
     * layer's position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinates down to the nearest integer.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function HexagonalWorldToTileXY(worldX: number, worldY: number, snapToFloor: boolean, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

    /**
     * Converts from world Y coordinates (pixels) to hexagonal tile Y coordinates (tile units), factoring in the
     * layers position, scale and scroll.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function HexagonalWorldToTileY(worldY: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

    /**
     * Checks if the given tile coordinates are within the bounds of the layer.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param layer The Tilemap Layer to act upon.
     */
    function IsInLayerBounds(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): boolean;

    /**
     * Returns the tiles in the given layer that are within the cameras viewport. This is used internally.
     * @param layer The Tilemap Layer to act upon.
     * @param camera The Camera to run the cull check against.
     * @param outputArray An optional array to store the Tile objects within.
     * @param renderOrder The rendering order constant. Default 0.
     */
    function IsometricCullTiles(layer: Phaser.Tilemaps.LayerData, camera: Phaser.Cameras.Scene2D.Camera, outputArray?: any[], renderOrder?: number): Phaser.Tilemaps.Tile[];

    /**
     * Converts from isometric tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
     * layer's position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function IsometricTileToWorldXY(tileX: number, tileY: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

    /**
     * Converts from world XY coordinates (pixels) to isometric tile XY coordinates (tile units), factoring in the
     * layer's position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function IsometricWorldToTileXY(worldX: number, worldY: number, snapToFloor: boolean, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

    /**
     * Puts a tile at the given tile coordinates in the specified layer. You can pass in either an index
     * or a Tile object. If you pass in a Tile, all attributes will be copied over to the specified
     * location. If you pass in an index, only the index at the specified location will be changed.
     * Collision information will be recalculated at the specified location.
     * @param tile The index of this tile to set or a Tile object.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param layer The Tilemap Layer to act upon.
     */
    function PutTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

    /**
     * Puts a tile at the given world coordinates (pixels) in the specified layer. You can pass in either
     * an index or a Tile object. If you pass in a Tile, all attributes will be copied over to the
     * specified location. If you pass in an index, only the index at the specified location will be
     * changed. Collision information will be recalculated at the specified location.
     * @param tile The index of this tile to set or a Tile object.
     * @param worldX The x coordinate, in pixels.
     * @param worldY The y coordinate, in pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function PutTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

    /**
     * Puts an array of tiles or a 2D array of tiles at the given tile coordinates in the specified
     * layer. The array can be composed of either tile indexes or Tile objects. If you pass in a Tile,
     * all attributes will be copied over to the specified location. If you pass in an index, only the
     * index at the specified location will be changed. Collision information will be recalculated
     * within the region tiles were changed.
     * @param tile A row (array) or grid (2D array) of Tiles or tile indexes to place.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param layer The Tilemap Layer to act upon.
     */
    function PutTilesAt(tile: number[] | number[][] | Phaser.Tilemaps.Tile[] | Phaser.Tilemaps.Tile[][], tileX: number, tileY: number, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
     * specified layer. Each tile will receive a new index. If an array of indexes is passed in, then
     * those will be used for randomly assigning new tile indexes. If an array is not provided, the
     * indexes found within the region (excluding -1) will be used for randomly assigning new tile
     * indexes. This method only modifies tile indexes and does not change collision information.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param indexes An array of indexes to randomly draw from during randomization.
     * @param layer The Tilemap Layer to act upon.
     */
    function Randomize(tileX: number, tileY: number, width: number, height: number, indexes: number[], layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Removes the tile at the given tile coordinates in the specified layer and updates the layer's
     * collision information.
     * @param tileX The x coordinate.
     * @param tileY The y coordinate.
     * @param replaceWithNull If true, this will replace the tile at the specified location with null instead of a Tile with an index of -1.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param layer The Tilemap Layer to act upon.
     */
    function RemoveTileAt(tileX: number, tileY: number, replaceWithNull: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

    /**
     * Removes the tile at the given world coordinates in the specified layer and updates the layer's
     * collision information.
     * @param worldX The x coordinate, in pixels.
     * @param worldY The y coordinate, in pixels.
     * @param replaceWithNull If true, this will replace the tile at the specified location with null instead of a Tile with an index of -1.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function RemoveTileAtWorldXY(worldX: number, worldY: number, replaceWithNull: boolean, recalculateFaces: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

    /**
     * Draws a debug representation of the layer to the given Graphics. This is helpful when you want to
     * get a quick idea of which of your tiles are colliding and which have interesting faces. The tiles
     * are drawn starting at (0, 0) in the Graphics, allowing you to place the debug representation
     * wherever you want on the screen.
     * @param graphics The target Graphics object to draw upon.
     * @param styleConfig An object specifying the colors to use for the debug drawing.
     * @param layer The Tilemap Layer to act upon.
     */
    function RenderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig: Phaser.Types.Tilemaps.DebugStyleOptions, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
     * `findIndex` and updates their index to match `newIndex`. This only modifies the index and does
     * not change collision information.
     * @param findIndex The index of the tile to search for.
     * @param newIndex The index of the tile to replace it with.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The Tilemap Layer to act upon.
     */
    function ReplaceByIndex(findIndex: number, newIndex: number, tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Returns the tiles in the given layer that are within the cameras viewport. This is used internally.
     * @param layer The Tilemap Layer to act upon.
     * @param bounds An object containing the `left`, `right`, `top` and `bottom` bounds.
     * @param renderOrder The rendering order constant.
     * @param outputArray The array to store the Tile objects within.
     */
    function RunCull(layer: Phaser.Tilemaps.LayerData, bounds: object, renderOrder: number, outputArray: any[]): Phaser.Tilemaps.Tile[];

    /**
     * Sets collision on the given tile or tiles within a layer by index. You can pass in either a
     * single numeric index or an array of indexes: [2, 3, 15, 20]. The `collides` parameter controls if
     * collision will be enabled (true) or disabled (false).
     * @param indexes Either a single tile index, or an array of tile indexes.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The Tilemap Layer to act upon.
     * @param updateLayer If true, updates the current tiles on the layer. Set to false if no tiles have been placed for significant performance boost. Default true.
     */
    function SetCollision(indexes: number | any[], collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData, updateLayer?: boolean): void;

    /**
     * Sets collision on a range of tiles in a layer whose index is between the specified `start` and
     * `stop` (inclusive). Calling this with a start value of 10 and a stop value of 14 would set
     * collision for tiles 10, 11, 12, 13 and 14. The `collides` parameter controls if collision will be
     * enabled (true) or disabled (false).
     * @param start The first index of the tile to be set for collision.
     * @param stop The last index of the tile to be set for collision.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The Tilemap Layer to act upon.
     * @param updateLayer If true, updates the current tiles on the layer. Set to false if no tiles have been placed for significant performance boost. Default true.
     */
    function SetCollisionBetween(start: number, stop: number, collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData, updateLayer?: boolean): void;

    /**
     * Sets collision on all tiles in the given layer, except for tiles that have an index specified in
     * the given array. The `collides` parameter controls if collision will be enabled (true) or
     * disabled (false). Tile indexes not currently in the layer are not affected.
     * @param indexes An array of the tile indexes to not be counted for collision.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The Tilemap Layer to act upon.
     */
    function SetCollisionByExclusion(indexes: number[], collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Sets collision on the tiles within a layer by checking tile properties. If a tile has a property
     * that matches the given properties object, its collision flag will be set. The `collides`
     * parameter controls if collision will be enabled (true) or disabled (false). Passing in
     * `{ collides: true }` would update the collision flag on any tiles with a "collides" property that
     * has a value of true. Any tile that doesn't have "collides" set to true will be ignored. You can
     * also use an array of values, e.g. `{ types: ["stone", "lava", "sand" ] }`. If a tile has a
     * "types" property that matches any of those values, its collision flag will be updated.
     * @param properties An object with tile properties and corresponding values that should be checked.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The Tilemap Layer to act upon.
     */
    function SetCollisionByProperty(properties: object, collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Sets collision on the tiles within a layer by checking each tile's collision group data
     * (typically defined in Tiled within the tileset collision editor). If any objects are found within
     * a tile's collision group, the tile's colliding information will be set. The `collides` parameter
     * controls if collision will be enabled (true) or disabled (false).
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The Tilemap Layer to act upon.
     */
    function SetCollisionFromCollisionGroup(collides: boolean, recalculateFaces: boolean, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Internally used method to keep track of the tile indexes that collide within a layer. This
     * updates LayerData.collideIndexes to either contain or not contain the given `tileIndex`.
     * @param tileIndex The tile index to set the collision boolean for.
     * @param collides Should the tile index collide or not?
     * @param layer The Tilemap Layer to act upon.
     */
    function SetLayerCollisionIndex(tileIndex: number, collides: boolean, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Internally used method to set the colliding state of a tile. This does not recalculate
     * interesting faces.
     * @param tile The Tile to set the collision on.
     * @param collides Should the tile index collide or not? Default true.
     */
    function SetTileCollision(tile: Phaser.Tilemaps.Tile, collides?: boolean): void;

    /**
     * Sets a global collision callback for the given tile index within the layer. This will affect all
     * tiles on this layer that have the same index. If a callback is already set for the tile index it
     * will be replaced. Set the callback to null to remove it. If you want to set a callback for a tile
     * at a specific location on the map then see setTileLocationCallback.
     * @param indexes Either a single tile index, or an array of tile indexes to have a collision callback set for.
     * @param callback The callback that will be invoked when the tile is collided with.
     * @param callbackContext The context under which the callback is called.
     * @param layer The Tilemap Layer to act upon.
     */
    function SetTileIndexCallback(indexes: number | any[], callback: Function, callbackContext: object, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Sets a collision callback for the given rectangular area (in tile coordinates) within the layer.
     * If a callback is already set for the tile index it will be replaced. Set the callback to null to
     * remove it.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param callback The callback that will be invoked when the tile is collided with.
     * @param callbackContext The context under which the callback is called.
     * @param layer The Tilemap Layer to act upon.
     */
    function SetTileLocationCallback(tileX: number, tileY: number, width: number, height: number, callback: Function, callbackContext: object, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Shuffles the tiles in a rectangular region (specified in tile coordinates) within the given
     * layer. It will only randomize the tiles in that area, so if they're all the same nothing will
     * appear to have changed! This method only modifies tile indexes and does not change collision
     * information.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The Tilemap Layer to act upon.
     */
    function Shuffle(tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Returns the bounds in the given layer that are within the camera's viewport.
     * This is used internally by the cull tiles function.
     * @param layer The Tilemap Layer to act upon.
     * @param camera The Camera to run the cull check against.
     */
    function StaggeredCullBounds(layer: Phaser.Tilemaps.LayerData, camera: Phaser.Cameras.Scene2D.Camera): object;

    /**
     * Returns the tiles in the given layer that are within the cameras viewport. This is used internally.
     * @param layer The Tilemap Layer to act upon.
     * @param camera The Camera to run the cull check against.
     * @param outputArray An optional array to store the Tile objects within.
     * @param renderOrder The rendering order constant. Default 0.
     */
    function StaggeredCullTiles(layer: Phaser.Tilemaps.LayerData, camera: Phaser.Cameras.Scene2D.Camera, outputArray?: any[], renderOrder?: number): Phaser.Tilemaps.Tile[];

    /**
     * Converts from staggered tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
     * layer's position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function StaggeredTileToWorldXY(tileX: number, tileY: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

    /**
     * Converts from staggered tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
     * layers position, scale and scroll.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function StaggeredTileToWorldY(tileY: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

    /**
     * Converts from world XY coordinates (pixels) to staggered tile XY coordinates (tile units), factoring in the
     * layer's position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function StaggeredWorldToTileXY(worldX: number, worldY: number, snapToFloor: boolean, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

    /**
     * Converts from world Y coordinates (pixels) to staggered tile Y coordinates (tile units), factoring in the
     * layers position, scale and scroll.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function StaggeredWorldToTileY(worldY: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

    /**
     * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
     * `indexA` and swaps then with `indexB`. This only modifies the index and does not change collision
     * information.
     * @param tileA First tile index.
     * @param tileB Second tile index.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The Tilemap Layer to act upon.
     */
    function SwapByIndex(tileA: number, tileB: number, tileX: number, tileY: number, width: number, height: number, layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Converts from tile X coordinates (tile units) to world X coordinates (pixels), factoring in the
     * layer's position, scale and scroll.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function TileToWorldX(tileX: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

    /**
     * Converts from tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
     * layer's position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function TileToWorldXY(tileX: number, tileY: number, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

    /**
     * Converts from tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
     * layer's position, scale and scroll.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function TileToWorldY(tileY: number, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

    /**
     * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
     * specified layer. Each tile will receive a new index. New indexes are drawn from the given
     * weightedIndexes array. An example weighted array:
     *
     * [
     *  { index: 6, weight: 4 },    // Probability of index 6 is 4 / 8
     *  { index: 7, weight: 2 },    // Probability of index 7 would be 2 / 8
     *  { index: 8, weight: 1.5 },  // Probability of index 8 would be 1.5 / 8
     *  { index: 26, weight: 0.5 }  // Probability of index 27 would be 0.5 / 8
     * ]
     *
     * The probability of any index being choose is (the index's weight) / (sum of all weights). This
     * method only modifies tile indexes and does not change collision information.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param weightedIndexes An array of objects to randomly draw from during
     * randomization. They should be in the form: { index: 0, weight: 4 } or
     * { index: [0, 1], weight: 4 } if you wish to draw from multiple tile indexes.
     * @param layer The Tilemap Layer to act upon.
     */
    function WeightedRandomize(tileX: number, tileY: number, width: number, height: number, weightedIndexes: object[], layer: Phaser.Tilemaps.LayerData): void;

    /**
     * Converts from world X coordinates (pixels) to tile X coordinates (tile units), factoring in the
     * layer's position, scale and scroll.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function WorldToTileX(worldX: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

    /**
     * Converts from world XY coordinates (pixels) to tile XY coordinates (tile units), factoring in the
     * layer's position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function WorldToTileXY(worldX: number, worldY: number, snapToFloor: boolean, point: Phaser.Math.Vector2, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

    /**
     * Converts from world Y coordinates (pixels) to tile Y coordinates (tile units), factoring in the
     * layer's position, scale and scroll.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The Tilemap Layer to act upon.
     */
    function WorldToTileY(worldY: number, snapToFloor: boolean, camera: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

  }

  /**
   * Phaser Tilemap constants for orientation.
   */
  enum Orientation {
    /**
     * Orthogonal Tilemap orientation constant.
     */
    ORTHOGONAL,
    /**
     * Isometric Tilemap orientation constant.
     */
    ISOMETRIC,
    /**
     * Staggered Tilemap orientation constant.
     */
    STAGGERED,
    /**
     * Hexagonal Tilemap orientation constant.
     */
    HEXAGONAL,
  }

  /**
   * Phaser Tilemap constants for orientation.
   *
   * To find out what each mode does please see [Phaser.Tilemaps.Orientation]{@link Phaser.Tilemaps.Orientation}.
   */
  type OrientationType = Phaser.Tilemaps.Orientation;

  namespace Formats {
    /**
     * CSV Map Type
     */
    var CSV: number;

    /**
     * Tiled JSON Map Type
     */
    var TILED_JSON: number;

    /**
     * 2D Array Map Type
     */
    var ARRAY_2D: number;

    /**
     * Weltmeister (Impact.js) Map Type
     */
    var WELTMEISTER: number;

  }

  /**
   * An Image Collection is a special Tile Set containing multiple images, with no slicing into each image.
   *
   * Image Collections are normally created automatically when Tiled data is loaded.
   */
  class ImageCollection {
    /**
     *
     * @param name The name of the image collection in the map data.
     * @param firstgid The first image index this image collection contains.
     * @param width Width of widest image (in pixels). Default 32.
     * @param height Height of tallest image (in pixels). Default 32.
     * @param margin The margin around all images in the collection (in pixels). Default 0.
     * @param spacing The spacing between each image in the collection (in pixels). Default 0.
     * @param properties Custom Image Collection properties. Default {}.
     */
    constructor(name: string, firstgid: number, width?: number, height?: number, margin?: number, spacing?: number, properties?: object);

    /**
     * The name of the Image Collection.
     */
    name: string;

    /**
     * The Tiled firstgid value.
     * This is the starting index of the first image index this Image Collection contains.
     */
    firstgid: number;

    /**
     * The width of the widest image (in pixels).
     */
    readonly imageWidth: number;

    /**
     * The height of the tallest image (in pixels).
     */
    readonly imageHeight: number;

    /**
     * The margin around the images in the collection (in pixels).
     * Use `setSpacing` to change.
     */
    readonly imageMarge: number;

    /**
     * The spacing between each image in the collection (in pixels).
     * Use `setSpacing` to change.
     */
    readonly imageSpacing: number;

    /**
     * Image Collection-specific properties that are typically defined in the Tiled editor.
     */
    properties: object;

    /**
     * The cached images that are a part of this collection.
     */
    readonly images: any[];

    /**
     * The total number of images in the image collection.
     */
    readonly total: number;

    /**
     * Returns true if and only if this image collection contains the given image index.
     * @param imageIndex The image index to search for.
     */
    containsImageIndex(imageIndex: number): boolean;

    /**
     * Add an image to this Image Collection.
     * @param gid The gid of the image in the Image Collection.
     * @param image The the key of the image in the Image Collection and in the cache.
     */
    addImage(gid: number, image: string): Phaser.Tilemaps.ImageCollection;

  }

  /**
   * A class for representing data about about a layer in a map. Maps are parsed from CSV, Tiled,
   * etc. into this format. Tilemap and TilemapLayer objects have a reference
   * to this data and use it to look up and perform operations on tiles.
   */
  class LayerData {
    /**
     *
     * @param config The Layer Data configuration object.
     */
    constructor(config?: Phaser.Types.Tilemaps.LayerDataConfig);

    /**
     * The name of the layer, if specified in Tiled.
     */
    name: string;

    /**
     * The x offset of where to draw from the top left.
     */
    x: number;

    /**
     * The y offset of where to draw from the top left.
     */
    y: number;

    /**
     * The width of the layer in tiles.
     */
    width: number;

    /**
     * The height of the layer in tiles.
     */
    height: number;

    /**
     * The pixel width of the tiles.
     */
    tileWidth: number;

    /**
     * The pixel height of the tiles.
     */
    tileHeight: number;

    /**
     * The base tile width.
     */
    baseTileWidth: number;

    /**
     * The base tile height.
     */
    baseTileHeight: number;

    /**
     * The layers orientation, necessary to be able to determine a tiles pixelX and pixelY as well as the layers width and height.
     */
    orientation: Phaser.Tilemaps.OrientationType;

    /**
     * The width in pixels of the entire layer.
     */
    widthInPixels: number;

    /**
     * The height in pixels of the entire layer.
     */
    heightInPixels: number;

    /**
     * The alpha value of the layer.
     */
    alpha: number;

    /**
     * Is the layer visible or not?
     */
    visible: boolean;

    /**
     * Layer specific properties (can be specified in Tiled)
     */
    properties: object[];

    /**
     * Tile ID index map.
     */
    indexes: any[];

    /**
     * Tile Collision ID index map.
     */
    collideIndexes: any[];

    /**
     * An array of callbacks.
     */
    callbacks: any[];

    /**
     * An array of physics bodies.
     */
    bodies: any[];

    /**
     * An array of the tile data indexes.
     */
    data: Phaser.Tilemaps.Tile[][];

    /**
     * A reference to the Tilemap layer that owns this data.
     */
    tilemapLayer: Phaser.Tilemaps.TilemapLayer;

    /**
     * The length of the horizontal sides of the hexagon.
     * Only used for hexagonal orientation Tilemaps.
     */
    hexSideLength: number;

  }

  /**
   * A class for representing data about a map. Maps are parsed from CSV, Tiled, etc. into this
   * format. A Tilemap object get a copy of this data and then unpacks the needed properties into
   * itself.
   */
  class MapData {
    /**
     *
     * @param config The Map configuration object.
     */
    constructor(config?: Phaser.Types.Tilemaps.MapDataConfig);

    /**
     * The key in the Phaser cache that corresponds to the loaded tilemap data.
     */
    name: string;

    /**
     * The width of the entire tilemap.
     */
    width: number;

    /**
     * The height of the entire tilemap.
     */
    height: number;

    /**
     * If the map is infinite or not.
     */
    infinite: boolean;

    /**
     * The width of the tiles.
     */
    tileWidth: number;

    /**
     * The height of the tiles.
     */
    tileHeight: number;

    /**
     * The width in pixels of the entire tilemap.
     */
    widthInPixels: number;

    /**
     * The height in pixels of the entire tilemap.
     */
    heightInPixels: number;

    /**
     * The format of the map data.
     */
    format: number;

    /**
     * The orientation of the map data (i.e. orthogonal, isometric, hexagonal), default 'orthogonal'.
     */
    orientation: Phaser.Tilemaps.OrientationType;

    /**
     * Determines the draw order of tilemap. Default is right-down
     *
     * 0, or 'right-down'
     * 1, or 'left-down'
     * 2, or 'right-up'
     * 3, or 'left-up'
     */
    renderOrder: string;

    /**
     * The version of the map data (as specified in Tiled).
     */
    version: string;

    /**
     * Map specific properties (can be specified in Tiled)
     */
    properties: object;

    /**
     * An array with all the layers configured to the MapData.
     */
    layers: Phaser.Tilemaps.LayerData[] | Phaser.Tilemaps.ObjectLayer;

    /**
     * An array of Tiled Image Layers.
     */
    images: any[];

    /**
     * An object of Tiled Object Layers.
     */
    objects: object;

    /**
     * An object of collision data. Must be created as physics object or will return undefined.
     */
    collision: object;

    /**
     * An array of Tilesets.
     */
    tilesets: Phaser.Tilemaps.Tileset[];

    /**
     * The collection of images the map uses(specified in Tiled)
     */
    imageCollections: any[];

    /**
     * An array of tile instances.
     */
    tiles: any[];

    /**
     * The length of the horizontal sides of the hexagon.
     * Only used for hexagonal orientation Tilemaps.
     */
    hexSideLength: number;

  }

  /**
   * A class for representing a Tiled object layer in a map. This mirrors the structure of a Tiled
   * object layer, except:
   *  - "x" & "y" properties are ignored since these cannot be changed in Tiled.
   *  - "offsetx" & "offsety" are applied to the individual object coordinates directly, so they
   *    are ignored as well.
   *  - "draworder" is ignored.
   */
  class ObjectLayer {
    /**
     *
     * @param config The data for the layer from the Tiled JSON object.
     */
    constructor(config?: Phaser.Types.Tilemaps.ObjectLayerConfig);

    /**
     * The name of the Object Layer.
     */
    name: string;

    /**
     * The opacity of the layer, between 0 and 1.
     */
    opacity: number;

    /**
     * The custom properties defined on the Object Layer, keyed by their name.
     */
    properties: object;

    /**
     * The type of each custom property defined on the Object Layer, keyed by its name.
     */
    propertyTypes: object;

    /**
     * The type of the layer, which should be `objectgroup`.
     */
    type: string;

    /**
     * Whether the layer is shown (`true`) or hidden (`false`).
     */
    visible: boolean;

    /**
     * An array of all objects on this Object Layer.
     *
     * Each Tiled object corresponds to a JavaScript object in this array. It has an `id` (unique),
     * `name` (as assigned in Tiled), `type` (as assigned in Tiled), `rotation` (in clockwise degrees),
     * `properties` (if any), `visible` state (`true` if visible, `false` otherwise),
     * `x` and `y` coordinates (in pixels, relative to the tilemap), and a `width` and `height` (in pixels).
     *
     * An object tile has a `gid` property (GID of the represented tile), a `flippedHorizontal` property,
     * a `flippedVertical` property, and `flippedAntiDiagonal` property.
     * The {@link http://docs.mapeditor.org/en/latest/reference/tmx-map-format/|Tiled documentation} contains
     * information on flipping and rotation.
     *
     * Polylines have a `polyline` property, which is an array of objects corresponding to points,
     * where each point has an `x` property and a `y` property. Polygons have an identically structured
     * array in their `polygon` property. Text objects have a `text` property with the text's properties.
     *
     * Rectangles and ellipses have a `rectangle` or `ellipse` property set to `true`.
     */
    objects: Phaser.Types.Tilemaps.TiledObject[];

  }

  namespace Parsers {
    /**
     * Get the Tilemap orientation from the given string.
     * @param orientation The orientation type as a string.
     */
    function FromOrientationString(orientation?: string): Phaser.Tilemaps.OrientationType;

    namespace Impact {
      /**
       * Parses all tilemap layers in an Impact JSON object into new LayerData objects.
       * @param json The Impact JSON object.
       * @param insertNull Controls how empty tiles, tiles with an index of -1, in the map
       * data are handled (see {@link Phaser.Tilemaps.Parsers.Tiled.ParseJSONTiled}).
       */
      function ParseTileLayers(json: object, insertNull: boolean): Phaser.Tilemaps.LayerData[];

      /**
       * Tilesets and Image Collections
       * @param json The Impact JSON data.
       */
      function ParseTilesets(json: object): any[];

      /**
       * Parses a Weltmeister JSON object into a new MapData object.
       * @param name The name of the tilemap, used to set the name on the MapData.
       * @param json The Weltmeister JSON object.
       * @param insertNull Controls how empty tiles, tiles with an index of -1, in the map
       * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
       * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
       * the tile data doesn't need to change then setting this value to `true` will help with memory
       * consumption. However if your map is small or you need to update the tiles dynamically, then leave
       * the default value set.
       */
      function ParseWeltmeister(name: string, json: object, insertNull: boolean): Phaser.Tilemaps.MapData;

    }

    /**
     * Parses raw data of a given Tilemap format into a new MapData object. If no recognized data format
     * is found, returns `null`. When loading from CSV or a 2D array, you should specify the tileWidth &
     * tileHeight. When parsing from a map from Tiled, the tileWidth & tileHeight will be pulled from
     * the map data.
     * @param name The name of the tilemap, used to set the name on the MapData.
     * @param mapFormat See ../Formats.js.
     * @param data 2D array, CSV string or Tiled JSON object.
     * @param tileWidth The width of a tile in pixels. Required for 2D array and CSV, but
     * ignored for Tiled JSON.
     * @param tileHeight The height of a tile in pixels. Required for 2D array and CSV, but
     * ignored for Tiled JSON.
     * @param insertNull Controls how empty tiles, tiles with an index of -1, in the map
     * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
     * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
     * the tile data doesn't need to change then setting this value to `true` will help with memory
     * consumption. However if your map is small or you need to update the tiles dynamically, then leave
     * the default value set.
     */
    function Parse(name: string, mapFormat: number, data: number[][] | string | object, tileWidth: number, tileHeight: number, insertNull: boolean): Phaser.Tilemaps.MapData;

    /**
     * Parses a 2D array of tile indexes into a new MapData object with a single layer.
     * @param name The name of the tilemap, used to set the name on the MapData.
     * @param data 2D array, CSV string or Tiled JSON object.
     * @param tileWidth The width of a tile in pixels.
     * @param tileHeight The height of a tile in pixels.
     * @param insertNull Controls how empty tiles, tiles with an index of -1, in the map
     * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
     * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
     * the tile data doesn't need to change then setting this value to `true` will help with memory
     * consumption. However if your map is small or you need to update the tiles dynamically, then leave
     * the default value set.
     */
    function Parse2DArray(name: string, data: number[][], tileWidth: number, tileHeight: number, insertNull: boolean): Phaser.Tilemaps.MapData;

    /**
     * Parses a CSV string of tile indexes into a new MapData object with a single layer.
     * @param name The name of the tilemap, used to set the name on the MapData.
     * @param data CSV string of tile indexes.
     * @param tileWidth The width of a tile in pixels.
     * @param tileHeight The height of a tile in pixels.
     * @param insertNull Controls how empty tiles, tiles with an index of -1, in the map
     * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
     * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
     * the tile data doesn't need to change then setting this value to `true` will help with memory
     * consumption. However if your map is small or you need to update the tiles dynamically, then leave
     * the default value set.
     */
    function ParseCSV(name: string, data: string, tileWidth: number, tileHeight: number, insertNull: boolean): Phaser.Tilemaps.MapData;

    namespace Tiled {
      /**
       * Copy properties from tileset to tiles.
       * @param mapData The Map Data object.
       */
      function AssignTileProperties(mapData: Phaser.Tilemaps.MapData): void;

      /**
       * Decode base-64 encoded data, for example as exported by Tiled.
       * @param data Base-64 encoded data to decode.
       */
      function Base64Decode(data: object): any[];

      /**
       * Master list of tiles -> x, y, index in tileset.
       * @param mapData The Map Data object.
       */
      function BuildTilesetIndex(mapData: Phaser.Tilemaps.MapData): any[];

      /**
       * Parse a Tiled group layer and create a state object for inheriting.
       * @param json The Tiled JSON object.
       * @param currentl The current group layer from the Tiled JSON file.
       * @param parentstate The state of the parent group (if any).
       */
      function CreateGroupLayer(json: object, currentl?: object, parentstate?: object): object;

      /**
       * See Tiled documentation on tile flipping:
       * http://docs.mapeditor.org/en/latest/reference/tmx-map-format/
       * @param gid A Tiled GID.
       */
      function ParseGID(gid: number): Phaser.Types.Tilemaps.GIDData;

      /**
       * Parses a Tiled JSON object into an array of objects with details about the image layers.
       * @param json The Tiled JSON object.
       */
      function ParseImageLayers(json: object): any[];

      /**
       * Parses a Tiled JSON object into a new MapData object.
       * @param name The name of the tilemap, used to set the name on the MapData.
       * @param json The Tiled JSON object.
       * @param insertNull Controls how empty tiles, tiles with an index of -1, in the map
       * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
       * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
       * the tile data doesn't need to change then setting this value to `true` will help with memory
       * consumption. However if your map is small or you need to update the tiles dynamically, then leave
       * the default value set.
       */
      function ParseJSONTiled(name: string, json: object, insertNull: boolean): Phaser.Tilemaps.MapData;

      /**
       * Convert a Tiled object to an internal parsed object normalising and copying properties over, while applying optional x and y offsets. The parsed object will always have the properties `id`, `name`, `type`, `rotation`, `properties`, `visible`, `x`, `y`, `width` and `height`. Other properties will be added according to the object type (such as text, polyline, gid etc.)
       * @param tiledObject Tiled object to convert to an internal parsed object normalising and copying properties over.
       * @param offsetX Optional additional offset to apply to the object's x property. Defaults to 0. Default 0.
       * @param offsetY Optional additional offset to apply to the object's y property. Defaults to 0. Default 0.
       */
      function ParseObject(tiledObject: object, offsetX?: number, offsetY?: number): object;

      /**
       * Parses a Tiled JSON object into an array of ObjectLayer objects.
       * @param json The Tiled JSON object.
       */
      function ParseObjectLayers(json: object): any[];

      /**
       * Parses all tilemap layers in a Tiled JSON object into new LayerData objects.
       * @param json The Tiled JSON object.
       * @param insertNull Controls how empty tiles, tiles with an index of -1, in the map
       * data are handled (see {@link Phaser.Tilemaps.Parsers.Tiled.ParseJSONTiled}).
       */
      function ParseTileLayers(json: object, insertNull: boolean): Phaser.Tilemaps.LayerData[];

      /**
       * Tilesets and Image Collections.
       * @param json The Tiled JSON data.
       */
      function ParseTilesets(json: object): object;

      /**
       * Parses out the Wangset information from Tiled 1.1.5+ map data, if present.
       *
       * Since a given tile can be in more than one wangset, the resulting properties
       * are nested. `tile.data.wangid[someWangsetName]` will return the array-based wang id in
       * this implementation.
       *
       * Note that we're not guaranteed that there will be any 'normal' tiles if the only
       * thing in the tilset are wangtile definitions, so this has to be parsed separately.
       *
       * See https://doc.mapeditor.org/en/latest/manual/using-wang-tiles/ for more information.
       * @param wangsets The array of wangset objects (parsed from JSON)
       * @param datas The field into which to put wangset data from Tiled.
       */
      function ParseWangsets(wangsets: object[], datas: object): object;

    }

  }

  /**
   * Create a Tilemap from the given key or data. If neither is given, make a blank Tilemap. When
   * loading from CSV or a 2D array, you should specify the tileWidth & tileHeight. When parsing from
   * a map from Tiled, the tileWidth, tileHeight, width & height will be pulled from the map data. For
   * an empty map, you should specify tileWidth, tileHeight, width & height.
   * @param scene The Scene to which this Tilemap belongs.
   * @param key The key in the Phaser cache that corresponds to the loaded tilemap data.
   * @param tileWidth The width of a tile in pixels. Default 32.
   * @param tileHeight The height of a tile in pixels. Default 32.
   * @param width The width of the map in tiles. Default 10.
   * @param height The height of the map in tiles. Default 10.
   * @param data Instead of loading from the cache, you can also load directly from
   * a 2D array of tile indexes.
   * @param insertNull Controls how empty tiles, tiles with an index of -1, in the
   * map data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
   * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
   * the tile data doesn't need to change then setting this value to `true` will help with memory
   * consumption. However if your map is small or you need to update the tiles dynamically, then leave
   * the default value set. Default false.
   */
  function ParseToTilemap(scene: Phaser.Scene, key?: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number, data?: number[][], insertNull?: boolean): Phaser.Tilemaps.Tilemap;

  /**
   * A Tile is a representation of a single tile within the Tilemap. This is a lightweight data
   * representation, so its position information is stored without factoring in scroll, layer
   * scale or layer position.
   */
  class Tile implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.Visible {
    /**
     *
     * @param layer The LayerData object in the Tilemap that this tile belongs to.
     * @param index The unique index of this tile within the map.
     * @param x The x coordinate of this tile in tile coordinates.
     * @param y The y coordinate of this tile in tile coordinates.
     * @param width Width of the tile in pixels.
     * @param height Height of the tile in pixels.
     * @param baseWidth The base width a tile in the map (in pixels). Tiled maps support
     * multiple tileset sizes within one map, but they are still placed at intervals of the base
     * tile width.
     * @param baseHeight The base height of the tile in pixels (in pixels). Tiled maps
     * support multiple tileset sizes within one map, but they are still placed at intervals of the
     * base tile height.
     */
    constructor(layer: Phaser.Tilemaps.LayerData, index: number, x: number, y: number, width: number, height: number, baseWidth: number, baseHeight: number);

    /**
     * The LayerData in the Tilemap data that this tile belongs to.
     */
    layer: Phaser.Tilemaps.LayerData;

    /**
     * The index of this tile within the map data corresponding to the tileset, or -1 if this
     * represents a blank tile.
     */
    index: number;

    /**
     * The x map coordinate of this tile in tile units.
     */
    x: number;

    /**
     * The y map coordinate of this tile in tile units.
     */
    y: number;

    /**
     * The width of the tile in pixels.
     */
    width: number;

    /**
     * The height of the tile in pixels.
     */
    height: number;

    /**
     * The right of the tile in pixels.
     *
     * Set in the `updatePixelXY` method.
     */
    right: number;

    /**
     * The bottom of the tile in pixels.
     *
     * Set in the `updatePixelXY` method.
     */
    bottom: number;

    /**
     * The maps base width of a tile in pixels. Tiled maps support multiple tileset sizes
     * within one map, but they are still placed at intervals of the base tile size.
     */
    baseWidth: number;

    /**
     * The maps base height of a tile in pixels. Tiled maps support multiple tileset sizes
     * within one map, but they are still placed at intervals of the base tile size.
     */
    baseHeight: number;

    /**
     * The x coordinate of the top left of this tile in pixels. This is relative to the top left
     * of the layer this tile is being rendered within. This property does NOT factor in camera
     * scroll, layer scale or layer position.
     */
    pixelX: number;

    /**
     * The y coordinate of the top left of this tile in pixels. This is relative to the top left
     * of the layer this tile is being rendered within. This property does NOT factor in camera
     * scroll, layer scale or layer position.
     */
    pixelY: number;

    /**
     * Tile specific properties. These usually come from Tiled.
     */
    properties: any;

    /**
     * The rotation angle of this tile.
     */
    rotation: number;

    /**
     * Whether the tile should collide with any object on the left side.
     *
     * This property is used by Arcade Physics only, however, you can also use it
     * in your own checks.
     */
    collideLeft: boolean;

    /**
     * Whether the tile should collide with any object on the right side.
     *
     * This property is used by Arcade Physics only, however, you can also use it
     * in your own checks.
     */
    collideRight: boolean;

    /**
     * Whether the tile should collide with any object on the top side.
     *
     * This property is used by Arcade Physics only, however, you can also use it
     * in your own checks.
     */
    collideUp: boolean;

    /**
     * Whether the tile should collide with any object on the bottom side.
     *
     * This property is used by Arcade Physics only, however, you can also use it
     * in your own checks.
     */
    collideDown: boolean;

    /**
     * Whether the tiles left edge is interesting for collisions.
     */
    faceLeft: boolean;

    /**
     * Whether the tiles right edge is interesting for collisions.
     */
    faceRight: boolean;

    /**
     * Whether the tiles top edge is interesting for collisions.
     */
    faceTop: boolean;

    /**
     * Whether the tiles bottom edge is interesting for collisions.
     */
    faceBottom: boolean;

    /**
     * Tile collision callback.
     */
    collisionCallback: Function;

    /**
     * The context in which the collision callback will be called.
     */
    collisionCallbackContext: object;

    /**
     * The tint to apply to this tile. Note: tint is currently a single color value instead of
     * the 4 corner tint component on other GameObjects.
     */
    tint: number;

    /**
     * An empty object where physics-engine specific information (e.g. bodies) may be stored.
     */
    physics: object;

    /**
     * Check if the given x and y world coordinates are within this Tile. This does not factor in
     * camera scroll, layer scale or layer position.
     * @param x The x coordinate to test.
     * @param y The y coordinate to test.
     */
    containsPoint(x: number, y: number): boolean;

    /**
     * Copies the tile data & properties from the given tile to this tile. This copies everything
     * except for position and interesting faces.
     * @param tile The tile to copy from.
     */
    copy(tile: Phaser.Tilemaps.Tile): this;

    /**
     * The collision group for this Tile, defined within the Tileset. This returns a reference to
     * the collision group stored within the Tileset, so any modification of the returned object
     * will impact all tiles that have the same index as this tile.
     */
    getCollisionGroup(): object;

    /**
     * The tile data for this Tile, defined within the Tileset. This typically contains Tiled
     * collision data, tile animations and terrain information. This returns a reference to the tile
     * data stored within the Tileset, so any modification of the returned object will impact all
     * tiles that have the same index as this tile.
     */
    getTileData(): object;

    /**
     * Gets the world X position of the left side of the tile, factoring in the layers position,
     * scale and scroll.
     * @param camera The Camera to use to perform the check.
     */
    getLeft(camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Gets the world X position of the right side of the tile, factoring in the layer's position,
     * scale and scroll.
     * @param camera The Camera to use to perform the check.
     */
    getRight(camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Gets the world Y position of the top side of the tile, factoring in the layer's position,
     * scale and scroll.
     * @param camera The Camera to use to perform the check.
     */
    getTop(camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Gets the world Y position of the bottom side of the tile, factoring in the layer's position,
     * scale and scroll.
     * @param camera The Camera to use to perform the check.
     */
    getBottom(camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Gets the world rectangle bounding box for the tile, factoring in the layers position,
     * scale and scroll.
     * @param camera The Camera to use to perform the check.
     * @param output Optional Rectangle object to store the results in.
     */
    getBounds(camera?: Phaser.Cameras.Scene2D.Camera, output?: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle | object;

    /**
     * Gets the world X position of the center of the tile, factoring in the layer's position,
     * scale and scroll.
     * @param camera The Camera to use to perform the check.
     */
    getCenterX(camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Gets the world Y position of the center of the tile, factoring in the layer's position,
     * scale and scroll.
     * @param camera The Camera to use to perform the check.
     */
    getCenterY(camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Check for intersection with this tile. This does not factor in camera scroll, layer scale or
     * layer position.
     * @param x The x axis in pixels.
     * @param y The y axis in pixels.
     * @param right The right point.
     * @param bottom The bottom point.
     */
    intersects(x: number, y: number, right: number, bottom: number): boolean;

    /**
     * Checks if the tile is interesting.
     * @param collides If true, will consider the tile interesting if it collides on any side.
     * @param faces If true, will consider the tile interesting if it has an interesting face.
     */
    isInteresting(collides: boolean, faces: boolean): boolean;

    /**
     * Reset collision status flags.
     * @param recalculateFaces Whether or not to recalculate interesting faces for this tile and its neighbors. Default true.
     */
    resetCollision(recalculateFaces?: boolean): this;

    /**
     * Reset faces.
     */
    resetFaces(): this;

    /**
     * Sets the collision flags for each side of this tile and updates the interesting faces list.
     * @param left Indicating collide with any object on the left.
     * @param right Indicating collide with any object on the right.
     * @param up Indicating collide with any object on the top.
     * @param down Indicating collide with any object on the bottom.
     * @param recalculateFaces Whether or not to recalculate interesting faces for this tile and its neighbors. Default true.
     */
    setCollision(left: boolean, right?: boolean, up?: boolean, down?: boolean, recalculateFaces?: boolean): this;

    /**
     * Set a callback to be called when this tile is hit by an object. The callback must true for
     * collision processing to take place.
     * @param callback Callback function.
     * @param context Callback will be called within this context.
     */
    setCollisionCallback(callback: Function, context: object): this;

    /**
     * Sets the size of the tile and updates its pixelX and pixelY.
     * @param tileWidth The width of the tile in pixels.
     * @param tileHeight The height of the tile in pixels.
     * @param baseWidth The base width a tile in the map (in pixels).
     * @param baseHeight The base height of the tile in pixels (in pixels).
     */
    setSize(tileWidth: number, tileHeight: number, baseWidth: number, baseHeight: number): this;

    /**
     * Used internally. Updates the tiles world XY position based on the current tile size.
     */
    updatePixelXY(): this;

    /**
     * Clean up memory.
     */
    destroy(): void;

    /**
     * True if this tile can collide on any of its faces or has a collision callback set.
     */
    readonly canCollide: boolean;

    /**
     * True if this tile can collide on any of its faces.
     */
    readonly collides: boolean;

    /**
     * True if this tile has any interesting faces.
     */
    readonly hasInterestingFace: boolean;

    /**
     * The tileset that contains this Tile. This is null if accessed from a LayerData instance
     * before the tile is placed in a TilemapLayer, or if the tile has an index that doesn't correspond
     * to any of the maps tilesets.
     */
    readonly tileset: Phaser.Tilemaps.Tileset;

    /**
     * The tilemap layer that contains this Tile. This will only return null if accessed from a
     * LayerData instance before the tile is placed within a TilemapLayer.
     */
    readonly tilemapLayer: Phaser.Tilemaps.TilemapLayer;

    /**
     * The tilemap that contains this Tile. This will only return null if accessed from a LayerData
     * instance before the tile is placed within a TilemapLayer.
     */
    readonly tilemap: Phaser.Tilemaps.Tilemap;

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

  }

  /**
   * A Tilemap is a container for Tilemap data. This isn't a display object, rather, it holds data
   * about the map and allows you to add tilesets and tilemap layers to it. A map can have one or
   * more tilemap layers, which are the display objects that actually render the tiles.
   *
   * The Tilemap data can be parsed from a Tiled JSON file, a CSV file or a 2D array. Tiled is a free
   * software package specifically for creating tile maps, and is available from:
   * http://www.mapeditor.org
   *
   * As of Phaser 3.50.0 the Tilemap API now supports the following types of map:
   *
   * 1) Orthogonal
   * 2) Isometric
   * 3) Hexagonal
   * 4) Staggered
   *
   * Prior to this release, only orthogonal maps were supported.
   *
   * Another large change in 3.50 was the consolidation of Tilemap Layers. Previously, you created
   * either a Static or Dynamic Tilemap Layer. However, as of 3.50 the features of both have been
   * merged and the API simplified, so now there is just the single `TilemapLayer` class.
   *
   * A Tilemap has handy methods for getting and manipulating the tiles within a layer, allowing
   * you to build or modify the tilemap data at runtime.
   *
   * Note that all Tilemaps use a base tile size to calculate dimensions from, but that a
   * TilemapLayer may have its own unique tile size that overrides this.
   *
   * As of Phaser 3.21.0, if your tilemap includes layer groups (a feature of Tiled 1.2.0+) these
   * will be traversed and the following properties will impact children:
   *
   * - Opacity (blended with parent) and visibility (parent overrides child)
   * - Vertical and horizontal offset
   *
   * The grouping hierarchy is not preserved and all layers will be flattened into a single array.
   *
   * Group layers are parsed during Tilemap construction but are discarded after parsing so dynamic
   * layers will NOT continue to be affected by a parent.
   *
   * To avoid duplicate layer names, a layer that is a child of a group layer will have its parent
   * group name prepended with a '/'.  For example, consider a group called 'ParentGroup' with a
   * child called 'Layer 1'. In the Tilemap object, 'Layer 1' will have the name
   * 'ParentGroup/Layer 1'.
   */
  class Tilemap {
    /**
     *
     * @param scene The Scene to which this Tilemap belongs.
     * @param mapData A MapData instance containing Tilemap data.
     */
    constructor(scene: Phaser.Scene, mapData: Phaser.Tilemaps.MapData);

    scene: Phaser.Scene;

    /**
     * The base width of a tile in pixels. Note that individual layers may have a different tile
     * width.
     */
    tileWidth: number;

    /**
     * The base height of a tile in pixels. Note that individual layers may have a different
     * tile height.
     */
    tileHeight: number;

    /**
     * The width of the map (in tiles).
     */
    width: number;

    /**
     * The height of the map (in tiles).
     */
    height: number;

    /**
     * The orientation of the map data (as specified in Tiled), usually 'orthogonal'.
     */
    orientation: string;

    /**
     * The render (draw) order of the map data (as specified in Tiled), usually 'right-down'.
     *
     * The draw orders are:
     *
     * right-down
     * left-down
     * right-up
     * left-up
     *
     * This can be changed via the `setRenderOrder` method.
     */
    renderOrder: string;

    /**
     * The format of the map data.
     */
    format: number;

    /**
     * The version of the map data (as specified in Tiled, usually 1).
     */
    version: number;

    /**
     * Map specific properties as specified in Tiled.
     */
    properties: object;

    /**
     * The width of the map in pixels based on width * tileWidth.
     */
    widthInPixels: number;

    /**
     * The height of the map in pixels based on height * tileHeight.
     */
    heightInPixels: number;

    /**
     * A collection of Images, as parsed from Tiled map data.
     */
    imageCollections: Phaser.Tilemaps.ImageCollection[];

    /**
     * An array of Tiled Image Layers.
     */
    images: any[];

    /**
     * An array of Tilemap layer data.
     */
    layers: Phaser.Tilemaps.LayerData[];

    /**
     * An array of Tilesets used in the map.
     */
    tilesets: Phaser.Tilemaps.Tileset[];

    /**
     * An array of ObjectLayer instances parsed from Tiled object layers.
     */
    objects: Phaser.Tilemaps.ObjectLayer[];

    /**
     * The index of the currently selected LayerData object.
     */
    currentLayerIndex: number;

    /**
     * The length of the horizontal sides of the hexagon.
     * Only used for hexagonal orientation Tilemaps.
     */
    hexSideLength: number;

    /**
     * Sets the rendering (draw) order of the tiles in this map.
     *
     * The default is 'right-down', meaning it will order the tiles starting from the top-left,
     * drawing to the right and then moving down to the next row.
     *
     * The draw orders are:
     *
     * 0 = right-down
     * 1 = left-down
     * 2 = right-up
     * 3 = left-up
     *
     * Setting the render order does not change the tiles or how they are stored in the layer,
     * it purely impacts the order in which they are rendered.
     *
     * You can provide either an integer (0 to 3), or the string version of the order.
     *
     * Calling this method _after_ creating Tilemap Layers will **not** automatically
     * update them to use the new render order. If you call this method after creating layers, use their
     * own `setRenderOrder` methods to change them as needed.
     * @param renderOrder The render (draw) order value. Either an integer between 0 and 3, or a string: 'right-down', 'left-down', 'right-up' or 'left-up'.
     */
    setRenderOrder(renderOrder: number | string): this;

    /**
     * Adds an image to the map to be used as a tileset. A single map may use multiple tilesets.
     * Note that the tileset name can be found in the JSON file exported from Tiled, or in the Tiled
     * editor.
     * @param tilesetName The name of the tileset as specified in the map data.
     * @param key The key of the Phaser.Cache image used for this tileset. If
     * `undefined` or `null` it will look for an image with a key matching the tilesetName parameter.
     * @param tileWidth The width of the tile (in pixels) in the Tileset Image. If not
     * given it will default to the map's tileWidth value, or the tileWidth specified in the Tiled
     * JSON file.
     * @param tileHeight The height of the tiles (in pixels) in the Tileset Image. If
     * not given it will default to the map's tileHeight value, or the tileHeight specified in the
     * Tiled JSON file.
     * @param tileMargin The margin around the tiles in the sheet (in pixels). If not
     * specified, it will default to 0 or the value specified in the Tiled JSON file.
     * @param tileSpacing The spacing between each the tile in the sheet (in pixels).
     * If not specified, it will default to 0 or the value specified in the Tiled JSON file.
     * @param gid If adding multiple tilesets to a blank map, specify the starting
     * GID this set will use here. Default 0.
     */
    addTilesetImage(tilesetName: string, key?: string, tileWidth?: number, tileHeight?: number, tileMargin?: number, tileSpacing?: number, gid?: number): Phaser.Tilemaps.Tileset;

    /**
     * Copies the tiles in the source rectangular area to a new destination (all specified in tile
     * coordinates) within the layer. This copies all tile properties & recalculates collision
     * information in the destination region.
     *
     * If no layer specified, the map's current layer is used. This cannot be applied to StaticTilemapLayers.
     * @param srcTileX The x coordinate of the area to copy from, in tiles, not pixels.
     * @param srcTileY The y coordinate of the area to copy from, in tiles, not pixels.
     * @param width The width of the area to copy, in tiles, not pixels.
     * @param height The height of the area to copy, in tiles, not pixels.
     * @param destTileX The x coordinate of the area to copy to, in tiles, not pixels.
     * @param destTileY The y coordinate of the area to copy to, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    copy(srcTileX: number, srcTileY: number, width: number, height: number, destTileX: number, destTileY: number, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Creates a new and empty Tilemap Layer. The currently selected layer in the map is set to this new layer.
     *
     * Prior to v3.50.0 this method was called `createBlankDynamicLayer`.
     * @param name The name of this layer. Must be unique within the map.
     * @param tileset The tileset, or an array of tilesets, used to render this layer. Can be a string or a Tileset object.
     * @param x The world x position where the top left of this layer will be placed. Default 0.
     * @param y The world y position where the top left of this layer will be placed. Default 0.
     * @param width The width of the layer in tiles. If not specified, it will default to the map's width.
     * @param height The height of the layer in tiles. If not specified, it will default to the map's height.
     * @param tileWidth The width of the tiles the layer uses for calculations. If not specified, it will default to the map's tileWidth.
     * @param tileHeight The height of the tiles the layer uses for calculations. If not specified, it will default to the map's tileHeight.
     */
    createBlankLayer(name: string, tileset: string | string[] | Phaser.Tilemaps.Tileset | Phaser.Tilemaps.Tileset[], x?: number, y?: number, width?: number, height?: number, tileWidth?: number, tileHeight?: number): Phaser.Tilemaps.TilemapLayer;

    /**
     * Creates a new Tilemap Layer that renders the LayerData associated with the given
     * `layerID`. The currently selected layer in the map is set to this new layer.
     *
     * The `layerID` is important. If you've created your map in Tiled then you can get this by
     * looking in Tiled and looking at the layer name. Or you can open the JSON file it exports and
     * look at the layers[].name value. Either way it must match.
     *
     * Prior to v3.50.0 this method was called `createDynamicLayer`.
     * @param layerID The layer array index value, or if a string is given, the layer name from Tiled.
     * @param tileset The tileset, or an array of tilesets, used to render this layer. Can be a string or a Tileset object.
     * @param x The x position to place the layer in the world. If not specified, it will default to the layer offset from Tiled or 0. Default 0.
     * @param y The y position to place the layer in the world. If not specified, it will default to the layer offset from Tiled or 0. Default 0.
     */
    createLayer(layerID: number | string, tileset: string | string[] | Phaser.Tilemaps.Tileset | Phaser.Tilemaps.Tileset[], x?: number, y?: number): Phaser.Tilemaps.TilemapLayer;

    /**
     * This method will iterate through all of the objects defined in a Tiled Object Layer and then
     * convert the matching results into Phaser Game Objects (by default, Sprites)
     *
     * Objects are matched on one of 3 criteria: The Object ID, the Object GID or the Object Name.
     *
     * Within Tiled, Object IDs are unique per Object. Object GIDs, however, are shared by all objects
     * using the same image. Finally, Object Names are strings and the same name can be used on multiple
     * Objects in Tiled, they do not have to be unique.
     *
     * You set the configuration parameter accordingly, based on which type of criteria you wish
     * to match against. For example, to convert all items on an Object Layer with a `gid` of 26:
     *
     * ```javascript
     * createFromObjects(layerName, {
     *   gid: 26
     * });
     * ```
     *
     * Or, to convert objects with the name 'bonus':
     *
     * ```javascript
     * createFromObjects(layerName, {
     *   name: 'bonus'
     * });
     * ```
     *
     * Or, to convert an object with a specific id:
     *
     * ```javascript
     * createFromObjects(layerName, {
     *   id: 9
     * });
     * ```
     *
     * You should only specify either `id`, `gid`, `name`, or none of them. Do not add more than
     * one criteria to your config. If you do not specify any criteria, then _all_ objects in the
     * Object Layer will be converted.
     *
     * By default this method will convert objects into `Sprite` instances, but you can override
     * this by providing your own class type:
     *
     * ```javascript
     * createFromObjects(layerName, {
     *   gid: 26,
     *   classType: Coin
     * });
     * ```
     *
     * This will convert all Objects with a gid of 26 into your custom `Coin` class. You can pass
     * any class type here, but it _must_ extend `Phaser.GameObjects.GameObject` as its base class.
     * Your class will always be passed 1 parameter: `scene`, which is a reference to either the Scene
     * specified in the config object or, if not given, the Scene to which this Tilemap belongs.
     *
     * All properties from object are copied into the Game Object, so you can use this as an easy
     * way to configure properties from within the map editor. For example giving an object a
     * property of `alpha: 0.5` in Tiled will be reflected in the Game Object that is created.
     *
     * Custom object properties that do not exist as a Game Object property are set in the
     * Game Objects {@link Phaser.GameObjects.GameObject#data data store}.
     *
     * You can use set a `container` property in the config. If given, the class will be added to
     * the Container instance instead of the Scene.
     *
     * Finally, you can provide an array of config objects, to convert multiple types of object in
     * a single call:
     *
     * ```javascript
     * createFromObjects(layerName, [
     *   {
     *     gid: 26,
     *     classType: Coin
     *   },
     *   {
     *     id: 9,
     *     classType: BossMonster
     *   },
     *   {
     *     name: 'lava',
     *     classType: LavaTile
     *   }
     * ]);
     * ```
     *
     * The signature of this method changed significantly in v3.50.0. Prior to this, it did not take config objects.
     * @param objectLayerName The name of the Tiled object layer to create the Game Objects from.
     * @param config A CreateFromObjects configuration object, or an array of them.
     */
    createFromObjects(objectLayerName: string, config: Phaser.Types.Tilemaps.CreateFromObjectLayerConfig | Phaser.Types.Tilemaps.CreateFromObjectLayerConfig[]): Phaser.GameObjects.GameObject[];

    /**
     * Creates a Sprite for every object matching the given tile indexes in the layer. You can
     * optionally specify if each tile will be replaced with a new tile after the Sprite has been
     * created. This is useful if you want to lay down special tiles in a level that are converted to
     * Sprites, but want to replace the tile itself with a floor tile or similar once converted.
     * @param indexes The tile index, or array of indexes, to create Sprites from.
     * @param replacements The tile index, or array of indexes, to change a converted
     * tile to. Set to `null` to leave the tiles unchanged. If an array is given, it is assumed to be a
     * one-to-one mapping with the indexes array.
     * @param spriteConfig The config object to pass into the Sprite creator (i.e. scene.make.sprite).
     * @param scene The Scene to create the Sprites within.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    createFromTiles(indexes: number | any[], replacements: number | any[], spriteConfig: Phaser.Types.GameObjects.Sprite.SpriteConfig, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.GameObjects.Sprite[];

    /**
     * Sets the tiles in the given rectangular area (in tile coordinates) of the layer with the
     * specified index. Tiles will be set to collide if the given index is a colliding index.
     * Collision information in the region will be recalculated.
     *
     * If no layer specified, the map's current layer is used.
     * This cannot be applied to StaticTilemapLayers.
     * @param index The tile index to fill the area with.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    fill(index: number, tileX?: number, tileY?: number, width?: number, height?: number, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * For each object in the given object layer, run the given filter callback function. Any
     * objects that pass the filter test (i.e. where the callback returns true) will returned as a
     * new array. Similar to Array.prototype.Filter in vanilla JS.
     * @param objectLayer The name of an object layer (from Tiled) or an ObjectLayer instance.
     * @param callback The callback. Each object in the given area will be passed to this callback as the first and only parameter.
     * @param context The context under which the callback should be run.
     */
    filterObjects(objectLayer: Phaser.Tilemaps.ObjectLayer | string, callback: TilemapFilterCallback, context?: object): Phaser.Types.Tilemaps.TiledObject[];

    /**
     * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
     * filter callback function. Any tiles that pass the filter test (i.e. where the callback returns
     * true) will returned as a new array. Similar to Array.prototype.Filter in vanilla JS.
     * If no layer specified, the map's current layer is used.
     * @param callback The callback. Each tile in the given area will be passed to this
     * callback as the first and only parameter. The callback should return true for tiles that pass the
     * filter.
     * @param context The context under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    filterTiles(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile[];

    /**
     * Searches the entire map layer for the first tile matching the given index, then returns that Tile
     * object. If no match is found, it returns null. The search starts from the top-left tile and
     * continues horizontally until it hits the end of the row, then it drops down to the next column.
     * If the reverse boolean is true, it scans starting from the bottom-right corner traveling up to
     * the top-left.
     * If no layer specified, the map's current layer is used.
     * @param index The tile index value to search for.
     * @param skip The number of times to skip a matching tile before returning. Default 0.
     * @param reverse If true it will scan the layer in reverse, starting at the bottom-right. Otherwise it scans from the top-left. Default false.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    findByIndex(index: number, skip?: number, reverse?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile;

    /**
     * Find the first object in the given object layer that satisfies the provided testing function.
     * I.e. finds the first object for which `callback` returns true. Similar to
     * Array.prototype.find in vanilla JS.
     * @param objectLayer The name of an object layer (from Tiled) or an ObjectLayer instance.
     * @param callback The callback. Each object in the given area will be passed to this callback as the first and only parameter.
     * @param context The context under which the callback should be run.
     */
    findObject(objectLayer: Phaser.Tilemaps.ObjectLayer | string, callback: TilemapFindCallback, context?: object): Phaser.Types.Tilemaps.TiledObject;

    /**
     * Find the first tile in the given rectangular area (in tile coordinates) of the layer that
     * satisfies the provided testing function. I.e. finds the first tile for which `callback` returns
     * true. Similar to Array.prototype.find in vanilla JS.
     * If no layer specified, the maps current layer is used.
     * @param callback The callback. Each tile in the given area will be passed to this callback as the first and only parameter.
     * @param context The context under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to search.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to search.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param layer The Tile layer to run the search on. If not provided will use the current layer.
     */
    findTile(callback: FindTileCallback, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile;

    /**
     * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
     * callback. Similar to Array.prototype.forEach in vanilla JS.
     *
     * If no layer specified, the map's current layer is used.
     * @param callback The callback. Each tile in the given area will be passed to this callback as the first and only parameter.
     * @param context The context under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to search.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to search.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param layer The Tile layer to run the search on. If not provided will use the current layer.
     */
    forEachTile(callback: EachTileCallback, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Gets the image layer index based on its name.
     * @param name The name of the image to get.
     */
    getImageIndex(name: string): number;

    /**
     * Return a list of all valid imagelayer names loaded in this Tilemap.
     */
    getImageLayerNames(): string[];

    /**
     * Internally used. Returns the index of the object in one of the Tilemaps arrays whose name
     * property matches the given `name`.
     * @param location The Tilemap array to search.
     * @param name The name of the array element to get.
     */
    getIndex(location: any[], name: string): number;

    /**
     * Gets the LayerData from `this.layers` that is associated with the given `layer`, or null if the layer is invalid.
     * @param layer The name of the layer from Tiled, the index of the layer in the map or Tilemap Layer. If not given will default to the maps current layer index.
     */
    getLayer(layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.LayerData;

    /**
     * Gets the ObjectLayer from `this.objects` that has the given `name`, or null if no ObjectLayer is found with that name.
     * @param name The name of the object layer from Tiled.
     */
    getObjectLayer(name?: string): Phaser.Tilemaps.ObjectLayer;

    /**
     * Return a list of all valid objectgroup names loaded in this Tilemap.
     */
    getObjectLayerNames(): string[];

    /**
     * Gets the LayerData index of the given `layer` within this.layers, or null if an invalid
     * `layer` is given.
     * @param layer The name of the layer from Tiled, the index of the layer in the map or a Tilemap Layer. If not given will default to the map's current layer index.
     */
    getLayerIndex(layer?: string | number | Phaser.Tilemaps.TilemapLayer): number;

    /**
     * Gets the index of the LayerData within this.layers that has the given `name`, or null if an
     * invalid `name` is given.
     * @param name The name of the layer to get.
     */
    getLayerIndexByName(name: string): number;

    /**
     * Gets a tile at the given tile coordinates from the given layer.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX X position to get the tile from (given in tile units, not pixels).
     * @param tileY Y position to get the tile from (given in tile units, not pixels).
     * @param nonNull If true getTile won't return null for empty tiles, but a Tile object with an index of -1.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    getTileAt(tileX: number, tileY: number, nonNull?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile;

    /**
     * Gets a tile at the given world coordinates from the given layer.
     *
     * If no layer is specified, the maps current layer is used.
     * @param worldX X position to get the tile from (given in pixels)
     * @param worldY Y position to get the tile from (given in pixels)
     * @param nonNull If true, function won't return null for empty tiles, but a Tile object with an index of -1.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    getTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile;

    /**
     * Return a list of all valid tilelayer names loaded in this Tilemap.
     */
    getTileLayerNames(): string[];

    /**
     * Gets the tiles in the given rectangular area (in tile coordinates) of the layer.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    getTilesWithin(tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile[];

    /**
     * Gets the tiles that overlap with the given shape in the given layer. The shape must be a Circle,
     * Line, Rectangle or Triangle. The shape should be in world coordinates.
     *
     * If no layer is specified, the maps current layer is used.
     * @param shape A shape in world (pixel) coordinates
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param camera The Camera to use when factoring in which tiles to return.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile[];

    /**
     * Gets the tiles in the given rectangular area (in world coordinates) of the layer.
     *
     * If no layer is specified, the maps current layer is used.
     * @param worldX The world x coordinate for the top-left of the area.
     * @param worldY The world y coordinate for the top-left of the area.
     * @param width The width of the area.
     * @param height The height of the area.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param camera The Camera to use when factoring in which tiles to return.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile[];

    /**
     * Gets the Tileset that has the given `name`, or null if an invalid `name` is given.
     * @param name The name of the Tileset to get.
     */
    getTileset(name: string): Phaser.Tilemaps.Tileset;

    /**
     * Gets the index of the Tileset within this.tilesets that has the given `name`, or null if an
     * invalid `name` is given.
     * @param name The name of the Tileset to get.
     */
    getTilesetIndex(name: string): number;

    /**
     * Checks if there is a tile at the given location (in tile coordinates) in the given layer. Returns
     * false if there is no tile or if the tile at that location has an index of -1.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    hasTileAt(tileX: number, tileY: number, layer?: string | number | Phaser.Tilemaps.TilemapLayer): boolean;

    /**
     * Checks if there is a tile at the given location (in world coordinates) in the given layer. Returns
     * false if there is no tile or if the tile at that location has an index of -1.
     *
     * If no layer is specified, the maps current layer is used.
     * @param worldX The x coordinate, in pixels.
     * @param worldY The y coordinate, in pixels.
     * @param camera The Camera to use when factoring in which tiles to return.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    hasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): boolean;

    /**
     * The LayerData object that is currently selected in the map. You can set this property using
     * any type supported by setLayer.
     */
    layer: Phaser.Tilemaps.LayerData;

    /**
     * Puts a tile at the given tile coordinates in the specified layer. You can pass in either an index
     * or a Tile object. If you pass in a Tile, all attributes will be copied over to the specified
     * location. If you pass in an index, only the index at the specified location will be changed.
     * Collision information will be recalculated at the specified location.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tile The index of this tile to set or a Tile object.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    putTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile;

    /**
     * Puts a tile at the given world coordinates (pixels) in the specified layer. You can pass in either
     * an index or a Tile object. If you pass in a Tile, all attributes will be copied over to the
     * specified location. If you pass in an index, only the index at the specified location will be
     * changed. Collision information will be recalculated at the specified location.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tile The index of this tile to set or a Tile object.
     * @param worldX The x coordinate, in pixels.
     * @param worldY The y coordinate, in pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    putTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile;

    /**
     * Puts an array of tiles or a 2D array of tiles at the given tile coordinates in the specified
     * layer. The array can be composed of either tile indexes or Tile objects. If you pass in a Tile,
     * all attributes will be copied over to the specified location. If you pass in an index, only the
     * index at the specified location will be changed. Collision information will be recalculated
     * within the region tiles were changed.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tile A row (array) or grid (2D array) of Tiles or tile indexes to place.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    putTilesAt(tile: number[] | number[][] | Phaser.Tilemaps.Tile[] | Phaser.Tilemaps.Tile[][], tileX: number, tileY: number, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
     * specified layer. Each tile will receive a new index. If an array of indexes is passed in, then
     * those will be used for randomly assigning new tile indexes. If an array is not provided, the
     * indexes found within the region (excluding -1) will be used for randomly assigning new tile
     * indexes. This method only modifies tile indexes and does not change collision information.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param indexes An array of indexes to randomly draw from during randomization.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    randomize(tileX?: number, tileY?: number, width?: number, height?: number, indexes?: number[], layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Calculates interesting faces at the given tile coordinates of the specified layer. Interesting
     * faces are used internally for optimizing collisions against tiles. This method is mostly used
     * internally to optimize recalculating faces when only one tile has been changed.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    calculateFacesAt(tileX: number, tileY: number, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Calculates interesting faces within the rectangular area specified (in tile coordinates) of the
     * layer. Interesting faces are used internally for optimizing collisions against tiles. This method
     * is mostly used internally.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    calculateFacesWithin(tileX?: number, tileY?: number, width?: number, height?: number, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Removes the given TilemapLayer from this Tilemap without destroying it.
     *
     * If no layer is specified, the maps current layer is used.
     * @param layer The tile layer to be removed.
     */
    removeLayer(layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Destroys the given TilemapLayer and removes it from this Tilemap.
     *
     * If no layer is specified, the maps current layer is used.
     * @param layer The tile layer to be destroyed.
     */
    destroyLayer(layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Removes all Tilemap Layers from this Tilemap and calls `destroy` on each of them.
     */
    removeAllLayers(): this;

    /**
     * Removes the given Tile, or an array of Tiles, from the layer to which they belong,
     * and optionally recalculates the collision information.
     * @param tiles The Tile to remove, or an array of Tiles.
     * @param replaceIndex After removing the Tile, insert a brand new Tile into its location with the given index. Leave as -1 to just remove the tile. Default -1.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     */
    removeTile(tiles: Phaser.Tilemaps.Tile | Phaser.Tilemaps.Tile[], replaceIndex?: number, recalculateFaces?: boolean): Phaser.Tilemaps.Tile[];

    /**
     * Removes the tile at the given tile coordinates in the specified layer and updates the layers collision information.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param replaceWithNull If `true` (the default), this will replace the tile at the specified location with null instead of a Tile with an index of -1.
     * @param recalculateFaces If `true` (the default), the faces data will be recalculated.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    removeTileAt(tileX: number, tileY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile;

    /**
     * Removes the tile at the given world coordinates in the specified layer and updates the layers collision information.
     *
     * If no layer is specified, the maps current layer is used.
     * @param worldX The x coordinate, in pixels.
     * @param worldY The y coordinate, in pixels.
     * @param replaceWithNull If `true` (the default), this will replace the tile at the specified location with null instead of a Tile with an index of -1.
     * @param recalculateFaces If `true` (the default), the faces data will be recalculated.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    removeTileAtWorldXY(worldX: number, worldY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tile;

    /**
     * Draws a debug representation of the layer to the given Graphics object. This is helpful when you want to
     * get a quick idea of which of your tiles are colliding and which have interesting faces. The tiles
     * are drawn starting at (0, 0) in the Graphics, allowing you to place the debug representation
     * wherever you want on the screen.
     *
     * If no layer is specified, the maps current layer is used.
     *
     * **Note:** This method currently only works with orthogonal tilemap layers.
     * @param graphics The target Graphics object to draw upon.
     * @param styleConfig An object specifying the colors to use for the debug drawing.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig?: Phaser.Types.Tilemaps.StyleConfig, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Draws a debug representation of all layers within this Tilemap to the given Graphics object.
     *
     * This is helpful when you want to get a quick idea of which of your tiles are colliding and which
     * have interesting faces. The tiles are drawn starting at (0, 0) in the Graphics, allowing you to
     * place the debug representation wherever you want on the screen.
     * @param graphics The target Graphics object to draw upon.
     * @param styleConfig An object specifying the colors to use for the debug drawing.
     */
    renderDebugFull(graphics: Phaser.GameObjects.Graphics, styleConfig?: Phaser.Types.Tilemaps.StyleConfig): this;

    /**
     * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
     * `findIndex` and updates their index to match `newIndex`. This only modifies the index and does
     * not change collision information.
     *
     * If no layer is specified, the maps current layer is used.
     * @param findIndex The index of the tile to search for.
     * @param newIndex The index of the tile to replace it with.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    replaceByIndex(findIndex: number, newIndex: number, tileX?: number, tileY?: number, width?: number, height?: number, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Sets collision on the given tile or tiles within a layer by index. You can pass in either a
     * single numeric index or an array of indexes: [2, 3, 15, 20]. The `collides` parameter controls if
     * collision will be enabled (true) or disabled (false).
     *
     * If no layer is specified, the maps current layer is used.
     * @param indexes Either a single tile index, or an array of tile indexes.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The tile layer to use. If not given the current layer is used.
     * @param updateLayer If true, updates the current tiles on the layer. Set to false if no tiles have been placed for significant performance boost. Default true.
     */
    setCollision(indexes: number | any[], collides?: boolean, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer, updateLayer?: boolean): Phaser.Tilemaps.Tilemap;

    /**
     * Sets collision on a range of tiles in a layer whose index is between the specified `start` and
     * `stop` (inclusive). Calling this with a start value of 10 and a stop value of 14 would set
     * collision for tiles 10, 11, 12, 13 and 14. The `collides` parameter controls if collision will be
     * enabled (true) or disabled (false).
     *
     * If no layer is specified, the maps current layer is used.
     * @param start The first index of the tile to be set for collision.
     * @param stop The last index of the tile to be set for collision.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    setCollisionBetween(start: number, stop: number, collides?: boolean, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Sets collision on the tiles within a layer by checking tile properties. If a tile has a property
     * that matches the given properties object, its collision flag will be set. The `collides`
     * parameter controls if collision will be enabled (true) or disabled (false). Passing in
     * `{ collides: true }` would update the collision flag on any tiles with a "collides" property that
     * has a value of true. Any tile that doesn't have "collides" set to true will be ignored. You can
     * also use an array of values, e.g. `{ types: ["stone", "lava", "sand" ] }`. If a tile has a
     * "types" property that matches any of those values, its collision flag will be updated.
     *
     * If no layer is specified, the maps current layer is used.
     * @param properties An object with tile properties and corresponding values that should be checked.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    setCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Sets collision on all tiles in the given layer, except for tiles that have an index specified in
     * the given array. The `collides` parameter controls if collision will be enabled (true) or
     * disabled (false). Tile indexes not currently in the layer are not affected.
     *
     * If no layer is specified, the maps current layer is used.
     * @param indexes An array of the tile indexes to not be counted for collision.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    setCollisionByExclusion(indexes: number[], collides?: boolean, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Sets collision on the tiles within a layer by checking each tiles collision group data
     * (typically defined in Tiled within the tileset collision editor). If any objects are found within
     * a tiles collision group, the tiles colliding information will be set. The `collides` parameter
     * controls if collision will be enabled (true) or disabled (false).
     *
     * If no layer is specified, the maps current layer is used.
     * @param collides If true it will enable collision. If false it will clear collision.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    setCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Sets a global collision callback for the given tile index within the layer. This will affect all
     * tiles on this layer that have the same index. If a callback is already set for the tile index it
     * will be replaced. Set the callback to null to remove it. If you want to set a callback for a tile
     * at a specific location on the map then see `setTileLocationCallback`.
     *
     * If no layer is specified, the maps current layer is used.
     * @param indexes Either a single tile index, or an array of tile indexes to have a collision callback set for. All values should be integers.
     * @param callback The callback that will be invoked when the tile is collided with.
     * @param callbackContext The context under which the callback is called.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    setTileIndexCallback(indexes: number | number[], callback: Function, callbackContext: object, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Sets a collision callback for the given rectangular area (in tile coordinates) within the layer.
     * If a callback is already set for the tile index it will be replaced. Set the callback to null to
     * remove it.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param callback The callback that will be invoked when the tile is collided with.
     * @param callbackContext The context under which the callback is called.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    setTileLocationCallback(tileX: number, tileY: number, width: number, height: number, callback: Function, callbackContext?: object, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Sets the current layer to the LayerData associated with `layer`.
     * @param layer The name of the layer from Tiled, the index of the layer in the map or a TilemapLayer. If not given will default to the maps current layer index.
     */
    setLayer(layer?: string | number | Phaser.Tilemaps.TilemapLayer): this;

    /**
     * Sets the base tile size for the map. Note: this does not necessarily match the tileWidth and
     * tileHeight for all layers. This also updates the base size on all tiles across all layers.
     * @param tileWidth The width of the tiles the map uses for calculations.
     * @param tileHeight The height of the tiles the map uses for calculations.
     */
    setBaseTileSize(tileWidth: number, tileHeight: number): this;

    /**
     * Sets the tile size for a specific `layer`. Note: this does not necessarily match the maps
     * tileWidth and tileHeight for all layers. This will set the tile size for the layer and any
     * tiles the layer has.
     * @param tileWidth The width of the tiles (in pixels) in the layer.
     * @param tileHeight The height of the tiles (in pixels) in the layer.
     * @param layer The name of the layer from Tiled, the index of the layer in the map or a TilemapLayer. If not given will default to the maps current layer index.
     */
    setLayerTileSize(tileWidth: number, tileHeight: number, layer?: string | number | Phaser.Tilemaps.TilemapLayer): this;

    /**
     * Shuffles the tiles in a rectangular region (specified in tile coordinates) within the given
     * layer. It will only randomize the tiles in that area, so if they're all the same nothing will
     * appear to have changed! This method only modifies tile indexes and does not change collision
     * information.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    shuffle(tileX?: number, tileY?: number, width?: number, height?: number, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
     * `indexA` and swaps then with `indexB`. This only modifies the index and does not change collision
     * information.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileA First tile index.
     * @param tileB Second tile index.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    swapByIndex(tileA: number, tileB: number, tileX?: number, tileY?: number, width?: number, height?: number, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Converts from tile X coordinates (tile units) to world X coordinates (pixels), factoring in the
     * layers position, scale and scroll.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    tileToWorldX(tileX: number, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): number;

    /**
     * Converts from tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
     * layers position, scale and scroll.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    tileToWorldY(tileY: number, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): number;

    /**
     * Converts from tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
     * layers position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     *
     * If no layer is specified, the maps current layer is used.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param vec2 A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    tileToWorldXY(tileX: number, tileY: number, vec2?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Math.Vector2;

    /**
     * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
     * specified layer. Each tile will receive a new index. New indexes are drawn from the given
     * weightedIndexes array. An example weighted array:
     *
     * [
     *  { index: 6, weight: 4 },    // Probability of index 6 is 4 / 8
     *  { index: 7, weight: 2 },    // Probability of index 7 would be 2 / 8
     *  { index: 8, weight: 1.5 },  // Probability of index 8 would be 1.5 / 8
     *  { index: 26, weight: 0.5 }  // Probability of index 27 would be 0.5 / 8
     * ]
     *
     * The probability of any index being picked is (the indexs weight) / (sum of all weights). This
     * method only modifies tile indexes and does not change collision information.
     *
     * If no layer is specified, the maps current layer is used.
     * @param weightedIndexes An array of objects to randomly draw from during randomization. They should be in the form: { index: 0, weight: 4 } or { index: [0, 1], weight: 4 } if you wish to draw from multiple tile indexes.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    weightedRandomize(weightedIndexes: object[], tileX?: number, tileY?: number, width?: number, height?: number, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Tilemaps.Tilemap;

    /**
     * Converts from world X coordinates (pixels) to tile X coordinates (tile units), factoring in the
     * layers position, scale and scroll.
     *
     * If no layer is specified, the maps current layer is used.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    worldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): number;

    /**
     * Converts from world Y coordinates (pixels) to tile Y coordinates (tile units), factoring in the
     * layers position, scale and scroll.
     *
     * If no layer is specified, the maps current layer is used.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    worldToTileY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): number;

    /**
     * Converts from world XY coordinates (pixels) to tile XY coordinates (tile units), factoring in the
     * layers position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     *
     * If no layer is specified, the maps current layer is used.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param vec2 A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     * @param layer The tile layer to use. If not given the current layer is used.
     */
    worldToTileXY(worldX: number, worldY: number, snapToFloor?: boolean, vec2?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera, layer?: string | number | Phaser.Tilemaps.TilemapLayer): Phaser.Math.Vector2;

    /**
     * Removes all layer data from this Tilemap and nulls the scene reference. This will destroy any
     * TilemapLayers that have been created.
     */
    destroy(): void;

  }

  /**
   * A Tilemap Layer is a Game Object that renders LayerData from a Tilemap when used in combination
   * with one, or more, Tilesets.
   */
  class TilemapLayer extends Phaser.GameObjects.GameObject implements Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.ComputedSize, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
    /**
     *
     * @param scene The Scene to which this Game Object belongs.
     * @param tilemap The Tilemap this layer is a part of.
     * @param layerIndex The index of the LayerData associated with this layer.
     * @param tileset The tileset, or an array of tilesets, used to render this layer. Can be a string or a Tileset object.
     * @param x The world x position where the top left of this layer will be placed. Default 0.
     * @param y The world y position where the top left of this layer will be placed. Default 0.
     */
    constructor(scene: Phaser.Scene, tilemap: Phaser.Tilemaps.Tilemap, layerIndex: number, tileset: string | string[] | Phaser.Tilemaps.Tileset | Phaser.Tilemaps.Tileset[], x?: number, y?: number);

    /**
     * Used internally by physics system to perform fast type checks.
     */
    readonly isTilemap: boolean;

    /**
     * The Tilemap that this layer is a part of.
     */
    tilemap: Phaser.Tilemaps.Tilemap;

    /**
     * The index of the LayerData associated with this layer.
     */
    layerIndex: number;

    /**
     * The LayerData associated with this layer. LayerData can only be associated with one
     * tilemap layer.
     */
    layer: Phaser.Tilemaps.LayerData;

    /**
     * An array of `Tileset` objects associated with this layer.
     */
    tileset: Phaser.Tilemaps.Tileset[];

    /**
     * The total number of tiles drawn by the renderer in the last frame.
     */
    readonly tilesDrawn: number;

    /**
     * The total number of tiles in this layer. Updated every frame.
     */
    readonly tilesTotal: number;

    /**
     * Used internally during rendering. This holds the tiles that are visible within the Camera.
     */
    culledTiles: Phaser.Tilemaps.Tile[];

    /**
     * You can control if the camera should cull tiles on this layer before rendering them or not.
     *
     * By default the camera will try to cull the tiles in this layer, to avoid over-drawing to the renderer.
     *
     * However, there are some instances when you may wish to disable this, and toggling this flag allows
     * you to do so. Also see `setSkipCull` for a chainable method that does the same thing.
     */
    skipCull: boolean;

    /**
     * The amount of extra tiles to add into the cull rectangle when calculating its horizontal size.
     *
     * See the method `setCullPadding` for more details.
     */
    cullPaddingX: number;

    /**
     * The amount of extra tiles to add into the cull rectangle when calculating its vertical size.
     *
     * See the method `setCullPadding` for more details.
     */
    cullPaddingY: number;

    /**
     * The callback that is invoked when the tiles are culled.
     *
     * It will call a different function based on the map orientation:
     *
     * Orthogonal (the default) is `TilemapComponents.CullTiles`
     * Isometric is `TilemapComponents.IsometricCullTiles`
     * Hexagonal is `TilemapComponents.HexagonalCullTiles`
     * Staggered is `TilemapComponents.StaggeredCullTiles`
     *
     * However, you can override this to call any function you like.
     *
     * It will be sent 4 arguments:
     *
     * 1. The Phaser.Tilemaps.LayerData object for this Layer
     * 2. The Camera that is culling the layer. You can check its `dirty` property to see if it has changed since the last cull.
     * 3. A reference to the `culledTiles` array, which should be used to store the tiles you want rendered.
     * 4. The Render Order constant.
     *
     * See the `TilemapComponents.CullTiles` source code for details on implementing your own culling system.
     */
    cullCallback: Function;

    /**
     * An array holding the mapping between the tile indexes and the tileset they belong to.
     */
    gidMap: Phaser.Tilemaps.Tileset[];

    /**
     * Sets the rendering (draw) order of the tiles in this layer.
     *
     * The default is 'right-down', meaning it will order the tiles starting from the top-left,
     * drawing to the right and then moving down to the next row.
     *
     * The draw orders are:
     *
     * 0 = right-down
     * 1 = left-down
     * 2 = right-up
     * 3 = left-up
     *
     * Setting the render order does not change the tiles or how they are stored in the layer,
     * it purely impacts the order in which they are rendered.
     *
     * You can provide either an integer (0 to 3), or the string version of the order.
     * @param renderOrder The render (draw) order value. Either an integer between 0 and 3, or a string: 'right-down', 'left-down', 'right-up' or 'left-up'.
     */
    setRenderOrder(renderOrder: number | string): this;

    /**
     * Calculates interesting faces at the given tile coordinates of the specified layer. Interesting
     * faces are used internally for optimizing collisions against tiles. This method is mostly used
     * internally to optimize recalculating faces when only one tile has been changed.
     * @param tileX The x coordinate.
     * @param tileY The y coordinate.
     */
    calculateFacesAt(tileX: number, tileY: number): this;

    /**
     * Calculates interesting faces within the rectangular area specified (in tile coordinates) of the
     * layer. Interesting faces are used internally for optimizing collisions against tiles. This method
     * is mostly used internally.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     */
    calculateFacesWithin(tileX?: number, tileY?: number, width?: number, height?: number): this;

    /**
     * Creates a Sprite for every object matching the given tile indexes in the layer. You can
     * optionally specify if each tile will be replaced with a new tile after the Sprite has been
     * created. This is useful if you want to lay down special tiles in a level that are converted to
     * Sprites, but want to replace the tile itself with a floor tile or similar once converted.
     * @param indexes The tile index, or array of indexes, to create Sprites from.
     * @param replacements The tile index, or array of indexes, to change a converted
     * tile to. Set to `null` to leave the tiles unchanged. If an array is given, it is assumed to be a
     * one-to-one mapping with the indexes array.
     * @param spriteConfig The config object to pass into the Sprite creator (i.e.
     * scene.make.sprite).
     * @param scene The Scene to create the Sprites within.
     * @param camera The Camera to use when determining the world XY
     */
    createFromTiles(indexes: number | any[], replacements: number | any[], spriteConfig?: Phaser.Types.GameObjects.Sprite.SpriteConfig, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.GameObjects.Sprite[];

    /**
     * Returns the tiles in the given layer that are within the cameras viewport.
     * This is used internally during rendering.
     * @param camera The Camera to run the cull check against.
     */
    cull(camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

    /**
     * Copies the tiles in the source rectangular area to a new destination (all specified in tile
     * coordinates) within the layer. This copies all tile properties & recalculates collision
     * information in the destination region.
     * @param srcTileX The x coordinate of the area to copy from, in tiles, not pixels.
     * @param srcTileY The y coordinate of the area to copy from, in tiles, not pixels.
     * @param width The width of the area to copy, in tiles, not pixels.
     * @param height The height of the area to copy, in tiles, not pixels.
     * @param destTileX The x coordinate of the area to copy to, in tiles, not pixels.
     * @param destTileY The y coordinate of the area to copy to, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     */
    copy(srcTileX: number, srcTileY: number, width: number, height: number, destTileX: number, destTileY: number, recalculateFaces?: boolean): this;

    /**
     * Sets the tiles in the given rectangular area (in tile coordinates) of the layer with the
     * specified index. Tiles will be set to collide if the given index is a colliding index.
     * Collision information in the region will be recalculated.
     * @param index The tile index to fill the area with.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     */
    fill(index: number, tileX?: number, tileY?: number, width?: number, height?: number, recalculateFaces?: boolean): this;

    /**
     * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
     * filter callback function. Any tiles that pass the filter test (i.e. where the callback returns
     * true) will returned as a new array. Similar to Array.prototype.Filter in vanilla JS.
     * @param callback The callback. Each tile in the given area will be passed to this
     * callback as the first and only parameter. The callback should return true for tiles that pass the
     * filter.
     * @param context The context under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to filter.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     */
    filterTiles(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions): Phaser.Tilemaps.Tile[];

    /**
     * Searches the entire map layer for the first tile matching the given index, then returns that Tile
     * object. If no match is found, it returns null. The search starts from the top-left tile and
     * continues horizontally until it hits the end of the row, then it drops down to the next column.
     * If the reverse boolean is true, it scans starting from the bottom-right corner traveling up to
     * the top-left.
     * @param index The tile index value to search for.
     * @param skip The number of times to skip a matching tile before returning. Default 0.
     * @param reverse If true it will scan the layer in reverse, starting at the bottom-right. Otherwise it scans from the top-left. Default false.
     */
    findByIndex(index: number, skip?: number, reverse?: boolean): Phaser.Tilemaps.Tile;

    /**
     * Find the first tile in the given rectangular area (in tile coordinates) of the layer that
     * satisfies the provided testing function. I.e. finds the first tile for which `callback` returns
     * true. Similar to Array.prototype.find in vanilla JS.
     * @param callback The callback. Each tile in the given area will be passed to this callback as the first and only parameter.
     * @param context The context under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to search.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to search.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     */
    findTile(callback: FindTileCallback, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions): Phaser.Tilemaps.Tile;

    /**
     * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
     * callback. Similar to Array.prototype.forEach in vanilla JS.
     * @param callback The callback. Each tile in the given area will be passed to this callback as the first and only parameter.
     * @param context The context, or scope, under which the callback should be run.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area to search.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area to search.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     */
    forEachTile(callback: EachTileCallback, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions): this;

    /**
     * Gets a tile at the given tile coordinates from the given layer.
     * @param tileX X position to get the tile from (given in tile units, not pixels).
     * @param tileY Y position to get the tile from (given in tile units, not pixels).
     * @param nonNull If true getTile won't return null for empty tiles, but a Tile object with an index of -1. Default false.
     */
    getTileAt(tileX: number, tileY: number, nonNull?: boolean): Phaser.Tilemaps.Tile;

    /**
     * Gets a tile at the given world coordinates from the given layer.
     * @param worldX X position to get the tile from (given in pixels)
     * @param worldY Y position to get the tile from (given in pixels)
     * @param nonNull If true, function won't return null for empty tiles, but a Tile object with an index of -1. Default false.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    getTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

    /**
     * Gets the tiles in the given rectangular area (in tile coordinates) of the layer.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     */
    getTilesWithin(tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions): Phaser.Tilemaps.Tile[];

    /**
     * Gets the tiles that overlap with the given shape in the given layer. The shape must be a Circle,
     * Line, Rectangle or Triangle. The shape should be in world coordinates.
     * @param shape A shape in world (pixel) coordinates
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param camera The Camera to use when factoring in which tiles to return.
     */
    getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

    /**
     * Gets the tiles in the given rectangular area (in world coordinates) of the layer.
     * @param worldX The world x coordinate for the top-left of the area.
     * @param worldY The world y coordinate for the top-left of the area.
     * @param width The width of the area.
     * @param height The height of the area.
     * @param filteringOptions Optional filters to apply when getting the tiles.
     * @param camera The Camera to use when factoring in which tiles to return.
     */
    getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: Phaser.Types.Tilemaps.FilteringOptions, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

    /**
     * Checks if there is a tile at the given location (in tile coordinates) in the given layer. Returns
     * false if there is no tile or if the tile at that location has an index of -1.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     */
    hasTileAt(tileX: number, tileY: number): boolean;

    /**
     * Checks if there is a tile at the given location (in world coordinates) in the given layer. Returns
     * false if there is no tile or if the tile at that location has an index of -1.
     * @param worldX The x coordinate, in pixels.
     * @param worldY The y coordinate, in pixels.
     * @param camera The Camera to use when factoring in which tiles to return.
     */
    hasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera): boolean;

    /**
     * Puts a tile at the given tile coordinates in the specified layer. You can pass in either an index
     * or a Tile object. If you pass in a Tile, all attributes will be copied over to the specified
     * location. If you pass in an index, only the index at the specified location will be changed.
     * Collision information will be recalculated at the specified location.
     * @param tile The index of this tile to set or a Tile object.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     */
    putTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

    /**
     * Puts a tile at the given world coordinates (pixels) in the specified layer. You can pass in either
     * an index or a Tile object. If you pass in a Tile, all attributes will be copied over to the
     * specified location. If you pass in an index, only the index at the specified location will be
     * changed. Collision information will be recalculated at the specified location.
     * @param tile The index of this tile to set or a Tile object.
     * @param worldX The x coordinate, in pixels.
     * @param worldY The y coordinate, in pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    putTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

    /**
     * Puts an array of tiles or a 2D array of tiles at the given tile coordinates in the specified
     * layer. The array can be composed of either tile indexes or Tile objects. If you pass in a Tile,
     * all attributes will be copied over to the specified location. If you pass in an index, only the
     * index at the specified location will be changed. Collision information will be recalculated
     * within the region tiles were changed.
     * @param tile A row (array) or grid (2D array) of Tiles or tile indexes to place.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     */
    putTilesAt(tile: number[] | number[][] | Phaser.Tilemaps.Tile[] | Phaser.Tilemaps.Tile[][], tileX: number, tileY: number, recalculateFaces?: boolean): this;

    /**
     * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
     * specified layer. Each tile will receive a new index. If an array of indexes is passed in, then
     * those will be used for randomly assigning new tile indexes. If an array is not provided, the
     * indexes found within the region (excluding -1) will be used for randomly assigning new tile
     * indexes. This method only modifies tile indexes and does not change collision information.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param indexes An array of indexes to randomly draw from during randomization.
     */
    randomize(tileX?: number, tileY?: number, width?: number, height?: number, indexes?: number[]): this;

    /**
     * Removes the tile at the given tile coordinates in the specified layer and updates the layers
     * collision information.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param replaceWithNull If true, this will replace the tile at the specified location with null instead of a Tile with an index of -1. Default true.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     */
    removeTileAt(tileX: number, tileY: number, replaceWithNull?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

    /**
     * Removes the tile at the given world coordinates in the specified layer and updates the layers
     * collision information.
     * @param worldX The x coordinate, in pixels.
     * @param worldY The y coordinate, in pixels.
     * @param replaceWithNull If true, this will replace the tile at the specified location with null instead of a Tile with an index of -1. Default true.
     * @param recalculateFaces `true` if the faces data should be recalculated. Default true.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    removeTileAtWorldXY(worldX: number, worldY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

    /**
     * Draws a debug representation of the layer to the given Graphics. This is helpful when you want to
     * get a quick idea of which of your tiles are colliding and which have interesting faces. The tiles
     * are drawn starting at (0, 0) in the Graphics, allowing you to place the debug representation
     * wherever you want on the screen.
     * @param graphics The target Graphics object to draw upon.
     * @param styleConfig An object specifying the colors to use for the debug drawing.
     */
    renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig?: Phaser.Types.Tilemaps.StyleConfig): this;

    /**
     * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
     * `findIndex` and updates their index to match `newIndex`. This only modifies the index and does
     * not change collision information.
     * @param findIndex The index of the tile to search for.
     * @param newIndex The index of the tile to replace it with.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     */
    replaceByIndex(findIndex: number, newIndex: number, tileX?: number, tileY?: number, width?: number, height?: number): this;

    /**
     * You can control if the Cameras should cull tiles before rendering them or not.
     *
     * By default the camera will try to cull the tiles in this layer, to avoid over-drawing to the renderer.
     *
     * However, there are some instances when you may wish to disable this.
     * @param value Set to `true` to stop culling tiles. Set to `false` to enable culling again. Default true.
     */
    setSkipCull(value?: boolean): this;

    /**
     * When a Camera culls the tiles in this layer it does so using its view into the world, building up a
     * rectangle inside which the tiles must exist or they will be culled. Sometimes you may need to expand the size
     * of this 'cull rectangle', especially if you plan on rotating the Camera viewing the layer. Do so
     * by providing the padding values. The values given are in tiles, not pixels. So if the tile width was 32px
     * and you set `paddingX` to be 4, it would add 32px x 4 to the cull rectangle (adjusted for scale)
     * @param paddingX The amount of extra horizontal tiles to add to the cull check padding. Default 1.
     * @param paddingY The amount of extra vertical tiles to add to the cull check padding. Default 1.
     */
    setCullPadding(paddingX?: number, paddingY?: number): this;

    /**
     * Sets collision on the given tile or tiles within a layer by index. You can pass in either a
     * single numeric index or an array of indexes: [2, 3, 15, 20]. The `collides` parameter controls if
     * collision will be enabled (true) or disabled (false).
     * @param indexes Either a single tile index, or an array of tile indexes.
     * @param collides If true it will enable collision. If false it will clear collision. Default true.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update. Default true.
     * @param updateLayer If true, updates the current tiles on the layer. Set to false if no tiles have been placed for significant performance boost. Default true.
     */
    setCollision(indexes: number | any[], collides?: boolean, recalculateFaces?: boolean, updateLayer?: boolean): this;

    /**
     * Sets collision on a range of tiles in a layer whose index is between the specified `start` and
     * `stop` (inclusive). Calling this with a start value of 10 and a stop value of 14 would set
     * collision for tiles 10, 11, 12, 13 and 14. The `collides` parameter controls if collision will be
     * enabled (true) or disabled (false).
     * @param start The first index of the tile to be set for collision.
     * @param stop The last index of the tile to be set for collision.
     * @param collides If true it will enable collision. If false it will clear collision. Default true.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update. Default true.
     */
    setCollisionBetween(start: number, stop: number, collides?: boolean, recalculateFaces?: boolean): this;

    /**
     * Sets collision on the tiles within a layer by checking tile properties. If a tile has a property
     * that matches the given properties object, its collision flag will be set. The `collides`
     * parameter controls if collision will be enabled (true) or disabled (false). Passing in
     * `{ collides: true }` would update the collision flag on any tiles with a "collides" property that
     * has a value of true. Any tile that doesn't have "collides" set to true will be ignored. You can
     * also use an array of values, e.g. `{ types: ["stone", "lava", "sand" ] }`. If a tile has a
     * "types" property that matches any of those values, its collision flag will be updated.
     * @param properties An object with tile properties and corresponding values that should be checked.
     * @param collides If true it will enable collision. If false it will clear collision. Default true.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update. Default true.
     */
    setCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean): this;

    /**
     * Sets collision on all tiles in the given layer, except for tiles that have an index specified in
     * the given array. The `collides` parameter controls if collision will be enabled (true) or
     * disabled (false). Tile indexes not currently in the layer are not affected.
     * @param indexes An array of the tile indexes to not be counted for collision.
     * @param collides If true it will enable collision. If false it will clear collision. Default true.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update. Default true.
     */
    setCollisionByExclusion(indexes: number[], collides?: boolean, recalculateFaces?: boolean): this;

    /**
     * Sets collision on the tiles within a layer by checking each tiles collision group data
     * (typically defined in Tiled within the tileset collision editor). If any objects are found within
     * a tiles collision group, the tile's colliding information will be set. The `collides` parameter
     * controls if collision will be enabled (true) or disabled (false).
     * @param collides If true it will enable collision. If false it will clear collision. Default true.
     * @param recalculateFaces Whether or not to recalculate the tile faces after the update. Default true.
     */
    setCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean): this;

    /**
     * Sets a global collision callback for the given tile index within the layer. This will affect all
     * tiles on this layer that have the same index. If a callback is already set for the tile index it
     * will be replaced. Set the callback to null to remove it. If you want to set a callback for a tile
     * at a specific location on the map then see setTileLocationCallback.
     * @param indexes Either a single tile index, or an array of tile indexes to have a collision callback set for.
     * @param callback The callback that will be invoked when the tile is collided with.
     * @param callbackContext The context under which the callback is called.
     */
    setTileIndexCallback(indexes: number | number[], callback: Function, callbackContext: object): this;

    /**
     * Sets a collision callback for the given rectangular area (in tile coordinates) within the layer.
     * If a callback is already set for the tile index it will be replaced. Set the callback to null to
     * remove it.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     * @param callback The callback that will be invoked when the tile is collided with.
     * @param callbackContext The context, or scope, under which the callback is invoked.
     */
    setTileLocationCallback(tileX?: number, tileY?: number, width?: number, height?: number, callback?: Function, callbackContext?: object): this;

    /**
     * Shuffles the tiles in a rectangular region (specified in tile coordinates) within the given
     * layer. It will only randomize the tiles in that area, so if they're all the same nothing will
     * appear to have changed! This method only modifies tile indexes and does not change collision
     * information.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     */
    shuffle(tileX?: number, tileY?: number, width?: number, height?: number): this;

    /**
     * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
     * `indexA` and swaps then with `indexB`. This only modifies the index and does not change collision
     * information.
     * @param tileA First tile index.
     * @param tileB Second tile index.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     */
    swapByIndex(tileA: number, tileB: number, tileX?: number, tileY?: number, width?: number, height?: number): this;

    /**
     * Converts from tile X coordinates (tile units) to world X coordinates (pixels), factoring in the
     * layers position, scale and scroll.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    tileToWorldX(tileX: number, camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Converts from tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
     * layers position, scale and scroll.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    tileToWorldY(tileY: number, camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Converts from tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
     * layers position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param tileX The x coordinate, in tiles, not pixels.
     * @param tileY The y coordinate, in tiles, not pixels.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    tileToWorldXY(tileX: number, tileY: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

    /**
     * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
     * specified layer. Each tile will receive a new index. New indexes are drawn from the given
     * weightedIndexes array. An example weighted array:
     *
     * [
     *  { index: 6, weight: 4 },    // Probability of index 6 is 4 / 8
     *  { index: 7, weight: 2 },    // Probability of index 7 would be 2 / 8
     *  { index: 8, weight: 1.5 },  // Probability of index 8 would be 1.5 / 8
     *  { index: 26, weight: 0.5 }  // Probability of index 27 would be 0.5 / 8
     * ]
     *
     * The probability of any index being choose is (the index's weight) / (sum of all weights). This
     * method only modifies tile indexes and does not change collision information.
     * @param weightedIndexes An array of objects to randomly draw from during randomization. They should be in the form: { index: 0, weight: 4 } or { index: [0, 1], weight: 4 } if you wish to draw from multiple tile indexes.
     * @param tileX The left most tile index (in tile coordinates) to use as the origin of the area.
     * @param tileY The top most tile index (in tile coordinates) to use as the origin of the area.
     * @param width How many tiles wide from the `tileX` index the area will be.
     * @param height How many tiles tall from the `tileY` index the area will be.
     */
    weightedRandomize(weightedIndexes: object[], tileX?: number, tileY?: number, width?: number, height?: number): this;

    /**
     * Converts from world X coordinates (pixels) to tile X coordinates (tile units), factoring in the
     * layers position, scale and scroll.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    worldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Converts from world Y coordinates (pixels) to tile Y coordinates (tile units), factoring in the
     * layers position, scale and scroll.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    worldToTileY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

    /**
     * Converts from world XY coordinates (pixels) to tile XY coordinates (tile units), factoring in the
     * layers position, scale and scroll. This will return a new Vector2 object or update the given
     * `point` object.
     * @param worldX The x coordinate to be converted, in pixels, not tiles.
     * @param worldY The y coordinate to be converted, in pixels, not tiles.
     * @param snapToFloor Whether or not to round the tile coordinate down to the nearest integer.
     * @param point A Vector2 to store the coordinates in. If not given a new Vector2 is created.
     * @param camera The Camera to use when calculating the tile index from the world values.
     */
    worldToTileXY(worldX: number, worldY: number, snapToFloor?: boolean, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

    /**
     * Destroys this TilemapLayer and removes its link to the associated LayerData.
     * @param removeFromTilemap Remove this layer from the parent Tilemap? Default true.
     */
    destroy(removeFromTilemap?: boolean): void;

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

  }

  /**
   * A Tileset is a combination of an image containing the tiles and a container for data about
   * each tile.
   */
  class Tileset {
    /**
     *
     * @param name The name of the tileset in the map data.
     * @param firstgid The first tile index this tileset contains.
     * @param tileWidth Width of each tile (in pixels). Default 32.
     * @param tileHeight Height of each tile (in pixels). Default 32.
     * @param tileMargin The margin around all tiles in the sheet (in pixels). Default 0.
     * @param tileSpacing The spacing between each tile in the sheet (in pixels). Default 0.
     * @param tileProperties Custom properties defined per tile in the Tileset.
     * These typically are custom properties created in Tiled when editing a tileset. Default {}.
     * @param tileData Data stored per tile. These typically are created in Tiled
     * when editing a tileset, e.g. from Tiled's tile collision editor or terrain editor. Default {}.
     */
    constructor(name: string, firstgid: number, tileWidth?: number, tileHeight?: number, tileMargin?: number, tileSpacing?: number, tileProperties?: object, tileData?: object);

    /**
     * The name of the Tileset.
     */
    name: string;

    /**
     * The starting index of the first tile index this Tileset contains.
     */
    firstgid: number;

    /**
     * The width of each tile (in pixels). Use setTileSize to change.
     */
    readonly tileWidth: number;

    /**
     * The height of each tile (in pixels). Use setTileSize to change.
     */
    readonly tileHeight: number;

    /**
     * The margin around the tiles in the sheet (in pixels). Use `setSpacing` to change.
     */
    readonly tileMargin: number;

    /**
     * The spacing between each the tile in the sheet (in pixels). Use `setSpacing` to change.
     */
    readonly tileSpacing: number;

    /**
     * Tileset-specific properties per tile that are typically defined in the Tiled editor in the
     * Tileset editor.
     */
    tileProperties: object;

    /**
     * Tileset-specific data per tile that are typically defined in the Tiled editor, e.g. within
     * the Tileset collision editor. This is where collision objects and terrain are stored.
     */
    tileData: object;

    /**
     * The cached image that contains the individual tiles. Use setImage to set.
     */
    readonly image: Phaser.Textures.Texture;

    /**
     * The gl texture used by the WebGL renderer.
     */
    readonly glTexture: WebGLTexture;

    /**
     * The number of tile rows in the the tileset.
     */
    readonly rows: number;

    /**
     * The number of tile columns in the tileset.
     */
    readonly columns: number;

    /**
     * The total number of tiles in the tileset.
     */
    readonly total: number;

    /**
     * The look-up table to specific tile image texture coordinates (UV in pixels). Each element
     * contains the coordinates for a tile in an object of the form {x, y}.
     */
    readonly texCoordinates: object[];

    /**
     * Get a tiles properties that are stored in the Tileset. Returns null if tile index is not
     * contained in this Tileset. This is typically defined in Tiled under the Tileset editor.
     * @param tileIndex The unique id of the tile across all tilesets in the map.
     */
    getTileProperties(tileIndex: number): object | undefined;

    /**
     * Get a tile's data that is stored in the Tileset. Returns null if tile index is not contained
     * in this Tileset. This is typically defined in Tiled and will contain both Tileset collision
     * info and terrain mapping.
     * @param tileIndex The unique id of the tile across all tilesets in the map.
     */
    getTileData(tileIndex: number): object | undefined;

    /**
     * Get a tile's collision group that is stored in the Tileset. Returns null if tile index is not
     * contained in this Tileset. This is typically defined within Tiled's tileset collision editor.
     * @param tileIndex The unique id of the tile across all tilesets in the map.
     */
    getTileCollisionGroup(tileIndex: number): object;

    /**
     * Returns true if and only if this Tileset contains the given tile index.
     * @param tileIndex The unique id of the tile across all tilesets in the map.
     */
    containsTileIndex(tileIndex: number): boolean;

    /**
     * Returns the texture coordinates (UV in pixels) in the Tileset image for the given tile index.
     * Returns null if tile index is not contained in this Tileset.
     * @param tileIndex The unique id of the tile across all tilesets in the map.
     */
    getTileTextureCoordinates(tileIndex: number): object;

    /**
     * Sets the image associated with this Tileset and updates the tile data (rows, columns, etc.).
     * @param texture The image that contains the tiles.
     */
    setImage(texture: Phaser.Textures.Texture): Phaser.Tilemaps.Tileset;

    /**
     * Sets the tile width & height and updates the tile data (rows, columns, etc.).
     * @param tileWidth The width of a tile in pixels.
     * @param tileHeight The height of a tile in pixels.
     */
    setTileSize(tileWidth?: number, tileHeight?: number): Phaser.Tilemaps.Tileset;

    /**
     * Sets the tile margin & spacing and updates the tile data (rows, columns, etc.).
     * @param margin The margin around the tiles in the sheet (in pixels).
     * @param spacing The spacing between the tiles in the sheet (in pixels).
     */
    setSpacing(margin?: number, spacing?: number): Phaser.Tilemaps.Tileset;

    /**
     * Updates tile texture coordinates and tileset data.
     * @param imageWidth The (expected) width of the image to slice.
     * @param imageHeight The (expected) height of the image to slice.
     */
    updateTileData(imageWidth: number, imageHeight: number): Phaser.Tilemaps.Tileset;

  }

  /**
   * Orthogonal Tilemap orientation constant.
   */
  const ORTHOGONAL: number;

  /**
   * Isometric Tilemap orientation constant.
   */
  const ISOMETRIC: number;

  /**
   * Staggered Tilemap orientation constant.
   */
  const STAGGERED: number;

  /**
   * Hexagonal Tilemap orientation constant.
   */
  const HEXAGONAL: number;

}