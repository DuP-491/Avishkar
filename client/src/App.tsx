import React from 'react';
import './App.css';
import GameComponent from './game';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="flex w-full h-full">
        <GameComponent viewport="desktop" />
      </div>
    </div>
  );
}

export default App;
