import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import book from '../../assets/pngegg.png';
import s from './Home.module.css';
import { isLoggedSelector } from '../../redux/selectors';


const Home = () => {
  const isLogged = useSelector(isLoggedSelector)
  const navigate = useNavigate();
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Phonebook</h1>
      <img width={300} src={book} alt='tree' />
      <p className={s.text}>Your contacts are always with you</p>
      {
        !isLogged ?
          <Button type={'primary'} onClick={() => navigate('/register')}>Try it now</Button>
          : <Button type={'primary'} onClick={() => navigate('/contacts')}>Check your contacts</Button>
      }
    </div>
  );
};

export default Home;
