import { createContext, useContext } from "react";

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

// 1. 복잡성: 컴포넌트에서 매번 useContext(AuthContext), useContext(CartContext)를 직접 부르는 것은 번거롭고 실수하기 쉽습니다.
// 2. 안전성: 만약 실수로 Provider가 없는 곳에서 장바구니 기능을 사용하면 앱이 소리 없이 망가질 수 있습니다.
// 따라서 useAuthState 와 useAuthDispatch 로 해결.
export function useAuthState() {
  const context = useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error(
      "useAuthState는 반드시 AuthProvider 안에서 사용해야 합니다!",
    );
  }
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useAuthDispatch는 반드시 AuthProvider 안에서 사용해야 합니다!",
    );
  }
  return context;
}
