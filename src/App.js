// File: App.js
// Student Name: Rexy Sara Raju
// Student ID: 301514637
// Date: Sept 2025

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css"; // Import CSS file

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav>
        {/* Logo */}
        <div className="logo">
          RSR Portfolio
        </div>

        {/* Navigation Links */}
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
