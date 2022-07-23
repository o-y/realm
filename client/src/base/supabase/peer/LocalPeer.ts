import {Peer} from '@/base/supabase/peer/Peer';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Layer} from '@/base/prometheus/data/Layer';
import {DatabasePlugin} from '@/base/supabase/database/DatabasePlugin';
import {SupabaseSingleton} from '@/base/supabase/SupabaseSingleton';

export class LocalPeer extends Peer {
  private readonly databasePlugin: DatabasePlugin = SupabaseSingleton.getInstance().getDatabasePlugin();

  public async updatePosition(coordinate: NonDecimalCoordinate) {
    await this.databasePlugin.updatePeerCoordinates(super.getRealmPeerId(), coordinate);
    await super.updatePosition(coordinate);
  }

  public async updateLayer(layer: Layer) {
    await this.databasePlugin.updatePeerLayer(super.getRealmPeerId(), layer);
    await super.updateLayer(layer);
  }
}