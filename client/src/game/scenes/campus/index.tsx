/* eslint-disable no-unused-vars */
import Phaser, { GameObjects, Scene, Tilemaps, Physics } from 'phaser';

import { Player } from '../../classes/player';
import { Enemy } from '../../classes/enemy';
import {
  gameObjectsToObjectPoints,
  gameObjectToObjectPoint
} from '../../helpers/gameobject-to-object-point';

import { EVENTS_NAME, TELEPORT_LOCATIONS_DATA } from '../../consts';
import { NPC } from '../../classes/npc';
import { GameConfigExtended } from '../../config';
import Cookies from 'js-cookie';

export class Campus extends Scene {
  // private loggedIn = false;
  private player!: Player;
  private map!: Tilemaps.Tilemap;
  private tileset!: Tilemaps.Tileset;
  private tileset2!: Tilemaps.Tileset;
  private tileset3!: Tilemaps.Tileset;
  private tileset4!: Tilemaps.Tileset;
  private tileset5!: Tilemaps.Tileset;
  private tileset6!: Tilemaps.Tileset;
  private tileset7!: Tilemaps.Tileset;
  private layer!: Tilemaps.TilemapLayer;
  private layer2!: Tilemaps.TilemapLayer;
  private layer3!: Tilemaps.TilemapLayer;
  private layer4!: Tilemaps.TilemapLayer;
  private layer5!: Tilemaps.TilemapLayer;
  private layer6!: Tilemaps.TilemapLayer;
  private layer7!: Tilemaps.TilemapLayer;
  private layer8!: Tilemaps.TilemapLayer;
  private layer9!: Tilemaps.TilemapLayer;
  private layer10!: Tilemaps.TilemapLayer;
  private layer11!: Tilemaps.TilemapLayer;
  private layer12!: Tilemaps.TilemapLayer;
  private chests!: GameObjects.Sprite[];
  private enemies!: Enemy[];
  private npcs!: NPC[];
  private interactables!: GameObjects.Sprite[];
  private npcChatSprites!: Physics.Arcade.Sprite[];
  private loginYamunaGate!: boolean;

  private debugText!: GameObjects.Text;
  private bgm: Phaser.Sound.BaseSound | undefined;

  constructor() {
    super('campus');
  }

  create(data: any): void {
    this.initMap();
    this.initPlayer();
    this.initInteractables();
    // this.initChests();
    // this.initEnemies();
    this.initNPCs();
    this.initCamera();

    this.physics.add.collider(this.player, this.layer, this.player.onGrass);
    this.physics.add.collider(this.player, this.layer12);
    this.physics.add.collider(this.player, this.layer11);
    this.physics.add.collider(this.player, this.layer10);
    this.physics.add.collider(this.player, this.layer9);
    this.physics.add.collider(this.player, this.layer8);
    this.physics.add.collider(this.player, this.layer7);
    this.physics.add.collider(this.player, this.layer6);
    this.physics.add.collider(this.player, this.layer5);
    this.physics.add.collider(this.player, this.layer4);
    this.physics.add.collider(this.player, this.layer3);
    this.physics.add.collider(this.player, this.layer2);

    this.game.events.on(EVENTS_NAME.getPlayerPosition, () => {
      this.game.events.emit(
        EVENTS_NAME.sendPlayerPosition,
        this.player.x,
        this.player.y,
        this.layer.width,
        this.layer.height,
        this.player.body.velocity.x,
        this.player.body.velocity.y
      );
    });

    this.game.events.on(EVENTS_NAME.sceneCampus, () => {
      this.bgm?.resume();
    });

    this.bgm = this.sound.add('campusbg', {
      loop: true,
      volume: 0.7
    });
    this.bgm.play();

    // this.layer5.renderDebug(this.debug);
    // this.layer6.renderDebug(this.debug);
    // this.layer7.renderDebug(this.debug);
    // this.showDebug();

    const token = Cookies.get('token');
    const authenticated = token !== undefined && token !== null;
    if (authenticated) {
      setTimeout(() => {
        this.game.events.emit(EVENTS_NAME.login);
      }, 1000);
    }
  }

  update(): void {
    this.player.update();
    // this.getTileProperties();
  }

