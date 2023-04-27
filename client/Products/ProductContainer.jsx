import { useSelector } from "react-redux";
import React from "react";
import "../styles/ProductContainer.scss";

export default function ProductContainer() {
  const { data, error } = useSelector((state) => state.products);

  return (
    <React.Fragment>
      {error && <h3>{error}</h3>}
      {!error && data.length !== 0 && (
        <div>
          <hr />
          <div className="results">
            Displaying 4 out of {data.length} results.
            <span>
              <a href="#">See all Results.</a>
            </span>
          </div>
          <hr />
          <div className="productContainer">
            {data.slice(0, 4).map((product) => {
              return (
                <div className="productCard" key={product._id}>
                  <img height="200px" width="100px" src={product.picture} />
                  <div key={product._id}>{product.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
