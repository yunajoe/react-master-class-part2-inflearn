import { useEffect, useRef, useState } from "react";

function PremiumPlayer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // video관련
  const videoRef = useRef(null);
  const timerIdRef = useRef(null);
  const lastTimeRef = useRef(null);

  // dropdown 영역
  const dropdownRef = useRef(null);

  // 첫 렌더시에만 알림 띄우기
  const isFirstLoad = useRef(true);

  //  TODO : 0.1초마다 재생 시간을 lastTimeRef에 기록하는 타이머를 시작하세요
  const startTracking = () => {
    console.log("START TRACKING");
    // 이미 진행하고 있는  timer가 있으면은 return
    if (timerIdRef.current) return;
    timerIdRef.current = setInterval(() => {
      lastTimeRef.current = videoRef.current.currentTime;
    }, 100);
  };

  // TODO: 타이머를 멈추고 금고(timerIdRef.current)를 비우세요.
  const stopTracking = () => {
    console.log("STOP TRACKING");
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  // 영역 밖 클릭 감지 로직
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log("외부 영역을 클릭했습니다.");
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // TODO : 첫 렌더링 시에만 알림을 띄우세요. (isFirstLoad 활용)
  useEffect(() => {
    if (isFirstLoad.current) {
      alert("이전에 시청하던 지점부터 재생을 시작할 수 있습니다.");
      isFirstLoad.current = false;
      return;
    }
  }, []);

  return (
    <div style={containerStyle}>
      <h2>🎬 React Fix Premium (Starter)</h2>
      <div style={playerWrapperStyle}>
        <video
          width="100%"
          ref={videoRef}
          controls
          onPlay={startTracking}
          onPause={stopTracking}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={gearButtonStyle}
        >
          ⚙️ 설정
        </button>

        {isMenuOpen && (
          <div style={menuStyle} ref={dropdownRef}>
            <h4>플레이어 설정</h4>
            <button
              onClick={() =>
                alert(`현재 기록: ${lastTimeRef.current.toFixed(1)}초`)
              }
            >
              중간 기록 확인
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PremiumPlayer;

// 스타일 정의 (Vite에서 바로 확인 가능)
const containerStyle = {
  padding: "50px",
  textAlign: "center",
  fontFamily: "sans-serif",
};
const playerWrapperStyle = {
  position: "relative",
  display: "inline-block",
  background: "#000",
  borderRadius: "8px",
  overflow: "hidden",
};
const gearButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "24px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "white",
};
const menuStyle = {
  position: "absolute",
  top: "45px",
  right: "10px",
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  textAlign: "left",
};
