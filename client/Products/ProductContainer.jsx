import { useSelector } from "react-redux";
import React from "react";

export default function ProductContainer() {
  const { isLoading, data, error } = useSelector((state) => state.products);

  return (
    <React.Fragment>
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!error &&
        !isLoading &&
        data.map((product, index) => {
          const productPicture = product.picture.replace("/img", "../assets");
          return (
            <div className="productCard" key={product._id}>
              <img src={productPicture} />
              <div key={product._id}>{product.name}</div>
            </div>
          );
        })}
    </React.Fragment>
  );
}
