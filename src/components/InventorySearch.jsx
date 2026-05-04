import { memo, useDeferredValue, useState } from "react";

// 1만 개의 가상 재고 데이터 (수정 금지)
const bigInventory = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item #${i + 1} - Category ${i % 5}`,
}));

// [자식 컴포넌트] 무거운 리스트
// TODO 2: React.memo를 사용하여 프롭이 변하지 않으면 렌더링을 건너뛰게 하세요.
const ProductList = memo(({ query }) => {
  console.log(`🔥 [리스트 연산] "${query}" 필터링 중...`);

  const filteredItems = bigInventory.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <ul style={{ maxHeight: "400px", overflow: "auto" }}>
      {filteredItems.length > 0 ? (
        <>
          {filteredItems.slice(0, 100).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </>
      ) : (
        <h1>없어용</h1>
      )}
    </ul>
  );
});

export default function InventorySearch() {
  const [query, setQuery] = useState("");

  // TODO 1: useDeferredValue를 사용하여 query의 지연된 버전을 만드세요.
  const deferredQuery = useDeferredValue(query);

  // TODO 3: 원본 값과 지연된 값을 비교하여 'stale(오래된)' 상태인지 확인하세요.
  const isStale = query !== deferredQuery;

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>📦 글로벌 인벤토리 검색</h2>

      {/* 인풋은 항상 최신 query를 보여주어 타이핑이 즉각 반영되어야 합니다. */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요..."
        style={{ padding: "12px", width: "100%", fontSize: "16px" }}
      />

      <hr />

      {/* 리스트 영역: 지연된 값을 전달하고, 업데이트 중일 때 시각적 피드백을 줍니다. */}
      <div
        style={{
          opacity: isStale ? 0.5 : 1,
          transition: "opacity 0.2s",
        }}
      >
        {isStale && <p>데이터를 불러오는 중입니다...</p>}
        <ProductList query={deferredQuery} />
      </div>
    </div>
  );
}
