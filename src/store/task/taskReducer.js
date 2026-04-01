import * as TaskType from "./taskTypes.js";

export const initialState = [
  { id: 1, title: "강의 대본 검토하기", completed: false, priority: "High" },
  {
    id: 2,
    title: "리듀서 최종 미션 설계",
    completed: true,
    priority: "Medium",
  },
];

export function taskReducer(state, action) {
  switch (action.type) {
    case TaskType.ADD_TODO: {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
          priority: "Low",
        },
      ];
    }
    case TaskType.CHECK_TODO: {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      );
    }
    case TaskType.SELECT_DIFFICULTY: {
      const { id, difficulty } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, priority: difficulty } : item,
      );
    }
    case TaskType.DELETE_TODO: {
      return state.filter((item) => item.id !== action.payload);
    }

    default:
      return state;
  }
}
