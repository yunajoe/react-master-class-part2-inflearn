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
