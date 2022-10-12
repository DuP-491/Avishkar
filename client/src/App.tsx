import React from 'react';
import './App.css';
/* eslint-disable */
import GameComponent from './game';
/* eslint-enable */
import Simplistic from './simplistic';

function App() {
  return (
    <Simplistic />
    // <div className="w-screen h-screen overflow-hidden">
    //   <div className="flex w-full h-full">
    //     <GameComponent viewport="desktop" />
    //   </div>
    // </div>
  );
}

export default App;
