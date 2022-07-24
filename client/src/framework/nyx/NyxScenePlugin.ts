import {SupabaseSingleton} from '@/base/supabase/SupabaseSingleton';
import NyxScene from '@/framework/nyx/NyxScene';

export class NyxScenePlugin<T> {
  private readonly nyxScene: T;

  public static withScene<T extends NyxScene, K extends NyxScenePlugin<any>>(
      client: T,
      refied: (new (client: T) => K)
  ) {
    return <K> new refied(client);
  }

  public constructor(nyxScene: T) {
    this.nyxScene = nyxScene;
  }

  public getNyxScene(): T {
    return this.nyxScene;
  }
}