import "./App.css";
import CounterScreen from "./components/CounterScreen.jsx";
import CounterProvider from "./provider/CounterProvider.jsx";

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
      <CounterProvider>
        <CounterScreen />
      </CounterProvider>
    </div>
  );
}

export default App;
