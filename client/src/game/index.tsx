import React, { useRef, useState } from 'react';
// import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import { gameConfig } from './config';

interface Props {
  viewport: string;
}

const game = gameConfig;

function GameComponent(props: Props) {
  const { viewport } = props;
  const gameRef = useRef(null);
  // Call `setInitialize` when you want to initialize your game! :)
  const [initialize, setInitialize] = useState(false);
  console.log(game);
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
