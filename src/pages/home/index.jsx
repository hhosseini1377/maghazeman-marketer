import React from 'react';
import { Badge, Col, Pagination, Row } from 'antd';
import {
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
  PhoneOutlined,
  WalletOutlined,
  SearchOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import Button from 'microcomponents/button';
import style from './style';
import Typography from 'microcomponents/typography';
import Input from 'microcomponents/input';
import user from 'assets/images/user.jpg';
class Home extends React.Component {
  state = {
    menu: [
      {
        id: 0,
        title: 'صفحه اصلی',
        icon: <HomeOutlined />,
        hasDetail: false,
        detail: [],
      },
      {
        id: 1,
        title: 'زیر مجموعه ها',
        icon: <HomeOutlined />,
        hasDetail: false,
        detail: [],
      },
      {
        id: 2,
        title: 'امور مالی',
        icon: <HomeOutlined />,
        hasDetail: false,
        detail: [],
      },
      {
        id: 3,
        title: 'تقویم کاری',
        icon: <HomeOutlined />,
        hasDetail: false,
        detail: [],
      },
      {
        id: 4,
        title: 'فیلم آموزشی',
        icon: <HomeOutlined />,
        hasDetail: false,
        detail: [],
      },
      {
        id: 5,
        title: 'نامه ها',
        icon: <HomeOutlined />,
        hasDetail: true,
        detail: [],
      },
    ],
    store: [
      { title: 'joouan', icon: <ShopOutlined /> },
      { title: 'poursche', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'joouan', icon: <ShopOutlined /> },
      { title: 'poursche', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'joouan', icon: <ShopOutlined /> },
      { title: 'poursche', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
      { title: 'alborz tat', icon: <ShopOutlined /> },
    ],
  };
  render() {
    const { classes } = this.props;
    const { menu, store } = this.state;
    return (
      <div className={classes.home}>
        <Row gutter={[20, 20]}>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            lg={{ span: 5, order: 1 }}
            xl={{ span: 5, order: 1 }}
          >
            <div
              className={[classes.cloumnWrapper, classes.homeMenu].join(' ')}
            >
              <ul>
                {menu.map((item, index) =>
                  item.hasDetail === false ? (
                    <li key={index}>
                      <Button
                        block
                        size={'large'}
                        className={classes.homeMenuButton}
                        icon={item.icon}
                      >
                        {item.title}
                      </Button>
                    </li>
                  ) : (
                    <li key={index}>
                      <div className={classes.detailBox}>
                        <div className={classes.header}>
                          <div>
                            <MailOutlined />
                            <Typography
                              variant="text"
                              className={classes.titleDetail}
                            >
                              نامه ها
                            </Typography>
                          </div>
                          <Badge dot={true} color={'orange'} size={50}></Badge>
                        </div>
                        {item.detail.length === 0 && (
                          <Typography variant="text">
                            هیچ نامه جدیدی ندارید
                          </Typography>
                        )}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            lg={{ span: 19, order: 2 }}
            xl={{ span: 19, order: 2 }}
          >
            <div className={[classes.cloumnWrapper].join(' ')}>
              <Row>
                <Col
                  xs={{ span: 24, order: 2 }}
                  sm={{ span: 24, order: 2 }}
                  lg={{ span: 19, order: 1 }}
                  xl={{ span: 19, order: 1 }}
                >
                  <Input prefix={<SearchOutlined />} placeholder="Search" />.
                  <Row gutter={[20, 20]}>
                    {store.map((item, index) => (
                      <Col xs={8} sm={8} lg={6} xl={6} key={index}>
                        <div className={classes.storeItem}>
                          <ShopOutlined style={{ fontSize: 60 }} />
                          <Typography variant="text">{item.title}</Typography>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div className={classes.pagination}>
                    <Pagination defaultCurrent={1} total={50} />
                  </div>
                </Col>
                <Col
                  xs={{ span: 24, order: 1 }}
                  sm={{ span: 24, order: 1 }}
                  lg={5}
                  xl={5}
                >
                  <div className={classes.profile}>
                    <div className={classes.userAvater}>
                      <img src={user} alt="" />
                    </div>
                    <div className={classes.userTitle}>
                      <Typography variant="title" level={4}>
                        فاطمه جعفری
                      </Typography>
                      <Typography variant="text">بازاریاب فروش</Typography>
                      <ul>
                        <li>
                          <MailOutlined />
                          <Typography variant="text">
                            mail@yourmail.com
                          </Typography>
                        </li>
                        <li>
                          <SettingOutlined />
                          <Typography variant="text">ویرایش اطلاعات</Typography>
                        </li>
                        <li>
                          <PhoneOutlined />
                          <Typography variant="text">09336909890</Typography>
                        </li>
                        <li>
                          <WalletOutlined />
                          <Typography variant="text">کیف پول</Typography>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default style(Home);
