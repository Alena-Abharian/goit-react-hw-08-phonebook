import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedSelector } from '../redux/selectors';

const PrivateRoute = (
  {
    children,
    redirectTo = '/',
  }) => {
  const isLogged = useSelector(isLoggedSelector);

  return isLogged ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
