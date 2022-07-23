import {Avatar} from '@/base/prometheus/data/Avatar';
import {PlayersLayer} from '@/base/layer/layers/PlayersLayer';
import TileObject from '@/base/tile/TileObject';

export class AvatarObjectRender {
  private readonly avatar: Avatar;
  private readonly layer: PlayersLayer;

  private avatarObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | null = null;
  private usernameObject: Phaser.GameObjects.Text | null = null;

  private constructor(avatar: Avatar, layer: PlayersLayer) {
    this.avatar = avatar;
    this.layer = layer;
  }

  public static with(avatar: Avatar, layer: PlayersLayer) {
    return new AvatarObjectRender(avatar, layer);
  }

  public setAvatarObject(avatarObject: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody): AvatarObjectRender {
    this.avatarObject = avatarObject;
    this.layer.add(avatarObject);

    return this;
  }

  public setUsernameObject(usernameObject: Phaser.GameObjects.Text): AvatarObjectRender {
    this.usernameObject = usernameObject;
    this.layer.add(usernameObject);

    return this;
  }

  public getAvatarObject(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
    if (this.avatarObject === null) throw new Error("#avatarObject is null. Ensure #setAvatarObject has been invoked!");
    return this.avatarObject;
  }

  public getUsernameObject(): Phaser.GameObjects.Text {
    if (this.usernameObject === null) throw new Error("#usernameObject is null. Ensure #setUsernameObject has been invoked!");
    return this.usernameObject;
  }

  public recomputePositions(): AvatarObjectRender {
    if (this.avatarObject === null) throw new Error("#avatarObject is null. Ensure #setAvatarObject has been invoked!");
    if (this.usernameObject === null) throw new Error("#usernameObject is null. Ensure #setUsernameObject has been invoked!");

    this.usernameObject.y = this.avatarObject.y - TileObject.TILE_SIZE;
    this.usernameObject.x = this.avatarObject.x - this.usernameObject.width / 2;

    return this;
  }
}