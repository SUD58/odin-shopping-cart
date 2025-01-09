import { CartProvider } from "../contexts/CartContext";
import { Navbar } from "./Navbar";
import ProductsList from "./ProductsList";
import Sidebar from "./Sidebar";
import { CartVisibilityProvider } from "../contexts/CartVisibilityContext";
import Cart from "./Cart";
import { CategoryProvider } from "../contexts/CategoryContext";

export default function ProductsListPage() {
  return (
    <CartVisibilityProvider>
      <CartProvider>
        <Navbar />
        <div className="relative">
          <Cart />
          <CategoryProvider>
            <div className="grid h-full gap-2 lg:grid-cols-[auto_1fr]">
              <Sidebar />
              <ProductsList />
            </div>
          </CategoryProvider>
        </div>
      </CartProvider>
    </CartVisibilityProvider>
  );
}
