export enum SpriteState {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",

  UP_STATIC = "UP_STATIC",
  DOWN_STATIC = "DOWN_STATIC",
  LEFT_STATIC = "LEFT_STATIC",
  RIGHT_STATIC = "RIGHT_STATIC"
}

export const STATIC_SPRITE_STATE: Set<SpriteState> = new Set<SpriteState>([
    SpriteState.DOWN_STATIC, SpriteState.UP_STATIC, SpriteState.LEFT_STATIC,
    SpriteState.RIGHT_STATIC
])

export const ACTIVE_SPRITE_STATE: Set<SpriteState> = new Set<SpriteState>([
    SpriteState.DOWN, SpriteState.UP, SpriteState.LEFT, SpriteState.RIGHT
])

export const STATIC_TO_ACTIVE_SPRITE_STATE_CONVERSION: Map<SpriteState, SpriteState> = new Map<SpriteState, SpriteState>([
  [SpriteState.DOWN_STATIC, SpriteState.DOWN],
  [SpriteState.UP_STATIC, SpriteState.UP],
  [SpriteState.LEFT_STATIC, SpriteState.LEFT],
  [SpriteState.RIGHT_STATIC, SpriteState.RIGHT],
])

export const ACTIVE_TO_STATIC_SPRITE_STATE_CONVERSION: Map<SpriteState, SpriteState> = new Map<SpriteState, SpriteState>([
  [SpriteState.DOWN, SpriteState.DOWN_STATIC],
  [SpriteState.UP, SpriteState.UP_STATIC],
  [SpriteState.LEFT, SpriteState.LEFT_STATIC],
  [SpriteState.RIGHT, SpriteState.RIGHT_STATIC],
])