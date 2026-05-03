import { memo } from "react";

const AdminDashBoard = memo(function AdminDashBoard() {
  const items = Array.from(
    { length: 10000 },
    (_, i) => `대시보드 리포트 데이터 #${i + 1}`,
  );
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>📊 관리자 상세 리포트 (방대함)</h3>
      <ul
        style={{ height: "400px", overflowY: "auto", border: "1px solid #ddd" }}
      >
        {items.map((item, index) => (
          <li key={index} style={{ padding: "5px", fontSize: "12px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default AdminDashBoard;
