import "./App.css";
import MallSystem from "./components/MallSystem.jsx";
import ToastProvider from "./provider/MallProvider.jsx";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToastProvider>
        <MallSystem />
      </ToastProvider>
    </div>
  );
}

export default App;
