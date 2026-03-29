import { useReducer } from "react";
import {
  addRice,
  changeMenu,
  refillSoup,
} from "../store/cafeteria/cafeteriaActions.js";
import {
  cafeteriaInitialState,
  cafeteriaReducer,
} from "../store/cafeteria/cafeteriaReducer.js";

function Restaurant() {
  const [state, dispatch] = useReducer(cafeteriaReducer, cafeteriaInitialState);
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🍱 사내 식당 (리팩토링 전)</h1>
      <p>
        밥: {state.rice} | 국: {state.soup} | 메뉴: {state.mainMenu}
      </p>

      {/* 액션 객체를 매번 직접 타이핑함 (오타 위험 높음) */}
      <button onClick={() => dispatch(addRice(10))}>밥 추가</button>
      <button onClick={() => dispatch(refillSoup(20))}>국 리필</button>
      <button onClick={() => dispatch(changeMenu("돈까수"))}>메뉴 변경</button>
    </div>
  );
}

export default Restaurant;
