import { useContext } from "react";
import CartContext from "../contexts/CartContext";

export function CartItem({ item }) {
  const [cart, setCart] = useContext(CartContext);

  function removeFromCart() {
    setCart((prevCart) => prevCart.filter((product) => product.id !== item.id));
  }

  return (
    <li className="flex items-center justify-between rounded-lg bg-zinc-200 p-4">
      <div className="flex flex-col gap-2">
        <p className="max-w-32 text-pretty">{item.title}</p>
        <p>${item.price}</p>
      </div>
      <p>{item.quantity}</p>
      <button onClick={removeFromCart}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
}
