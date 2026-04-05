import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import AuthHeader from "./AuthHeader";
import AuthPanel from "./AuthPanel";

function AuthSystem() {
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <AuthHeader />

      {/* 메인 */}
      <div>
        <h1>[ 오늘의 뉴스 ]</h1>
        <p>Context API 고급 미션을 완수하고 계십니다!</p>
      </div>

      {/* 관리자 */}
      {user?.isAdmin && <AuthPanel />}
    </div>
  );
}

export default AuthSystem;
