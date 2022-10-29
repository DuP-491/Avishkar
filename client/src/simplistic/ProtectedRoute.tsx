import Cookies from 'js-cookie';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  return <div>{Cookies.get('token') ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedRoute;
