import * as types from "./riceTypes";

export const addRice = () => ({ type: types.ADD_RICE });
export const removeRice = () => ({ type: types.REMOVE_RICE });

export const setRiceWarning = (message) => ({
  type: types.SET_RICE_WARNING,
  payload: message,
});
