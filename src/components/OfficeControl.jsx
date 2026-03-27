// 사용자가 입력한 값을 리듀서로 전달하기 위해 payload라는 이름을 사용합니다.

import { useReducer, useState } from "react";

const ACTION_TYPES = Object.freeze({
  CHANGE_TEMP: "CHANGE_TEMP",
  CHANGE_HUMIDITY: "CHANGE_HUMIDITY",
});

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_TEMP: {
      const temp = action.payload;
      if (Number.isNaN(temp)) {
        alert("숫자로만 입력가능합니다.");
        return state;
      }
      return {
        ...state,
        temperature: temp,
      };
    }
    case ACTION_TYPES.CHANGE_HUMIDITY: {
      const temp = action.payload;
      if (Number.isNaN(temp)) {
        alert("숫자로만 입력가능합니다.");
        return state;
      }
      return {
        ...state,
        humidity: temp,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  temperature: 22,
  humidity: 45,
};
function OfficeControl() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tempInput, setTempInput] = useState("");
  const [humidityInput, setHumidityInput] = useState("");
  return (
    <div>
      <h1> 🏢 SMART OFFICE 제어 시스템 </h1>
      <div>
        <p>현재 온도 : {state.temperature}</p>
        <p>현재 습도 : {state.humidity}</p>
      </div>
      <div>
        <div>
          <label>온도 입력</label>
          <input
            value={tempInput}
            onChange={(e) => {
              setTempInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch({
                type: ACTION_TYPES.CHANGE_TEMP,
                payload: Number(tempInput),
              });
              setTempInput("");
            }}
          >
            온도 설정 버튼
          </button>
        </div>
        <div>
          <label>습도 입력</label>
          <input
            value={humidityInput}
            onChange={(e) => {
              setHumidityInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch({
                type: ACTION_TYPES.CHANGE_HUMIDITY,
                payload: Number(humidityInput),
              });
              setHumidityInput("");
            }}
          >
            습도 설정 버튼
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfficeControl;
