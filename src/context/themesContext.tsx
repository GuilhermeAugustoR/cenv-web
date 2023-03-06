import React from "react";
import { IThemesContext, IProps } from "./themesContext.structure";

export const ThemesContext = React.createContext({} as IThemesContext);

const ThemesContextProvider: React.FC<IProps> = ({ children }) => {
  const [themes, setThemes] = React.useState<string | undefined>("");

  return (
    <ThemesContext.Provider
      value={React.useMemo(
        () => ({
          themes,
          setThemes,
        }),
        [themes, setThemes]
      )}
    >
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesContextProvider;
