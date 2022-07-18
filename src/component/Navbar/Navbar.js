import React from "react";
import { Layout, Typography, Dropdown, Menu, Avatar } from "antd";
import {
  LeftCircleTwoTone,
  RightCircleTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

const Navbar = (props) => {
  const { background_color, color, theme, setCollapsed, collapsed, broken } =
    props;

  const menu_icon = () => {
    if (broken) {
      return collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
    } else {
      return collapsed ? RightCircleTwoTone : LeftCircleTwoTone;
    }
  };

  const menu_profile_icon = (
    <Menu theme={theme} style={{ minWidth: "7.5rem", backgroundColor: color }}>
      <Menu.Item key={"0"} disabled style={{ color: background_color }}>
        Fian The Revolt
      </Menu.Item>
      <Menu.Item
        key={"1"}
        style={{ color: background_color }}
        icon={<UserOutlined style={{ color: background_color }} />}
      >
        My Profile
      </Menu.Item>
      <Menu.Item key={"2"} icon={<LogoutOutlined />} danger>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={styles.header(background_color)}>
      <div style={styles.sidebar_collapse}>
        {React.createElement(menu_icon(), {
          style: styles.icon_sidebar_collapse(broken, color),
          twoToneColor: background_color,
          className: "trigger",
          onClick: () => setCollapsed(!collapsed),
        })}
      </div>

      <div style={styles.menu_profile_icon}>
        <Dropdown
          overlay={menu_profile_icon}
          trigger={["click", "hover"]}
          placement="bottomRight"
        >
          <Avatar
            size="medium"
            icon={<UserOutlined style={{ color: background_color }} />}
          />
        </Dropdown>
      </div>
      <div style={styles.header_content}>
        <Title
          level={5}
          style={{
            color: color,
            fontWeight: "bolder",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          ANGSA DASH SEMUT RESISTANCE
        </Title>
      </div>
    </Header>
  );
};

export default Navbar;

const styles = {
  header: (background_color) => ({
    backgroundColor: background_color,
    padding: 0,
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "center",
  }),
  sidebar_collapse: {
    position: "absolute",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  icon_sidebar_collapse: (broken, color) => ({
    fontSize: broken ? 24 : 32,
    color: color,
  }),
  menu_profile_icon: {
    position: "absolute",
    right: 0,

    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  header_content: {
    paddingLeft: "4rem",
    paddingRight: "4rem",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
