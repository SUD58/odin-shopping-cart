import { ItemQuantityInput } from "./ItemQuantityInput";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import PropTypes from "prop-types";

export function CartItem({ product }) {
  const [, setCart] = useContext(CartContext);

  function removeFromCart() {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }

  return (
    <li className="flex items-center justify-between rounded-lg bg-zinc-200 p-4">
      <img src={product.thumbnail} alt="" className="w-12" />
      <div className="flex flex-col gap-2">
        <p className="max-w-32 text-pretty">{product.title}</p>
        <p className="font-bold">
          <span>
            <ItemQuantityInput product={product} /> x
          </span>{" "}
          <span className="text-zinc-600">${product.price}</span>
        </p>
      </div>
      <button
        onClick={removeFromCart}
        className="flex aspect-square items-center justify-center self-start rounded-lg bg-red-400 p-2 hover:bg-red-600"
      >
        <i className="fa-solid fa-xmark text-white"></i>
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
