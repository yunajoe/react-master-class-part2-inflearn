import { useState, useTransition } from "react";
import HeavyList from "./HeavyList.jsx";

const bigData = Array.from(
  { length: 10000 },
  (_, i) => `데이터 아이템 ${i + 1}`,
);

function HeavyListWrapper() {
  const [filterText, setFilterText] = useState(""); // 긴급 상태 (Input)
  const [filteredList, setFilteredList] = useState(bigData); // 비긴급 상태 (List)

  /**
   * useTransition은 정확히 두 개의 항목이 있는 배열을 반환
    isPending 플래그는 대기 중인 Transition이 있는지 알려줌
    startTransition 함수는 업데이트를 Transition으로 표시할 수 있게 해주는 함수
   * startTransition에 전달한 함수를 “Action”이라고 함
     Action 안에서는 state를 업데이트할 수 있으며, 필요하다면 부수 효과도 수행함
     이 작업은 페이지의 사용자 상호작용을 차단하지 않고 백그라운드에서 처리됨
   * 
   */

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;

    // 1. [긴급 업데이트] 입력값은 즉시 반영하여 타이핑이 씹히지 않게 합니다.
    setFilterText(value);

    // 2. [비긴급 업데이트] 무거운 필터링 로직은 '나중에 해도 되는 일'로 분류합니다.
    startTransition(() => {
      const filteredData = bigData.filter((item) => item.includes(value));
      setFilteredList(filteredData);
    });
    // const filteredData = bigData.filter((item) => item.includes(value));
    // setFilteredList(filteredData);
  };
  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h1>⚡ useTransition 실전 테스트</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={filterText}
          onChange={handleChange}
          placeholder="검색어를 입력하세요 (예: 123)"
          style={{ padding: "12px", fontSize: "18px", width: "300px" }}
        />
        {/* 리액트가 백그라운드에서 계산 중임을 사용자에게 알립니다. */}
        {isPending && (
          <span
            style={{ marginLeft: "10px", color: "#4f46e5", fontWeight: "bold" }}
          >
            데이터 분석 중...
          </span>
        )}

        <div
          style={{
            opacity: isPending ? 0.3 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <p>검색 결과: {filteredList.length}건</p>
          <HeavyList items={filteredList} />
        </div>
      </div>
    </div>
  );
}

export default HeavyListWrapper;
