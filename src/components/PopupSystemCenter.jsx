import { useLayoutEffect, useRef, useState } from "react";

export default function PopupCenterSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const popupRef = useRef(null);

  useLayoutEffect(() => {
    if (isOpen && popupRef.current) {
      // 화면에 그려지기 직전, 팝업의 실제 픽셀 높이를 가져옵니다.
      const height = popupRef.current.offsetHeight;
      setOffset(height / 2); // 높이의 절반만큼 위로 올리기 위한 보정값 저장
    }
  }, [isOpen]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        useLayoutEffect 팝업 토글
      </button>
      {isOpen && (
        <div
          ref={popupRef}
          style={{
            position: "fixed",
            // 계산된 offset을 적용하여 페인팅 전에 위치를 완벽하게 보정합니다.
            top: `calc(50% - ${offset}px)`,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "40px",
            backgroundColor: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            borderRadius: "20px",
          }}
        >
          <p>사용자는 0.1초의 깜빡임도 보지 못하는</p>
          <p>완벽한 정중앙 팝업입니다.</p>
        </div>
      )}
    </div>
  );
}
