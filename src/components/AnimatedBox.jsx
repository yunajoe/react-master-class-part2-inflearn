import { useImperativeHandle, useRef } from "react";

// 상태 변경에 의한 비동기 처리가 아니라, 명령을 받는 즉시 단 1프레임의 오차도 없이 상자를 흔드는 기법
function AnimatedBox({ ref, ...rest }) {
  const boxRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      startShake: () => {
        if (boxRef.current) {
          boxRef.current.classList.remove("shake-animation");
          void boxRef.current.offsetWidth;
          boxRef.current.classList.add("shake-animation");
        }
      },
    }),
    [],
  );

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        background: "coral",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
      }}
    >
      AnimatedBox
    </div>
  );
}

export default AnimatedBox;
