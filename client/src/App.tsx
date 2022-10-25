import React from 'react';
import './App.css';
/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Simplistic from './simplistic';
import GameLayout from './GameLayout';
import NewTablet from './simplistic/components/NewTablet';
/* eslint-enable */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Simplistic />} />
          <Route path="reset-password" element={<Simplistic />} />
          <Route path="game" element={<GameLayout />} />
          <Route path="tab" element={<NewTablet is_profile={false} />} />
          <Route path="profile" element={<NewTablet is_profile={true} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
