import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const [socialLinksOpen, setSocialLinksOpen] = useState(false);

  const toggleSocialLinks = () => {
    setSocialLinksOpen(!socialLinksOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright-container">
          <p className="copyright">&copy; {year} Charles Deng</p>
        </div>
        <div className="social-links-container">
          <button
            className={`social-toggle ${socialLinksOpen ? 'open' : ''}`}
            onClick={toggleSocialLinks}
          >
            <i className="fas fa-share"></i> Connect
          </button>
          <ul className={`social-links ${socialLinksOpen ? 'visible' : ''}`}>
            <li>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
