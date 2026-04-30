import { useId, useRef, useState } from "react";

/***
 * 
 * 보통 아코디언은 마우스로 클릭해서 열고 닫는데, 키보드만으로도 조작할 수 있게 만들기
  구체적으로는, 아코디언 제목(버튼)에 키보드 포커스가 있을 때:
  ↓ 방향키 → 다음 아코디언 제목으로 이동
  ↑ 방향키 → 이전 아코디언 제목으로 이동

    왜 이게 중요하냐면?
    마우스를 쓰기 어려운 사람들(시각장애인, 지체장애인 등)은 키보드나 보조기기로 웹을 탐색해요.
    실무에서는 이런 웹 접근성(Accessibility, a11y) 을 지키는 게 필수예요. Radix UI, shadcn/ui 같은 실무 라이브러리들이 다 이걸 구현
 * 
 * 
 * 
 */
function AccordionItem({ title, ref, onKeyDown, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const baseId = useId();

  const headerId = baseId + "-header";
  const panelId = baseId + "-panel";

  return (
    <div style={{ borderBottom: "1px solid #ddd", fontFamily: "sans-serif" }}>
      <button
        ref={ref}
        onKeyDown={onKeyDown} // 부
        id={baseId + "-header"} // panel id가 참조할 id
        onClick={() => setIsOpen(!isOpen)}
        // 현재 열림/닫힘 상태를 스크린 리더에게 전달
        aria-expanded={isOpen}
        // -panel를 제어하겠다.
        aria-controls={panelId} //   버튼의 aria-controls와 패널의 id가 동일하게 연결
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
        <span style={{ color: "black" }}>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div
          id={panelId}
          aria-labelledby={headerId} // 이 영역의 이름은 버튼의 텍스트임을 명시
          style={{
            padding: "15px",
            backgroundColor: "#f1f2f6",
            lineHeight: "1.6",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function Accordion({ items }) {
  const itemsRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % itemsRefs.current.length;
      itemsRefs.current[next].focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev =
        (index - 1 + itemsRefs.current.length) % itemsRefs.current.length;

      itemsRefs.current[prev].focus();
    }
  };
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          ref={(el) => (itemsRefs.current[index] = el)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
