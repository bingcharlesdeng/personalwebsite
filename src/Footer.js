import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const [socialLinksOpen, setSocialLinksOpen] = useState(false);

  // const toggleSocialLinks = () => {
  //   setSocialLinksOpen(!socialLinksOpen);
  // };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright-container">
          <p className="copyright">&copy; {year} Charles Deng</p>
        </div>
        <div className="social-links-container">
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
