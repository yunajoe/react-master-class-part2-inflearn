import { useCallback, useState } from "react";
import ExpensiveChild from "./ExpensiveChild.jsx";

function ActionConsole() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const handleAction = useCallback(() => {
    console.log("액션 버튼이 눌렸습니다.");
  }, []);
  return (
    <div
      style={{
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        padding: "30px",
        borderRadius: "20px",
        border: "2px solid #ddd",
      }}
    >
      <h2>🕹️ 액션 제어 센터</h2>
      <p>
        현재 카운트: <b>{count}</b>
      </p>

      <button onClick={() => setCount(count + 1)}>
        숫자 증가 (부모 리렌더링)
      </button>
      <button onClick={() => setIsDark(!isDark)} style={{ marginLeft: "10px" }}>
        배경색 전환 (함수 주소는 고정됨)
      </button>

      <hr />

      {/* 2. 자식 컴포넌트에게 '박제된' 함수를 전달합니다. */}
      <ExpensiveChild onAction={handleAction} />
    </div>
  );
}

export default ActionConsole;
