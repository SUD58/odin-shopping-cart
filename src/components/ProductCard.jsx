import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center justify-center border-2 p-4">
      <img src={product.images[0]} alt="" className="w-24" />
      <h1>{product.title}</h1>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
