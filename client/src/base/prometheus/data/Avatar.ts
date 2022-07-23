import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {Client} from '@/base/prometheus/local/Client';
import {Layer} from '@/base/prometheus/data/Layer';
import {Peer} from '@/base/supabase/peer/Peer';

export class Avatar {
  private readonly peer: Peer;

  private tileCoordinate: DecimalCoordinate = Coordinate.SENTINEL;
  private tileCoordinateUpdateCallbacks: Set<CoordinateUpdateCallback> = new Set<CoordinateUpdateCallback>();

  private worldCoordinate: DecimalCoordinate = Coordinate.SENTINEL;
  private worldCoordinateCallbacks: Set<CoordinateUpdateCallback> = new Set<CoordinateUpdateCallback>();

  private constructor(peer: Peer) {
    this.peer = peer;
  }

  public static of(liveClient: Peer) {
    return new Avatar(liveClient);
  }

  public getUsername(): string {
    return this.peer.getUsername();
  }

  public isLocalAvatar(): boolean {
    return this.peer.isLocalClient();
  }

  public getLayer(): Layer {
    return this.peer.getLayer();
  }

  public getPeer(): Peer {
    return this.peer;
  }

  public getTileCoordinate(): NonDecimalCoordinate {
    return this.tileCoordinate;
  }

  public getWorldCoordinate(): DecimalCoordinate {
    return this.worldCoordinate;
  }

  public updateTileCoordinate(coordinate: NonDecimalCoordinate): Avatar {
    if (coordinate.getX() == this.tileCoordinate.getX() &&
        coordinate.getY() == this.tileCoordinate.getY()) return this;

    this.tileCoordinate = coordinate;

    // this.tileCoordinateUpdateCallbacks.forEach((coordinateUpdateCallback: CoordinateUpdateCallback) =>
    //     coordinateUpdateCallback(coordinate))

    return this;
  }

  public updateWorldCoordinate(coordinate: DecimalCoordinate): Avatar {
    if (coordinate.getX() == this.worldCoordinate.getX() &&
        coordinate.getY() == this.worldCoordinate.getY()) return this;

    this.worldCoordinate = coordinate;

    this.worldCoordinateCallbacks.forEach((coordinateUpdateCallback: CoordinateUpdateCallback) =>
        coordinateUpdateCallback(coordinate))

    return this;
  }

  public registerTileCoordinateCallback(coordinateUpdateCallback: CoordinateUpdateCallback): Avatar {
    this.tileCoordinateUpdateCallbacks.add(coordinateUpdateCallback);
    return this;
  }

  public registerWorldCoordinateCallback(coordinateUpdateCallback: CoordinateUpdateCallback): Avatar {
    this.worldCoordinateCallbacks.add(coordinateUpdateCallback);
    return this;
  }

  public computeViewPortBoundary(): CartesianBound {
    return CartesianBound.fromMidPointAdvanced(this.tileCoordinate, Client.WORLD_VIEWPORT_HEIGHT, Client.WORLD_VIEWPORT_WIDTH)
  }
}

export type CoordinateUpdateCallback = (decimalCoordinate: DecimalCoordinate) => void