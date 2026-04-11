import "./App.css";
import CartSystem from "./components/CartSystem";
import AuthProvider from "./provider/AuthProvider";
import CartProvider from "./provider/CartProvider";

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
      <AuthProvider>
        <CartProvider>
          <CartSystem />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
