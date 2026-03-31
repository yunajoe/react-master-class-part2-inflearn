import * as CourseType from "./courseTypes.js";

export const initialCart = [
  { id: 1, name: "React 마스터 클래스", price: 50000, quantity: 1 },
  { id: 2, name: "Next.js 실무 가이드", price: 45000, quantity: 2 },
];

export function cartReducer(state, action) {
  switch (action.type) {
    case CourseType.INCREMENT: {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    }
    case CourseType.DECREMENT: {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      );
    }
    case CourseType.REMOVE: {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
}
