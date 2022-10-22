import React from 'react';
import './App.css';
/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Simplistic from './simplistic';
import GameLayout from './GameLayout';
import FaqPage from './simplistic/components/FAQ';
import TeamPage from './simplistic/components/Team';
import SponsorPage from './simplistic/components/Sponsor';
import AuthPage from './simplistic/components/Authentication';
/* eslint-enable */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Simplistic />} />
          <Route path="reset-password" element={<Simplistic />} />
          <Route path="game" element={<GameLayout />} />
        </Route>
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/sponsors" element={<SponsorPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
