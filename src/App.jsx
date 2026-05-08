import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <Routes>
      {/* 기본 경로는 대시보드로, /login 경로는 로그인 페이지로 연결합니다. */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
