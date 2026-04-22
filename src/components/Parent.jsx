import { memo, useCallback, useState } from "react";

const ChildComponent = memo(({ onAction }) => {
  console.log("ChildComponent");
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px dashed #10b981",
      }}
    >
      <h4>👶 최적화된 자식</h4>
      <button onClick={onAction}>동작</button>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => console.log("Action!"), []);

  return (
    <div
      style={{
        padding: "30px",
        border: "2px solid #3b82f6",
        borderRadius: "20px",
      }}
    >
      <h2>부모 카운트: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        리렌더링 유발
      </button>
      <ChildComponent onAction={handleClick} />
    </div>
  );
}

export default Parent;
