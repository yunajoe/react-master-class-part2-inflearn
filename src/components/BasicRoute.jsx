import { Route, Routes } from "react-router";
import AnalyticsPage from "../pages/AnalyticsPage.jsx";
import Home from "../pages/Home.jsx";
import LogPage from "../pages/LogPage.jsx";
function BasicRoute() {
  return (
    <Routes>
      {/* '/' 경로는 앱의 시작점(홈)을 의미하며 index 속성으로 표현 */}
      <Route index element={<Home />} />

      {/* 주소창이 '/analytics'가 되면 AnalyticsPage 컴포넌트 */}
      <Route path="analytics" element={<AnalyticsPage />} />

      {/* 주소창이 '/logs'가 되면 시스템 로그를 보여주는 LogPage가 나타납니다. */}
      <Route path="logs" element={<LogPage />} />
    </Routes>
  );
}

export default BasicRoute;
