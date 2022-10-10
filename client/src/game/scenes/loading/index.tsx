import { Scene } from 'phaser';

export class LoadingScene extends Scene {
  constructor() {
    super('loading-scene');
  }

  preload(): void {
    this.load.baseURL = 'assets/';

    // PLAYER LOADING
    this.load.image('player', 'sprites/player.png');
    this.load.atlas('a-player', 'spritesheets/PlayerChan-0.png', 'spritesheets/PlayerChan.json');

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
    // this.load.image({
    //   key: 'tileUI',
    //   url: 'spritesheets/UI.png'
    // });
    // this.load.tilemapTiledJSON('dungeon', 'tilemaps/json/dungeon.json');
    this.load.tilemapTiledJSON('try5', 'tilemaps/json/try5.json');

    // CHEST LOADING
    this.load.spritesheet('tiles_spr', 'tilemaps/tiles/dungeon-16-16.png', {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('tiles_ui', 'spritesheets/UI.png', {
      frameWidth: 32,
      frameHeight: 16
    });
    // this.load.spritesheet('tiles_Interior', 'tilemaps/tiles/Interior.png', {
    //   frameWidth: 16,
    //   frameHeight: 16
    // });
  }

  create(): void {
    this.scene.start('campus');
    this.scene.start('ui-scene');
  }
}
