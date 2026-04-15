import { useRef } from "react";

function VideoOptimizer() {
  const videoRef = useRef(null);
  const lastTimeRef = useRef(null);
  const onTimeUpdate = () => {
    if (videoRef.current) {
      lastTimeRef.current = videoRef.current.currentTime;
    }
  };

  const saveProgress = () => {
    alert(`현재 ${Math.floor(lastTimeRef.current)}초 지점을 저장했습니다.`);
  };
  return (
    <div>
      <video ref={videoRef} onTimeUpdate={onTimeUpdate} controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <button
        onClick={saveProgress}
        style={{ marginTop: "10px", width: "100%", padding: "10px" }}
      >
        시청 위치 기록하기
      </button>
    </div>
  );
}

export default VideoOptimizer;
