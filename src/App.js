import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Import Header component
import Home from './home.js'; // Import Home component
import Footer from './Footer.js'; // Import Footer component
import About from './about.js'; // Import About component (new)
import Contact from './contact.js'; // Import Contact component (new)
import "./app.css";


function App() {
  return (
    <Router>
      <Header /> {/* Render Header component */}
      <div className="main-content"> {/* Wrap main content */}

      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="/about" element={<About />} />  {/* About route (new) */}
        <Route path="/contact" element={<Contact />} />  {/* Contact route (new) */}
      </Routes>
      <Footer /> {/* Render Footer component at the bottom */}
      </div>
    </Router>
  );
}

export default App;