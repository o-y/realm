import {SupabaseClient} from '@supabase/supabase-js';
import {SupabaseSingleton} from '@/base/supabase/SupabaseSingleton';

export abstract class SupabasePlugin {
  private readonly supabaseSingleton: SupabaseSingleton;

  public static of<T extends SupabasePlugin>(
      client: SupabaseSingleton,
      refied: (new (client: SupabaseSingleton) => T)
  ) {
    return <T> new refied(client);
  }

  public constructor(supabaseSingleton: SupabaseSingleton) {
    this.supabaseSingleton = supabaseSingleton;
  }

  public getInternalSuperbaseClient(): SupabaseClient {
    return this.supabaseSingleton.getInternalSupabaseClient();
  }

  public getSingleton(): SupabaseSingleton {
    return this.supabaseSingleton;
  }
}