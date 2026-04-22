import { memo } from "react";

const UserItem = memo(({ user, onDelete }) => {
  console.log(
    `%c 🛡️ ${user.name} 아이템: 주소가 똑같네요. 베일아웃!`,
    "color: #10b981; font-weight: bold;",
  );

  return (
    <li style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
      <b>{user.name}</b>
      <button onClick={() => onDelete(user.id)} style={{ marginLeft: "10px" }}>
        삭제
      </button>
    </li>
  );
});

export default UserItem;
