import { useLayoutEffect, useRef, useState } from "react";
// 리액트 엔진은 이 훅을 만나는 즉시 브라우저에게 "기다려! 내가 이 함수를 다 실행할 때까지 화면에 아무것도 그리지 마!"라는 강력한 명령을 내립니다.

function BasicLayoutEffect() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // 1. 실행 로직: 실재하는 DOM 수치를 측정하거나 스타일을 '동기적'으로 수정합니다.
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setWidth(rect.width);
    }

    return () => {
      // 2. 클린업 로직: 다음 실행 전이나 컴포넌트가 사라지기 전 정리 작업을 수행합니다.
      ref.current = null;
      setWidth(null);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        width: "50%",
        background: "lightgrey",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      내 실제 너비는 <b>{width}px</b> 입니다.
    </div>
  );
}

export default BasicLayoutEffect;
