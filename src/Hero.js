import React from 'react';
import './Hero.css'; // Import stylesheet for Hero component

const Hero = () => {
  return (
    <header className="home-hero">
      <div className="hero-content">
        <h1>Charles Deng</h1> {/* Replace with your name or logo */}
        <p>
          {/* A concise and impactful tagline summarizing what you do */}
          I'm a passionate developer and designer crafting creative solutions.
        </p>
      </div>
      <div className="hero-image"> {/* Add an image or video background */}
        {/* Replace with your preferred image/video */}
        {/*<img src={imgUrl} alt="Hero Image" /> */}
      </div>
    </header>
  );
};

export default Hero;
