// 독립적 작동: 동일한 AccordionItem을 여러 개 배치했을 때, 각 아이템의 제목을 클릭하면 해당 아이템의 내용만 정확히 열리고 닫혀야 합니다.
// 논리적 연결: 개발자 도구(F12)로 확인했을 때:
// 버튼의 aria-controls 값과 내용 영역의 id 값이 일치해야 합니다.
// 내용 영역의 aria-labelledby 값과 버튼의 id 값이 일치해야 합니다.
// 접근성 보장: 스크린 리더가 버튼을 포커스했을 때 "접힘/펼침 상태"와 "제어하는 영역"을 정확히 인지할 수 있는 구조여야 합니다.

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  // ❌ 문제 지점: ID가 고정되어 있어 여러 개를 쓰면 중복이 발생하고 꼬입니다.
  const headerId = "acc-header";
  const panelId = "acc-panel";

  return (
    <div style={{ borderBottom: "1px solid #ddd" }}>
      <button
        id={headerId}
        onClick={() => setIsOpen(!isOpen)}
        // 버튼, 탭, 메뉴 등 제어 요소(Controller)가 어떤 콘텐츠 요소(Target)를 조작하고 있는지 스크린 리더 같은 보조 기술에 알려주는 WAI-ARIA 속성
        // 웹 접근성을 위해 요소에 이름을 붙일 때, 화면에 보이는 다른 요소의 텍스트(ID)를 참조하여 해당 요소의 이름(Label)을 정의하는 속성  (aria-label vs aria-labelledby)
        /**
         * aria-label: 문자열을 직접 입력하여 이름 지정 (예: aria-label="닫기").
         * aria-labelledby: 다른 요소의 ID를 이용하여 이름 지정 (예: aria-labelledby="title_id"
         *
         */

        /**
         *
         * aria-expanded는 아코디언, 드롭다운 메뉴, 탭 등 콘텐츠의 확장/축소 상태를 스크린 리더 사용자에게 알려주는 ARIA 속성
         */
        aria-expanded={isOpen}
        style={{
          width: "100%",
          padding: "15px",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        {title}
      </button>

      {isOpen && (
        <div
          id={panelId}
          // 이 패널의 제목이 무엇인지 버튼과 연결이 필요합니다.
          style={{ padding: "15px", backgroundColor: "#f9f9f9" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
