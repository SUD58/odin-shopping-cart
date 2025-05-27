import { AddToCartButton } from "./AddToCartButton";
import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-shadow hover:shadow-md">
      <img src={product.images[0]} alt="" className="h-48" />
      <h1 className="text-lg">{product.title}</h1>
      <p className="font-bold">${product.price}</p>
      <AddToCartButton product={product} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
