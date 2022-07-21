import {SpriteAnimationData} from '@/base/prometheus/sprite/internal/animation/SpriteAnimationData';

// TODO: It would save so much time if I just wrote a codegen plugin to support
// an AutoBuilder annotation.
export class SpriteAnimationDataBuilder {
  private rightMovement0: number = -1;
  private staticRight: number = -1;
  private rightMovement1: number = -1;

  private leftMovement0: number = -1;
  private staticLeft: number = -1;
  private leftMovement1: number = -1;

  private forwardMovement0: number = -1;
  private staticForward: number = -1;
  private forwardMovement1: number = -1;

  private backwardMovement0: number = -1;
  private staticBackward: number = -1;
  private backwardMovement1: number = -1;

  // Right Movement
  public setRightMovement0(rightMovement0: number): SpriteAnimationDataBuilder {
    this.rightMovement0 = rightMovement0
    return this;
  }

  public setStaticRight(staticRight: number): SpriteAnimationDataBuilder {
    this.staticRight = staticRight
    return this;
  }

  public setRightMovement1(rightMovement1: number): SpriteAnimationDataBuilder {
    this.rightMovement1 = rightMovement1
    return this;
  }

  // Left Movement
  public setLeftMovement0(leftMovement0: number): SpriteAnimationDataBuilder {
    this.leftMovement0 = leftMovement0
    return this;
  }

  public setStaticLeft(staticLeft: number): SpriteAnimationDataBuilder {
    this.staticLeft = staticLeft
    return this;
  }

  public setLeftMovement1(leftMovement1: number): SpriteAnimationDataBuilder {
    this.leftMovement1 = leftMovement1
    return this;
  }

  // Forward Movement
  public setForwardMovement0(forwardMovement0: number): SpriteAnimationDataBuilder {
    this.forwardMovement0 = forwardMovement0
    return this;
  }

  public setStaticForward(staticForward: number): SpriteAnimationDataBuilder {
    this.staticForward = staticForward
    return this;
  }

  public setForwardMovement1(forwardMovement1: number): SpriteAnimationDataBuilder {
    this.forwardMovement1 = forwardMovement1
    return this;
  }

  // Backward Movement
  public setBackwardMovement0(backwardMovement0: number): SpriteAnimationDataBuilder {
    this.backwardMovement0 = backwardMovement0
    return this;
  }

  public setStaticBackward(staticBackward: number): SpriteAnimationDataBuilder {
    this.staticBackward = staticBackward
    return this;
  }

  public setBackwardMovement1(backwardMovement1: number): SpriteAnimationDataBuilder {
    this.backwardMovement1 = backwardMovement1
    return this;
  }

  public setAnimation(): SpriteAnimationData {
    return new SpriteAnimationData(
        this.rightMovement0,
        this.staticRight,
        this.rightMovement1,

        this.leftMovement0,
        this.staticLeft,
        this.leftMovement1,

        this.forwardMovement0,
        this.staticForward,
        this.forwardMovement1,

        this.backwardMovement0,
        this.staticBackward,
        this.backwardMovement1
    );
  }
}