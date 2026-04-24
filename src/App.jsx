import "./App.css";
import ColorPicker from "./components/ColorPicker.jsx";
import ColorPickerWrapper from "./components/ColorPickerWrapper.jsx";
import HeavyComponent from "./components/HeavyComponent.jsx";
import InputBox from "./components/InputBox.jsx";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>구조적 최적화 실습</h1>
      <InputBox />
      <hr />
      <ColorPicker />
      <ColorPickerWrapper>
        <HeavyComponent />
      </ColorPickerWrapper>
    </div>
  );
}

export default App;
