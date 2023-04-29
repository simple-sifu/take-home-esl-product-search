/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
import "../styles/ProductCarousel.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [data, error] = useSelector((state) => [state.products.data]);
  console.log("ProductCarousel -> data", data, ", data.length =", data.length);
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
      {data.length > 0 &&
        data.slice(startIndex, endIndex).map((product) => (
          <div className="product-card" key={product.name}>
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

export default ProductCarousel;
