import React from "react";
import { Container, Content, SubContainer } from "./styles";
import { FaTimes, FaHome, FaBible, FaRegCalendarAlt } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ active }: any) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <SubContainer>
        <FaTimes onClick={closeSidebar} />
        <h2>CENV</h2>
      </SubContainer>
      <Content>
        <SidebarItem Icon={FaHome} Text="Inicio" />
        <SidebarItem Icon={MdOutlineMenuBook} Text="Sobre" />
        <SidebarItem Icon={IoMdContacts} Text="Ministerios" />
        <SidebarItem Icon={BsCalendarEvent} Text="Eventos" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendario" />
        <SidebarItem Icon={FaBible} Text="Biblia" />
      </Content>
    </Container>
  );
};

export default Sidebar;
