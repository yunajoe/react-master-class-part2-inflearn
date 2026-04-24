import { useState } from "react";
import HeavyComponent from "./HeavyComponent";

//  진단 및 해결이 이루어질 대시보드
function PerformanceDashboard() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "30px" }}>
      <h1>🔍 성능 진단 대시보드</h1>
      <p>
        인풋에 글자를 치면 부모가 리렌더링되면서 자식도 매번 100ms씩 고생합니다.
      </p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="글자를 입력하면 버벅임을 느낄 수 있습니다..."
        style={{ padding: "10px", width: "350px" }}
      />
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{ marginLeft: "10px" }}
      >
        단순 클릭: {count}
      </button>

      <HeavyComponent />
    </div>
  );
}

export default PerformanceDashboard;
