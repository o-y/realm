import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import TileProvider from '@/base/tile/internal/TileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class MinosRedRoofBuilding extends AbstractLandStructure<RubyTownTile> {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations()
  }

  provideStructureMatrix(): Array<Array<RubyTownTile | null>> {
    return [
      [RubyTownTile.RUBYTOWN_205, RubyTownTile.RUBYTOWN_206, RubyTownTile.RUBYTOWN_207, RubyTownTile.RUBYTOWN_254, RubyTownTile.RUBYTOWN_255],
      [RubyTownTile.RUBYTOWN_189, RubyTownTile.RUBYTOWN_190, RubyTownTile.RUBYTOWN_191, RubyTownTile.RUBYTOWN_238, RubyTownTile.RUBYTOWN_239],
      [RubyTownTile.RUBYTOWN_173, RubyTownTile.RUBYTOWN_174, RubyTownTile.RUBYTOWN_175, RubyTownTile.RUBYTOWN_222, RubyTownTile.RUBYTOWN_223],
      [RubyTownTile.RUBYTOWN_157, RubyTownTile.RUBYTOWN_158, RubyTownTile.RUBYTOWN_159],
      [RubyTownTile.RUBYTOWN_141, RubyTownTile.RUBYTOWN_142, RubyTownTile.RUBYTOWN_143],
    ]
  }

  getProvider(): TileProvider<RubyTownTile> {
    return CommonTileProvider.provideRubyTownProvider();
  }
}