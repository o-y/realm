import TileProvider from '@/base/tile/internal/TileProvider';

export default class NatureSupportTileProvider<T> extends TileProvider<NatureSupportTile> {
  public provideBaseDirectory(): string {
    return "@/base/tile/assets/nature_support"
  }
}

export enum NatureSupportTile {
  WATER_STILL = 0,
  WATER_CURRENTS = 1
}