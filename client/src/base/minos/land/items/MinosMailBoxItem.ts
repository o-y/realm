import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations, MinosStructureAnnotationsType} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import TileProvider from '@/base/tile/internal/TileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class MinosMailBoxItem extends AbstractLandStructure<RubyTownTile> {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations().populateAnnotationMap(
        MinosStructureAnnotationsType.IGNORE_PHYSICS, [
          RubyTownTile.RUBYTOWN_72
        ]
    );
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_88],
      [RubyTownTile.RUBYTOWN_72]
    ];
  }

  getProvider(): TileProvider<RubyTownTile> {
    return CommonTileProvider.provideRubyTownProvider();
  }
}