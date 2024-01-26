import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollEvent from "./ScrollEvent";
import IntersectionObserver from "./IntersectionObserver";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scrollevent' element={<ScrollEvent />} />
        <Route
          path='/intersectionobserver'
          element={<IntersectionObserver />}
        />
      </Routes>
    </>
  );
}

export default App;
