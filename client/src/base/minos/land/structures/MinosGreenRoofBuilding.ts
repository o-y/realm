import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';

export class MinosGreenRoofBuilding extends AbstractLandStructure {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations();
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_144, RubyTownTile.RUBYTOWN_145, RubyTownTile.RUBYTOWN_146, RubyTownTile.RUBYTOWN_147, RubyTownTile.RUBYTOWN_148],
      [RubyTownTile.RUBYTOWN_128, RubyTownTile.RUBYTOWN_129, RubyTownTile.RUBYTOWN_130, RubyTownTile.RUBYTOWN_131, RubyTownTile.RUBYTOWN_132],
      [RubyTownTile.RUBYTOWN_112, RubyTownTile.RUBYTOWN_113, RubyTownTile.RUBYTOWN_114, RubyTownTile.RUBYTOWN_115, RubyTownTile.RUBYTOWN_116],
      [RubyTownTile.RUBYTOWN_96, RubyTownTile.RUBYTOWN_97, RubyTownTile.RUBYTOWN_98, RubyTownTile.RUBYTOWN_99, RubyTownTile.RUBYTOWN_100],
      [RubyTownTile.RUBYTOWN_80, RubyTownTile.RUBYTOWN_81, RubyTownTile.RUBYTOWN_82, RubyTownTile.RUBYTOWN_83, RubyTownTile.RUBYTOWN_84],
    ];
  }
}