import {MinosAbstractStructure} from '@/base/minos/internal/MinosAbstractStructure';
import {MinosStructureAnnotations, MinosStructureAnnotationsType} from '@/base/minos/internal/MinosStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';

export class MinosYellowBrickBuilding extends MinosAbstractStructure {
  provideAnnotations(): MinosStructureAnnotations {
    return new MinosStructureAnnotations()
        .setForAnnotation(MinosStructureAnnotationsType.DOOR, [

        ]);
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_0, RubyTownTile.RUBYTOWN_1, RubyTownTile.RUBYTOWN_2],
      [RubyTownTile.RUBYTOWN_3, RubyTownTile.RUBYTOWN_4, RubyTownTile.RUBYTOWN_5],
      [RubyTownTile.RUBYTOWN_6, RubyTownTile.RUBYTOWN_7, RubyTownTile.RUBYTOWN_8],
    ];
  }
}