import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // 날짜
import { useEffect, useImperativeHandle, useRef } from "react";

function MyDatePicker({ ref }) {
  const inputRef = useRef();
  const libraryRef = useRef();

  // ref 를 라이브러리와 연결 시킨다.
  useEffect(() => {
    libraryRef.current = flatpickr(inputRef.current, { onChange: () => {} });

    return () => {};
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      // 부모가 조종할 handler
      open: () => {
        if (libraryRef.current) {
          console.log("TEST");
        }
      },
      close: () => {
        if (libraryRef.current) {
        }
      },
      init: () => {
        if (libraryRef.current) {
        }
      },
    }),
    [],
  );
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}

export default MyDatePicker;
