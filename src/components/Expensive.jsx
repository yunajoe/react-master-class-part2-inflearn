import { memo } from "react";

const ExpensiveBox = memo(function ExpensiveBox({ createBoxStyle }) {
  console.log(
    "%c 👶 자식: 주소가 똑같네요! 렌더링 작업을 생략합니다.",
    "color: #10b981; font-weight: bold;",
  );

  const style = createBoxStyle();
  return <div style={style}>최적화된 박스</div>;
});

export default ExpensiveBox;
