import { useContext } from "react";
import { FormContext } from "../contexts/FormContext.jsx";

function UserInfoStep() {
  const { formData, handleUserId, handleUserEmail } = useContext(FormContext);
  return (
    <div>
      <div>
        <label>아이디</label>
        <input
          value={formData.id}
          onChange={(e) => {
            handleUserId(e.target.value);
          }}
        />
      </div>
      <div>
        <label>이메일</label>
        <input
          value={formData.email}
          onChange={(e) => {
            handleUserEmail(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default UserInfoStep;
