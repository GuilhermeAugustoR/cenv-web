/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import {
  Divider,
  SLink,
  LinkContainer,
  LinkIcon,
  LinkLabel,
  Logo,
  SSidebar,
  SidebarButton,
  Theme,
  ThemeLabel,
  ThemeToggler,
  ToggleThumb,
} from "./styles";

import logoBranca from "../../assets/LogoMNVBranco.png";
import logoPreta from "../../assets/LogoMNVPreto.png";

import { AiOutlineHome, AiOutlineLeft, AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { FaRegCalendarAlt, FaBible } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineMenuBook } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../App";
import { ThemesContext } from "../../context/themesContext";

const Sidebar = () => {
  const { setTheme, theme }: any = useContext(ThemeContext);
  const searchRef: any = useRef(null);
  const [logo, setLogo] = useState<any>();
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

  React.useEffect(() => {
    sessionStorage.setItem("@theme", theme);
  }, [theme]);

  React.useEffect(() => {
    if (sessionStorage.getItem("@theme") === "dark") {
      setLogo(logoBranca);
    } else setLogo(logoPreta);
  }, [setLogo, theme, logo]);

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SidebarButton>
      </>
      <Logo>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Logo>
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
      <Divider />
      {linksArray.map(({ icon, label, to }) => (
        <LinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && (
              <>
                <LinkLabel>{label}</LinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {/* {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )} */}
              </>
            )}
          </SLink>
        </LinkContainer>
      ))}

      <Divider />

      {secondaryLinksArray.map(({ icon, label }) => (
        <LinkContainer key={label}>
          <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && <LinkLabel>{label}</LinkLabel>}
          </SLink>
        </LinkContainer>
      ))}

      <Divider />

      <Theme>
        {sidebarOpen && <ThemeLabel>Dark Mode</ThemeLabel>}
        <ThemeToggler
          isActive={theme === "dark"}
          onClick={() => {
            setTheme((p: string) => (p === "light" ? "dark" : "light"));
          }}
        >
          <ToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </ThemeToggler>
      </Theme>
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
