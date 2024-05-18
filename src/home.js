import React from 'react';
import './home.css';
import AboutMe from './aboutMe'; // Import AboutMe component
import Skills from './skills'; // Import Skills component
import Contact from './contact'; // Import Contact component
import Portfolio from './portfolio'; // Import Portfolio component
import Projects from './projects'; // Import Projects component (newly created)


function Home() {
  // ... (rest of your code)

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Grace Deng</h1> {/* Replace with your name or logo */}
      </header>
      <main className="home-main">
        <AboutMe />
        <Skills />
        <Portfolio /> {/* Add Portfolio component */}
        <Projects /> {/* Add Projects component */}
        <Contact />
        {/* Add more sections as needed */}
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 Grace Lee. All rights reserved.</p>
        {/* Add social media links here */}
      </footer>
    </div>
  );
}

export default Home;
