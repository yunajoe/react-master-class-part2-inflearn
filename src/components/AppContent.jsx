import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);
  const themeStyle = {
    backgroundColor: "red",
    backgroundColor: isDarkMode ? "#222" : "#fff",
    color: isDarkMode ? "#fff" : "#222",
    transition: "all 0.3 ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    gap: "4px",
  };
  return (
    <div style={themeStyle}>
      <header>
        <h1>🌐 React Times</h1>
      </header>
      <main style={{ textAlign: "center" }}>
        <h2>오늘의 주요 뉴스</h2>
        <p>Context API를 활용하면 테마 변경도 누워서 떡 먹기!</p>
      </main>
    </div>
  );
}

export default AppContent;
