package wtf.zv.realm;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Set;
import javax.imageio.ImageIO;

/* Dissects image tilesets into smaller sub-images (tiles). */
public class ImageDissector {
  private static final int DEFAULT_TILE_SIZE = 48;
  private final File file;

  public static void main(String[] args) throws IOException {

    Set<String> tilesets = Set.of("nature/nature.png", "interior/interior.png", "rubytown/rubytown.png");

    tilesets.stream()
        .map(relativeDir -> new File(String.format("util/src/main/java/wtf/zv/realm/%s", relativeDir)))
        .map(ImageDissector::new)
        .forEach(ImageDissector::dissectImage);
  }

  public ImageDissector(File file) {
    this.file = file;
  }

  public void dissectImage() {
    dissectImage(DEFAULT_TILE_SIZE);
  }

  public void dissectImage(int dissectionDimension) {
    System.out.println("Dissecting file: '" + file.getName() + "'");

    String fileExtension = extractFileExtension();
    String absolutePath = absolutePathOmittingFileExtension();

    try {
      final BufferedImage source = ImageIO.read(file);

      int index = 0;
      for (int y = 0; y < source.getHeight(); y += dissectionDimension) {
        for (int x = 0; x < source.getWidth(); x += dissectionDimension) {
          File tileFile = new File(String.format("%s_%d.%s", absolutePath, index, fileExtension));
          System.out.println("Writing: " + tileFile.getName());

          ImageIO.write(
              source.getSubimage(x, y, dissectionDimension, dissectionDimension),
              fileExtension,
              tileFile
          );

          index++;
        }
      }
    } catch (IOException exception){
      System.out.println("Failed to read/write file: " + file.getName() + " - " + exception.getMessage());
    }
  }

  private String absolutePathOmittingFileExtension() {
    return file.getAbsolutePath().substring(0, file.getAbsolutePath().lastIndexOf("."));
  }

  private String extractFileExtension() {
    return file.getName().substring(file.getName().lastIndexOf(".") + 1);
  }
}