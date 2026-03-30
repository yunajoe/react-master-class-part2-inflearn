import { useReducer } from "react";
import {
  decreaseCourse,
  increaseCourse,
} from "../store/course/courseActions.js";
import {
  courseInitialData,
  courseReducer,
} from "../store/course/courseReducer.js";

function Course() {
  const [state, dispatch] = useReducer(courseReducer, courseInitialData);

  return (
    <div>
      <h1>GEMINI ACADEMY 수강 바구니</h1>
      <hr />
      {state.items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} ({item.price}원)
          </p>
          <button onClick={() => dispatch(increaseCourse(item))}>[+]</button>
          <button onClick={() => dispatch(decreaseCourse(item))}>[-]</button>
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
