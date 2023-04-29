import "../styles/ProductCarousel.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [data, error] = useSelector((state) => [state.products.data]);

  const endIndex = startIndex + 3;

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + 1, data.length - 3));
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick} disabled={startIndex === 0}>
        Prev
      </button>
      {!error &&
        data &&
        data.slice(startIndex, endIndex).map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.picture} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      {!data && (
        <div>
          <h1>No Products Found</h1>
        </div>
      )}
      <button
        onClick={handleNextClick}
        disabled={startIndex === data.length - 3}
      >
        Next
      </button>
    </div>
  );
}

export default ProductCarousel;
