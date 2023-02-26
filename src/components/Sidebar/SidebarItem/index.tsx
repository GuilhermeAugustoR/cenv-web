import React from "react";
import { IconType } from "react-icons";
import { Container } from "./styles";

interface ISidebarItem {
  Icon: IconType;
  Text: string;
}

const SidebarItem = ({ Icon, Text }: ISidebarItem) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
