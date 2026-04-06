import "./App.css";
import SignUpPage from "./page/SignUpPage.jsx";
import FormProvider from "./provider/FormProvider.jsx";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormProvider>
        <SignUpPage />
      </FormProvider>
    </div>
  );
}

export default App;
