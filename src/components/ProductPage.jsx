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
          <Cart />
          <Navbar></Navbar>

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}

          <section className="grid w-full grid-cols-12 p-6">
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
                  {product.images.length > 1 ? (
                    <>
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
                    </>
                  ) : null}
                </div>
              ) : (
                <p>No images available</p>
              )}
            </div>
            <div className="col-span-7 space-y-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <h2 className="text-sm font-bold text-zinc-600">
                  {product.brand}
                </h2>
              </div>
              <p className="max-w-[60ch] text-pretty">{product.description}</p>
            </div>
            <div className="col-span-2 flex flex-col justify-between self-start rounded-2xl bg-zinc-100 p-6">
              <h3>${product.price}</h3>
              {product.stock > 0 ? <p>In stock!</p> : <p>Out of stock</p>}
              <AddToCartButton product={product} />
            </div>
          </section>

          <section className="flex flex-col gap-4 p-6">
            <h2 className="text-xl font-bold">Reviews</h2>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="flex flex-col gap-2 border-b-2">
                  <div className="flex gap-2">
                    <span>{review.rating}/5</span>
                    <div>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <i key={i} className="fa fa-star text-yellow-400"></i>
                      ))}
                      {Array.from({ length: 5 - review.rating }).map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                    </div>
                  </div>

                  <p className="text-lg font-bold">{review.comment}</p>
                  <p className="text-sm font-bold text-zinc-600">
                    {review.reviewerName}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </section>
        </CartProvider>
      </CartVisibilityProvider>
    </>
  );
}
