import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const items = [...state.items, action.payload];
      const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
      const totalQuantity = items.length;
      return {
        items,
        totalPrice,
        totalQuantity,
      };
    }
    case "DELETE_ITEM": {
      const id = action.payload;
      const targetItem = state.items.find((item) => item.id === id);
      const filteredItems = state.items.filter((item) => item.id !== id);
      const filteredPrice = state.totalPrice - targetItem.price;
      const filteredQuantity = state.totalQuantity - 1;
      return {
        items: filteredItems,
        totalPrice: filteredPrice,
        totalQuantity: filteredQuantity,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};
function ShoppingCartAnswer() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const handleAddItem = () => {
    const itemArray = [
      { id: 1, name: "🍎 사과", price: 2000 },
      { id: 2, name: "🍇 포도", price: 5000 },
      { id: 3, name: "🥕 당근", price: 1500 },
    ];
    const randomNum = Math.floor(Math.random() * itemArray.length);
    const newItem = { ...itemArray[randomNum], id: Date.now() };

    dispatch({
      type: "ADD_ITEM",
      payload: newItem,
    });
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  };

  return (
    <div>
      <h2>🛒 프로 장바구니 (Action & Payload)</h2>
      <button style={{ cursor: "pointer" }} onClick={handleAddItem}>
        [ 랜덤 상품 추가하기 ] (클릭 시 하단 목록 추가)
      </button>
      {state.items.length === 0 ? (
        <h3>아이템이 비웠습니다.</h3>
      ) : (
        <div>
          {state.items.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  columnGap: "10px",
                }}
              >
                <p>
                  {item.name} {item.price}원
                </p>
                <button onClick={() => handleDeleteItem(item.id)}>
                  삭제하기
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div>
        <p>총 갯수: {state.totalQuantity}개</p>
        <p>총 가격: {state.totalPrice}원</p>
      </div>
    </div>
  );
}

export default ShoppingCartAnswer;
