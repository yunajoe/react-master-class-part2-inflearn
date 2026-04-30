import "./App.css";
import Accordion from "./components/Accordion.jsx";

const accordionData = [
  {
    title: "React란 무엇인가요?",
    content: "React는 UI를 만들기 위한 JavaScript 라이브러리입니다.",
  },
  {
    title: "forwardRef는 왜 쓰나요?",
    content: "부모 컴포넌트가 자식의 DOM에 직접 접근할 수 있게 해줍니다.",
  },
  {
    title: "웹 접근성이란?",
    content: "키보드, 스크린리더 등으로도 웹을 사용할 수 있게 만드는 것입니다.",
  },
];

function App() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* <AccordionItem title="1. useId의 핵심 원리">
        컴포넌트의 트리 위치를 기반으로 ID를 생성하여 SSR 환경에서도 안전합니다.
      </AccordionItem>
      <AccordionItem title="2. 상호 참조(Cross-reference)란?">
        두 요소가 서로의 ID를 속성값으로 가져 관계를 맺는 웹 표준 방식입니다.
      </AccordionItem>
      <AccordionItem title="3. 접미사 전략의 장점">
        하나의 훅 호출로 여러 개의 연관된 ID를 체계적으로 관리할 수 있습니다.
      </AccordionItem> */}
      <Accordion items={accordionData} />
    </div>
  );
}

export default App;
