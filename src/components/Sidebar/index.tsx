import React from "react";
import { Container, Content, SubContainer } from "./styles";
import { FaTimes, FaHome, FaBible, FaRegCalendarAlt } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";
import Logo from "../../assets/LogoMNVBranco.png";

import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

const Sidebar = ({ active }: any) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <SubContainer>
        <FaTimes onClick={closeSidebar} />
        <img src={Logo} alt="Logo" />
      </SubContainer>
      <Content>
        <Link to="/">
          <SidebarItem Icon={FaHome} Text="Inicio" />
        </Link>
        <SidebarItem Icon={MdOutlineMenuBook} Text="Sobre" />
        <SidebarItem Icon={IoMdContacts} Text="Ministerios" />
        <SidebarItem Icon={BsCalendarEvent} Text="Eventos" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendario" />

        <Link to="/bible">
          <SidebarItem Icon={FaBible} Text="Biblia" />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
