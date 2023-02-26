import React from "react";
import { Container, Content } from "./styles";
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
      <FaTimes onClick={closeSidebar} />
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
