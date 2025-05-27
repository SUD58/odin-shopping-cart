import { CartItem } from "./CartItem";
import CartContext from "../contexts/CartContext";
import { useContext, useRef, useState, useLayoutEffect } from "react";
import CartVisibilityContext from "../contexts/CartVisibilityContext";

export default function Cart() {
  const [isCartVisible, setIsCartVisible] = useContext(CartVisibilityContext);

  const [cart, setCart] = useContext(CartContext);
  const isCartEmpty = cart.length === 0;

  const cartRef = useRef(null);
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

  useLayoutEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click originated from the Navbar's cart button
      const navbarCartButton = document.querySelector("#navbar-cart-button");
      if (navbarCartButton && navbarCartButton.contains(event.target)) {
        return; // Ignore clicks from the Navbar's cart button
      }

      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        event.target.tagName !== "BUTTON" &&
        event.target.tagName !== "INPUT" &&
        isCartVisible
      ) {
        setIsCartVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartVisible, setIsCartVisible]);

  return (
    <>
      <div
        ref={cartRef}
        className={`fixed right-0 top-[4.5rem] z-50 flex w-80 flex-col gap-4 rounded-bl-2xl bg-zinc-50 p-4 shadow-lg transition-transform duration-300 ${
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
            <div className="flex items-center justify-between">
              {cart.length === 1 ? (
                <p className="font-bold">{cart.length} item in cart!</p>
              ) : (
                <p className="font-bold">{cart.length} items in cart!</p>
              )}
              <button
                onClick={() => setCart([])}
                className="group flex items-center self-end rounded-lg bg-red-400 p-2 text-white transition-colors duration-300 hover:bg-red-600"
              >
                <i className="fas fa-trash-alt transition-[padding] duration-300 group-hover:pr-2"></i>
                <span className="max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-24">
                  Empty Cart
                </span>
              </button>
            </div>

            <ul
              ref={cartListRef}
              className="no-scrollbar flex flex-col gap-3 overflow-y-scroll"
              style={{
                maxHeight: cartListHeight,
              }}
            >
              {cart.map((item) => (
                <CartItem key={item.id} product={item} />
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
            <button className="self-stretch rounded-full bg-green-500 p-4 font-bold text-white hover:bg-green-700">
              Place Order
            </button>
          </>
        )}
      </div>
    </>
  );
}
