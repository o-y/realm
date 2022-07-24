import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';

export abstract class AbstractLandStructure {

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
  public abstract provideStructureMatrix(): Array<Array<RubyTownTile>>

  public abstract provideAnnotations(): LandStructureAnnotations

  public getWidth(): number {
    return this.provideStructureMatrix()[0].length;
  }

  public getHeight(): number {
    return this.provideStructureMatrix().length;
  }
}