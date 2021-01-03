import React, { useContext, useState } from "react";
import {
  Layout,
  Row,
  Col,
  Button,
  Pagination,
  Card,
  Avatar,
  Drawer,
  Divider,
  Collapse,
} from "antd";
import {
  DashOutlined,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import Store from "../assets/images/store.svg";
import SubHeader from "../components/subHeader";
import SubMember from "../components/subMember";
import UserCard from "../components/userCard";
import MenuBottom from "../components/menuBottom";
import SideCategory from "../components/sideCategory";
import profile from "../assets/images/profile.png";
import SideMenu from "../components/sideMenu";
import { SearchTop } from "../components/SearchTop";
import { SideInfo } from "../state/userInfo";

const { Header, Sider, Content, Footer } = Layout;
const { Meta } = Card;
const { Panel } = Collapse;

function Dashboard() {
  const [broken, setBroken] = useState(false);
  const [state, setstate] = useState(false);
  const { side } = useContext(SideInfo);

  const onClose = () => {
    setstate(false);
  };

  const onOpen = () => {
    setstate(true);
  };

  return (
    <Layout className="container-layout">
      <Drawer
        width={broken ? "75vw" : "24vw"}
        placement={"right"}
        closable={false}
        onClose={onClose}
        visible={state}
        style={{ fontFamily: "IranSans" }}
      >
        <Row>
          <Col span={24}>
            <SearchTop size={"large"} width={"100%"} />
          </Col>

          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <SideCategory broken={broken} />
          </Col>
          <Col span={24}>
            <Divider />
            <Collapse accordion>
              <Panel header="پروفایل بازاریاب | فاطمه جعفری" key="1">
                <Card bordered={false} style={{ justifyContent: "center" }}>
                  <Meta
                    avatar={<Avatar src={profile} />}
                    title="فاطمه جعفری"
                    description="بازاریاب فروش"
                  />
                  <Row style={{ marginTop: 16 }}>
                    <Col span={24}>
                      <MailOutlined style={{ margin: 8 }} />
                      {"email@gmail.com"}
                    </Col>
                    <Col span={24}>
                      <PhoneOutlined style={{ margin: 8 }} />
                      {"09121110000"}
                    </Col>
                    <Col span={24}>
                      <WalletOutlined style={{ margin: 8 }} />
                      {"کیف پول من"}
                    </Col>
                  </Row>
                </Card>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Drawer>
      <Header
        style={{
          background: "#fafafa",
          textAlign: "center",
          padding: broken ? "2vh" : "3vh",
          paddingRight: 0,
          fontFamily: "IranSans",
          position: broken ? "fixed" : "unset",
          height: "fit-content",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Row style={{ height: "fit-content" }}>
          {broken ? (
            <>
              <Col span={6}>
                <MenuOutlined onClick={onOpen} />
              </Col>
              <Col span={12}>
                <img src={Store} style={{ height: 48, width: 48 }} alt="logo" />
              </Col>
              <Col span={6}>
                <Button shape="circle" size="large" icon={<DashOutlined />} />
              </Col>
            </>
          ) : (
            <>
              <Col span={4}>
                <img src={Store} style={{ height: 48, width: 48 }} alt="logo" />
              </Col>
              <Col span={14}>
                <SearchTop size={"large"} width={"100%"} />
              </Col>
              <Col span={4}>
                <Row>
                  <Col span={6}>
                    <Button
                      shape="circle"
                      block
                      size="large"
                      icon={<PhoneOutlined />}
                    />
                  </Col>
                  <Col span={6}>
                    <Button
                      style={{ background: "#4DCCBD", color: "#fff" }}
                      shape="circle"
                      block
                      size="large"
                      icon={<UserOutlined />}
                    />
                  </Col>
                  <Col span={6}>
                    <Button
                      shape="circle"
                      block
                      size="large"
                      icon={<ShoppingCartOutlined />}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                span={24}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <SubHeader />
              </Col>
            </>
          )}
        </Row>
      </Header>
      <Layout
        style={{
          marginTop: broken ? "12vh" : "auto",
          marginBottom: broken ? "10vh" : 10,
        }}
      >
        <Sider
          width={side ? 200 : 0}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            setBroken(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          // onCollapse={onCollapse}
          style={{
            textAlign: "center",
            background: "#fff",
            overflow: "auto",
            borderRadius: 18,
            margin: broken ? 0 : 10,
          }}
        >
          <SideMenu broken={broken} />
        </Sider>
        <Content
          style={{
            background: "#fff",
            textAlign: "center",
            borderRadius: 18,
            margin: 10,
            minHeight: "100vh",
            marginRight: broken ? 10 : 0,
          }}
        >
          <Row>
            <Col span={broken ? 24 : 16}>
              <Row>
                <Col
                  span={broken ? 24 : 6}
                  style={{
                    display: broken ? "block" : "none",
                    marginTop: 16,
                    padding: 8,
                  }}
                ></Col>
                <Col span={24} style={{ marginTop: 32, marginBottom: 32 }}>
                  <SearchTop size={"middle"} width={"86%"} />
                </Col>
                <Col span={24} style={{ minHeight: broken ? "auto" : "50vh" }}>
                  <SubMember broken={broken} />
                </Col>
                <Col span={24} style={{ marginTop: 32, marginBottom: 32 }}>
                  <Pagination defaultCurrent={3} total={50} />
                </Col>
              </Row>
            </Col>
            <Col
              span={8}
              style={{ display: broken ? "none" : "block", marginTop: 8 }}
            >
              <UserCard />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          position: broken ? "fixed" : "unset",
          bottom: broken ? 0 : "unset",
          left: broken ? 0 : "unset",
          width: broken ? "100vw" : "unset",
          height: broken ? "fit-content" : "auto",
          marginTop: broken ? 200 : "unset",
          padding: broken ? "2vh" : "auto",
          background: "#fafafa",
        }}
      >
        {broken ? (
          <MenuBottom />
        ) : (
          <div>تمامی حقوق برای مغازه من محفوظ است © 2021 </div>
        )}
      </Footer>
    </Layout>
  );
}

export default Dashboard;
