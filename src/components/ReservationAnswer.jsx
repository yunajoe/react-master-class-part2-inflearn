import { useReducer } from "react";

const ACTION_TYPES = Object.freeze({
  TOGGLE_SEAT: "TOGGLE_SEAT",
  TOGGLE_VIP: "TOGGLE_VIP",
});

const SEAT_PRICE = 15000;
function bookingReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_VIP: {
      return {
        ...state,
        isVip: !state.isVip,
        totalAmount:
          state.selectedSeats.length * SEAT_PRICE * (!state.isVip ? 0.8 : 1),
      };
    }
    case ACTION_TYPES.TOGGLE_SEAT: {
      const selectedSeat = action.payload;
      // 현재 선택된 자석에 있는지 확인
      if (state.selectedSeats.includes(selectedSeat)) {
        const filteredSeats = state.selectedSeats.filter(
          (item) => item !== selectedSeat,
        );
        return {
          ...state,
          selectedSeats: filteredSeats,
          totalAmount:
            filteredSeats.length * SEAT_PRICE * (state.isVip ? 0.8 : 1),
        };
      }

      if (state.selectedSeats.length >= 4) {
        alert("최대 4개의 좌석만 선택해주세요.");
        return state;
      }

      const updatedSeats = [...state.selectedSeats, selectedSeat];

      return {
        ...state,
        selectedSeats: updatedSeats,
        totalAmount: updatedSeats.length * SEAT_PRICE * (state.isVip ? 0.8 : 1),
      };
    }
    default:
      return state;
  }
}

const initialState = {
  selectedSeats: [],
  isVip: false,
  totalAmount: 0,
};

export default function ReservationAnswer() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  const seatList = ["A1", "A2", "A3", "A4", "A5"];

  return (
    <div style={containerStyle}>
      <h2>🎬 스마트 예매 시스템</h2>
      {/* 등급 전환 버튼 */}
      <button
        style={vipBtnStyle(state.isVip)}
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.TOGGLE_VIP,
          })
        }
      >
        {state.isVip ? "💎 VIP 회원 (20% 할인)" : "👤 일반 회원 (등급 전환)"}
      </button>
      {/* 좌석 선택 영역 */}
      <div style={seatGridStyle}>
        {seatList.map((seat) => {
          const isSelected = state.selectedSeats.includes(seat);
          return (
            <button
              key={seat}
              style={seatBtnStyle(isSelected)}
              onClick={() =>
                dispatch({
                  type: ACTION_TYPES.TOGGLE_SEAT,
                  payload: seat,
                })
              }
            >
              {seat}
            </button>
          );
        })}
      </div>

      {/* 요약 정보 영역 */}
      <div style={infoBoxStyle}>
        <p>
          선택된 좌석
          <strong>{state.selectedSeats.join(", ") || "없음"}</strong>
        </p>
        <p>
          등급 혜택:{" "}
          <strong>{state.isVip ? "VIP 20% 할인 적용" : "할인 없음"}</strong>
        </p>
        <hr />
        <h3>최종 결제 금액: {state.totalAmount.toLocaleString()}원</h3>
      </div>
    </div>
  );
}

const containerStyle = {
  width: "400px",
  margin: "50px auto",
  padding: "30px",
  border: "1px solid #ddd",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
};

const vipBtnStyle = (isVip) => ({
  padding: "10px 20px",
  marginBottom: "25px",
  cursor: "pointer",
  borderRadius: "25px",
  border: "1px solid #ddd",
  backgroundColor: isVip ? "#fff3e0" : "#fff",
  fontWeight: "bold",
  color: isVip ? "#ff9800" : "#666",
});

const seatGridStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  marginBottom: "30px",
};

const seatBtnStyle = (isSelected) => ({
  width: "55px",
  height: "55px",
  cursor: "pointer",
  borderRadius: "10px",
  border: "none",
  backgroundColor: isSelected ? "#3f51b5" : "#eee",
  color: isSelected ? "#fff" : "#333",
  fontWeight: "bold",
});

const infoBoxStyle = {
  textAlign: "left",
  backgroundColor: "#f5f5f5",
  padding: "20px",
  borderRadius: "12px",
};
