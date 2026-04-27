import { useEffect, useRef, useState } from "react";

function PopupSystemCenterTwo() {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const popupRef = useRef(null);

  useEffect(() => {
    if (isOpen && popupRef.current) {
      const height = popupRef.current.offsetHeight;
      setOffset(height / 2);
    }
  }, [isOpen]);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <button onClick={() => setIsOpen(!isOpen)}>useEffect 팝업 토글</button>
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

export default PopupSystemCenterTwo;
