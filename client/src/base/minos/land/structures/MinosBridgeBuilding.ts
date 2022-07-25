import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {BridgeTile} from '@/base/tile/providers/BridgeTileProvider';
import {LandStructureAnnotations, MinosStructureAnnotationsType} from '@/base/minos/land/internal/LandStructureAnnotations';
import TileProvider from '@/base/tile/internal/TileProvider';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class MinosBridgeBuilding extends AbstractLandStructure<BridgeTile> {
  provideAnnotations(): LandStructureAnnotations {
    return new LandStructureAnnotations()
        .populateAnnotationMap(
            MinosStructureAnnotationsType.IGNORE_PHYSICS, [
                ...[BridgeTile.BRIDGE_TILE_48, BridgeTile.BRIDGE_TILE_49, BridgeTile.BRIDGE_TILE_50, BridgeTile.BRIDGE_TILE_51, BridgeTile.BRIDGE_TILE_52, BridgeTile.BRIDGE_TILE_53, BridgeTile.BRIDGE_TILE_54, BridgeTile.BRIDGE_TILE_55, BridgeTile.BRIDGE_TILE_56, BridgeTile.BRIDGE_TILE_57, BridgeTile.BRIDGE_TILE_58, BridgeTile.BRIDGE_TILE_59, BridgeTile.BRIDGE_TILE_60, BridgeTile.BRIDGE_TILE_61, BridgeTile.BRIDGE_TILE_62, BridgeTile.BRIDGE_TILE_63],
                ...[BridgeTile.BRIDGE_TILE_32, BridgeTile.BRIDGE_TILE_33, BridgeTile.BRIDGE_TILE_34, BridgeTile.BRIDGE_TILE_35, BridgeTile.BRIDGE_TILE_36, BridgeTile.BRIDGE_TILE_37, BridgeTile.BRIDGE_TILE_38, BridgeTile.BRIDGE_TILE_39, BridgeTile.BRIDGE_TILE_40, BridgeTile.BRIDGE_TILE_41, BridgeTile.BRIDGE_TILE_42, BridgeTile.BRIDGE_TILE_43, BridgeTile.BRIDGE_TILE_44, BridgeTile.BRIDGE_TILE_45, BridgeTile.BRIDGE_TILE_46, BridgeTile.BRIDGE_TILE_47],
                ...[BridgeTile.BRIDGE_TILE_16, BridgeTile.BRIDGE_TILE_17, BridgeTile.BRIDGE_TILE_18, BridgeTile.BRIDGE_TILE_19, BridgeTile.BRIDGE_TILE_20, BridgeTile.BRIDGE_TILE_21, BridgeTile.BRIDGE_TILE_22, BridgeTile.BRIDGE_TILE_23, BridgeTile.BRIDGE_TILE_24, BridgeTile.BRIDGE_TILE_25, BridgeTile.BRIDGE_TILE_26, BridgeTile.BRIDGE_TILE_27, BridgeTile.BRIDGE_TILE_28, BridgeTile.BRIDGE_TILE_29, BridgeTile.BRIDGE_TILE_30, BridgeTile.BRIDGE_TILE_31],
            ]
        );
  }

  provideStructureMatrix(): Array<Array<BridgeTile>> {
    return [
      [BridgeTile.BRIDGE_TILE_64, BridgeTile.BRIDGE_TILE_65, BridgeTile.BRIDGE_TILE_66, BridgeTile.BRIDGE_TILE_67, BridgeTile.BRIDGE_TILE_68, BridgeTile.BRIDGE_TILE_69, BridgeTile.BRIDGE_TILE_70, BridgeTile.BRIDGE_TILE_71, BridgeTile.BRIDGE_TILE_72, BridgeTile.BRIDGE_TILE_73, BridgeTile.BRIDGE_TILE_74, BridgeTile.BRIDGE_TILE_75, BridgeTile.BRIDGE_TILE_76, BridgeTile.BRIDGE_TILE_77, BridgeTile.BRIDGE_TILE_78, BridgeTile.BRIDGE_TILE_79],
      [BridgeTile.BRIDGE_TILE_48, BridgeTile.BRIDGE_TILE_49, BridgeTile.BRIDGE_TILE_50, BridgeTile.BRIDGE_TILE_51, BridgeTile.BRIDGE_TILE_52, BridgeTile.BRIDGE_TILE_53, BridgeTile.BRIDGE_TILE_54, BridgeTile.BRIDGE_TILE_55, BridgeTile.BRIDGE_TILE_56, BridgeTile.BRIDGE_TILE_57, BridgeTile.BRIDGE_TILE_58, BridgeTile.BRIDGE_TILE_59, BridgeTile.BRIDGE_TILE_60, BridgeTile.BRIDGE_TILE_61, BridgeTile.BRIDGE_TILE_62, BridgeTile.BRIDGE_TILE_63],
      [BridgeTile.BRIDGE_TILE_32, BridgeTile.BRIDGE_TILE_33, BridgeTile.BRIDGE_TILE_34, BridgeTile.BRIDGE_TILE_35, BridgeTile.BRIDGE_TILE_36, BridgeTile.BRIDGE_TILE_37, BridgeTile.BRIDGE_TILE_38, BridgeTile.BRIDGE_TILE_39, BridgeTile.BRIDGE_TILE_40, BridgeTile.BRIDGE_TILE_41, BridgeTile.BRIDGE_TILE_42, BridgeTile.BRIDGE_TILE_43, BridgeTile.BRIDGE_TILE_44, BridgeTile.BRIDGE_TILE_45, BridgeTile.BRIDGE_TILE_46, BridgeTile.BRIDGE_TILE_47],
      [BridgeTile.BRIDGE_TILE_16, BridgeTile.BRIDGE_TILE_17, BridgeTile.BRIDGE_TILE_18, BridgeTile.BRIDGE_TILE_19, BridgeTile.BRIDGE_TILE_20, BridgeTile.BRIDGE_TILE_21, BridgeTile.BRIDGE_TILE_22, BridgeTile.BRIDGE_TILE_23, BridgeTile.BRIDGE_TILE_24, BridgeTile.BRIDGE_TILE_25, BridgeTile.BRIDGE_TILE_26, BridgeTile.BRIDGE_TILE_27, BridgeTile.BRIDGE_TILE_28, BridgeTile.BRIDGE_TILE_29, BridgeTile.BRIDGE_TILE_30, BridgeTile.BRIDGE_TILE_31],
      [BridgeTile.BRIDGE_TILE_0, BridgeTile.BRIDGE_TILE_1, BridgeTile.BRIDGE_TILE_2, BridgeTile.BRIDGE_TILE_3, BridgeTile.BRIDGE_TILE_4, BridgeTile.BRIDGE_TILE_5, BridgeTile.BRIDGE_TILE_6, BridgeTile.BRIDGE_TILE_7, BridgeTile.BRIDGE_TILE_8, BridgeTile.BRIDGE_TILE_9, BridgeTile.BRIDGE_TILE_10, BridgeTile.BRIDGE_TILE_11, BridgeTile.BRIDGE_TILE_12, BridgeTile.BRIDGE_TILE_13, BridgeTile.BRIDGE_TILE_14, BridgeTile.BRIDGE_TILE_15],
    ]
  }

  getProvider(): TileProvider<BridgeTile> {
    return CommonTileProvider.provideBridgeProvider();
  }
}