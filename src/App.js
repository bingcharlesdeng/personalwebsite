import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Import Header component
import Home from './home.js'; // Import Home component
import Footer from './Footer.js'; // Import Footer component
import About from './about.js'; // Import About component (new)
import Contact from './contact.js'; // Import Contact component (new)
import "./App.css";


function App() {
  return (
    <Router className="entire-app">
      <div className="main-content"> {/* Wrap main content */}
        <Header /> 

      <Routes>
        {['/home', '/personalwebsite', '/'].map(path => <Route path={path} element={<Home />} />)}

        <Route path="/about" element={<About />} />  {/* About route (new) */}
        <Route path="/contact" element={<Contact />} />  {/* Contact route (new) */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;