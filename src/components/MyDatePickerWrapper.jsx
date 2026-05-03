import { useRef, useState } from "react";
import MyDatePicker from "./MyDatePicker";

function MyDatePickerWrapper() {
  const controlRef = useRef();
  const [selectedDate, setSelectedDate] = useState("");

  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>데이트 피커 원격 제어</h1>
      <h3>선택된 날짜 {selectedDate || "없음"}</h3>
      <button onClick={() => controlRef.current.open()}>창 열기</button>
      <button onClick={() => controlRef.current.close()}>창 닫기</button>
      <button onClick={() => controlRef.current.init()}>날짜 초기화</button>
      <MyDatePicker ref={controlRef} onChange={handleChangeDate} />
    </div>
  );
}

export default MyDatePickerWrapper;
