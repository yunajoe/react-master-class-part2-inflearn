import { memo } from "react";
import { useAuthState } from "../contexts/AuthContext";
import { useCartDispatch, useCartState } from "../contexts/CartContext";

const CartButton = memo(function CartButton({ item }) {
  const userInfo = useAuthState();
  const dispatch = useCartDispatch();
  const cartItems = useCartState();

  return (
    <button
      onClick={() => {
        if (!userInfo.user) {
          alert("로그인한 유저만 사용 가능합니다.");
          return;
        }
        const isAlready = cartItems.cart.find(
          (product) => product.id === item.id,
        );
        if (isAlready) {
          alert("이미 장바구니에 담겼습니다.");
          return;
        }
        dispatch({
          type: "ADD_CART",
          payload: item,
        });
      }}
    >
      🛒 장바구니 담기
    </button>
  );
});

export default CartButton;
