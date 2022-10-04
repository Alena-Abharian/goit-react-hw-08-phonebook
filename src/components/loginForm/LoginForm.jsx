import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { Button, Form, Input } from 'antd';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className={s.container}
      name='basic'
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input placeholder='Email' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='Password' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );

};

export default LoginForm;
