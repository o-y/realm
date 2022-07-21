import {Avatar} from '@/base/prometheus/data/Avatar';
import PhaserWorldGenScene from '@/base/scenes/PhaserWorldGenScene';

export abstract class AvatarPlugin {
  private readonly avatarPluginData: AvatarPluginData;

  public static with<T extends AvatarPlugin> (
      avatar: Avatar, phaserWorldGenScene: PhaserWorldGenScene,
      refied: (new (avatar: Avatar, phaserWorldGenScene: PhaserWorldGenScene) => T)
  ): T {
    return <T> new refied(avatar, phaserWorldGenScene);
  }

  public static withAvatarPluginData<T extends AvatarPlugin> (
      avatarPluginData: AvatarPluginData,
      refied: (new (avatar: Avatar, phaserWorldGenScene: PhaserWorldGenScene) => T)
  ): T {
    return AvatarPlugin.with(avatarPluginData.getAvatar(), avatarPluginData.getScene(), refied);
  }

  public static withAvatarPlugin<T extends AvatarPlugin, K extends AvatarPlugin> (
      avatarPlugin: T,
      refied: (new (avatar: Avatar, phaserWorldGenScene: PhaserWorldGenScene) => K)
  ): K {
    return AvatarPlugin.withAvatarPluginData(avatarPlugin.getAvatarPluginData(), refied);
  }

  public constructor(avatar: Avatar, phaserWorldGenScene: PhaserWorldGenScene) {
    this.avatarPluginData = new AvatarPluginData(avatar, phaserWorldGenScene)
  }

  public getAvatarPluginData(): AvatarPluginData {
    return this.avatarPluginData;
  }

  public getScene(): PhaserWorldGenScene {
    return this.getAvatarPluginData().getScene();
  }

  public getAvatar(): Avatar {
    return this.getAvatarPluginData().getAvatar();
  }
}

export class AvatarPluginData {
  private readonly avatar: Avatar;
  private readonly phaserWorldGenScene: PhaserWorldGenScene;

  public constructor(avatar: Avatar, phaserWorldGenScene: PhaserWorldGenScene) {
    this.avatar = avatar;
    this.phaserWorldGenScene = phaserWorldGenScene;
  }

  public getAvatar(): Avatar {
    return this.avatar;
  }

  public getScene(): PhaserWorldGenScene {
    return this.phaserWorldGenScene;
  }
}