import { CartItem } from "./CartItem";
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
        className={`fixed right-0 top-0 flex h-screen w-80 flex-col gap-4 bg-zinc-50 p-4 shadow-lg transition-transform duration-300 ${
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
          <ul className="flex flex-col gap-3 p-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        )}
        <div className="flex justify-between">
          <h3 className="font-bold">Total</h3>
          <p className="font-bold">
            $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
        <button className="self-stretch rounded-full bg-green-500 p-4 font-bold text-white">
          Place Order
        </button>
      </div>
    </>
  );
}
