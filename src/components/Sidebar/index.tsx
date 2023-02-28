import React, { useContext, useRef, useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";

import logoBranca from "../../assets/LogoMNVBranco.png";
import logoPreta from "../../assets/LogoMNVPreto.png";

import {
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { FaRegCalendarAlt, FaBible } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";

import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../App";

const Sidebar = () => {
  const searchRef: any = useRef(null);
  const { setTheme, theme }: any = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={theme === "dark" ? logoBranca : logoPreta} alt="logo" />
      </SLogo>
      {/* <SSearch
        onClick={searchClickHandler}
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch> */}
      <SDivider />
      {linksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {/* {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )} */}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />
      
      {secondaryLinksArray.map(({ icon, label }) => (
        <SLinkContainer key={label}>
          <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider />
      
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => {
            setTheme((p: string) => (p === "light" ? "dark" : "light"));
          }}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />:
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Inicio",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Sobre",
    icon: <MdOutlineMenuBook />,
    to: "/about",
  },
  {
    label: "Ministérios",
    icon: <IoMdContacts />,
    to: "/minister",
  },
  {
    label: "Eventos",
    icon: <BsCalendarEvent />,
    to: "/events",
  },
  {
    label: "Calendário",
    icon: <FaRegCalendarAlt />,
    to: "/calendar",
  },
  {
    label: "Biblia",
    icon: <FaBible />,
    to: "/bible",
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];

export default Sidebar;
