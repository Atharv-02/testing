import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Emergency from "./Emergency";
import Explore from "./Explore";
import Motivation from "./Motivation";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/motivation' element={<Motivation />} />
          <Route path='/emergency' element={<Emergency />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
