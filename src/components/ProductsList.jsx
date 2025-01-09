import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import CategoryContext from "../contexts/CategoryContext";

function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [category] = useContext(CategoryContext);

  useEffect(() => {
    !category
      ? fetch(`https://dummyjson.com/products`)
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
          })
      : setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
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
  }, [category]);

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
