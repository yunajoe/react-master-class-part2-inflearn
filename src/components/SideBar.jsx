import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SettingsPanel from "./SettingsPanel";

function Sidebar() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        // background: isDarkMode ? "#fff" : "#000",
        background: "blue",
        position: "fixed",
        insets: 0,
        width: "20px",
      }}
    >
      <SettingsPanel />
    </div>
  );
}

export default Sidebar;
