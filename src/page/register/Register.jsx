import React from 'react';
import { Layout } from 'antd';
import RegisterForm from '../../components/registerForm';
import s from './Register.module.css';

const Register = () => {
  return (
    <Layout className={s.container}>
      <h1 className={s.title}>Create account</h1>
      <RegisterForm />
    </Layout>
  );
};

export default Register;
