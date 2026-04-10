import { useContext } from "react";
import {
  ProductDispatchContext,
  ProductStateContext,
} from "../contexts/ProductContext";

function ProductSystem() {
  const { state } = useContext(ProductStateContext);
  const { dispatch } = useContext(ProductDispatchContext);

  return (
    <div>
      <h1> [ 📦 React Mall 관리자 모드 ]</h1>
      {state.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <p>
            {item.name} : {item.status}
          </p>
          <button
            onClick={() => {
              dispatch({
                type: "SOLD_OUT",
                payload: item.id,
              });
            }}
          >
            [품절 처리 버튼]
          </button>
          <button
            onClick={() => {
              dispatch({
                type: "DELETE",
                payload: item.id,
              });
            }}
          >
            [삭제 버튼]
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductSystem;
