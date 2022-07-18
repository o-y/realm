export class Util {
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

  public static randomFromArray<T> (array: Array<T>, seed = Math.random()): T {
    return array[Math.floor(seed * array.length)];
  }

  public static selectFromArray<T> (array: Array<T>, count: number, seed = Math.random()): Array<T> {
    if (count > array.length){
      throw new Error(`#selectFromArray value: ${count} greater than array length (${array.length})`);
    }

    return Util.shuffleArray(array, seed).slice(0, count);
  }

  public static shuffleArray<T> (array: Array<T>, seed: number = Math.random()): Array<T> {
    return array.map(value => ({ value, sort: seed }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
  }

  public static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  public static normaliseBetween(val: number, min: number, max: number): number {
    return (val - min) / (max - min);
  }

  public static getOrSet<T, K>(map: Map<T, K>, key: T, value: K): K {
    if (map.has(key)){
      return map.get(key) as K;
    } else {
      map.set(key, value);
    }

    return value;
  }

  public static assert(condition: boolean, error?: string): void {
    if (!condition){
      throw new Error(error || "Failed to satisfy assertion condition.")
    }
  }

  public static randomColourCode(): number {
    return Math.floor(Math.random() * 0xFFFFFF);
  }
}