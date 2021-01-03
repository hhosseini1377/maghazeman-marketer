import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Col, Menu } from "antd";

function SideCategory(props: any) {
  const handleClick = (e: any) => {
    console.log("click ", e);
  };
  return (
    <>
      <Menu
        onClick={handleClick}
        style={{
          width: props.broken ? "45vw" : 200,
          marginTop: props.broken ? 16 : 8,
          direction: "rtl",
        }}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Col span={24} style={{ marginTop:24 ,marginBottom: 24 }}>
          {<MenuOutlined style={{ marginLeft: 8 }} />}
          {"دسته بندی کالاها"}
        </Col>
        <Menu.Item key="1">دیجیتال</Menu.Item>
        <Menu.Item key="2">ابزار یراق</Menu.Item>
        <Menu.Item key="3">بهداشت و سلامت</Menu.Item>
        <Menu.Item key="4">خانه و آشپزخانه</Menu.Item>
        <Menu.Item key="5">ورزش</Menu.Item>
        <Menu.Item key="6">دیگر</Menu.Item>
      </Menu>
    </>
  );
}

export default SideCategory;
