import React from 'react';
import './App.css';
import GameComponent from './game';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full flex">
        <GameComponent viewport="desktop" />
      </div>
    </div>
  );
}

export default App;
