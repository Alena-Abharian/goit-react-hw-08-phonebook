import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}><NavLink className={s.link} to='/register'>Регистрация </NavLink></li>
      <li><NavLink className={s.link} to='/login'> Логин </NavLink></li>
    </ul>
  );
};

export default AuthNav;
