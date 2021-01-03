import React, { useState } from "react";
import {
  ApartmentOutlined,
  HomeOutlined,
  PieChartOutlined,
  SnippetsOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function MenuBottom() {
  const [state, setState] = useState();

  const handleClick = (e: any) => {
    console.log("click ", e);
    setState(e.key);
  };

  return (
    <>
      <Menu
        onClick={handleClick}
        selectedKeys={state}
        mode="horizontal"
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "inherit",
          borderStyle: "none",
          background: "#fafafa",

        }}
      >
        <Menu.Item
          key="home"
          icon={<HomeOutlined style={{ fontSize: 24, }} />}
        ></Menu.Item>
        <Menu.Item
          key="sub"
          icon={<ApartmentOutlined style={{ fontSize: 24 }} />}
        ></Menu.Item>
        <Menu.Item
          key="app"
          icon={<PieChartOutlined style={{ fontSize: 24 }} />}
        ></Menu.Item>
        <Menu.Item
          key="chat"
          icon={<WechatOutlined style={{ fontSize: 24 }} />}
        ></Menu.Item>

        <Menu.Item
          key="mail"
          icon={<SnippetsOutlined style={{ fontSize: 24 }} />}
        ></Menu.Item>
      </Menu>
    </>
  );
}

export default MenuBottom;
