import "./App.css";
import LoginButton from "./components/LoginButton.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

/**
 *
 * 간련 로그인 하기 버튼 클릭 => 인증 확인 중... => 로그아웃
 *
 *
 */
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthProvider>
        <LoginButton />
      </AuthProvider>
    </div>
  );
}

export default App;
