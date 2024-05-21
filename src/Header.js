import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './header.css'; // Import styles

const Header = () => {
  return (
    <header className="header">
      {/* Logo or Title */}
      <div className="header-title">
        {/* Optionally, add a website title or logo */}
        {/* <img src={Logo} alt="Your Website Logo" className="logo" />  */}
        {/* <h1>Your Website Title</h1> */}
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <ul className="navigation-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          {/* Add more links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
