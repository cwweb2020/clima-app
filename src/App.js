import React from "react";
import ShareDataProvider from "./context/DataContext";
import "./styles/base.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <ShareDataProvider>
        <main>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/mas-notas" element={<Nosotros />} /> */}
            </Routes>
          </BrowserRouter>
        </main>
      </ShareDataProvider>
    </>
  );
};

export default App;
