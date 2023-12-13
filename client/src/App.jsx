import "./App.css";
import NavBar from "./Components/navBar";
import HomePage from "./Components/home/homepage";
import Causes from "./Components/causes/allCauses";
import Footer from "./Components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar ></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-causes" element={<Causes />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
