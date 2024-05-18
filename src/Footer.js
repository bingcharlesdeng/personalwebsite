import React from 'react';
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} Charles Deng</p>
       {/* <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Social</a></li>
          </ul>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;
