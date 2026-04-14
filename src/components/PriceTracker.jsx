// 리액트가 잊어버린 "지난번 데이터"를 useRef 금고에 따로 보관하여 현재와 비교하는 로직을 작성합니다.

import { useEffect, useRef, useState } from "react";

function PriceTracker() {
  const [price, setPrice] = useState(1000);

  const prevPriceRef = useRef(null);

  useEffect(() => {
    prevPriceRef.current = price;
  }, [price]);

  const prevPrice = prevPriceRef.current;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "15px",
        backgroundColor: "#fff",
      }}
    >
      <h3>📈 주식 시세 분석기 (이전 값 추적)</h3>
      <p>
        실시간 현재가: <b style={{ fontSize: "1.2rem" }}>{price}원</b>
      </p>
      <p>
        직전 가격:{" "}
        <b>
          {prevPrice !== undefined ? `${prevPrice}원` : "데이터 수집 중..."}
        </b>
      </p>

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setPrice((p) => p + 100)}>가격 올리기</button>
        <button
          onClick={() => setPrice((p) => p - 100)}
          style={{ marginLeft: "10px" }}
        >
          가격 내리기
        </button>
      </div>
    </div>
  );
}

export default PriceTracker;
