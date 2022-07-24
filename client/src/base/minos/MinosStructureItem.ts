import {MinosAbstractStructure} from '@/base/minos/internal/MinosAbstractStructure';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import TileObject from '@/base/tile/TileObject';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class MinosStructureItem {
  private readonly topLeftCoordinate: NonDecimalCoordinate;
  private readonly structure: MinosAbstractStructure;

  private constructor(bottomLeftCoordinate: NonDecimalCoordinate, structure: MinosAbstractStructure) {
    this.topLeftCoordinate = bottomLeftCoordinate;
    this.structure = structure;
  }

  public static create(bottomLeftCoordinate: NonDecimalCoordinate, structure: MinosAbstractStructure): MinosStructureItem {
    return new MinosStructureItem(bottomLeftCoordinate, structure);
  }

  public getBottomLeftCoordinate(): NonDecimalCoordinate {
    return this.topLeftCoordinate;
  }

  public getStructure(): MinosAbstractStructure {
    return this.structure;
  }

  public doesCoordinateIntersect(tileCoordinate: NonDecimalCoordinate): boolean {
    const yIntersection = tileCoordinate.getY() >= this.topLeftCoordinate.getY() && tileCoordinate.getY() <= this.topLeftCoordinate.getY() + this.structure.getHeight() - 1;
    const xIntersection = tileCoordinate.getX() >= this.topLeftCoordinate.getX() && tileCoordinate.getX() <= this.topLeftCoordinate.getX() + this.structure.getWidth() - 1;

    return yIntersection && xIntersection;
  }

  public getIntersectingTile(tileCoordinate: NonDecimalCoordinate): TileObject<RubyTownTile> {
    const structureMatrix: Array<Array<RubyTownTile>> = this.structure.provideStructureMatrix();

    const yIndex = this.topLeftCoordinate.getY() - tileCoordinate.getY() + (this.structure.getHeight() - 1);
    const xIndex = tileCoordinate.getX() - this.topLeftCoordinate.getX();

    return CommonTileProvider.getRubyTownTile(structureMatrix[yIndex][xIndex]);
  }
}