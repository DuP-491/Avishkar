/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react';
import Phaser from 'phaser';
import { GameInstance, IonPhaser } from '@ion-phaser/react';
import { gameConfig } from './config';
import { EVENTS_NAME, TELEPORT_LOCATIONS } from './consts';
import InfoPrompt from '../components/InfoPrompt';
import AuthPrompt from '../components/AuthPrompt';
import MiniMap from '../components/MiniMap';
import Map from '../components/Map';

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
  const [showMap, setShowMap] = useState(false);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0, rot: 0 });

  // Auto Initialize the game when the component is mounted
  // useEffect(() => {
  //   setInitialize(true);
  // }, []);

  useEffect(() => {
    if (game) {
      game.instance?.events.on(EVENTS_NAME.infoPopup, (pointer: any, gameObject: any) => {
        console.log(pointer, gameObject);
      });
      setTimeout(() => {
        game.instance?.events.on(EVENTS_NAME.showAuth, () => {
          console.log('show auth');
          setShowAuthPrompt(true);
        });
        game.instance?.events.on(
          EVENTS_NAME.sendPlayerPosition,
          (
            playerX: any,
            playerY: any,
            worldWidth: any,
            worldHeight: any,
            velocityX: any,
            velocityY: any
          ) => {
            // console.log(playerX, playerY, worldWidth, worldHeight)
            const relativeX = (playerX / worldWidth) * 100;
            const relativeY = (playerY / worldHeight) * 100;
            const rotation = Math.atan2(velocityY, velocityX);
            // console.log(rotation, velocityX, velocityY);
            setPlayerPosition({ x: relativeX, y: relativeY, rot: rotation });
            // console.log(relativeX, relativeY);
          }
        );
        setInterval(() => {
          game.instance?.events.emit(EVENTS_NAME.getPlayerPosition);
        }, 100);
      }, 2500);
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

  const teleport = (location: TELEPORT_LOCATIONS) => {
    if (game) {
      game?.instance?.events.emit(EVENTS_NAME.teleport, location);
    }
  };

  const handleOnMapIconClick = () => {
    setShowMap(!showMap);
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
        <button
          className="p-3 text-xl bg-gray-300 hover:bg-gray-400"
          onClick={() => teleport(TELEPORT_LOCATIONS.cafe96)}>
          Teleport to Cafe96
        </button>
        <button className="p-3 text-xl bg-gray-300 hover:bg-gray-400" onClick={destroy}>
          Destroy
        </button>
      </div>
      {showAuthPrompt && (
        <AuthPrompt closePopup={setShowAuthPrompt} authSuccessCallback={onAuthSuccess} />
      )}
      {/* <InfoPrompt text="Jenny Darling youre my best friend and i would love to kill you for a million rupees but i can not. I wanna ruin our friendship. We should be lovers instead"></InfoPrompt> */}
      <MiniMap playerPosition={playerPosition} teleport={teleport} />
      {showMap && <Map playerPosition={playerPosition} teleport={teleport} />}
      <img
        src={require('../images/map-icon.png')}
        className="absolute z-30 cursor-pointer"
        style={{
          top: 65 + '%',
          left: 96 + '%'
        }}
        width={64}
        onClick={handleOnMapIconClick}
      />
    </>
  );
}

export default GameComponent;
