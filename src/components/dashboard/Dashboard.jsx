import {
  Row,
  Col,
  Select,
  Space,
  Button,
  Input,
  Dropdown,
  Divider,
} from "antd";
import { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const [text, setText] = useState("2022/11/2 - 2022/12/3");

  const onMenuClick = (e) => {
    console.log("click", e);
  };
  const items = [
    {
      key: "1",
      label: "1st item",
    },
    {
      key: "2",
      label: "2nd item",
    },
    {
      key: "3",
      label: "3rd item",
    },
  ];

  return (
    <Row gutter={[50, 0]}>
      <Col flex="auto">
        <Row gutter={[10, 0]}>
          <Col flex="100px">
            <Select
              size="large"
              defaultValue="lucy"
              style={{ width: 120 }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
              ]}
            />
          </Col>
          <Col flex="auto">
            <Space.Compact size="large" style={{ width: "100%" }}>
              <Input
                style={{ width: "75%" }}
                defaultValue="Combine input and button"
              />
              <Dropdown.Button
                type="primary"
                style={{ width: "25%" }}
                menu={{ items, onClick: onMenuClick }}
              >
                AI Search
              </Dropdown.Button>
            </Space.Compact>
          </Col>
          <Col flex="70px">
            <Button block size="large">
              reset
            </Button>
          </Col>
        </Row>
      </Col>
      <Col>
        <Space>
          <Button size="large" type="primary" icon={<UserAddOutlined />} />
          <Button size="large" type="primary" icon={<UserAddOutlined />} />
          <Divider type="vertical" />
          <Button size="large" onClick={() => setText("1 months ago")}>
            {text}
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default Dashboard;
