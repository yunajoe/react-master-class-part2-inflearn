import { useId } from "react";

function RegistrationForm() {
  const baseId = useId();

  return (
    <form
      style={{
        padding: "30px",
        border: "1px solid #eee",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ marginTop: 0 }}>회원 가입 정보</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* 성(Last Name) 입력 영역 */}
        <section>
          <label htmlFor={baseId + "-lastName"} style={{ display: "block" }}>
            성
          </label>
          <input
            id={baseId + "-lastName"}
            type="text"
            style={{ width: "100%", padding: "8px" }}
          />
        </section>

        {/* 이름(First Name) 입력 영역 */}
        <section>
          <label htmlFor={baseId + "-firstName"} style={{ display: "block" }}>
            이름
          </label>
          <input
            id={baseId + "-firstName"}
            type="text"
            style={{ width: "100%", padding: "8px" }}
          />
        </section>
      </div>
    </form>
  );
}

export default RegistrationForm;
