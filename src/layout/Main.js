import React, { useState } from "react";
import { Layout } from "antd";
import { Footer, Navbar, Sidebar } from "component";
import { global_color } from "constant/constant";

const { Content } = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  return (
    <Layout className="App">
      <Sidebar
        color={global_color.text_white}
        theme="dark"
        {...{ collapsed, setCollapsed, broken, setBroken }}
      />
      <Layout>
        <Navbar
          background_color={global_color.main_theme}
          color={global_color.text_white}
          theme="light"
          {...{ collapsed, setCollapsed, broken }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            content
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Main;
