import React, { useContext } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Menu } from "antd";
import { SideInfo } from "../state/userInfo";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        زیر منو
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        زیر منو
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        زیر منو
      </a>
    </Menu.Item>
  </Menu>
);

function SubHeader() {
  const { side, setSide } = useContext(SideInfo);

  const HandlClick = () => {
    setSide(!side);
  };

  return (
    <>
      <Col span={5}>
        {<MenuOutlined style={{ marginLeft: 8 }} onClick={HandlClick} />}
        {"دسته بندی کالاها"}
      </Col>
      <Col span={19}>
        <Breadcrumb separator={"   "}>
          <Breadcrumb.Item overlay={menu}>دیجیتال</Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>ابزار یراق</Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>بهداشت و سلامت</Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>خانه و آشپزخانه</Breadcrumb.Item>
          <Breadcrumb.Item overlay={menu}>ورزش</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </>
  );
}

export default SubHeader;
