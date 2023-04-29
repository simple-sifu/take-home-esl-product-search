import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./ProductSlice";
import "../styles/ProductSearch.scss";
import ProductContainer from "./ProductContainer";
import { useNavigate } from "react-router-dom";

export default function ProductSearch({
  showingSearch,
  toggleSearchContainer,
  searchValue,
  setSearchValue,
}) {
  const navigate = useNavigate();
  const [isSearchBarEmpty, setIsSearchBarEmpty] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsSearchBarEmpty(searchValue.trim() === "" ? true : false);
  }, [searchValue]);

  function onSearch(e) {
    setSearchValue(e.target.value);
    dispatch(getProducts(e.target.value));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      toggleSearchContainer();
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
      <a href="#" onClick={() => toggleSearchContainer()}>
        <i className="material-icons close">close</i>
      </a>
      <ProductContainer
        isSearchBarEmpty={isSearchBarEmpty}
        toggleSearchContainer={toggleSearchContainer}
      />
    </div>
  );
}
