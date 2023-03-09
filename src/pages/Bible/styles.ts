import styled from "styled-components";
import { device } from "../../styles/variable";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  margin-left: 30px;
  align-items: center;
  width: 100%;
  height: 95vh;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.laptopL} {
    grid-row-gap: 1rem;
    margin-left: 50px;
  }
`;

export const ContainerCap = styled.div`
  display: flex;
  flex-wrap: inherit;
  width: 80%;
`;

export const ContainerBooks = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  align-items: center;
  margin-left: 15px;

  > button {
    display: flex;
    text-align: left;
    font-size: 20px;
    color: ${({ theme }) => theme.text};
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @media ${device.laptopL} {
    margin-top: 8px;
  }
  @media ${device.laptop} {
    margin-left: 0px;
    box-sizing: border-box;
    width: calc((100% / 4) - 6rem);
  }
`;

export const ContainerChapterNumber = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 1.5rem;
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 95vh;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  > button {
    display: flex;
    width: 10%;
    align-self: center;
    text-align: center;
    justify-content: center;
    padding: 15px 40px;
    font-size: 26px;
    color: ${({ theme }) => theme.text};
    background: transparent;
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.text}`};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }

    @media ${device.laptopL} {
      padding: 20px 50px;
    }

    @media ${device.laptop} {
      padding: 20px 50px;
    }
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 80px;
    margin-left: 20px;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 10px;
    margin-left: 20px;
  }
`;

export const ContainerChapter = styled.div`
  width: 100%;
  height: 95vh;
  line-height: 50px;
  

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SubContainerChapter = styled.div`
  display: flex;
  width: 55%;
  margin: auto;
  

  > span {
    display: flex;
    font-size: 1.1rem;
  }
`;
