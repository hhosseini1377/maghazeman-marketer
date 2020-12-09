import React from 'react';
import { connect } from 'react-redux';
import { Col, Layout, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuOutlined,
  SearchOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import styles from './style';
import Input from 'microcomponents/input';
import Button from 'microcomponents/button';
import Logo from 'assets/images/logo.png';
import { openDrawer } from 'state';

const { Header } = Layout;

class AppBar extends React.Component {
  render() {
    const { classes, isMobile, isDrawer } = this.props;
    return (
      <Header className={classes.header} style={{ padding: '0 10px' }}>
        <>
          <Row justify="space-between" align="middle" gutter={[20]}>
            <Col xs={2} sm={2} lg={0} xl={0}>
              <div onClick={() => isDrawer(true)}>
                <MenuOutlined style={{ fontSize: 20 }} />
              </div>
            </Col>
            <Col
              xs={{ span: 3, offset: 9 }}
              sm={{ span: 3, offset: 9 }}
              lg={{ span: 1, offset: 0 }}
              xl={{ span: 1, offset: 0 }}
            >
              <Link to="/" className={classes.logo}>
                <img src={Logo} />
              </Link>
            </Col>
            <Col xs={0} sm={0} lg={13} xl={13}>
              <Input prefix={<SearchOutlined />} placeholder="Search" />
            </Col>
            <Col
              xs={{ span: 2, offset: 6 }}
              sm={{ span: 2, offset: 6 }}
              lg={{ span: 3, offset: 6 }}
              xl={{ span: 3, offset: 6 }}
            >
              {!isMobile && (
                <Button icon={<PhoneOutlined />} style={{ marginLeft: 15 }}>
                  تماس با ما
                </Button>
              )}
              <Button icon={<LoginOutlined />}>{!isMobile && 'ورود'}</Button>
            </Col>
            <Col xs={2} sm={2} lg={1} xl={1}>
              <ShoppingCartOutlined style={{ fontSize: 20 }} />
            </Col>
          </Row>
        </>
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  isMobile: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  isDrawer: (show) => dispatch(openDrawer(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(styles(AppBar));
