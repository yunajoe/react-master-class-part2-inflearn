import { Route, Routes } from "react-router";
import AnalyticsPage from "../pages/AnalyticsPage.jsx";
import Home from "../pages/Home.jsx";
import LogPage from "../pages/LogPage.jsx";
import Layout from "./Layout.jsx";

function OutletRoute() {
  return (
    <Routes>
      {/* 1. 최상위 경로를 Layout 컴포넌트로 잡습니다. */}
      <Route path="/" element={<Layout />}>
        {/* 2. 자식 라우트들은 부모의 Outlet 자리에 렌더링됩니다. */}
        <Route index element={<Home />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="logs" element={<LogPage />} />
      </Route>
    </Routes>
  );
}

export default OutletRoute;
