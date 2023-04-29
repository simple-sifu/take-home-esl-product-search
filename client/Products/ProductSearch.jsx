import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./ProductSlice";
import "../styles/ProductSearch.scss";
import ProductContainer from "./ProductContainer";
import { useNavigate } from "react-router-dom";

export default function ProductSearch({
  showingSearch,
  showSearchContainer,
  searchValue,
  setSearchValue,
}) {
  const navigate = useNavigate();
  const [emptySearchBar, setEmptySearchBar] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setEmptySearchBar(searchValue.trim() === "" ? true : false);
  }, [searchValue]);

  function onSearch(e) {
    setSearchValue(e.target.value);
    dispatch(getProducts(e.target.value));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      showSearchContainer();
      navigate("/display");
    }
  }

  return (
    <div className={(showingSearch ? "showing " : "") + "search-container"}>
      <input
        type="text"
        onChange={(e) => onSearch(e)}
        value={searchValue}
        onKeyDown={handleKeyDown}
      />
      <a href="#" onClick={() => showSearchContainer()}>
        <i className="material-icons close">close</i>
      </a>
      <ProductContainer
        emptySearchBar={emptySearchBar}
        showSearchContainer={showSearchContainer}
      />
    </div>
  );
}
