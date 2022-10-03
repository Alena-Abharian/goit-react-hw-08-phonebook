import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { getNameSelector } from '../../redux/selectors';
import s from './UserMenu.module.css';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getNameSelector);

  return (
    <div className={s.wrap}>
      <NavLink to='/contacts' className={s.name}>{name}</NavLink>
      <Button ghost onClick={() => dispatch(logOut())}>Logout</Button>
    </div>
  );
};

export default UserMenu;
