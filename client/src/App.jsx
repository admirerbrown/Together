import "./App.css";
import NavBar from "./Components/navBar";
import HomePage from "./Components/homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar ></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
