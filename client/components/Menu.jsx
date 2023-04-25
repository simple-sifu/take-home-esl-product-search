import React, { useState } from "react";
import "../styles/menu.scss";
import ProductSearch from "../Products/ProductSearch";

export default function Menu() {
  const [showingSearch, setShowingSearch] = useState(false);

  function showSearchContainer() {
    setShowingSearch(() => !showingSearch);
  }

  return (
    <header className="menu full-screen-header">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
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

            <a href="#" onClick={() => showSearchContainer()}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <ProductSearch
        showingSearch={showingSearch}
        showSearchContainer={showSearchContainer}
      />
    </header>
  );
}
