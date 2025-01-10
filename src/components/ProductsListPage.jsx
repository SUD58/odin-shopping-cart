import { CartProvider } from "../contexts/CartContext";
import { Navbar } from "./Navbar";
import ProductsList from "./ProductsList";
import Sidebar from "./Sidebar";
import { CartVisibilityProvider } from "../contexts/CartVisibilityContext";
import Cart from "./Cart";
import { CategoriesProvider } from "../contexts/CategoriesContext";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function ProductsListPage() {
  return (
    <CartVisibilityProvider>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <div className="relative">
          <Cart />
          <CategoriesProvider>
            <div className="grid h-full gap-2 bg-white lg:grid-cols-[auto_1fr]">
              <Sidebar />
              <ProductsList />
            </div>
            <Footer />
          </CategoriesProvider>
        </div>
      </CartProvider>
    </CartVisibilityProvider>
  );
}
