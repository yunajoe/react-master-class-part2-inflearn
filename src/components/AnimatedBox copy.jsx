import { forwardRef, useImperativeHandle, useRef } from "react";

const AnimatedBox = forwardRef((props, ref) => {
  const boxRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      // 부모가 "흔들어!"라고 명령할 함수
      startShake: () => {
        if (boxRef.current) {
          boxRef.current.classList.remove("shake-animation");
          // [비기] 강제 리플로우 유도하여 애니메이션 즉시 재시작 보장
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
      Box
    </div>
  );
});

export default AnimatedBox;
