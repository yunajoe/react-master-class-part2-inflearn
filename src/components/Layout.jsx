import { Outlet } from "react-router";
import Sidebar from "./Sidebar.jsx";

function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#f8fafc" }}>
      {/* Sidebar는 페이지 이동 시에도 절대 다시 그려지지 않고 고정됩니다. */}
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header
          style={{
            padding: "20px",
            background: "white",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <h2>Admin Dashboard</h2>
        </header>

        <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
          {/* Outlet: 현재 주소와 일치하는 자식 컴포넌트가 이 자리에 갈아 끼워집니다. */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
