import React, { useState } from "react";
import ProductComponent from "./Products/ProductComponent";
import { Provider } from "react-redux";
import store from "./common/store";
import "./styles/menu.scss";

function App() {
  const [showingSearch, setShowingSearch] = useState(false);

  function showSearchContainer() {
    console.log("showSearchContainer showingSearch=", showingSearch);
    setShowingSearch(() => !showingSearch);
  }

  function onSearch(e) {
    console.log("searching..... value=", e.target.value);
  }

  console.log("app: showingSearch=", showingSearch);
  return (
    <Provider store={store}>
      <div className="App">
        <ProductComponent />
      </div>
    </Provider>
  );
}
export default App;

// nav
// sales-content
