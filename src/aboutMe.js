import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling
import useImagePath from './useImagePath.js';
function AboutMe() {
  const profilePicLink = useImagePath("profilePic.jpg");
  const aboutMeText = (
    <p>
      I am a highly motivated and results-oriented individual with a strong background in doing drugs. I am skilled in spending money and always eager to learn and grow in my field. I am currently spending time working on myself and not dying due to any form of complications.
    </p>
  );

  return (
    <section className="about-me">
      <h2 className="about-me__heading">About Me</h2>

      {/* Add a profile picture (optional) */}
      <img src={profilePicLink} alt="Your Profile Picture" className="about-me__profile-pic" />

      <div className="about-me__content">{aboutMeText}</div>

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
