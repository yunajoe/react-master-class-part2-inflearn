import { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #3b82f6",
        borderRadius: "8px",
      }}
    >
      <h4>텍스트 입력 (상태 격리)</h4>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="여기서 글자를 쳐도 옆집 차트는 가만히 있습니다."
        style={{ width: "100%", padding: "8px" }}
      />
    </div>
  );
}

export default InputBox;
