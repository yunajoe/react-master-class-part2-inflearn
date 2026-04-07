import { createContext, useReducer } from "react";

export const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: action.payload,
        isLoading: true,
      };
    }

    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isLoading: false,
      };
    }

    case "LOGIN_FAIL": {
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    }

    case "LOGOUT": {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
