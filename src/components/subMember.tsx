import React from "react";
import { Col, Row } from "antd";
import { ShopOutlined } from "@ant-design/icons";

const marketList: any = [];

for (var i = 0; i < 16; i++) {
  marketList.push(i);
}

function SubMember(props: any) {
  return (
    <>
      <Row>
        {marketList.map((id: any, index: any) => (
          <Col key={index.value} span={props.broken ? 12 : 6}>
            <Col>
              <ShopOutlined style={{ fontSize: "64px", color: "#4DCCBD" }} />
            </Col>
            <Col>مغازه {id}</Col>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default SubMember;
