import { useState, useTransition } from "react";
import AdminDashBoard from "./AdminDashBoard.jsx";
import HomeTab from "./HomeTab.jsx";
import PostsTab from "./PostsTab.jsx";

function AdminDashBoardWrapper() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const handleTabSelect = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };
  return (
    <div>
      <h1>🚀 동시성 탭 전환 시스템</h1>
      <div>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: tab === "home" ? "#4f46e5" : "#eee",
            color: tab === "home" ? "white" : "black",
          }}
          onClick={() => handleTabSelect("home")}
        >
          홈
        </button>
        <button
          onClick={() => handleTabSelect("posts")}
          style={{
            padding: "10px 20px",
            backgroundColor: tab === "posts" ? "#4f46e5" : "#eee",
            color: tab === "posts" ? "white" : "black",
          }}
        >
          게시판
        </button>
        <button
          onClick={() => handleTabSelect("admin")}
          style={{
            padding: "10px 20px",
            backgroundColor: tab === "admin" ? "#ef4444" : "#eee",
            color: tab === "admin" ? "white" : "black",
          }}
        >
          대시보드 (무거움)
        </button>

        <div style={{ height: "30px" }}>
          {isPending && (
            <p style={{ color: "#4f46e5", fontWeight: "bold" }}>
              ⏳ 백그라운드에서 화면을 구성 중입니다...
            </p>
          )}
        </div>

        <main
          style={{
            opacity: isPending ? 0.3 : 1,
            transition: "opacity 0.3s ease",
            pointerEvents: isPending ? "none" : "auto",
          }}
        >
          {tab === "home" && <HomeTab />}
          {tab === "posts" && <PostsTab />}
          {tab === "admin" && <AdminDashBoard />}
        </main>
      </div>
    </div>
  );
}

export default AdminDashBoardWrapper;
