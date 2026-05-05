import { useParams } from "react-router";

function ProductDetail() {
  const { productId } = useParams();
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "900", color: "#1e293b" }}>
        PRODUCT ANALYSIS
      </h2>

      <p style={{ marginTop: "16px", color: "#64748b" }}>
        현재 조회 중인 상품 코드:
        <span
          style={{ color: "#4f46e5", fontWeight: "bold", marginLeft: "8px" }}
        >
          #{productId}
        </span>
      </p>

      {/* 2. 이 productId를 열쇠 삼아 서버에서 상세 데이터를 불러오는 로직이 이곳에 들어갑니다. */}
      <div
        style={{
          marginTop: "40px",
          height: "200px",
          background: "#f1f5f9",
          borderRadius: "24px",
          border: "2px dashed #cbd5e1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#94a3b8",
          fontStyle: "italic",
        }}
      >
        여기에 {productId}번 상품의 상세 정보와 통계 차트가 나타납니다.
      </div>
    </div>
  );
}

export default ProductDetail;
