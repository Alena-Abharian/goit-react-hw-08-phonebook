import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedSelector } from '../redux/selectors';

const PublicRouter = (
  {
    children,
    restricted = false,
    redirectTo = '/',
  }) => {
  const isLogged = useSelector(isLoggedSelector);
  const shouldRedirect = isLogged && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRouter;
