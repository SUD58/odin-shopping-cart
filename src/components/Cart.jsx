import CartContext from "../contexts/CartContext";
import { useContext } from "react";
import CartVisibilityContext from "../contexts/CartVisibilityContext";

export default function Cart() {
  const [isCartVisible, setIsCartVisible] = useContext(CartVisibilityContext);

  const [cart] = useContext(CartContext);
  const isCartEmpty = cart.length === 0;

  return (
    <>
      <div
        className={`absolute right-0 top-0 h-screen w-80 bg-zinc-50 p-4 shadow-lg transition-transform duration-300 ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsCartVisible((prev) => !prev)}
            className="flex items-center justify-center p-4"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <h2 className="p-4 text-xl font-bold">Cart</h2>
        </div>
        {isCartEmpty ? (
          <h1>Cart is empty!</h1>
        ) : (
          <ul className="p-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-2"
              >
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
