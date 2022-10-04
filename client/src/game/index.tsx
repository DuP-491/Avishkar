/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import Phaser from 'phaser';
import { GameInstance, IonPhaser } from '@ion-phaser/react';
import { gameConfig } from './config';
import { EVENTS_NAME } from './consts';
import InfoPrompt from '../components/InfoPrompt';
import AuthPrompt from '../components/AuthPrompt';

function debounce(fn: Function, ms: number) {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn(fn, []);
    }, ms);
  };
}

interface Props {
  viewport: string;
}

function GameComponent(props: Props) {
  const { viewport } = props;
  const gameRef = useRef(null);
  // Call `setInitialize` when you want to initialize your game! :)
  const [initialize, setInitialize] = useState(false);
  const [game, setGame] = useState<GameInstance>();
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const destroy = () => {
    if (gameRef.current) {
      (gameRef.current as any).destroy();
    }
    setInitialize(false);
    setGame(undefined);
  };

  // Game States
  const [showInfoPrompt, setShowInfoPrompt] = useState(false);
  const [infoPromptText, setInfoPromptText] = useState('');
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  // Auto Initialize the game when the component is mounted
  // useEffect(() => {
  //   setInitialize(true);
  // }, []);

  useEffect(() => {
    if (game) {
      game.instance?.events.on(EVENTS_NAME.infoPopup, (pointer: any, gameObject: any) => {
        console.log(pointer, gameObject);
      });
      game.instance?.events.on(EVENTS_NAME.showAuth, () => {
        console.log('show auth');
        setShowAuthPrompt(true);
      });
    }
  }, [game]);

  useEffect(() => {
    if (initialize) {
      setGame(Object.assign({}, gameConfig));
      // document.getElementById("canvas-div")?.appendChild(React.createElement(InfoPrompt));
    }
  }, [initialize]);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
      destroy();
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  useEffect(() => {
    gameConfig.scale!.width = window.innerWidth;
    gameConfig.scale!.height = window.innerHeight;
    setInitialize(true);
  }, [dimensions]);

  const onAuthSuccess = () => {
    if (game) {
      game?.instance?.events.emit(EVENTS_NAME.authSuccess);
      setTimeout(() => {
        setShowAuthPrompt(false);
      }, 1000);
    }
  };

  return (
    <>
      <IonPhaser ref={gameRef} game={game} initialize={initialize} />
      <div className="absolute bottom-0 left-0 z-20 flex flex-col m-16 space-y-3">
        <div className="text-white">
          Dimensions : {dimensions.width} x {dimensions.height}
        </div>
        <button
          className="p-3 text-xl bg-gray-300 hover:bg-gray-400"
          onClick={() => setInitialize(true)}>
          Initialize game for {viewport}
        </button>
        <button className="p-3 text-xl bg-gray-300 hover:bg-gray-400" onClick={destroy}>
          Destroy
        </button>
      </div>
      {showAuthPrompt && (
        <AuthPrompt closePopup={setShowAuthPrompt} authSuccessCallback={onAuthSuccess} />
      )}
      {/* <InfoPrompt text="Jenny Darling youre my best friend and i would love to kill you for a million rupees but i can not. I wanna ruin our friendship. We should be lovers instead"></InfoPrompt> */}
    </>
  );
}

export default GameComponent;
