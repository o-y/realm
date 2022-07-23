import {createClient, SupabaseClient, User} from "@supabase/supabase-js";
import {AuthState} from '@/base/supabase/auth/AuthState';
import {SupabasePlugin} from '@/base/supabase/internal/SupabasePlugin';
import {DatabasePlugin} from '@/base/supabase/database/DatabasePlugin';
import {PeerState} from '@/base/supabase/peer/PeerState';

export class SupabaseSingleton {
  private static instance: SupabaseSingleton;
  private static SUPABASE_URL = "https://azshozejcpcfgrwavtem.supabase.co";
  private static SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6c2hvemVqY3BjZmdyd2F2dGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc3OTk3NTYsImV4cCI6MTk3MzM3NTc1Nn0.LejPfbEAm9tGCOBzy1uWOjAnGWZhT80611e1FFidegU";

  private readonly supabaseClient: SupabaseClient;
  private readonly authPlugin: AuthState;
  private readonly databasePlugin: DatabasePlugin;
  private readonly userPlugin: PeerState;

  public static getInstance(): SupabaseSingleton {
    if (SupabaseSingleton.instance === undefined) {
      SupabaseSingleton.instance = new SupabaseSingleton();
      return SupabaseSingleton.instance;
    }

    return SupabaseSingleton.instance;
  }

  private constructor() {
    this.supabaseClient = SupabaseSingleton.createClient();
    this.authPlugin = SupabasePlugin.of<AuthState>(this, AuthState);
    this.databasePlugin = SupabasePlugin.of<DatabasePlugin>(this, DatabasePlugin);
    this.userPlugin = SupabasePlugin.of<PeerState>(this, PeerState);
  }

  // Core
  public getInternalSupabaseClient(): SupabaseClient {
    return this.supabaseClient;
  }

  // Plugins
  public getDatabasePlugin(): DatabasePlugin {
    return this.databasePlugin;
  }

  // States
  public getAuthState(): AuthState {
    return this.authPlugin;
  }

  public getPeerState(): PeerState {
    return this.userPlugin;
  }

  private static createClient(): SupabaseClient {
    return createClient(
        SupabaseSingleton.SUPABASE_URL,
        SupabaseSingleton.SUPABASE_KEY,
        {
          autoRefreshToken: true,
          persistSession: true,
          multiTab: true,
          shouldThrowOnError: true,
        }
    );
  }
}