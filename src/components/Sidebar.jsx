import { useEffect, useState } from "react";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="top-0 max-h-screen w-full space-y-2 bg-zinc-50 p-4 lg:sticky lg:w-64 lg:shadow-lg">
      <details>
        <summary className="text-xl font-bold">Filters</summary>
        <details className="rounded-xl bg-zinc-100 open:bg-zinc-200">
          <summary className="cursor-pointer rounded-xl p-4 text-lg hover:bg-zinc-200">
            Categories
          </summary>
          <ul className="px-2">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {categories.map((category) => (
              <li
                key={category.name}
                className="rounded-xl p-2 hover:bg-zinc-400"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </details>
      </details>
    </div>
  );
}
