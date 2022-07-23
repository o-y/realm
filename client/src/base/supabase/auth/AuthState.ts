import {SupabasePlugin} from '@/base/supabase/internal/SupabasePlugin';
import {User} from '@supabase/supabase-js';
import {DatabaseTables} from '@/base/supabase/database/DatabaseTables';
import {AuthChangeEvent, Session} from '@supabase/gotrue-js/src/lib/types';

/** Authenticates the client and provides authentication data. */
export class AuthState extends SupabasePlugin {
  public isAuthenticated() {
    return super.getInternalSuperbaseClient().auth.user() != null;
  }

  public async getAuthenticationData(internal: boolean = false): Promise<AuthenticationData | null> {
    const user: User | null = super.getInternalSuperbaseClient().auth.user();

    if (user === null) {
      if (!internal){
        console.warn("User isn't authenticated. Ensure #getAuthenticationData is guarded with #isAuthenticated calls.");
      }
      return null;
    }

    // Ensure the user exists within the Realm Database.
    await this.ensureUserExistsInRealmDatabase(user);

    return new AuthenticationData(
        user.id,
        user.email!,
        user.created_at
    );
  }

  public registerAuthStateChangedCallback(callback: (authenticationData: AuthenticationData | null) => void) {
    super.getInternalSuperbaseClient().auth.onAuthStateChange(
        async (event: AuthChangeEvent, session: Session | null) => {
          callback(await this.getAuthenticationData(true))
        }
    )
  }

  private async ensureUserExistsInRealmDatabase(user: User): Promise<void> {
    const databasePlugin = super.getSingleton().getDatabasePlugin();
    const queryRequest = await databasePlugin.getPeerFromUser(user);

    if (queryRequest?.length === 0){
      await databasePlugin.registerNewPeer(user);
    }
  }
}

export class AuthenticationData {
  private readonly id: string;
  private readonly email: string;
  private readonly createdAt: string;

  constructor(id: string, email: string, createdAt: string) {
    this.id = id;
    this.email = email;
    this.createdAt = createdAt;
  }

  public getAuthenticationUserId(): string {
    return this.id;
  }

  public getUserEmail(): string {
    return this.email;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public getDisplayName(): string {
    return this.getUserEmail().split("@")[0]
  }
}