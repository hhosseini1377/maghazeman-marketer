import React from "react";
import { Badge, Menu } from "antd";
import {
  ApartmentOutlined,
  CalendarOutlined,
  HomeOutlined,
  PieChartOutlined,
  SnippetsOutlined,
  VideoCameraOutlined,
  WechatOutlined,
} from "@ant-design/icons";

function SideMenu(props: any) {
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
        <Menu.Item
          key="1"
          style={{ borderTopRightRadius: 36, borderBottomRightRadius: 36 }}
          icon={<HomeOutlined style={{ color: "#4DCCBD" }} />}
        >
          صفحه اصلی
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{ borderTopRightRadius: 36, borderBottomRightRadius: 36 }}
          icon={<ApartmentOutlined style={{ color: "#4DCCBD" }} />}
        >
          زیرمجموعه ها
        </Menu.Item>
        <Menu.Item
          style={{ borderTopRightRadius: 36, borderBottomRightRadius: 36 }}
          key="3"
          icon={<WechatOutlined style={{ color: "#4DCCBD" }} />}
        >
          چت
        </Menu.Item>
        <Menu.Item
          style={{ borderTopRightRadius: 36, borderBottomRightRadius: 36 }}
          key="4"
          icon={<PieChartOutlined style={{ color: "#4DCCBD" }} />}
        >
          امور مالی
        </Menu.Item>
        <Menu.Item
          style={{ borderTopRightRadius: 36, borderBottomRightRadius: 36 }}
          key="5"
          icon={<CalendarOutlined style={{ color: "#4DCCBD" }} />}
        >
          تقویم کاری
        </Menu.Item>
        <Menu.Item
          style={{ borderTopRightRadius: 36, borderBottomRightRadius: 36 }}
          key="6"
          icon={<VideoCameraOutlined style={{ color: "#4DCCBD" }} />}
        >
          فیلم آموزشی
        </Menu.Item>
        <Menu.Item
          style={{ borderTopRightRadius: 36, borderBottomRightRadius: 36 }}
          key="7"
          icon={<SnippetsOutlined style={{ color: "#4DCCBD" }} />}
        >
          <a href="#" style={{ marginLeft: 16 }}>
            نامه ها
          </a>
          <Badge count={5} />
        </Menu.Item>
      </Menu>
    </>
  );
}

export default SideMenu;
