import { useSelector } from "react-redux";
import { useMemo } from "react";
import React from "react";
import "../styles/ProductContainer.scss";

export default function ProductContainer() {
  const { isLoading, data, error } = useSelector((state) => state.products);

  const dataSubset = useMemo(() => {
    return data.slice(0, 4).map((product) => {
      return (
        <div className="productCard" key={product._id}>
          <img height="200px" width="100px" src={product.picture} />
          <div key={product._id}>{product.name}</div>
        </div>
      );
    });
  });

  return (
    <React.Fragment>
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!error && !isLoading && data.length !== 0 && (
        <div>
          <hr />
          <div className="results">
            Displaying 4 out of {data.length} results.
            <span>
              <a href="#">See all Results.</a>
            </span>
          </div>
          <hr />
          <div className="productContainer">{dataSubset}</div>
        </div>
      )}
    </React.Fragment>
  );
}
