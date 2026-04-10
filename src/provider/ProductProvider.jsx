import { useMemo, useReducer } from "react";
import {
  ProductDispatchContext,
  ProductStateContext,
} from "../contexts/ProductContext";

function reducer(state, action) {
  switch (action.type) {
    case "SOLD_OUT": {
      return [
        ...state.map((item) =>
          item.id === action.payload ? { ...item, status: "품절" } : item,
        ),
      ];
    }
    case "DELETE": {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
}
function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, [
    {
      id: 1,
      name: "아이템 A",
      status: "처리중",
    },
    {
      id: 2,
      name: "아이템 B",
      status: "처리중",
    },
    {
      id: 3,
      name: "아이템 C",
      status: "처리중",
    },
  ]);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <ProductStateContext.Provider value={{ state: memoizedState }}>
      <ProductDispatchContext.Provider value={{ dispatch }}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}

export default ProductProvider;
