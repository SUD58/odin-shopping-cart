import Cart from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { CartProvider } from "./contexts/CartContext";
import { CartVisibilityProvider } from "./contexts/CartVisibilityContext";
import { HomePage } from "./components/HomePage";
import { CategoriesProvider } from "./contexts/CategoriesContext";
function App() {
  return (
    <CategoriesProvider>
      <CartVisibilityProvider>
        <CartProvider>
          <div className="grid h-screen auto-rows-max">
            <Navbar />
            <HomePage />
          </div>
          <div className="relative">
            <Cart />
          </div>
        </CartProvider>
      </CartVisibilityProvider>
    </CategoriesProvider>
  );
}

export default App;
