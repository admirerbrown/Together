import "./App.css";
import NavBar from "./Components/navBar";
import HomePage from "./Components/homepage";
import Footer from "./Components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar ></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
