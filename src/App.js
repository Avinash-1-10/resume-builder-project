import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyResumes from "./pages/myResumes/MyResumes";
import AboutUs from "./pages/aboutUs/AboutUs";
import DetailFilling from "./pages/DetailFilling";
import Navbar from "./components/common/navbar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Route for home Page */}
          <Route path="/" element={<Home />} />

          {/* Route for Detail Filling Component */}
          <Route path="/detail-filling" element={<DetailFilling />} />

          {/* Route for My Resumes Page */}
          <Route path="/my-resumes" element={<MyResumes />} />

          {/* Route for About Us Page */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
