import React from 'react';
import GameComponent from './game';

function GameLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex w-full h-full">
        <GameComponent viewport="desktop" />
      </div>
    </div>
  );
}

export default GameLayout;
