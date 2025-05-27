import ProductsList from "./ProductsList";
import Sidebar from "./Sidebar";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function ProductsListPage() {
  return (
    <>
      <ScrollToTop />
      <div className="relative">
        <div className="grid h-full gap-2 bg-white lg:grid-cols-[auto_1fr]">
          <Sidebar />
          <ProductsList />
        </div>
        <Footer />
      </div>
    </>
  );
}
