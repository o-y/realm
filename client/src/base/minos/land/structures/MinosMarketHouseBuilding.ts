import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';

export class MinosMarketHouseBuilding extends AbstractLandStructure {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations()
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_137, RubyTownTile.RUBYTOWN_138, RubyTownTile.RUBYTOWN_139, RubyTownTile.RUBYTOWN_140],
      [RubyTownTile.RUBYTOWN_121, RubyTownTile.RUBYTOWN_122, RubyTownTile.RUBYTOWN_123, RubyTownTile.RUBYTOWN_124],
      [RubyTownTile.RUBYTOWN_105, RubyTownTile.RUBYTOWN_106, RubyTownTile.RUBYTOWN_107, RubyTownTile.RUBYTOWN_108],
      [RubyTownTile.RUBYTOWN_89, RubyTownTile.RUBYTOWN_90, RubyTownTile.RUBYTOWN_91, RubyTownTile.RUBYTOWN_92],
      [RubyTownTile.RUBYTOWN_73, RubyTownTile.RUBYTOWN_74, RubyTownTile.RUBYTOWN_75, RubyTownTile.RUBYTOWN_76],
    ]
  }
}