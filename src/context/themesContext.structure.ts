import React from "react";

export interface IThemesContext {
  themes: string | undefined | any;
  setThemes: React.Dispatch<React.SetStateAction<string | undefined | any>>;
  themeLogo: string | undefined | any;
  setThemeLogo: React.Dispatch<React.SetStateAction<string | undefined | any>>;
}

export interface IProps {
  children: React.ReactNode;
}
