import { useImperativeHandle, useRef } from "react";

//  부모의 ref를 props으로 받기
function MyInput({ ref, props }) {
  // 자식 내부에서 실제 DOM을 붙잡을 내부용 ref
  const inputRef = useRef();

  // 부모가 잡고 흔들 수 있는 '비밀 손잡이'를 정의
  /**
   * useImperativeHandle은 부모의 ref.current 안에다 return에서 정의한 함수들을 넣는 역할
   */
  useImperativeHandle(ref, () => {
    console.log("ref", ref);
    return {
      focus: () => {
        inputRef.current.focus();
      },
      clear: () => {
        console.log("CLEAR");
        inputRef.current.value = "";
      },
      greeting: () => {
        alert("하이");
      },
    };
  }, []);
  return (
    <input
      ref={inputRef}
      {...props}
      style={{ padding: "10px", border: "2px solid #3b82f6" }}
    />
  );
}

export default MyInput;
