import React, { useRef, useState } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';

interface Props {
  viewport: string;
}

const game = {
  width: '100%',
  height: '100%',
  type: Phaser.AUTO,
  scene: {
    init: function () {
      this.cameras.main.setBackgroundColor('#24252A');
    },
    create: function () {
      this.helloWorld = this.add.text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'Hello World',
        {
          font: '40px Arial',
          fill: '#ffffff'
        }
      );
      this.helloWorld.setOrigin(0.5);
    },
    update: function () {
      this.helloWorld.angle += 1;
    }
  } as any
};

function GameComponent(props: Props) {
  const { viewport } = props;
  const gameRef = useRef(null);
  // Call `setInitialize` when you want to initialize your game! :)
  const [initialize, setInitialize] = useState(false);
  const destroy = () => {
    if (gameRef.current) {
      (gameRef.current as any).destroy();
    }
    setInitialize(false);
  };
  return (
    <>
      <IonPhaser ref={gameRef} game={game} initialize={initialize} />
      <button onClick={() => setInitialize(true)}>Initialize {viewport}</button>
      <button onClick={destroy}>Destroy</button>
    </>
  );
}

export default GameComponent;
