import React from "react";
import { Provider } from "react-redux";
import store from "./common/store";
import NavBar from "./NavBar/NavBar";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./common/ContextProvider";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ContextProvider>
          <NavBar />
        </ContextProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default App;
