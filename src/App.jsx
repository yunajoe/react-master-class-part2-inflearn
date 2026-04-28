import { useState } from "react";
import "./App.css";
import AccessibilityInput from "./components/AccessibilityInput.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <AccessibilityInput />;
}

export default App;
