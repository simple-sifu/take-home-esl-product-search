import React from "react";
import "../../styles/ProductContainer.scss";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContextProvider";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

export default function ProductContainer({ searchTerms }) {
  const [dataReturned, setDataReturned] = useState([]);
  const searchValue = searchTerms ? searchTerms : "";
  const Product_API_URL =
    process.env.REACT_APP_PRODUCT_API_CONFIG + searchValue;
  const { data, error } = useFetch(Product_API_URL);
  const { isSearchBarEmpty, toggleSearchContainer, setData, setError } =
    useSearch();
  console.log("ProductContainer data=", data);
  React.useEffect(() => {
    if (data?.data) {
      setData(data.data);
      setError(error);
      setDataReturned(data.data);
    }
  }, [data]);

  return (
    <React.Fragment>
      {error && <h1>{error}</h1>}
      {!error &&
        dataReturned &&
        dataReturned.length !== 0 &&
        !isSearchBarEmpty && (
          <div>
            <hr />
            <div className="results">
              Displaying {dataReturned.length > 4 ? 4 : dataReturned.length} out
              of {dataReturned.length}
              results.
              <span>
                <Link to="/display" onClick={toggleSearchContainer}>
                  See all Results.
                </Link>
              </span>
            </div>
            <hr />
            <div className="productContainer">
              {dataReturned.slice(0, 4).map((product) => {
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
