import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';

export class LandStructureAnnotations {
  private annotationMap: Map<MinosStructureAnnotationsType, Array<TileUnion>> = new Map<MinosStructureAnnotationsType, Array<TileUnion>>();
  private reverseAnnotationMap: Map<TileUnion, MinosStructureAnnotationsType> = new Map<TileUnion, MinosStructureAnnotationsType>();

  // TODO: Add a map for O(1) Coordinate -> Tile Annotation look ups and a global class which delegates to n MSAnnotations.
  public populateAnnotationMap(annotation: MinosStructureAnnotationsType, tiles: Array<TileUnion>): LandStructureAnnotations {
    if (!this.annotationMap.has(annotation)) {
      this.annotationMap.set(annotation, new Array<TileUnion>());
    }

    this.annotationMap.set(
        annotation, [
            ...this.annotationMap.get(annotation)!,
            ...tiles
        ]
    );

    tiles.forEach(tile => {
      this.reverseAnnotationMap.set(tile, annotation)
    });

    return this;
  }

  public getForAnnotation(annotation: MinosStructureAnnotationsType): Array<TileUnion> {
    return this.annotationMap.get(annotation) || [];
  }

  public getAnnotationFromTile(tile: TileUnion): MinosStructureAnnotationsType | null {
    return this.reverseAnnotationMap.get(tile) || null;
  }
}

export enum MinosStructureAnnotationsType {
  MINOS_GATEWAY = 1,
  GAIA_GATEWAY = 2,
  IGNORE_PHYSICS = 3
}