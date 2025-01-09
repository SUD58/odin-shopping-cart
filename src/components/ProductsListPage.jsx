import { CartProvider } from "../contexts/CartContext";
import { Navbar } from "./Navbar";
import ProductsList from "./ProductsList";
import Sidebar from "./Sidebar";
import { CartVisibilityProvider } from "../contexts/CartVisibilityContext";
import Cart from "./Cart";
import { SelectedCategoryProvider } from "../contexts/SelectedCategoryContext";
import { CategoriesProvider } from "../contexts/CategoriesContext";

export default function ProductsListPage() {
  return (
    <CartVisibilityProvider>
      <CartProvider>
        <Navbar />
        <div className="relative">
          <Cart />
          <CategoriesProvider>
            <SelectedCategoryProvider>
              <div className="grid h-full gap-2 lg:grid-cols-[auto_1fr]">
                <Sidebar />
                <ProductsList />
              </div>
            </SelectedCategoryProvider>
          </CategoriesProvider>
        </div>
      </CartProvider>
    </CartVisibilityProvider>
  );
}
