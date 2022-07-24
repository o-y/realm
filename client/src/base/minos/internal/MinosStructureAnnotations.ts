import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';

export class MinosStructureAnnotations {
  private annotationMap: Map<MinosStructureAnnotationsType, Array<TileUnion>> = new Map<MinosStructureAnnotationsType, Array<TileUnion>>();

  // TODO: Add a map for O(1) Coordinate -> Tile Annotation look ups and a global class which delegates to n MSAnnotations.
  public setForAnnotation(annotation: MinosStructureAnnotationsType, tiles: Array<TileUnion>): MinosStructureAnnotations {
    if (!this.annotationMap.has(annotation)) {
      this.annotationMap.set(annotation, new Array<TileUnion>());
    }

    this.annotationMap.set(
        annotation, [
            ...this.annotationMap.get(annotation)!,
            ...tiles
        ]
    );

    return this;
  }

  public getForAnnotation(annotation: MinosStructureAnnotationsType) {
    return this.annotationMap.get(annotation) || [];
  }
}

export enum MinosStructureAnnotationsType {
  DOOR = 0
}