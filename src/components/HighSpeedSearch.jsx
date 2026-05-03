import { useState, useTransition } from "react";

const bigData = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `Premium Product ${i + 1}`,
}));

function HighSpeedSearch() {
  const [filterText, setFilterText] = useState(""); // 인풋 값 (사용자 반응성 직결)
  const [list, setList] = useState(bigData);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setFilterText(value);

    startTransition(() => {
      const filtered = list.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      );
      setList(filtered);
    });
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h2>🛒 초고속 상품 검색 시스템</h2>
      <input
        type="text"
        value={filterText}
        placeholder="상품명을 입력해보세요 (렉 테스트)"
        onChange={handleChange}
        style={{
          padding: "12px",
          width: "350px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <hr style={{ margin: "20px 0" }} />
      <div
        style-={{ opacity: isPending ? 0.3 : 1, transition: "opacity 0.3s" }}
      >
        {isPending && (
          <p style={{ color: "#007bff" }}>
            🔍 데이터를 분석하며 목록을 갱신 중입니다...
          </p>
        )}
        {list.slice(0, 100).map((item) => (
          <div
            key={item.id}
            style={{ padding: "8px", borderBottom: "1px solid #eee" }}
          >
            {item.name}
          </div>
        ))}
        {list.length === 0 && <p>검색결과가 없습니다.</p>}
      </div>
    </div>
  );
}

export default HighSpeedSearch;
