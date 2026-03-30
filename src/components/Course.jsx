import { useReducer } from "react";
import {
  courseInitialData,
  courseReducer,
} from "../store/course/courseReducer.js";

function Course() {
  const [state, dispatch] = useReducer(courseReducer, courseInitialData);
  console.log("state", state);

  return (
    <div>
      <h1>GEMINI ACADEMY 수강 바구니</h1>
      <hr />
      {state.items.map((item) => (
        <div>
          <p>React 마스터 클래스 (50,000원)</p>
          <button>[+]</button>
          <button>[-]</button>
        </div>
      ))}
      <hr />
      <div>
        <h3>총 강의 수: {state.totalLectures}개</h3>
        <p>최종 결제 금액: {state.totalPayments}원</p>
      </div>
    </div>
  );
}

export default Course;
