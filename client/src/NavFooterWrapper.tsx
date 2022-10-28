import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveNav from './simplistic/components/Common/ResponsiveNav';

const NavWrapper = () => {
  return (
    <>
      <ResponsiveNav />
      <Outlet />
    </>
  );
};

export default NavWrapper;
