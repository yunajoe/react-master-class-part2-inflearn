import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import AnalyticsPage from "./AnalyticsPage";
import ErrorPage from "./ErrorPage.jsx";
import InventoryPage from "./InventoryPage";
import Layout from "./Layout";
import LoginPage from "./LoginPage.jsx";
import PrefetchPage, { inventoryLoader } from "./PrefetchPage";
import ProtectedPage from "./ProtectedPage";

// 2. 보안 로직이 추가된 로더입니다.
// redirect는 컴포넌트가 그려지기도 전(로더 단계)에 응답을 가로채 항로를 변경합니다.
export const protectedLoader = async () => {
  const isUserAuthenticated = false; // 실무에서는 세션이나 토큰을 확인합니다.

  if (!isUserAuthenticated) {
    // throw new Error("FAIL");  errorElement 실행
    // 사용자가 권한이 없다면 화면을 그리기 시도조차 하기 전에 주소를 꺾어버립니다.
    return redirect("/login");
  }
  return inventoryLoader();
};

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
        path: "login",
        element: <LoginPage />,
      },

      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "prefetch",
        element: <PrefetchPage />,
        loader: inventoryLoader,
      },
      {
        path: "protected",
        element: <ProtectedPage />,
        errorElement: <ErrorPage />,
        loader: protectedLoader,
      },
    ],
  },
]);

function DataRouterLayout() {
  return <RouterProvider router={router} />;
}

export default DataRouterLayout;
