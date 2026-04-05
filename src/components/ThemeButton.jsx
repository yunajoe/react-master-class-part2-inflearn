import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeButton() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => toggleTheme()}>
      {isDarkMode ? "☀️ 라이트 모드로 변경" : "🌙 다크 모드로 변경"}
    </button>
  );
}

export default ThemeButton;
å;
