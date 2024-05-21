import React from 'react';
import AboutMe from './aboutMe'; // Import AboutMe component
import Skills from './skills'; // Import Skills component
import Contact from './contact'; // Import Contact component
import Portfolio from './portfolio'; // Import Portfolio component
import Projects from './projects'; // Import Projects component
import Hero from './Hero'; // Import newly created Hero component
import './home.css'; // Import stylesheet for customization

function Home() {
  return (
    <section className="home">
      {/* Hero Section */}
      

      {/* Main Content Section */}
      <main className="home-main">
        <Hero />
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
