import "./App.css";
import NavBar from "./Components/navBar";
import HomePage from "./Components/home/homepage";
import Causes from "./Components/causes/allCauses";
import Donate from "./Components/causes/donatePage";
import Footer from "./Components/footer";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCauseData } from "./Redux/homeSlice";


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCauseData());
  }, );


  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-causes" element={<Causes />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
