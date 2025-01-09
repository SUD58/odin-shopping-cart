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
        <h2>You&apos;re on the home page!</h2>
      </CartProvider>
    </CartVisibilityProvider>
  );
}

export default App;
