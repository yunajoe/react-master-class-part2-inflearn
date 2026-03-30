import { courseTypes } from "./courseTypes";

export const courseInitialData = {
  items: [
    { id: 1, name: "React 마스터 클래스", price: 50000, quantity: 0 },
    { id: 2, name: "Next.js 실무 가이드", price: 45000, quantity: 0 },
  ],
  totalLectures: 0,
  totalPayments: 0,
};

export function courseReducer(state, action) {
  switch (action.type) {
    case courseTypes.INCREMENT: {
      const newItems = state.items.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );

      return {
        ...state,
        items: newItems,
        totalLectures: state.totalLectures + 1,
        totalPayments: state.totalPayments + action.payload.price,
      };
    }
    case courseTypes.DECREMENT: {
      if (action.payload.quantity === 0) return state;
      console.log("dndndn!!");
      const filteredItems = state.items.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity - 1),
            }
          : item,
      );

      return {
        ...state,
        items: filteredItems,
        totalLectures: Math.max(0, state.totalLectures - 1),
        totalPayments: Math.max(0, state.totalPayments - action.payload.price),
      };
    }
    default:
      return state;
  }
}
