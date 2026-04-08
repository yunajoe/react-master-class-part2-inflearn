import { useReducer } from "react";
import { DashBoardContext } from "../contexts/DashBoardContext.jsx";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case "FETCH_FAIL": {
      return {
        ...state,
        isLoading: false,
        error: true,
        data: null,
      };
    }

    default:
      return state;
  }
}

function DashBoardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    isLoading: false,
    error: null,
  });

  return (
    <DashBoardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashBoardContext.Provider>
  );
}

export default DashBoardProvider;
