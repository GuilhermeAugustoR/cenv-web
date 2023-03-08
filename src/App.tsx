import React from "react";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import ThemesContextProvider from "./context/themesContext";

export const ThemeContext: any = React.createContext(null);

function App() {
  const [theme, setTheme] = React.useState(
    sessionStorage.getItem("@theme")
      ? sessionStorage.getItem("@theme")
      : "white"
  );
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemesContextProvider>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <GlobalStyle />
          <Layout>
            <Outlet />
          </Layout>
        </ThemeProvider>
      </ThemeContext.Provider>
    </ThemesContextProvider>
  );
}

export default App;
