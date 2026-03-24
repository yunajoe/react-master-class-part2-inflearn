import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "cooking": {
      return {
        ...state,
        rice: state.rice + 10,
      };
    }

    case "give": {
      if (state.rice <= 0) return state;
      return {
        ...state,
        rice: state.rice - 1,
      };
    }
    default:
      return state;
  }
}

const initialState = { rice: 10 };

function Cafeteria() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>🏫 학교 급식실 재고 관리</h1>
      <p>현재 밥 재고: {state.rice}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 10,
        }}
      >
        <button
          onClick={() => {
            dispatch({ type: "cooking" });
          }}
        >
          밥 하기 (+10)
        </button>
        <button
          onClick={() => {
            dispatch({ type: "give" });
          }}
        >
          배식 하기 (-1)
        </button>
      </div>
    </div>
  );
}

export default Cafeteria;
