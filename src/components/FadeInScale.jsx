import { useLayoutEffect, useRef } from "react";

function FadeInScale() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.opacity = "0";
      boxRef.current.style.transform = "scale(0.5) translateY(20px)";
      /**
       * 
       * 1. void가 없을 때: 브라우저는 값을 반환하지만, 우리는 그 값을 어디에도 쓰지 않죠. 린트(Lint) 설정에 따라 "사용하지 않는 값이 생성되었다"는 경고가 뜰 수 있습니다.
         2. void가 있을 때: void (100)이 되어 최종 결과는 undefined가 됩니다. 즉, **"이 값은 쓸모없으니 버려라"**라고 명시하는 것입니다.
       */

      // 이 줄은 오직 브라우저를 강제로 일하게 만들기(Reflow) 위해 작성된 의도적인 코드
      void boxRef.current.offsetHeight;
      boxRef.current.style.transition = "all 0.5s ease-out";
      boxRef.current.style.opacity = "1";
      boxRef.current.style.transform = "scale(1) translateY(0)";
    }
  }, []);
  return (
    <div
      ref={boxRef}
      style={{ width: 100, height: 100, background: "coral" }}
    />
  );
}

export default FadeInScale;
