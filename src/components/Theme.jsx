import ThemeContextProvider from "../contexts/ThemeContext";
import AppContent from "./AppContent";
import Sidebar from "./Sidebar";
function Theme() {
  return (
    <ThemeContextProvider>
      <AppContent />
      <Sidebar />
    </ThemeContextProvider>
  );
}

export default Theme;
