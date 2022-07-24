import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import TileProvider from '@/base/tile/internal/TileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class MinosThreeTiledVerticalTreeItem extends AbstractLandStructure<RubyTownTile> {
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

  getProvider(): TileProvider<RubyTownTile> {
    return CommonTileProvider.provideRubyTownProvider();
  }
}