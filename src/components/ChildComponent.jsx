import { useState } from "react";

function ChildComponent() {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const result = useMemo(() => {
    console.log(
      "%c ⚙️ 금고에 기록이 없거나 데이터가 변경됨. 연산 가동!",
      "color: #ff4757; font-weight: bold;",
    );
    /** 로그를 찍으면 왜 더 부하가 심한가?
     * 문자열 변환
      콘솔 버퍼 저장
      DevTools와 통신
      렌더링 큐 처리
      이걸 10억 번 수행하는 겁니다.
      👉 즉, 단순 계산 → **I/O 작업 (출력)**으로 바뀌면서
      비용이 수천~수만 배 증가합니다.
     * 
     */
    for (let i = 0; i < 1000000000; i++) {}

    return number * 100;
  }, [number]);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px dashed #ffa502",
      }}
    >
      <h4>👶 자식 컴포넌트</h4>
      <p>나는 바뀐 게 없는데 부모님 때문에 다시 불려왔어요.</p>
    </div>
  );
}

export default ChildComponent;
