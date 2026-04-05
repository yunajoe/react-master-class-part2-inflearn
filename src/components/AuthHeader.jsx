import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function AuthHeader() {
  const contextValue = useContext(AuthContext);
  const { user, login, logout } = contextValue;

  return (
    <header>
      <span>[ 🌐 React Times ]</span>
      <div>
        {user ? (
          <button>
            <span>
              <strong>{user.name}</strong>님 ({user.isAdmin ? "관리자" : "독자"}
              )
            </span>
            <button onClick={logout}>로그아웃</button>
          </button>
        ) : (
          <button
            onClick={() =>
              login({
                id: 1,
                name: "yuna",
                isAdmin: true,
              })
            }
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
}

export default AuthHeader;
