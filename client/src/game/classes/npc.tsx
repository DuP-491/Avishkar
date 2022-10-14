import { Input, Math, Scene } from 'phaser';

import { EVENTS_NAME } from '../consts';
import { Actor } from './actor';
import { Player } from './player';

export class NPC extends Actor {
  private target: Player;
  private INTERACT_RADIUS = 100;
  private interacting = false;
  private attackHandler: () => void;
  private keyE: Input.Keyboard.Key;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string,
    target: Player,
    frame?: string | number,
    left?: boolean,
    interact_radius?: number
  ) {
    super(scene, x, y, texture, frame);
    this.target = target;
    if (interact_radius) this.INTERACT_RADIUS = interact_radius;
    this.flipX = left ?? false;
    this.keyE = this.scene.input.keyboard.addKey('E');

    this.attackHandler = () => {
      if (
        Math.Distance.BetweenPoints(
          { x: this.x, y: this.y },
          { x: this.target.x, y: this.target.y }
        ) < this.target.width
      ) {
        this.getAngry();
      }
    };

    // ADD TO SCENE
    scene.add.existing(this);
    // scene.physics.add.existing(this);

    // PHYSICS MODEL
    this.getBody().setSize(16, 16);
    this.getBody().setOffset(0, 0);
    this.getBody().setImmovable(true);

    // EVENTS
    this.scene.game.events.on(EVENTS_NAME.attack, this.attackHandler, this);
    // this.on('pointerup', (pointer: any) => {
    //   console.log(pointer);
    // });
    this.setInteractive();
    this.keyE.on('down', () => {
      if (this.interacting)
        this.scene.game.events.emit(EVENTS_NAME.infoPopup, this.scene.scene.key, this);
    });

    // this.on('destroy', () => {
    //   this.scene.game.events.removeListener(EVENTS_NAME.attackNPC, this.attackHandler);
    // });
  }

  preUpdate(): void {
    if (
      Math.Distance.BetweenPoints(
        { x: this.x, y: this.y },
        { x: this.target.x, y: this.target.y }
      ) < this.INTERACT_RADIUS
    ) {
      if (!this.interacting) {
        this.interacting = true;
        this.askInteract(this.name, "Press 'E' to interact");
      }
    } else {
      if (this.interacting) {
        this.interacting = false;
        this.resetInteract(this.name);
      }
    }
  }

  public setTarget(target: Player): void {
    this.target = target;
  }
}
