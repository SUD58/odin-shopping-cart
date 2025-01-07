import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { CartProvider } from "../contexts/CartContext";
import { CartVisibilityProvider } from "../contexts/CartVisibilityContext";
import Cart from "./Cart";
import { AddToCartButton } from "./AddToCartButton";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // Handle scrolling to the previous image
  const scrollToPrevious = () => {
    if (imageContainerRef.current) {
      const container = imageContainerRef.current;
      const currentScroll = container.scrollLeft;
      container.scrollLeft = currentScroll - container.offsetWidth;
    }
  };

  // Handle scrolling to the next image
  const scrollToNext = () => {
    if (imageContainerRef.current) {
      const container = imageContainerRef.current;
      const currentScroll = container.scrollLeft;
      container.scrollLeft = currentScroll + container.offsetWidth;
    }
  };

  return (
    <>
      <CartVisibilityProvider>
        <CartProvider>
          <Navbar></Navbar>
          <Cart />

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}

          <div className="grid w-full grid-cols-12 p-6">
            <div className="relative col-span-3">
              {product.images && product.images.length > 0 ? (
                <div
                  ref={imageContainerRef}
                  className="flex snap-x snap-mandatory overflow-x-scroll scroll-smooth"
                >
                  {product.images.map((image, index) => (
                    <div key={index} className="relative min-w-full">
                      <img
                        id={`image-${index}`}
                        src={image}
                        alt={`Product Image ${index + 1}`}
                        className="min-w-full snap-center snap-always"
                      />
                    </div>
                  ))}
                  <button
                    onClick={scrollToPrevious}
                    className="absolute left-0 top-1/2"
                  >
                    <i className="fas fa-chevron-circle-left fa-2xl"></i>
                  </button>
                  <button
                    onClick={scrollToNext}
                    className="absolute right-0 top-1/2"
                  >
                    <i className="fas fa-chevron-circle-right fa-2xl"></i>
                  </button>
                </div>
              ) : (
                <p>No images available</p>
              )}
            </div>

            <div className="col-span-7">
              <h1>{product.title}</h1>
              <h2>{product.brand}</h2>
              <p>{product.description}</p>
            </div>

            <div className="col-span-2 rounded-2xl bg-zinc-100">
              <AddToCartButton product={product} />
            </div>
          </div>
        </CartProvider>
      </CartVisibilityProvider>
    </>
  );
}
