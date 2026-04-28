import { useId, useState } from "react";

function UserInfoForm({ sectionTitle }) {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const id = useId();
  const lastNameInvalid = lastName.length > 0 && lastName.length < 2;
  const firstNameInvalid = firstName.length > 0 && firstName.length < 2;
  return (
    <fieldset
      style={{ marginBottom: "20px", padding: "20px", borderRadius: "8px" }}
    >
      <legend>{sectionTitle}</legend>
      <div style={{ marginBottom: "10px", flexDirection: "column" }}>
        <div>
          <label htmlFor={id + "-lastName"}>성:</label>
          <input
            id={id + "-lastName"}
            type="text"
            aria-describedby={id + "-lastNameError"}
            aria-invalid={lastNameInvalid}
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        {lastNameInvalid && (
          <span id={id + "-lastNameError"}>
            유효한 lastName을 입력해주세요.
          </span>
        )}
      </div>
      <div style={{ marginBottom: "10px", flexDirection: "column" }}>
        <div>
          <label htmlFor={id + "-firstName"}>이름:</label>
          <input
            id={id + "-firstName"}
            type="text"
            aria-describedby={id + "-firstNameError"}
            aria-colindex={firstNameInvalid}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        {firstNameInvalid && (
          <span id={id + "firstNameError"}>
            유효한 firstName을 입력해주세요.{" "}
          </span>
        )}
      </div>
    </fieldset>
  );
}

export default UserInfoForm;
