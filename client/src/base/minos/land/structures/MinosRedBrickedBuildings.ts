import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';

export class MinosRedBrickedBuildings extends AbstractLandStructure {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations()
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_248, RubyTownTile.RUBYTOWN_249, RubyTownTile.RUBYTOWN_250, RubyTownTile.RUBYTOWN_251, RubyTownTile.RUBYTOWN_252, RubyTownTile.RUBYTOWN_39],
      [RubyTownTile.RUBYTOWN_232, RubyTownTile.RUBYTOWN_233, RubyTownTile.RUBYTOWN_234, RubyTownTile.RUBYTOWN_235, RubyTownTile.RUBYTOWN_236, RubyTownTile.RUBYTOWN_23],
      [RubyTownTile.RUBYTOWN_247, RubyTownTile.RUBYTOWN_213, RubyTownTile.RUBYTOWN_213, RubyTownTile.RUBYTOWN_213, RubyTownTile.RUBYTOWN_215],
      [RubyTownTile.RUBYTOWN_231, RubyTownTile.RUBYTOWN_197, RubyTownTile.RUBYTOWN_197, RubyTownTile.RUBYTOWN_197, RubyTownTile.RUBYTOWN_199],
    ]
  }
}