import {AvatarRender} from '@/base/prometheus/std/AvatarRender';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';
import {AvatarPathFinder} from '@/base/prometheus/remote/AvatarPathFinder';

export class RemoteAvatarRender extends AvatarRender {
  private avatarPathFinder: AvatarPathFinder = new AvatarPathFinder(this.getAvatarObject());

  public moveToCoordinate(tileCoordinate: NonDecimalCoordinate): RemoteAvatarRender {
    const avatarObject = this.getAvatarObject();
    const avatar = this.getAvatar();

    this.avatarPathFinder.walkFrom(avatar.getTileCoordinate(), tileCoordinate);

    avatar.updateTileCoordinate(tileCoordinate);

    return this;
  }
}