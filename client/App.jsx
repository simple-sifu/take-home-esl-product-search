import React from "react";
import NavBar from "./NavBar/NavBar";
import Home from "./Pages/Home";
import Display from "./Pages/Display";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/SearchContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}
export default App;
