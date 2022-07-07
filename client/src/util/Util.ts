export default class Util {
  /**
   * Generates a hashcode for a given string.
   *
   * @param str
   * @param seed - 0 by default
   * @author bryc - https://stackoverflow.com/a/52171480
   * @license Public Domain
   */
  public static hashCode(str: string, seed: number = 0): number {
    let h1: number = 0xdeadbeef ^ seed, h2: number = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      let ch: number = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
  };

  public static randomFromArray<T> (array: Array<T>): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}