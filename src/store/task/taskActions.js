import * as TaskType from "./taskTypes.js";

export const addTodo = (todo) => {
  return {
    type: TaskType.ADD_TODO,
    payload: todo,
  };
};

export const checkCompletedTodo = (id) => {
  return {
    type: TaskType.CHECK_TODO,
    payload: id,
  };
};

export const selectDifficulty = (id, difficulty) => {
  return {
    type: TaskType.SELECT_DIFFICULTY,
    payload: { id, difficulty },
  };
};

export const deleteTodo = (id) => {
  return {
    type: TaskType.DELETE_TODO,
    payload: id,
  };
};
