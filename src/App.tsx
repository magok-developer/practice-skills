import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ScrollEvent from "./components/ScrollEvent";
import IntersectionObserver from "./components/IntersectionObserver";
import AutoComplete from "./components/AutoComplete";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/scrollevent' element={<ScrollEvent />} />
      <Route path='/intersectionobserver' element={<IntersectionObserver />} />
      <Route path='/autocomplete' element={<AutoComplete />} />
    </Routes>
  );
}

export default App;
