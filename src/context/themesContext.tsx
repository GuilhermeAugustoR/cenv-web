import React from "react";
import { IThemesContext, IProps } from "./themesContext.structure";

export const ThemesContext = React.createContext({} as IThemesContext);

const ThemesContextProvider: React.FC<IProps> = ({ children }) => {
  const [themes, setThemes] = React.useState<string | undefined>("");
  const [themeLogo, setThemeLogo] = React.useState<any | undefined>("");

  React.useEffect(() => {
    setThemeLogo(sessionStorage.getItem("@logo"));
  }, [themeLogo, setThemeLogo]);

  return (
    <ThemesContext.Provider
      value={React.useMemo(
        () => ({
          themes,
          setThemes,
          themeLogo,
          setThemeLogo,
        }),
        [themes, setThemes, themeLogo, setThemeLogo]
      )}
    >
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesContextProvider;
