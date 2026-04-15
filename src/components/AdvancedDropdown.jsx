import { useEffect, useRef, useState } from "react";

function AdvancedDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // isOpen이 true일 경우에만 해당이 된다. 즉, false일경우 (메뉴가 안 열려 있을 경우)에는 할 필요없음.
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log("영역 밖 클릭 감지! 메뉴를 닫습니다.");
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <div
        ref={dropdownRef}
        style={{
          position: "relative",
          display: "inline-block",
          background: "blue",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          계정 설정 ⚙️
        </button>
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "45px",
              left: "0",
              width: "200px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              zIndex: 10,
              textAlign: "left",
              padding: "10px",
            }}
          >
            <div style={{ padding: "10px", cursor: "pointer" }}>내 프로필</div>
            <div style={{ padding: "10px", cursor: "pointer" }}>결제 수단</div>
            <div style={{ padding: "10px", cursor: "pointer", color: "red" }}>
              로그아웃
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdvancedDropdown;
