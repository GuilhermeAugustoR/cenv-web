/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import * as Styled from "./styles";

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
  const { themeLogo }: any = useContext(ThemesContext);
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
    sessionStorage.setItem("@logo", logo);
  }, [logo, theme]);

  React.useEffect(() => {
    setLogo(themeLogo);
  }, [themeLogo]);

  React.useEffect(() => {
    if (sessionStorage.getItem("@theme") === "dark") {
      setLogo(logoBranca);
    } else setLogo(logoPreta);
  }, [theme, logo, setLogo]);

  return (
    <Styled.SSidebar isOpen={sidebarOpen}>
      <>
        <Styled.SidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </Styled.SidebarButton>
      </>
      <Styled.Logo>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </Styled.Logo>
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
      <Styled.Divider />
      {linksArray.map(({ icon, label, to }) => (
        <Styled.LinkContainer key={label} isActive={pathname === to}>
          <Styled.SLink
            to={to}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <Styled.LinkIcon>{icon}</Styled.LinkIcon>
            {sidebarOpen && (
              <>
                <Styled.LinkLabel>{label}</Styled.LinkLabel>
                {/* if notifications are at 0 or null, do not display */}
                {/* {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )} */}
              </>
            )}
          </Styled.SLink>
        </Styled.LinkContainer>
      ))}

      <Styled.Divider />

      {secondaryLinksArray.map(({ icon, label }) => (
        <Styled.LinkContainer key={label}>
          <Styled.SLink
            to="/"
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <Styled.LinkIcon>{icon}</Styled.LinkIcon>
            {sidebarOpen && <Styled.LinkLabel>{label}</Styled.LinkLabel>}
          </Styled.SLink>
        </Styled.LinkContainer>
      ))}

      <Styled.Divider />

      <Styled.Theme>
        {sidebarOpen && <Styled.ThemeLabel>Dark Mode</Styled.ThemeLabel>}
        <Styled.ThemeToggler
          isActive={theme === "dark"}
          onClick={() => {
            setTheme((p: string) => (p === "light" ? "dark" : "light"));
          }}
        >
          <Styled.ToggleThumb
            style={theme === "dark" ? { right: "1px" } : {}}
          />
        </Styled.ThemeToggler>
      </Styled.Theme>
    </Styled.SSidebar>
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
