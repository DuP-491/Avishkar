import Phaser, { GameObjects, Physics, Scene, Tilemaps } from 'phaser';
import { NPC } from '../../classes/npc';
import { Player } from '../../classes/player';
import { EVENTS_NAME } from '../../consts';
import {
  gameObjectsToObjectPoints,
  gameObjectToObjectPoint
} from '../../helpers/gameobject-to-object-point';

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
  private npcChatSprites!: Physics.Arcade.Sprite[];

  constructor() {
    super('cafe96');
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
      key: 'tileInteriorChan',
      url: 'tilemaps/tiles/InteriorChan.png'
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
  }

  create(): void {
    this.initMap();
    this.initPlayer();
    this.initInteractables();
    // this.initChests();
    // this.initEnemies();
    this.initNPCs();
    this.initCamera();
    this.showDebug();
  }

  update(): void {
    this.player.update();
  }

  private initMap(): void {
    // this.map = this.make.tilemap({ key: 'dungeon', tileWidth: 16, tileHeight: 16 });
    this.map = this.make.tilemap({ key: 'Cafe96', tileWidth: 16, tileHeight: 16 });
    // this.tileset = this.map.addTilesetImage('dungeon', 'tiles');
    this.tileset = this.map.addTilesetImage('SpriteChan', 'tileSpriteChan', 16, 16, 0, 0);
    this.tileset2 = this.map.addTilesetImage('Interior', 'tileInteriorChan', 16, 16, 0, 0);
    this.tileset3 = this.map.addTilesetImage('Sports', 'tileSports', 16, 16, 0, 0);
    // this.tileset4 = this.map.addTilesetImage('UI', 'tileUI', 16, 16, 0, 0);
    console.log(this.tileset, this.tileset2, this.tileset3);

    this.layer = this.map.createLayer('Floor', [this.tileset, this.tileset2, this.tileset3], 0, 0);
    this.layer2 = this.map.createLayer(
      'Walls VV2',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer3 = this.map.createLayer(
      'Furniture',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer4 = this.map
      .createLayer('Furniture 2', [this.tileset, this.tileset2, this.tileset3], 0, 0)
      .setDepth(1);
    this.layer5 = this.map
      .createLayer('Walls V', [this.tileset, this.tileset2, this.tileset3], 0, 0)
      .setDepth(1);
    this.layer6 = this.map.createLayer(
      'Walls V2',
      [this.tileset, this.tileset2, this.tileset3],
      0,
      0
    );
    this.layer7 = this.map
      .createLayer('Wall H', [this.tileset, this.tileset2, this.tileset3], 0, 0)
      .setDepth(1);

    // const layer2 = this.map.createLayer(1, this.tileset2, 0, 0);
    // this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0);
    // this.wallsLayer = this.map.createLayer('Walls', this.tileset, 0, 0);
    this.layer7.setCollisionByProperty({ collides: true }, true);
    this.layer6.setCollisionByProperty({ collides: true }, true);
    this.layer5.setCollisionByProperty({ collides: true }, true);
    this.layer3.setCollisionByProperty({ collides: true }, true);

    this.physics.world.setBounds(0, 0, this.layer.width, this.layer.height);
  }

  private initInteractables(): void {
    this.interactables = [];
    const exitPoint = gameObjectToObjectPoint(
      this.map.findObject('Interactables', (obj) => obj.name === 'exit')
    );
    const computerPoint = gameObjectToObjectPoint(
      this.map.findObject('Interactables', (obj) => obj.name === 'cafe96')
    );

    this.interactables.push(
      this.physics.add.group([
        this.physics.add
          .sprite(exitPoint.x, exitPoint.y, 'tiles_ui', 3)
          .setOrigin(0.5, 0.5)
          .setScale(1)
          .setInteractive({
            useHandCursor: true
          })
          .setDepth(2)
          .on('pointerdown', () => {
            this.scene.switch('campus');
          })
      ])
    );
    this.interactables.push(
      this.physics.add.group([
        this.physics.add
          .sprite(computerPoint.x, computerPoint.y, 'tiles_sports', 43)
          .setOrigin(0.5, 0.5)
          .setScale(1)
          .setInteractive({
            useHandCursor: true
          })
          .setDepth(2)
          .on('pointerdown', () => {
            this.game.events.emit(EVENTS_NAME.openComputer, 'teams');
          })
      ])
    );
  }

  private initPlayer(): void {
    this.player = new Player(this, 100, 240);
    this.player.setScale(0.95);

    this.physics.add.collider(this.player, this.layer7);
    this.physics.add.collider(this.player, this.layer6);
    this.physics.add.collider(this.player, this.layer5);
    this.physics.add.collider(this.player, this.layer3);
  }

  private initCamera(): void {
    this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    this.cameras.main.setZoom(2.5);
  }

  private initNPCs(): void {
    const npcsPoints = gameObjectsToObjectPoints(
      this.map.filterObjects('NPCs', (obj) => obj.name === 'NPCPoint')
    );

    this.npcs = npcsPoints.map((npcPoint) =>
      new NPC(
        this,
        npcPoint.x,
        npcPoint.y,
        'tiles_spr',
        this.player,
        360,
        npcPoint.properties.filter((prop) => prop.name === 'left')[0].value,
        npcPoint.properties.filter((prop) => prop.name === 'intr_rad')[0].value
      )
        .setName(npcPoint.id.toString())
        .setScale(1)
    );
    this.npcChatSprites = npcsPoints.map((npcsPoint) => {
      const sprite = new Physics.Arcade.Sprite(
        this,
        npcsPoint.x + 18,
        npcsPoint.y - 14,
        'tiles_ui',
        5
      )
        .setName(npcsPoint.id.toString())
        .setScale(1)
        .setVisible(false);
      this.add.existing(sprite);
      return sprite;
    });
    // console.log(this.npcChatSprites, this.npcs);

    this.physics.add.collider(this.npcs, this.npcs);
    // this.physics.add.collider(this.npcs, this.wallsLayer);
    this.physics.add.collider(this.player, this.npcs);
    this.game.events.on(
      EVENTS_NAME.interact,
      (name: string) => {
        this.npcChatSprites.filter((prop) => prop.name === name)[0].setVisible(true);
      },
      this
    );
    this.game.events.on(
      EVENTS_NAME.resetInteract,
      (name: string) => {
        this.npcChatSprites.filter((prop) => prop.name === name)[0].setVisible(false);
      },
      this
    );

    this.input.on('gameobjectup', (pointer: any, gameObject: any) => {
      // console.log('pointer');
      if (gameObject?.interacting)
        this.game.events.emit(EVENTS_NAME.infoPopup, 'cafe96', gameObject);
    });
  }

  private showDebug(): void {
    const debugGraphics = this.add.graphics().setAlpha(0.7);
    this.layer7.renderDebug(debugGraphics, {
      tileColor: null, // Color of colliding tiles
      collidingTileColor: new Phaser.Display.Color(0, 0, 0, 255)
    });
    this.layer6.renderDebug(debugGraphics, {
      tileColor: null, // Color of colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255)
    });
    this.layer5.renderDebug(debugGraphics, {
      tileColor: null, // Color of colliding tiles
      collidingTileColor: new Phaser.Display.Color(150, 234, 234, 255)
    });
    this.layer3.renderDebug(debugGraphics, {
      tileColor: null, // Color of colliding tiles
      collidingTileColor: new Phaser.Display.Color(150, 0, 234, 255)
    });
    this.player.setDebug(true, true, 250);
  }

  private getTileProperties(): void {
    var tile = this.layer5.getTileAtWorldXY(
      this.game.input.activePointer.worldX,
      this.game.input.activePointer.worldY
    );

    if (!tile) return;

    // Note: JSON.stringify will convert the object tile properties to a string
    // let currentDataString = JSON.stringify(tile.properties);

    // console.log(currentDataString);
  }
}
