import { useState, useTransition } from "react";

// [자식 1] 가벼운 홈 탭
const HomeTab = () => (
  <div style={{ padding: "20px" }}>🏡 홈 화면: 환영합니다!</div>
);

// [자식 2] 매우 무거운 빅데이터 탭 (수정 금지)
const HeavyDashboard = () => {
  console.log("⏳ 무거운 데이터를 렌더링 중...");
  const items = Array.from({ length: 20000 }, (_, i) => (
    <li key={i} style={{ fontSize: "12px", color: "#666" }}>
      분석된 데이터 레코드 #{i}
    </li>
  ));
  return (
    <div style={{ padding: "20px" }}>
      <h3>📊 빅데이터 정밀 분석 결과</h3>
      <ul style={{ maxHeight: "400px", overflow: "auto" }}>{items}</ul>
    </div>
  );
};

function IntelligentTabs() {
  const [tab, setTab] = useState("home");

  const [isPending, startTransition] = useTransition();

  const handleTabSelect = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };
  return (
    <div>
      <h2>🛠️ 어드민 관제 시스템</h2>

      <nav style={{ marginBottom: "20px" }}>
        <button
          onClick={() => handleTabSelect("home")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: tab === "home" ? "#007bff" : "#eee",
            color: tab === "home" ? "#fff" : "#000",
          }}
        >
          일반 정보 (가벼움)
        </button>
        <button
          onClick={() => handleTabSelect("heavy")}
          style={{
            padding: "10px 20px",
            background: tab === "heavy" ? "#007bff" : "#eee",
            color: tab === "heavy" ? "#fff" : "#000",
          }}
        >
          빅데이터 통계 (매우 무거움)
        </button>
      </nav>
      <hr />
      {isPending && <p>"콘텐츠를 준비 중입니다..."라는 안내를 띄우세요.</p>}
      <main>
        {tab === "home" && <HomeTab />}
        {tab === "heavy" && <HeavyDashboard />}
      </main>
    </div>
  );
}

export default IntelligentTabs;
