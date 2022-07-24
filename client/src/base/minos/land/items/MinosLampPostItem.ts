import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {LandStructureAnnotations} from '@/base/minos/land/internal/LandStructureAnnotations';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';

export class MinosLampPostItem extends AbstractLandStructure {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations();
  }

  provideStructureMatrix(): Array<Array<RubyTownTile>> {
    return [
      [RubyTownTile.RUBYTOWN_87],
      [RubyTownTile.RUBYTOWN_71]
    ];
  }
}