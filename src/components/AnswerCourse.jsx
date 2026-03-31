import { useReducer } from "react";
import {
  decrement,
  increment,
  remove,
} from "../store/answerCourse/courseActions.js";
import {
  cartReducer,
  initialCart,
} from "../store/answerCourse/courseReducer.js";

function AnswerCourse() {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  const totalQuantity = state.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = state.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  return (
    <div style={containerStyle}>
      <h2>🎓 GEMINI ACADEMY 수강 바구니</h2>
      {state.length === 0 ? (
        <p>바구니가 비어 있습니다.</p>
      ) : (
        <>
          {state.map((item) => (
            <div key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>{item.price.toLocaleString()}원</p>
              </div>
              <div>
                <button onClick={() => dispatch(increment(item.id))}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(decrement(item.id))}>-</button>
                <button
                  onClick={() => dispatch(remove(item.id))}
                  style={{ color: "red", marginLeft: "10px" }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      <div style={footerStyle}>
        <p>총 강의 수: {totalQuantity}개</p>
        <h3>최종 결제 금액: {totalAmount.toLocaleString()}원</h3>
      </div>
    </div>
  );
}

export default AnswerCourse;

const containerStyle = {
  width: "450px",
  margin: "50px auto",
  padding: "25px",
  border: "1px solid #333",
  borderRadius: "15px",
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
};

const footerStyle = {
  marginTop: "20px",
  textAlign: "right",
  borderTop: "2px solid #333",
  paddingTop: "15px",
};
