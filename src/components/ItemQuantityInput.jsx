import CartContext from "../contexts/CartContext";
import { useState, useContext } from "react";
import PropTypes from "prop-types";

export function ItemQuantityInput({ product }) {
  const [cart, setCart] = useContext(CartContext);

  const [inputWidth, setInputWidth] = useState(1);

  const totalInStock = product.stock;
  const cartQuantity =
    cart.find((item) => item.id === product.id)?.quantity || 0;

  function handleQuantityInput(event) {
    event.preventDefault();

    const input = event.target.value;

    // Allow the field to remain temporarily empty
    if (input === "") {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: "" } : item,
        ),
      );
      setInputWidth(1); // Adjust input width for empty field
      return;
    }

    const quantity = parseInt(input, 10);

    // Prevent invalid or negative quantities
    if (isNaN(quantity) || quantity < 0) {
      return;
    }

    // Prevent quantity from exceeding stock
    if (quantity > totalInStock) {
      return;
    }

    // Update the cart with the valid quantity
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity } : item,
      ),
    );
    setInputWidth(input.length); // Adjust input width dynamically
  }

  function handleQuantityBlur() {
    // Remove the item if the field is left empty on blur
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== product.id || item.quantity !== ""),
    );
  }

  return (
    <input
      size={inputWidth}
      onClick={(e) => e.preventDefault()}
      onChange={handleQuantityInput}
      onBlur={handleQuantityBlur}
      value={cartQuantity || 0}
      className="rounded-full text-center"
    />
  );
}

ItemQuantityInput.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};
