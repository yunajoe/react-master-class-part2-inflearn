import { useReducer } from "react";
import { CounterContext } from "../contexts/CounterContext.jsx";
import { counterReducer } from "../reducer/counterReducer.js";

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, 0);

  const value = { state, dispatch };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export default CounterProvider;
