export class Liber {
  private static conversion: Map<string, string> = new Map<string, string>([
      ["thelionsoflongleat@gmail.com", "slyo"],
      ["hey@suraj.codes", "alto"]
  ])

  public static lookUp(email: string): string | null {
    return Liber.conversion.get(email) || null
  }
}