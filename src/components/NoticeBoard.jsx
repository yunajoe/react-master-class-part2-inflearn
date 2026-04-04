import { useContext } from "react";
import { NoticeContext } from "../contexts/CenterContext";

function NoticeBoard() {
  const notice = useContext(NoticeContext);
  return (
    <div
      style={{
        padding: "10px",
        background: "#fffbeb",
        border: "1px solid #f59e0b",
        marginBottom: "10px",
      }}
    >
      📢 아파트 공지:{notice}
    </div>
  );
}

export default NoticeBoard;
