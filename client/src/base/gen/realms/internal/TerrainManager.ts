import {NyxLayer} from '@/framework/nyx/NyxLayer';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import TileObject from '@/base/tile/TileObject';
import {MathUtil} from '@/util/MathUtil';
import {PerlinNoise} from '@/base/gen/perlin/PerlinNoise';
import RealmTileGenUtil from '@/base/gen/tilegen/RealmTileGenUtil';
import {Util} from '@/util/Util';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import {MinosStructureProvider} from '@/base/minos/MinosStructureProvider';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import {LayerManager} from '@/base/layer/LayerManager';
import {BaseLayer} from '@/base/layer/layers/BaseLayer';
import {BuildingLayer} from '@/base/layer/layers/BuildingLayer';

export class TerrainManager {
  private baseLayer: BaseLayer;
  private buildingLayer: BuildingLayer;

  private readonly tileSparseArray: Array<Array<Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle | null>> = new Array<Array<Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle | null>>();
  private noiseMap: Map<string, number> = new Map<string, number>();

  private constructor(layerManager: LayerManager) {
    this.baseLayer = layerManager.getBaseLayer();
    this.buildingLayer = layerManager.getBuildingLayer();
  }

  public static withLayerManager(layerManager: LayerManager) {
    return new TerrainManager(layerManager);
  }

  public loadTileSet(coordinateSet: Set<Coordinate>) {
    coordinateSet.forEach(coordinate => {

      const perlinNoise: PerlinNoise = PerlinNoise
          .create()
          .withSeed(1337)

      const noise: number = Math.min(
          Math.max(Math.abs(perlinNoise.generatePerlin2(coordinate.getX() / 100, coordinate.getY() / 100)) * 256,
            RealmTileGenUtil.MIN_PERLIN_NOISE),
          RealmTileGenUtil.MAX_PERLIN_NOISE
      );

      const clampedRandom: number = Util.getOrSet(
          this.noiseMap,
          coordinate.toString(),
          Math.random())

      const randomTile: TileObject<TileUnion> = RealmTileGenUtil
          .selectTileArrayWithNoise(noise, clampedRandom)
          .selectRandomTile(clampedRandom);

      const terrainTile = this.baseLayer.scene.add.nyxTileObjectImage(
          (coordinate.getX() * TileObject.TILE_SIZE),
          (coordinate.getY() * TileObject.TILE_SIZE),
          randomTile
      ).setAlpha(0.5);

      const intersectingStructure = MinosStructureProvider.getIntersectingStructure(coordinate);
      if (intersectingStructure) {
        const intersectingTile: TileObject<RubyTownTile> = intersectingStructure.getIntersectingTile(coordinate);
        const buildingTile = this.buildingLayer.scene.physics.add.image(
                (coordinate.getX() * TileObject.TILE_SIZE),
                (coordinate.getY() * TileObject.TILE_SIZE),
                intersectingTile.imageHash
        ).setImmovable(true)
        this.buildingLayer.add(buildingTile);
        this.tileSparseArray[coordinate.toCantorsPairing()] = [terrainTile, buildingTile];
      } else {
        this.tileSparseArray[coordinate.toCantorsPairing()] = [terrainTile];
      }
    })
  }

  public unloadTileSet(coordinateSet: Set<Coordinate>) {
    coordinateSet.forEach(coordinate => {
      const ref = this.tileSparseArray[coordinate.toCantorsPairing()];

      if (ref != null){
        ref.forEach(tile => tile?.destroy(true))
        this.tileSparseArray[coordinate.toCantorsPairing()] = [null];
      }
    });
  }
}