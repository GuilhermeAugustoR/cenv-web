import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

export const ContainerCap = styled.div`
  display: flex;
  flex-wrap: inherit;
  width: 80%;
`;

export const ContainerBooks = styled.div`
  display: flex;
  width: 300px;
  margin-top: 10px;

  > button {
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`;
