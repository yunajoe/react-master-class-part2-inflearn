import { useCartState } from "../contexts/CartContext";
import CartButton from "./CartButton";

function CartSystem() {
  const data = useCartState();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>[ 🌐 React Mall ] </h1>
      {data.items.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", alignItems: "center", columnGap: "4px" }}
        >
          <p>
            {item.name} ({item.price})
          </p>
          <CartButton item={item} />
        </div>
      ))}
      <p>
        장바구니 담긴 개수:{data.cart.length === 0 ? 0 : data.cart.length}개
      </p>
    </div>
  );
}

export default CartSystem;
