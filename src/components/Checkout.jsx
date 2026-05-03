import { useState, useTransition } from "react";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [isPending2, setIsPending2] = useState(false);
  const [isPending, startTransition] = useTransition();

  const updateQuantity = (quantity) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(quantity);
      }, 3000);
    });
  };

  const handleChange = (e) => {
    startTransition(async () => {
      const deferredQuantity = await updateQuantity(e.target.value);
      setQuantity(deferredQuantity);
    });
  };
  const handleChange2 = async (e) => {
    // isPending의 상태를 수동으로 설정
    setIsPending2(true);
    const savedQuantity = await updateQuantity(e.target.value);
    setIsPending2(false);
    setQuantity2(savedQuantity);
  };

  return (
    <div>
      <h1>Checkout1</h1>
      {/* item */}
      <div className="item">
        <span>투어 티켓</span>
        <label htmlFor="name">Quantity: </label>
        <input type="number" min={1} defaultValue={1} onChange={handleChange} />
      </div>
      <div className="total">
        <span>Total:</span>
        <span>
          {isPending ? "Updating" : `${intl.format(quantity * 9999)}원`}
        </span>
      </div>

      <h1>Checkout2</h1>
      {/* item */}
      <div className="item">
        <span>투어 티켓</span>
        <label htmlFor="name">Quantity: </label>
        <input
          type="number"
          disabled={isPending2}
          min={1}
          defaultValue={1}
          onChange={handleChange2}
        />
      </div>
      <div className="total">
        <span>Total:</span>
        <span>
          {isPending2 ? "Updating" : `${intl.format(quantity2 * 9999)}원`}
        </span>
      </div>
    </div>
  );
}

export default Checkout;
