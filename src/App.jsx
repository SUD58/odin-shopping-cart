import Cart from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { CartProvider } from "./contexts/CartContext";
import { CartVisibilityProvider } from "./contexts/CartVisibilityContext";

function App() {
  return (
    <CartVisibilityProvider>
      <CartProvider>
        <Navbar />
        <div className="relative">
          <Cart />
        </div>
      </CartProvider>
    </CartVisibilityProvider>
  );
}

export default App;
