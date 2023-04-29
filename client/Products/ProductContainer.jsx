import { useSelector } from "react-redux";
import React from "react";
import "../styles/ProductContainer.scss";
import { Link } from "react-router-dom";

export default function ProductContainer({
  emptySearchBar,
  showSearchContainer,
}) {
  const { data, error } = useSelector((state) => state.products);

  function closeSearchPanel() {
    showSearchContainer();
  }

  return (
    <React.Fragment>
      {error && <h1>{error}</h1>}
      {!error && data.length !== 0 && !emptySearchBar && (
        <div>
          <hr />
          <div className="results">
            Displaying {data.length > 4 ? 4 : data.length} out of {data.length}{" "}
            results.
            <span>
              <Link to="/display" onClick={closeSearchPanel}>
                See all Results.
              </Link>
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
