import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import TileProvider from '@/base/tile/internal/TileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class MinosBlueRoofBuilding extends AbstractLandStructure<RubyTownTile> {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations();
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_192, RubyTownTile.RUBYTOWN_193, RubyTownTile.RUBYTOWN_194, RubyTownTile.RUBYTOWN_195, RubyTownTile.RUBYTOWN_196],
      [RubyTownTile.RUBYTOWN_176, RubyTownTile.RUBYTOWN_177, RubyTownTile.RUBYTOWN_178, RubyTownTile.RUBYTOWN_179, RubyTownTile.RUBYTOWN_180],
      [RubyTownTile.RUBYTOWN_160, RubyTownTile.RUBYTOWN_161, RubyTownTile.RUBYTOWN_162, RubyTownTile.RUBYTOWN_163, RubyTownTile.RUBYTOWN_164],
    ]
  }

  getProvider(): TileProvider<RubyTownTile> {
    return CommonTileProvider.provideRubyTownProvider();
  }
}