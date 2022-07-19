import {AvatarPlugin} from '@/base/prometheus/internal/AvatarPlugin';
import {DecimalCoordinate} from '@/base/atlas/data/coordinate/DecimalCoordinate';
import {Deprecated} from '@/util/annotations/Deprecated';

@Deprecated
export class AvatarCamera extends AvatarPlugin {
  public initiateCameraView() {
    const camera = this.getCamera();
  }

  public setCameraCoordinate(coordinate: DecimalCoordinate): AvatarCamera {
    this.getCamera().setScroll(
        coordinate.getX(),
        coordinate.getY()
    );

    return this;
  }

  public updateCameraCoordinateX(x: number): AvatarCamera {
    const camera = this.getCamera();
    camera.setScroll(x, camera.scrollY);

    return this;
  }

  public updateCameraCoordinateY(y: number): AvatarCamera {
    const camera = this.getCamera();
    camera.setScroll(camera.scrollX, y);

    return this;
  }

  public getCamera(): Phaser.Cameras.Scene2D.Camera {
    return this.getScene().cameras.main;
  }
}