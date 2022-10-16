import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameComponent from './game';

function GameLayout() {
  const navigator = useNavigate();
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex w-full h-full">
        <GameComponent viewport="desktop" />
      </div>
      <div
        className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 backdrop-blur-sm text-sm z-40 p-2"
        onClick={() => {
          sessionStorage.setItem('game', 'false');
          navigator('/');
        }}>
        Continue in Simplistic Tablet
      </div>
    </div>
  );
}

export default GameLayout;
