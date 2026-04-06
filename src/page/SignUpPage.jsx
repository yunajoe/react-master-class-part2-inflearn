import StepLayout from "../components/StepLayout.jsx";

function SignUpPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🏦 React Bank 회원가입</h1>
      <StepLayout />
      <button style={{ marginTop: "20px" }}>다음단계로</button>
    </div>
  );
}

export default SignUpPage;
