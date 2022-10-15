import React from 'react';
import './App.css';
/* eslint-disable */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Simplistic from './simplistic';
import GameLayout from './GameLayout';
/* eslint-enable */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Simplistic />} />
          <Route path="game" element={<GameLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
