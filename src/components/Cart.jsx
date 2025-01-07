import { CartItem } from "./CartItem";
import CartContext from "../contexts/CartContext";
import { useContext, useRef, useState, useLayoutEffect } from "react";
import CartVisibilityContext from "../contexts/CartVisibilityContext";

export default function Cart() {
  const [isCartVisible, setIsCartVisible] = useContext(CartVisibilityContext);

  const [cart, setCart] = useContext(CartContext);
  const isCartEmpty = cart.length === 0;

  const cartListRef = useRef(null);
  const [cartListHeight, setCartListHeight] = useState(null);

  useLayoutEffect(() => {
    if (cartListRef.current) {
      const childHeight = cartListRef.current.children[0].offsetHeight;
      if (cart.length > 3) {
        setCartListHeight(`${childHeight * 4.5}px`);
      }
    }
  }, [cart]);

  return (
    <>
      <div
        className={`fixed right-0 top-0 flex w-80 flex-col gap-4 rounded-bl-2xl bg-zinc-50 p-4 shadow-lg transition-transform duration-300 ${
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
          <>
            <button
              onClick={() => setCart([])}
              className="group flex items-center self-end rounded-lg bg-red-400 p-2 text-white"
            >
              <i className="fas fa-trash-alt transition-[padding] duration-300 group-hover:pr-2"></i>
              <span className="max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-24">
                Empty Cart
              </span>
            </button>

            <ul
              ref={cartListRef}
              className="flex flex-col gap-3 overflow-y-scroll p-4"
              style={{
                maxHeight: cartListHeight,
              }}
            >
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="flex justify-between">
              <h3 className="font-bold">Total</h3>
              <p className="font-bold">
                $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )
                  .toFixed(2)}
              </p>
            </div>
            <button className="self-stretch rounded-full bg-green-500 p-4 font-bold text-white">
              Place Order
            </button>
          </>
        )}
      </div>
    </>
  );
}
