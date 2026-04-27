import { useState } from "react";
import "./App.css";
import TooltipStarter from "./components/TooltipStarter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <TooltipStarter />;
}

export default App;
