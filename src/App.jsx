import "./App.css";
import ProductSystem from "./components/ProductSystem";
import ProductProvider from "./provider/ProductProvider";

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
      <ProductProvider>
        <ProductSystem />
      </ProductProvider>
    </div>
  );
}

export default App;
