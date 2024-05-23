import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header'; // Import Header component
import Home from './home.js'; // Import Home component
import Footer from './Footer.js'; // Import Footer component
import About from './about.js'; // Import About component
import Contact from './contact.js'; // Import Contact component

import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Header component */}
      <div className="main-content"> {/* Wrap main content */}
     {/* Header component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* About route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
