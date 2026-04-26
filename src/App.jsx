import { useState } from "react";
import "./App.css";
import PopupSystemCenter from "./components/PopupSystemCenter";
import PopupCenterSystemTwo from "./components/PopupSystemCenterTwo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PopupSystemCenter />
      <PopupCenterSystemTwo />
    </>
  );
}

export default App;
