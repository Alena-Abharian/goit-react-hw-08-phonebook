import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshCurrentUser } from '../redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import AppBar from './appBar';
import { Layout } from 'antd';
import PublicRouter from './PublicRouter';
import { lazy, Suspense } from 'react';
import Loader from './Loader';

const Home = lazy(() => import('../page/home/Home'));
const Register = lazy(() => import('../page/register/Register'));
const Login = lazy(() => import('../page/login/Login'));
const Contacts = lazy(() => import('../page/contacts/Contacts'));

const { Header, Content, Footer } = Layout;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: '750px' }}>
      <Header
        style={{
          width: '100%',
        }}
      >
        <AppBar />
      </Header>
      <Content
        className='site-layout'
        style={{
          padding: 30,
        }}
      >
        <div
          className='site-layout-background'
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={
                <PublicRouter>
                  <Home />
                </PublicRouter>
              } />
              <Route path='/register/' element={
                <PublicRouter restricted>
                  <Register />
                </PublicRouter>
              } />
              <Route path='/login' element={
                <PublicRouter restricted redirectTo='/contacts'>
                  <Login />
                </PublicRouter>
              } />

              <Route path='/contacts' element={
                <PrivateRoute redirectTo='/login'>
                  <Contacts />
                </PrivateRoute>
              } />
            </Routes>
          </Suspense>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Phonebook ©2022
      </Footer>
    </Layout>
  );
};

export default App;
