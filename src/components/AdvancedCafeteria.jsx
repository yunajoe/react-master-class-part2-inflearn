import { useReducer } from "react";

function cafeteriaReducer(state, action) {
  switch (action.type) {
    case "ADD_RICE": {
      return {
        ...state,
        rice: state.rice + action.payload.amount,
      };
    }
    case "REFILL_SOUP": {
      return {
        ...state,
        soup: state.soup + action.payload.amount,
      };
    }
    case "CHANGE_SIDE": {
      return {
        ...state,
        side: action.payload.newSide,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  rice: 20,
  soup: 30,
  side: "김치",
};
function AdvancedCafeteria() {
  const [state, dispatch] = useReducer(cafeteriaReducer, initialState);
  return (
    <div>
      <h1 style={{ color: "#1e293b" }}>🏛️ 중앙 관리 급식실 (Advanced)</h1>
      <hr />
      <section>
        <p>
          🍚 밥 재고: <strong>{state.rice}</strong>인분
        </p>
        <button
          onClick={() =>
            dispatch({ type: "ADD_RICE", payload: { amount: 10 } })
          }
        >
          밥 10인분 추가 조리
        </button>
      </section>
      <section style={{ marginBottom: "20px" }}>
        <p>
          🍲 국 재고: <strong>{state.soup}</strong>인분
        </p>
        <button
          onClick={() =>
            dispatch({ type: "REFILL_SOUP", payload: { amount: 5 } })
          }
        >
          국 5인분 추가
        </button>
      </section>
      <section>
        <p>
          🍱 오늘의 반찬:
          <span style={{ color: "#4f46e5", fontWeight: "bold" }}>
            {state.side}
          </span>
        </p>
        <button
          onClick={() =>
            dispatch({
              type: "CHANGE_SIDE",
              payload: { newSide: "메추리알장조림" },
            })
          }
        >
          반찬 교체 (장조림)
        </button>
      </section>
    </div>
  );
}

export default AdvancedCafeteria;
