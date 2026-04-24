import { useState } from "react";

function ColorPickerWrapper({ children }) {
  const [color, setColor] = useState("#ffffff");

  return (
    <div
      style={{ backgroundColor: color, padding: "30px", transition: "0.3s" }}
    >
      <h3>🎨 배경색 변경 (컴포넌트 합성)</h3>
      <button onClick={() => setColor("#fff9db")}>노란색</button>
      <button
        onClick={() => setColor("#e7f5ff")}
        style={{ marginLeft: "10px" }}
      >
        파란색
      </button>

      {/* 핵심: children으로 들어온 무거운 컴포넌트는 배경색이 바뀌어도 리렌더링되지 않습니다. */}
      <div style={{ marginTop: "20px" }}>{children}</div>
    </div>
  );
}

export default ColorPickerWrapper;
