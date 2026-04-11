import { useAuthDispatch, useAuthState } from "../contexts/AuthContext";

function UserProfile() {
  const { user, isLoading } = useAuthState();
  const dispatch = useAuthDispatch();

  if (isLoading) return <p>로딩 중...</p>;
  if (!user) return <p>로그인이 필요합니다.</p>;
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h2>👤 {user.name}님의 프로필</h2>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>
    </div>
  );
}

export default UserProfile;
