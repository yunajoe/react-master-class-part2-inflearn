// 페이지가 처음 열릴 때가 아닌, 사용자가 실제로 동작을 수행했을 때만 알림을 띄우는 스위치를 구현합니다.

import { useEffect, useRef, useState } from "react";

function SkipFirstRender() {
  const [count, setCount] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log("우!", isFirstRender);
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log("실제 수량 변경 감지! 알림을 전송합니다.");
    alert(`현재 수량이 ${count}개로 변경되었습니다.`);
  }, [count]);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#eef2ff",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <h3>🛒 장바구니 수량 제어 (초기 실행 방지)</h3>
      <p>
        수량: <b>{count}</b>
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        수량 추가하기
      </button>
      <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "10px" }}>
        * 페이지가 처음 열릴 때는 alert가 뜨지 않습니다.
        <br />* 버튼을 누르는 순간부터 alert가 작동합니다.
      </p>
    </div>
  );
}

export default SkipFirstRender;
