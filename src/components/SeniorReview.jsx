import { useCallback, useState } from "react";
import ExpensiveList from "./EventList";

function SeniorReview() {
  const [items, setItems] = useState([
    { id: 1, text: "시니어의 설계 철학 공부" },
    { id: 2, text: "불필요한 훅 제거하기" },
  ]);
  const [otherState, setOtherState] = useState(0);

  const handleDelete = useCallback((id) => {
    setUsers((prev) => prev.filter((item) => item.id !== id));
  });

  return (
    <div
      style={{
        padding: "30px",
        border: "2px solid #4f46e5",
        borderRadius: "20px",
      }}
    >
      {/* 2. [구조적 최적화] 자주 변하는 상태는 별도 컴포넌트로 밀어내어 
               부모의 렌더링 폭발 반경을 최소화합니다. */}
      <h3>단순 카운터: {otherState}</h3>
      <button onClick={() => setOtherState((prev) => prev + 1)}>
        부모 리렌더링 유발
      </button>

      <hr />

      {/* 3. [참조 무결성] 진짜 무거운 리스트에만 최적화를 투입합니다. */}
      <ExpensiveList items={items} onItemClick={handleDelete} />
    </div>
  );
}

export default SeniorReview;
