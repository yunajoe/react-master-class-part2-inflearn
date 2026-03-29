import { CAFETERIA_ACTION_TYPES } from "./cafeteriaTypes.js";

export function addRice(amount) {
  return {
    type: CAFETERIA_ACTION_TYPES.ADD_RICE,
    payload: { amount },
  };
}

export function refillSoup(amount) {
  return {
    type: CAFETERIA_ACTION_TYPES.REFILL_SOUP,
    payload: { amount },
  };
}

export function changeMenu(newMenu) {
  return {
    type: CAFETERIA_ACTION_TYPES.CHANGE_MENU,
    payload: { newMenu },
  };
}
