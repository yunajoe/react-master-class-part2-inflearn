import { memo } from "react";

const ExpensiveChild = memo(function ExpensiveChild({ onAction }) {
  console.log("나는야 자식 컴퍼넌트");
  return (
    <div
      style={{
        border: "1px dashed orange",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <h4>자식 컴포넌트 (최적화됨)</h4>
      <button onClick={onAction}>액션 실행</button>
    </div>
  );
});

export default ExpensiveChild;
