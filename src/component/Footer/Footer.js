import React from "react";
import { Layout } from "antd";
import { FireTwoTone } from "@ant-design/icons";

const { Footer } = Layout;

const FooterCustom = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Angsa Dash Semut Resistance @{new Date().getFullYear()} Created with
      <FireTwoTone
        twoToneColor={"orange"}
        style={{
          padding: 5,
        }}
      />
      by Angsa Development Studio
    </Footer>
  );
};

export default FooterCustom;
