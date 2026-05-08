import { createBrowserRouter, RouterProvider } from "react-router";
import AnalyticsPage from "./AnalyticsPage";
import InventoryPage from "./InventoryPage";
import Layout from "./Layout";
import PrefetchPage, { inventoryLoader } from "./PrefetchPage";

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
        path: "analytics", // 건물 내부의 특정 사무실
        element: <AnalyticsPage />,
      },
      {
        path: "prefetch", // 건물 내부의 특정 사무실
        element: <PrefetchPage />,
        loader: inventoryLoader,
      },
    ],
  },
]);

function DataRouterLayout() {
  return <RouterProvider router={router} />;
}

export default DataRouterLayout;
