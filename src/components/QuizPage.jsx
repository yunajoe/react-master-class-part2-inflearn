import { useImperativeHandle, useRef, useState } from "react";

function AnimatedBox({ ref }) {
  const boxRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      shake: () => {
        if (!boxRef.current) return;

        if (boxRef.current.classList.contains("apply-shake")) {
          boxRef.current.classList.remove("apply-shake");
        }
        // 브라우저의 레이아웃 엔진을 강제로 깨우는 명령
        void boxRef.current.offsetWidth;
        boxRef.current.classList.add("apply-shake");
      },
    };
  }, []);
  return (
    <div ref={boxRef} className="shake-box">
      오답입니다!
    </div>
  );
}

function AnimatedBox2({ ref, shake, setShake }) {
  const boxRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      shake: () => {
        if (shake) {
          setShake(false);
        }
        setShake(true);
      },
    };
  }, []);
  return (
    <div ref={boxRef} className={shake ? "shake-box apply-shake" : "shake-box"}>
      오답입니다!
    </div>
  );
}

function QuizPage() {
  const [shake, setShake] = useState();
  const parentRef = useRef();

  const handleWrongAnswer = () => {
    parentRef.current.shake();
  };
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>❓ 다음 중 리액트 훅이 아닌 것은?</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        {/* <AnimatedBox ref={parentRef} /> */}
        <AnimatedBox2 ref={parentRef} shake={shake} setShake={setShake} />
      </div>
      <button
        onClick={handleWrongAnswer}
        style={{
          padding: "15px 30px",
          fontSize: "16px",
          cursor: "pointer",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
        }}
      >
        오답 클릭 (광클 테스트!)
      </button>
    </div>
  );
}

export default QuizPage;
