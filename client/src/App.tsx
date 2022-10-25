import React from 'react';
import './App.css';
/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Simplistic from './simplistic';
import GameLayout from './GameLayout';
import NewTablet from './simplistic/components/NewTablet';
import FaqPage from './simplistic/components/FAQ';
import TeamPage from './simplistic/components/Team';
import SponsorPage from './simplistic/components/Sponsor';
import DepartmentList from './simplistic/components/Department';
import EventList from './simplistic/components/Event';
import UserProfile from './simplistic/components/Profile';
import EventPage from './simplistic/components/Event/EventPage';
import LogIn from './simplistic/components/Authentication/LogIn';
import SignUp from './simplistic/components/Authentication/SignUp';
import NotFound from './simplistic/components/Common/NotFound';
import ResetPassword from './simplistic/components/Authentication/ResetPassword';
import ForgotPassword from './simplistic/components/Authentication/ForgotPassword';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
/* eslint-enable */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Simplistic />} />
          <Route path="reset-password" element={<Simplistic />} />
          <Route path="game" element={<GameLayout />} />
          <Route
            path="tab"
            element={
              <NewTablet is_profile={false} logout={() => {}} closePopup={() => {}} key="" />
            }
          />
          <Route
            path="profile"
            element={<NewTablet is_profile={true} logout={() => {}} closePopup={() => {}} key="" />}
          />
        </Route>
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/sponsors" element={<SponsorPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/department">
          <Route index element={<DepartmentList />} />
          <Route path=":dept">
            <Route index element={<EventList />} />
            <Route path=":event" element={<EventPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
