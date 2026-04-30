import { useImperativeHandle, useRef, useState } from "react";

// 부모가 "가입하기" 버튼을 눌렀을 때, 모든 자식 입력창에게 스스로를 검사하고 에러가 있다면 포커스를 잡으라고 명령하는 구조
function ValidateInput({ ref, ...rest }) {
  const inputRef = useRef();
  const [error, setError] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      // 부모가 "검증해!"라고 호출할 함수
      validate: () => {
        if (!inputRef.current.value) {
          setError(true);
          return false; // 검증 실패 보고
        }
      },
      // 부모가 "포커스 잡아!"라고 호출할 함수
      focus: () => {
        inputRef.current.focus();
      },
    }),
    [],
  );
  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        {...rest}
        ref={inputRef}
        style={{
          padding: "10px",
          border: `2px solid ${error ? "red" : "#ccc"}`,
          borderRadius: "4px",
          width: "200px",
        }}
      />
      {error && (
        <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>
          필수 입력 항목입니다.
        </p>
      )}
    </div>
  );
}

export default ValidateInput;
