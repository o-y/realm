import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {AuthPlugin} from '@/base/db/auth/AuthPlugin';
import {SupabasePlugin} from '@/base/db/internal/SupabasePlugin';

export class SupabaseSingleton {
  private static instance: SupabaseSingleton;
  private static SUPABASE_URL = "https://azshozejcpcfgrwavtem.supabase.co"
  private static SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6c2hvemVqY3BjZmdyd2F2dGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc3OTk3NTYsImV4cCI6MTk3MzM3NTc1Nn0.LejPfbEAm9tGCOBzy1uWOjAnGWZhT80611e1FFidegU"

  private readonly supabaseClient: SupabaseClient;
  private readonly authPlugin: AuthPlugin;

  public static getInstance(): SupabaseSingleton {
    if (SupabaseSingleton.instance === undefined) {
      SupabaseSingleton.instance = new SupabaseSingleton();
      return SupabaseSingleton.instance;
    }

    return SupabaseSingleton.instance;
  }

  private constructor() {
    this.supabaseClient = this.createClient();
    this.authPlugin = SupabasePlugin.of<AuthPlugin>(this, AuthPlugin);
  }

  public getClient(): SupabaseClient {
    return this.supabaseClient;
  }

  public getAuthPlugin(): AuthPlugin {
    return this.authPlugin;
  }

  private createClient(): SupabaseClient {
    return createClient(
        SupabaseSingleton.SUPABASE_URL,
        SupabaseSingleton.SUPABASE_KEY,
        {
          autoRefreshToken: true,
          persistSession: true,
        }
    );
  }
}