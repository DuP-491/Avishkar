import { Scene } from 'phaser';

export class Cafe96Scene extends Scene {
  constructor() {
    super('cafe96-scene');
  }

  preload(): void {
    this.load.baseURL = 'assets/';

    // PLAYER LOADING
    // this.load.image('king', 'sprites/king.png');
    // this.load.atlas('a-king', 'spritesheets/a-king.png', 'spritesheets/a-king_atlas.json');

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
    this.load.tilemapTiledJSON('Cafe96', 'tilemaps/json/Cafe96.json');

    this.load.spritesheet('interior_edit_spr', 'tilemaps/json/InteriorChan Edit.tsx', {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('interior_spr', 'tilemaps/json/InteriorChan.tsx', {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('sprite_edit_spr', 'tilemaps/json/SpriteChan Edit.tsx', {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('sprite_spr', 'tilemaps/json/SpriteChan Edit.tsx', {
      frameWidth: 16,
      frameHeight: 16
    });
  }

  create(): void {}
}
