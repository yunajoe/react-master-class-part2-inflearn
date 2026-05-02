import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // 날짜창 스타일 시트 필수

import { useEffect, useImperativeHandle, useRef } from "react";
function FlatPicker({ ref, onChange, ...rest }) {
  // 1. 실제 DOM 인풋을 가리킬 참조 (라이브러리가 달라붙을 지점)
  const inputRef = useRef();

  // 2. 라이브러리 인스턴스를 보관할 참조 (명령을 내릴 실체)
  const fp = useRef();

  useEffect(() => {
    fp.current = flatpickr(inputRef.current, {
      onChange: (selectedDates, dateStr) => {
        if (onChange) {
          onChange(dateStr);
        }
      },
    });

    return () => {
      if (fp.current) {
        fp.current.destroy();
      }
    };
  }, [onChange]);

  useImperativeHandle(
    ref,
    () => ({
      openPicker: () => {
        if (fp.current) {
          fp.current.open();
        }
      },
      closePicker: () => {
        if (fp.current) {
          fp.current.close();
        }
      },
      clearDate: () => {
        if (fp.current) {
          fp.current.clear();
        }
      },
    }),
    [],
  );
  return (
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
  );
}

export default FlatPicker;
