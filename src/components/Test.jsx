import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Test() {
  const contextValue = useContext(AuthContext);
  return <div>{contextValue}</div>;
}

export default Test;
