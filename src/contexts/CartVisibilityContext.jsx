import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartVisibilityContext = createContext();

export function CartVisibilityProvider({ children }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <CartVisibilityContext.Provider value={[isCartVisible, setIsCartVisible]}>
      {children}
    </CartVisibilityContext.Provider>
  );
}

export default CartVisibilityContext;

CartVisibilityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
