import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { register } from '../../redux/auth/authOperations';
import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }) => {
    dispatch(register({ name, email, password }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='basic'
      className={s.container}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        name='name'
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder='Name' />
      </Form.Item>
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
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
