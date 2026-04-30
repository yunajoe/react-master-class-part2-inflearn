import { useRef, useState } from "react";
import "./App.css";
import MyInput from "./components/MyInput.jsx";

function App() {
  const [count, setCount] = useState(0);
  const inputControlRef = useRef();

  return (
    <div>
      <h1>🎮 컴포넌트 원격 제어</h1>
      <MyInput ref={inputControlRef} placeholder="부모가 제어하는 입력창" />
      <div>
        <button onClick={() => inputControlRef.current.focus()}>
          강제 포커스 명령
        </button>
        <button onClick={() => inputControlRef.current.clear()}>
          입력창 비우기 명령
        </button>
        <button onClick={() => inputControlRef.current.greeting()}>
          alert창 띄우기 명령
        </button>
      </div>
    </div>
  );
}

export default App;
