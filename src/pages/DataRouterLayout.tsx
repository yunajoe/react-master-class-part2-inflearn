import { createBrowserRouter, RouterProvider } from "react-router";
import AnalyticsPage from "./AnalyticsPage";
import InventoryPage from "./InventoryPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // 메인 로비 (부모 주소로 들어왔을 때 기본 화면)
        element: <InventoryPage />,
      },
      {
        path: "test", // 건물 내부의 특정 사무실
        element: <AnalyticsPage />,
      },
    ],
  },
]);

function DataRouterLayout() {
  return <RouterProvider router={router} />;
}

export default DataRouterLayout;
