import {SupabasePlugin} from '@/base/supabase/internal/SupabasePlugin';
import {DatabaseTables} from '@/base/supabase/database/DatabaseTables';
import {User} from '@supabase/supabase-js';
import {DateUtil} from '@/util/DateUtil';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Layer} from '@/base/prometheus/data/Layer';

export class DatabasePlugin extends SupabasePlugin {
  //======================|
  //-------- AUTH --------|
  //======================|

  public async convertAuthenticationIdToRealmPeerId(authenticationId: string): Promise<number> {
    const CLIENTS_DB = DatabaseTables.CLIENTS;

    const { data, error } = await super.getInternalSuperbaseClient()
        .from(CLIENTS_DB.DATABASE_NAME)
        .select(CLIENTS_DB.REALM_AVATAR_ID)
        .eq(CLIENTS_DB.AUTHENTICATION_USER_ID, authenticationId)

    if (data?.length === 1){
      return parseInt(data[0][CLIENTS_DB.REALM_AVATAR_ID]);
    }

    return -1;
  }

  //======================|
  //-------- PEER --------|
  //======================|

  public async updatePeerCoordinates(userId: number, coordinate: NonDecimalCoordinate): Promise<boolean> {
    const CLIENTS_DB = DatabaseTables.CLIENTS;

    const { data, error } = await super.getInternalSuperbaseClient()
        .from(CLIENTS_DB.DATABASE_NAME)
        .update([{
          [CLIENTS_DB.COORDINATE_X]: coordinate.getX(),
          [CLIENTS_DB.COORDINATE_Y]: coordinate.getY(),
        }])
        .match({ [CLIENTS_DB.REALM_AVATAR_ID]: userId });

    return data != null && data.length > 0;
  }

  public async updatePeerLayer(userId: number, layer: Layer): Promise<boolean> {
    const CLIENTS_DB = DatabaseTables.CLIENTS;

    const { data, error } = await super.getInternalSuperbaseClient()
        .from(CLIENTS_DB.DATABASE_NAME)
        .update([{
          [CLIENTS_DB.LAYER]: layer,
        }])
        .match({ [CLIENTS_DB.REALM_AVATAR_ID]: userId });

    return data != null && data.length > 0;
  }

  public async getPeerFromUser(user: User) {
    const CLIENTS_DB = DatabaseTables.CLIENTS;

    const { data, error } = await super.getInternalSuperbaseClient()
        .from(CLIENTS_DB.DATABASE_NAME)
        .select(CLIENTS_DB.AUTHENTICATION_USER_ID)
        .eq(CLIENTS_DB.AUTHENTICATION_USER_ID, user.id)

    return data
  }

  public async registerNewPeer(user: User): Promise<void> {
    const CLIENTS_DB = DatabaseTables.CLIENTS;

    // TODO: Some of this is hardcoded, it shouldn't, but that's fine for now.
    const { data, error } = await super.getInternalSuperbaseClient()
        .from(CLIENTS_DB.DATABASE_NAME)
        .insert([{
          [CLIENTS_DB.AUTHENTICATION_USER_ID]: user.id,
          [CLIENTS_DB.EMAIL]: user.email,
          [CLIENTS_DB.USERNAME]: user.identities![0].identity_data.user_name,
          [CLIENTS_DB.COORDINATE_X]: Coordinate.SENTINEL.getX(),
          [CLIENTS_DB.COORDINATE_Y]: Coordinate.SENTINEL.getY(),
          [CLIENTS_DB.LAST_LOGIN]: DateUtil.getCurrentDateISOFormatted(),
          [CLIENTS_DB.REALM_ID]: 0 // There's currently one realm - zv.wtf with
                                   // an ID of 0.
        }])
  }
}