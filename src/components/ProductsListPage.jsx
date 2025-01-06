import { Navbar } from "./Navbar";
import ProductsList from "./ProductsList";
import Sidebar from "./Sidebar";

export default function ProductsListPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 lg:flex-row">
        <Sidebar />
        <ProductsList />
      </div>
    </>
  );
}
