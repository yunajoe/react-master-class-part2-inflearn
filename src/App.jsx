import { useState } from "react";
import "./App.css";
import { LangContext } from "./contexts/LanguageContext.jsx";
import Layout from "./Layout.jsx";

function App() {
  const [lang, setLang] = useState("KO");

  return (
    <>
      <LangContext value={{ lang, setLang }}>
        <Layout />
      </LangContext>
    </>
  );
}

export default App;
