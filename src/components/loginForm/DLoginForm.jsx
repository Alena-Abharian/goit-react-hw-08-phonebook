import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome to Phonebook</h1>
        <hr />
        <label htmlFor='email'><b>Email</b></label>
        <input
          type='email'
          name='email'
          required
          value={email}
          onChange={handleChange}
        />

        <label htmlFor='password'><b>Password</b></label>
        <input
          type='password'
          name='password'
          required
          value={password}
          onChange={handleChange}

        />
        <hr />

        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
