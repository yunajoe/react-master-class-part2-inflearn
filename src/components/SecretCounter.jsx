import { useRef, useState } from "react";

export default function SecretCounter() {
  // 1. [전광판] 값이 바뀌면 리액트가 화면을 싹 다 지우고 다시 그립니다.
  const [renderCount, setRenderCount] = useState(0);

  // 2. [비밀 수첩] 값이 바뀌어도 리액트는 모른 척합니다. (렌더링 유발 X)
  const secretRef = useRef(0);

  // 3. [일반 변수] 함수가 다시 실행될 때마다(리렌더링) 매번 초기화됩니다.
  let localVariable = 0;

  const increaseSecret = () => {
    // 수첩의 숫자를 올립니다. 콘솔에는 찍히지만 화면은 꿈쩍도 하지 않습니다.
    secretRef.current = secretRef.current + 1;
    localVariable = localVariable + 1;

    console.log(
      "🤫 수첩(Ref):",
      secretRef.current,
      " | 📦 일반 변수:",
      localVariable,
    );
  };

  return (
    <div
      style={{
        padding: "30px",
        border: "2px solid #6366f1",
        borderRadius: "20px",
      }}
    >
      <h2>🤫 비밀 수첩 카운터 실험실</h2>
      <hr />
      <div style={{ marginBottom: "20px" }}>
        <p>
          📢 전광판(useState): <b>{renderCount}</b>
        </p>
        <p>
          🤫 수첩(useRef): <b>{secretRef.current}</b>
        </p>
        <p>
          📦 일반 변수(let): <b>{localVariable}</b>
        </p>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={increaseSecret} style={{ padding: "10px" }}>
          비밀 숫자 올리기 (수첩에 적기)
        </button>
        <button
          onClick={() => setRenderCount((prev) => prev + 1)}
          style={{ padding: "10px" }}
        >
          화면 새로고침 (전광판 업데이트)
        </button>
      </div>

      <div style={{ marginTop: "20px", fontSize: "0.9rem", color: "#666" }}>
        <p>* 비밀 숫자를 아무리 올려도 화면 숫자는 0에서 변하지 않습니다.</p>
        <p>
          * '화면 새로고침'을 누르는 순간, 그동안 모아둔 수첩의 숫자가
          나타납니다!
        </p>
        <p>* 하지만 일반 변수는 새로고침되는 순간 다시 0으로 초기화됩니다.</p>
      </div>
    </div>
  );
}
