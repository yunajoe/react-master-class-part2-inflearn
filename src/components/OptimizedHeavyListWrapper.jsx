import { useDeferredValue, useState } from "react";
import OptimizedHeavyList from "./OptimizedHeavyList.jsx";

function OptimizedHeavyListWrapper() {
  const [text, setText] = useState("");
  //  사용자가 타이핑하는 동안 deferredText는 '옛날 값'을 유지하며 자식의 리렌더링을 막는다.
  const deferredText = useDeferredValue(text);
  //  현재 화면이 최신 상태인지 확인하는 지표
  const isStale = text !== deferredText;

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <header>
        <h1>⚡ 심화 최적화: DeferredValue + Memo</h1>
        <p>빠르게 타이핑해도 인풋 창은 멈추지 않습니다.</p>
      </header>
      <div style={{ position: "relative", marginTop: "30px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="검색어를 입력해보세요 (예: 리액트)"
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "20px",
            borderRadius: "12px",
            border: "2px solid #4f46e5",
            boxSizing: "border-box",
          }}
        />
        {isStale && (
          <div
            style={{
              position: "absolute",
              right: "15px",
              top: "15px",
              color: "#4f46e5",
            }}
          >
            🔄 계산 중...
          </div>
        )}
        <section
          style={{
            marginTop: "30px",
            opacity: isStale ? 0.3 : 1,
            transition: "opacity 0.2s ease",
            pointerEvents: isStale ? "none" : "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>검색 결과 리스트</h3>
            <span style={{ fontSize: "14px", color: "#666" }}>
              {isStale ? "이전 결과 표시 중" : "최신 결과"}
            </span>
          </div>
          <OptimizedHeavyList query={deferredText} />
        </section>
      </div>
    </div>
  );
}

export default OptimizedHeavyListWrapper;
