import { Route, Routes } from "react-router";
import Home from "../pages/Home.jsx";
import DynamicLayout from "./DynamicLayout.jsx";
import ProductDetail from "./ProductDetail.jsx";

function DynamicRoute() {
  return (
    <Routes>
      <Route path="/" element={<DynamicLayout />}>
        <Route index element={<Home />} />
        <Route path="inventory/:productId" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default DynamicRoute;
