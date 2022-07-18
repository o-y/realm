import TileObject from '@/base/tile/TileObject';
import {PerlinNoise} from '@/base/gen/perlin/PerlinNoise';
import RealmTileGenUtil from '@/base/gen/tilegen/RealmTileGenUtil';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import "@/framework/nyx/extensions/NyxGameObjectsExtensions"
import {RealmGenerationData, RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {CartesianBound} from '@/base/atlas/data/bound/CartesianBound';
import {DesmosVisualiser} from '@/framework/desmos/DesmosVisualiser';
import {Util} from '@/util/Util';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {Client} from '@/base/prometheus/local/Client';
import {ChunkManager} from '@/base/gen/realms/internal/ChunkManager';

export class GaiaMapGenerator extends RealmGenerator {
  private scene: Phaser.Scene;
  private noiseMap: Map<string, number> = new Map<string, number>();
  private visualiser: DesmosVisualiser = DesmosVisualiser.getInstance();

  constructor(scene: Phaser.Scene) {
    super()

    this.scene = scene;
  }

  private initialChunkLoad = true;

  public async generateMapImpl(
      worldCoordinateLocation: NonDecimalCoordinate,
      generationCoordinate: NonDecimalCoordinate
  ) {
    const chunkManager = this.getRealmGenerationData().getChunkManager();
    const chunkCoordinate = chunkManager.computeChunkFromGenerationCoordinate(generationCoordinate);

    // console.log(
    //     "Received request to generate terrain: ", worldCoordinateLocation
    // )

    if (chunkManager.isChunkLoaded(chunkCoordinate)){
      return;
    }

    chunkManager.updateWorldCoordinateLocation(chunkCoordinate);

    const chunk = chunkManager.createChunk(chunkCoordinate);

    const generationCartesianBound = CartesianBound.fromMidPointAdvanced(
        generationCoordinate,
        Client.WORLD_VIEWPORT_HEIGHT,
        Client.WORLD_VIEWPORT_WIDTH
    );

    const worldCartesianBound = CartesianBound.fromMidPointAdvanced(
        worldCoordinateLocation,
        Client.WORLD_VIEWPORT_HEIGHT,
        Client.WORLD_VIEWPORT_WIDTH
    );

    //-> 48 tiles = screen width
    //-> 96 * 96 = 2d matrix
    //-> JavaScript Number = 64 bits
    //-> 64 * 96 * 96 = 548kb of memory for a single grid
    const worldmap: Array<Array<TileObject<TileUnion>>> = []

    const perlinNoise: PerlinNoise = PerlinNoise
        .create()
        .withSeed(this.getRealmGenerationData().getSeed())

    for (let x = generationCartesianBound.getTopLeft().getY(); x >= generationCartesianBound.getBottomLeft().getY(); x--){
      let xOffset = generationCartesianBound.getTopLeft().getY() - x;
      worldmap[xOffset] = []
      for (let y = generationCartesianBound.getTopLeft().getX(); y <= generationCartesianBound.getTopLeft().getX() + generationCartesianBound.getWidth(); y++) {
        let yOffset = Math.abs((generationCartesianBound.getTopLeft().getX() - y));

        const noise: number = Math.min(
            Math.max(
                Math.abs(perlinNoise.generatePerlin2(x / 100, y / 100)) * 256,
                RealmTileGenUtil.MIN_PERLIN_NOISE),
            RealmTileGenUtil.MAX_PERLIN_NOISE);

        const clampedRandom: number = Util.getOrSet(
            this.noiseMap,
            NonDecimalCoordinate.of(x, y).toString(),
            Math.random())

        worldmap[xOffset].push(
            RealmTileGenUtil
                .selectTileArrayWithNoise(noise, clampedRandom)
                .selectRandomTile(clampedRandom)
        )

        // this.visualiser.setPoint(x, y)
      }
    }

    const baseLayer = this
        .getRealmGenerationData()
        .getLayerManager()
        .getBaseLayer();

    const randomColour = Util.randomColourCode();

    // this.visualiser.showVisualisationRenderer();
    // this.visualiser.clearGraph()
    // worldCartesianBound.toDesmosDebugView()

    for (
        let y = worldCartesianBound.getBottomLeft().getY(), i = 0;
        y < worldCartesianBound.getTopLeft().getY(), i < worldmap.length;
        y++, i++
    ){
      await new Promise(r => setTimeout(r, i * 3));
      for (
          let x = worldCartesianBound.getBottomLeft().getX(), k = 0;
          x < worldCartesianBound.getBottomRight().getX(), k < worldmap[i].length;
          x++, k++
      ){
        const existingTile = baseLayer.scene.children.getByName(`${x}_${y}`);
        if (existingTile == null) {
          const tileObject: TileObject<TileUnion> = worldmap[i][k];
          // const image = baseLayer.scene.add.nyxTileObjectImage(
          //     (x * TileObject.TILE_SIZE),
          //     (y * TileObject.TILE_SIZE),
          //     tileObject
          // );


          const image = baseLayer.scene.add.rectangle(
              (x * TileObject.TILE_SIZE),
              (y * TileObject.TILE_SIZE),
              TileObject.TILE_SIZE,
              TileObject.TILE_SIZE,
              randomColour
          );

          image.name = `${x}_${y}`;
          // image.alpha = 0.5;

          chunk.addObjectToGroup(image)
        }
      }
    }
  }
}