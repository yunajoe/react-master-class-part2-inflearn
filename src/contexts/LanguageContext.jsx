import { createContext } from "react";

export const LangContext = createContext({
  lang: "KO",
  setLang: (lang) => {},
});
