import { memo } from "react";

const HeavyResultList = memo(function HeavyResultList({ deferredQuery }) {
  const items = [];
  for (let i = 0; i < 5000; i++) {
    if (`아이템 ${i}`.includes(deferredQuery)) {
      items.push(<li key={i}>검색 결과: 아이템 {i}</li>);
    }
  }
  return (
    <ul
      style={{ height: "300px", overflowY: "auto", border: "1px solid #ddd" }}
    >
      {items.length > 0 ? items : <li>결과가 없습니다.</li>}
    </ul>
  );
});

export default HeavyResultList;

// export default HeavyResultList;
