import { useReducer } from "react";
import { ToastContext } from "../contexts/ToastContext.jsx";

function toastReducer(state, action) {
  switch (action.type) {
    case "ADD_TOAST": {
      return [...state, { id: Date.now(), message: action.message }];
    }
    case "REMOVE_TOAST": {
      return state.filter((item) => item.id !== action.id);
    }
    default:
      return state;
  }
}

function ToastProvider({ children }) {
  const [toasts, dispatch] = useReducer(toastReducer, []);
  return (
    <ToastContext.Provider value={{ toasts, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
