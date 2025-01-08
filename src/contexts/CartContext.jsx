import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("Odin Cart Items");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Filter out invalid cart items before saving to localStorage
    const validCart = cart.filter(
      (item) => item.quantity && !isNaN(item.quantity),
    );

    if (validCart.length > 0) {
      localStorage.setItem("Odin Cart Items", JSON.stringify(validCart));
    } else {
      localStorage.removeItem("Odin Cart Items");
    }
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
