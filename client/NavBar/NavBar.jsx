import React from "react";
import "../styles/NavBar.scss";
import ProductSearch from "../Products/ProductSearch";
import { Link } from "react-router-dom";
import { useSearch } from "../common/ContextProvider";

export default function NavBar() {
  const { hideSearchContainer, toggleSearchContainer } = useSearch();

  return (
    <header className="menu full-screen-header">
      <div className="menu-container">
        <div className="menu-holder">
          <Link to="/" onClick={hideSearchContainer}>
            <h1>ELC</h1>
          </Link>
          <nav>
            <a href="#" className="nav-item">
              HOLIDAY
            </a>
            <a href="#" className="nav-item">
              WHAT'S NEW
            </a>
            <a href="#" className="nav-item">
              PRODUCTS
            </a>
            <a href="#" className="nav-item">
              BESTSELLERS
            </a>
            <a href="#" className="nav-item">
              GOODBYES
            </a>
            <a href="#" className="nav-item">
              STORES
            </a>
            <a href="#" className="nav-item">
              INSPIRATION
            </a>

            <a href="#" onClick={() => toggleSearchContainer()}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <ProductSearch />
    </header>
  );
}
