package wtf.zv.realm.util;

public class EnumGenerator {
  private static String ENUM = "BRIDGE";

  public static void main(String[] args) {
    int height = 5;
    int width = 16;


    System.out.println("enum " + ENUM + " {");
    for (int i = 0; i < height * width; i++) {
      System.out.println("  " + ENUM + "_" + i + " = " + i + ",");
    }
    System.out.println("}");
  }
}