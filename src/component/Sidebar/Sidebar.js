import React from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = (props) => {
  const { color, theme, collapsed, setCollapsed, broken, setBroken } = props;

  const getItem = (label, key, icon, children) => ({
    key,
    icon,
    children,
    label,
  });

  const items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
      getItem("Team 3", "sub3", <TeamOutlined />, [
        getItem("Team 4", "9"),
        getItem("Team 5", "10"),
      ]),
    ]),
    getItem("Files", "11", <FileOutlined />),
  ];
  return (
    <Sider
      breakpoint="md"
      collapsedWidth={broken ? "0" : "75"}
      onBreakpoint={(broken) => {
        setBroken(broken);
        setCollapsed(broken);
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme={theme}
    >
      <div className="logo" />
      <Menu
        mode="inline"
        theme={theme}
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
