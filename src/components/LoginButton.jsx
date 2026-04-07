import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider.jsx";

function LoginButton() {
  const { state, dispatch } = useContext(AuthContext);

  const handleLogin = async () => {
    dispatch({
      type: "LOGIN",
      payload: { id: 1, name: "yuna" },
    });
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch({ type: "LOGIN_SUCCESS" });
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL" });
    }
  };

  if (state.user && !state.isLoading)
    return (
      <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>
    );
  return (
    <div>
      <button onClick={handleLogin}>
        {state.user && state.isLoading ? "인증 확인 중" : "로그인"}
      </button>
    </div>
  );
}

export default LoginButton;
