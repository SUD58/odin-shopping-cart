import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex justify-between bg-black p-4 text-white">
      <h1 className="text-2xl">Logo</h1>
      <div className="flex gap-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-zinc-600 p-2 hover:bg-zinc-700"
              : "rounded-md p-2 hover:bg-zinc-700"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-zinc-600 p-2 hover:bg-zinc-700"
              : "rounded-md p-2 hover:bg-zinc-700"
          }
          to="/products"
        >
          Shop
        </NavLink>
      </div>
    </nav>
  );
}
