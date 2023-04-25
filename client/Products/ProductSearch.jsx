import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./ProductSlice";

export default function ProductSearch({ showingSearch, showSearchContainer }) {
  const [searchValue, setSearchValue] = React.useState("");

  const { isLoading, data, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function onSearch(e) {
    console.log("searching..... value=", e.target.value);
    const searchWord = e.target.value;
    setSearchValue(searchWord);

    if (e.target.value.length > 2) {
      console.log("searching..... value3=", e.target.value);
      dispatch(getProducts(e.target.value));
    }
  }

  return (
    <div className={(showingSearch ? "showing " : "") + "search-container"}>
      <input type="text" onChange={(e) => onSearch(e)} />
      <a href="#" onClick={() => showSearchContainer()}>
        <i className="material-icons close">close</i>
      </a>
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!error &&
        !isLoading &&
        data.map((product, index) => (
          <div key={product.name + index}>{product.name}</div>
        ))}
    </div>
  );
}
