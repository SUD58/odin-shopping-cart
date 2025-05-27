// Layout.jsx
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import Cart from "./Cart";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Cart />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
