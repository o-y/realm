export class RealmsDatabase {
  public static readonly DATABASE_NAME = "realms";

  public static readonly REALM_ID = "realm_id";
  public static readonly CREATED_AT = "created_at";
  public static readonly REALM_NAME = "realm_name";
}

export class ClientsDatabase {
  public static readonly DATABASE_NAME = "clients";

  public static readonly REALM_AVATAR_ID = "realm_avatar_id";
  public static readonly AUTHENTICATION_USER_ID = "authentication_user_id";
  public static readonly EMAIL = "email";
  public static readonly USERNAME = "username";
  public static readonly LAYER = "layer";
  public static readonly COORDINATE_X = "tile_coordinate_x";
  public static readonly COORDINATE_Y = "tile_coordinate_y";
  public static readonly LAST_LOGIN = "last_login";

  public static readonly REALM_ID = "associated_realm_id";
}

export class DatabaseTables {
  public static readonly CLIENTS = ClientsDatabase;
  public static readonly REALMS = RealmsDatabase;
}