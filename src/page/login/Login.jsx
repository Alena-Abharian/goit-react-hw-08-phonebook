import React from 'react';
import LoginForm from '../../components/loginForm';
import s from './Login.module.css'

const Login = () => {
  return (
   <div className={s.wrap}>
     <h1 className={s.title}>Log in to Phonebook</h1>
   <LoginForm/>
   </div>
  );
}

export default Login;
