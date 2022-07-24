import {AbstractLandStructure} from '@/base/minos/land/internal/AbstractLandStructure';
import {NonDecimalCoordinate} from '@/base/atlas/data/coordinate/NonDecimalCoordinate';
import {RubyTownTile} from '@/base/tile/providers/RubyTownProvider';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import TileObject from '@/base/tile/TileObject';
import CommonTileProvider from '@/base/tile/providers/helpers/CommonTileProvider';

export class LandStructure {
  private readonly topLeftCoordinate: NonDecimalCoordinate;
  private readonly structure: AbstractLandStructure;

  private constructor(bottomLeftCoordinate: NonDecimalCoordinate, structure: AbstractLandStructure) {
    this.topLeftCoordinate = bottomLeftCoordinate;
    this.structure = structure;
  }

  public static create(bottomLeftCoordinate: NonDecimalCoordinate, structure: AbstractLandStructure): LandStructure {
    return new LandStructure(bottomLeftCoordinate, structure);
  }

  public getBottomLeftCoordinate(): NonDecimalCoordinate {
    return this.topLeftCoordinate;
  }

  public getStructure(): AbstractLandStructure {
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