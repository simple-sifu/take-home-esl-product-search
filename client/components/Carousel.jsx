import "../styles/ProductCarousel.scss";
import React, { useState } from "react";

function Carousel({ data }) {
  const [startIndex, setStartIndex] = useState(0);

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
      {data.slice(startIndex, endIndex).map((product) => (
        <div className="product-card" key={product._id}>
          <img src={product.picture} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
      <button
        onClick={handleNextClick}
        disabled={startIndex === data.length - 3}
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
