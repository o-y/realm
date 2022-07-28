import {AvatarPlugin} from '@/base/prometheus/internal/AvatarPlugin';
import {AvatarCamera} from '@/base/prometheus/theia/AvatarCamera';
import {AbstractSprite} from '@/base/prometheus/sprite/internal/AbstractSprite';
import {CoordinateUtil} from '@/base/atlas/data/coordinate/util/CoordinateUtil';
import {Coordinate} from '@/base/atlas/data/coordinate/Coordinate';
import {RealmGenerator} from '@/base/gen/realms/internal/RealmGenerator';
import {LocalAvatarController} from '@/base/prometheus/local/LocalAvatarController';
import {LocalPeer} from '@/base/supabase/peer/LocalPeer';
import {AvatarRender} from '@/base/prometheus/std/AvatarRender';
import {AvatarObjectRender} from '@/base/prometheus/std/AvatarObjectRender';
import {NyxLayer} from '@/framework/nyx/NyxLayer';
import {MeetingLocationBoundsMap} from '@/framework/metered/data/MeetingLocationBoundsMap';
import {MeteredSingleton} from '@/framework/metered/MeteredSingleton';
import {LandStructureProvider} from '@/base/minos/land/LandStructureProvider';
import TileObject from '@/base/tile/TileObject';
import {TileUnion} from '@/base/tile/providers/helpers/TileEnumUnion';
import {MinosStructureAnnotationsType} from '@/base/minos/land/internal/LandStructureAnnotations';

export class LocalAvatarRender extends AvatarRender {
  private readonly avatarCameraPlugin: AvatarCamera = AvatarPlugin
      .withAvatarPlugin<this, AvatarCamera>(this, AvatarCamera);

  private readonly avatarController: LocalAvatarController = AvatarPlugin
      .withAvatarPlugin<this, LocalAvatarController>(this, LocalAvatarController);

  private playerSprite: AbstractSprite | null = null;

  public setCollisionLayer(layer: NyxLayer): LocalAvatarRender {
    this.getScene().physics.add.collider(
        this.getAvatarObjectRender().getAvatarObject(),
        layer.getChildren()
    );

    return this;
  }

  public getAvatarObjectRender(): AvatarObjectRender {
    const avatarObjectRender = super.getAvatarObjectRender();
    const scene = this.getScene();

    scene.cameras.main.startFollow(avatarObjectRender.getAvatarObject());

    return avatarObjectRender;
  }

  public awaitInputAndGenerateTerrain(realmGenerator: RealmGenerator) {
    if (this.playerSprite === null) {
      this.playerSprite = this.provideSprite();
    }

    // Input
    this.avatarController.awaitInput(this.getAvatarObjectRender(), this.playerSprite);

    // Generate Terrain
    this.handleTerrainGeneration(realmGenerator);
  }

  private lastPositionX = this.getAvatar().getTileCoordinate().getX();
  private lastPositionY = this.getAvatar().getTileCoordinate().getY();

  private hasRanFirstRender = false;

  private handleTerrainGeneration(realmGenerator: RealmGenerator) {
    const avatarObject: Phaser.Types.Physics.Arcade.ImageWithDynamicBody = this.getAvatarObjectRender().getAvatarObject();

    const worldToTileConversionCoordinate = CoordinateUtil.convertWorldSpaceToTileCoordinate(
        avatarObject.x,
        avatarObject.y
    )

    const intersectingStructure = LandStructureProvider.getIntersectingStructure(worldToTileConversionCoordinate);

    if (intersectingStructure) {
      const intersectingTile: TileObject<TileUnion> | null = intersectingStructure.getIntersectingTileObject(worldToTileConversionCoordinate);
      if (!intersectingTile) return;

      const enumNumber: TileUnion = intersectingTile.getEnumType();
      const tileAnnotation: MinosStructureAnnotationsType | null = intersectingStructure.getStructure().provideAnnotations().getAnnotationFromTile(enumNumber);

      if (tileAnnotation === MinosStructureAnnotationsType.DOOR) {
        console.log("LocalPlayer has touched a door!");
      }
    }

    if (worldToTileConversionCoordinate.getY() != this.lastPositionY || worldToTileConversionCoordinate.getX() != this.lastPositionX || !this.hasRanFirstRender) {
      this.hasRanFirstRender = true;

      const currentMeetingLocation = MeetingLocationBoundsMap.calculateCurrentMeetingBoundLocation(worldToTileConversionCoordinate);
      if (currentMeetingLocation !== null){
        MeteredSingleton
            .getInstance()
            .getMeetingSpatialCoordinator()
            .onMeetingLocationUpdate(currentMeetingLocation)
      }
    }

    if (worldToTileConversionCoordinate.getY() != this.lastPositionY || worldToTileConversionCoordinate.getX() != this.lastPositionX) {
      realmGenerator.loadGenerationAt(
          /* current = */ Coordinate.of(this.lastPositionX, this.lastPositionY),
          /* next = */ Coordinate.of(worldToTileConversionCoordinate.getX(), worldToTileConversionCoordinate.getY())
      )

      const localPeer: LocalPeer = <LocalPeer>this.getAvatar().getPeer();
      localPeer.updatePosition(worldToTileConversionCoordinate);

      this.lastPositionY = worldToTileConversionCoordinate.getY();
      this.lastPositionX = worldToTileConversionCoordinate.getX();
    }
  }
}