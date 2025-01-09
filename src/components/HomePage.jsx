import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CategoriesContext from "../contexts/CategoriesContext";
import SelectedCategoryContext from "../contexts/SelectedCategoryContext";

export function HomePage() {
  const [categories] = useContext(CategoriesContext);
  const [, setSelectedCategory] = useContext(SelectedCategoryContext);

  const navigate = useNavigate();

  function handleCategorySelection(category) {
    setSelectedCategory((prev) =>
      prev === category.slug ? "" : category.slug,
    );
    navigate("/products");
  }

  return (
    <>
      <section className="flex h-screen flex-col justify-center gap-8 bg-black p-8 text-white lg:p-32">
        <div>
          <h1 className="text-4xl font-bold">Shop Smarter, Live Easier!</h1>
          <h2 className="text-balance text-xl lg:w-[40ch]">
            Discover the best deals on top-quality products, tailored just for
            you.
          </h2>
        </div>
        <Link
          to={"/products"}
          className="self-start bg-green-500 p-4 font-bold"
        >
          Shop Now
        </Link>
      </section>

      <section className="">
        <h3 className="text-xl font-bold">Shop by Category</h3>
        <div className="flex h-32 flex-col flex-wrap items-start justify-center">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => {
                handleCategorySelection(category);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
