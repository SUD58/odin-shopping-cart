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
    <>
      <div className="grid grow grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 self-start p-4">
        {productsList.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default ProductsList;
