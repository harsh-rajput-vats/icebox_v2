import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Navbar from "../src/components/NavBar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Generate from "./pages/Generate/Generate";
import AfterGen from "./pages/AfterGen/aftergen";
import Datasets from "./pages/Datasets/Datasets"

function App() {

  return (
    <Router>
      <div className="viewport">
        <div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
        <div>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main_content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/generate/" element={<Generate />} />
              <Route path="/aftergen/" element={<AfterGen />} />
              <Route path="/datasets/" element={<Datasets />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );

}
export default App;