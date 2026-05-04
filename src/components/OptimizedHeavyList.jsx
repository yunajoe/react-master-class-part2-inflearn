import { memo } from "react";

//  React.memo는 프롭이 이전과 동일하면 함수 실행 자체를 하지 않습니다.
const OptimizedHeavyList = memo(({ query }) => {
  console.log(`🐢 [HeavyList] "${query}" 데이터로 무거운 연산 시작...`);

  // 10,000개의 아이템을 생성하여 CPU 부하를 시뮬레이션합니다.
  const items = Array.from({ length: 10000 }, (_, i) => (
    <div key={i} style={{ padding: "5px", borderBottom: "1px solid #f0f0f0" }}>
      검색 결과 아이템 #{i} (키워드: {query})
    </div>
  ));

  return (
    <div
      style={{
        height: "400px",
        overflowY: "auto",
        border: "2px solid #eee",
        marginTop: "20px",
      }}
    >
      {items.length > 0 ? items : <h1>없어용</h1>}
    </div>
  );
});

export default OptimizedHeavyList;
