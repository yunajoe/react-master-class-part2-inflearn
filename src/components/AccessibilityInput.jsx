// useId가 어떻게 서버와 클라이언트 사이의 아이디 일관성을 유지하고,
// 웹 접근성을 향상시키는지 확인하는 구조로 설계
import { useId } from "react";

/**
 *  웹 접근성을 위한 고유 ID 설계
 * 라벨(label)과 입력창(input)를 논리적으로 연결하여 시각 장애인을 위한 스크린 리더 환경을 개선
 *
 *
 */
function AccessibilityInput({ label }) {
  const id = useId();
  // _r_0_

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* 2. htmlFor 속성을 통해 라벨과 입력창을 논리적으로 연결합니다. */}
      <label
        htmlFor={id}
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        {label}
      </label>

      <input
        id={id}
        type="text"
        placeholder="내용을 입력해주세요"
        style={{
          padding: "10px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}

export default AccessibilityInput;
