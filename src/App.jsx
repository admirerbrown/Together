import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCauseData } from "./Redux/homeSlice";
import { ToastContainer } from "react-toastify";
import NavBar from "./Components/navBar";
import HomePage from "./Components/home/homepage";
import Causes from "./Components/causes/allCauses";
import Donate from "./Components/causes/donatePage";
import Footer from "./Components/footer";
import ContactPage from "./Components/contactPage/contact";
import EventPage from "./Components/events";
import AboutUsPage from "./Components/aboutUs/aboutPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCauseData());
  });

  return (
    <>
      <ToastContainer />

      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-causes" element={<Causes />} />
        <Route path="/donate/cause_id/:id" element={<Donate />} />
        <Route path="/contact_us" element={<ContactPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
