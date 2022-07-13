import {Avatar} from '@/base/prometheus/Avatar';

export abstract class RealmGenerator {
  protected avatar: Avatar | null = null;

  public setAvatar(avatar: Avatar): RealmGenerator {
    this.avatar = avatar;
    return this;
  }

  public generateMapWithAvatar(seed: number): Promise<void> {
    if (this.avatar == null){
      throw new Error("Avatar is null! Ensure #setAvatar has been invoked.");
    }

    return this.generateMap(seed, this.avatar)
  }

  protected abstract generateMap(seed: number, avatar: Avatar): Promise<void>
}