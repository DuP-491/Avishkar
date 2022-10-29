import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './simplistic/components/Common/Footer';
import ResponsiveNav from './simplistic/components/Common/ResponsiveNav';

const NavWrapper = () => {
  return (
    <>
      <ResponsiveNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavWrapper;
