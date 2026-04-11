import { useMemo, useReducer } from "react";
import { AuthDispatchContext, AuthStateContext } from "../contexts/AuthContext";

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, isLoading: true, error: null };
    case "LOGIN_SUCCESS":
      return { user: action.payload, isLoading: false, error: null };
    case "LOGIN_FAILURE":
      return { user: null, isLoading: false, error: action.payload };
    case "LOGOUT":
      return { user: null, isLoading: false, error: null };
    default:
      return state;
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoading: false,
    error: null,
  });
  const memoizedState = useMemo(() => state, [state]);
  return (
    <AuthStateContext.Provider value={memoizedState}>
      <AuthDispatchContext value={dispatch}>{children}</AuthDispatchContext>
    </AuthStateContext.Provider>
  );
}

export default AuthProvider;
