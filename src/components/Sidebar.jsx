import { useContext, useEffect, useState } from "react";
import SelectedCategoryContext from "../contexts/SelectedCategoryContext";
import CategoriesContext from "../contexts/CategoriesContext";

export default function Sidebar() {
  const [categories] = useContext(CategoriesContext);
  const [selectedCategory, setSelectedCategory] = useContext(
    SelectedCategoryContext,
  );

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
