import { useEffect, useRef, useState } from "react";

function SmartTimer() {
  const [count, setCount] = useState(0);

  // [리모컨] 검색창 자동 포커스용
  const inputRef = useRef(null);
  // 첫 렌더링 방어용
  const isFirstRender = useRef(true);
  // 이전 기록용
  const prevCountRef = useRef(null);
  // 타이머 ID
  const timerIdRef = useRef(null);

  const startTimer = () => {
    timerIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    console.log("  timerIdRef.current ", timerIdRef.current);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(`기록: 현재(${count}초), 이전(${prevCountRef.current}초)`);
    prevCountRef.current = count;
  }, [count]);

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "15px",
      }}
    >
      <h3>⏱️ 스마트 타이머 시스템</h3>
      <input
        placeholder="여기에 메모하세요"
        style={{ padding: "8px" }}
        ref={inputRef}
      />
      <h1 style={{ fontSize: "3rem" }}>{count}s</h1>
      <button
        onClick={startTimer}
        style={{ backgroundColor: "#4caf50", color: "white" }}
      >
        시작
      </button>
      <button
        onClick={stopTimer}
        style={{
          backgroundColor: "#f44336",
          color: "white",
          marginLeft: "10px",
        }}
      >
        정지
      </button>
    </div>
  );
}

export default SmartTimer;
