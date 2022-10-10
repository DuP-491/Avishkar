import { Input, Scene } from 'phaser';

import { EVENTS_NAME, GameStatus } from '../consts';
import { Actor } from './actor';
// import { Text } from './text';

export class Player extends Actor {
  private keyW: Input.Keyboard.Key;
  private keyA: Input.Keyboard.Key;
  private keyS: Input.Keyboard.Key;
  private keyD: Input.Keyboard.Key;
  private keyLeft: Input.Keyboard.Key;
  private keyUp: Input.Keyboard.Key;
  private keyRight: Input.Keyboard.Key;
  private keyDown: Input.Keyboard.Key;
  private keySpace: Input.Keyboard.Key;
  // private hpValue: Text;
  private speed: number;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'player');

    // CONFIGS
    this.speed = 420;

    // KEYS
    this.keyW = this.scene.input.keyboard.addKey('W');
    this.keyA = this.scene.input.keyboard.addKey('A');
    this.keyS = this.scene.input.keyboard.addKey('S');
    this.keyD = this.scene.input.keyboard.addKey('D');
    this.keyLeft = this.scene.input.keyboard.addKey(37);
    this.keyUp = this.scene.input.keyboard.addKey(38);
    this.keyRight = this.scene.input.keyboard.addKey(39);
    this.keyDown = this.scene.input.keyboard.addKey(40);
    this.keySpace = this.scene.input.keyboard.addKey(32);

    // eslint-disable-next-line no-unused-vars
    this.keySpace.on('down', (_event: KeyboardEvent) => {
      this.anims.play('attack');
      this.scene.game.events.emit(EVENTS_NAME.attack);
    });

    // this.hpValue = new Text(this.scene, this.x, this.y - this.height, this.hp.toString())
    //   .setFontSize(12)
    //   .setOrigin(0.8, 0.5);

    // PHYSICS
    this.getBody().setSize(18, 18);
    this.getBody().setOffset(0, 1);
    this.setScale(2);

    // ANIMATIONS
    this.initAnimations();

    this.on('destroy', () => {
      this.keySpace.removeAllListeners();
    });

    // this.setDebug(true, true, 2);
    // this.debugShowBody = true;
  }

  update(): void {
    this.getBody().setVelocity(0);

    if (this.keyW?.isDown || this.keyUp?.isDown) {
      this.body.velocity.y = -this.speed;
      !this.anims.isPlaying && this.anims.play('walk', true);
    }

    if (this.keyA?.isDown || this.keyLeft?.isDown) {
      this.body.velocity.x = -this.speed;
      // this.checkFlip();
      this.flipX = true;
      this.getBody().setOffset(0, 0);
      !this.anims.isPlaying && this.anims.play('walk', true);
    }

    if (this.keyS?.isDown || this.keyDown?.isDown) {
      this.body.velocity.y = this.speed;
      !this.anims.isPlaying && this.anims.play('walk', true);
    }

    if (this.keyD?.isDown || this.keyRight?.isDown) {
      this.body.velocity.x = this.speed;
      // this.checkFlip();
      this.flipX = false;
      this.getBody().setOffset(0, 0);
      !this.anims.isPlaying && this.anims.play('walk', true);
    }

    if (
      !this.keyW?.isDown &&
      !this.keyA?.isDown &&
      !this.keyS?.isDown &&
      !this.keyD?.isDown &&
      !this.anims.isPlaying
    ) {
      this.anims.play('idle', true);
    }

    // this.hpValue.setPosition(this.x, this.y - this.height * 0.4);
    // this.hpValue.setOrigin(0.8, 0.5);
  }

  private initAnimations(): void {
    this.scene.anims.create({
      key: 'idle',
      frames: this.scene.anims.generateFrameNames('a-player', {
        prefix: 'idle/player-idle-',
        end: 5
      }),
      frameRate: 8
    });

    this.scene.anims.create({
      key: 'walk',
      frames: this.scene.anims.generateFrameNames('a-player', {
        prefix: 'walk/player-walk-',
        end: 5
      }),
      frameRate: 8
    });

    this.scene.anims.create({
      key: 'attack',
      frames: this.scene.anims.generateFrameNames('a-player', {
        prefix: 'attack/player-attack-',
        end: 2
      }),
      frameRate: 8
    });

    this.scene.anims.create({
      key: 'die',
      frames: this.scene.anims.generateFrameNames('a-player', {
        prefix: 'die/player-die-',
        end: 3
      }),
      frameRate: 8
    });

    this.anims.play('idle', true);
  }

  public getDamage(value?: number): void {
    super.getDamage(value);
    // this.hpValue.setText(this.hp.toString());

    if (this.hp <= 0) {
      this.scene.game.events.emit(EVENTS_NAME.gameEnd, GameStatus.LOSE);
    }
  }

  public onGrass(props: any): void {
    console.log('onGrass', props);

    this.speed = 300;
  }
}
