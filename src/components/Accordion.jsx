import { useId, useState } from "react";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const baseId = useId();

  return (
    <div style={{ borderBottom: "1px solid #ddd", fontFamily: "sans-serif" }}>
      <button
        id={baseId + "-header"} // panel id가 참조할 id
        // 현재 열림/닫힘 상태를 스크린 리더에게 전달
        aria-expanded={isOpen}
        // -panel를 제어하겠다.
        aria-controls={baseId + "-panel"} //   버튼의 aria-controls와 패널의 id가 동일하게 연결
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "15px",
          border: "none",
          backgroundColor: "white",
          textAlign: "left",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div
          id={baseId + "-panel"}
          style={{
            padding: "15px",
            backgroundColor: "#f1f2f6",
            lineHeight: "1.6",
          }}
          aria-labelledby={baseId + "header"} // 이 영역의 이름은 버튼의 텍스트임을 명시
          // 패널의 aria-labelledby와 버튼의 id가 동일하게 연결
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
