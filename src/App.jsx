import Cart from "./components/Cart";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <>
      <div className="grid h-screen auto-rows-max">
        {/* <Navbar /> */}
        <HomePage />
      </div>
      <div className="relative">
        <Cart />
      </div>
    </>
  );
}

export default App;
