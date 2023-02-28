import React from "react";
import { IconType } from "react-icons";
import { Container } from "./styles";

interface ISidebarItem {
  Icon: IconType;
  Text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SidebarItem = ({ Icon, Text, onClick }: ISidebarItem) => {
  return (
    <Container onClick={onClick}>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
