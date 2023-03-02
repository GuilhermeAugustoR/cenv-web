import styled from "styled-components";
import { v } from "../../styles/variable";

export const Layout = styled.div`
  display: flex;
  width: 98vw;
`;

export const Main = styled.main`
  padding: calc(${v.smSpacing} * 2);
  width: 100%;
  h1 {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 98%;
  margin-left: 40px;
`;
