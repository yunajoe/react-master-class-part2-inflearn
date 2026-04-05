import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SettingsPanel from "./SettingsPanel";

function Sidebar() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: isDarkMode ? "#fff" : "#000",
        position: "fixed",
        top: 0,
        bottom: 0,
        width: "180px",
      }}
    >
      <SettingsPanel />
    </div>
  );
}

export default Sidebar;
