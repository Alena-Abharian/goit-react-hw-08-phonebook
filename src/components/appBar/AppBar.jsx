import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import { isLoggedSelector } from '../../redux/selectors';
import Navigation from '../navigation';
import AuthNav from '../authNav';
import UserMenu from '../userMenu';

const AppBar = () => {
  const isLogged = useSelector(isLoggedSelector);

  return (
    <Row>
      <Col span={6} push={18}>
        {isLogged ? <UserMenu /> : <AuthNav />}
      </Col>
      <Col span={18} pull={6}>
        <Navigation />
      </Col>
    </Row>
  );
};

export default AppBar;
