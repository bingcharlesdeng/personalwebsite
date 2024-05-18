import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "./header.css"; // Import styles

const Header = () => {
  return (
    <header className="header">
      {/* Logo or Title */}
      <div className="header-title">
        { /*  Optional commented-out code for logo image */}
        {/*<img src={Logo} alt="Your Website Logo" style={{ width: '100%' }} /> */}
        {/* Optionally, you can add your website title beside the logo */}
        {/* <h1>Your Website Title</h1> */}
      </div>
      <nav className="navigation">
        <ul className="navigation-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;