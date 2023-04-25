import { useSelector } from "react-redux";
import React from "react";
import "./productContainer.scss";

export default function ProductContainer() {
  const { isLoading, data, error } = useSelector((state) => state.products);

  const dataSubset = data.slice(0, 4).map((product) => {
    return (
      <div className="productCard" key={product._id}>
        <img height="200px" width="150px" src={product.picture} />
        <div key={product._id}>{product.name}</div>
      </div>
    );
  });

  return (
    <React.Fragment>
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!error && !isLoading && (
        <div className="productContainer">{dataSubset}</div>
      )}
    </React.Fragment>
  );
}
