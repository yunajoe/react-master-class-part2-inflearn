import { useDeferredValue, useState } from "react";
import HeavyResultList from "./HeavyResultList.jsx";

function HeavyResultListWrapper() {
  const [query, setQuery] = useState("");

  // useDeferredValue는 query가 변경될 때 즉시 업데이트되지 않습니다.
  // 브라우저가 입력을 처리하느라 바쁘면 이전 값을 유지하다가, 한가해지면 최신값을 반영
  const deferredQuery = useDeferredValue(query);

  // 현재 백그라운드에서 새로운 값이 반영되기를 기다리는 'stale' 상태임
  const isStale = query !== deferredQuery;

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>⏳ useDeferredValue 실전 테스트</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="빠르게 타이핑해보세요!"
          style={{
            padding: "12px",
            fontSize: "18px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/*  데이터가 최신이 아닐 때(isStale) 시각적 피드백을 주어 UX를 개선 */}
      <div
        style={{
          opacity: isStale ? 0.3 : 1,
          transition: "opacity 0.2s ease-in-out",
        }}
      >
        <p style={{ fontWeight: "bold" }}>
          {isStale ? "🔄 최신 데이터 반영 중..." : "✅ 업데이트 완료"}
        </p>
        <HeavyResultList deferredQuery={deferredQuery} />
      </div>
    </div>
  );
}

export default HeavyResultListWrapper;
