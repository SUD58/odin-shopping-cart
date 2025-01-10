import { Footer } from "./Footer";
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
    <div className="z-10 snap-y snap-mandatory snap-end scroll-smooth">
      <section className="flex h-screen flex-col justify-center gap-8 bg-[linear-gradient(to_left,rgba(0,0,0,0),rgba(0,0,0,0.5)),url('/src/assets/pexels-olly-974911.jpg')] bg-cover p-8 text-white lg:p-32">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Shop Smarter, Live Easier!</h1>
          <h2 className="text-balance text-xl lg:w-[40ch]">
            Discover the best deals on top-quality products, tailored just for
            you.
          </h2>
        </div>
        <Link
          to={"/products"}
          className="self-start bg-green-500 p-4 font-bold transition-colors hover:bg-green-700"
        >
          Shop Now
        </Link>
      </section>

      <section className="sticky bottom-0 -z-10 snap-end bg-white lg:p-16">
        <h3 className="inline-block border-b-4 border-green-500 pb-1 text-xl font-bold">
          Shop by Category
        </h3>
        <div className="flex h-32 flex-col flex-wrap items-start justify-center">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => {
                handleCategorySelection(category);
              }}
              className="transition-colors hover:text-green-500"
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
