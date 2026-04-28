import "./App.css";
import UserInfoForm from "./components/UserInfoForm.jsx";

function App() {
  return (
    <div>
      <UserInfoForm sectionTitle="신청인 정보" />
      <UserInfoForm sectionTitle="보호자 정보" />
    </div>
  );
}

export default App;
