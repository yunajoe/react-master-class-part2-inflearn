import { createContext, useState } from "react";

export const ThemeContext = createContext("");

function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  const value = { isDarkMode, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
