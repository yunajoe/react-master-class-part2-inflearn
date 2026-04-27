import { useState } from "react";
import "./App.css";
import FadeInScale from "./components/FadeInScale.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <FadeInScale />;
}

export default App;
