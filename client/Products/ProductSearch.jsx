import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./ProductSlice";
import "../styles/productSearch.scss";
import ProductContainer from "./ProductContainer";

export default function ProductSearch({ showingSearch, showSearchContainer }) {
  const [, setSearchValue] = React.useState("");
  const dispatch = useDispatch();

  function onSearch(e) {
    setSearchValue(e.target.value);
    dispatch(getProducts(e.target.value));
  }

  return (
    <div className={(showingSearch ? "showing " : "") + "search-container"}>
      <input
        type="text"
        data-tooltip="hello World"
        onChange={(e) => onSearch(e)}
      />
      <a href="#" onClick={() => showSearchContainer()}>
        <i className="material-icons close">close</i>
      </a>
      <ProductContainer />
    </div>
  );
}
