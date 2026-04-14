import { useEffect, useRef, useState } from "react";

function ExchangeRateTracker() {
  const [rate, setRate] = useState(1300); // 현재 환율 상태

  const isFirstRef = useRef(true);
  const prevRateRef = useRef(null);

  useEffect(() => {
    prevRateRef.current = rate;
    if (isFirstRef.current) {
      isFirstRef.current = false;
      return;
    }
    alert(`환율이 ${rate}원으로 변동되었습니다.`);
  }, [rate]);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h3>💹 실시간 환율 추적기</h3>
      <p>
        현재 환율: <b>{rate}원</b>
      </p>
      <p>
        직전 환율:{" "}
        <b>
          {prevRateRef.current
            ? `${prevRateRef.current}원`
            : "데이터 수집 중..."}
        </b>
      </p>

      <div style={{ fontSize: "24px", margin: "10px 0" }}>
        {/* TODO 7: 현재 환율과 직전 환율을 비교하여 ▲, ▼, - 를 표시하세요. */}
      </div>

      <button onClick={() => setRate((prev) => prev + 10)}>환율 올리기</button>
      <button onClick={() => setRate((prev) => prev - 10)}>환율 내리기</button>
    </div>
  );
}

export default ExchangeRateTracker;
