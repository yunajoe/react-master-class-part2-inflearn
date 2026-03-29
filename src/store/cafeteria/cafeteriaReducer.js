import { CAFETERIA_ACTION_TYPES } from "./cafeteriaTypes.js";

export const cafeteriaInitialState = {
  rice: 20,
  soup: 30,
  mainMenu: "김치찌개",
};

export function cafeteriaReducer(state, action) {
  switch (action.type) {
    case CAFETERIA_ACTION_TYPES.ADD_RICE: {
      return {
        ...state,
        rice: state.rice + action.payload.amount,
      };
    }

    case CAFETERIA_ACTION_TYPES.REFILL_SOUP: {
      return {
        ...state,
        soup: state.soup + action.payload.amount,
      };
    }

    case CAFETERIA_ACTION_TYPES.CHANGE_MENU: {
      return {
        ...state,
        mainMenu: action.payload.newMenu,
      };
    }

    default:
      return state;
  }
}
