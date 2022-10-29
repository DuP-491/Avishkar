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
import TabletSponsors from './simplistic/components/Sponsors';
import TabletTeam from './simplistic/components/TeamAvishkar';
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
import TeamAvishkar from './simplistic/components/TeamAvishkar';
import ResponsiveNav from './simplistic/components/Common/ResponsiveNav';
import Footer from './simplistic/components/Common/Footer';
import NavWrapper from './NavFooterWrapper';
import Schedule from './simplistic/components/Common/Schedule';
import ProtectedRoute from './simplistic/ProtectedRoute';
import AuthService from './simplistic/services/AuthService';
/* eslint-enable */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Simplistic />} />

          {/* <Route index element={<GameLayout />} /> */}
          <Route
            path="tab"
            element={
              <NewTablet
                currTab="Departments"
                logout={AuthService.logOut}
                closePopup={() => {}}
                deptId=""
              />
            }
          />
          {/* <Route
            path="profile"
            element={
              <NewTablet currTab="Profile" logout={() => {}} closePopup={() => {}} deptId="" />
            }
          /> */}
          <Route path="simplistic" element={<Simplistic />} />
        </Route>
        <Route element={<NavWrapper />}>
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/sponsors" element={<SponsorPage />} />
          <Route path="reset-password" element={<Simplistic />} />
          {/* THE TWO LINE BELOW IS FOR TESTING PURPOSE ONLY... PLEASE REMOVE IF I FORGET TO REMOVE IT */}
          {/* <Route path="/tbsp" element={<TabletSponsors onCrossPress={() => {}} />} />
        <Route path="/tbtm" element={<TabletTeam onCrossPress={() => {}} />} /> */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<UserProfile logout={AuthService.logOut} />} />
          </Route>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/department">
            <Route index element={<DepartmentList />} />
            <Route path=":dept">
              <Route index element={<EventList />} />
              <Route path=":event" element={<EventPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
