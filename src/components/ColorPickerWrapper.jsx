import { useState } from "react";
/**
 *
 * props.children으로 전달된 엘리먼트는
 * 부모 컴포넌트가 실행되기 전인 외부에서 이미 객체 형태로 생성되었습니다.
 *  따라서 부모가 리렌더링되어도 리액트는 "이 도시락은 밖에서 온 거네?"라고 판단하며 내부를 다시 뒤지지 않는 자동 베일아웃(Bail-out) 효과를 줍니다.
 */
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
