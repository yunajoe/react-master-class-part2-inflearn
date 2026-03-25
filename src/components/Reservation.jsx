import { useReducer } from "react";
import "../App.css";

const ACTIONS_TYPES = Object.freeze({
  toggle_seat: "TOGGLE_SEAT",
  toggle_vip: "TOGGLE_VIP",
});

const SEAT_PRICE = 15000;

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS_TYPES["toggle_seat"]: {
      const seat = action.payload;
      const isInclude = state.selectedSeats.some((item) => item === seat);
      if (isInclude) {
        const filteredSeats = state.selectedSeats.filter(
          (item) => item !== seat,
        );
        const totalAmount = state.totalAmount - SEAT_PRICE;
        return {
          ...state,
          selectedSeats: filteredSeats,
          totalAmount,
        };
      }

      const totalAmount = (state.selectedSeats.length + 1) * SEAT_PRICE;
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
        totalAmount,
      };
    }
    case ACTIONS_TYPES["toggle_vip"]: {
      const isVip = action.payload;
      const vipTotalAmount = state.selectedSeats.length * SEAT_PRICE * 0.8;
      const normalTotalAmount = state.selectedSeats.length * SEAT_PRICE;
      return {
        ...state,
        userPosition: isVip ? "VIP" : "일반회원",
        totalAmount: isVip ? vipTotalAmount : normalTotalAmount,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  selectedSeats: [],
  userPosition: "일반회원",
  totalAmount: 0,
};

function Reservation() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectSeat = (e) => {
    const value = e.target.textContent;

    if (!state.selectedSeats.includes(value)) {
      if (state.selectedSeats.length >= 4) {
        alert("최대 4개의 자리만 선택할 수 있습니다.");
        return;
      }
    }
    dispatch({
      type: ACTIONS_TYPES["toggle_seat"],
      payload: e.target.textContent,
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS_TYPES["toggle_vip"],
      payload: e.target.checked,
    });
  };

  return (
    <div>
      <h1>🎬 스마트 티켓 예매 시스템 </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>[ 👤 {state.userPosition} ]</h3>
        <label className="switch">
          VIP로 등급 전환하기
          <input type="checkbox" onChange={handleChange} />
          <span className="slider round"></span>
        </label>
      </div>

      <div style={{ marginTop: "10px" }}>
        <h3>좌석 선택</h3>
        <div className="row" onClick={handleSelectSeat}>
          <div
            className={`${state.selectedSeats.includes("A1") ? "seat seated" : "seat"}`}
          >
            A1
          </div>
          <div
            className={`${state.selectedSeats.includes("A2") ? "seat seated" : "seat"}`}
          >
            A2
          </div>
          <div
            className={`${state.selectedSeats.includes("A3") ? "seat seated" : "seat"}`}
          >
            A3
          </div>
          <div
            className={`${state.selectedSeats.includes("A4") ? "seat seated" : "seat"}`}
          >
            A4
          </div>
          <div
            className={`${state.selectedSeats.includes("A5") ? "seat seated" : "seat"}`}
          >
            A5
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        {state.selectedSeats.length === 0 ? (
          <h3>좌석을 선택해주세요</h3>
        ) : (
          <h3>선택된 좌석: {state.selectedSeats.join(",")}</h3>
        )}
      </div>
      <h3>최종 결제 금액: {state.totalAmount} 원 </h3>
    </div>
  );
}

export default Reservation;
