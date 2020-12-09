import React from 'react';
import { connect } from 'react-redux';
import styles from './style';
import { withRouter, Link } from 'react-router-dom';
import { Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { openDrawer } from 'state';

const { SubMenu } = Menu;

class DrawerMenu extends React.Component {
  render() {
    const { classes, isMobile, isDrawer, showDrawer } = this.props;
    const menu = (
      <>
        <Menu.Item icon={<MenuOutlined />}>
          <Link to="/">دسته بندی کالا</Link>
        </Menu.Item>

        <SubMenu title="دیجیتال">
          <Menu.Item icon={<MenuOutlined />}>
            <Link to="/">دسته بندی کالا</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="ابزار و یراق">
          <Menu.Item icon={<MenuOutlined />}>
            <Link to="/">دسته بندی کالا</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="بهداشت و سلامت">
          <Menu.Item icon={<MenuOutlined />}>
            <Link to="/">دسته بندی کالا</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="خانه و آشپزخانه">
          <Menu.Item icon={<MenuOutlined />}>
            <Link to="/">دسته بندی کالا</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="ورزش">
          <Menu.Item icon={<MenuOutlined />}>
            <Link to="/">دسته بندی کالا</Link>
          </Menu.Item>
        </SubMenu>
      </>
    );
    console.log('isMobile', isMobile);
    return isMobile ? (
      <Drawer
        placement="right"
        closable={false}
        onClose={() => isDrawer(false)}
        visible={showDrawer}
      >
        <Menu mode="inline" className={classes.menuDrawer}>
          {menu}
        </Menu>
      </Drawer>
    ) : (
      <div className={classes.headerMenu}>
        <Menu
          // theme="#263f55"
          mode="horizontal"
          className={classes.menuDrawer}
          theme="light"
        >
          {menu}
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  isDrawer: (show) => dispatch(openDrawer(show)),
});

const mapStateToProps = (state) => (
  console.log('state', state),
  {
    isMobile: state.screen,
    showDrawer: state.drawer,
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styles(withRouter(DrawerMenu)));