  private initMap(): void {
    // this.map = this.make.tilemap({ key: 'dungeon', tileWidth: 16, tileHeight: 16 });
    this.map = this.make.tilemap({ key: 'try5', tileWidth: 16, tileHeight: 16 });
    // this.tileset = this.map.addTilesetImage('dungeon', 'tiles');
    this.tileset = this.map.addTilesetImage('SpriteChan', 'tileSpriteChan', 16, 16, 0, 0);
    this.tileset2 = this.map.addTilesetImage('Interior', 'tileInterior', 16, 16, 0, 0);
    this.tileset3 = this.map.addTilesetImage('Sports', 'tileSports', 16, 16, 0, 0);
    this.tileset4 = this.map.addTilesetImage('InteriorChan', 'tileInteriorChan', 16, 16, 0, 0);
    this.tileset5 = this.map.addTilesetImage('RoomChan', 'tileRoomChan', 16, 16, 0, 0);
    this.tileset6 = this.map.addTilesetImage('GoodyChan', 'tileGoodyChan', 16, 16, 0, 0);
    this.tileset7 = this.map.addTilesetImage('BigTreeChan', 'tileBigTreeChan', 16, 16, 0, 0);

    this.layer = this.map.createLayer(
      'Base Tiles Layer',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer2 = this.map.createLayer(
      'Floor Layer',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer3 = this.map.createLayer(
      'Interior Layer 1',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer4 = this.map.createLayer(
      'Interior Layer 2',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer5 = this.map.createLayer(
      'Hidden Trees Layer',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer6 = this.map.createLayer(
      'Walls Layer',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer7 = this.map.createLayer(
      'Interior Layer 3',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer8 = this.map.createLayer(
      'Interior Layer 4',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer9 = this.map.createLayer(
      'WallSides Layer',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer10 = this.map.createLayer(
      'Stadium Layer',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer11 = this.map.createLayer(
      'Trees Layer',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );
    this.layer12 = this.map.createLayer(
      'Roof Layer',
      [
        this.tileset,
        this.tileset2,
        this.tileset3,
        this.tileset4,
        this.tileset5,
        this.tileset6,
        this.tileset7
      ],
      0,
      0
    );

    // const layer2 = this.map.createLayer(1, this.tileset2, 0, 0);
    // this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0);
    // this.wallsLayer = this.map.createLayer('Walls', this.tileset, 0, 0);
    this.layer.setCollisionByProperty({ collides: true }, false);
    this.layer2.setCollisionByProperty({ collides: true }, true);
    this.layer3.setCollisionByProperty({ collides: true }, true);
    this.layer4.setCollisionByProperty({ collides: true }, true);
    this.layer5.setCollisionByProperty({ collides: true }, true);
    this.layer6.setCollisionByProperty({ collides: true }, true);
    this.layer7.setCollisionByProperty({ collides: true }, true);
    this.layer8.setCollisionByProperty({ collides: true }, true);
    this.layer9.setCollisionByProperty({ collides: true }, true);
    this.layer10.setCollisionByProperty({ collides: true }, true);
    this.layer11.setCollisionByProperty({ collides: true }, true);
    this.layer12.setCollisionByProperty({ collides: true }, true);

    this.loginYamunaGate = false;

    this.physics.world.setBounds(0, 0, this.layer.width, this.layer.height);
    // this.showDebug();
  }

  private initInteractables(): void {
    this.interactables = [];
    const authGanga = gameObjectToObjectPoint(
      this.map.findObject('Interactables', (obj) => obj.name === 'auth')
    );
    const authYamuna = gameObjectToObjectPoint(
      this.map.findObject('Interactables', (obj) => obj.name === 'auth2')
    );
    const enterPoint = gameObjectToObjectPoint(
      this.map.findObject('Interactables', (obj) => obj.name === 'cafe')
    );
    const computers = gameObjectsToObjectPoints(
      this.map.filterObjects('Events', () => {
        return true;
      })
    );

    this.interactables.push(
      this.physics.add
        .sprite(authGanga.x, authGanga.y, 'tiles_ui', 0)
        .setOrigin(0.5, 0.5)
        .setScale(1.5)
        .setInteractive({
          useHandCursor: true
        })
        .on('pointerdown', (e: any) => {
          // console.log('auth');
          console.log(this.interactables[0].frame);

          if (this.interactables[0].frame.name == '0') {
            this.loginYamunaGate = false;
            this.game.events.emit(EVENTS_NAME.showAuth);
          } else {
            // LOGOUT
            this.game.events.emit(EVENTS_NAME.logout);
          }
        })
    );
    // this.interactables.push(
    //   this.physics.add
    //     .sprite(authYamuna.x, authYamuna.y, 'tiles_ui', 0)
    //     .setOrigin(0.5, 0.5)
    //     .setScale(1.5)
    //     .setInteractive({
    //       useHandCursor: true
    //     })
    //     .on('pointerdown', (e: any) => {
    //       // console.log('auth');
    //       if (this.interactables[0].frame.name == '0') {
    //         this.loginYamunaGate = true;
    //         this.game.events.emit(EVENTS_NAME.showAuth);
    //       } else {
    //         // LOGOUT
    //         this.game.events.emit(EVENTS_NAME.logout);
    //       }
    //     })
    // );
    this.interactables.push(
      this.physics.add
        .sprite(enterPoint.x, enterPoint.y, 'tiles_ui', 2) // Cafe-96 enter
        .setOrigin(0.5, 0.5)
        .setScale(1.5)
        .setInteractive({
          useHandCursor: true
        })
        .on('pointerdown', (e: any) => {
          // console.log('enter');
          this.bgm?.pause();
          this.game.events.emit(EVENTS_NAME.sceneCafe);
          this.scene.switch('cafe96');
        })
    );
    this.game.events.on(EVENTS_NAME.login, () => {
      console.log(this.interactables);
      this.interactables[0].setFrame(1);
      // this.interactables[1].setFrame(1);
    });
    this.game.events.on(EVENTS_NAME.logout, () => {
      this.interactables[0].setFrame(0);
      // this.interactables[1].setFrame(0);
      this.player.x = 416;
      this.player.y = 2632;
    });
    computers.forEach((computer) => {
      this.interactables.push(
        this.physics.add
          .sprite(computer.x, computer.y, 'tiles_sports', 43)
          .setOrigin(0.5, 0.5)
          .setScale(1)
          .setInteractive({
            useHandCursor: true
          })
          .setDepth(2)
          .on('pointerdown', () => {
            this.game.events.emit(EVENTS_NAME.openComputer, computer.name);
          })
      );
    });
  }

  private initPlayer(): void {
    this.player = new Player(this, 416, 2632);
    this.game.events.on(EVENTS_NAME.login, () => {
      // teleport player 200 pixels to the right
      // console.log('login');
      // SET PLAYER POSITION ACCORDING TO GATE
      if (this.loginYamunaGate) {
        // console.log('Logged in from yamuna gate');
        this.player.x = 972;
        this.player.y = 889;
      } else {
        this.player.x = 722;
        this.player.y = 2689;
      }
    });
    this.game.events.on(EVENTS_NAME.teleport, (location: string) => {
      const { x, y } = TELEPORT_LOCATIONS_DATA[location];
      this.player.x = x;
      this.player.y = y;
    });
  }

  private initChests(): void {
    const chestPoints = gameObjectsToObjectPoints(
      this.map.filterObjects('Chests', (obj) => obj.name === 'ChestPoint')
    );

    this.chests = chestPoints.map((chestPoint) =>
      this.physics.add.sprite(chestPoint.x, chestPoint.y, 'tiles_spr', 595).setScale(1.5)
    );

    this.chests.forEach((chest) => {
      this.physics.add.overlap(this.player, chest, (_obj1, obj2) => {
        this.game.events.emit(EVENTS_NAME.chestLoot);
        obj2.destroy();
        // this.cameras.main.flash();
      });
    });
  }

  private initEnemies(): void {
    const enemiesPoints = gameObjectsToObjectPoints(
      this.map.filterObjects('Enemies', (obj) => obj.name === 'EnemyPoint')
    );

    this.enemies = enemiesPoints.map((enemyPoint) =>
      new Enemy(this, enemyPoint.x, enemyPoint.y, 'tiles_spr', this.player, 503)
        .setName(enemyPoint.id.toString())
        .setScale(1.5)
    );

    // this.physics.add.collider(this.enemies, this.wallsLayer);
    this.physics.add.collider(this.enemies, this.enemies);
    this.physics.add.collider(
      this.player,
      this.enemies,
      (obj1, _obj2) => {
        (obj1 as Player).getDamage(1);
      },
      undefined,
      this
    );
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
        npcPoint.properties.filter((prop) => prop.name === 'intr_rad')[0].value,
        npcPoint.properties.filter((prop) => prop.name === 'type')[0].value
      )
        .setName(npcPoint.id.toString())
        .setScale(1.5)
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
      (scene: string, name: string) => {
        if (scene == 'campus') {
          this.npcChatSprites.filter((prop) => prop.name === name)[0].setVisible(true);
        }
      },
      this
    );
    this.game.events.on(
      EVENTS_NAME.resetInteract,
      (scene: string, name: string) => {
        if (scene == 'campus') {
          this.npcChatSprites.filter((prop) => prop.name === name)[0].setVisible(false);
        }
      },
      this
    );
    this.input.on('gameobjectup', (pointer: any, gameObject: any) => {
      // console.log('pointer');
      if (gameObject?.interacting)
        this.game.events.emit(EVENTS_NAME.infoPopup, 'campus', gameObject);
    });
  }

  private initCamera(): void {
    this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    this.cameras.main.setZoom(3);
  }

  private showDebug(): void {
    const debugGraphics = this.add.graphics().setAlpha(0.7);
    this.layer.renderDebug(debugGraphics, {
      tileColor: null, // Color of colliding tiles
      collidingTileColor: new Phaser.Display.Color(0, 0, 0, 255)
    });
    this.layer6.renderDebug(debugGraphics, {
      tileColor: null, // Color of colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255)
    });
    this.layer9.renderDebug(debugGraphics, {
      tileColor: null, // Color of colliding tiles
      collidingTileColor: new Phaser.Display.Color(150, 234, 234, 255)
    });
    this.player.setDebug(true, true, 250);

    this.debugText = this.add.text(10, 10, '', { font: '16px Courier', color: '#00ff00' });
    this.debugText.text = 'Debug text';
  }

  private getTileProperties(): void {
    var tile = this.layer6.getTileAtWorldXY(
      this.game.input.activePointer.worldX,
      this.game.input.activePointer.worldY
    );

    if (!tile) return;

    // Note: JSON.stringify will convert the object tile properties to a string
    // let currentDataString = JSON.stringify(tile.properties);

    // console.log(currentDataString);
  }
}
