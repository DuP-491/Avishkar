import React from 'react';
import './App.css';
import GameComponent from './game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameComponent viewport="desktop" />
      </header>
    </div>
  );
}

export default App;
