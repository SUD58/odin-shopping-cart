import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import PropTypes from "prop-types";

export function CartItem({ product }) {
  const [cart, setCart] = useContext(CartContext);
  const [inputWidth, setInputWidth] = useState(1);

  const totalInStock = product.stock;
  const cartQuantity =
    cart.find((item) => item.id === product.id)?.quantity || 0;

  function removeFromCart() {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }

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
    <li className="flex items-center justify-between rounded-lg bg-zinc-200 p-4">
      <img src={product.thumbnail} alt="" className="w-12" />
      <div className="flex flex-col gap-2">
        <p className="max-w-32 text-pretty">{product.title}</p>
        <p className="font-bold">
          <span>
            <input
              size={inputWidth}
              onChange={handleQuantityInput}
              onBlur={handleQuantityBlur}
              value={cartQuantity || 0}
              className="rounded-full text-center"
            />{" "}
            x
          </span>{" "}
          <span className="text-zinc-600">${product.price}</span>
        </p>
      </div>
      <button onClick={removeFromCart}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};
