import { useRef } from "react";
import "./App.css";
import MyInput from "./components/MyInput.jsx";

function App() {
  const idRef = useRef(null);
  const id2Ref = useRef(null);

  const handleFocus = () => {
    if (idRef.current) {
      idRef.current.focus();
      idRef.current.style.backgroundColor = "#eff6ff";
    }
  };

  const handleFocus2 = () => {
    if (id2Ref.current) {
      id2Ref.current.focus();
      id2Ref.current.style.backgroundColor = "blue";
    }
  };

  return (
    <>
      {/* <ReferenceExample /> */}
      {/* <SecretCounter /> */}
      {/* <MagicSearch /> */}
      {/* <FocusManager /> */}
      {/* <PriceTracker /> */}
      {/* <SkipFirstRender /> */}
      {/* <ExchangeRateTracker /> */}
      {/* <SmartTimer /> */}
      {/* <VideoOptimizer /> */}
      {/* <AdvancedDropdown /> */}
      {/* <PremiumPlayer /> */}
      <MyInput
        ref={idRef}
        label="사용자 ID"
        placeholder="아이디를 입력하세요"
      />
      <MyInput
        ref={id2Ref}
        label="사용자 ID2"
        placeholder="아이디를 입력하세요2"
      />
      <button
        onClick={handleFocus}
        style={{
          padding: "10px 20px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        자식 컴포넌트 포커스 잡기
      </button>
      <button
        onClick={handleFocus2}
        style={{
          padding: "10px 20px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        자식 컴포넌트 포커스 잡기2
      </button>
    </>
  );
}

export default App;
