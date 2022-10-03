import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedSelector } from '../../redux/selectors';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLogged = useSelector(isLoggedSelector);
  return (
    <nav>
      <NavLink className={s.item} to='/'>Home</NavLink>
      {isLogged &&
        (<NavLink to='/contacts'>Contacts</NavLink>)
      }
    </nav>
  );
};

export default Navigation;
