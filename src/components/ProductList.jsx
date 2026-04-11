import { useContext } from "react";
import { ProductStateContext } from "../contexts/ProductContext";
import StockButton from "./StockButton";

function ProductList() {
  const state = useContext(ProductStateContext);
  return (
    <>
      {state.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <p>
            {item.name} : {item.status}
          </p>

          <StockButton id={item.id} />
        </div>
      ))}
    </>
  );
}

export default ProductList;
