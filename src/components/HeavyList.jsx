import { memo } from "react";

const HeavyList = memo(function HeavyList({ items }) {
  console.log(`🚀 ${items.length}개의 아이템 렌더링 중...`);
  return (
    <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={index}
          style={{ padding: "8px", borderBottom: "1px solid #eee" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
});

export default HeavyList;
