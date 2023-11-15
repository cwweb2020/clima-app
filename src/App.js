import React from "react";
import "./styles/base.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { FaMagnifyingGlass } from "react-icons/fa6";

const App = () => {
  return (
    <>
      <main>
        <BrowserRouter>
          <div className="title-app">
            <h4>Clima App</h4>
            <FaMagnifyingGlass />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/mas-notas" element={<Nosotros />} /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
