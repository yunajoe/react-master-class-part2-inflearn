import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // 날짜
import { useEffect, useImperativeHandle, useRef } from "react";

function MyDatePicker({ ref, onChange }) {
  const inputRef = useRef();
  const libraryRef = useRef();

  // ref 를 라이브러리와 연결 시킨다.
  useEffect(() => {
    libraryRef.current = flatpickr(inputRef.current, {
      onChange: (dates, currentDateString, self, data) => {
        onChange(currentDateString);
      },
    });

    return () => {
      if (libraryRef.current) {
        libraryRef.current.destroy();
      }
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      // 부모가 조종할 handler
      open: () => {
        if (libraryRef.current) {
          libraryRef.current.open();
        }
      },
      close: () => {
        if (libraryRef.current) {
          libraryRef.current.close();
        }
      },
      init: () => {
        if (libraryRef.current) {
          libraryRef.current.clear();
        }
      },
    }),
    [],
  );
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="날짜를 선택하세요"
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "2px solid #ddd",
          width: "250px",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default MyDatePicker;
