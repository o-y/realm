import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations, MinosStructureAnnotationsType} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import TileProvider from '@/base/tile/internal/TileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class MinosYellowBrickBuilding extends AbstractLandStructure<RubyTownTile> {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations()
        .populateAnnotationMap(
            MinosStructureAnnotationsType.DOOR, [RubyTownTile.RUBYTOWN_67],
        ).populateAnnotationMap(
            MinosStructureAnnotationsType.IGNORE_PHYSICS, [
              RubyTownTile.RUBYTOWN_64, RubyTownTile.RUBYTOWN_65,
              RubyTownTile.RUBYTOWN_66, RubyTownTile.RUBYTOWN_68,
              RubyTownTile.RUBYTOWN_69, RubyTownTile.RUBYTOWN_70,
              RubyTownTile.RUBYTOWN_39
            ],
        )
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_64, RubyTownTile.RUBYTOWN_65, RubyTownTile.RUBYTOWN_66, RubyTownTile.RUBYTOWN_67, RubyTownTile.RUBYTOWN_68, RubyTownTile.RUBYTOWN_69, RubyTownTile.RUBYTOWN_70, RubyTownTile.RUBYTOWN_39],
      [RubyTownTile.RUBYTOWN_48, RubyTownTile.RUBYTOWN_49, RubyTownTile.RUBYTOWN_50, RubyTownTile.RUBYTOWN_51, RubyTownTile.RUBYTOWN_52, RubyTownTile.RUBYTOWN_53, RubyTownTile.RUBYTOWN_54, RubyTownTile.RUBYTOWN_23],
      [RubyTownTile.RUBYTOWN_32, RubyTownTile.RUBYTOWN_33, RubyTownTile.RUBYTOWN_34, RubyTownTile.RUBYTOWN_35, RubyTownTile.RUBYTOWN_36, RubyTownTile.RUBYTOWN_37, RubyTownTile.RUBYTOWN_38],
      [RubyTownTile.RUBYTOWN_16, RubyTownTile.RUBYTOWN_17, RubyTownTile.RUBYTOWN_18, RubyTownTile.RUBYTOWN_19, RubyTownTile.RUBYTOWN_20, RubyTownTile.RUBYTOWN_21, RubyTownTile.RUBYTOWN_22],
      [RubyTownTile.RUBYTOWN_0,  RubyTownTile.RUBYTOWN_1,  RubyTownTile.RUBYTOWN_2,  RubyTownTile.RUBYTOWN_3,  RubyTownTile.RUBYTOWN_4,  RubyTownTile.RUBYTOWN_5,  RubyTownTile.RUBYTOWN_6],
    ];
  }

  getProvider(): TileProvider<RubyTownTile> {
    return CommonTileProvider.provideRubyTownProvider();
  }
}