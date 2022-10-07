import { GameObjects, Scene, Tilemaps } from 'phaser';
import { NPC } from '../../classes/npc';
import { Player } from '../../classes/player';

export class Cafe96Scene extends Scene {
  private player!: Player;
  private map!: Tilemaps.Tilemap;
  private tileset!: Tilemaps.Tileset;
  private tileset2!: Tilemaps.Tileset;
  private tileset3!: Tilemaps.Tileset;
  private tileset4!: Tilemaps.Tileset;
  private layer!: Tilemaps.TilemapLayer;
  private layer2!: Tilemaps.TilemapLayer;
  private layer3!: Tilemaps.TilemapLayer;
  private layer4!: Tilemaps.TilemapLayer;
  private layer5!: Tilemaps.TilemapLayer;
  private layer6!: Tilemaps.TilemapLayer;
  private layer7!: Tilemaps.TilemapLayer;
  private layer8!: Tilemaps.TilemapLayer;
  private layer9!: Tilemaps.TilemapLayer;
  private chests!: GameObjects.Sprite[];
  private npcs!: NPC[];
  private interactables!: (GameObjects.Sprite | GameObjects.Group)[];

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

  create(): void {
    this.initMap();
    this.initPlayer();
    this.initInteractables();
    // this.initChests();
    // this.initEnemies();
    // this.initNPCs();
    this.initCamera();
  }
  update(): void {
    this.player.update();
  }

  private initMap(): void {
    // this.map = this.make.tilemap({ key: 'dungeon', tileWidth: 16, tileHeight: 16 });
    this.map = this.make.tilemap({ key: 'try5', tileWidth: 16, tileHeight: 16 });
    // this.tileset = this.map.addTilesetImage('dungeon', 'tiles');
    this.tileset = this.map.addTilesetImage('SpriteChan', 'tileSpriteChan', 16, 16, 0, 0);
    this.tileset2 = this.map.addTilesetImage('Interior', 'tileInterior', 16, 16, 0, 0);
    this.tileset3 = this.map.addTilesetImage('Sports', 'tileSports', 16, 16, 0, 0);
    // this.tileset4 = this.map.addTilesetImage('UI', 'tileUI', 16, 16, 0, 0);

    this.layer = this.map.createLayer(
      'Base Tiles Layer',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer2 = this.map.createLayer(
      'Floor Layer',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer3 = this.map.createLayer(
      'Interior Layer 1',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer4 = this.map.createLayer(
      'Interior Layer 2',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer5 = this.map.createLayer(
      'Walls Layer',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer6 = this.map.createLayer(
      'WallSides Layer',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer7 = this.map.createLayer(
      'Roof Layer',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer8 = this.map.createLayer(
      'Trees Layer',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer9 = this.map.createLayer(
      'Stadium Layer',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );

    // const layer2 = this.map.createLayer(1, this.tileset2, 0, 0);
    // this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0);
    // this.wallsLayer = this.map.createLayer('Walls', this.tileset, 0, 0);
    this.layer.setCollisionByProperty({ collides: true }, false);
    this.layer5.setCollisionByProperty({ collides: true }, true);
    this.layer6.setCollisionByProperty({ collides: true }, true);

    this.physics.world.setBounds(0, 0, this.layer.width, this.layer.height);
    // this.showDebug();
  }

  private initInteractables(): void {
    this.interactables = [];
    // const authPoint = gameObjectToObjectPoint(
    //   this.map.findObject('Interactables', (obj) => obj.name === 'auth')
    // );
    // const enterPoint = gameObjectToObjectPoint(
    //   this.map.findObject('Interactables', (obj) => obj.name === 'cafe')
    // );

    // this.interactables.push(
    //   this.physics.add.group([
    //     this.physics.add
    //       .sprite(authPoint.x, authPoint.y, 'tiles_ui', 0)
    //       .setOrigin(0.5, 0.5)
    //       .setScale(1.5)
    //       .setInteractive({
    //         useHandCursor: true
    //       })
    //       .on('pointerdown', (e: any) => {
    //         console.log('auth');
    //         this.game.events.emit(EVENTS_NAME.showAuth);
    //       })
    //   ])
    // );
  }

  private initPlayer(): void {
    this.player = new Player(this, 20, 20);
  }

  private initCamera(): void {
    this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    this.cameras.main.setZoom(1.5);
  }
}
