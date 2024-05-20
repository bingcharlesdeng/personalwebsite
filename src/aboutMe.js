import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling
import useImagePath from './useImagePath.js';
import AboutMeText from './aboutMeText.js'; // Import the new component
import './AboutMe.css';

function AboutMe() {
  const profilePicLink = useImagePath("profilePic.jpg");

  return (
    <section className="about-me">
      <h2 className="about-me__heading">About Me</h2>

      {/* Add a profile picture (optional) */}
      <img src={profilePicLink} alt="Your Profile Picture" className="about-me__profile-pic" />

      <div className="about-me__content">
        {/* Use the AboutMeText component here */}
        <AboutMeText /> 
      </div>

      {/* Add links to your portfolio or social media (optional) */}
      <div className="about-me__links">
        <a href="https://yourportfolio.com">Portfolio</a>
        <a href="https://www.linkedin.com/in/charlesxdeng/">LinkedIn</a>
        {/* Add additional links as needed */}
      </div>
    </section>
  );
}

export default AboutMe;
