import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';

export class MinosLightHouse extends AbstractLandStructure {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations()
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_125, RubyTownTile.RUBYTOWN_126, RubyTownTile.RUBYTOWN_127],
      [RubyTownTile.RUBYTOWN_109, RubyTownTile.RUBYTOWN_110, RubyTownTile.RUBYTOWN_111],
      [RubyTownTile.RUBYTOWN_93, RubyTownTile.RUBYTOWN_94, RubyTownTile.RUBYTOWN_95],
      [RubyTownTile.RUBYTOWN_77, RubyTownTile.RUBYTOWN_78, RubyTownTile.RUBYTOWN_79],
      [RubyTownTile.RUBYTOWN_61, RubyTownTile.RUBYTOWN_62, RubyTownTile.RUBYTOWN_63],
      [RubyTownTile.RUBYTOWN_45, RubyTownTile.RUBYTOWN_46, RubyTownTile.RUBYTOWN_47],
      [RubyTownTile.RUBYTOWN_29, RubyTownTile.RUBYTOWN_30, RubyTownTile.RUBYTOWN_31],
      [RubyTownTile.RUBYTOWN_13, RubyTownTile.RUBYTOWN_14, RubyTownTile.RUBYTOWN_15],
    ]
  }
}