import { useReducer } from "react";

/**
 * 1. 장바구니 리듀서
 * 중앙 통제실에서 모든 상태(목록, 금액, 수량)를 한 번에 관리합니다.
 */
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // 상품 추가 시 모든 수치를 한꺼번에 업데이트하여 동기화 보장
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
        totalQty: state.totalQty + 1,
      };

    case "REMOVE_ITEM":
      // 1. 삭제할 아이템을 찾아 가격 정보를 미리 저장
      const targetItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      // 2. 해당 아이템을 제외한 새로운 목록 생성
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );

      // 3. 존재하지 않는 경우에 대한 방어 로직
      if (!targetItem) return state;

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - targetItem.price,
        totalQty: state.totalQty - 1,
      };

    default:
      return state;
  }
}

const initialState = {
  items: [],
  totalPrice: 0,
  totalQty: 0,
};

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 랜덤 상품 추가 핸들러 (실습용)
  const handleAddProduct = () => {
    const pList = [
      { id: 1, name: "🍎 사과", price: 2000 },
      { id: 2, name: "🍇 포도", price: 5000 },
      { id: 3, name: "🥕 당근", price: 1500 },
    ];
    const pick = pList[Math.floor(Math.random() * pList.length)];

    // 유니크한 ID 생성을 위해 Date.now() 활용
    const newItem = { ...pick, id: Date.now() };

    // [핵심] payload에 상품 객체를 담아 보냄
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  return (
    <div style={containerStyle}>
      <h2>🛒 프로 장바구니</h2>
      <button onClick={handleAddProduct} style={addBtnStyle}>
        랜덤 상품 추가하기
      </button>

      <ul style={listStyle}>
        {state.items.length === 0 && (
          <p style={{ color: "#888" }}>장바구니가 비어 있습니다.</p>
        )}
        {state.items.map((item) => (
          <li key={item.id} style={itemStyle}>
            <span>
              {item.name} ({item.price.toLocaleString()}원)
            </span>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
              }
              style={deleteBtnStyle}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>

      <div style={footerStyle}>
        <p>
          총 수량: <strong>{state.totalQty}</strong> 개
        </p>
        <p>
          총 결제 금액:{" "}
          <strong style={{ color: "#007bff" }}>
            {state.totalPrice.toLocaleString()}원
          </strong>
        </p>
      </div>
    </div>
  );
}

// 인라인 스타일 정의
const containerStyle = {
  width: "400px",
  margin: "40px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

const addBtnStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginBottom: "20px",
  fontWeight: "bold",
};

const listStyle = { padding: 0, margin: 0 };

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid #eee",
  alignItems: "center",
};

const deleteBtnStyle = {
  backgroundColor: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "4px",
  cursor: "pointer",
};

const footerStyle = {
  marginTop: "20px",
  paddingTop: "10px",
  borderTop: "2px solid #444",
  textAlign: "right",
  fontSize: "1.1rem",
};
