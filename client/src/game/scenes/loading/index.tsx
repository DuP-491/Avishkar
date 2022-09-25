import { Scene } from 'phaser';

export class LoadingScene extends Scene {
  constructor() {
    super('loading-scene');
  }

  preload(): void {
    this.load.baseURL = 'assets/';

    // PLAYER LOADING
    this.load.image('king', 'sprites/king.png');
    this.load.atlas('a-king', 'spritesheets/a-king.png', 'spritesheets/a-king_atlas.json');

    // MAP LOADING
    // this.load.image({
    //   key: 'tiles',
    //   url: 'tilemaps/tiles/dungeon-16-16.png'
    // });
    this.load.image({
      key: 'tileSpriteChan',
      url: 'tilemaps/tiles/SpriteChan.png'
    });
    this.load.image({
      key: 'tileInterior',
      url: 'tilemaps/tiles/Interior.png'
    });
    this.load.image({
      key: 'tileSports',
      url: 'tilemaps/tiles/Sports.png'
    });
    // this.load.tilemapTiledJSON('dungeon', 'tilemaps/json/dungeon.json');
    this.load.tilemapTiledJSON('try5', 'tilemaps/json/try5.json');

    // CHEST LOADING
    this.load.spritesheet('tiles_spr', 'tilemaps/tiles/dungeon-16-16.png', {
      frameWidth: 16,
      frameHeight: 16
    });
    // this.load.spritesheet('tiles_Interior', 'tilemaps/tiles/Interior.png', {
    //   frameWidth: 16,
    //   frameHeight: 16
    // });
  }

  create(): void {
    this.scene.start('level-1-scene');
    this.scene.start('ui-scene');
  }
}
