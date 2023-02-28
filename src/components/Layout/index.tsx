import React from "react";
import * as Styled from "./styles";
import Sidebar from "../Sidebar";

const Layout = ({ children }: any) => {
  return (
    <Styled.Layout>
      <Sidebar />
      <Styled.Main>
        <Styled.Container>{children}</Styled.Container>
      </Styled.Main>
    </Styled.Layout>
  );
};

export default Layout;
