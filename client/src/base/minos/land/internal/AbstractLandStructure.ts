import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import TileProvider from '@/base/tile/internal/TileProvider';

export abstract class AbstractLandStructure<T> {

  /**
   * Note, this is inverted on the grid, so:
   * [1, 2, 3]
   * [4, 5, 6]
   * [7, 8, 9]
   *
   * would become:
   *
   * [7, 8, 9]
   * [4, 5, 6]
   * [1, 2, 3]
   *
   */
  public abstract provideStructureMatrix(): Array<Array<T | null>>

  public abstract provideAnnotations(): LandStructureAnnotations

  public getWidth(): number {
    return Math.max(...this.provideStructureMatrix().map(arr => arr.length));
  }

  public getHeight(): number {
    return this.provideStructureMatrix().length;
  }

  public abstract getProvider(): TileProvider<T>

  constructor() {
    this.provideAnnotations();
  }
}