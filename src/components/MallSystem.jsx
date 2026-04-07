import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext.jsx";

function ToastContainer() {
  const { toasts, dispatch } = useContext(ToastContext);
  return (
    <div>
      {toasts.map(({ id, message }) => (
        <div>
          <p>{message}</p>
          <button
            key={id}
            onClick={() => {
              dispatch({
                type: "REMOVE_TOAST",
                id,
              });
            }}
          >
            메시지 삭제하기
          </button>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ name }) {
  const { dispatch } = useContext(ToastContext);
  const handleAddCart = () => {
    dispatch({
      type: "ADD_TOAST",
      message: `${name} 상품이 장바구니에 담겼습니다! ${Date.now()}`,
    });
  };
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px" }}>
      <h3>{name}</h3>
      <button onClick={handleAddCart}>장바구니 담기</button>
    </div>
  );
}

function MallSystem() {
  return (
    // <ToastProvider>
    <div>
      <h1>🛒 React Mall</h1>
      <ProductCard name="리액트 숙련자 티셔츠" />
      <ToastContainer />
    </div>
    // </ToastProvider>
  );
}

export default MallSystem;
