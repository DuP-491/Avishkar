import { Math, Scene } from 'phaser';

import { EVENTS_NAME } from '../consts';
import { Actor } from './actor';
import { Player } from './player';

export class NPC extends Actor {
  private target: Player;
  private INTERACT_RADIUS = 100;
  private attackHandler: () => void;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string,
    target: Player,
    frame?: string | number,
    left?: boolean
  ) {
    super(scene, x, y, texture, frame);
    this.target = target;
    this.flipX = left ?? false;

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
    // this.on('destroy', () => {
    //   this.scene.game.events.removeListener(EVENTS_NAME.attackNPC, this.attackHandler);
    // });
  }

  preUpdate(): void {
    // if (
    //   Math.Distance.BetweenPoints(
    //     { x: this.x, y: this.y },
    //     { x: this.target.x, y: this.target.y }
    //   ) < this.INTERACT_RADIUS
    // ) {
    //   this.askInteract();
    // }
  }

  public setTarget(target: Player): void {
    this.target = target;
  }
}
