import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartVisibilityContext from "../contexts/CartVisibilityContext";
import CartContext from "../contexts/CartContext";

export function Navbar() {
  const [, setIsCartVisible] = useContext(CartVisibilityContext);
  const [cart] = useContext(CartContext);
  const isCartEmpty = cart.length === 0;

  return (
    <nav className="flex justify-between bg-black p-4 text-white">
      <NavLink to="/" className="text-2xl">
        Logo
      </NavLink>
      <ul className="flex gap-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-zinc-600 p-2"
              : "rounded-md p-2 hover:bg-zinc-700"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-zinc-600 p-2"
              : "rounded-md p-2 hover:bg-zinc-700"
          }
          to="/products"
        >
          Shop
        </NavLink>
        <button
          onClick={() => setIsCartVisible((prev) => !prev)}
          className="relative flex items-center justify-center rounded-md px-4 hover:bg-zinc-700"
        >
          <i
            className={`${isCartEmpty ? "text-white" : "text-green-500"} fa-solid fa-shopping-cart fa-lg`}
          ></i>
          {!isCartEmpty ? (
            <p className="absolute right-0 top-0 flex aspect-square items-center justify-center rounded-full bg-green-500 p-0.5 px-2 text-xs">
              {cart.length}
            </p>
          ) : null}
        </button>
      </ul>
    </nav>
  );
}
