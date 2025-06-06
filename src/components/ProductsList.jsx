import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import SelectedCategoryContext from "../contexts/SelectedCategoryContext";

function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedCategory] = useContext(SelectedCategoryContext);

  useEffect(() => {
    setLoading(true); // Ensure loading starts before any fetch

    const fetchUrl = selectedCategory
      ? `https://dummyjson.com/products/category/${selectedCategory}`
      : `https://dummyjson.com/products`;

    fetch(fetchUrl)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error(
            selectedCategory
              ? "Error fetching products for category"
              : "Error fetching all products",
          );
        }
        return response.json();
      })
      .then((data) => {
        setProductsList(data.products);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Ensure loading ends after fetch
      });
  }, [selectedCategory]);

  function kebabToTitle(kebabStr) {
    return kebabStr
      .split("-") // Split the string at the hyphen
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words back with a space
  }

  if (loading) {
    return (
      <p className="flex items-center justify-center text-3xl font-bold">
        Loading...
      </p>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">
        {selectedCategory
          ? `${kebabToTitle(selectedCategory)} Products`
          : "All Products"}
      </h1>
      {productsList.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grow grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-4 self-start">
          {/* Mapping over products and rendering ProductCard */}
          {productsList.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
