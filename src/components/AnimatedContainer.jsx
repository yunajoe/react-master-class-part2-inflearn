function AnimatedContainer() {
  const inputControlRef = useRef();
  const boxRef = useRef();
  return (
    <div>
      <style>
        {`
        .shake-animation {
          animation: shake 0.3s ease-in-out;
        }
        @keyframes shake {
           0%, 100% {transform: translateX(0);}
           25% { transform: translateX(-10px);}
           75% { transform: translateX(10px);}
         }`}
      </style>

      <ValidateInput ref={inputControlRef} placeholder="test" />
      <AnimatedBox ref={boxRef} />

      <button
        onClick={() => {
          const result = inputControlRef.current.validate();
          if (!result) {
            // alert("필수 입력 항목을 적어주세요.");
            inputControlRef.current.focus();
            boxRef.current.startShake();
            return;
          }
          alert("가입에 성공하였습니다.");
        }}
      >
        가입하기
      </button>
    </div>
  );
}

export default AnimatedContainer;
