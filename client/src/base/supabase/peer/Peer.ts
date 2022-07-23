import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Layer} from '@/base/prometheus/data/Layer';
import {DatabasePlugin} from '@/base/supabase/database/DatabasePlugin';
import {SupabaseSingleton} from '@/base/supabase/SupabaseSingleton';
import {Internal} from '@/util/enums/Internal';
import {PeerState} from '@/base/supabase/peer/PeerState';
import {PeerConnectionManager} from '@/base/supabase/peer/PeerConnectionManager';

export class Peer {
  private readonly realmPeerId: number;
  private readonly email: string;
  private readonly _isLocalClient: boolean = false;

  private currentPosition: Coordinate;
  private layer: number;

  private readonly peerConnectionManager: PeerConnectionManager = PeerConnectionManager.getInstance();

  constructor(
      realmPeerId: number,
      currentPosition: Coordinate,
      email: string,
      layer: number,
      isLocalClient: boolean
  ) {
    this.realmPeerId = realmPeerId;
    this.currentPosition = currentPosition;
    this.email = email;
    this.layer = layer;
    this._isLocalClient = isLocalClient
  }

  public getDisplayName(): string {
    return this.email.split("@")[0];
  }

  public getEmail(internal: Internal): string {
    return this.email;
  }

  public getPosition(): NonDecimalCoordinate {
    return this.currentPosition;
  }

  public getLayer(): Layer {
    return this.layer;
  }

  public getRealmPeerId(): number {
    return this.realmPeerId;
  }

  public isLocalClient(): boolean {
    return this._isLocalClient;
  }

  public async updatePosition(coordinate: NonDecimalCoordinate) {
    this.currentPosition = coordinate;
  }

  public async updateLayer(layer: Layer) {
    this.layer = layer;
  }
}