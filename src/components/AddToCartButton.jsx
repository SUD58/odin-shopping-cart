import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { ItemQuantityInput } from "./ItemQuantityInput";

export function AddToCartButton({ product }) {
  const [cart, setCart] = useContext(CartContext);

  const isInCart = cart.find((item) => item.id === product.id);
  const totalInStock = product.stock;
  const isOutOfStock = totalInStock === 0;
  const cartQuantity =
    cart.find((item) => item.id === product.id)?.quantity || 0;

  function handleAddToCart(event) {
    event.preventDefault();
    setCart((prevCart) => [
      ...prevCart,
      {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      },
    ]);
  }

  function handleIncrement(event) {
    event.preventDefault();
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function handleDecrement(event) {
    event.preventDefault();
    if (cartQuantity === 1) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  }

  return (
    <>
      {!isInCart && (
        <button
          disabled={isOutOfStock}
          onClick={handleAddToCart}
          className="min-w-2/5 flex items-center justify-center rounded-full bg-green-500 px-2 py-3 font-bold text-white hover:bg-green-700 active:bg-green-900 disabled:bg-zinc-400 disabled:hover:bg-zinc-400"
        >
          Add to Cart
        </button>
      )}
      {isInCart && (
        <div className="min-w-2/5 flex items-center justify-between gap-2 rounded-full border-2 border-green-500 p-1">
          <button
            onClick={handleDecrement}
            className="fa-solid fa-minus flex aspect-square items-center justify-center rounded-full border-2 border-green-500 p-2 text-black hover:bg-green-500 hover:text-white active:border-green-700 active:bg-green-700"
          ></button>
          <ItemQuantityInput product={product} />
          <button
            disabled={cartQuantity >= totalInStock}
            onClick={handleIncrement}
            className="fa-solid fa-plus flex aspect-square items-center justify-center rounded-full border-2 border-green-500 p-2 text-black hover:bg-green-500 hover:text-white active:border-green-700 active:bg-green-700 disabled:cursor-not-allowed disabled:border-zinc-400 disabled:bg-zinc-400 disabled:hover:text-black"
          ></button>
        </div>
      )}
    </>
  );
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};
