import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...state, { id: state.length + 1, ...action.newItem }];
    }
    case "DELETE_FRUIT": {
      return state.filter((item) => item.id !== action.deleteFruitId);
    }
    default:
      return state;
  }
}
const initialState = [
  {
    id: 1,
    name: "사과",
    price: 2000,
  },
  {
    id: 2,
    name: "포도",
    price: 5000,
  },
];

function inputReducer(state, action) {
  switch (action.type) {
    case "Change_Fruit_Name": {
      return {
        ...state,
        name: action.newFruitName,
      };
    }
    case "Change_Fruit_Price": {
      return {
        ...state,
        price: action.newFruitPrice,
      };
    }
    default:
      return state;
  }
}
const inputInitialState = {
  name: "",
  price: 0,
};
export default function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    inputInitialState,
  );

  const calculateTotalPrice = (state) => {
    return state.reduce((acc, item) => {
      console.log("item", item);
      acc += item.price;
      return acc;
    }, 0);
  };
  const handleClick = () => {
    if (!inputState.name) {
      alert("과일 이름을 적어주세요");
      return;
    }
    if (inputState.price <= 0) {
      alert("과일 가격은 0원 보다 높아야 합니다.");
      return;
    }
    dispatch({
      type: "ADD_ITEM",
      newItem: inputState,
    });

    handleResetFruit();
  };

  // input handler reset 하는 버튼
  const handleResetFruit = () => {
    inputDispatch({
      type: "Change_Fruit_Name",
      newFruitName: "",
    });
    inputDispatch({
      type: "Change_Fruit_Price",
      newFruitPrice: "",
    });
  };

  const handleChangeFruitName = (e) => {
    inputDispatch({
      type: "Change_Fruit_Name",
      newFruitName: e.target.value,
    });
  };

  const handleChangeFruitPrice = (e) => {
    inputDispatch({
      type: "Change_Fruit_Price",
      newFruitPrice: Number(e.target.value),
    });
  };

  const handleDeleteFruit = (itemId) => {
    dispatch({
      type: "DELETE_FRUIT",
      deleteFruitId: itemId,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <h2>🛒 프로 장바구니 (Action & Payload) </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 20,
        }}
      >
        <div>
          <div>
            <label>과일 이름</label>
            <input value={inputState.name} onChange={handleChangeFruitName} />
          </div>
          <div>
            <label>과일 가격</label>
            <input value={inputState.price} onChange={handleChangeFruitPrice} />
          </div>
        </div>
        <button onClick={handleClick}>과일 추가하기</button>
      </div>
      <h3>아이템들</h3>
      {state.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "10px",
          }}
        >
          <p>
            {item.name} ({item.price})원
          </p>
          <button onClick={() => handleDeleteFruit(item.id)}>삭제버튼</button>
        </div>
      ))}
      <div>
        <span>총 수량: {state.length}개</span>
        <br />
        <span>총 가격: {calculateTotalPrice(state)}원</span>
      </div>
    </div>
  );
}
