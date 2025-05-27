import { useContext } from "react";
import SelectedCategoryContext from "../contexts/SelectedCategoryContext";
import CategoriesContext from "../contexts/CategoriesContext";

export default function Sidebar() {
  const [categories] = useContext(CategoriesContext);
  const [selectedCategory, setSelectedCategory] = useContext(
    SelectedCategoryContext,
  );

  function handleCategorySelection(category) {
    setSelectedCategory((prev) =>
      prev === category.slug ? "" : category.slug,
    );
  }

  return (
    <div className="no-scrollbar top-0 w-full space-y-2 overflow-y-scroll overscroll-contain p-4 lg:sticky lg:top-[4.5rem] lg:h-[calc(100vh-4.5rem)] lg:w-64 lg:shadow-2xl">
      <details className="rounded-xl transition-colors open:bg-zinc-200 active:bg-zinc-400">
        <summary className="cursor-pointer rounded-xl p-4 text-lg font-bold transition-colors hover:bg-zinc-200 active:bg-zinc-400">
          Categories
        </summary>
        <ul className="h-32 space-y-2 overflow-y-auto p-2 lg:h-auto">
          {categories.map((category) => (
            <li
              onClick={() => handleCategorySelection(category)}
              key={category.slug}
              className={`flex cursor-pointer items-center gap-2 rounded-xl px-2 py-1 ${
                selectedCategory === category.slug
                  ? "bg-green-500 text-white hover:bg-green-700"
                  : "transition-colors hover:bg-zinc-300"
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
    </div>
  );
}
