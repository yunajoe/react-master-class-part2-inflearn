import { useCallback, useState } from "react";
import UserItem from "./UserItem.jsx";

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "홍길동" },
    { id: 2, name: "김철수" },
    { id: 3, name: "이영희" },
  ]);
  const [count, setCount] = useState(0);

  const handleDelete = useCallback((id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        border: "2px solid #3b82f6",
        borderRadius: "15px",
      }}
    >
      <h1>👥 유저 대시보드</h1>
      <p>
        단순 클릭 횟수: <b>{count}</b>
      </p>

      {/* 2. 이 버튼을 눌러 부모가 리렌더링되어도, 자식들은 평화로워야 합니다. */}
      <button onClick={() => setCount((prev) => prev + 1)}>
        성능 테스트 버튼
      </button>

      <ul style={{ marginTop: "20px", padding: 0 }}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
