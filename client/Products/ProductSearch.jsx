import React, { useEffect } from "react";
import "../styles/ProductSearch.scss";
import ProductContainer from "./ProductContainer";
import { useSearch } from "../common/ContextProvider";
import { useDispatch } from "react-redux";
import { getProducts } from "./ProductSlice";

export default function ProductSearch() {
  const {
    showingSearch,
    toggleSearchContainer,
    searchValue,
    setIsSearchBarEmpty,
    setSearchValue,
    handleKeyDown,
  } = useSearch();

  const dispatch = useDispatch();

  useEffect(() => {
    setIsSearchBarEmpty(searchValue.trim() === "" ? true : false);
  }, [searchValue]);

  function onSearch(e) {
    setSearchValue(e.target.value);
    dispatch(getProducts(e.target.value));
  }

  return (
    <div className={(showingSearch ? "showing " : "") + "search-container"}>
      <input
        type="text"
        onChange={(e) => onSearch(e)}
        value={searchValue}
        onKeyDown={handleKeyDown}
      />
      <a href="#" onClick={() => toggleSearchContainer()}>
        <i className="material-icons close">close</i>
      </a>
      <ProductContainer />
    </div>
  );
}
