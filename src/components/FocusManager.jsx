import { useRef } from "react";

// [ ] 실습 미션: 버튼을 하나 더 만들고, 클릭 시
//  window.scrollTo가 아닌
//   inputRef.current.scrollIntoView({ behavior: 'smooth' })를 사용해
//  입력창 위치로 스크롤이 이동하게 만들어 보세요!
export default function FocusManager() {
  // 1. 입력창을 가리킬 리모컨(Ref)을 준비합니다.
  const inputRef = useRef(null);
  const handleFocus = () => {
    // 2. [방어적 코드] 리모컨 상자 안에 실제 요소가 들어있는지 확인합니다.
    // 요소가 화면에서 사라졌을 수도 있기 때문에 null 체크는 필수입니다.
    if (inputRef.current) {
      // 3. 브라우저 표준 API인 focus()를 실행합니다.
      // inputRef.current는 실제 <input> HTML 엘리먼트 그 자체입니다.
      inputRef.current.focus();

      // 4. 직접적인 스타일 제어도 가능합니다. (남발은 금지!)
      inputRef.current.style.backgroundColor = "#fff9db";
      inputRef.current.style.border = "2px solid #fab005";
      inputRef.current.placeholder = "입력을 시작하세요!";
    }
  };
  const handleScroll = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        border: "1px solid #eee",
        borderRadius: "15px",
        backgroundColor: "#fafafa",
        minHeight: "150vh",
      }}
    >
      <h3>⌨️ DOM 접근 및 포커스 제어</h3>
      <div style={{ marginBottom: "15px" }}>
        <input
          ref={inputRef} // 리모컨 연결!
          type="text"
          placeholder="여기를 클릭하지 말고 버튼을 누르세요"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
      </div>
      <button
        onClick={handleFocus}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        입력창으로 강제 포커스 이동
      </button>
      <button style={{ marginTop: "100pxc" }} onClick={handleScroll}>
        입력창위치로 스크롤 위치 이동
      </button>
    </div>
  );
}
