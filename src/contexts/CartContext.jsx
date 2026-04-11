import { createContext, useContext } from "react";

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

export function useCartState() {
  const context = useContext(CartStateContext);
  if (!context) {
    throw new Error("useCartState 반드시 CartProvider 안에서 사용해야 합니다!");
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error(
      "useCartDispatch 반드시 CartProvider 안에서 사용해야 합니다!",
    );
  }
  return context;
}
