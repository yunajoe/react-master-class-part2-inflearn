import { useLayoutEffect, useRef, useState } from "react";

function TooltipStarter() {
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (!show || !buttonRef.current || !tooltipRef.current) return;
      if (show && buttonRef.current && tooltipRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        setCoords({
          top: buttonRect.bottom + 10,
          left: buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [show]);
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h3>미션 #31. 시작 코드 (Flicker 발생)</h3>
      <button
        ref={buttonRef}
        onClick={() => setShow(!show)}
        style={{ padding: "10px 20px" }}
      >
        툴팁 열기
      </button>

      {show && (
        <div
          ref={tooltipRef}
          style={{
            position: "fixed",
            top: `${coords.top}px`,
            left: `${coords.left}px`,
          }}
        >
          깜빡임이 느껴지시나요? 😢
        </div>
      )}
    </div>
  );
}

export default TooltipStarter;
