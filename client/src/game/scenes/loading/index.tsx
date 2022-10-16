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
      key: 'tileInteriorChan',
      url: 'tilemaps/tiles/InteriorChan.png'
    });
    this.load.image({
      key: 'tileSports',
      url: 'tilemaps/tiles/Sports.png'
    });
    this.load.image({
      key: 'tileRoomChan',
      url: 'tilemaps/tiles/RoomChan.png'
    });
    this.load.image({
      key: 'tileGoodyChan',
      url: 'tilemaps/tiles/thegoodsheet.png'
    });
    this.load.image({
      key: 'tileBigTreeChan',
      url: 'tilemaps/tiles/BigTreeChan.png'
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
    this.load.spritesheet('tiles_sports', 'tilemaps/tiles/Sports.png', {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.audio('attack', 'music/attack.ogg');
    this.load.audio('hit', 'music/hit.ogg');
    this.load.audio('teleport', 'music/teleport.ogg');
    this.load.audio('cafebg', 'music/cafebg.ogg');
    this.load.audio('campusbg', 'music/campusbg.ogg');
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
