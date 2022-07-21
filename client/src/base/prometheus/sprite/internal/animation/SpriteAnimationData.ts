export class SpriteAnimationData {
  public readonly rightMovement0: number = -1;
  public readonly staticRight: number = -1;
  public readonly rightMovement1: number = -1;

  public readonly leftMovement0: number = -1;
  public readonly staticLeft: number = -1;
  public readonly leftMovement1: number = -1;

  public readonly forwardMovement0: number = -1;
  public readonly staticForward: number = -1;
  public readonly forwardMovement1: number = -1;

  public readonly backwardMovement0: number = -1;
  public readonly staticBackward: number = -1;
  public readonly backwardMovement1: number = -1;

  constructor(rightMovement0: number, staticRight: number, rightMovement1: number, leftMovement0: number, staticLeft: number, leftMovement1: number, forwardMovement0: number, staticForward: number, forwardMovement1: number, backwardMovement0: number, staticBackward: number, backwardMovement1: number) {
    this.rightMovement0 = rightMovement0;
    this.staticRight = staticRight;
    this.rightMovement1 = rightMovement1;
    this.leftMovement0 = leftMovement0;
    this.staticLeft = staticLeft;
    this.leftMovement1 = leftMovement1;
    this.forwardMovement0 = forwardMovement0;
    this.staticForward = staticForward;
    this.forwardMovement1 = forwardMovement1;
    this.backwardMovement0 = backwardMovement0;
    this.staticBackward = staticBackward;
    this.backwardMovement1 = backwardMovement1;
  }
}