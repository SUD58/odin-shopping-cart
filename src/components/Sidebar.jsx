import { useContext, useEffect, useState } from "react";
import CategoryContext from "../contexts/CategoryContext";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useContext(CategoryContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleCategorySelection(category) {
    category.slug === selectedCategory
      ? setSelectedCategory("")
      : setSelectedCategory(category.slug);
  }

  return (
    <div className="top-0 w-full space-y-2 overflow-y-scroll bg-zinc-100 p-4 lg:sticky lg:h-screen lg:w-64 lg:shadow-2xl">
      <details>
        <summary className="cursor-pointer text-xl font-bold">Filters</summary>
        <details className="rounded-xl bg-zinc-100 open:bg-zinc-200">
          <summary className="cursor-pointer rounded-xl p-4 text-lg hover:bg-zinc-200">
            Categories
          </summary>
          <ul className="h-32 space-y-2 overflow-y-scroll px-2 lg:h-auto">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {categories.map((category) => (
              <li
                onClick={() => handleCategorySelection(category)}
                key={category.slug}
                className={`flex cursor-pointer items-center gap-2 rounded-xl px-2 py-1 ${
                  selectedCategory === category.slug
                    ? "bg-green-500 text-white hover:bg-green-700"
                    : "hover:bg-zinc-300"
                }`}
              >
                {selectedCategory === category.slug && (
                  <i className="fas fas fa-check"></i>
                )}
                {category.name}
              </li>
            ))}
          </ul>
        </details>
      </details>
    </div>
  );
}
