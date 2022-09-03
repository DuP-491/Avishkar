import Phaser, { Physics } from 'phaser';
import { EVENTS_NAME } from '../consts';

export class Actor extends Physics.Arcade.Sprite {
  protected hp = 100;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.getBody().setCollideWorldBounds(true);
  }

  public getDamage(value?: number): void {
    this.scene.tweens.add({
      targets: this,
      duration: 100,
      repeat: 3,
      yoyo: true,
      alpha: 0.5,
      onStart: () => {
        if (value) {
          this.hp = this.hp - value;
        }
      },
      onComplete: () => {
        this.setAlpha(1);
      }
    });
  }

  public getAngry(): void {
    console.log('angry');
    this.scene.cameras.main.shake(50, 0.01);
  }

  public askInteract(name: string): void {
    this.scene.game.events.emit(EVENTS_NAME.interact, name);
    // console.log('askInteract');
  }

  public resetInteract(name: string): void {
    this.scene.game.events.emit(EVENTS_NAME.resetInteract, name);
    // console.log('resetInteract');
  }

  public getHPValue(): number {
    return this.hp;
  }

  protected checkFlip(): void {
    if (this.body.velocity.x < 0) {
      this.scaleX = -1;
    } else {
      this.scaleX = 1;
    }
  }

  protected getBody(): Physics.Arcade.Body {
    return this.body as Physics.Arcade.Body;
  }
}
