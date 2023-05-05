import React from "react";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import { SearchContextProvider } from "./context/SearchContextProvider";

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </SearchContextProvider>
    </div>
  );
}
export default App;
