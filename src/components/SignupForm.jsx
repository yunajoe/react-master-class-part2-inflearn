// 핵심 목표: 자식이 스스로의 상태(에러 여부)를 관리하고, 부모의 명령에 따라 검증 결과를 반환(Return)하는 구조 설계.
// 상세 시나리오: 여러분은 '회원가입' 페이지를 만들고 있습니다.
// 이름, 이메일 등 각 입력창은 별도의 자식 컴포넌트로 분리되어 있습니다.
//  부모 컴포넌트의 "다음 단계" 버튼을 누르면,
//  자식은 1) 현재 값이 비어있는지 스스로 검사하고
//  2) 비어있다면 에러 UI를 띄우고 포커스를 주며
//  3) 검증 성공 여부(true/false)를 부모에게 보고해야 합니다.

import { useImperativeHandle, useRef, useState } from "react";

function ValidateInput({ ref, label, ...rest }) {
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      check: () => {
        const isValid = !!inputRef.current.value;
        if (!isValid || inputRef.current.value.trim() === "") {
          inputRef.current.focus();
          setHasError(!isValid);
        }

        return isValid;
      },
    };
  }, []);
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>{label}</label>
      <input
        {...rest}
        ref={inputRef}
        style={{
          padding: "10px",
          width: "250px",
          border: `2px solid ${hasError ? "#ff4d4f" : "#ccc"}`,
          borderRadius: "4px",
          outline: "none",
        }}
      />
      {hasError && (
        <p style={{ color: "#ff4d4f", fontSize: "12px", margin: "5px 0 0" }}>
          ⚠️ {label} 항목은 필수 입력입니다.
        </p>
      )}
    </div>
  );
}

function SignupForm() {
  const nameRef = useRef();

  const handleNextStep = () => {
    const isSuccess = nameRef.current.check();
    if (isSuccess) {
      alert("✅ 검증 성공! 다음 단계로 이동합니다.");
      return;
    }
  };
  return (
    <div>
      <h2>📝 회원가입 (1/3단계)</h2>
      <ValidateInput
        ref={nameRef}
        label="성함"
        placeholder="이름을 입력하세요"
      />
      <button
        onClick={handleNextStep}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        다음 단계로
      </button>
    </div>
  );
}

export default SignupForm;
