import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        {/* Add your website title or logo here */}
  
      </Link>
      <nav className="navigation">
        {/* Added a new element for navigation links */}
        <div className="navigation-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
