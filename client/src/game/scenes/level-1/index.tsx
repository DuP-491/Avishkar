/* eslint-disable no-unused-vars */
import Phaser, { GameObjects, Scene, Tilemaps } from 'phaser';

import { Player } from '../../classes/player';
import { Enemy } from '../../classes/enemy';
import { gameObjectsToObjectPoints } from '../../helpers/gameobject-to-object-point';

import { EVENTS_NAME } from '../../consts';
import { NPC } from '../../classes/npc';

export class Level1 extends Scene {
  private player!: Player;
  private map!: Tilemaps.Tilemap;
  private tileset!: Tilemaps.Tileset;
  private wallsLayer!: Tilemaps.TilemapLayer;
  private groundLayer!: Tilemaps.TilemapLayer;
  private chests!: GameObjects.Sprite[];
  private enemies!: Enemy[];
  private npcs!: NPC[];

  constructor() {
    super('level-1-scene');
  }

  create(): void {
    this.initMap();
    this.player = new Player(this, 100, 100);
    this.initChests();
    this.initEnemies();
    this.initNPCs();
    this.initCamera();

    this.physics.add.collider(this.player, this.wallsLayer);
  }

  update(): void {
    this.player.update();
  }

  private initMap(): void {
    this.map = this.make.tilemap({ key: 'dungeon', tileWidth: 16, tileHeight: 16 });
    this.tileset = this.map.addTilesetImage('dungeon', 'tiles');
    this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0);
    this.wallsLayer = this.map.createLayer('Walls', this.tileset, 0, 0);
    this.wallsLayer.setCollisionByProperty({ collides: true });

    this.physics.world.setBounds(0, 0, this.wallsLayer.width, this.wallsLayer.height);
    this.showDebug();
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

    this.physics.add.collider(this.enemies, this.wallsLayer);
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
        npcPoint.properties.filter((prop) => prop.name === 'left')[0].value
      )
        .setName(npcPoint.id.toString())
        .setScale(1.5)
    );

    this.physics.add.collider(this.npcs, this.npcs);
    this.physics.add.collider(this.npcs, this.wallsLayer);
    this.physics.add.collider(this.player, this.npcs, (_obj1, obj2) => {
      (obj2 as NPC).askInteract();
    });
  }

  private initCamera(): void {
    this.cameras.main.setSize(this.game.scale.width, this.game.scale.height);
    this.cameras.main.startFollow(this.player, true, 0.09, 0.09);
    this.cameras.main.setZoom(2);
  }

  private showDebug(): void {
    const debugGraphics = this.add.graphics().setAlpha(0.7);
    // this.wallsLayer.renderDebug(debugGraphics, {
    //   tileColor: null,
    //   collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255)
    // });
  }
}
