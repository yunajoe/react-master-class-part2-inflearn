import "./App.css";
import AuthSystem from "./components/AuthSystem";
import Test from "./components/Test";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <AuthProvider>
        <AuthSystem />
      </AuthProvider>
      <Test />
    </div>
  );
}

export default App;
