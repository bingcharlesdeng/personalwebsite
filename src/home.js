import React from 'react';
import AboutMe from './aboutMe'; // Import AboutMe component
import Skills from './skills'; // Import Skills component
import Contact from './contact'; // Import Contact component
import Portfolio from './portfolio'; // Import Portfolio component
import Projects from './projects'; // Import Projects component
import './home.css'; // Import stylesheet for customization
import useImagePath from "./useImagePath";
function Home() {
  const imgUrl = useImagePath('corgi.png');
  return (
    <section className="home">
      {/* Hero Section */}
      <header className="home-hero">
        <div className="hero-content">
          <h1>Charles Deng</h1> {/* Replace with your name or logo */}
          <p>
            {/* A concise and impactful tagline summarizing what you do */}
            I'm a passionate developer and designer crafting creative solutions.
          </p>
          <button className="hero-btn">Let's Connect!</button> {/* Replace with link to contact */}
        </div>
        <div className="hero-image"> {/* Add an image or video background */}
          {/* Replace with your preferred image/video */}
          {/*<img src={imgUrl} alt="Hero Image" /> */}
        </div>
      </header>

      {/* Main Content Section */}
      <main className="home-main">
        <AboutMe />
        <Skills />
        <Portfolio />
        <Projects />
      </main>

      {/* Contact Section */}
      <Contact /> {/* Consider adding a fixed contact bar at the bottom */}
    </section>
  );
}

export default Home;
