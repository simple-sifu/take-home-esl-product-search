import React from "react";
// import ProductComponent from "./Products/ProductComponent";
import { Provider } from "react-redux";
import store from "./common/store";
import "./styles/menu.scss";
import Menu from "./Menu";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu />
      </div>
    </Provider>
  );
}
export default App;
