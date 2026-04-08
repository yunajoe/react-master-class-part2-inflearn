import "./App.css";
import DashBoard from "./components/DashBoard.jsx";
import DashBoardProvider from "./provider/DashBoardProvider.jsx";

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
      <DashBoardProvider>
        <DashBoard />
      </DashBoardProvider>
    </div>
  );
}

export default App;
