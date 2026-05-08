import { useLoaderData } from "react-router";

export const inventoryLoader = async () => {
  console.log("🚀 데이터 사전 확보 시작 (Pre-fetching)...");
  const response = await fetch("https://api.sampleapis.com/coffee/hot");

  if (!response.ok) {
    throw new Error("데이터를 가져오는 데 실패했습니다.");
  }

  // 여기서 반환된 데이터는 useLoaderData를 통해 컴포넌트로 전달됩니다.
  return response.json();
};

function PrefetchPage() {
  const products = useLoaderData();

  return (
    <div style={{ padding: "40px" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "900",
          color: "#0f172a",
          marginBottom: "30px",
        }}
      >
        REAL-TIME INVENTORY
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.slice(0, 6).map((item) => (
          <div
            key={item.id}
            style={{
              padding: "20px",
              background: "white",
              borderRadius: "20px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.1rem", color: "#1e293b" }}>
              {item.title}
            </h3>
            <p
              style={{ color: "#4f46e5", fontWeight: "900", marginTop: "10px" }}
            >
              ID: #{item.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrefetchPage;
