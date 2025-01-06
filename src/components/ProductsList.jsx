import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
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
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="grid grow grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
