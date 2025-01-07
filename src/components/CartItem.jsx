import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import PropTypes from "prop-types";

export function CartItem({ item }) {
  const [, setCart] = useContext(CartContext);

  function removeFromCart() {
    setCart((prevCart) => prevCart.filter((product) => product.id !== item.id));
  }

  return (
    <li className="flex items-center justify-between rounded-lg bg-zinc-200 p-4">
      <img src={item.thumbnail} alt="" className="w-12" />
      <div className="flex flex-col gap-2">
        <p className="max-w-32 text-pretty">{item.title}</p>
        <p className="font-bold">
          {item.quantity}x <span className="text-zinc-600">${item.price}</span>
        </p>
      </div>
      <button onClick={removeFromCart}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }),
};
