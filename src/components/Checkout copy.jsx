import { startTransition, useState, useTransition } from "react";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Total({ quantity, isPending }) {
  return (
    <div className="total">
      <span>Total:</span>
      <span>
        {isPending ? "🌀 Updating..." : `${intl.format(quantity * 9999)}`}
      </span>
    </div>
  );
}
function Item({ action }) {
  function handleChange(event) {
    startTransition(async () => {
      await action(event.target.value);
    });
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="name">Quantity: </label>
      <input type="number" onChange={handleChange} defaultValue={1} min={1} />
    </div>
  );
}
export async function updateQuantity(newQuantity) {
  return new Promise((resolve, reject) => {
    // 네트워크 요청을 느리게 시뮬레이션합니다.
    setTimeout(() => {
      resolve(newQuantity);
    }, 2000);
  });
}

function App({}) {
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const updateQuantityAction = async (newQuantity) => {
    // transition의 보류 중인 상태에 액세스하려면,
    // startTransition을 다시 호출하세요.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity);
      startTransition(() => {
        setQuantity(savedQuantity);
      });
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Item action={updateQuantityAction} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  );
}
function Checkout() {
  return <div>Checkout</div>;
}

export default Checkout;
