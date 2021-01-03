import {
  EditOutlined,
  EllipsisOutlined,
  MailOutlined,
  PhoneOutlined,
  SettingOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";

const { Meta } = Card;

function UserCard(props:any) {
  return (
    <>
      <Card
        style={{
          width: props.broken ? "100vw" : "16vw",
          minHeight: "auto",
          margin: 16,
          borderRadius: 36,
          background: "#ffdc73",
          color: "#000",
        }}
        cover={

          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{
              borderTopRightRadius: 36,
              borderTopLeftRadius: 36,
              height: "auto",
            }}

          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta title="فاطمه جعفری" description="بازاریاب فروش" />
        <Row style={{ marginTop: 16 }}>
          <Col span={2}>
            <MailOutlined />
          </Col>
          <Col span={16} style={{ marginRight: 6 }}>
            {"email@gmail.com"}
          </Col>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <Col span={2}>
            <PhoneOutlined />
          </Col>
          <Col span={16} style={{ marginRight: 6 }}>
            {"09121110000"}
          </Col>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <Col span={2}>
            <WalletOutlined />
          </Col>
          <Col span={16} style={{ marginRight: 6 }}>
            {"کیف پول من"}
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default UserCard;
