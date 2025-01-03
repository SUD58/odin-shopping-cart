import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="flex justify-between bg-black p-4 text-white">
        <h1 className="text-2xl">Logo</h1>
        <div className="flex gap-4">
          <Link className="p-2 hover:bg-zinc-700" to="/">
            Home
          </Link>
          <Link className="p-2 hover:bg-zinc-700" to="products">
            Shop
          </Link>
        </div>
      </nav>
    </>
  );
}

export default App;
