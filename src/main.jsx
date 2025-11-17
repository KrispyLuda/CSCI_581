import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

import Header from "./header.jsx";
import Footer from "./footer.jsx";

import Project1 from "./project1.jsx";
import Project2 from "./project2.jsx";
import Project3 from "./Project3.jsx";



// import Project2 from "./Project2.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
      </Routes>
      <Footer />

    </Router>
  </React.StrictMode>
  
);
