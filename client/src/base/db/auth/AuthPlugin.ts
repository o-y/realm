import {SupabasePlugin} from '@/base/db/internal/SupabasePlugin';

export class AuthPlugin extends SupabasePlugin {
  public isAuthenticated() {
    return super.getClient().auth.user() != null;
  }

  public getAuthenticationData(): AuthenticationData {
    const user = super.getClient().auth.user();

    if (user === null) {
      throw new Error("User isn't authenticated. Ensure #getAuthenticationData is guarded with #isAuthenticated calls.")
    }

    return new AuthenticationData(
        user.id,
        user.email || "unknown",
        user.created_at
    );
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

  public getUserId(): string {
    return this.id;
  }

  public getUserEmail(): string {
    return this.email;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }

  public getDisplayName(): string {
    // TODO: This is hardcoded for the time being.

    switch (this.id) {
      case "9e981eb6-d9fc-41b6-a19c-e4d0a6fdfe4d":
        return "Suraj"
      default:
        return this.getUserEmail().split("@")[0]
    }
  }
}