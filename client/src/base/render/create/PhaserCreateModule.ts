import {PhaserBootstrap} from '@/base/render/internal/PhaserBootstrap';
import GenericProvider from '@/base/tile/providers/GenericProvider';
import {NatureSupportTile} from '@/base/tile/providers/NatureSupportTileProvider';
import TileObject from '@/base/tile/TileObject';
import {TileUnion} from '@/base/tile/providers/TileEnumUnion';
import {NatureTile} from '@/base/tile/providers/NatureTileProvider';
import CommonTileProvider from '@/base/tile/providers/CommonTileProvider';
import TileConstants from '@/base/tile/util/TileConstants';
import PhaserWorldGen from '@/base/gen/PhaserWorldGen';

export default class PhaserCreateModule implements PhaserBootstrap {
  private scene: Phaser.Scene;
  private game: Phaser.Game;

  constructor(scene: Phaser.Scene, game: Phaser.Game) {
    this.scene = scene;
    this.game = game;
  }

  public async execute() {
    await new PhaserWorldGen(this.scene, this.game).generateMap(Math.random());
  }
}