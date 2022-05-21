/// <reference types="./matter" />

declare type CameraRotateCallback = (camera: Phaser.Cameras.Scene2D.Camera, progress: number, angle: number)=>void;

declare type DataEachCallback = (parent: any, key: string, value: any, ...args: any[])=>void;

declare type ContentLoadedCallback = ()=>void;

declare type CreateCallback = (bob: Phaser.GameObjects.Bob, index: number)=>void;

declare type EachContainerCallback<I> = (item: any, ...args: any[])=>void;

declare type LightForEach = (light: Phaser.GameObjects.Light)=>void;

/**
 * A custom function that will be responsible for wrapping the text.
 */
declare type TextStyleWordWrapCallback = (text: string, textObject: Phaser.GameObjects.Text)=>void;

declare type CenterFunction = (triangle: Phaser.Geom.Triangle)=>void;

declare namespace Phaser {
  /**
   * Phaser Release Version
   */
  const VERSION: string;

  /**
   * This setting will auto-detect if the browser is capable of suppporting WebGL.
   * If it is, it will use the WebGL Renderer. If not, it will fall back to the Canvas Renderer.
   */
  const AUTO: number;

  /**
   * Forces Phaser to only use the Canvas Renderer, regardless if the browser supports
   * WebGL or not.
   */
  const CANVAS: number;

  /**
   * Forces Phaser to use the WebGL Renderer. If the browser does not support it, there is
   * no fallback to Canvas with this setting, so you should trap it and display a suitable
   * message to the user.
   */
  const WEBGL: number;

  /**
   * A Headless Renderer doesn't create either a Canvas or WebGL Renderer. However, it still
   * absolutely relies on the DOM being present and available. This mode is meant for unit testing,
   * not for running Phaser on the server, which is something you really shouldn't do.
   */
  const HEADLESS: number;

  /**
   * In Phaser the value -1 means 'forever' in lots of cases, this const allows you to use it instead
   * to help you remember what the value is doing in your code.
   */
  const FOREVER: number;

  /**
   * Direction constant.
   */
  const NONE: number;

  /**
   * Direction constant.
   */
  const UP: number;

  /**
   * Direction constant.
   */
  const DOWN: number;

  /**
   * Direction constant.
   */
  const LEFT: number;

  /**
   * Direction constant.
   */
  const RIGHT: number;
}

declare type ArcadePhysicsCallback = (object1: Phaser.Types.Physics.Arcade.GameObjectWithBody, object2: Phaser.Types.Physics.Arcade.GameObjectWithBody)=>void;

declare type WebGLContextCallback = (renderer: Phaser.Renderer.WebGL.WebGLRenderer)=>void;

declare type EachListCallback<I> = (item: I, ...args: any[])=>void;

declare type EachMapCallback<E> = (key: string, entry: E)=>void;

declare type EachSetCallback<E> = (entry: E, index: number)=>void;

declare type EachTextureCallback = (texture: Phaser.Textures.Texture, ...args: any[])=>void;

declare type FindTileCallback = (value: Phaser.Tilemaps.Tile, index: number, array: Phaser.Tilemaps.Tile[])=>void;

declare type EachTileCallback = (value: Phaser.Tilemaps.Tile, index: number, array: Phaser.Tilemaps.Tile[])=>void;

declare type TilemapFilterCallback = (value: Phaser.GameObjects.GameObject, index: number, array: Phaser.GameObjects.GameObject[])=>void;

declare type TilemapFindCallback = (value: Phaser.GameObjects.GameObject, index: number, array: Phaser.GameObjects.GameObject[])=>void;

/**
 * Phaser.Class
 */
declare class Class {
  /**
   *
   * @param definition a dictionary of functions for the class
   */
  constructor(definition: Object);

}

declare type AdInstance = {
  /**
   * Represents an instance of an ad.
   */
  instance: any;
  /**
   * The Audience Network placement ID of this ad instance.
   */
  placementID: string;
  /**
   * Has this ad already been shown in-game?
   */
  shown: boolean;
  /**
   * Is this a video ad?
   */
  video: boolean;
};

/**
 * A filter that may be applied to a Context Choose operation.
 *
 * 'NEW_CONTEXT_ONLY' - Prefer to only surface contexts the game has not been played in before.
 * 'INCLUDE_EXISTING_CHALLENGES' - Include the "Existing Challenges" section, which surfaces actively played-in contexts that the player is a part of.
 * 'NEW_PLAYERS_ONLY' - In sections containing individuals, prefer people who have not played the game.
 */
declare type ContextFilter = string;

/**
 * A configuration object that may be applied to a Context Choose operation.
 */
declare type ChooseContextConfig = {
  /**
   * The set of filters to apply to the context suggestions: 'NEW_CONTEXT_ONLY', 'INCLUDE_EXISTING_CHALLENGES' or 'NEW_PLAYERS_ONLY'.
   */
  filters?: ContextFilter[];
  /**
   * The maximum number of participants that a suggested context should ideally have.
   */
  maxSize?: number;
  /**
   * The minimum number of participants that a suggested context should ideally have.
   */
  minSize?: number;
};

declare type LeaderboardScore = {
  /**
   * An integer score value.
   */
  score: integer;
  /**
   * The score value, formatted with the score format associated with the leaderboard.
   */
  scoreFormatted: string;
  /**
   * The Unix timestamp of when the leaderboard entry was last updated.
   */
  timestamp: integer;
  /**
   * The entry's leaderboard ranking.
   */
  rank: integer;
  /**
   * The developer-specified payload associated with the score, or null if one was not set.
   */
  data: string;
  /**
   * The player's localized display name.
   */
  playerName: string;
  /**
   * A url to the player's public profile photo.
   */
  playerPhotoURL: string;
  /**
   * The game's unique identifier for the player.
   */
  playerID: string;
};

declare type Product = {
  /**
   * The title of the product.
   */
  title?: string;
  /**
   * The product's game-specified identifier.
   */
  productID?: string;
  /**
   * The product description.
   */
  description?: string;
  /**
   * A link to the product's associated image.
   */
  imageURI?: string;
  /**
   * The price of the product.
   */
  price?: string;
  /**
   * The currency code for the product.
   */
  priceCurrencyCode?: string;
};

declare type Purchase = {
  /**
   * A developer-specified string, provided during the purchase of the product.
   */
  developerPayload?: string;
  /**
   * The identifier for the purchase transaction.
   */
  paymentID?: string;
  /**
   * The product's game-specified identifier.
   */
  productID?: string;
  /**
   * Unix timestamp of when the purchase occurred.
   */
  purchaseTime?: string;
  /**
   * A token representing the purchase that may be used to consume the purchase.
   */
  purchaseToken?: string;
  /**
   * Server-signed encoding of the purchase request.
   */
  signedRequest?: string;
};

declare type integer = number;

declare module 'phaser' {
  export = Phaser;
}