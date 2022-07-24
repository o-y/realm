import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';

export class MinosThreeTiledVerticalTreeItem extends AbstractLandStructure {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations();
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_152],
      [RubyTownTile.RUBYTOWN_136],
      [RubyTownTile.RUBYTOWN_120]
    ];
  }
}