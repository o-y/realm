import NatureTileProvider, {NatureTile} from '@/base/tile/providers/NatureTileProvider';

export default class GenericProvider {
  public static provideNatureProvider(): NatureTileProvider<NatureTile> {
    return new NatureTileProvider<NatureTile>();
  }
}