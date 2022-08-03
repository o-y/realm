import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import TileObject from '@/base/tile/TileObject';
import {PerlinNoise} from '@/base/gen/perlin/PerlinNoise';
import RealmTileGenUtil from '@/base/gen/tilegen/RealmTileGenUtil';
import {Util} from '@/util/Util';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import {LandStructureProvider} from '@/base/minos/land/LandStructureProvider';
import {BaseLayer} from '@/base/layer/layers/BaseLayer';
import {BuildingLayer} from '@/base/layer/layers/BuildingLayer';
import {RealmGenerationData} from '@/base/gen/realms/internal/RealmGenerator';
import {MinosStructureAnnotationsType} from '@/base/minos/land/internal/LandStructureAnnotations';
import {PathMap} from '@/base/gen/realms/pipelines/gaia/PathMap';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class TerrainManager {
  private readonly baseLayer: BaseLayer;
  private readonly buildingLayer: BuildingLayer;
  private readonly tileSparseArray: Array<Array<Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle | null>> = new Array<Array<Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle | null>>();
  private readonly noiseMap: Map<string, number> = new Map<string, number>();
  private readonly pathMapCantorPairings: Set<number> = PathMap.getInstance().getPathSetCantorPairings();
  private readonly perlinNoise: PerlinNoise;

  private constructor(realmGenerationData: RealmGenerationData) {
    this.baseLayer = realmGenerationData.getLayerManager().getBaseLayer();
    this.buildingLayer = realmGenerationData.getLayerManager().getBuildingLayer();
    this.perlinNoise = PerlinNoise
        .create()
        .withSeed(realmGenerationData.getSeed())
  }

  public static withRealmGenerationData(realmGenerationData: RealmGenerationData) {
    return new TerrainManager(realmGenerationData);
  }

  public loadTileSet(coordinateSet: Set<Coordinate>) {
    coordinateSet.forEach(coordinate => {
      const noise: number = Math.min(
          Math.max(Math.abs(this.perlinNoise.generatePerlin2(coordinate.getX() / 100, coordinate.getY() / 100)) * 256,
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

      let terrainTile: Phaser.GameObjects.Image | null = null;

      if (this.pathMapCantorPairings.has(coordinate.toCantorsPairing())) {
        terrainTile = this.baseLayer.scene.add.nyxTileObjectImage(
            (coordinate.getX() * TileObject.TILE_SIZE),
            (coordinate.getY() * TileObject.TILE_SIZE),
            CommonTileProvider.provideNatureProvider().getTile(NatureTile.GRASS_VARIANT_2)
        )//.setAlpha(0.6);
      } else {
        terrainTile = this.baseLayer.scene.add.nyxTileObjectImage(
            (coordinate.getX() * TileObject.TILE_SIZE),
            (coordinate.getY() * TileObject.TILE_SIZE),
            randomTile
        )//.setAlpha(0.5);
      }

      this.tileSparseArray[coordinate.toCantorsPairing()] = [terrainTile];

      const intersectingStructure = LandStructureProvider.getIntersectingStructure(coordinate);

      if (intersectingStructure) {
        const intersectingTile: TileObject<TileUnion> | null = intersectingStructure.getIntersectingTileObject(coordinate) || null;
        if (!intersectingTile) return;

        const enumNumber: TileUnion = intersectingTile.getEnumType();
        const tileAnnotation: MinosStructureAnnotationsType | null = intersectingStructure.getStructure().provideAnnotations().getAnnotationFromTile(enumNumber);

        const buildingTile = (tileAnnotation === MinosStructureAnnotationsType.IGNORE_PHYSICS || tileAnnotation === MinosStructureAnnotationsType.MINOS_GATEWAY)
            ? this.buildingLayer.scene.add.nyxTileObjectImage(
                (coordinate.getX() * TileObject.TILE_SIZE),
                (coordinate.getY() * TileObject.TILE_SIZE),
                intersectingTile)
            : this.buildingLayer.scene.physics.add.image(
                (coordinate.getX() * TileObject.TILE_SIZE),
                (coordinate.getY() * TileObject.TILE_SIZE),
                intersectingTile.imageHash
            ).setImmovable(true)

        this.buildingLayer.add(buildingTile);
        this.tileSparseArray[coordinate.toCantorsPairing()] = [terrainTile, buildingTile];
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