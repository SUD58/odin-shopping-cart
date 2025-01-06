import { CartProvider } from "../contexts/CartContext";
import { Navbar } from "./Navbar";
import ProductsList from "./ProductsList";
import Sidebar from "./Sidebar";
import { CartVisibilityProvider } from "../contexts/CartVisibilityContext";
import Cart from "./Cart";

export default function ProductsListPage() {
  return (
    <CartVisibilityProvider>
      <CartProvider>
        <Navbar />
        <div className="relative">
          <div className="flex flex-col gap-2 lg:flex-row">
            <Sidebar />
            <ProductsList />
          </div>
          <Cart />
        </div>
      </CartProvider>
    </CartVisibilityProvider>
  );
}
