import { useSearchParams } from "react-router";

function InventoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  const handlerFilter = (type) => {
    setSearchParams({ category: type, color: "red" });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "900",
          color: "#1e293b",
          marginBottom: "24px",
        }}
      >
        INVENTORY MANAGEMENT
      </h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
        <button
          style={getButtonStyle(category === "all")}
          onClick={() => handlerFilter("all")}
        >
          전체
        </button>
        <button
          style={getButtonStyle(category === "electronics")}
          onClick={() => handlerFilter("electronics")}
        >
          전자기기
        </button>
        <button
          onClick={() => handlerFilter("furniture")}
          style={getButtonStyle(category === "furniture")}
        >
          가구
        </button>
      </div>
      {/* 필터 결과 표시 영역 */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "32px",
          border: "2px solid #f1f5f9",
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ color: "#64748b", fontWeight: "500" }}>
          현재 필터링 된 카테고리:
          <span
            style={{
              color: "#4f46e5",
              fontWeight: "900",
              marginLeft: "8px",
              textTransform: "uppercase",
            }}
          >
            {category}
          </span>
        </p>

        <div
          style={{ marginTop: "24px", color: "#94a3b8", fontStyle: "italic" }}
        >
          {category} 카테고리에 해당하는 상품들을 주소창의 명령에 따라
          실시간으로 필터링하여 보여줍니다.
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;

const getButtonStyle = (isActive) => ({
  padding: "10px 20px",
  borderRadius: "12px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  backgroundColor: isActive ? "#4f46e5" : "#e2e8f0",
  color: isActive ? "white" : "#475569",
});
