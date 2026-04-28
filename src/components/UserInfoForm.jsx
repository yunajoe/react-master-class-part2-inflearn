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
            //  aria-describedby  &&  aria-invalid => 스크린 리더(음성 읽어주기 도구)를 사용하는 사용자가 입력 폼의 상태를 정확히 파악할 수 있도록 돕는 역할
            // 해당 요소에 대한 추가 설명이 어디에 있는지
            aria-describedby={id + "-lastNameError"}
            // "현재 입력된 값이 유효한지(맞는지)"
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
            aria-invalid={firstNameInvalid}
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
