import styled from "styled-components";

type OtherDataWrapperType = {
  sidebar?: boolean;
};

export const Container = styled.div<OtherDataWrapperType>`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;
export const SubContainer = styled.div`
  display: flex;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-left: 250px;
    cursor: pointer;
  }
  > img {
    position: fixed;
    color: white;
    width: 80px;
    height: auto;
    margin-top: 30px;
    margin-left: 100px;
  }
`;
export const Content = styled.div`
  margin-top: 100px;
`;
