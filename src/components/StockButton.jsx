import { memo, useContext } from "react";
import { ProductDispatchContext } from "../contexts/ProductContext";

const StockButton = memo(function StockButton({ id }) {
  const dispatch = useContext(ProductDispatchContext);
  console.log(`버튼  ${id} 렌더링됨 (최적화 확인용)`);

  return (
    <button
      onClick={() => {
        dispatch({
          type: "SOLD_OUT",
          payload: id,
        });
      }}
    >
      [품절 처리 버튼]
    </button>
  );
});

export default StockButton;
