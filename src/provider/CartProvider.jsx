import { useReducer } from "react";
import { CartDispatchContext, CartStateContext } from "../contexts/CartContext";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CART": {
      const alreadyCart = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (alreadyCart) {
        return state;
      }
      return { ...state, cart: [...state.cart, action.payload] };
    }
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    items: [
      { id: 1, name: "리액트 마스터", price: 50000 },
      { id: 2, name: "자바", price: 30000 },
      { id: 3, name: "컴퓨터", price: 10000 },
    ],
    cart: [],
  });
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export default CartProvider;
