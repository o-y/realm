import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import TileProvider from '@/base/tile/internal/TileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class MinosPurpleRoofBuilding extends AbstractLandStructure<RubyTownTile> {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations()
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_56, RubyTownTile.RUBYTOWN_57, RubyTownTile.RUBYTOWN_58, RubyTownTile.RUBYTOWN_59, RubyTownTile.RUBYTOWN_60],
      [RubyTownTile.RUBYTOWN_40, RubyTownTile.RUBYTOWN_41, RubyTownTile.RUBYTOWN_42, RubyTownTile.RUBYTOWN_43, RubyTownTile.RUBYTOWN_44],
      [RubyTownTile.RUBYTOWN_24, RubyTownTile.RUBYTOWN_25, RubyTownTile.RUBYTOWN_26, RubyTownTile.RUBYTOWN_27, RubyTownTile.RUBYTOWN_28],
      [RubyTownTile.RUBYTOWN_8, RubyTownTile.RUBYTOWN_9, RubyTownTile.RUBYTOWN_10, RubyTownTile.RUBYTOWN_11, RubyTownTile.RUBYTOWN_12],
    ]
  }

  getProvider(): TileProvider<RubyTownTile> {
    return CommonTileProvider.provideRubyTownProvider();
  }
}