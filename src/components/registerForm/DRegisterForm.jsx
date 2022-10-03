import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

const RegisterForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    dispatch(register({name, email, password}))
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome to Phonebook</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor='name'><b>Name</b></label>
      <input
        type='text'
        name='name'
        required
        value={name}
        onChange={handleChange} />

      <label htmlFor='email'><b>Email</b></label>
      <input type='email'
             name='email'
             required
             value={email}
             onChange={handleChange} />

      <label htmlFor='password'><b>Password</b></label>
      <input
        type='password'
        name='password'
        required
        value={password}
        onChange={handleChange} />
      <hr />

      <p>By creating an account you agree to our <a href='https://en.wikipedia.org/wiki/Privacy' target='_blank' rel="noreferrer">Terms &
        Privacy</a>.</p>
      <button type='submit'>Register</button>
    </form>

  );
};

export default RegisterForm;
