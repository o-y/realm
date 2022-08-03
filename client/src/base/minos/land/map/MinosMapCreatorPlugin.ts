import {NyxScenePlugin} from '@/framework/nyx/NyxScenePlugin';
import PhaserWorldGenScene from '@/base/scenes/PhaserWorldGenScene';
import {LayerManager} from '@/base/layer/LayerManager';
import {MinosOfficeRoomMap} from '@/base/minos/land/map/MinosOfficeRoomMap';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';

export class MinosMapCreatorPlugin extends NyxScenePlugin<PhaserWorldGenScene> {
  public createMapStructures() {
    const nyxScene = this.getNyxScene();
    const layerManager: LayerManager = LayerManager.forScene(nyxScene);

    const conversion = CoordinateUtil.convertTileToWorldSpaceCoordinate(
        MinosOfficeRoomMap.provideMidpointPosition().getX(),
        MinosOfficeRoomMap.provideMidpointPosition().getY()
    );

    const image = nyxScene.add.image(
        conversion.getX(),
        conversion.getY(),
        MinosOfficeRoomMap.getKey()
    );

    layerManager.getBuildingLayer().add(image);
  }
}