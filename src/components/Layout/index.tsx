import React from "react";
import { SLayout, SMain } from "./styles";
import Sidebar from "../Sidebar";

const Layout = ({ children }: any) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
